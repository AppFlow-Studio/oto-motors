import { HOME } from "@/content/home";

export function HomeBrandStrip() {
  return (
    <section aria-label="Explore the marques" className="brand-strip">
      {HOME.brands.map((brand) => (
        <a href={brand.href} key={brand.href}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={brand.alt} loading="lazy" src={brand.src} />
        </a>
      ))}
    </section>
  );
}
