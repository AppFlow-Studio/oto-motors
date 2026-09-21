import type { MarquePage } from "./types";

export const rolls_royce: MarquePage = {
    slug: "rolls-royce",
    name: "Rolls-Royce",
    title: "Rolls-Royce at Oto | Oto Motors",
    collageReverse: true,
    hero: {
      image: {
        src: "/assets/rolls-villa.webp",
        alt: "Rolls-Royce Ghost"
      },
      video: {
        src: "/assets/rolls-arch.mp4",
        poster: "/assets/rolls-villa.webp",
        ariaLabel: "Rolls-Royce Ghost"
      },
      eyebrow: "OTO / ROLLS-ROYCE",
      heading: "Room for nothing else.",
      sub: "Rolls-Royce",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Rolls-Royce line study",
      lineArt: "/assets/drawing-car-svg.svg",
      eyebrow: "THE WORLD OF ROLLS-ROYCE",
      heading: "The outside world can wait.",
      body: "A quiet cabin, an unhurried arrival. Tell us what your Rolls-Royce should feel like, from its first impression to its smallest detail."
    },
    layer: {
      word: "Rolls-Royce",
      back: {
        src: "/assets/rolls-royce-detail.webp",
        alt: "Rolls-Royce — close detail"
      },
      inset: {
        src: "/assets/rolls-villa.webp",
        alt: "Rolls-Royce — editorial film"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "A presence all its own.",
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
      ariaLabel: "Rolls-Royce design details",
      figures: [
        {
          image: {
            src: "/assets/rolls-villa.webp",
            alt: "Rolls-Royce — exterior study"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/rolls-royce-detail.webp",
            alt: "Rolls-Royce — a closer perspective"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/rolls-cullinan.webp",
        alt: "Rolls-Royce Cullinan"
      },
      caption: "",
      eyebrow: "THE CULLINAN",
      heading: "Another expression.",
      body: "Consider the Cullinan. A different perspective on Rolls-Royce, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/rolls-villa.webp",
        alt: "Rolls-Royce Ghost"
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
      heading: "Your Rolls-Royce.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/rolls-villa.webp",
            alt: "Ghost"
          },
          name: "Ghost",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Rolls-Royce%20Ghost",
          ctaLabel: "Explore Ghost"
        },
        {
          image: {
            src: "/assets/rolls-cullinan.webp",
            alt: "Cullinan"
          },
          name: "Cullinan",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Rolls-Royce%20Cullinan",
          ctaLabel: "Explore Cullinan"
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
            src: "/assets/aston-lake.webp",
            alt: "Aston Martin"
          },
          name: "Aston Martin",
          body: "Another perspective.",
          href: "/aston-martin"
        },
        {
          image: {
            src: "/assets/mclaren-rear.webp",
            alt: "McLaren"
          },
          name: "McLaren",
          body: "Another perspective.",
          href: "/mclaren"
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
          answer: "Yes. Include the Rolls-Royce model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
