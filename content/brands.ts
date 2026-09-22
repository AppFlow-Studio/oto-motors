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
      src: "/assets/cars-images/aston-martin/aston-martin-black-wide-nature.jpg",
      alt: "Aston Martin — wide nature shot"
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
        src: "/assets/cars-images/aston-martin/aston-martin-black-wide-nature.jpg",
        alt: "Aston Martin — wide nature shot"
      },
      name: "Aston Martin",
      tagline: "The long way home."
    },
    {
      href: "/rolls-royce",
      image: {
        src: "/assets/cars-images/rolls-royce/rolls-royce-nature-wide.jpg",
        alt: "Rolls-Royce — nature wide"
      },
      name: "Rolls-Royce",
      tagline: "A world of your own."
    },
    {
      href: "/porsche",
      image: {
        src: "/assets/cars-images/porsche/porsche-wide.jpg",
        alt: "Porsche — wide shot"
      },
      name: "Porsche",
      tagline: "A line you recognise."
    },
    {
      href: "/bentley",
      image: {
        src: "/assets/cars-images/bentley/bentley-wide.jpg",
        alt: "Bentley — wide shot"
      },
      name: "Bentley",
      tagline: "Time, beautifully spent."
    },
    {
      href: "/lamborghini",
      image: {
        src: "/assets/cars-images/lamborghini/urus-black.jpg",
        alt: "Lamborghini Urus — black"
      },
      name: "Lamborghini",
      tagline: "An unmistakable presence."
    },
    {
      href: "/mclaren",
      image: {
        src: "/assets/cars-images/mclaren/mclaren.jpg",
        alt: "McLaren — wide shot"
      },
      name: "McLaren",
      tagline: "Closer to the drive."
    },
    {
      href: "/maserati",
      image: {
        src: "/assets/cars-images/maserati/maserati.jpg",
        alt: "Maserati — wide shot"
      },
      name: "Maserati",
      tagline: "An Italian point of view."
    },
    {
      href: "/ferrari",
      image: {
        src: "/assets/cars-images/ferrari/ferrari-wide.jpg",
        alt: "Ferrari — wide shot"
      },
      name: "Ferrari",
      tagline: "A different kind of occasion."
    },
    {
      href: "/range-rover",
      image: {
        src: "/assets/range-profile.webp",
        alt: "Range Rover — profile"
      },
      name: "Range Rover",
      tagline: "A broader horizon."
    },
    {
      href: "/bugatti",
      image: {
        src: "/assets/cars-images/bugatti/bugatti-wide-2.jpg",
        alt: "Bugatti — pair of gold models"
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
