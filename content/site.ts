export const NAV = [
  { href: "/#approach", label: "Our approach" },
  { href: "/showroom", label: "Showroom" },
  { href: "/brands", label: "The marques" },
  { href: "/deliveries", label: "The manifest" },
  { href: "/#locations", label: "Locations" },
] as const;

export const SERVICES = [
  { href: "/leasing", label: "Leasing" },
  { href: "/financing", label: "Financing" },
  { href: "/cash-purchase", label: "Cash purchase" },
  { href: "/build-your-deal", label: "Build your deal" },
] as const;

/** Brand links for the marques subnav — order matches /brands. */
export const MARQUES_NAV = [
  { href: "/aston-martin", label: "Aston Martin" },
  { href: "/rolls-royce", label: "Rolls-Royce" },
  { href: "/porsche", label: "Porsche" },
  { href: "/bentley", label: "Bentley" },
  { href: "/lamborghini", label: "Lamborghini" },
  { href: "/mclaren", label: "McLaren" },
  { href: "/maserati", label: "Maserati" },
  { href: "/ferrari", label: "Ferrari" },
  { href: "/range-rover", label: "Range Rover" },
  { href: "/bugatti", label: "Bugatti" },
] as const;

export const FOOTER_LINKS = [
  { href: "/leasing", label: "Leasing" },
  { href: "/financing", label: "Financing" },
  { href: "/cash-purchase", label: "Cash purchase" },
  { href: "/deliveries", label: "The manifest" },
  { href: "/showroom", label: "Showroom" },
  { href: "/brands", label: "The marques" },
] as const;

/** Shared fabric video used in collage + silk quotes. Swap files here only. */
export const SILK = {
  video: "/assets/silk-motion.mp4",
  poster: "/assets/silk-poster.jpg",
} as const;
