import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { DeliveriesView } from "@/components/views/DeliveriesView";

export const metadata: Metadata = {
  title: "The manifest",
  description:
    "The OTO Motors delivery manifest — every completed car, its deal structure, destination, and days from inquiry to keys.",
  alternates: { canonical: "/deliveries/" },
  openGraph: { url: "/deliveries/" },
};

export default function DeliveriesPage() {
  return (
    <PageShell
      pageKey="deliveries"
      bodyClass="editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <DeliveriesView />
    </PageShell>
  );
}
