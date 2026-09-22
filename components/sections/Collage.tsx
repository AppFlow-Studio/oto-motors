import type { Media } from "@/content/payments";
import { SILK } from "@/content/site";

/** Two-figure collage with silk material. */
export function Collage({
  ariaLabel,
  reverse,
  figures,
}: {
  ariaLabel: string;
  reverse?: boolean;
  figures: { image: Media; caption: string; drift?: string }[];
}) {
  const [first, second] = figures;
  return (
    <section
      aria-label={ariaLabel}
      className={reverse ? "n-collage n-collage-reverse" : "n-collage"}
    >
      {first ? (
        <figure data-drift={first.drift ?? "-64"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={first.image.alt} decoding="async" loading="lazy" src={first.image.src} />
          {first.caption ? <figcaption>{first.caption}</figcaption> : null}
        </figure>
      ) : null}
      <div aria-hidden="true" className="n-material">
        <video
          aria-hidden="true"
          className="silk-layer"
          loop
          muted
          playsInline
          poster={SILK.poster}
          preload="metadata"
        >
          <source src={SILK.video} type="video/mp4" />
        </video>
      </div>
      {second ? (
        <figure data-drift={second.drift ?? "64"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={second.image.alt} decoding="async" loading="lazy" src={second.image.src} />
          {second.caption ? <figcaption>{second.caption}</figcaption> : null}
        </figure>
      ) : null}
    </section>
  );
}
