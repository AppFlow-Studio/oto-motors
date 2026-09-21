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
