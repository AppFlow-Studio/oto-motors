export type Media = { src: string; alt: string };
export type Video = {
  src: string | null | undefined;
  poster?: string | null;
  ariaLabel?: string | null;
};
export type CopyBlock = {
  variant: "default" | "light";
  eyebrow: string;
  heading: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
};
export type FaqItem = { question: string; answer: string };

export type PaymentPage = {
  slug: string;
  title: string;
  payment: string;
  hero: {
    image: Media;
    video: Video | null;
    eyebrow: string;
    heading: string;
    sub: string;
    ctaHref: string;
    ctaLabel: string;
  };
  layer: {
    image: Media;
    eyebrow: string;
    heading: string;
    body: string;
  };
  preference: CopyBlock;
  arrangement: CopyBlock;
  scene: {
    image: Media;
    eyebrow: string;
    heading: string;
    body: string;
  };
  quote: { eyebrow: string; line1: string; line2: string };
  expand: { image: Media; eyebrow: string; heading: string };
  record: CopyBlock;
  faq: { eyebrow: string; heading: string; items: FaqItem[] };
  options: {
    eyebrow: string;
    heading: string;
    body: string;
    cards: { image: Media; name: string; body: string; href: string }[];
  };
  footerLineArt: string;
};

const SHARED_OPTIONS = {
  eyebrow: "YOUR NEXT CHAPTER",
  heading: "The way you make it yours.",
  body: "Explore the structure that suits your plans.",
  cards: [
    {
      image: { src: "/assets/hero.webp", alt: "Leasing" },
      name: "Leasing",
      body: "A defined term and agreed mileage.",
      href: "/leasing",
    },
    {
      image: { src: "/assets/bentley-detail.webp", alt: "Financing" },
      name: "Financing",
      body: "A purchase with an agreed repayment plan.",
      href: "/financing",
    },
    {
      image: { src: "/assets/maserati-front.webp", alt: "Cash purchase" },
      name: "Cash purchase",
      body: "An outright purchase, individually arranged.",
      href: "/cash-purchase",
    },
  ],
} as const;

const SHARED_PREFERENCE: CopyBlock = {
  variant: "default",
  eyebrow: "01 / YOUR PREFERENCE",
  heading: "First, the feeling.",
  body: "A particular model. A finish you remember. Or a direction you have in mind. Tell us where to begin; we will establish the available options.",
  ctaHref: "/showroom",
  ctaLabel: "Explore the showroom",
};

const SHARED_SCENE = {
  eyebrow: "03 / YOUR DESTINATION",
  heading: "Room for everything else.",
  body: "Your car, the paperwork and the agreed delivery plan. Coordinated through one point of contact.",
};

const SHARED_QUOTE = {
  eyebrow: "PROOF, NOT PROMISES",
  line1: "The story continues",
  line2: "in the manifest.",
};

const SHARED_EXPAND = {
  image: {
    src: "/assets/bentley-emblem.webp",
    alt: "A close study of automotive craftsmanship",
  },
  eyebrow: "A WIDER PERSPECTIVE",
  heading: "Beyond the photograph.",
};

const SHARED_RECORD: CopyBlock = {
  variant: "default",
  eyebrow: "THE PUBLIC RECORD",
  heading: "Every detail has its place.",
  body: "Our manifest is designed to record each completed delivery: the vehicle, deal structure, destination and elapsed days. Oto is new; there are no completed delivery entries yet.",
  ctaHref: "/deliveries",
  ctaLabel: "View the manifest",
};

