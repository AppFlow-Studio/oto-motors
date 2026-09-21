import { DirectionMark } from "@/components/ui/OtoAction";
import { HOME } from "@/content/home";

/** Arrival hero — classes wired to home-motion (autoplay film). */
export function HomeHero() {
  const { hero } = HOME;
  return (
    <section className="hero film-media arrival-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={hero.image.alt}
        className="hero-image"
        fetchPriority="high"
        src={hero.image.src}
      />
      <video
        aria-label={hero.video.ariaLabel}
        data-scrub=""
        data-src={hero.video.src}
        muted
        playsInline
        poster={hero.video.poster}
        preload="metadata"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <h1>
          <span>{hero.heading}</span>
        </h1>
        <p>
          {hero.body}
          <br />
          {hero.location}
        </p>
        <a className="button light oto-action" href={hero.ctaHref}>
          <DirectionMark />
          <span className="oto-action-label">{hero.ctaLabel}</span>
        </a>
      </div>
      <div className="hero-foot">
        <a href={hero.footHref}>
          {hero.footLabel} <DirectionMark />
        </a>
      </div>
    </section>
  );
}
