export const SITE = {
  name: 'OTO Motors',
  url: 'https://otomotors.example',
  tagline: 'Independent luxury and exotic car brokerage',
}

export const NAV = [
  { label: 'Leasing', href: '/leasing/' },
  { label: 'Financing', href: '/financing/' },
  { label: 'Buying', href: '/cash-purchase/' },
  { label: 'Deliveries', href: '/deliveries/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'New York', href: '/new-york/' },
  { label: 'Fort Lauderdale', href: '/fort-lauderdale/' },
]

export const OFFICES = {
  ny: {
    line1: '200 Vesey Street',
    line2: 'Battery Park City, New York, NY',
    postal: '10281',
    locality: 'New York',
    regionCode: 'NY',
    geo: { lat: 40.7127, lng: -74.0155 },
  },
  fl: {
    line1: 'Fort Lauderdale',
    line2: 'Fort Lauderdale, FL',
    postal: '33301',
    locality: 'Fort Lauderdale',
    regionCode: 'FL',
    geo: { lat: 26.1224, lng: -80.1373 },
  },
}

export const CREDIBILITY = [
  { label: 'DEALER RELATIONSHIPS', value: '10 YEARS' },
  { label: 'MARQUES PLACED', value: '12' },
  { label: 'STATES SOURCED FROM', value: '24' },
  { label: 'MEDIAN DELIVERY', value: '11 DAYS' },
]

export type Marque = {
  slug: string
  name: string
  // Honest sourcing constraint per marque — never claims insider access.
  constraint: string
}

export const MARQUES: Marque[] = [
  {
    slug: 'porsche',
    name: 'Porsche',
    constraint:
      'Porsche allocation is controlled at the dealer level and the desirable specs — GT cars, Turbo variants, specific Paint to Sample combinations — rarely reach a lot before they are spoken for. We do not have a secret allocation. What we have is a wider net than a single store, so when a build matches we find it faster.',
  },
  {
    slug: 'mercedes-amg',
    name: 'Mercedes-AMG',
    constraint:
      'AMG G-Class allocation is tight and Manufaktur combinations can take a long time through one dealership. We work multiple sources at once and buy the car that already matches the spec rather than waiting on an order that may not come.',
  },
  {
    slug: 'range-rover',
    name: 'Range Rover',
    constraint:
      'The Autobiography and SV trims move quickly, and dealer waitlists on the LWB cars can run months. Most of the ones we place are located in another state and negotiated out of an existing allocation, not ordered fresh.',
  },
  {
    slug: 'ferrari',
    name: 'Ferrari',
    constraint:
      'Ferrari ties allocation to purchase history, which means a new buyer often cannot order the car they want at any price. The used and low-mileage market is where these deals actually happen, and it rewards knowing which cars are honest and which are not.',
  },
  {
    slug: 'lamborghini',
    name: 'Lamborghini',
    constraint:
      'Lamborghini build slots are limited and the configurator is where the wait begins. We source cars that are already built or already in the country, verify the spec, and move on the ones worth moving on.',
  },
  {
    slug: 'bentley',
    name: 'Bentley',
    constraint:
      'Bentley Mulliner commissions are slow by design. When a client cannot wait on a commission, we find a completed car with a comparable specification and negotiate it, which is usually a matter of matching hide and veneer rather than compromising.',
  },
  {
    slug: 'rolls-royce',
    name: 'Rolls-Royce',
    constraint:
      'Bespoke Rolls-Royce commissions run a year or more. The cars we place fastest are completed Bespoke examples already sitting somewhere in the country, where the work is finding the right one and confirming the commission details, not building it.',
  },
  {
    slug: 'mclaren',
    name: 'McLaren',
    constraint:
      'McLaren volumes are low and the specialist cars are thin on the ground. Sourcing one is a matter of knowing the small number of places these cars actually turn up and being ready to move when one does.',
  },
  {
    slug: 'aston-martin',
    name: 'Aston Martin',
    constraint:
      'Aston Martin allocation is manageable but the desirable colors and Q specifications are not. We source the finished cars in the specs that are worth having rather than ordering into a long queue.',
  },
  {
    slug: 'bmw-m',
    name: 'BMW M',
    constraint:
      'BMW M cars are more available than the exotics, but the limited variants — CS cars, Label editions, specific Individual paints — are not. Those are the ones we spend the effort locating; the rest are a phone call.',
  },
  {
    slug: 'maserati',
    name: 'Maserati',
    constraint:
      'Maserati volumes are small and the MC20 in particular is thin in the used market. Sourcing one honestly means checking history carefully, because the cars that come up for sale early tend to come up for a reason.',
  },
  {
    slug: 'audi',
    name: 'Audi',
    constraint:
      'Audi RS models are broadly available, but the RS6 Avant in the right color with the right options is the one people actually want and the one that moves. We locate the specific build rather than settling for whatever is on a lot.',
  },
]

export function getMarque(slug: string): Marque | undefined {
  return MARQUES.find((m) => m.slug === slug)
}

export type ModelPage = {
  brandSlug: string
  modelSlug: string
  name: string
  match: string // used by byModel()
  h1: string
  title: string
  description: string
}

export const MODELS: ModelPage[] = [
  {
    brandSlug: 'mercedes-amg',
    modelSlug: 'g-wagon',
    name: 'Mercedes-AMG G-Wagon',
    match: 'g-wagon',
    h1: 'Leasing and Buying a Mercedes-AMG G-Wagon',
    title: 'Mercedes-AMG G-Wagon Lease & Buy — New York & Fort Lauderdale',
    description:
      'How a G-Wagon lease or purchase is actually structured, why the G-Class holds value, and how we shorten delivery. Independent brokerage, no dealer markup.',
  },
  {
    brandSlug: 'mercedes-amg',
    modelSlug: 'g63',
    name: 'Mercedes-AMG G63',
    match: 'g63',
    h1: 'Leasing a Mercedes-AMG G63',
    title: 'Mercedes-AMG G63 Lease — New York & Fort Lauderdale',
    description:
      'How a G63 lease is actually constructed — money factor, residual, cap cost — plus wait times, buyout at lease end, and how we shorten delivery. Independent brokerage, no dealer markup.',
  },
  {
    brandSlug: 'porsche',
    modelSlug: '911',
    name: 'Porsche 911',
    match: '911',
    h1: 'Leasing and Buying a Porsche 911',
    title: 'Porsche 911 Lease & Buy — New York & Fort Lauderdale',
    description:
      'How a Porsche 911 lease or purchase is structured, how allocation actually works on GT and Turbo cars, and how we source the spec you want. Independent brokerage.',
  },
]

export function getModel(brandSlug: string, modelSlug: string): ModelPage | undefined {
  return MODELS.find((m) => m.brandSlug === brandSlug && m.modelSlug === modelSlug)
}

export type Crossing = {
  slug: string
  marqueSlug: string
  region: 'ny' | 'fl'
  cityName: string
  h1: string
  title: string
  description: string
}

export const CROSSINGS: Crossing[] = [
  {
    slug: 'porsche-lease-nyc',
    marqueSlug: 'porsche',
    region: 'ny',
    cityName: 'New York City',
    h1: 'Porsche Leasing in New York City',
    title: 'Porsche Lease NYC — Independent Brokerage',
    description:
      'Porsche leasing in New York. How allocation works, how the lease is built, and how we source the spec you want, titled and registered in New York.',
  },
  {
    slug: 'range-rover-lease-nyc',
    marqueSlug: 'range-rover',
    region: 'ny',
    cityName: 'New York City',
    h1: 'Range Rover Leasing in New York City',
    title: 'Range Rover Lease NYC — Independent Brokerage',
    description:
      'Range Rover leasing in New York. Autobiography and SV allocation, how the lease is structured, and NY titling handled end to end.',
  },
  {
    slug: 'ferrari-lease-nyc',
    marqueSlug: 'ferrari',
    region: 'ny',
    cityName: 'New York City',
    h1: 'Ferrari Leasing in New York City',
    title: 'Ferrari Lease NYC — Independent Brokerage',
    description:
      'Ferrari leasing and acquisition in New York. How allocation and purchase history really work, and how we source honest cars, titled in New York.',
  },
  {
    slug: 'porsche-lease-fort-lauderdale',
    marqueSlug: 'porsche',
    region: 'fl',
    cityName: 'Fort Lauderdale',
    h1: 'Porsche Leasing in Fort Lauderdale',
    title: 'Porsche Lease Fort Lauderdale — Independent Brokerage',
    description:
      'Porsche leasing in South Florida. How allocation works, how the lease is built, and how we source the spec you want, titled and registered in Florida.',
  },
]

export function getCrossing(slug: string): Crossing | undefined {
  return CROSSINGS.find((c) => c.slug === slug)
}

export type IntentPage = {
  slug: string
  h1: string
  title: string
  description: string
  body: string[]
}

export const INTENT_PAGES: IntentPage[] = [
  {
    slug: 'leasing',
    h1: 'Luxury and Exotic Car Leasing',
    title: 'Luxury & Exotic Car Leasing',
    description:
      'How leasing a luxury or exotic car actually works — cap cost, residual, money factor — and how an independent brokerage structures it without a dealer markup.',
    body: [
      'Leasing is the lower monthly outlay for most of our clients, because you only pay for the depreciation you use rather than the whole car. It also keeps you out of any exposure to what the car is worth in three years, and it leaves the option to walk away or buy it at the end open.',
      'A lease payment is three numbers and only three numbers: the capitalized cost you negotiate, the residual the bank sets, and the money factor, which is the interest rate. We show you all three so you can judge the deal instead of trusting a monthly figure with no math behind it.',
      'We do not publish payments, because a published payment is either an advertisement for a car that does not exist in your spec or it is stale. We give you the real number for your car.',
    ],
  },
  {
    slug: 'financing',
    h1: 'Financing a Luxury or Exotic Car',
    title: 'Luxury & Exotic Car Financing',
    description:
      'When financing beats leasing, how lenders treat high-value and exotic vehicles, and how an independent brokerage arranges the loan and the car together.',
    body: [
      'Financing makes sense when you plan to keep the car past the point where a lease ends, or when the car is likely to hold its value. You own it, and once the loan is paid the payments stop.',
      'Lending on these values is not the same as an ordinary auto loan. Not every bank writes to the numbers, fewer write to an LLC, and the ones that do want documentation most buyers have not assembled. We know which lenders say yes to which structures.',
      'We arrange the loan and source the car in one process, so the approval and the vehicle line up instead of you chasing one after the other.',
    ],
  },
  {
    slug: 'cash-purchase',
    h1: 'Buying a Luxury or Exotic Car Outright',
    title: 'Cash Purchase — Luxury & Exotic Cars',
    description:
      'The fastest close: cash purchase with no lender and no approval. Still worth running the numbers before you commit. Independent brokerage, honest comparison.',
    body: [
      'Cash is the fastest close. No lender, no approval, no income inclusion, no money factor to be marked up. When speed matters — a year-end delivery, a car that will not last on the market — it is often the right call.',
      'It is still worth running the numbers. Cash is not automatically the cheapest route once you account for what that money would otherwise do, and for a business buyer the purchase-versus-lease comparison changes again because of how depreciation is treated.',
      'We source the car, verify it, and handle the purchase and titling. If a different structure would serve you better, we will say so before you wire anything.',
    ],
  },
  {
    slug: 'business-leasing',
    h1: 'Business Leasing and Business Purchase',
    title: 'Business Leasing — Luxury & Exotic Cars',
    description:
      'How business leasing and purchase differ for luxury and exotic vehicles, how Section 179 and depreciation factor in, and how we structure and title the deal.',
    body: [
      'A business acquisition changes the math. On a purchase, Section 179 and bonus depreciation can produce a large year-one deduction on a vehicle rated over 6,000 pounds — enough to reverse the usual lease-versus-buy comparison outright.',
      'On a standard lease you generally deduct the business-use portion of the payments, with an income inclusion adjustment on higher-value vehicles. Different mechanism, usually smaller in year one, steadier across the term.',
      'We structure the deal, title it to the entity, and get the car delivered inside the tax year. Your accountant confirms the treatment and signs the return — we do not give tax advice, we get you the car in time to claim it.',
    ],
  },
  {
    slug: 'out-of-state',
    h1: 'Buying a Car Out of State',
    title: 'Buying a Car Out of State — Registration Handled',
    description:
      'Most of the cars we place start in another state. How out-of-state purchase, sales tax, title transfer and temporary tags actually work, handled end to end.',
    body: [
      'Most of the cars we place are sitting in another state when we find them. An out-of-state purchase does not avoid your home-state tax — tax is collected where the car is registered, not where it was bought — but it does change the paperwork sequence and the risk of the title arriving wrong.',
      'The part that goes wrong when people try it alone is the sequence: title transfer, sales tax treatment, plates, temporary tags, and getting the car home legally in the meantime. We handle all of it.',
      'You get the specific car you want wherever it is, and you can drive it the day it lands.',
    ],
  },
  {
    slug: 'llc-titling',
    h1: 'LLC Titling',
    title: 'LLC Titling for Luxury & Exotic Vehicles',
    description:
      'What titling a vehicle to an LLC does and does not do, how it affects lending and the deduction, and how we handle the documentation lenders actually require.',
    body: [
      'Titling to an LLC does not by itself create a tax deduction — business use does. What the LLC does is keep the vehicle off your personal name, make ownership clean, and make the recordkeeping defensible.',
      'It also changes the lending. Not every bank writes to an LLC at these values, and the ones that do want documentation most buyers have not assembled: operating agreement, EIN, sometimes a personal guarantee.',
      'We know which lenders say yes to which structures, and we assemble the documentation before it holds up the car.',
    ],
  },
  {
    slug: 'vehicle-sourcing',
    h1: 'Vehicle Sourcing',
    title: 'Vehicle Sourcing — Luxury & Exotic Cars',
    description:
      'We go looking for the specific car you want instead of moving whatever is on a lot. How independent sourcing works across 12 marques and 24 states.',
    body: [
      'We do not hold inventory and we are not tied to a dealership, which means we go looking for the specific car you want instead of moving whatever is on a lot. Ten years of dealer relationships is how these happen.',
      'Sourcing honestly means verifying the build and the history before we recommend a car, not after. On anything pre-owned we arrange marque-specialist inspection — a Ferrari gets a Ferrari technician, not a general shop.',
      'The record below is the argument. Every car we have placed, how long it took, and where it came from.',
    ],
  },
]

export function getIntent(slug: string): IntentPage | undefined {
  return INTENT_PAGES.find((p) => p.slug === slug)
}
