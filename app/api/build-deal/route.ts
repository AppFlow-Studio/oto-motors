import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Resend } from 'resend'
import {
  renderLeadNotification,
  renderCustomerConfirmation,
  LOGO_CID,
  type LeadEmailData,
} from '@/lib/emails'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Load the brand mark once and embed it inline (cid:) so it renders in
// every client — Gmail, Apple Mail, Outlook — with no hosted URL needed.
// public/logo.png is bundled into this function via next.config's
// outputFileTracingIncludes. Failure is non-fatal: emails still send.
const LOGO_BASE64: string | null = (() => {
  try {
    return readFileSync(join(process.cwd(), 'public', 'logo.png')).toString(
      'base64',
    )
  } catch (err) {
    console.error('[build-deal] could not read public/logo.png:', err)
    return null
  }
})()

function logoAttachment() {
  if (!LOGO_BASE64) return null
  return {
    filename: 'logo.png',
    content: LOGO_BASE64,
    contentId: LOGO_CID,
    contentType: 'image/png',
  }
}

// Known fields we accept from the Build Your Deal form. Anything else
// on the payload is ignored, and every value is coerced + length-capped.
const FIELDS = [
  'vehicle',
  'structure',
  'location',
  'timeframe',
  'name',
  'phone',
  'email',
] as const

function clean(value: unknown, max = 500): string {
  if (value == null) return ''
  return String(value).replace(/\s+/g, ' ').trim().slice(0, max)
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function formatSubmittedAt(): string {
  try {
    return (
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date()) + ' ET'
    )
  } catch {
    return new Date().toISOString()
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real users never fill this. Pretend success to bots.
  // Field is `hp_field` (not `company`) so browser autofill can't trip it.
  if (clean(body.hp_field)) {
    return Response.json({ ok: true })
  }

  // Collect + sanitize known fields
  const data = {} as Record<(typeof FIELDS)[number], string>
  for (const key of FIELDS) {
    data[key] = clean(body[key], key === 'vehicle' ? 300 : 200)
  }

  // Minimal server-side validation (mirrors the form's required fields).
  if (data.name.length < 2 || !isEmail(data.email) || data.vehicle.length < 2) {
    return Response.json(
      { ok: false, error: 'A name, a valid email, and the vehicle are required.' },
      { status: 422 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[build-deal] RESEND_API_KEY is not set')
    return Response.json(
      { ok: false, error: 'Email service is not configured.' },
      { status: 500 },
    )
  }

  const to = process.env.LEAD_TO_EMAIL || 'sales@exoticautoleasing.com'
  const from = process.env.LEAD_FROM_EMAIL || 'OTO Motors <deals@exoticautoleasing.com>'
  const bcc = clean(process.env.LEAD_BCC_EMAIL)

  // Map the lead form onto the email template's shape. Fields the form
  // doesn't collect stay empty — the template skips empty rows.
  const emailData: LeadEmailData = {
    brand: data.vehicle,
    specNotes: '',
    acquisition: data.structure,
    term: '',
    miles: '',
    down: '',
    budget: '',
    timing: data.timeframe,
    leaseEndDate: '',
    hasTrade: '',
    tradeYear: '',
    tradeMake: '',
    tradeModel: '',
    region: data.location,
    name: data.name,
    phone: data.phone,
    email: data.email,
    submittedAt: formatSubmittedAt(),
    sourceUrl:
      request.headers.get('referer') ||
      request.headers.get('origin') ||
      undefined,
  }

  const resend = new Resend(apiKey)
  const attachment = logoAttachment()
  const logoOpts = attachment ? { logoCid: LOGO_CID } : undefined
  const lead = renderLeadNotification(emailData, logoOpts)

  try {
    // 1) Internal notification — replies go straight to the client.
    const { error } = await resend.emails.send({
      from,
      to,
      subject: lead.subject,
      html: lead.html,
      text: lead.text,
      ...(emailData.email ? { replyTo: emailData.email } : {}),
      ...(bcc ? { bcc } : {}),
      ...(attachment ? { attachments: [attachment] } : {}),
    })

    if (error) {
      console.error('[build-deal] lead email failed:', error)
      return Response.json(
        { ok: false, error: 'We could not send your request. Please call us.' },
        { status: 502 },
      )
    }

    // 2) Customer confirmation — best effort, never blocks success.
    if (emailData.email) {
      const confirm = renderCustomerConfirmation(emailData, logoOpts)
      try {
        await resend.emails.send({
          from,
          to: emailData.email,
          subject: confirm.subject,
          html: confirm.html,
          text: confirm.text,
          replyTo: to,
          ...(attachment ? { attachments: [attachment] } : {}),
        })
      } catch (err) {
        console.error('[build-deal] confirmation email failed:', err)
      }
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[build-deal] unexpected error:', err)
    return Response.json(
      { ok: false, error: 'Something went wrong. Please call us.' },
      { status: 500 },
    )
  }
}
