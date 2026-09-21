import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleJsonLd, FaqJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "G-Wagon Section 179 Deduction 2026: The Real Math",
  description:
    "What a G-Wagon actually deducts under Section 179 in 2026, where the $32,000 SUV cap applies, how bonus depreciation covers the rest, and what the business-use rule really requires.",
};

const FAQ = [
  {
    question: "Is a G-Wagon over 6,000 pounds?",
    answer:
      "Yes. Every current G-Class variant is rated above 6,000 lbs GVWR, which puts it in the heavy-vehicle category and outside the passenger-car depreciation caps. GVWR is the manufacturer's maximum loaded rating, printed on the sticker inside the driver's door jamb — not curb weight.",
  },
  {
    question: "Which Mercedes vehicles qualify for Section 179?",
    answer:
      "The G-Class qualifies. So do most of the larger Mercedes SUVs rated above 6,000 lbs GVWR — the GLS, the GLE in several configurations, and the AMG variants of both. The smaller SUVs and every sedan fall under 6,000 and are subject to the passenger-auto limits instead. Weight is the only thing that matters for this test.",
  },
  {
    question: "Can you write off 100% of a 6,000 lb vehicle?",
    answer:
      "Often yes in 2026, but not through Section 179 alone. Section 179 on a passenger SUV rated between 6,001 and 14,000 lbs GVWR is capped at $32,000 for 2026. What gets you to the full cost is bonus depreciation, which applies to the remaining basis after Section 179 and currently has no cap.",
  },
  {
    question: "How does the business-use percentage requirement work?",
    answer:
      "The vehicle has to be used more than 50% for business, and the deduction is prorated to the actual percentage. At 70% business use you deduct 70% of the basis, not all of it. Commuting does not count; you need contemporaneous records kept as you go.",
  },
  {
    question: "What happens if business use drops below 50%?",
    answer:
      "You recapture. If business use falls under 50% in a later year before the vehicle is fully depreciated, you have to add back the excess depreciation you already claimed as ordinary income in that year.",
  },
  {
    question: "Can a G-Wagon be a tax write-off?",
    answer:
      'Yes, within those conditions. It has to be bought by a business, used more than half the time for business, placed in service in the tax year you claim it, and documented. "Placed in service" means available for business use — not ordered, not paid for.',
  },
  {
    question: "Does leasing qualify, or only purchase?",
    answer:
      "Section 179 and bonus depreciation apply to purchase, not to a standard lease. You cannot depreciate an asset you do not own. Leases have their own treatment: you generally deduct the business-use portion of the lease payments, with an income inclusion adjustment on higher-value vehicles.",
  },
  {
    question: "How does LLC titling affect the deduction?",
    answer:
      "Titling to an LLC does not by itself create the deduction — business use does. What the LLC does is make the ownership clean, keep the vehicle off your personal name, and make the recordkeeping defensible. It also changes the lending.",
  },
];

