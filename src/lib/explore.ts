// ============================================================
// Explore everywhere: destinations and non-stop availability
// ============================================================
import { airlineDetails, seasonProfiles, type SeasonProfile } from './airline-details';
import { destinations } from './config';

export type Region = 'Middle East' | 'Saudi Arabia' | 'Europe' | 'Asia' | 'North America' | 'Central Asia & Caucasus';

export interface ExploreItem {
  code: string;
  city: string;
  country: string;
  region: Region;
  season: SeasonProfile;
  image?: string;
  href?: string; // guide page if one exists
  blurb: string;
}

const guideByCode: Record<string, string> = Object.fromEntries(
  destinations.map((d) => {
    const code: Record<string, string> = {
      dubai: 'DXB', istanbul: 'IST', london: 'LHR', bangkok: 'BKK', 'kuala-lumpur': 'KUL', riyadh: 'RUH',
      jeddah: 'JED', doha: 'DOH', baku: 'GYD', paris: 'CDG', makkah: 'MAKKAH',
    };
    return [code[d.id] ?? d.id, d.id];
  }),
);

function withGuide(item: Omit<ExploreItem, 'href' | 'image'>): ExploreItem {
  const id = guideByCode[item.code];
  const d = destinations.find((x) => x.id === id);
  return { ...item, href: d ? `/destinations/${d.id}` : undefined, image: d?.image };
}

