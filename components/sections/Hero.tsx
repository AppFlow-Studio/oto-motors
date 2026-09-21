import type { Media, Video } from "@/content/payments";
import { OtoAction } from "@/components/ui/OtoAction";

type HeroProps = {
  image: Media;
  video?: Video | null;
  eyebrow: string;
  heading: string;
  sub: string;
  ctaHref: string;
  ctaLabel: string;
};

/** Full-bleed hero for brand + payment pages. */
export function Hero({
  image,
  video,
  eyebrow,
  heading,
  sub,
  ctaHref,
  ctaLabel,
}: HeroProps) {
  return (
    <section className="n-hero">
      <div className="n-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={image.alt} decoding="async" loading="eager" src={image.src} />
        {video?.src ? (
          <video
            aria-label={video.ariaLabel ?? undefined}
            autoPlay
            loop
            muted
            playsInline
            poster={video.poster ?? image.src}
            preload="auto"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ) : null}
      </div>
      <div className="n-hero-copy">
        <span className="n-eyebrow">{eyebrow}</span>
        <h1>{heading}</h1>
        <p>{sub}</p>
        <OtoAction href={ctaHref} label={ctaLabel} />
      </div>
      <a className="n-scroll" href="#chapter-one">
        <span />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}
