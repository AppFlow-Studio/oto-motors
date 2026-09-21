import type { MarquePage } from "./types";

export const lamborghini: MarquePage = {
    slug: "lamborghini",
    name: "Lamborghini",
    title: "Lamborghini at Oto | Oto Motors",
    collageReverse: true,
    hero: {
      image: {
        src: "/assets/urus.webp",
        alt: "Lamborghini Urus"
      },
      video: null,
      eyebrow: "OTO / LAMBORGHINI",
      heading: "A different energy.",
      sub: "Lamborghini",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Lamborghini line study",
      lineArt: "/assets/drawing-lambo-line-drawing.svg",
      eyebrow: "THE WORLD OF LAMBORGHINI",
      heading: "Presence, without a word.",
      body: "A sculpted profile. A precise detail. Choose the expression that feels like you, and leave the search to Oto."
    },
    layer: {
      word: "Lamborghini",
      back: {
        src: "/assets/lamborghini-detail.webp",
        alt: "Lamborghini — close detail"
      },
      inset: {
        src: "/assets/urus.webp",
        alt: "Lamborghini — editorial film"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "Character in every angle.",
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
      ariaLabel: "Lamborghini design details",
      figures: [
        {
          image: {
            src: "/assets/urus.webp",
            alt: "Lamborghini — exterior study"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/lamborghini-detail.webp",
            alt: "Lamborghini — a closer perspective"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/lamborghini-huracan.webp",
        alt: "Lamborghini Huracán EVO"
      },
      caption: "",
      eyebrow: "THE HURACÁN EVO",
      heading: "Another expression.",
      body: "Consider the Huracán EVO. A different perspective on Lamborghini, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/urus.webp",
        alt: "Lamborghini Urus"
      },
      eyebrow: "A WIDER PERSPECTIVE",
      heading: "Yours to imagine."
    },
    atelier: [
      {
        src: "/assets/drawing-lambo-line-drawing.svg",
        penMs: 18000
      },
      {
        src: "/assets/drawing-maserati-03.svg",
        penMs: 18000
      }
    ],
    models: {
      eyebrow: "YOUR NEXT CHAPTER",
      heading: "Your Lamborghini.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/urus.webp",
            alt: "Urus"
          },
          name: "Urus",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Lamborghini%20Urus",
          ctaLabel: "Explore Urus"
        },
        {
          image: {
            src: "/assets/lamborghini-huracan.webp",
            alt: "Huracán EVO"
          },
          name: "Huracán EVO",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Lamborghini%20Hurac%C3%A1n%20EVO",
          ctaLabel: "Explore Huracán EVO"
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
            src: "/assets/bentley-detail.webp",
            alt: "Bentley"
          },
          name: "Bentley",
          body: "Another perspective.",
          href: "/bentley"
        },
        {
          image: {
            src: "/assets/rolls-villa.webp",
            alt: "Rolls-Royce"
          },
          name: "Rolls-Royce",
          body: "Another perspective.",
          href: "/rolls-royce"
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
          answer: "Yes. Include the Lamborghini model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
    footerLineArt: "/assets/drawing-lambo-line-drawing.svg"
  };
