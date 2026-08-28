/**
 * Luxurious, on-brand HTML email templates for OTO Motors.
 * Pure string builders — no external deps, safe to run on the server.
 *
 * Palette mirrors the site: near-black canvas, champagne accents,
 * serif display headings. Everything is inlined + table-based so it
 * renders in Gmail, Apple Mail, Outlook, and mobile clients.
 */

export type LeadEmailData = {
  brand: string
  specNotes: string
  acquisition: string
  term: string
  miles: string
  down: string
  budget: string
  timing: string
  leaseEndDate: string
  hasTrade: string
  tradeYear: string
  tradeMake: string
  tradeModel: string
  region: string
  name: string
  phone: string
  email: string
  // meta
  submittedAt: string // human-readable, prepared by caller
  sourceUrl?: string
}

// ── palette ──────────────────────────────────────────────
const C = {
  bg: '#0a0a0c',
  panel: '#121216',
  panelSoft: '#17171c',
  line: '#26262b',
  text: '#edeae3',
  muted: '#84848d',
  champagne: '#c8a96a',
  champagneLight: '#e8d5a4',
}

// Content-ID for the inline logo attachment. The route attaches
// public/logo.png under this id; the HTML references it as `cid:<LOGO_CID>`.
export const LOGO_CID = 'oto-logo'

const SERIF = "'Georgia','Times New Roman',serif"
const SANS =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
const MONO = "'SFMono-Regular',Menlo,Consolas,'Liberation Mono',monospace"

