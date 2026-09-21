import type { MarquePage } from "./types";

export const bentley: MarquePage = {
    slug: "bentley",
    name: "Bentley",
    title: "Bentley at Oto | Oto Motors",
    collageReverse: false,
    hero: {
      image: {
        src: "/assets/bentley-detail.webp",
        alt: "Bentley Continental GT"
      },
      video: null,
      eyebrow: "OTO / BENTLEY",
      heading: "The art of taking your time.",
      sub: "Bentley",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Bentley line study",
      lineArt: "/assets/drawing-car-svg.svg",
      eyebrow: "THE WORLD OF BENTLEY",
      heading: "A world within.",
      body: "The finish of a surface. The colour of a cabin. The details you live with deserve as much attention as the view from outside."
    },
    layer: {
      word: "Bentley",
      back: {
        src: "/assets/bentley-interior.webp",
        alt: "Bentley — close detail"
      },
      inset: {
        src: "/assets/bentley-detail.webp",
        alt: "Bentley — editorial film"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "Made for the longer journey.",
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
      ariaLabel: "Bentley design details",
      figures: [
        {
          image: {
            src: "/assets/bentley-detail.webp",
            alt: "Bentley — exterior study"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/bentley-interior.webp",
            alt: "Bentley — a closer perspective"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/bentley-bentayga.webp",
        alt: "Bentley Bentayga"
      },
      caption: "",
      eyebrow: "THE BENTAYGA",
      heading: "Another expression.",
      body: "Consider the Bentayga. A different perspective on Bentley, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/bentley-detail.webp",
        alt: "Bentley Continental GT"
      },
      eyebrow: "A WIDER PERSPECTIVE",
      heading: "Yours to imagine."
    },
    atelier: [
      {
        src: "/assets/drawing-car-svg.svg",
        penMs: 18000
      },
      {
        src: "/assets/drawing-maserati-03.svg",
        penMs: 18000
      }
    ],
    models: {
      eyebrow: "YOUR NEXT CHAPTER",
      heading: "Your Bentley.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/bentley-detail.webp",
            alt: "Continental GT"
          },
          name: "Continental GT",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Bentley%20Continental%20GT",
          ctaLabel: "Explore Continental GT"
        },
        {
          image: {
            src: "/assets/bentley-bentayga.webp",
            alt: "Bentayga"
          },
          name: "Bentayga",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Bentley%20Bentayga",
          ctaLabel: "Explore Bentayga"
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
            src: "/assets/rolls-villa.webp",
            alt: "Rolls-Royce"
          },
          name: "Rolls-Royce",
          body: "Another perspective.",
          href: "/rolls-royce"
        },
        {
          image: {
            src: "/assets/aston-lake.webp",
            alt: "Aston Martin"
          },
          name: "Aston Martin",
          body: "Another perspective.",
          href: "/aston-martin"
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
          answer: "Yes. Include the Bentley model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
