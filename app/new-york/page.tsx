import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AutoDealerJsonLd } from "@/components/json-ld";
import { InquiryForm } from "@/components/InquiryForm";
import { OFFICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Luxury & Exotic Car Leasing in New York City",
  description:
    "Independent luxury car brokerage at 200 Vesey Street, Battery Park City. Sourcing, leasing, financing and New York registration, delivered anywhere in Manhattan and the tri-state area.",
  alternates: { canonical: "/new-york/" },
};

export default function Page() {
  const office = OFFICES.ny;

  return (
    <PageShell
      pageKey="new-york"
      bodyClass="editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <AutoDealerJsonLd region="ny" />
      <Breadcrumbs items={[{ label: "New York", href: "/new-york/" }]} />
      <main id="main">
        <section className="wrap article-lede">
          <span className="section-tag">NEW YORK / OTO</span>
          <h1>Luxury and Exotic Car Leasing in New York</h1>
          <p className="intro">
            Our office is at 200 Vesey Street in Battery Park City. We source
            vehicles nationwide and deliver into Manhattan, the boroughs, Long
            Island, Westchester, northern New Jersey and Connecticut.
          </p>
          <p className="small muted">
            {office.line1} · {office.line2} · {office.postal}
          </p>
        </section>

        <section className="wrap article-body">
          <h2>What we do here</h2>
          <p>
            We are not a dealership and we do not hold cars. We find the specific
            vehicle you want, wherever it is, structure the lease, finance or cash
            purchase, handle New York titling and registration, and deliver it to
            your building.
          </p>
          <p>
            Most of the cars we place are sitting in another state when we find
            them. Getting one to New York correctly — sales tax treatment, title
            transfer, plates, temporary tags — is the part that goes wrong when
            people try it alone.
          </p>

          <h2>Buying a car out of state and registering it in New York</h2>
          <p>
            New York collects tax based on where the vehicle is registered, not
            where it was bought, so an out-of-state purchase does not avoid New
            York tax. What it does change is the paperwork sequence and the risk
            of the title arriving wrong.
          </p>
          <p>
            We handle the DMV work, the plates and the temporary tags so you can
            drive the car the day it lands.
          </p>

          <h2>Parking, mileage and how New Yorkers actually use these cars</h2>
          <p>
            A lot of the cars we place in Manhattan cover very few miles. Standard
            lease mileage tiers are built for people who commute, and paying for a
            high annual mileage tier on a car that barely leaves the garage is
            money left on the table.
          </p>
          <p>
            We build the lease around real usage. On second cars and weekend cars
            that difference is significant over a three-year term.
          </p>

          <h2>If you also keep a car in Florida</h2>
          <p>
            Plenty of our New York clients keep a vehicle in South Florida as
            well. That raises real questions about where each car is titled, which
            state collects the tax, and what happens when a car moves between them
            for the season.
          </p>
          <p>
            We run both ends. Same brokerage, one point of contact, and the
            registration handled correctly in each state rather than improvised.
          </p>
        </section>

        <section className="wrap section">
          <span className="section-tag">VISIT</span>
          <h2>By appointment</h2>
          <p>
            {office.line1}
            <br />
            {office.line2} {office.postal}
          </p>
          <p className="small muted">
            By appointment. There is no showroom, because we do not hold cars.
          </p>
        </section>

        <section className="wrap section article-cta">
          <span className="section-tag">START HERE</span>
          <h2>Tell us the car.</h2>
          <InquiryForm />
        </section>
      </main>
    </PageShell>
  );
}
