import type { MarquePage } from "./types";

export const aston_martin: MarquePage = {
    slug: "aston-martin",
    name: "Aston Martin",
    title: "Aston Martin at Oto | Oto Motors",
    collageReverse: false,
    hero: {
      image: {
        src: "/assets/aston-lake.webp",
        alt: "Aston Martin DB12"
      },
      video: {
        src: "/assets/aston-drive.mp4",
        poster: "/assets/aston-lake.webp",
        ariaLabel: "Aston Martin DB12"
      },
      eyebrow: "OTO / ASTON MARTIN",
      heading: "The long way home.",
      sub: "Aston Martin",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Aston Martin line study",
      lineArt: "/assets/drawing-car-svg.svg",
      eyebrow: "THE WORLD OF ASTON MARTIN",
      heading: "Some journeys need no occasion.",
      body: "Open country. An empty stretch of road. The particular shade of green you had in mind. Begin with the feeling; we will work through the details."
    },
    layer: {
      word: "Aston Martin",
      back: {
        src: "/assets/aston-martin-detail.webp",
        alt: "Aston Martin — close detail"
      },
      inset: {
        src: "/assets/aston-lake.webp",
        alt: "Aston Martin — editorial film"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "Space to exhale.",
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
      ariaLabel: "Aston Martin design details",
      figures: [
        {
          image: {
            src: "/assets/aston-lake.webp",
            alt: "Aston Martin — exterior study"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/aston-martin-detail.webp",
            alt: "Aston Martin — a closer perspective"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/aston-dbx.webp",
        alt: "Aston Martin DBX707"
      },
      caption: "",
      eyebrow: "THE DBX707",
      heading: "Another expression.",
      body: "Consider the DBX707. A different perspective on Aston Martin, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/aston-lake.webp",
        alt: "Aston Martin DB12"
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
      heading: "Your Aston Martin.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/aston-lake.webp",
            alt: "DB12"
          },
          name: "DB12",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Aston%20Martin%20DB12",
          ctaLabel: "Explore DB12"
        },
        {
          image: {
            src: "/assets/aston-dbx.webp",
            alt: "DBX707"
          },
          name: "DBX707",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Aston%20Martin%20DBX707",
          ctaLabel: "Explore DBX707"
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
            src: "/assets/mclaren-rear.webp",
            alt: "McLaren"
          },
          name: "McLaren",
          body: "Another perspective.",
          href: "/mclaren"
        },
        {
          image: {
            src: "/assets/maserati-front.webp",
            alt: "Maserati"
          },
          name: "Maserati",
          body: "Another perspective.",
          href: "/maserati"
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
          answer: "Yes. Include the Aston Martin model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
