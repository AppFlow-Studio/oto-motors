import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Guides — How Luxury Car Deals Actually Work",
  description:
    "Plain explanations of how leasing, financing, allocation, out-of-state purchase and Section 179 actually work on luxury and exotic cars. No jargon, no pitch.",
};

const GUIDES = [
  {
    href: "/guides/g-wagon-section-179",
    title: "The G-Wagon & Section 179 →",
    blurb:
      "Why a vehicle rated over 6,000 pounds changes the purchase-versus-lease math, the year-one deduction, and how to get delivery inside the tax year.",
  },
  {
    href: "/leasing",
    title: "How leasing actually works →",
    blurb:
      "A lease payment is three numbers: cap cost, residual, money factor. We show all three so you can judge the deal instead of trusting a monthly figure.",
  },
  {
    href: "/financing",
    title: "When financing beats leasing →",
    blurb:
      "Keeping the car past a lease term, cars that hold value, and how lenders treat high-value and exotic vehicles differently from an ordinary auto loan.",
  },
  {
    href: "/out-of-state",
    title: "Buying a car out of state →",
    blurb:
      "Most cars we place start in another state. Sales tax, title transfer, temporary tags and getting the car home legally — the sequence that goes wrong alone.",
  },
  {
    href: "/llc-titling",
    title: "LLC titling, honestly →",
    blurb:
      "What titling to an LLC does and does not do, how it changes lending, and the documentation banks actually require at these values.",
  },
];

export default function GuidesPage() {
  return (
    <PageShell
      pageKey="guides"
      bodyClass="editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <main id="main">
        <section className="wrap article-lede">
          <span className="section-tag">GUIDES / OTO</span>
          <h1>Guides</h1>
          <p className="intro">
            How we source, structure, and deliver the car you actually want —
            explained as plainly as we walk every client through it. Independent
            brokerage, real numbers, no dealer markup and no pitch.
          </p>
        </section>
        <section className="wrap section">
          {GUIDES.map((g) => (
            <p key={g.href}>
              <a className="text-link" href={g.href}>
                {g.title}
              </a>
              <br />
              <span className="small muted">{g.blurb}</span>
            </p>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