export function escapeHtml(input: string): string {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ── shared chrome ────────────────────────────────────────
function wordmark(logoCid?: string): string {
  const glyph = logoCid
    ? `<img src="cid:${logoCid}" width="28" height="28" alt="OTO Motors" style="display:inline-block;vertical-align:middle;margin-right:11px;border:0;outline:none;text-decoration:none;" />`
    : ''
  return `
    <span style="font-family:${SERIF};font-size:15px;letter-spacing:0.28em;color:${C.text};">
      ${glyph}<span style="vertical-align:middle;">OTO&nbsp;<span style="color:${C.champagne};">MOTORS</span></span>
    </span>`
}

function shell(inner: string, preheader: string, logoCid?: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>OTO Motors</title>
</head>
<body style="margin:0;padding:0;background:${C.bg};">
  <span style="display:none!important;opacity:0;color:transparent;visibility:hidden;height:0;width:0;overflow:hidden;">${escapeHtml(
    preheader,
  )}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:${C.panel};border:1px solid ${C.line};">
          <!-- header -->
          <tr>
            <td style="padding:22px 32px;border-bottom:1px solid ${C.line};">
              ${wordmark(logoCid)}
            </td>
          </tr>
          ${inner}
        </table>
        <!-- sub-footer -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;">
          <tr>
            <td style="padding:20px 32px;text-align:center;font-family:${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${C.muted};">
              OTO Motors LLC · New York · South Florida
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function eyebrow(text: string): string {
  return `<div style="font-family:${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${C.champagne};">${escapeHtml(
    text,
  )}</div>`
}

// A single label/value row inside a section
function row(label: string, value?: string): string {
  if (!value || !String(value).trim()) return ''
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${C.line};vertical-align:top;width:38%;font-family:${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${C.muted};">${escapeHtml(
        label,
      )}</td>
      <td style="padding:14px 0;border-bottom:1px solid ${C.line};vertical-align:top;font-family:${SANS};font-size:14px;line-height:1.5;color:${C.text};">${escapeHtml(
        value,
      )}</td>
    </tr>`
}

// Highlighted free-text block — the client's own words about the car.
function quoteBlock(title: string, notes: string): string {
  if (!notes || !notes.trim()) return ''
  return `
    <tr><td style="padding:26px 32px 0 32px;">
      ${eyebrow(title)}
      <div style="margin-top:12px;border-left:2px solid ${C.champagne};background:${C.panelSoft};padding:16px 18px;font-family:${SERIF};font-size:16px;line-height:1.6;color:${C.text};font-style:italic;">
        &ldquo;${escapeHtml(notes)}&rdquo;
      </div>
    </td></tr>`
}

function section(title: string, rows: string): string {
  const body = rows.trim()
  if (!body) return ''
  return `
    <tr><td style="padding:26px 32px 0 32px;">${eyebrow(title)}</td></tr>
    <tr><td style="padding:8px 32px 0 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${body}</table>
    </td></tr>`
}

function primaryButton(href: string, label: string): string {
  return `<a href="${escapeHtml(
    href,
  )}" style="display:inline-block;background:${C.champagne};color:#0a0a0c;font-family:${MONO};font-size:11px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;padding:14px 26px;">${escapeHtml(
    label,
  )}</a>`
}

// ── helpers to compose derived strings ───────────────────
function tradeSummary(d: LeadEmailData): string {
  if (d.hasTrade !== 'Yes') return d.hasTrade || ''
  const car = [d.tradeYear, d.tradeMake, d.tradeModel].filter(Boolean).join(' ')
  return car ? `Yes — ${car}` : 'Yes'
}

function structureRows(d: LeadEmailData): string {
  return (
    row('Acquisition', d.acquisition) +
    row('Term', d.term) +
    row('Miles / year', d.miles) +
    row('Money down', d.down) +
    row('Budget', d.budget)
  )
}

// ─────────────────────────────────────────────────────────
//  1) Internal lead notification (to the sales inbox)
// ─────────────────────────────────────────────────────────
export function renderLeadNotification(
  d: LeadEmailData,
  opts?: { logoCid?: string },
): {
  subject: string
  html: string
  text: string
} {
  const carLabel =
    d.brand === 'Not sure yet — help me choose' ? 'an undecided build' : d.brand
  const subject = `New lead — ${d.name || 'Unknown'} · ${d.brand || 'Vehicle TBD'}`

  const inner = `
    <tr>
      <td style="padding:34px 32px 0 32px;">
        ${eyebrow('New Build Your Deal lead')}
        <h1 style="margin:16px 0 0 0;font-family:${SERIF};font-weight:400;font-size:30px;line-height:1.1;color:${C.text};">
          ${escapeHtml(d.name || 'New enquiry')}
        </h1>
        <p style="margin:12px 0 0 0;font-family:${SANS};font-size:14px;line-height:1.6;color:${C.muted};">
          Wants ${escapeHtml(carLabel)} · ${escapeHtml(
            d.acquisition || 'path TBD',
          )} · ${escapeHtml(d.timing || 'timing TBD')}
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding:24px 32px 0 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.panelSoft};border:1px solid ${C.line};">
          <tr>
            <td style="padding:18px 22px;">
              <div style="font-family:${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${C.champagne};margin-bottom:10px;">Reach them</div>
              <div style="font-family:${SANS};font-size:16px;color:${C.text};line-height:1.7;">
                ${
                  d.phone
                    ? `<a href="tel:${escapeHtml(
                        d.phone.replace(/[^\d+]/g, ''),
                      )}" style="color:${C.text};text-decoration:none;">${escapeHtml(
                        d.phone,
                      )}</a>`
                    : '<span style="color:' + C.muted + ';">No phone</span>'
                }
                ${
                  d.email
                    ? ` &nbsp;·&nbsp; <a href="mailto:${escapeHtml(
                        d.email,
                      )}" style="color:${C.champagne};text-decoration:none;">${escapeHtml(
                        d.email,
                      )}</a>`
                    : ''
                }
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${quoteBlock('The car they want', d.specNotes)}

    ${section('Vehicle', row('Marque', d.brand))}
    ${section('Structure', structureRows(d))}
    ${section(
      'Timing',
      row('When', d.timing) + row('Lease end date', d.leaseEndDate),
    )}
    ${section('Trade-in', row('Trade', tradeSummary(d)))}
    ${section('Delivery', row('Region', d.region))}
    ${section(
      'Contact',
      row('Name', d.name) + row('Mobile', d.phone) + row('Email', d.email),
    )}

    <tr>
      <td style="padding:28px 32px 34px 32px;">
        ${
          d.email
            ? primaryButton(
                `mailto:${d.email}?subject=${encodeURIComponent(
                  'Your ' + (d.brand || 'vehicle') + ' — OTO Motors',
                )}`,
                'Reply to client',
              )
            : d.phone
              ? primaryButton(
                  `tel:${d.phone.replace(/[^\d+]/g, '')}`,
                  'Call client',
                )
              : ''
        }
        <p style="margin:22px 0 0 0;font-family:${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${C.muted};line-height:1.8;">
          Submitted ${escapeHtml(d.submittedAt)}${
            d.sourceUrl ? ` · ${escapeHtml(d.sourceUrl)}` : ''
          }
        </p>
      </td>
    </tr>`

  const text = [
    'NEW BUILD YOUR DEAL LEAD',
    '',
    `Name:        ${d.name || '—'}`,
    `Mobile:      ${d.phone || '—'}`,
    `Email:       ${d.email || '—'}`,
    '',
    `Marque:      ${d.brand || '—'}`,
    `Spec notes:  ${d.specNotes || '—'}`,
    `Acquisition: ${d.acquisition || '—'}`,
    `Term:        ${d.term || '—'}`,
    `Miles/year:  ${d.miles || '—'}`,
    `Money down:  ${d.down || '—'}`,
    `Budget:      ${d.budget || '—'}`,
    `Timing:      ${d.timing || '—'}`,
    `Lease end:   ${d.leaseEndDate || '—'}`,
    `Trade-in:    ${tradeSummary(d) || '—'}`,
    `Delivery:    ${d.region || '—'}`,
    '',
    `Submitted:   ${d.submittedAt}`,
    d.sourceUrl ? `Source:      ${d.sourceUrl}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return { subject, html: shell(inner, subject, opts?.logoCid), text }
}

