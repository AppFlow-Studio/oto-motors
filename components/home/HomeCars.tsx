import { DirectionMark } from "@/components/ui/OtoAction";

/** Journey scrub + showroom carousel — classes wired to journey / home-motion / visual-motion. */
export function HomeCars() {
  return (
    <section className="cars section" id="cars">
      <div className="wrap">
        <div className="section-tag">WHAT WE LEASE</div>
        <h2>A matter of preference.</h2>
        <p className="intro">
          The silhouette. The materials. The way it feels from the driver’s seat. Tell
          us what matters to you; we’ll establish availability and terms.
        </p>
      </div>

      <section
        aria-label="The Oto experience"
        aria-roledescription="carousel"
        className="journey"
        tabIndex={0}
      >
        <div className="journey-slides">
          <article
            aria-labelledby="chapter-tab-1"
            className="journey-slide active"
            id="chapter-1"
            role="tabpanel"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Bentley leather and stitching in warm light"
              loading="lazy"
              src="/assets/bentley-interior.webp"
            />
            <div className="journey-copy">
              <span>01 / YOUR PREFERENCE</span>
              <h3>In the details.</h3>
              <p>
                A model, a finish, a particular feeling. We start with what matters to
                you, then establish availability through our dealer network.
              </p>
              <span className="journey-marque">BENTLEY / CONTINENTAL GT</span>
            </div>
          </article>

          <article
            aria-labelledby="chapter-tab-2"
            className="journey-slide"
            hidden
            id="chapter-2"
            role="tabpanel"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Lamborghini Urus against quiet architecture"
              loading="lazy"
              src="/assets/urus.webp"
            />
            <div className="journey-copy">
              <span>02 / THE ARRANGEMENT</span>
              <h3>Leave it with us.</h3>
              <p>
                We negotiate with the dealer and structure your lease. You review the
                terms with Oto, without a showroom visit.
              </p>
              <span className="journey-marque">LAMBORGHINI / URUS</span>
            </div>
          </article>

          <article
            aria-labelledby="chapter-tab-3"
            className="journey-slide"
            hidden
            id="chapter-3"
            role="tabpanel"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Green Aston Martin DB12 beside a mirror-still alpine lake"
              loading="lazy"
              src="/assets/aston-lake.webp"
            />
            <div className="journey-copy">
              <span>03 / YOUR DESTINATION</span>
              <h3>Room to exhale.</h3>
              <p>
                We coordinate delivery. When the keys arrive, the vehicle, deal
                structure, destination, and elapsed days enter the manifest.
              </p>
              <span className="journey-marque">ASTON MARTIN / DB12</span>
            </div>
            <div className="chapter-detail film-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Aston Martin bodywork reflected in soft daylight"
                loading="lazy"
                src="/assets/aston-detail.webp"
              />
              <video
                aria-label="Aston Martin paint and wheel detail film"
                data-src="/assets/aston-detail.mp4"
                loop
                muted
                playsInline
                poster="/assets/aston-detail.webp"
                preload="none"
              />
            </div>
          </article>
        </div>

        <div className="journey-footer">
          <span aria-live="polite" className="journey-count">
            01 / 03
          </span>
          <div aria-label="Choose a chapter" className="journey-tabs" role="tablist">
            <button
              aria-controls="chapter-1"
              aria-selected="true"
              id="chapter-tab-1"
              role="tab"
            >
              Your preference
            </button>
            <button
              aria-controls="chapter-2"
              aria-selected="false"
              id="chapter-tab-2"
              role="tab"
              tabIndex={-1}
            >
              The arrangement
            </button>
            <button
              aria-controls="chapter-3"
              aria-selected="false"
              id="chapter-tab-3"
              role="tab"
              tabIndex={-1}
            >
              Your destination
            </button>
          </div>
          <div className="journey-controls">
            <button aria-label="Previous chapter" data-chapter-step="-1" type="button">
              ←
            </button>
            <button aria-label="Next chapter" data-chapter-step="1" type="button">
              →
            </button>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="showroom-head">
          <div>
            <h3>A closer look.</h3>
            <a className="text-link showroom-entry oto-action" href="/showroom">
              <DirectionMark />
              <span className="oto-action-label">Explore the showroom</span>
            </a>
          </div>
          <div className="carousel-controls">
            <button aria-label="Previous cars" id="prev">
              <DirectionMark reverse />
            </button>
            <button aria-label="Next cars" id="next">
              <DirectionMark />
            </button>
            <span aria-hidden="true" className="carousel-progress" />
          </div>
        </div>
      </div>

      <div aria-label="Models to inquire about" className="showroom" tabIndex={0}>
        {(
          [
            {
              brand: "MCLAREN",
              name: "Artura",
              href: "/mclaren",
              explore: "Explore McLaren",
              src: "/assets/mclaren-rear.webp",
              alt: "Silver McLaren Artura rear wheel and tail light in cool studio light",
              note: "Lease sourcing on request",
            },
            {
              brand: "MASERATI",
              name: "GranTurismo",
              href: "/maserati",
              explore: "Explore Maserati",
              src: "/assets/maserati-front.webp",
              alt: "Navy Maserati GranTurismo grille and headlamp on warm cobblestones",
              note: "Lease sourcing on request",
            },
            {
              brand: "FERRARI",
              name: "Roma",
              href: "/ferrari",
              explore: "Explore Ferrari",
              src: "/assets/ferrari-roma.webp",
              alt: "Burgundy Ferrari Roma rear quarter and tail lamp in a warm stone courtyard",
              note: "Sourcing on request",
            },
            {
              brand: "RANGE ROVER",
              name: "Range Rover",
              href: "/range-rover",
              explore: "Explore Range Rover",
              src: "/assets/range-profile.webp",
              alt: "Pearl white Range Rover side profile in minimalist daylight architecture",
              note: "Lease sourcing on request",
            },
            {
              brand: "BUGATTI",
              name: "Veyron",
              href: "/bugatti",
              explore: "Explore Bugatti",
              src: "/assets/bugatti-veyron.webp",
              alt: "Two-tone Bugatti Veyron front quarter in soft architectural light",
              note: "Individual inquiry · Availability and terms to be reviewed",
            },
          ] as const
        ).map((car) => (
          <article className="car-card" key={car.href}>
            <div className="car-photo" data-reveal="image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={car.alt} loading="lazy" src={car.src} />
            </div>
            <div className="car-info">
              <div>
                <span>{car.brand}</span>
                <h3>{car.name}</h3>
              </div>
              <a aria-label={car.explore} className="model-round" href={car.href}>
                <DirectionMark />
              </a>
            </div>
            <p>{car.note}</p>
          </article>
        ))}
      </div>

      <p className="image-note wrap">
        Images and films are illustrative. Vehicles are sourced through our dealer
        network; availability and terms are confirmed individually.
      </p>
    </section>
  );
}
