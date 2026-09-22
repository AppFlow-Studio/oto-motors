import type { MarquePage } from "./types";

export const porsche: MarquePage = {
    slug: "porsche",
    name: "Porsche",
    title: "Porsche at Oto | Oto Motors",
    collageReverse: false,
    hero: {
      image: {
        src: "/assets/cars-images/porsche/porsche-wide.jpg",
        alt: "Porsche — wide shot"
      },
      video: null,
      eyebrow: "OTO / PORSCHE",
      heading: "The road, distilled.",
      sub: "Porsche",
      ctaHref: "#models",
      ctaLabel: "Discover the models"
    },
    entrance: {
      ariaLabel: "Porsche line study",
      lineArt: "/assets/cars-images/porsche/porsche-lineart-side.svg",
      faceText: true,
      eyebrow: "THE WORLD OF PORSCHE",
      heading: "A line you recognise. A feeling you return to.",
      body: "From the silhouette of a 911 to the everyday space of a Cayenne, begin with the way you want to drive."
    },
    layer: {
      word: "Porsche",
      back: {
        src: "/assets/cars-images/porsche/porsche-tire-closeup.jpg",
        alt: "Porsche — tire closeup"
      },
      inset: {
        src: "/assets/cars-images/porsche/porsche-back.jpg",
        alt: "Porsche — rear"
      },
      drift: "-28"
    },
    copies: [
      {
        variant: "default",
        eyebrow: "THE DETAILS THAT STAY WITH YOU",
        heading: "Every line has a purpose.",
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
      ariaLabel: "Porsche design details",
      figures: [
        {
          image: {
            src: "/assets/cars-images/porsche/porsche-tire-closeup.jpg",
            alt: "Porsche — tire closeup"
          },
          caption: "01 / THE FORM"
        },
        {
          image: {
            src: "/assets/cars-images/porsche/porsche-front.jpg",
            alt: "Porsche — front"
          },
          caption: "02 / THE FEELING"
        }
      ]
    },
    scene: {
      image: {
        src: "/assets/porsche-cayenne.webp",
        alt: "Porsche Cayenne"
      },
      caption: "",
      eyebrow: "THE CAYENNE",
      heading: "Another expression.",
      body: "Consider the Cayenne. A different perspective on Porsche, with your preferences at the centre."
    },
    quote: {
      text: "The car is personal.\nThe process should feel effortless.",
      cite: "",
      eyebrow: "THE OTO APPROACH"
    },
    expand: {
      image: {
        src: "/assets/cars-images/porsche/porsche-motion.jpg",
        alt: "Porsche — motion"
      },
      eyebrow: "A WIDER PERSPECTIVE",
      heading: "Yours to imagine."
    },
    atelier: [
      {
        src: "/assets/cars-images/porsche/porsche-lineart-side.svg",
        penMs: 18000
      },
      {
        src: "/assets/cars-images/porsche/porsche-lineart-back.svg",
        penMs: 18000
      }
    ],
    models: {
      eyebrow: "YOUR NEXT CHAPTER",
      heading: "Your Porsche.",
      body: "Models to consider. Illustrative imagery, not a live inventory.",
      models: [
        {
          image: {
            src: "/assets/cars-images/porsche/porsche-closeup-city.jpg",
            alt: "911"
          },
          name: "911",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Porsche%20911",
          ctaLabel: "Explore 911"
        },
        {
          image: {
            src: "/assets/porsche-cayenne.webp",
            alt: "Cayenne"
          },
          name: "Cayenne",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Porsche%20Cayenne",
          ctaLabel: "Explore Cayenne"
        },
        {
          image: {
            src: "/assets/cars-images/porsche/porsche-wide.jpg",
            alt: "Taycan"
          },
          name: "Taycan",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Porsche%20Taycan",
          ctaLabel: "Explore Taycan"
        },
        {
          image: {
            src: "/assets/cars-images/porsche/porsche-front.jpg",
            alt: "Panamera"
          },
          name: "Panamera",
          body: "Sourcing inquiry. Specification, availability and terms confirmed individually.",
          href: "/build-your-deal?car=Porsche%20Panamera",
          ctaLabel: "Explore Panamera"
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
            src: "/assets/cars-images/lamborghini/lamborghini-wide.jpg",
            alt: "Lamborghini"
          },
          name: "Lamborghini",
          body: "Another perspective.",
          href: "/lamborghini"
        },
        {
          image: {
            src: "/assets/cars-images/bentley/bentley-wide.jpg",
            alt: "Bentley"
          },
          name: "Bentley",
          body: "Another perspective.",
          href: "/bentley"
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
          answer: "Yes. Include the Porsche model, finish and interior you have in mind. We will establish sourcing options for that particular vehicle."
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
    footerLineArt: "/assets/cars-images/porsche/porsche-lineart-side.svg"
  };
