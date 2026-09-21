import type { MarquePage } from "./types";

export const bugatti: MarquePage = {
    slug: "bugatti",
    name: "Bugatti",
    title: "Bugatti at Oto | Oto Motors",
    collageReverse: true,
    hero: {
      image: {
        src: "/assets/bugatti-veyron.webp",
        alt: "Bugatti Veyron"
      },
      video: null,
      eyebrow: "OTO / BUGATTI",
      heading: "A study in distinction.",
      sub: "Bugatti",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Bugatti line study",
      lineArt: "/assets/drawing-car-svg.svg",
      eyebrow: "THE WORLD OF BUGATTI",
      heading: "An individual conversation.",
      body: "Explore established Bugatti models through a specialist inquiry. Sourcing and payment arrangements are considered for the specific vehicle."
    },
    layer: {
      word: "Bugatti",
      back: {
        src: "/assets/bugatti-veyron.webp",
        alt: "Bugatti — close detail"
      },
      inset: {
        src: "/assets/bugatti-veyron.webp",
        alt: "Bugatti — editorial film"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "Form, with intent.",
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
      ariaLabel: "Bugatti design details",
      figures: [
        {
          image: {
            src: "/assets/bugatti-veyron.webp",
            alt: "Bugatti — exterior study"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/bugatti-veyron.webp",
            alt: "Bugatti — a closer perspective"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/bugatti-chiron.webp",
        alt: "Bugatti Chiron"
      },
      caption: "",
      eyebrow: "THE CHIRON",
      heading: "Another expression.",
      body: "Consider the Chiron. A different perspective on Bugatti, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/bugatti-veyron.webp",
        alt: "Bugatti Veyron"
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
      heading: "Your Bugatti.",
      body: "A starting point for your inquiry. Illustrative imagery, not a live inventory. No lease availability is implied.",
      models: [
        {
          image: {
            src: "/assets/bugatti-veyron.webp",
            alt: "Veyron"
          },
          name: "Veyron",
          body: "Specialist sourcing inquiry. Payment options confirmed individually.",
          href: "/build-your-deal?car=Bugatti%20Veyron",
          ctaLabel: "Explore Veyron"
        },
        {
          image: {
            src: "/assets/bugatti-chiron.webp",
            alt: "Chiron"
          },
          name: "Chiron",
          body: "Specialist sourcing inquiry. Payment options confirmed individually.",
          href: "/build-your-deal?car=Bugatti%20Chiron",
          ctaLabel: "Explore Chiron"
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
            src: "/assets/hero.webp",
            alt: "Porsche"
          },
          name: "Porsche",
          body: "Another perspective.",
          href: "/porsche"
        },
        {
          image: {
            src: "/assets/urus.webp",
            alt: "Lamborghini"
          },
          name: "Lamborghini",
          body: "Another perspective.",
          href: "/lamborghini"
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
          answer: "Yes. Include the Bugatti model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
