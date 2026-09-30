import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { BrandsView } from "@/components/views/BrandsView";

export const metadata: Metadata = {
  title: "The marques",
  description:
    "Every marque OTO Motors brokers — Porsche, Ferrari, Lamborghini, Rolls-Royce, Bentley and more — for lease, finance or cash purchase.",
  alternates: { canonical: "/brands/" },
  openGraph: { url: "/brands/" },
};

export default function BrandsPage() {
  return (
    <PageShell
      pageKey="brands"
      bodyClass="editorial marques-index"
      effects={["editorial", "marques", "materials"]}
    >
      <BrandsView />
    </PageShell>
  );
}
