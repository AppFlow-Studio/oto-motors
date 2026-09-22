import type { MarquePage } from "./types";

export const maserati: MarquePage = {
    slug: "maserati",
    name: "Maserati",
    title: "Maserati at Oto | Oto Motors",
    collageReverse: false,
    hero: {
      image: {
        src: "/assets/cars-images/maserati/maserati.jpg",
        alt: "Maserati — wide shot"
      },
      video: null,
      eyebrow: "OTO / MASERATI",
      heading: "An Italian point of view.",
      sub: "Maserati",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Maserati line study",
      lineArt: "/assets/cars-images/maserati/maserati-side-linedrawing.svg",
      faceText: false,
      eyebrow: "THE WORLD OF MASERATI",
      heading: "A little more character.",
      body: "From a grand touring silhouette to a cabin that invites you to stay, find the Maserati that belongs in your everyday."
    },
    layer: {
      word: "Maserati",
      back: {
        src: "/assets/cars-images/maserati/maserati-front-closeup.jpg",
        alt: "Maserati — front closeup"
      },
      inset: {
        src: "/assets/cars-images/maserati/maserati-motion.jpg",
        alt: "Maserati — motion"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "A journey with its own rhythm.",
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
      ariaLabel: "Maserati design details",
      figures: [
        {
          image: {
            src: "/assets/cars-images/maserati/maserati-front-closeup.jpg",
            alt: "Maserati — front closeup"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/cars-images/maserati/maserati-side-detail.jpg",
            alt: "Maserati — side detail"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/maserati-grecale.webp",
        alt: "Maserati Grecale"
      },
      caption: "",
      eyebrow: "THE GRECALE",
      heading: "Another expression.",
      body: "Consider the Grecale. A different perspective on Maserati, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/cars-images/maserati/maserati-side-detail.jpg",
        alt: "Maserati — side detail"
      },
      eyebrow: "A WIDER PERSPECTIVE",
      heading: "Yours to imagine."
    },
    atelier: [
      {
        src: "/assets/cars-images/maserati/maserati-side-linedrawing.svg",
        penMs: 18000
      },
      {
        src: "/assets/drawing-maserati-04.svg",
        penMs: 18000
      }
    ],
    models: {
      eyebrow: "YOUR NEXT CHAPTER",
      heading: "Your Maserati.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/maserati-front.webp",
            alt: "GranTurismo"
          },
          name: "GranTurismo",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Maserati%20GranTurismo",
          ctaLabel: "Explore GranTurismo"
        },
        {
          image: {
            src: "/assets/maserati-grecale.webp",
            alt: "Grecale"
          },
          name: "Grecale",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Maserati%20Grecale",
          ctaLabel: "Explore Grecale"
        },
        {
          image: {
            src: "/assets/cars-images/maserati/maserati.jpg",
            alt: "MC20"
          },
          name: "MC20",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Maserati%20MC20",
          ctaLabel: "Explore MC20"
        },
        {
          image: {
            src: "/assets/cars-images/maserati/maserati-motion.jpg",
            alt: "Levante"
          },
          name: "Levante",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Maserati%20Levante",
          ctaLabel: "Explore Levante"
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
            src: "/assets/cars-images/ferrari/ferrari-wide.jpg",
            alt: "Ferrari"
          },
          name: "Ferrari",
          body: "Another perspective.",
          href: "/ferrari"
        },
        {
          image: {
            src: "/assets/cars-images/range-rover/range-rover-mountain-wideshot.jpg",
            alt: "Range Rover"
          },
          name: "Range Rover",
          body: "Another perspective.",
          href: "/range-rover"
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
          answer: "Yes. Include the Maserati model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
    footerLineArt: "/assets/cars-images/maserati/maserati-side-linedrawing.svg"
  };
