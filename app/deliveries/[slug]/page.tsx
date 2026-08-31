import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BuildYourDeal } from '@/components/build-your-deal'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Container } from '@/components/content'
import { allDeliveries, getDelivery } from '@/lib/deliveries'
import { getMarque, MODELS } from '@/lib/site'

export function generateStaticParams() {
  return allDeliveries().map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const d = getDelivery(slug)
  if (!d) return {}
  const title = `${d.year} ${d.vehicle} — Delivery Record | OTO Motors`
  return {
    title,
    description: `${d.vehicle} in ${d.spec}, sourced from ${d.sourcedFrom} and delivered to ${d.deliveredTo} in ${d.days} days from first inquiry.`,
    alternates: { canonical: `/deliveries/${d.slug}/` },
  }
}

function Row({ label, value }: { label: string; value: string }) {
  if (!value) return null
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-foreground/30 py-3 md:grid-cols-[10rem_1fr]">
      <dt className="font-data text-[0.6875rem] uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="font-data text-sm">{value}</dd>
    </div>
  )
}

export default async function DeliveryRecordPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const d = getDelivery(slug)
  if (!d) notFound()

  const marque = getMarque(d.marque)
  const model = MODELS.find(
    (m) => m.brandSlug === d.marque && d.vehicle.toLowerCase().includes(m.match.toLowerCase()),
  )
  const locationHref = d.region === 'ny' ? '/new-york/' : '/fort-lauderdale/'
  const locationLabel = d.region === 'ny' ? 'New York' : 'Fort Lauderdale'

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Deliveries', href: '/deliveries/' },
          { label: `${d.year} ${d.vehicle}`, href: `/deliveries/${d.slug}/` },
        ]}
      />
      <Container className="py-14">
          <p className="font-data text-xs uppercase tracking-wider text-muted-foreground">
            Delivery Record
          </p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-tight md:text-5xl">
            {d.vehicle}
          </h1>

          <dl className="mt-10 max-w-2xl border-t border-foreground">
            <Row label="Vehicle" value={d.vehicle} />
            <Row label="Spec" value={d.spec} />
            <Row label="Year" value={String(d.year)} />
            <Row label="Sourced" value={d.sourcedFrom} />
            <Row label="Delivered" value={d.deliveredTo} />
            <Row label="Structure" value={d.structure} />
            {d.inquiryDate ? <Row label="Inquiry" value={d.inquiryDate} /> : null}
            {d.deliveredDate ? <Row label="Delivered" value={d.deliveredDate} /> : null}
            <div className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-foreground py-3 md:grid-cols-[10rem_1fr]">
              <dt className="font-data text-[0.6875rem] uppercase tracking-wider text-muted-foreground">
                Elapsed
              </dt>
              <dd className="font-data text-sm font-semibold tnum">{d.days} days</dd>
            </div>
          </dl>

          <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90">
            {d.narrative}
          </p>

          <div className="mt-10 flex flex-wrap gap-0">
            {model ? (
              <Link
                href={`/brands/${model.brandSlug}/${model.modelSlug}/`}
                className="-ml-px border border-foreground px-5 py-2.5 font-data text-xs uppercase tracking-wider transition-colors first:ml-0 hover:bg-foreground hover:text-background"
              >
                {model.name}
              </Link>
            ) : null}
            {marque ? (
              <Link
                href={`/brands/${marque.slug}/`}
                className="-ml-px border border-foreground px-5 py-2.5 font-data text-xs uppercase tracking-wider transition-colors first:ml-0 hover:bg-foreground hover:text-background"
              >
                {marque.name}
              </Link>
            ) : null}
            <Link
              href={locationHref}
              className="-ml-px border border-foreground px-5 py-2.5 font-data text-xs uppercase tracking-wider transition-colors first:ml-0 hover:bg-foreground hover:text-background"
            >
              {locationLabel}
            </Link>
          </div>
        </Container>

        <BuildYourDeal vehiclePrefill={`${d.year} ${d.vehicle}, ${d.spec}`} />
    </>
  )
}
