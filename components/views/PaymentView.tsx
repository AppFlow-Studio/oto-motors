import type { PaymentPage as PaymentData } from "@/content/payments";
import {
  ClosingLineArt,
  CopyBlock,
  ExpandTrack,
  Faq,
  Hero,
  OptionCards,
  PaymentLayer,
  Scene,
  SilkQuote,
} from "@/components/sections";

export function PaymentView({ page }: { page: PaymentData }) {
  return (
    <>
      <main className="narrative" id="main">
        <Hero {...page.hero} video={page.hero.video} />
        <PaymentLayer {...page.layer} />
        <CopyBlock {...page.preference} />
        <CopyBlock {...page.arrangement} />
        <Scene {...page.scene} />
        <SilkQuote
          silk
          eyebrow={page.quote.eyebrow}
          line1={page.quote.line1}
          line2={page.quote.line2}
        />
        <ExpandTrack {...page.expand} />
        <CopyBlock {...page.record} />
        <Faq {...page.faq} />
        <OptionCards
          eyebrow={page.options.eyebrow}
          heading={page.options.heading}
          body={page.options.body}
          cards={page.options.cards}
        />
      </main>
      <ClosingLineArt src={page.footerLineArt} />
    </>
  );
}
