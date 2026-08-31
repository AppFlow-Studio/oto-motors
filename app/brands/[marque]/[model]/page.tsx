import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AcquisitionPaths, Container, Lead, ProseSection } from '@/components/content'
import { Manifest } from '@/components/manifest'
import { BuildYourDeal } from '@/components/build-your-deal'
import { AutoDealerJsonLd, FaqJsonLd } from '@/components/json-ld'
import { MODELS, getMarque, getModel } from '@/lib/site'
import { byModel, medianDays } from '@/lib/deliveries'

export function generateStaticParams() {
  return MODELS.map((m) => ({ marque: m.brandSlug, model: m.modelSlug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ marque: string; model: string }>
}): Promise<Metadata> {
  const { marque, model } = await params
  const m = getModel(marque, model)
  if (!m) return {}
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/brands/${m.brandSlug}/${m.modelSlug}/` },
    openGraph: { title: m.title, description: m.description },
  }
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ marque: string; model: string }>
}) {
  const { marque, model } = await params
  const m = getModel(marque, model)
  if (!m) notFound()
  const brand = getMarque(m.brandSlug)

  const rows = byModel(m.match)
  const faq = [
    {
      question: `How long does it take to get a ${m.name}?`,
      answer: `Our recorded ${m.name} deliveries have run a median of ${rows.length ? medianDays(rows) : medianDays()} days from first inquiry to keys in hand. The full record, with sourcing location and elapsed days for each car, is published below.`,
    },
    {
      question: `Do you mark up the price of a ${m.name}?`,
      answer: `No. We are an independent brokerage and charge a transparent fee for sourcing and structuring the deal. We do not add a dealer markup on top of the car.`,
    },
    {
      question: `Can I lease a ${m.name} through an LLC?`,
      answer: `Yes. We structure business leases and purchases and title to your entity. Titling to an LLC does not by itself create a deduction — business use does — and we assemble the documentation lenders require before it holds up the car.`,
    },
  ]

  return (
    <>
      <AutoDealerJsonLd />
      <FaqJsonLd qa={faq} />
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Brands', href: '/brands/' },
            { label: brand?.name ?? m.brandSlug, href: `/brands/${m.brandSlug}/` },
            { label: m.name },
          ]}
        />
        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
          {m.h1}
        </h1>
        <div className="mt-8">
          <Lead>{m.description}</Lead>
        </div>

        {brand ? (
          <ProseSection heading="How allocation actually works">
            <p>{brand.constraint}</p>
          </ProseSection>
        ) : null}

        <ProseSection heading={`Every ${m.name} we have placed`}>
          <p>
            {rows.length > 0
              ? `${rows.length} on the record, median ${medianDays(rows)} days from inquiry to delivery. No composites, no representative examples — the actual cars.`
              : `Nothing on the public record for this model yet. When we place one, it appears here.`}
          </p>
        </ProseSection>
        <div className="max-w-none">
          <Manifest
            rows={rows}
            viewAllHref="/deliveries/"
            emptyMessage={`No ${m.name} deliveries recorded yet. The record only shows cars we have actually placed.`}
          />
        </div>

        <ProseSection heading="Common questions">
          <dl className="not-prose divide-y divide-foreground/30 border-t border-foreground">
            {faq.map((item) => (
              <div key={item.question} className="py-4">
                <dt className="font-display text-lg">{item.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/90">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </ProseSection>
      </Container>

      <AcquisitionPaths />

      <BuildYourDeal heading={`Source a ${m.name}`} vehiclePrefill={m.name} />

      <Container className="pb-16">
        <Link
          href={`/brands/${m.brandSlug}/`}
          className="text-sm uppercase tracking-wider text-muted-foreground underline-offset-4 hover:underline"
        >
          &larr; All {brand?.name ?? ''} models
        </Link>
      </Container>
    </>
  )
}
