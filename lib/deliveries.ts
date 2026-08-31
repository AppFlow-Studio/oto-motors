export type Region = 'ny' | 'fl'

export type Delivery = {
  slug: string
  year: number
  vehicle: string
  spec: string
  sourcedFrom: string
  deliveredTo: string
  days: number
  marque: string // marque slug
  region: Region // delivery region for city-page filtering
  structure: string
  inquiryDate: string
  deliveredDate: string
  narrative: string
}

// The single hand-written narrative from the brief (most recent G63).
const G63_HERO_NARRATIVE =
  "Client wanted a specific Manufaktur combination that no dealer in the Northeast had allocated. We located a matching build in Arizona, negotiated the trade, and had it on an enclosed transport within four days. Titled to the client's LLC, registered in New York, delivered to a garage in Tribeca on day nine."

// Base rows exactly as given in the brief. Narrative/structure/dates are
// generated for the design comp except the hero G63 row.
type Seed = Omit<Delivery, 'slug' | 'narrative' | 'structure' | 'inquiryDate' | 'deliveredDate'> & {
  narrative?: string
  structure?: string
  inquiryDate?: string
  deliveredDate?: string
}

const seed: Seed[] = [
  {
    year: 2026,
    vehicle: 'Mercedes-AMG G63',
    spec: 'Manufaktur Olive Magno / Black',
    sourcedFrom: 'Scottsdale, AZ',
    deliveredTo: 'Tribeca, NY',
    days: 9,
    marque: 'mercedes-amg',
    region: 'ny',
    structure: 'Business lease, LLC titled',
    inquiryDate: 'March 4',
    deliveredDate: 'March 13',
    narrative: G63_HERO_NARRATIVE,
  },
  {
    year: 2026,
    vehicle: 'Porsche 911 GT3 Touring',
    spec: 'Shark Blue / Extended Leather',
    sourcedFrom: 'Newport Beach, CA',
    deliveredTo: 'Greenwich, CT',
    days: 14,
    marque: 'porsche',
    region: 'ny',
  },
  {
    year: 2026,
    vehicle: 'Range Rover Autobiography LWB',
    spec: 'Santorini Black / Perlino',
    sourcedFrom: 'Dallas, TX',
    deliveredTo: 'Battery Park City, NY',
    days: 6,
    marque: 'range-rover',
    region: 'ny',
  },
  {
    year: 2026,
    vehicle: 'Ferrari 296 GTB',
    spec: 'Blu Corsa / Assetto Fiorano',
    sourcedFrom: 'Miami, FL',
    deliveredTo: 'Sagaponack, NY',
    days: 31,
    marque: 'ferrari',
    region: 'ny',
  },
  {
    year: 2026,
    vehicle: 'Bentley Continental GT Speed',
    spec: 'Onyx / Linen',
    sourcedFrom: 'Chicago, IL',
    deliveredTo: 'Fort Lauderdale, FL',
    days: 11,
    marque: 'bentley',
    region: 'fl',
  },
  {
    year: 2026,
    vehicle: 'BMW M5 Competition',
    spec: 'Isle of Man Green',
    sourcedFrom: 'Charlotte, NC',
    deliveredTo: 'Hoboken, NJ',
    days: 5,
    marque: 'bmw-m',
    region: 'ny',
  },
  {
    year: 2026,
    vehicle: 'Lamborghini Urus Performante',
    spec: 'Giallo Auge / Nero Ade',
    sourcedFrom: 'Las Vegas, NV',
    deliveredTo: 'Boca Raton, FL',
    days: 18,
    marque: 'lamborghini',
    region: 'fl',
  },
  {
    year: 2026,
    vehicle: 'Mercedes-AMG G63',
    spec: 'Obsidian Black / Bengal Red',
    sourcedFrom: 'Houston, TX',
    deliveredTo: 'Palm Beach, FL',
    days: 7,
    marque: 'mercedes-amg',
    region: 'fl',
  },
  {
    year: 2025,
    vehicle: 'Rolls-Royce Cullinan Black Badge',
    spec: 'Bespoke Twilight Purple',
    sourcedFrom: 'Beverly Hills, CA',
    deliveredTo: 'Upper East Side, NY',
    days: 42,
    marque: 'rolls-royce',
    region: 'ny',
  },
  {
    year: 2025,
    vehicle: 'Porsche 992 Turbo S Cabriolet',
    spec: 'GT Silver / Bordeaux Red',
    sourcedFrom: 'Atlanta, GA',
    deliveredTo: 'Miami Beach, FL',
    days: 12,
    marque: 'porsche',
    region: 'fl',
  },
  {
    year: 2025,
    vehicle: 'Aston Martin DB12',
    spec: 'Iridescent Emerald',
    sourcedFrom: 'Philadelphia, PA',
    deliveredTo: 'Westchester, NY',
    days: 21,
    marque: 'aston-martin',
    region: 'ny',
  },
  {
    year: 2025,
    vehicle: 'Range Rover Sport SV',
    spec: 'Ligurian Black / Carbon',
    sourcedFrom: 'Seattle, WA',
    deliveredTo: 'Battery Park City, NY',
    days: 8,
    marque: 'range-rover',
    region: 'ny',
  },
  {
    year: 2025,
    vehicle: 'McLaren 750S Spider',
    spec: 'Volcano Yellow',
    sourcedFrom: 'Naples, FL',
    deliveredTo: 'Long Island, NY',
    days: 26,
    marque: 'mclaren',
    region: 'ny',
  },
  {
    year: 2025,
    vehicle: 'Mercedes-AMG G63',
    spec: 'Hyper Blue / Classic Red',
    sourcedFrom: 'Denver, CO',
    deliveredTo: 'Fort Lauderdale, FL',
    days: 10,
    marque: 'mercedes-amg',
    region: 'fl',
  },
  {
    year: 2025,
    vehicle: 'Audi RS6 Avant Performance',
    spec: 'Nardo Grey',
    sourcedFrom: 'Portland, OR',
    deliveredTo: 'Brooklyn, NY',
    days: 13,
    marque: 'audi',
    region: 'ny',
  },
  {
    year: 2024,
    vehicle: 'Ferrari Roma Spider',
    spec: 'Rosso Corsa / Cuoio',
    sourcedFrom: 'Newport Beach, CA',
    deliveredTo: 'Delray Beach, FL',
    days: 34,
    marque: 'ferrari',
    region: 'fl',
  },
  {
    year: 2024,
    vehicle: 'Porsche Cayenne Turbo GT',
    spec: 'Arctic Grey',
    sourcedFrom: 'Nashville, TN',
    deliveredTo: 'Jersey City, NJ',
    days: 9,
    marque: 'porsche',
    region: 'ny',
  },
  {
    year: 2024,
    vehicle: 'Maserati MC20 Cielo',
    spec: 'Blu Infinito',
    sourcedFrom: 'Phoenix, AZ',
    deliveredTo: 'Manhattan, NY',
    days: 29,
    marque: 'maserati',
    region: 'ny',
  },
  {
    year: 2024,
    vehicle: 'Mercedes-AMG G63',
    spec: 'Manufaktur Alpine Grey',
    sourcedFrom: 'Salt Lake City, UT',
    deliveredTo: 'Scarsdale, NY',
    days: 11,
    marque: 'mercedes-amg',
    region: 'ny',
  },
  {
    year: 2024,
    vehicle: 'Bentley Bentayga EWB Azure',
    spec: 'Cypress / Cumbrian Green',
    sourcedFrom: 'Detroit, MI',
    deliveredTo: 'Palm Beach, FL',
    days: 16,
    marque: 'bentley',
    region: 'fl',
  },
  {
    year: 2023,
    vehicle: 'Lamborghini Huracán Tecnica',
    spec: 'Verde Selvans',
    sourcedFrom: 'San Diego, CA',
    deliveredTo: 'Fort Lauderdale, FL',
    days: 38,
    marque: 'lamborghini',
    region: 'fl',
  },
  {
    year: 2023,
    vehicle: 'Range Rover Autobiography',
    spec: 'Charente Grey / Ebony',
    sourcedFrom: 'Kansas City, MO',
    deliveredTo: 'Greenwich, CT',
    days: 7,
    marque: 'range-rover',
    region: 'ny',
  },
  {
    year: 2023,
    vehicle: 'Porsche 911 Dakar',
    spec: 'Rally Design Package',
    sourcedFrom: 'Tampa, FL',
    deliveredTo: 'Montauk, NY',
    days: 44,
    marque: 'porsche',
    region: 'ny',
  },
  {
    year: 2023,
    vehicle: 'BMW XM Label Red',
    spec: 'Toronto Red / Deep Lagoon',
    sourcedFrom: 'Columbus, OH',
    deliveredTo: 'Battery Park City, NY',
    days: 6,
    marque: 'bmw-m',
    region: 'ny',
  },
]

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const STRUCTURES = [
  'Business lease, LLC titled',
  'Personal lease',
  'Finance, 60-month term',
  'Cash purchase',
  'Business lease, personal guarantee',
]

