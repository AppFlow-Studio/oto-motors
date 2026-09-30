import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { BrandsView } from "@/components/views/BrandsView";

export const metadata: Metadata = {
  title: "The marques",
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