export const PAYMENTS: Record<string, PaymentPage> = {
  leasing: {
    slug: "leasing",
    title: "Leasing | Oto Motors",
    payment: "Lease",
    hero: {
      image: {
        src: "/assets/rolls-villa.webp",
        alt: "Leasing — editorial vehicle study",
      },
      video: {
        src: "/assets/rolls-arch.mp4",
        poster: "/assets/rolls-villa.webp",
        ariaLabel: "Leasing — editorial vehicle study",
      },
      eyebrow: "OTO / LEASING",
      heading: "A different way to drive.",
      sub: "New York · Florida",
      ctaHref: "/build-your-deal?payment=Lease",
      ctaLabel: "Begin a conversation",
    },
    layer: {
      image: { src: "/assets/urus.webp", alt: "Oto — editorial film" },
      eyebrow: "THE WORLD OF OTO",
      heading: "Your time, considered.",
      body: "A lease begins with the car you want and the way you will use it. Oto brings the vehicle, proposed term and delivery details into one conversation.",
    },
    preference: SHARED_PREFERENCE,
    arrangement: {
      variant: "light",
      eyebrow: "02 / THE ARRANGEMENT",
      heading: "The details, clearly arranged.",
      body: "Your proposed agreement should set out the term, mileage allowance, payments, amount due at signing and applicable fees. Review these together, with any end-of-term conditions.",
      ctaHref: "/build-your-deal?payment=Lease",
      ctaLabel: "Discuss your leasing",
    },
    scene: {
      image: { src: "/assets/aston-lake.webp", alt: "Vehicle in its surroundings" },
      ...SHARED_SCENE,
    },
    quote: SHARED_QUOTE,
    expand: SHARED_EXPAND,
    record: SHARED_RECORD,
    faq: {
      eyebrow: "BEFORE WE BEGIN",
      heading: "A few details.",
      items: [
        {
          question: "What determines a lease quote?",
          answer:
            "The vehicle, term, mileage allowance, credit approval, taxes, fees and amount due at signing all affect the quote. We confirm the details for your specific request.",
        },
        {
          question: "What happens at the end of the term?",
          answer:
            "Your agreement explains the return conditions and any purchase option, along with possible mileage or wear charges. Review those provisions before committing.",
        },
        {
          question: "Where does Oto operate?",
          answer:
            "Our offices in New York and Florida coordinate Northeast and statewide Florida delivery respectively.",
        },
      ],
    },
    options: { ...SHARED_OPTIONS, cards: [...SHARED_OPTIONS.cards] },
    footerLineArt: "/assets/drawing-lambo-line-drawing.svg",
  },
  financing: {
    slug: "financing",
    title: "Financing | Oto Motors",
    payment: "Finance",
    hero: {
      image: {
        src: "/assets/bentley-detail.webp",
        alt: "Financing — editorial vehicle study",
      },
      video: null,
      eyebrow: "OTO / FINANCING",
      heading: "A longer view.",
      sub: "New York · Florida",
      ctaHref: "/build-your-deal?payment=Finance",
      ctaLabel: "Begin a conversation",
    },
    layer: {
      image: { src: "/assets/hero.webp", alt: "Oto — editorial film" },
      eyebrow: "THE WORLD OF OTO",
      heading: "Ownership, thoughtfully arranged.",
      body: "Begin with the car you want to keep. Oto coordinates sourcing and helps bring the proposed financing terms into a clear, individual review.",
    },
    preference: SHARED_PREFERENCE,
    arrangement: {
      variant: "light",
      eyebrow: "02 / THE ARRANGEMENT",
      heading: "See the whole arrangement.",
      body: "Review the vehicle price, down payment, interest rate, repayment term, applicable fees and total cost together. Financing is subject to lender approval and the terms of the specific agreement.",
      ctaHref: "/build-your-deal?payment=Finance",
      ctaLabel: "Discuss your financing",
    },
    scene: {
      image: { src: "/assets/rolls-villa.webp", alt: "Vehicle in its surroundings" },
      ...SHARED_SCENE,
    },
    quote: SHARED_QUOTE,
    expand: SHARED_EXPAND,
    record: SHARED_RECORD,
    faq: {
      eyebrow: "BEFORE WE BEGIN",
      heading: "A few details.",
      items: [
        {
          question: "Are finance terms the same for every car?",
          answer:
            "No. The vehicle, lender criteria, applicant and proposed structure affect the terms. Oto confirms the options for your individual inquiry.",
        },
        {
          question: "Can I choose my down payment and term?",
          answer:
            "Tell us your preferences. Available structures depend on lender approval and the particular vehicle. Review the total cost as well as the monthly payment.",
        },
        {
          question: "Where does Oto operate?",
          answer:
            "Our offices in New York and Florida coordinate Northeast and statewide Florida delivery respectively.",
        },
      ],
    },
    options: { ...SHARED_OPTIONS, cards: [...SHARED_OPTIONS.cards] },
    footerLineArt: "/assets/drawing-lambo-line-drawing.svg",
  },
  "cash-purchase": {
    slug: "cash-purchase",
    title: "Cash purchase | Oto Motors",
    payment: "Cash",
    hero: {
      image: {
        src: "/assets/aston-lake.webp",
        alt: "Cash purchase — editorial vehicle study",
      },
      video: {
        src: "/assets/aston-drive.mp4",
        poster: "/assets/aston-lake.webp",
        ariaLabel: "Cash purchase — editorial vehicle study",
      },
      eyebrow: "OTO / CASH PURCHASE",
      heading: "Simply, yours.",
      sub: "New York · Florida",
      ctaHref: "/build-your-deal?payment=Cash",
      ctaLabel: "Begin a conversation",
    },
    layer: {
      image: { src: "/assets/ferrari-roma.webp", alt: "Oto — editorial film" },
      eyebrow: "THE WORLD OF OTO",
      heading: "One clear conversation.",
      body: "An outright purchase still deserves a considered process. Oto coordinates the search, dealer discussions and delivery around the car you have in mind.",
    },
    preference: SHARED_PREFERENCE,
    arrangement: {
      variant: "light",
      eyebrow: "02 / THE ARRANGEMENT",
      heading: "Every detail accounted for.",
      body: "Review the agreed vehicle specification, price, taxes and applicable fees before proceeding. Payment instructions, paperwork and the delivery plan are confirmed for the transaction.",
      ctaHref: "/build-your-deal?payment=Cash",
      ctaLabel: "Discuss your cash purchase",
    },
    scene: {
      image: {
        src: "/assets/range-profile.webp",
        alt: "Vehicle in its surroundings",
      },
      ...SHARED_SCENE,
    },
    quote: SHARED_QUOTE,
    expand: SHARED_EXPAND,
    record: SHARED_RECORD,
    faq: {
      eyebrow: "BEFORE WE BEGIN",
      heading: "A few details.",
      items: [
        {
          question: "Can you help locate a specific car?",
          answer:
            "Share the model, finish, interior and options you prefer. Oto will establish sourcing options through its dealer network.",
        },
        {
          question: "How is delivery arranged?",
          answer:
            "We coordinate the agreed transport, destination and registration details with you. Timing depends on the specific car and transaction.",
        },
        {
          question: "Where does Oto operate?",
          answer:
            "Our offices in New York and Florida coordinate Northeast and statewide Florida delivery respectively.",
        },
      ],
    },
    options: { ...SHARED_OPTIONS, cards: [...SHARED_OPTIONS.cards] },
    footerLineArt: "/assets/drawing-lambo-line-drawing.svg",
  },
};

export const PAYMENT_SLUGS = Object.keys(PAYMENTS);
