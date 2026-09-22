import type { MarquePage } from "./types";

export const mclaren: MarquePage = {
    slug: "mclaren",
    name: "McLaren",
    title: "McLaren at Oto | Oto Motors",
    collageReverse: true,
    hero: {
      image: {
        src: "/assets/cars-images/mclaren/mclaren.jpg",
        alt: "McLaren — wide shot"
      },
      video: null,
      eyebrow: "OTO / MCLAREN",
      heading: "A singular focus.",
      sub: "McLaren",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "McLaren line study",
      lineArt: "/assets/cars-images/mclaren/mclaren-side-lineart.svg",
      faceText: false,
      eyebrow: "THE WORLD OF MCLAREN",
      heading: "Closer to the drive.",
      body: "A low silhouette and a cockpit built around you. Explore the form, then tell us the model and specification you want to make your own."
    },
    layer: {
      word: "McLaren",
      back: {
        src: "/assets/cars-images/mclaren/mclaren-front.jpg",
        alt: "McLaren — front"
      },
      inset: {
        src: "/assets/cars-images/mclaren/mclaren-side-city.jpg",
        alt: "McLaren — side city"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "Nothing between you and the road.",
        body: "A model is only the beginning. The colour, the materials, the way it fits into your life. These are the details we start with."
      },
      {
        variant: "default",
        eyebrow: "FROM PREFERENCE TO ARRANGEMENT",
        heading: "Consider it arranged.",
        body: "Oto works with its dealer network to establish sourcing options, explain the proposed structure and coordinate delivery. You review the details through one point of contact."
      }
    ],
    collage: {
      ariaLabel: "McLaren design details",
      figures: [
        {
          image: {
            src: "/assets/cars-images/mclaren/mclaren-front.jpg",
            alt: "McLaren — front"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/cars-images/mclaren/mclaren-back-black.jpg",
            alt: "McLaren — rear"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/mclaren-720s.webp",
        alt: "McLaren 720S"
      },
      caption: "",
      eyebrow: "THE 720S",
      heading: "Another expression.",
      body: "Consider the 720S. A different perspective on McLaren, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/cars-images/mclaren/mclaren-door-open-backshot.jpg",
        alt: "McLaren — door open rear"
      },
      eyebrow: "A WIDER PERSPECTIVE",
      heading: "Yours to imagine."
    },
    atelier: [
      {
        src: "/assets/cars-images/mclaren/mclaren-side-lineart.svg",
        penMs: 18000
      },
      {
        src: "/assets/cars-images/mclaren/mclaren-back-lineart.svg",
        penMs: 18000
      }
    ],
    models: {
      eyebrow: "YOUR NEXT CHAPTER",
      heading: "Your McLaren.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/cars-images/mclaren/mclaren-door-open-backshot.jpg",
            alt: "Artura"
          },
          name: "Artura",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=McLaren%20Artura",
          ctaLabel: "Explore Artura"
        },
        {
          image: {
            src: "/assets/mclaren-720s.webp",
            alt: "720S"
          },
          name: "720S",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=McLaren%20720S",
          ctaLabel: "Explore 720S"
        },
        {
          image: {
            src: "/assets/cars-images/mclaren/mclaren.jpg",
            alt: "765LT"
          },
          name: "765LT",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=McLaren%20765LT",
          ctaLabel: "Explore 765LT"
        },
        {
          image: {
            src: "/assets/cars-images/mclaren/mclaren-front.jpg",
            alt: "GT"
          },
          name: "GT",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=McLaren%20GT",
          ctaLabel: "Explore GT"
        }
      ]
    },
    services: {
      eyebrow: "YOUR NEXT CHAPTER",
      heading: "Continue your journey.",
      body: "",
      cards: [
        {
          image: {
            src: "/assets/cars-images/maserati/maserati.jpg",
            alt: "Maserati"
          },
          name: "Maserati",
          body: "Another perspective.",
          href: "/maserati"
        },
        {
          image: {
            src: "/assets/cars-images/ferrari/ferrari-wide.jpg",
            alt: "Ferrari"
          },
          name: "Ferrari",
          body: "Another perspective.",
          href: "/ferrari"
        },
        {
          image: {
            src: "/assets/bentley-emblem.webp",
            alt: "The showroom"
          },
          name: "The showroom",
          body: "Explore the wider Oto selection.",
          href: "/showroom"
        }
      ]
    },
    faq: {
      eyebrow: "BEFORE WE BEGIN",
      heading: "A few details.",
      items: [
        {
          question: "Can I request a different model or specification?",
          answer: "Yes. Include the McLaren model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
        },
        {
          question: "How will I know the total cost?",
          answer: "The proposed structure and applicable costs are presented for your review before you proceed. There is no indicative monthly figure detached from a specific vehicle and agreement."
        },
        {
          question: "Where does Oto arrange delivery?",
          answer: "Our New York office coordinates Northeast delivery. Our Florida office coordinates delivery throughout Florida. Include your destination with your inquiry."
        }
      ]
    },
    footerLineArt: "/assets/cars-images/mclaren/mclaren-side-lineart.svg"
  };
