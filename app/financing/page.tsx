import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { PaymentView } from "@/components/views/PaymentView";
import { PAYMENTS } from "@/content/payments";

const page = PAYMENTS.financing;

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Finance a luxury or exotic car through OTO Motors. We structure the deal with our lender network and deliver in New York or Florida.",
  alternates: { canonical: "/financing/" },
  openGraph: { url: "/financing/" },
};

export default function FinancingPage() {
  return (
    <PageShell
      pageKey="financing"
      bodyClass="editorial narrative-page"
      effects={["editorial", "narrative", "materials"]}
    >
      <PaymentView page={page} />
    </PageShell>
  );
}
