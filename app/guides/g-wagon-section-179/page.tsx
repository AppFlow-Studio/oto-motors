import Link from 'next/link'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter, CredibilityStrip } from '@/components/site-footer'
import { BuildYourDeal } from '@/components/build-your-deal'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Manifest } from '@/components/manifest'
import { Container, Lead, Callout, MathTable } from '@/components/content'
import { ArticleJsonLd, FaqJsonLd } from '@/components/json-ld'
import { byModel } from '@/lib/deliveries'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'G-Wagon Section 179 Deduction 2026: The Real Math',
  description:
    'What a G-Wagon actually deducts under Section 179 in 2026, where the $32,000 SUV cap applies, how bonus depreciation covers the rest, and what the business-use rule really requires.',
  alternates: { canonical: '/guides/g-wagon-section-179/' },
}

const FAQ = [
  {
    question: 'Is a G-Wagon over 6,000 pounds?',
    answer:
      "Yes. Every current G-Class variant is rated above 6,000 lbs GVWR, which puts it in the heavy-vehicle category and outside the passenger-car depreciation caps. GVWR is the manufacturer's maximum loaded rating, printed on the sticker inside the driver's door jamb — not curb weight.",
  },
  {
    question: 'Which Mercedes vehicles qualify for Section 179?',
    answer:
      'The G-Class qualifies. So do most of the larger Mercedes SUVs rated above 6,000 lbs GVWR — the GLS, the GLE in several configurations, and the AMG variants of both. The smaller SUVs and every sedan fall under 6,000 and are subject to the passenger-auto limits instead. Weight is the only thing that matters for this test.',
  },
  {
    question: 'Can you write off 100% of a 6,000 lb vehicle?',
    answer:
      'Often yes in 2026, but not through Section 179 alone. Section 179 on a passenger SUV rated between 6,001 and 14,000 lbs GVWR is capped at $32,000 for 2026. What gets you to the full cost is bonus depreciation, which applies to the remaining basis after Section 179 and currently has no cap.',
  },
  {
    question: 'How does the business-use percentage requirement work?',
    answer:
      'The vehicle has to be used more than 50% for business, and the deduction is prorated to the actual percentage. At 70% business use you deduct 70% of the basis, not all of it. Commuting does not count; you need contemporaneous records kept as you go.',
  },
  {
    question: 'What happens if business use drops below 50%?',
    answer:
      'You recapture. If business use falls under 50% in a later year before the vehicle is fully depreciated, you have to add back the excess depreciation you already claimed as ordinary income in that year.',
  },
  {
    question: 'Can a G-Wagon be a tax write-off?',
    answer:
      'Yes, within those conditions. It has to be bought by a business, used more than half the time for business, placed in service in the tax year you claim it, and documented. "Placed in service" means available for business use — not ordered, not paid for.',
  },
  {
    question: 'Does leasing qualify, or only purchase?',
    answer:
      'Section 179 and bonus depreciation apply to purchase, not to a standard lease. You cannot depreciate an asset you do not own. Leases have their own treatment: you generally deduct the business-use portion of the lease payments, with an income inclusion adjustment on higher-value vehicles.',
  },
  {
    question: 'How does LLC titling affect the deduction?',
    answer:
      'Titling to an LLC does not by itself create the deduction — business use does. What the LLC does is make the ownership clean, keep the vehicle off your personal name, and make the recordkeeping defensible. It also changes the lending.',
  },
]

const MATH = [
  { label: 'Vehicle cost', value: '$185,000' },
  { label: 'Business use', value: '100%' },
  { label: 'Deductible basis', value: '$185,000' },
  { label: '', value: '' },
  { label: 'Section 179 (heavy SUV cap, 2026)', value: '$32,000' },
  { label: 'Remaining basis', value: '$153,000' },
  { label: 'Bonus depreciation (100%, 2026)', value: '$153,000' },
  { label: 'Total year-one deduction', value: '$185,000', rule: true, strong: true },
  { label: 'At a 35% combined rate, tax reduced by', value: '$64,750' },
]

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mt-12 font-display text-2xl leading-tight md:text-3xl">
      {children}
    </h2>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-foreground/90">{children}</p>
}

