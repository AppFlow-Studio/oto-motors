import type { Metadata } from 'next'
import { BuildYourDeal } from '@/components/build-your-deal'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Container } from '@/components/content'
import { DeliveriesExplorer } from './deliveries-explorer'
import { allDeliveries } from '@/lib/deliveries'
import { MARQUES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Every Delivery We Have Made — Full Manifest',
  description:
    'The complete record: every luxury and exotic car we have placed, how long each took from first inquiry to keys in hand, and where it came from. Filterable by marque, year and location.',
  alternates: { canonical: '/deliveries/' },
}

export default function DeliveriesPage() {
  const rows = allDeliveries()

  return (
    <>
      <Breadcrumbs items={[{ label: 'Deliveries', href: '/deliveries/' }]} />
      <Container className="py-14">
          <p className="font-data text-xs uppercase tracking-wider text-muted-foreground">
            The record
          </p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-tight md:text-6xl">
            Every car we have placed
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90">
            How long each took, from first inquiry to keys in hand, and where it came from. Not from
            contract signature. Filter by marque, year or delivery region.
          </p>
        </Container>

        <Container className="pb-16">
          <DeliveriesExplorer
            rows={rows}
            marques={MARQUES.map((m) => ({ slug: m.slug, name: m.name }))}
          />
        </Container>

        <BuildYourDeal />
    </>
  )
}