// ─────────────────────────────────────────────────────────
//  2) Customer confirmation (auto-reply)
// ─────────────────────────────────────────────────────────
export function renderCustomerConfirmation(
  d: LeadEmailData,
  opts?: { logoCid?: string },
): {
  subject: string
  html: string
  text: string
} {
  const carPhrase =
    d.brand === 'Not sure yet — help me choose' ? 'your search' : d.brand
  const subject = 'We have it from here — OTO Motors'
  const preheader =
    'A specialist is pulling live availability and lender programs for you now.'

  const recapRows =
    row('Vehicle', d.brand) +
    row('Acquisition', d.acquisition) +
    row('Term', d.term) +
    row('Miles / year', d.miles) +
    row('Money down', d.down) +
    row('Budget', d.budget) +
    row('Timing', d.timing) +
    row('Lease end date', d.leaseEndDate) +
    row('Trade-in', tradeSummary(d)) +
    row('Delivery', d.region)

  const contactRows =
    row('Name', d.name) + row('Mobile', d.phone) + row('Email', d.email)

  const inner = `
    <tr>
      <td style="padding:40px 32px 0 32px;">
        ${eyebrow('Received')}
        <h1 style="margin:18px 0 0 0;font-family:${SERIF};font-weight:400;font-size:38px;line-height:1.05;color:${C.text};">
          We have it from here.
        </h1>
        <p style="margin:20px 0 0 0;font-family:${SANS};font-size:15px;line-height:1.7;color:${C.muted};">
          ${d.name ? escapeHtml(d.name.split(' ')[0]) + ', a' : 'A'} specialist is
          pulling live availability and current lender programs for
          ${escapeHtml(carPhrase || 'your vehicle')}. You&rsquo;ll get real numbers
          by text <span style="color:${C.text};">within one business hour</span> —
          not an estimate generated by a form.
        </p>
      </td>
    </tr>

    ${section('Your request', recapRows)}
    ${quoteBlock('The car you asked for', d.specNotes)}
    ${section('We’ll reach you at', contactRows)}

    <tr>
      <td style="padding:30px 32px 0 32px;">
        <p style="margin:0;font-family:${SANS};font-size:14px;line-height:1.7;color:${C.muted};">
          Need us sooner? Call
          <a href="tel:+12125550142" style="color:${C.champagne};text-decoration:none;">+1 (212) 555-0142</a>
          (New York) or
          <a href="tel:+19545550177" style="color:${C.champagne};text-decoration:none;">+1 (954) 555-0177</a>
          (Fort Lauderdale).
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding:30px 32px 40px 32px;border-top:1px solid ${C.line};margin-top:20px;">
        <p style="margin:20px 0 0 0;font-family:${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${C.muted};line-height:1.9;">
          No credit pull. No payment invented by a form.<br>
          OTO Motors is an independent vehicle brokerage. Figures are examples, not offers.
        </p>
      </td>
    </tr>`

  const textLine = (label: string, value: string) =>
    value && value.trim() ? `${(label + ':').padEnd(15)}${value}` : ''

  const text = [
    'WE HAVE IT FROM HERE — OTO MOTORS',
    '',
    `${d.name ? d.name.split(' ')[0] + ', a' : 'A'} specialist is pulling live availability and current lender programs for ${carPhrase || 'your vehicle'}.`,
    "You'll get real numbers by text within one business hour.",
    '',
    'YOUR REQUEST',
    textLine('Vehicle', d.brand),
    textLine('Acquisition', d.acquisition),
    textLine('Term', d.term),
    textLine('Miles/year', d.miles),
    textLine('Money down', d.down),
    textLine('Budget', d.budget),
    textLine('Timing', d.timing),
    textLine('Lease end', d.leaseEndDate),
    textLine('Trade-in', tradeSummary(d)),
    textLine('Delivery', d.region),
    textLine('Details', d.specNotes),
    '',
    'WE’LL REACH YOU AT',
    textLine('Name', d.name),
    textLine('Mobile', d.phone),
    textLine('Email', d.email),
    '',
    'Need us sooner? Call +1 (212) 555-0142 (NY) or +1 (954) 555-0177 (FL).',
    '',
    'OTO Motors is an independent vehicle brokerage. Figures are examples, not offers.',
  ]
    .filter(Boolean)
    .join('\n')

  return { subject, html: shell(inner, preheader, opts?.logoCid), text }
}
