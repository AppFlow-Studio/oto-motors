import type { Metadata } from 'next'
import { BuildYourDeal } from '@/components/build-your-deal'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Manifest } from '@/components/manifest'
import { AcquisitionPaths, Container, Lead, ProseSection, Principal } from '@/components/content'
import { AutoDealerJsonLd } from '@/components/json-ld'
import { byRegion } from '@/lib/deliveries'

export const metadata: Metadata = {
  title: 'Luxury & Exotic Car Leasing in New York City',
  description:
    'Independent luxury car brokerage at 200 Vesey Street, Battery Park City. Sourcing, leasing, financing and NY registration, delivered anywhere in Manhattan and the tri-state area.',
  alternates: { canonical: '/new-york/' },
}

export default function NewYorkPage() {
  const rows = byRegion('ny')

  return (
    <>
      <AutoDealerJsonLd region="ny" />
      <Breadcrumbs items={[{ label: 'New York', href: '/new-york/' }]} />
      <Container className="py-14">
          <p className="font-data text-xs uppercase tracking-wider text-muted-foreground">
            200 Vesey Street &middot; Battery Park City
          </p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-tight md:text-6xl">
            Luxury and Exotic Car Leasing in New York
          </h1>
          <div className="mt-8">
            <Lead>
              Our office is at 200 Vesey Street in Battery Park City. We source vehicles nationwide
              and deliver into Manhattan, the boroughs, Long Island, Westchester, northern New Jersey
              and Connecticut.
            </Lead>
          </div>

          <ProseSection heading="What we do here">
            <p>
              We are not a dealership and we do not hold cars. We find the specific vehicle you want,
              wherever it is, structure the lease, finance or cash purchase, handle New York titling
              and registration, and deliver it to your building.
            </p>
            <p>
              Most of the cars we place are sitting in another state when we find them. Getting one
              to New York correctly — sales tax treatment, title transfer, plates, temporary tags —
              is the part that goes wrong when people try it alone.
            </p>
          </ProseSection>

          <ProseSection heading="Buying a car out of state and registering it in New York">
            <p>
              New York collects tax based on where the vehicle is registered, not where it was
              bought, so an out-of-state purchase does not avoid New York tax. What it does change is
              the paperwork sequence and the risk of the title arriving wrong.
            </p>
            <p>
              We handle the DMV work, the plates and the temporary tags so you can drive the car the
              day it lands.
            </p>
          </ProseSection>

          <ProseSection heading="Parking, mileage and how New Yorkers actually use these cars">
            <p>
              A lot of the cars we place in Manhattan cover very few miles. Standard lease mileage
              tiers are built for people who commute, and paying for 10,000 miles a year on a car
              that sees 3,000 is money left on the table.
            </p>
            <p>
              We build the lease around real usage. On second cars and weekend cars that difference
              is significant over a three-year term.
            </p>
          </ProseSection>

          <ProseSection heading="If you also keep a car in Florida">
            <p>
              Plenty of our New York clients keep a vehicle in South Florida as well. That raises
              real questions about where each car is titled, which state collects the tax, and what
              happens when a car moves between them for the season.
            </p>
            <p>
              We run both ends. Same brokerage, one point of contact, and the registration handled
              correctly in each state rather than improvised.
            </p>
          </ProseSection>
        </Container>

        <section aria-labelledby="ny-delivered" className="border-t border-foreground">
          <Container className="py-16">
            <h2 id="ny-delivered" className="font-display text-3xl md:text-4xl">
              Delivered in New York
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

        <section aria-labelledby="ny-visit" className="border-t border-foreground">
          <Container className="py-16">
            <h2 id="ny-visit" className="font-display text-3xl md:text-4xl">
              Visit
            </h2>
            <address className="mt-6 font-data text-lg not-italic leading-relaxed">
              200 Vesey Street
              <br />
              Battery Park City, New York, NY
            </address>
            <p className="mt-4 max-w-xl font-data text-sm leading-relaxed text-muted-foreground">
              By appointment. There is no showroom, because we do not hold cars.
            </p>
            <div className="mt-10">
              <Principal />
            </div>
          </Container>
        </section>

        <BuildYourDeal />
    </>
  )
}
