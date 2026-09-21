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
  return { title: page?.name ?? "Marque" };
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
