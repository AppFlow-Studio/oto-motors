import type { Media, Video } from "@/content/payments";

/** Leasing/financing/cash expand chapter. */
export function PaymentLayer({
  image,
  eyebrow,
  heading,
  body,
}: {
  image: Media;
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <>
      <div id="chapter-one" />
      <section className="n-layer-track n-layer-lined">
        <div className="n-layer-content">
          <div className="n-layer-copy">
            <span className="n-eyebrow" data-rise="">
              {eyebrow}
            </span>
            <h2 data-rise="">{heading}</h2>
            <p data-rise="">{body}</p>
          </div>
          <div className="n-layer-expand-track" data-rise="">
            <figure className="n-layer-inset" data-expand="">
              <div className="n-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={image.alt} decoding="async" loading="eager" src={image.src} />
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
