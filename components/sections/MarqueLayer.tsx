import type { Media } from "@/content/payments";

/**
 * Brand chapter image — leasing-style expand on scroll.
 * No sticky background overlay; just the inset expanding in.
 */
export function MarqueLayer({
  inset,
}: {
  word?: string;
  back?: Media;
  backVideo?: unknown;
  backPattern?: unknown;
  inset: Media;
  drift?: string;
}) {
  return (
    <section className="n-layer-track n-layer-lined" id="main-content">
      <div className="n-layer-content">
        <div className="n-layer-expand-track" data-rise="">
          <figure className="n-layer-inset" data-expand="">
            <div className="n-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={inset.alt}
                decoding="async"
                loading="eager"
                src={inset.src}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
