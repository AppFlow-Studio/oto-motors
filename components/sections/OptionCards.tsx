import type { Media } from "@/content/payments";
import { OtoAction } from "@/components/ui/OtoAction";

/** Model / option card grid. */
export function OptionCards({
  id = "models",
  eyebrow,
  heading,
  body,
  cards,
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  body: string;
  cards: { image: Media; name: string; body: string; href: string; ctaLabel?: string }[];
}) {
  return (
    <section className="n-options" id={id}>
      <div className="n-options-heading">
        <span className="n-eyebrow">{eyebrow}</span>
        <h2 data-rise="">{heading}</h2>
        {body ? <p>{body}</p> : null}
      </div>
      <div className="n-option-grid">
        {cards.map((card) => (
          <article key={card.name + card.href}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={card.image.alt || card.name} decoding="async" loading="lazy" src={card.image.src} />
            <div>
              <h3>{card.name}</h3>
              <p>{card.body}</p>
              {card.ctaLabel ? (
                <OtoAction href={card.href} label={card.ctaLabel} />
              ) : (
                <OtoAction href={card.href} label={`Explore ${card.name}`} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
