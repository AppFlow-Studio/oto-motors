/** Homepage content — edit assets/copy here. Class names stay in components/home. */

export const HOME = {
  hero: {
    image: {
      src: "/assets/aston-coast.webp",
      alt: "Pearl Aston Martin DB12 beside a calm lake and limestone architecture",
    },
    video: {
      src: "/assets/homepage-hero.mp4",
      poster: "/assets/aston-coast.webp",
      ariaLabel: "Aston Martin coastal film",
    },
    heading: "At your leisure.",
    body: "Exotic and luxury car leasing, arranged from inquiry to delivery.",
    location: "New York & Florida.",
    ctaHref: "/build-your-deal",
    ctaLabel: "Build your deal",
    footHref: "/deliveries",
    footLabel: "Meet the manifest",
  },
  brands: [
    { href: "/lamborghini", src: "/assets/logo-lamborghini.svg", alt: "Lamborghini" },
    { href: "/rolls-royce", src: "/assets/logo-rolls-royce.svg", alt: "Rolls-Royce" },
    { href: "/bentley", src: "/assets/logo-bentley.svg", alt: "Bentley" },
    { href: "/maserati", src: "/assets/logo-maserati.svg", alt: "Maserati" },
    { href: "/ferrari", src: "/assets/logo-ferrari.svg", alt: "Ferrari" },
    { href: "/bugatti", src: "/assets/logo-bugatti.svg", alt: "Bugatti" },
    { href: "/range-rover", src: "/assets/logo-range-rover.png", alt: "Range Rover" },
  ],
  record: {
    image: {
      src: "/assets/bentley-emblem.webp",
      alt: "Sculptural polished winged bonnet emblem in deep shadow",
    },
  },
} as const;
