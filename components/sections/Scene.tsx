import type { Media, Video } from "@/content/payments";

/** Full-bleed scene with optional caption/copy. */
export function Scene({
  image,
  caption,
  eyebrow,
  heading,
  body,
}: {
  image: Media;
  caption?: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="n-scene">
      <div className="n-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={image.alt} decoding="async" loading="eager" src={image.src} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
      {(eyebrow || heading || body) && (
        <div className="n-scene-copy" data-rise="">
          {eyebrow ? <span className="n-eyebrow">{eyebrow}</span> : null}
          {heading ? <h2>{heading}</h2> : null}
          {body ? <p>{body}</p> : null}
        </div>
      )}
    </section>
  );
}