export default function Page() {
  return (
    <PageShell
      pageKey="g-wagon-section-179"
      bodyClass="editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "G-Wagon & Section 179", href: "/guides/g-wagon-section-179" },
        ]}
      />
      <ArticleJsonLd
        headline="The G-Wagon Section 179 Deduction, and What It Actually Saves You"
        description={metadata.description as string}
        url={`${SITE.url}/guides/g-wagon-section-179/`}
      />
      <FaqJsonLd qa={FAQ} />
      <main id="main">
        <section className="wrap article-lede">
          <span className="section-tag">GUIDE / SECTION 179</span>
          <h1>The G-Wagon Section 179 Deduction, and What It Actually Saves You</h1>
          <p className="intro">
            The G-Wagon write-off gets talked about like a loophole. It is not a
            loophole — it is ordinary depreciation, applied to a vehicle heavy
            enough to sit outside the passenger-car limits. It is real, it is
            worth a significant amount of money in year one, and it comes with
            conditions that most of the pages explaining it skip over.
          </p>
        </section>

        <section className="wrap article-body">
          <p>
            This page covers the 2026 figures, the conditions, and the math.
            Then, if it works for your situation, we source the car.
          </p>
          <p className="small muted">
            This is not tax advice. We source vehicles and structure the
            purchase. Your accountant confirms the treatment and signs the
            return. Everything below should be verified against your own facts.
          </p>

          <h2>Is a G-Wagon over 6,000 pounds?</h2>
          <p>
            Yes. Every current G-Class variant is rated above 6,000 lbs GVWR,
            which puts it in the heavy-vehicle category and outside the
            passenger-car depreciation caps.
          </p>
          <p>
            GVWR is not curb weight. It is the manufacturer&apos;s maximum loaded
            rating, and it is printed on the sticker inside the driver&apos;s door
            jamb. That distinction catches people out, because plenty of cars
            that feel heavy are rated under 6,000 and plenty of vehicles that
            qualify do not look the part. Check the door jamb on the specific
            trim, not a spec sheet for the model line.
          </p>

          <h2>Which Mercedes vehicles qualify for Section 179?</h2>
          <p>
            The G-Class qualifies. So do most of the larger Mercedes SUVs rated
            above 6,000 lbs GVWR — the GLS, the GLE in several configurations,
            and the AMG variants of both. The smaller SUVs and every sedan fall
            under 6,000 and are subject to the passenger-auto limits instead.
          </p>
          <p>
            Weight is the only thing that matters for this test. Price does not
            affect eligibility, and neither does the badge.
          </p>

          <h2>Can you write off 100% of a 6,000 lb vehicle?</h2>
          <p>
            Often yes in 2026, but not through Section 179 alone. This is the
            part most pages get wrong.
          </p>
          <p>
            Section 179 on a passenger SUV rated between 6,001 and 14,000 lbs
            GVWR is capped at $32,000 for 2026. That is the whole Section 179
            piece. What gets you to the full cost is bonus depreciation, which
            applies to the remaining basis after Section 179 and currently has no
            cap.
          </p>
          <p>
            So the structure is: Section 179 first, up to the SUV cap. Bonus
            depreciation on what is left. Regular MACRS depreciation on anything
            still remaining.
          </p>
          <p>
            Note that several of the pages currently ranking for this search
            still show the 2025 cap of $31,300, and at least one shows bonus
            depreciation at 20%. Check the year on anything you read.
          </p>

          <h2>The real math</h2>
          <p>
            On a $185,000 G-Wagon at 100% business use, the full $185,000 is your
            deductible basis. Section 179 covers the first $32,000 (the heavy-SUV
            cap for 2026), leaving $153,000 of remaining basis. Bonus
            depreciation at 100% for 2026 covers that entire $153,000. That is a
            total year-one deduction of $185,000 — and at a 35% combined rate,
            tax reduced by roughly $64,750.
          </p>
          <p>
            Illustrative only. Your rate, your entity structure and your
            business-use percentage all change this. The deduction reduces
            taxable income — it is not a credit, and it does not reduce your tax
            bill dollar for dollar.
          </p>

          <h2>How does the business-use percentage requirement work?</h2>
          <p>
            The vehicle has to be used more than 50% for business, and the
            deduction is prorated to the actual percentage. At 70% business use
            you deduct 70% of the basis, not all of it.
          </p>
          <p>
            Business use means business use. Commuting from home to your regular
            place of work does not count. Client meetings, site visits, travel
            between business locations do. You need contemporaneous records — a
            mileage log, kept as you go, not reconstructed in April.
          </p>
          <p>
            This is the condition that causes the most trouble, and it is the one
            the enthusiastic versions of this article tend to bury.
          </p>

          <h2>What happens if business use drops below 50%?</h2>
          <p>
            You recapture. If business use falls under 50% in a later year before
            the vehicle is fully depreciated, you have to add back the excess
            depreciation you already claimed as ordinary income in that year.
          </p>
          <p>
            Which means the deduction is not free money in year one if the car is
            going to become a personal vehicle in year two. Plan for the whole
            holding period, not the first tax return.
          </p>

          <h2>Can a G-Wagon be a tax write-off?</h2>
          <p>
            Yes, within those conditions. It has to be bought by a business, used
            more than half the time for business, placed in service in the tax
            year you claim it, and documented.
          </p>
          <p>
            &quot;Placed in service&quot; means available for business use — not
            ordered, not paid for. A car that arrives on January 3rd does not help
            the prior year. This is why delivery timing matters more than people
            expect at year end, and it is the main reason our clients call us in
            Q4.
          </p>

          <h2>Does leasing qualify, or only purchase?</h2>
          <p>
            Section 179 and bonus depreciation apply to purchase, not to a
            standard lease. You cannot depreciate an asset you do not own.
          </p>
          <p>
            Leases have their own treatment: you generally deduct the
            business-use portion of the lease payments, with an income inclusion
            adjustment on higher-value vehicles. Different mechanism, different
            amounts, usually smaller in year one and steadier across the term.
          </p>
          <p>
            If the deduction is the reason you are buying, that is a purchase
            decision, and we will tell you so. We also run the comparison
            honestly — for some clients the lease still wins once the money is
            doing something else.
          </p>

          <h2>How does LLC titling affect the deduction?</h2>
          <p>
            Titling to an LLC does not by itself create the deduction — business
            use does. What the LLC does is make the ownership clean, keep the
            vehicle off your personal name, and make the recordkeeping
            defensible.
          </p>
          <p>
            It also changes the lending. Not every bank writes to an LLC at these
            values, and the ones that do want documentation most buyers have not
            assembled — operating agreement, EIN, sometimes a personal guarantee.
            We know which lenders say yes to which structures.
          </p>

          <h2>What we do with all of this</h2>
          <p>
            We source the car and get it delivered inside the tax year. Your
            accountant handles the return.
          </p>
          <p>
            That combination is unusual. The CPA pages explaining this deduction
            cannot get you a G-Wagon. The dealer pages can get you a G-Wagon but
            are writing about tax law as marketing filler. We do the first part
            and we know enough about the second not to waste your time.
          </p>
          <p>
            If you are working against a December 31 placed-in-service date, the
            constraint is delivery, not paperwork. That is the whole reason to
            talk to us in October rather than December.
          </p>
        </section>

        <section className="questions wrap section">
          <span className="section-tag">QUESTIONS</span>
          <h2>Common questions</h2>
          <div>
            {FAQ.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="wrap section article-cta">
          <span className="section-tag">NEXT STEP</span>
          <h2>Get the car in time to claim it.</h2>
          <a className="button oto-action" href="/build-your-deal">
            <span aria-hidden="true" className="direction-mark">
              <svg fill="none" viewBox="0 0 24 24">
                <path d="M4 12h15m-6-6 6 6-6 6" />
              </svg>
            </span>
            <span className="oto-action-label">Build your deal</span>
          </a>
        </section>
      </main>
    </PageShell>
  );
}
