import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { PaymentView } from "@/components/views/PaymentView";
import { PAYMENTS } from "@/content/payments";

const page = PAYMENTS["cash-purchase"];

export const metadata: Metadata = {
  title: "Cash purchase",
  description:
    "Buy a luxury or exotic car outright through OTO Motors. We source the exact specification and handle delivery in New York and Florida.",
  alternates: { canonical: "/cash-purchase/" },
  openGraph: { url: "/cash-purchase/" },
};

export default function CashPurchasePage() {
  return (
    <PageShell
      pageKey="cash-purchase"
      bodyClass="editorial narrative-page"
      effects={["editorial", "narrative", "materials"]}
    >
      <PaymentView page={page} />
    </PageShell>
  );
}
