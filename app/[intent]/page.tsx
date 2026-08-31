import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AcquisitionPaths, Container, Lead, ProseSection } from '@/components/content'
import { Manifest } from '@/components/manifest'
import { BuildYourDeal } from '@/components/build-your-deal'
import { AutoDealerJsonLd } from '@/components/json-ld'
import { INTENT_PAGES, getIntent } from '@/lib/site'
import { allDeliveries, medianDays } from '@/lib/deliveries'

export function generateStaticParams() {
  return INTENT_PAGES.map((p) => ({ intent: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ intent: string }>
}): Promise<Metadata> {
  const { intent } = await params
  const page = getIntent(intent)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}/` },
    openGraph: { title: page.title, description: page.description },
  }
}

export default async function IntentPage({
  params,
}: {
  params: Promise<{ intent: string }>
}) {
  const { intent } = await params
  const page = getIntent(intent)
  if (!page) notFound()

  const rows = allDeliveries().slice(0, 8)

  return (
    <>
      <AutoDealerJsonLd />
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: page.h1 }]} />
        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
          {page.h1}
        </h1>
        <div className="mt-8">
          <Lead>{page.body[0]}</Lead>
        </div>

        {page.body.slice(1).map((para, i) => (
          <ProseSection key={i}>
            <p>{para}</p>
          </ProseSection>
        ))}

        <ProseSection heading="The record">
          <p>
            Median delivery across every car we have placed is {medianDays()} days. This is the
            argument — not a testimonial, the actual manifest of what we have sourced and how long
            it took.
          </p>
        </ProseSection>
        <div className="max-w-none">
          <Manifest rows={rows} viewAllHref="/deliveries/" />
        </div>
      </Container>

      <AcquisitionPaths />

      <BuildYourDeal heading="Start the conversation" />
    </>
  )
}
