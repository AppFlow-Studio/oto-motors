import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AutoDealerJsonLd } from "@/components/json-ld";
import { InquiryForm } from "@/components/InquiryForm";
import { OFFICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Luxury & Exotic Car Leasing in Fort Lauderdale, FL",
  description:
    "Independent luxury and exotic car brokerage serving Fort Lauderdale, Miami and Palm Beach. Sourcing, leasing, financing and Florida registration, delivered to you.",
  alternates: { canonical: "/fort-lauderdale/" },
};

export default function Page() {
  const office = OFFICES.fl;

  return (
    <PageShell
      pageKey="fort-lauderdale"
      bodyClass="editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <AutoDealerJsonLd region="fl" />
      <Breadcrumbs
        items={[{ label: "Fort Lauderdale", href: "/fort-lauderdale/" }]}
      />
      <main id="main">
        <section className="wrap article-lede">
          <span className="section-tag">FORT LAUDERDALE / OTO</span>
          <h1>Luxury and Exotic Car Leasing in Fort Lauderdale</h1>
          <p className="intro">
            We serve Fort Lauderdale, Miami, Boca Raton and Palm Beach. Same
            operation as our New York office: we source the car, structure the
            deal, handle Florida titling and registration, and deliver it.
          </p>
          <p className="small muted">
            {office.line1} · {office.line2} · {office.postal}
          </p>
        </section>

        <section className="wrap article-body">
          <h2>What is different about South Florida</h2>
          <p>
            The market here moves faster and the cars are different. More
            convertibles, more exotics driven year-round rather than stored, and a
            much larger secondary market — which cuts both ways. There is more
            supply, and there are more cars with histories worth checking
            carefully before you buy.
          </p>
          <p>
            We arrange marque-specialist inspection on anything pre-owned. A
            Ferrari gets a Ferrari technician, not a general shop.
          </p>

          <h2>Florida registration and titling</h2>
          <p>
            Florida titling is more straightforward than New York, and the tax
            treatment differs. If you are buying here and registering here, it is
            simple. If you are moving a car between Florida and another state, or
            titling to an out-of-state entity, it is not, and getting it wrong is
            expensive to unwind.
          </p>

          <h2>The two-state garage</h2>
          <p>
            Plenty of our clients run cars in both New York and South Florida —
            often something practical up north and something they only drive down
            here.
          </p>
          <p>
            Nobody else is set up for that. Most brokerages are in one market and
            hand you off to a stranger for the other. We handle both, which means
            one conversation about where each car should be titled and what
            happens when one of them travels.
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
            By appointment across Fort Lauderdale, Miami and Palm Beach. There is
            no showroom, because we do not hold cars.
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
