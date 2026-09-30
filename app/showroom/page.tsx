import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";
import { ShowroomView } from "@/components/views/ShowroomView";

export const metadata: Metadata = {
  title: "Showroom",
  description:
    "Browse luxury and exotic cars available to lease or finance through OTO Motors in New York and Florida. Tell us the model and we source it.",
  alternates: { canonical: "/showroom/" },
  openGraph: { url: "/showroom/" },
};

export default function ShowroomPage() {
  return (
    <PageShell
      pageKey="showroom"
      bodyClass="catalog-page editorial"
      effects={["editorial", "visual-motion", "materials"]}
    >
      <ShowroomView />
    </PageShell>
  );
}
