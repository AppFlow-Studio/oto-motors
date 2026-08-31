import Link from 'next/link'
import type { Metadata } from 'next'
import { Manifest } from '@/components/manifest'
import { BuildYourDeal } from '@/components/build-your-deal'
import { HeroCanvas } from '@/components/hero-canvas'
import { HeroCarShowcase } from '@/components/hero-car-showcase'
import { AcquisitionPaths, Container, Principal } from '@/components/content'
import { AutoDealerJsonLd } from '@/components/json-ld'
import { MarqueRail } from '@/components/marque-rail'
import { allDeliveries, medianDays } from '@/lib/deliveries'

export const metadata: Metadata = {
  title: 'Luxury & Exotic Car Leasing — New York and Fort Lauderdale | OTO Motors',
  description:
    'Independent luxury and exotic car brokerage. We source the car, structure the lease, finance or cash purchase, and deliver it. See every delivery we have made and how long it took.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const recent = allDeliveries().slice(0, 8)
  const median = medianDays()

  return (
    <>
      <AutoDealerJsonLd />
      {/* HERO */}
        <section className="hero-fade relative overflow-hidden border-b border-foreground">
          <HeroCanvas />
          <Container className="relative flex min-h-[680px] flex-col items-center justify-center gap-12 py-20 md:flex-row md:items-center md:gap-16 md:py-28">
            <div className="reveal relative z-10 w-full text-left md:w-[46%]">
              <p className="font-data text-xs uppercase tracking-wider text-muted-foreground">
                Independent brokerage &middot; New York &amp; Fort Lauderdale
              </p>
              <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                We find the car and put you in it.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
                Luxury and exotic vehicles sourced nationwide, leased, financed or bought outright, and
                delivered to New York or South Florida.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-0">
                <Link
                  href="/build-your-deal/"
                  className="border border-foreground bg-foreground px-6 py-3 font-data text-sm uppercase tracking-wider text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  Build Your Deal
                </Link>
                <Link
                  href="/deliveries/"
                  className="-ml-px border border-foreground px-6 py-3 font-data text-sm uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
                >
                  See the record
                </Link>
              </div>
            </div>
            <HeroCarShowcase />
          </Container>
        </section>

        {/* STATEMENT */}
        <section className="border-b border-foreground">
          <div className="pt-8">
            <MarqueRail />
          </div>
          <Container className="py-16">
            <p className="max-w-3xl text-pretty font-display text-2xl leading-snug md:text-3xl">
              OTO Motors is an independent brokerage. We do not hold inventory and we are not tied to
              a dealership, which means we go looking for the specific car you want instead of moving
              whatever is on a lot.
            </p>
          </Container>
        </section>

        {/* MEDIAN DELIVERY — strongest number */}
        <section className="border-b border-foreground bg-foreground text-background">
          <Container className="flex flex-col items-baseline justify-between gap-6 py-12 md:flex-row md:items-end">
            <div>
              <p className="font-data text-xs uppercase tracking-wider text-background/60">
                Median delivery, first inquiry to keys in hand
              </p>
              <p className="mt-3 font-data text-6xl leading-none tracking-tight tnum md:text-8xl">
                {median}
                <span className="ml-3 text-2xl uppercase tracking-wider text-background/60 md:text-3xl">
                  days
                </span>
              </p>
            </div>
            <p className="max-w-sm font-data text-sm leading-relaxed text-background/70">
              Ten years of dealer relationships is how these happen. The record is the argument.
            </p>
          </Container>
        </section>

        {/* MANIFEST */}
        <section aria-labelledby="manifest-heading" className="border-b border-foreground">
          <Container className="py-16">
            <h2 id="manifest-heading" className="font-display text-3xl md:text-4xl">
              What we have delivered
            </h2>
            <div className="mt-8">
              <Manifest
                rows={recent}
                intro="Every car we have placed, how long it took, and where it came from."
                footer="Days counted from first inquiry to keys in hand. Not from contract signature."
                viewAllHref="/deliveries/"
              />
            </div>
          </Container>
        </section>

        {/* ACQUISITION PATHS */}
        <AcquisitionPaths />

        {/* NY + SOUTH FLORIDA */}
        <section className="border-t border-foreground">
          <Container className="py-16">
            <h2 className="font-display text-3xl md:text-4xl">New York and South Florida</h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90">
              A lot of our clients keep cars in both places. That creates real questions about where
              the car is titled, which state collects the tax, and what happens when a car moves. We
              handle both ends.
            </p>
            <div className="mt-8 flex flex-wrap gap-0">
              <Link
                href="/new-york/"
                className="border border-foreground px-6 py-3 font-data text-sm uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
              >
                New York
              </Link>
              <Link
                href="/fort-lauderdale/"
                className="-ml-px border border-foreground px-6 py-3 font-data text-sm uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
              >
                Fort Lauderdale
              </Link>
            </div>
          </Container>
        </section>

        {/* PRINCIPAL */}
        <section className="border-t border-foreground">
          <Container className="py-16">
            <p className="mb-8 font-data text-xs uppercase tracking-wider text-muted-foreground">
              The principal
            </p>
            <Principal />
          </Container>
        </section>

      {/* BUILD YOUR DEAL */}
      <BuildYourDeal />
    </>
  )
}
