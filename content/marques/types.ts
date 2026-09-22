import type { CopyBlock, FaqItem, Media, Video } from "../payments";

export type MarquePage = {
  slug: string;
  name: string;
  title: string;
  collageReverse: boolean;
  hero: {
    image: Media;
    video: Video | null;
    eyebrow: string;
    heading: string;
    sub: string;
    ctaHref: string;
    ctaLabel: string;
  };
  entrance: {
    ariaLabel: string;
    lineArt: string;
    /** Flip the drawing so the nose points toward the copy (left). */
    faceText?: boolean;
    /** Single large study beside the copy (Ferrari). */
    layout?: "default" | "solo";
    eyebrow: string;
    heading: string;
    body: string;
  };
  layer: {
    word: string;
    back: Media;
    /** Optional film for the sticky background (replaces still while playing). */
    backVideo?: Video | null;
    /** Subtle organic line field instead of photo/video. */
    backPattern?: "organic-lines" | null;
    inset: Media;
    drift: string;
  };
  copies: CopyBlock[];
  collage: { ariaLabel: string; figures: { image: Media; caption: string }[] };
  scene: { image: Media; caption: string; eyebrow: string; heading: string; body: string };
  quote: { text: string; cite: string; eyebrow: string };
  expand: { image: Media; eyebrow: string; heading: string };
  atelier: { src: string; penMs: number }[];
  models: {
    eyebrow: string;
    heading: string;
    body: string;
    models: { image: Media; name: string; body: string; href: string; ctaLabel: string }[];
  } | null;
  services: {
    eyebrow: string;
    heading: string;
    body: string;
    cards: { image: Media; name: string; body: string; href: string }[];
  } | null;
  faq: { eyebrow: string; heading: string; items: FaqItem[] };
  footerLineArt: string;
};