export default function GWagonSection179Page() {
  const g63 = byModel('g63')

  return (
    <>
      <ArticleJsonLd
        headline="The G-Wagon Section 179 Deduction, and What It Actually Saves You"
        description={metadata.description as string}
        url={`${SITE.url}/guides/g-wagon-section-179/`}
      />
      <FaqJsonLd qa={FAQ} />
      <SiteHeader />
      <Breadcrumbs
        items={[
          { label: 'Guides', href: '/guides/' },
          { label: 'G-Wagon Section 179', href: '/guides/g-wagon-section-179/' },
        ]}
      />
      <main>
        <Container className="py-14">
          <p className="font-data text-xs uppercase tracking-wider text-muted-foreground">
            Guide &middot; Updated for 2026
          </p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.02] md:text-6xl">
            The G-Wagon Section 179 Deduction, and What It Actually Saves You
          </h1>

          <div className="mt-8">
            <Lead>
              The G-Wagon write-off gets talked about like a loophole. It is not a loophole — it is
              ordinary depreciation, applied to a vehicle heavy enough to sit outside the
              passenger-car limits. It is real, it is worth a significant amount of money in year
              one, and it comes with conditions that most of the pages explaining it skip over.
            </Lead>
            <P>
              This page covers the 2026 figures, the conditions, and the math. Then, if it works for
              your situation, we source the car.
            </P>
          </div>

          <Callout>
            This is not tax advice. We source vehicles and structure the purchase. Your accountant
            confirms the treatment and signs the return. Everything below should be verified against
            your own facts.
          </Callout>

          <article>
            <H2 id="over-6000-pounds">Is a G-Wagon over 6,000 pounds?</H2>
            <P>
              Yes. Every current G-Class variant is rated above 6,000 lbs GVWR, which puts it in the
              heavy-vehicle category and outside the passenger-car depreciation caps.
            </P>
            <P>
              GVWR is not curb weight. It is the manufacturer&apos;s maximum loaded rating, and it is
              printed on the sticker inside the driver&apos;s door jamb. That distinction catches
              people out, because plenty of cars that feel heavy are rated under 6,000 and plenty of
              vehicles that qualify do not look the part. Check the door jamb on the specific trim,
              not a spec sheet for the model line.
            </P>

            <H2 id="which-mercedes-qualify">Which Mercedes vehicles qualify for Section 179?</H2>
            <P>
              The G-Class qualifies. So do most of the larger Mercedes SUVs rated above 6,000 lbs
              GVWR — the GLS, the GLE in several configurations, and the AMG variants of both. The
              smaller SUVs and every sedan fall under 6,000 and are subject to the passenger-auto
              limits instead.
            </P>
            <P>Weight is the only thing that matters for this test. Price does not affect eligibility, and neither does the badge.</P>

            <H2 id="write-off-100">Can you write off 100% of a 6,000 lb vehicle?</H2>
            <P>Often yes in 2026, but not through Section 179 alone. This is the part most pages get wrong.</P>
            <P>
              Section 179 on a passenger SUV rated between 6,001 and 14,000 lbs GVWR is capped at
              $32,000 for 2026. That is the whole Section 179 piece. What gets you to the full cost is
              bonus depreciation, which applies to the remaining basis after Section 179 and
              currently has no cap.
            </P>
            <P>
              So the structure is: Section 179 first, up to the SUV cap. Bonus depreciation on what is
              left. Regular MACRS depreciation on anything still remaining.
            </P>
            <P>
              Note that several of the pages currently ranking for this search still show the 2025 cap
              of $31,300, and at least one shows bonus depreciation at 20%. Check the year on anything
              you read.
            </P>

            <H2 id="the-real-math">The real math</H2>
            <MathTable rows={MATH} />
            <P>
              Illustrative only. Your rate, your entity structure and your business-use percentage all
              change this. The deduction reduces taxable income — it is not a credit, and it does not
              reduce your tax bill dollar for dollar.
            </P>

            <H2 id="business-use-percentage">How does the business-use percentage requirement work?</H2>
            <P>
              The vehicle has to be used more than 50% for business, and the deduction is prorated to
              the actual percentage. At 70% business use you deduct 70% of the basis, not all of it.
            </P>
            <P>
              Business use means business use. Commuting from home to your regular place of work does
              not count. Client meetings, site visits, travel between business locations do. You need
              contemporaneous records — a mileage log, kept as you go, not reconstructed in April.
            </P>
            <P>
              This is the condition that causes the most trouble, and it is the one the enthusiastic
              versions of this article tend to bury.
            </P>

            <H2 id="below-50">What happens if business use drops below 50%?</H2>
            <P>
              You recapture. If business use falls under 50% in a later year before the vehicle is
              fully depreciated, you have to add back the excess depreciation you already claimed as
              ordinary income in that year.
            </P>
            <P>
              Which means the deduction is not free money in year one if the car is going to become a
              personal vehicle in year two. Plan for the whole holding period, not the first tax
              return.
            </P>

            <H2 id="tax-write-off">Can a G-Wagon be a tax write-off?</H2>
            <P>
              Yes, within those conditions. It has to be bought by a business, used more than half the
              time for business, placed in service in the tax year you claim it, and documented.
            </P>
            <P>
              &quot;Placed in service&quot; means available for business use — not ordered, not paid
              for. A car that arrives on January 3rd does not help the prior year. This is why
              delivery timing matters more than people expect at year end, and it is the main reason
              our clients call us in Q4.
            </P>

            <H2 id="leasing-qualify">Does leasing qualify, or only purchase?</H2>
            <P>
              Section 179 and bonus depreciation apply to purchase, not to a standard lease. You
              cannot depreciate an asset you do not own.
            </P>
            <P>
              Leases have their own treatment: you generally deduct the business-use portion of the
              lease payments, with an income inclusion adjustment on higher-value vehicles. Different
              mechanism, different amounts, usually smaller in year one and steadier across the term.
            </P>
            <P>
              If the deduction is the reason you are buying, that is a purchase decision, and we will
              tell you so. We also run the comparison honestly — for some clients the lease still wins
              once the money is doing something else.
            </P>

            <H2 id="llc-titling">How does LLC titling affect the deduction?</H2>
            <P>
              Titling to an LLC does not by itself create the deduction — business use does. What the
              LLC does is make the ownership clean, keep the vehicle off your personal name, and make
              the recordkeeping defensible.
            </P>
            <P>
              It also changes the lending. Not every bank writes to an LLC at these values, and the
              ones that do want documentation most buyers have not assembled — operating agreement,
              EIN, sometimes a personal guarantee. We know which lenders say yes to which structures.
            </P>

            <H2 id="what-we-do">What we do with all of this</H2>
            <P>We source the car and get it delivered inside the tax year. Your accountant handles the return.</P>
            <P>
              That combination is unusual. The CPA pages explaining this deduction cannot get you a
              G-Wagon. The dealer pages can get you a G-Wagon but are writing about tax law as
              marketing filler. We do the first part and we know enough about the second not to waste
              your time.
            </P>
            <P>
              If you are working against a December 31 placed-in-service date, the constraint is
              delivery, not paperwork. That is the whole reason to talk to us in October rather than
              December.
            </P>
          </article>

          <section aria-labelledby="delivered" className="mt-14 border-t border-foreground pt-10">
            <h2 id="delivered" className="font-display text-2xl md:text-3xl">
              G-Wagons we have delivered
            </h2>
            <div className="mt-6">
              <Manifest
                rows={g63}
                footer="Days counted from first inquiry to keys in hand. Not from contract signature."
              />
            </div>
          </section>

          <nav aria-label="Related" className="mt-12 border-t border-foreground/30 pt-6">
            <p className="font-data text-[0.625rem] uppercase tracking-wider text-muted-foreground">
              Related
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-data text-sm">
              <Link href="/mercedes-amg/g-wagon/" className="border-b border-foreground pb-0.5">
                G-Wagon
              </Link>
              <Link href="/mercedes-amg/g63/" className="border-b border-foreground pb-0.5">
                G63
              </Link>
              <Link href="/business-leasing/" className="border-b border-foreground pb-0.5">
                Business leasing
              </Link>
              <Link href="/llc-titling/" className="border-b border-foreground pb-0.5">
                LLC titling
              </Link>
              <Link href="/financing/" className="border-b border-foreground pb-0.5">
                Financing
              </Link>
            </div>
          </nav>
        </Container>

        <BuildYourDeal vehiclePrefill="Mercedes-AMG G63" />
      </main>
      <CredibilityStrip />
      <SiteFooter />
    </>
  )
}
