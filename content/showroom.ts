export type ShowroomModel = {
  brand: string;
  model: string;
  body: string;
  image: string;
  description: string;
  detail?: boolean;
};

export const SHOWROOM_MODELS: ShowroomModel[] = [
  {
    brand: "Rolls-Royce",
    model: "Ghost",
    body: "Sedan",
    image: "rolls-villa.webp",
    description: "Tell us your preferred finish, interior, and payment approach. We’ll confirm the options through our dealer network."
  },
  {
    brand: "Aston Martin",
    model: "DB12",
    body: "Coupe",
    image: "aston-lake.webp",
    description: "A particular color or interior in mind? Include it in your inquiry so we can establish the available options."
  },
  {
    brand: "Bentley",
    model: "Continental GT",
    body: "Coupe",
    image: "bentley-detail.webp",
    description: "From exterior finish to interior materials, tell us the details that matter to you."
  },
  {
    brand: "Lamborghini",
    model: "Urus",
    body: "SUV",
    image: "urus.webp",
    description: "Share your preferred specification and where you’d like the car delivered. We’ll establish availability and terms."
  },
  {
    brand: "McLaren",
    model: "Artura",
    body: "Coupe",
    image: "mclaren-rear.webp",
    detail: true,
    description: "Start with the specification you have in mind. Availability and deal structure are confirmed individually."
  },
  {
    brand: "Maserati",
    model: "GranTurismo",
    body: "Coupe",
    image: "maserati-front.webp",
    detail: true,
    description: "Tell us the finish and interior you prefer. Oto coordinates the search and explains the available terms."
  },
  {
    brand: "Ferrari",
    model: "Roma",
    body: "Coupe",
    image: "ferrari-roma.webp",
    description: "An inquiry begins with your preferred specification. Oto will review sourcing options and the appropriate deal structure."
  },
  {
    brand: "Range Rover",
    model: "Range Rover",
    body: "SUV",
    image: "range-profile.webp",
    description: "Share your preferred finish, interior, and delivery destination. We’ll confirm the options for your inquiry."
  },
  {
    brand: "Bugatti",
    model: "Veyron",
    body: "Coupe",
    image: "bugatti-veyron.webp",
    description: "An individual sourcing inquiry. Availability and an appropriate payment structure require specialist review; no lease offer is implied."
  },
  {
    brand: "Porsche",
    model: "911",
    body: "Coupe",
    image: "hero.webp",
    description: "Tell us which 911 you have in mind, including body style and specification. We’ll establish availability through our dealer network."
  }
];

export const SHOWROOM_MARQUE_LINKS = [
  {
    href: "/porsche",
    lineArt: "/assets/drawing-car-svg.svg",
    label: "Porsche"
  },
  {
    href: "/lamborghini",
    lineArt: "/assets/drawing-lambo-line-drawing.svg",
    label: "Lamborghini"
  },
  {
    href: "/bentley",
    lineArt: "/assets/drawing-car-svg.svg",
    label: "Bentley"
  },
  {
    href: "/rolls-royce",
    lineArt: "/assets/drawing-car-svg.svg",
    label: "Rolls-Royce"
  },
  {
    href: "/aston-martin",
    lineArt: "/assets/drawing-car-svg.svg",
    label: "Aston Martin"
  },
  {
    href: "/mclaren",
    lineArt: "/assets/drawing-car-svg.svg",
    label: "McLaren"
  },
  {
    href: "/maserati",
    lineArt: "/assets/drawing-maserati-01.svg",
    label: "Maserati"
  },
  {
    href: "/ferrari",
    lineArt: "/assets/drawing-ferrari.svg",
    label: "Ferrari"
  },
  {
    href: "/range-rover",
    lineArt: "/assets/drawing-range-rover.svg",
    label: "Range Rover"
  },
  {
    href: "/bugatti",
    lineArt: "/assets/drawing-car-svg.svg",
    label: "Bugatti"
  }
];

export const SHOWROOM_INTRO = {
  tag: "THE SHOWROOM",
  heading: "A matter of preference.",
  body: "Explore the cars. Tell us what you have in mind.\nWe’ll establish availability and structure the next steps.",
} as const;