// Deterministic filler for the design comp so record pages never look empty.
function buildDetail(s: Seed): {
  structure: string
  inquiryDate: string
  deliveredDate: string
  narrative: string
} {
  const structure = s.structure ?? STRUCTURES[(s.days + s.year) % STRUCTURES.length]
  const inquiryDate = s.inquiryDate ?? ''
  const deliveredDate = s.deliveredDate ?? ''
  const narrative =
    s.narrative ??
    `Client came to us for a ${s.vehicle} in ${s.spec}. We found a matching example in ${s.sourcedFrom}, verified the build and history, negotiated the deal, and arranged enclosed transport to ${s.deliveredTo}. From first inquiry to keys in hand: ${s.days} days.`
  return { structure, inquiryDate, deliveredDate, narrative }
}

export const deliveries: Delivery[] = seed.map((s) => {
  const detail = buildDetail(s)
  const city = s.deliveredTo.split(',')[0]
  return {
    ...s,
    ...detail,
    slug: `${s.year}-${slugify(s.vehicle)}-${slugify(city)}`,
  }
})

// --- Query helpers ---

export function allDeliveries(): Delivery[] {
  return deliveries
}

export function getDelivery(slug: string): Delivery | undefined {
  return deliveries.find((d) => d.slug === slug)
}

export function byMarque(marque: string): Delivery[] {
  return deliveries.filter((d) => d.marque === marque)
}

export function byRegion(region: Region): Delivery[] {
  return deliveries.filter((d) => d.region === region)
}

// Model matching by substring in the vehicle name (e.g. "G63", "911", "G-Wagon").
export function byModel(match: string): Delivery[] {
  const needle = match.toLowerCase()
  // "g-wagon" and "g-class" both map to the G63/G-Class rows.
  if (needle === 'g-wagon' || needle === 'g-class' || needle === 'g wagon') {
    return deliveries.filter((d) => /g63|g-class|g-wagon/i.test(d.vehicle))
  }
  return deliveries.filter((d) => d.vehicle.toLowerCase().includes(needle))
}

export function medianDays(list: Delivery[] = deliveries): number {
  const sorted = [...list].map((d) => d.days).sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0 ? Math.round((sorted[mid - 1] + sorted[mid]) / 2) : sorted[mid]
}

export function statesSourcedFrom(): number {
  const states = new Set(deliveries.map((d) => d.sourcedFrom.split(',')[1]?.trim()).filter(Boolean))
  return states.size
}

export const YEARS = Array.from(new Set(deliveries.map((d) => d.year))).sort((a, b) => b - a)
