import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AcquisitionPaths, Container, Lead, ProseSection } from '@/components/content'
import { Manifest } from '@/components/manifest'
import { BuildYourDeal } from '@/components/build-your-deal'
import { AutoDealerJsonLd } from '@/components/json-ld'
import { CROSSINGS, getCrossing, getMarque } from '@/lib/site'
import { byMarque, byRegion, medianDays, type Delivery } from '@/lib/deliveries'

export function generateStaticParams() {
  return CROSSINGS.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCrossing(slug)
  if (!c) return {}
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/lease/${c.slug}/` },
    openGraph: { title: c.title, description: c.description },
  }
}

export default async function CrossingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCrossing(slug)
  if (!c) notFound()
  const marque = getMarque(c.marqueSlug)

  // Intersection: this marque AND this region.
  const marqueRows = byMarque(c.marqueSlug)
  const regionSet = new Set(byRegion(c.region).map((d: Delivery) => d.slug))
  const rows = marqueRows.filter((d) => regionSet.has(d.slug))
  const fallback = rows.length === 0 ? marqueRows : rows

  return (
    <>
      <AutoDealerJsonLd region={c.region} />
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: c.region === 'ny' ? 'New York' : 'Fort Lauderdale', href: c.region === 'ny' ? '/new-york/' : '/fort-lauderdale/' },
            { label: c.h1 },
          ]}
        />
        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
          {c.h1}
        </h1>
        <div className="mt-8">
          <Lead>
            {marque?.name} leasing for clients in {c.cityName}. We source the specific car, structure
            the lease, and handle titling and registration end to end.
          </Lead>
        </div>

        {marque ? (
          <ProseSection heading="How allocation actually works">
            <p>{marque.constraint}</p>
          </ProseSection>
        ) : null}

        <ProseSection heading={`${marque?.name} deliveries near ${c.cityName}`}>
          <p>
            {rows.length > 0
              ? `${rows.length} ${marque?.name} ${rows.length === 1 ? 'car' : 'cars'} delivered in this region, median ${medianDays(rows)} days. The full record is below.`
              : `We have placed ${marque?.name} cars but not yet logged one delivered to this exact region on the public record. Below is every ${marque?.name} we have sourced.`}
          </p>
        </ProseSection>
        <div className="max-w-none">
          <Manifest
            rows={fallback}
            viewAllHref="/deliveries/"
            emptyMessage={`No ${marque?.name} deliveries recorded yet. The record only shows cars we have actually placed.`}
          />
        </div>
      </Container>

      <AcquisitionPaths />

      <BuildYourDeal heading={`Lease a ${marque?.name} in ${c.cityName}`} vehiclePrefill={marque?.name ?? ''} />

      <Container className="pb-16">
        <Link
          href={`/brands/${c.marqueSlug}/`}
          className="text-sm uppercase tracking-wider text-muted-foreground underline-offset-4 hover:underline"
        >
          &larr; All {marque?.name} deals
        </Link>
      </Container>
    </>
  )
}