export const exploreItems: ExploreItem[] = [
  withGuide({ code: 'DXB', city: 'Dubai', country: 'United Arab Emirates', region: 'Middle East', season: 'gulf', blurb: 'Shopping, desert safaris and the busiest hub for connections.' }),
  withGuide({ code: 'JED', city: 'Jeddah', country: 'Saudi Arabia', region: 'Saudi Arabia', season: 'saudi', blurb: 'Gateway to Makkah for Umrah, with the Red Sea Corniche.' }),
  { code: 'MED', city: 'Madinah', country: 'Saudi Arabia', region: 'Saudi Arabia', season: 'saudi', href: '/umrah', image: '/images/destinations/madinah.jpg', blurb: 'Fly straight to the City of the Prophet ﷺ for Umrah and Ziyarat.' },
  withGuide({ code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', region: 'Saudi Arabia', season: 'saudi', blurb: 'Saudi capital for business, Riyadh Season and work travel.' }),
  { code: 'DMM', city: 'Dammam', country: 'Saudi Arabia', region: 'Saudi Arabia', season: 'saudi', image: '/images/destinations/dammam.jpg', blurb: 'Eastern Province hub for workers and families.' },
  withGuide({ code: 'DOH', city: 'Doha', country: 'Qatar', region: 'Middle East', season: 'gulf', blurb: 'Souq Waqif, the Corniche and Qatar Airways connections.' }),
  { code: 'AUH', city: 'Abu Dhabi', country: 'United Arab Emirates', region: 'Middle East', season: 'gulf', image: '/images/destinations/abu-dhabi.jpg', blurb: 'Sheikh Zayed Grand Mosque, Yas Island and Etihad connections.' },
  { code: 'SHJ', city: 'Sharjah', country: 'United Arab Emirates', region: 'Middle East', season: 'gulf', image: '/images/destinations/sharjah.jpg', blurb: 'Budget-friendly flights on Air Arabia, 20 minutes from Dubai.' },
  { code: 'MCT', city: 'Muscat', country: 'Oman', region: 'Middle East', season: 'gulf', image: '/images/destinations/muscat.jpg', blurb: 'Mountains, wadis and a calm Gulf coastline.' },
  { code: 'BAH', city: 'Bahrain', country: 'Bahrain', region: 'Middle East', season: 'gulf', image: '/images/destinations/bahrain.jpg', blurb: 'A short hop to the Gulf and Gulf Air connections to Europe.' },
  withGuide({ code: 'IST', city: 'Istanbul', country: 'Türkiye', region: 'Europe', season: 'europe', blurb: 'Where Europe meets Asia: mosques, bazaars and the Bosphorus.' }),
  withGuide({ code: 'LHR', city: 'London', country: 'United Kingdom', region: 'Europe', season: 'europe', blurb: 'Family visits, study and business, with non-stop PIA and BA options.' }),
  { code: 'MAN', city: 'Manchester', country: 'United Kingdom', region: 'Europe', season: 'europe', image: '/images/destinations/manchester.jpg', blurb: 'Home to a large British-Pakistani community in the North West.' },
  withGuide({ code: 'CDG', city: 'Paris', country: 'France', region: 'Europe', season: 'europe', blurb: 'Art, food and the Eiffel Tower on a Schengen visa.' }),
  withGuide({ code: 'GYD', city: 'Baku', country: 'Azerbaijan', region: 'Central Asia & Caucasus', season: 'europe', blurb: 'Easy e-visa, old-city walls and Caspian Sea views.' }),
  { code: 'TBS', city: 'Tbilisi', country: 'Georgia', region: 'Central Asia & Caucasus', season: 'europe', image: '/images/destinations/tbilisi.jpg', blurb: 'Mountain scenery and wine country, a favourite honeymoon trip.' },
  { code: 'TAS', city: 'Tashkent', country: 'Uzbekistan', region: 'Central Asia & Caucasus', season: 'europe', image: '/images/destinations/tashkent.jpg', blurb: 'Gateway to Samarkand and Bukhara on the Silk Road.' },
  withGuide({ code: 'KUL', city: 'Kuala Lumpur', country: 'Malaysia', region: 'Asia', season: 'asia', blurb: 'Halal-friendly city breaks, Petronas Towers and Langkawi beaches.' }),
  withGuide({ code: 'BKK', city: 'Bangkok', country: 'Thailand', region: 'Asia', season: 'asia', blurb: 'Temples, markets and island hops to Phuket and Krabi.' }),
  { code: 'MLE', city: 'Malé', country: 'Maldives', region: 'Asia', season: 'asia', image: '/images/destinations/male.jpg', blurb: 'Over-water villas and turquoise lagoons.' },
  { code: 'CMB', city: 'Colombo', country: 'Sri Lanka', region: 'Asia', season: 'asia', image: '/images/destinations/colombo.jpg', blurb: 'Tea country, beaches and a short, affordable flight.' },
  { code: 'PEK', city: 'Beijing', country: 'China', region: 'Asia', season: 'asia', image: '/images/destinations/beijing.jpg', blurb: 'The Great Wall, business trips and study visas.' },
  { code: 'YYZ', city: 'Toronto', country: 'Canada', region: 'North America', season: 'europe', image: '/images/destinations/toronto.jpg', blurb: 'Non-stop PIA flights for family visits and immigration.' },
  { code: 'JFK', city: 'New York', country: 'United States', region: 'North America', season: 'europe', image: '/images/destinations/new-york.jpg', blurb: 'One-stop via the Gulf or Istanbul to the Big Apple.' },
];

export const regions: Region[] = ['Middle East', 'Saudi Arabia', 'Europe', 'Central Asia & Caucasus', 'Asia', 'North America'];

/**
 * Non-stop services by airlines outside our 18 airline guides
 * (Azerbaijan Airlines, Uzbekistan Airways, Centrum Air, SriLankan, FitsAir, Air China, Batik Air, AirAsia X),
 * taken from the Islamabad, Lahore and Karachi airport schedules.
 */
const otherNonstop: Record<string, string[]> = {
  GYD: ['ISB', 'LHE'],
  TAS: ['ISB', 'LHE', 'KHI'],
  CMB: ['KHI', 'LHE'],
  PEK: ['ISB', 'KHI'],
  KUL: ['KHI', 'LHE'],
};

/** For each destination code, the Pakistani airports with at least one non-stop airline. */
export function nonstopOrigins(): Record<string, string[]> {
  const out: Record<string, Set<string>> = {};
  for (const [code, from] of Object.entries(otherNonstop)) out[code] = new Set(from);
  for (const d of Object.values(airlineDetails)) {
    for (const r of d.routes) {
      if (!r.direct) continue;
      const from = r.from ?? d.pkAirports;
      out[r.code] ??= new Set();
      from.forEach((f) => out[r.code].add(f));
    }
  }
  return Object.fromEntries(Object.entries(out).map(([k, v]) => [k, [...v]]));
}

export function cheapMonths(season: SeasonProfile) {
  const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return seasonProfiles[season].levels.map((l, i) => (l === 'low' ? names[i] : null)).filter(Boolean) as string[];
}
