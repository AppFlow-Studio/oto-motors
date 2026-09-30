import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { PaymentView } from "@/components/views/PaymentView";
import { PAYMENTS } from "@/content/payments";

const page = PAYMENTS.leasing;

export const metadata: Metadata = {
  title: "Leasing",
  description:
    "How luxury car leasing works at OTO Motors: we source the exact car, structure the lease, and deliver it in New York or Florida.",
  alternates: { canonical: "/leasing/" },
  openGraph: { url: "/leasing/" },
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
