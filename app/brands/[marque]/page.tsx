import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AcquisitionPaths, Container, Lead, ProseSection } from '@/components/content'
import { Manifest } from '@/components/manifest'
import { AutoDealerJsonLd } from '@/components/json-ld'
import { MARQUES, MODELS, getMarque, SITE } from '@/lib/site'
import { byMarque, medianDays } from '@/lib/deliveries'

export function generateStaticParams() {
  return MARQUES.map((m) => ({ marque: m.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ marque: string }>
}): Promise<Metadata> {
  const { marque } = await params
  const m = getMarque(marque)
  if (!m) return {}
  const title = `${m.name} Leasing & Acquisition — New York & Fort Lauderdale`
  const description = `How ${m.name} allocation actually works and how an independent brokerage sources the spec you want. No dealer markup, no held inventory.`
  return {
    title,
    description,
    alternates: { canonical: `/brands/${m.slug}/` },
    openGraph: { title, description },
  }
}

export default async function BrandHub({
  params,
}: {
  params: Promise<{ marque: string }>
}) {
  const { marque } = await params
  const m = getMarque(marque)
  if (!m) notFound()

  const rows = byMarque(m.slug)
  const models = MODELS.filter((mo) => mo.brandSlug === m.slug)

  return (
    <>
      <AutoDealerJsonLd />
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Brands', href: '/brands/' },
            { label: m.name },
          ]}
        />
        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
          {m.name} Leasing &amp; Acquisition
        </h1>
        <div className="mt-8">
          <Lead>{m.constraint}</Lead>
        </div>

        {models.length > 0 ? (
          <ProseSection heading="Models we place">
            <ul className="not-prose grid gap-px border border-foreground bg-foreground sm:grid-cols-2">
              {models.map((mo) => (
                <li key={mo.modelSlug} className="bg-background">
                  <Link
                    href={`/brands/${mo.brandSlug}/${mo.modelSlug}/`}
                    className="block p-5 transition-colors hover:bg-foreground hover:text-background"
                  >
                    <span className="font-display text-xl">{mo.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </ProseSection>
        ) : null}

        <ProseSection heading="What we have placed">
          <p>
            {rows.length > 0
              ? `${rows.length} ${m.name} ${rows.length === 1 ? 'car' : 'cars'} placed, median ${medianDays(rows)} days from inquiry to delivery. Every one is on the record below.`
              : `We have not logged a ${m.name} delivery on the public record yet. When we place one, it appears here — we do not pad the manifest.`}
          </p>
        </ProseSection>
        <div className="max-w-none">
          <Manifest
            rows={rows}
            viewAllHref="/deliveries/"
            emptyMessage={`No ${m.name} deliveries recorded yet. The record only shows cars we have actually placed.`}
          />
        </div>
      </Container>

      <AcquisitionPaths />

      <section className="border-t border-foreground py-16">
        <Container>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {SITE.name} is an independent brokerage. We do not represent {m.name} and we hold no
            inventory. We source the specific car you want and handle the structure, titling, and
            delivery.
          </p>
          <div className="mt-6">
            <Link
              href="/build-your-deal/"
              className="inline-block border border-foreground px-6 py-3 text-sm uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
            >
              Build your deal
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
