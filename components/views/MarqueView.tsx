import type { MarquePage } from "@/content/marques";
import {
  ClosingLineArt,
  Collage,
  CopyBlock,
  DrawingAtelier,
  Faq,
  Hero,
  MarqueEntrance,
  MarqueLayer,
  ModelCarousel,
  OptionCards,
  Scene,
} from "@/components/sections";

export function MarqueView({ page }: { page: MarquePage }) {
  const [copyA, copyB] = page.copies;
  return (
    <>
      <main className="narrative" id="main">
        <Hero {...page.hero} video={page.hero.video} />
        {page.models ? (
          <ModelCarousel
            brand={page.name}
            eyebrow={page.models.eyebrow}
            heading={page.models.heading}
            body={page.models.body}
            cards={page.models.models}
          />
        ) : null}
        <MarqueEntrance {...page.entrance} />
        <MarqueLayer {...page.layer} />
        {copyA ? <CopyBlock {...copyA} /> : null}
        <Collage
          ariaLabel={page.collage.ariaLabel}
          reverse={page.collageReverse}
          figures={page.collage.figures}
        />
        <Scene
          image={page.scene.image}
          caption={page.scene.caption}
          eyebrow={page.scene.eyebrow}
          heading={page.scene.heading}
          body={page.scene.body}
        />
        {copyB ? <CopyBlock {...copyB} /> : null}
        {page.atelier.length ? <DrawingAtelier drawings={page.atelier} /> : null}
        <Faq {...page.faq} />
        {page.services ? (
          <OptionCards
            id="structures"
            eyebrow={page.services.eyebrow}
            heading={page.services.heading}
            body={page.services.body}
            cards={page.services.cards}
          />
        ) : null}
      </main>
      <ClosingLineArt src={page.footerLineArt} />
    </>
  );
}
