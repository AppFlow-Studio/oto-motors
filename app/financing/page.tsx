import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { PaymentView } from "@/components/views/PaymentView";
import { PAYMENTS } from "@/content/payments";

const page = PAYMENTS.financing;

export const metadata: Metadata = {
  title: "Financing",
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
