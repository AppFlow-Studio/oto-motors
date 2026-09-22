"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Media } from "@/content/payments";
import { DirectionMark } from "@/components/ui/OtoAction";

type ModelCard = {
  image: Media;
  name: string;
  body: string;
  href: string;
  ctaLabel: string;
};

/** Horizontal model strip — same carousel pattern as the homepage showroom. */
export function ModelCarousel({
  id = "models",
  brand,
  eyebrow,
  heading,
  body,
  cards,
}: {
  id?: string;
  brand: string;
  eyebrow: string;
  heading: string;
  body: string;
  cards: ModelCard[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft < 5);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 5);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync, cards.length]);

  function scrollByCard(dir: -1 | 1) {
    const track = trackRef.current;
    const card = track?.querySelector("article");
    if (!track || !card) return;
    track.scrollBy({ left: dir * (card.clientWidth + 24), behavior: "smooth" });
  }

  return (
    <section className="n-models" id={id}>
      <div className="wrap">
        <div className="n-models-heading">
          <span className="n-eyebrow">{eyebrow}</span>
          <h2 data-rise="">{heading}</h2>
          {body ? <p>{body}</p> : null}
        </div>
      </div>

      <div
        aria-label={`${brand} models`}
        className="showroom n-models-track"
        ref={trackRef}
        tabIndex={0}
      >
        {cards.map((car) => (
          <article className="car-card" key={car.name + car.href}>
            <div className="car-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={car.image.alt || car.name}
                decoding="async"
                loading="lazy"
                src={car.image.src}
              />
            </div>
            <div className="car-info">
              <div>
                <span>{brand.toUpperCase()}</span>
                <h3>{car.name}</h3>
              </div>
              <a aria-label={car.ctaLabel} className="model-round" href={car.href}>
                <DirectionMark />
              </a>
            </div>
            <p>{car.body}</p>
          </article>
        ))}
      </div>

      <div className="n-models-nav">
        <div className="carousel-controls">
          <button
            aria-label="Previous models"
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
            type="button"
          >
            <DirectionMark reverse />
          </button>
          <button
            aria-label="Next models"
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
            type="button"
          >
            <DirectionMark />
          </button>
        </div>
      </div>
    </section>
  );
}
