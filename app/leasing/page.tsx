import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { PaymentView } from "@/components/views/PaymentView";
import { PAYMENTS } from "@/content/payments";

const page = PAYMENTS.leasing;

export const metadata: Metadata = {
  title: "Leasing",
};

export default function LeasingPage() {
  return (
    <PageShell
      pageKey="leasing"
      bodyClass="editorial narrative-page"
      effects={["editorial", "narrative", "materials"]}
    >
      <PaymentView page={page} />
    </PageShell>
  );
}
