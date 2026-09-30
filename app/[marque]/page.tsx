import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/chrome/PageShell";
import { MarqueView } from "@/components/views/MarqueView";
import { getMarque, MARQUE_SLUGS } from "@/content/marques";

type Props = { params: Promise<{ marque: string }> };

export function generateStaticParams() {
  return MARQUE_SLUGS.map((marque) => ({ marque }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marque } = await params;
  const page = getMarque(marque);
  const brand = page?.name ?? "Marque";
  return {
    title: brand,
    description: page
      ? `Lease or finance a ${brand} in New York or Florida. OTO Motors sources the exact model and specification, structures the deal, and delivers it.`
      : undefined,
    alternates: { canonical: `/${marque}/` },
    openGraph: { url: `/${marque}/` },
  };
}

export default async function MarquePage({ params }: Props) {
  const { marque } = await params;
  const page = getMarque(marque);
  if (!page) notFound();
  return (
    <PageShell
      pageKey={marque}
      bodyClass="editorial narrative-page"
      effects={["editorial", "narrative", "materials"]}
    >
      <MarqueView page={page} />
    </PageShell>
  );
}
