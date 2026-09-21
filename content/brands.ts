import type { Media } from "./payments";

export type BrandCard = {
  href: string;
  image: Media;
  name: string;
  tagline: string;
};

export type BrandsPage = {
  title: string;
  hero: {
    image: Media;
    kicker: string;
    heading: string;
    sub: string;
    ctaLabel: string;
  };
  intro: { kicker: string; heading: string; body: string };
  cards: BrandCard[];
  end: {
    kicker: string;
    heading: string;
    body: string;
    ctaHref: string;
    ctaLabel: string;
  };
};

export const BRANDS_PAGE: BrandsPage = {
  title: "The marques | Oto Motors",
  hero: {
    image: {
      src: "/assets/aston-dbx.webp",
      alt: "Aston Martin DBX707 overlooking a quiet mountain landscape"
    },
    kicker: "THE MARQUES / OTO",
    heading: "A matter of preference.",
    sub: "Distinct worlds. An individual choice.",
    ctaLabel: "Explore the marques"
  },
  intro: {
    kicker: "FIND YOUR POINT OF VIEW",
    heading: "It begins with a feeling.",
    body: "A silhouette. A particular detail. The way you imagine the journey.\nExplore the marques, then let us know what stays with you."
  },
  cards: [
    {
      href: "/aston-martin",
      image: {
        src: "/assets/aston-lake.webp",
        alt: "Aston Martin — illustrative editorial vehicle study"
      },
      name: "Aston Martin",
      tagline: "The long way home."
    },
    {
      href: "/rolls-royce",
      image: {
        src: "/assets/rolls-villa.webp",
        alt: "Rolls-Royce — illustrative editorial vehicle study"
      },
      name: "Rolls-Royce",
      tagline: "A world of your own."
    },
    {
      href: "/porsche",
      image: {
        src: "/assets/hero.webp",
        alt: "Porsche — illustrative editorial vehicle study"
      },
      name: "Porsche",
      tagline: "A line you recognise."
    },
    {
      href: "/bentley",
      image: {
        src: "/assets/bentley-detail.webp",
        alt: "Bentley — illustrative editorial vehicle study"
      },
      name: "Bentley",
      tagline: "Time, beautifully spent."
    },
    {
      href: "/lamborghini",
      image: {
        src: "/assets/urus.webp",
        alt: "Lamborghini — illustrative editorial vehicle study"
      },
      name: "Lamborghini",
      tagline: "An unmistakable presence."
    },
    {
      href: "/mclaren",
      image: {
        src: "/assets/mclaren-720s.webp",
        alt: "McLaren — illustrative editorial vehicle study"
      },
      name: "McLaren",
      tagline: "Closer to the drive."
    },
    {
      href: "/maserati",
      image: {
        src: "/assets/maserati-front.webp",
        alt: "Maserati — illustrative editorial vehicle study"
      },
      name: "Maserati",
      tagline: "An Italian point of view."
    },
    {
      href: "/ferrari",
      image: {
        src: "/assets/ferrari-portofino.webp",
        alt: "Ferrari — illustrative editorial vehicle study"
      },
      name: "Ferrari",
      tagline: "A different kind of occasion."
    },
    {
      href: "/range-rover",
      image: {
        src: "/assets/range-profile.webp",
        alt: "Range Rover — illustrative editorial vehicle study"
      },
      name: "Range Rover",
      tagline: "A broader horizon."
    },
    {
      href: "/bugatti",
      image: {
        src: "/assets/bugatti-chiron.webp",
        alt: "Bugatti — illustrative editorial vehicle study"
      },
      name: "Bugatti",
      tagline: "An individual conversation."
    }
  ],
  end: {
    kicker: "YOUR PREFERENCE, INDIVIDUALLY ARRANGED",
    heading: "Something in mind?",
    body: "Tell us the model, finish and details you want us to explore.\nAvailability and terms are confirmed for your inquiry.",
    ctaHref: "/build-your-deal",
    ctaLabel: "Build your deal"
  }
};
