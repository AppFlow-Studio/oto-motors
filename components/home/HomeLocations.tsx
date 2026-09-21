import { DirectionMark } from "@/components/ui/OtoAction";

/** Locations + line drawing — classes wired to materials. */
export function HomeLocations() {
  return (
    <section className="locations-scene" id="locations">
      <div aria-hidden="true" className="locations-backdrop">
        <div
          className="line-study city-backdrop"
          data-line-art="/assets/drawing-city-line-drawing.svg"
          data-pen-ms="18000"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            height={481.04}
            loading="lazy"
            src="/assets/drawing-city-line-drawing.svg"
            width={675}
          />
        </div>
      </div>
      <div className="locations wrap section locations-foreground">
        <h2>Our locations</h2>
        <div className="office-grid">
          <article className="office-entry">
            <h3>New York.</h3>
            <p>Coordinating delivery across the Northeast.</p>
            <button className="text-link oto-action" data-office="New York">
              <DirectionMark />
              <span className="oto-action-label">Discuss your delivery</span>
            </button>
          </article>
          <article className="office-entry">
            <h3>Florida.</h3>
            <p>Coordinating delivery statewide.</p>
            <button className="text-link oto-action" data-office="Florida">
              <DirectionMark />
              <span className="oto-action-label">Discuss your delivery</span>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
