import type { Media } from "@/content/payments";

/** Sticky expand image chapter. */
export function ExpandTrack({
  image,
  eyebrow,
  heading,
}: {
  image: Media;
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="n-expand-track">
      <div className="n-expand" data-expand="">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={image.alt} decoding="async" loading="lazy" src={image.src} />
        {(eyebrow || heading) && (
          <div className="n-expand-copy">
            {eyebrow ? <span className="n-eyebrow">{eyebrow}</span> : null}
            {heading ? <h2>{heading}</h2> : null}
          </div>
        )}
      </div>
    </section>
  );
}
