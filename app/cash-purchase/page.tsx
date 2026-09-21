import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { PaymentView } from "@/components/views/PaymentView";
import { PAYMENTS } from "@/content/payments";

const page = PAYMENTS["cash-purchase"];

export const metadata: Metadata = {
  title: "Cash purchase",
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
