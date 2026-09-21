// @ts-nocheck
import { createEffectScope } from "./scope";

export function initMarques() {
  const scope = createEffectScope();
  const { signal } = scope;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const clamp = (x) => Math.min(1, Math.max(0, x));
  const cards = [...document.querySelectorAll("[data-marque-reveal]")];
  const observers = [];

  if ("IntersectionObserver" in window && !reduced.matches) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("n-wait");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    observers.push(observer);
    cards.forEach((c, i) => {
      c.style.transitionDelay = i % 2 ? "120ms" : "0ms";
      if (c.getBoundingClientRect().top > innerHeight) c.classList.add("n-wait");
      observer.observe(c);
    });
  }

  const heroes = [...document.querySelectorAll(".mi-hero")];
  let ticking = false;
  let raf = 0;

  function updateHero(hero, h) {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > h) {
      hero.style.setProperty("--hero-blur", "0px");
      hero.style.setProperty("--hero-blur-scale", "0");
      hero.style.setProperty("--hero-veil", "0");
      hero.style.setProperty("--hero-copy-opacity", "1");
      hero.style.setProperty("--hero-copy-shift", "0px");
      return;
    }
    const progress = clamp(-rect.top / Math.max(rect.height * 0.72, 1));
    const eased = progress * progress * (3 - 2 * progress);
    hero.style.setProperty("--hero-blur", `${(eased * 22).toFixed(2)}px`);
    hero.style.setProperty("--hero-blur-scale", (eased * 0.045).toFixed(4));
    hero.style.setProperty("--hero-veil", eased.toFixed(4));
    hero.style.setProperty(
      "--hero-copy-opacity",
      String(Math.max(0, 1 - eased * 1.35)),
    );
    hero.style.setProperty("--hero-copy-shift", `${(eased * -28).toFixed(1)}px`);
  }

  function update() {
    ticking = false;
    if (reduced.matches || !heroes.length) return;
    const h = innerHeight;
    heroes.forEach((hero) => updateHero(hero, h));
  }

  function request() {
    if (!ticking) {
      ticking = true;
      raf = requestAnimationFrame(update);
    }
  }

  if (heroes.length) {
    addEventListener("scroll", request, { passive: true, signal });
    addEventListener("resize", request, { signal });
    const onReduce = () => {
      if (reduced.matches) {
        heroes.forEach((hero) => {
          hero.style.setProperty("--hero-blur", "0px");
          hero.style.setProperty("--hero-blur-scale", "0");
          hero.style.setProperty("--hero-veil", "0");
          hero.style.setProperty("--hero-copy-opacity", "1");
          hero.style.setProperty("--hero-copy-shift", "0px");
        });
      }
      request();
    };
    reduced.addEventListener("change", onReduce, { signal });
    request();
  }

  scope.onDispose(() => {
    cancelAnimationFrame(raf);
    observers.forEach((o) => o.disconnect());
  });

  return scope.dispose;
}
