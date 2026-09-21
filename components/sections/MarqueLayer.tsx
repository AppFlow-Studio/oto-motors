import type { Media, Video } from "@/content/payments";

/** Brand overlay chapter (word + inset). */
export function MarqueLayer({
  word,
  back,
  inset,
  drift,
}: {
  word: string;
  back: Media;
  inset: Media;
  drift: string;
}) {
  return (
    <section className="n-layer-track n-layer-overlay" id="main-content">
      <div className="n-layer-back">
        <div className="n-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={back.alt} decoding="async" loading="eager" src={back.src} />
        </div>
        <span aria-hidden="true" className="n-layer-word">
          {word}
        </span>
      </div>
      <div className="n-layer-content">
        <figure className="n-layer-inset" data-drift={drift}>
          <div className="n-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={inset.alt} decoding="async" loading="eager" src={inset.src} />
          </div>
        </figure>
      </div>
    </section>
  );
}
