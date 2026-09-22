import type { MarquePage } from "./types";

export const ferrari: MarquePage = {
    slug: "ferrari",
    name: "Ferrari",
    title: "Ferrari at Oto | Oto Motors",
    collageReverse: true,
    hero: {
      image: {
        src: "/assets/cars-images/ferrari/ferrari-wide.jpg",
        alt: "Ferrari — wide shot"
      },
      video: null,
      eyebrow: "OTO / FERRARI",
      heading: "An unmistakable feeling.",
      sub: "Ferrari",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Ferrari line study",
      lineArt: "/assets/drawing-ferrari.svg",
      faceText: false,
      layout: "solo",
      eyebrow: "THE WORLD OF FERRARI",
      heading: "A study in expression.",
      body: "The curve of the body. The relationship between colour and light. Explore road-going Ferrari models with an individual sourcing inquiry."
    },
    layer: {
      word: "Ferrari",
      back: {
        src: "/assets/cars-images/ferrari/ferrari-closeup-2.jpg",
        alt: "Ferrari — detail closeup"
      },
      inset: {
        src: "/assets/cars-images/ferrari/ferrari-back-city.jpg",
        alt: "Ferrari — rear city shot"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "The pleasure of the open road.",
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
      ariaLabel: "Ferrari design details",
      figures: [
        {
          image: {
            src: "/assets/cars-images/ferrari/ferrari-closeup-2.jpg",
            alt: "Ferrari — detail closeup"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/cars-images/ferrari/ferrari-interior.jpg",
            alt: "Ferrari — interior"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/ferrari-portofino.webp",
        alt: "Ferrari Portofino"
      },
      caption: "",
      eyebrow: "THE PORTOFINO",
      heading: "Another expression.",
      body: "Consider the Portofino. A different perspective on Ferrari, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/cars-images/ferrari/ferrari-closeup-2.jpg",
        alt: "Ferrari — detail closeup"
      },
      eyebrow: "A WIDER PERSPECTIVE",
      heading: "Yours to imagine."
    },
    atelier: [
      {
        src: "/assets/drawing-ferrari.svg",
        penMs: 18000
      }
    ],
    models: {
      eyebrow: "YOUR NEXT CHAPTER",
      heading: "Your Ferrari.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/ferrari-roma.webp",
            alt: "Roma"
          },
          name: "Roma",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Ferrari%20Roma",
          ctaLabel: "Explore Roma"
        },
        {
          image: {
            src: "/assets/ferrari-portofino.webp",
            alt: "Portofino"
          },
          name: "Portofino",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Ferrari%20Portofino",
          ctaLabel: "Explore Portofino"
        },
        {
          image: {
            src: "/assets/cars-images/ferrari/ferrari-wide.jpg",
            alt: "296 GTB"
          },
          name: "296 GTB",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Ferrari%20296%20GTB",
          ctaLabel: "Explore 296 GTB"
        },
        {
          image: {
            src: "/assets/cars-images/ferrari/ferrari-back-city.jpg",
            alt: "SF90 Stradale"
          },
          name: "SF90 Stradale",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Ferrari%20SF90%20Stradale",
          ctaLabel: "Explore SF90 Stradale"
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
            src: "/assets/cars-images/range-rover/range-rover-mountain-wideshot.jpg",
            alt: "Range Rover"
          },
          name: "Range Rover",
          body: "Another perspective.",
          href: "/range-rover"
        },
        {
          image: {
            src: "/assets/cars-images/bugatti/bugatti-wide.jpg",
            alt: "Bugatti"
          },
          name: "Bugatti",
          body: "Another perspective.",
          href: "/bugatti"
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
          answer: "Yes. Include the Ferrari model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
    footerLineArt: "/assets/drawing-ferrari.svg"
  };
