import type { Metadata } from 'next'
import { BuildYourDeal } from '@/components/build-your-deal'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Manifest } from '@/components/manifest'
import { AcquisitionPaths, Container, Lead, ProseSection, Principal } from '@/components/content'
import { AutoDealerJsonLd } from '@/components/json-ld'
import { byRegion } from '@/lib/deliveries'

export const metadata: Metadata = {
  title: 'Luxury & Exotic Car Leasing in Fort Lauderdale, FL',
  description:
    'Independent luxury and exotic car brokerage serving Fort Lauderdale, Miami and Palm Beach. Sourcing, leasing, financing and Florida registration, delivered to you.',
  alternates: { canonical: '/fort-lauderdale/' },
}

export default function FortLauderdalePage() {
  const rows = byRegion('fl')

  return (
    <>
      <AutoDealerJsonLd region="fl" />
      <Breadcrumbs items={[{ label: 'Fort Lauderdale', href: '/fort-lauderdale/' }]} />
      <Container className="py-14">
          <p className="font-data text-xs uppercase tracking-wider text-muted-foreground">
            Fort Lauderdale &middot; Miami &middot; Palm Beach
          </p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-tight md:text-6xl">
            Luxury and Exotic Car Leasing in Fort Lauderdale
          </h1>
          <div className="mt-8">
            <Lead>
              We serve Fort Lauderdale, Miami, Boca Raton and Palm Beach. Same operation as our New
              York office: we source the car, structure the deal, handle Florida titling and
              registration, and deliver it.
            </Lead>
          </div>

          <ProseSection heading="What is different about South Florida">
            <p>
              The market here moves faster and the cars are different. More convertibles, more
              exotics driven year-round rather than stored, and a much larger secondary market —
              which cuts both ways. There is more supply, and there are more cars with histories
              worth checking carefully before you buy.
            </p>
            <p>
              We arrange marque-specialist inspection on anything pre-owned. A Ferrari gets a Ferrari
              technician, not a general shop.
            </p>
          </ProseSection>

          <ProseSection heading="Florida registration and titling">
            <p>
              Florida titling is more straightforward than New York, and the tax treatment differs.
              If you are buying here and registering here, it is simple. If you are moving a car
              between Florida and another state, or titling to an out-of-state entity, it is not, and
              getting it wrong is expensive to unwind.
            </p>
          </ProseSection>

          <ProseSection heading="The two-state garage">
            <p>
              Plenty of our clients run cars in both New York and South Florida — often something
              practical up north and something they only drive down here.
            </p>
            <p>
              Nobody else is set up for that. Most brokerages are in one market and hand you off to a
              stranger for the other. We handle both, which means one conversation about where each
              car should be titled and what happens when one of them travels.
            </p>
          </ProseSection>
        </Container>

        <section aria-labelledby="fl-delivered" className="border-t border-foreground">
          <Container className="py-16">
            <h2 id="fl-delivered" className="font-display text-3xl md:text-4xl">
              Delivered in South Florida
            </h2>
            <div className="mt-8">
              <Manifest
                rows={rows}
                footer="Days counted from first inquiry to keys in hand. Not from contract signature."
                viewAllHref="/deliveries/"
              />
            </div>
          </Container>
        </section>

        <AcquisitionPaths />

        <section aria-labelledby="fl-principal" className="border-t border-foreground">
          <Container className="py-16">
            <h2 id="fl-principal" className="mb-8 font-display text-3xl md:text-4xl">
              The principal
            </h2>
            <Principal />
          </Container>
        </section>

        <BuildYourDeal />
    </>
  )
}
