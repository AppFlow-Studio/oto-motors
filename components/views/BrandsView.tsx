import Link from "next/link";
import { BRANDS_PAGE } from "@/content/brands";
import { DirectionMark } from "@/components/ui/OtoAction";

export function BrandsView() {
  const page = BRANDS_PAGE;
  return (
    <main id="main">
      <section className="mi-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={page.hero.image.alt}
          fetchPriority="high"
          src={page.hero.image.src}
        />
        <div>
          <span className="mi-kicker">{page.hero.kicker}</span>
          <h1>{page.hero.heading}</h1>
          <p>{page.hero.sub}</p>
          <a className="oto-action" href="#marque-selection">
            <DirectionMark />
            <span className="oto-action-label">{page.hero.ctaLabel}</span>
          </a>
        </div>
      </section>

      <section className="mi-intro">
        <span className="mi-kicker">{page.intro.kicker}</span>
        <h2>{page.intro.heading}</h2>
        <p>{page.intro.body}</p>
      </section>

      <section
        aria-label="Explore all ten marques"
        className="mi-grid"
        id="marque-selection"
      >
        {page.cards.map((card) => (
          <article className="mi-card" data-marque-reveal="" key={card.href}>
            <Link className="mi-photo" href={card.href}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={card.image.alt} loading="lazy" src={card.image.src} />
            </Link>
            <div className="mi-card-copy">
              <div>
                <h2>{card.name}</h2>
                <p>{card.tagline}</p>
              </div>
              <Link className="oto-action" href={card.href}>
                <DirectionMark />
                <span className="oto-action-label">Discover {card.name}</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mi-end">
        <span className="mi-kicker">{page.end.kicker}</span>
        <h2>{page.end.heading}</h2>
        <p>{page.end.body}</p>
        <Link className="oto-action" href={page.end.ctaHref}>
          <DirectionMark />
          <span className="oto-action-label">{page.end.ctaLabel}</span>
        </Link>
      </section>
    </main>
  );
}
