import type { MarquePage } from "@/content/marques";
import {
  ClosingLineArt,
  Collage,
  CopyBlock,
  DrawingAtelier,
  ExpandTrack,
  Faq,
  Hero,
  MarqueEntrance,
  MarqueLayer,
  OptionCards,
  Scene,
  SilkQuote,
} from "@/components/sections";

export function MarqueView({ page }: { page: MarquePage }) {
  const [copyA, copyB] = page.copies;
  return (
    <>
      <main className="narrative" id="main">
        <Hero {...page.hero} video={page.hero.video} />
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
        <SilkQuote
          text={page.quote.text}
          cite={page.quote.cite}
          eyebrow={page.quote.eyebrow}
        />
        <ExpandTrack
          image={page.expand.image}
          eyebrow={page.expand.eyebrow}
          heading={page.expand.heading}
        />
        {copyB ? <CopyBlock {...copyB} /> : null}
        {page.atelier.length ? <DrawingAtelier drawings={page.atelier} /> : null}
        {page.models ? (
          <OptionCards
            eyebrow={page.models.eyebrow}
            heading={page.models.heading}
            body={page.models.body}
            cards={page.models.models.map((m) => ({
              image: m.image,
              name: m.name,
              body: m.body,
              href: m.href,
              ctaLabel: m.ctaLabel,
            }))}
          />
        ) : null}
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
