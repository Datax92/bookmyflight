// ============================================================
// Airlines serving Pakistan
// Base identity data. Fare, refund and reissue details live in
// airline-details.ts and are sourced from each airline's own website.
// ============================================================

export type AirlineGroup = 'pakistani' | 'international';

export interface AirlineBase {
  slug: string;
  name: string;
  code: string; // IATA designator
  group: AirlineGroup;
  country: string;
  hub: string;
  alliance: string;
  website: string;
  /** Brand colour used for the code badge */
  color: string;
  /** Path to official SVG logo */
  logo: string;
}

export const airlines: AirlineBase[] = [
  // ---------------- Pakistani carriers ----------------
  {
    slug: 'pia-pakistan-international-airlines',
    name: 'PIA',
    code: 'PK',
    group: 'pakistani',
    country: 'Pakistan',
    hub: 'Islamabad, Karachi & Lahore',
    alliance: 'None',
    website: 'https://www.piac.com.pk',
    color: '#00553c',
    logo: '/images/airlines/logos/pia-pakistan-international-airlines.svg',
  },
  {
    slug: 'airblue',
    name: 'Airblue',
    code: 'PA',
    group: 'pakistani',
    country: 'Pakistan',
    hub: 'Islamabad & Karachi',
    alliance: 'None',
    website: 'https://www.airblue.com',
    color: '#0b4ea2',
    logo: '/images/airlines/logos/airblue.svg',
  },
  {
    slug: 'airsial',
    name: 'AirSial',
    code: 'PF',
    group: 'pakistani',
    country: 'Pakistan',
    hub: 'Sialkot',
    alliance: 'None',
    website: 'https://www.airsial.com',
    color: '#15306b',
    logo: '/images/airlines/logos/airsial.svg',
  },
  {
    slug: 'fly-jinnah',
    name: 'Fly Jinnah',
    code: '9P',
    group: 'pakistani',
    country: 'Pakistan',
    hub: 'Karachi',
    alliance: 'None',
    website: 'https://www.flyjinnah.com',
    color: '#0a7a4b',
    logo: '/images/airlines/logos/fly-jinnah.svg',
  },
  // ---------------- International carriers ----------------
  {
    slug: 'emirates',
    name: 'Emirates',
    code: 'EK',
    group: 'international',
    country: 'United Arab Emirates',
    hub: 'Dubai (DXB)',
    alliance: 'None',
    website: 'https://www.emirates.com/pk/english/',
    color: '#d71921',
    logo: '/images/airlines/logos/emirates.svg',
  },
  {
    slug: 'flydubai',
    name: 'flydubai',
    code: 'FZ',
    group: 'international',
    country: 'United Arab Emirates',
    hub: 'Dubai (DXB)',
    alliance: 'None',
    website: 'https://www.flydubai.com/en-pk/',
    color: '#1c3f73',
    logo: '/images/airlines/logos/flydubai.svg',
  },
  {
    slug: 'qatar-airways',
    name: 'Qatar Airways',
    code: 'QR',
    group: 'international',
    country: 'Qatar',
    hub: 'Doha (DOH)',
    alliance: 'oneworld',
    website: 'https://www.qatarairways.com/en-pk/homepage.html',
    color: '#5c0632',
    logo: '/images/airlines/logos/qatar-airways.svg',
  },
  {
    slug: 'etihad-airways',
    name: 'Etihad Airways',
    code: 'EY',
    group: 'international',
    country: 'United Arab Emirates',
    hub: 'Abu Dhabi (AUH)',
    alliance: 'None',
    website: 'https://www.etihad.com/en-pk/',
    color: '#8a6d3b',
    logo: '/images/airlines/logos/etihad-airways.svg',
  },
  {
    slug: 'air-arabia',
    name: 'Air Arabia',
    code: 'G9',
    group: 'international',
    country: 'United Arab Emirates',
    hub: 'Sharjah (SHJ)',
    alliance: 'None',
    website: 'https://www.airarabia.com',
    color: '#e20613',
    logo: '/images/airlines/logos/air-arabia.svg',
  },
  {
    slug: 'saudia',
    name: 'Saudia',
    code: 'SV',
    group: 'international',
    country: 'Saudi Arabia',
    hub: 'Jeddah (JED) & Riyadh (RUH)',
    alliance: 'SkyTeam',
    website: 'https://www.saudia.com',
    color: '#006c35',
    logo: '/images/airlines/logos/saudia.svg',
  },
  {
    slug: 'flynas',
    name: 'flynas',
    code: 'XY',
    group: 'international',
    country: 'Saudi Arabia',
    hub: 'Riyadh (RUH)',
    alliance: 'None',
    website: 'https://www.flynas.com',
    color: '#4b2a7b',
    logo: '/images/airlines/logos/flynas.svg',
  },
  {
    slug: 'flyadeal',
    name: 'flyadeal',
    code: 'F3',
    group: 'international',
    country: 'Saudi Arabia',
    hub: 'Riyadh (RUH) & Jeddah (JED)',
    alliance: 'None',
    website: 'https://www.flyadeal.com',
    color: '#6fa817',
    logo: '/images/airlines/logos/flyadeal.svg',
  },
  {
    slug: 'turkish-airlines',
    name: 'Turkish Airlines',
    code: 'TK',
    group: 'international',
    country: 'Türkiye',
    hub: 'Istanbul (IST)',
    alliance: 'Star Alliance',
    website: 'https://www.turkishairlines.com/en-pk/',
    color: '#c8102e',
    logo: '/images/airlines/logos/turkish-airlines.svg',
  },
  {
    slug: 'oman-air',
    name: 'Oman Air',
    code: 'WY',
    group: 'international',
    country: 'Oman',
    hub: 'Muscat (MCT)',
    alliance: 'oneworld',
    website: 'https://www.omanair.com/pk/en',
    color: '#00747a',
    logo: '/images/airlines/logos/oman-air.svg',
  },
  {
    slug: 'gulf-air',
    name: 'Gulf Air',
    code: 'GF',
    group: 'international',
    country: 'Bahrain',
    hub: 'Bahrain (BAH)',
    alliance: 'None',
    website: 'https://www.gulfair.com',
    color: '#8c6d2c',
    logo: '/images/airlines/logos/gulf-air.svg',
  },
  {
    slug: 'thai-airways',
    name: 'Thai Airways',
    code: 'TG',
    group: 'international',
    country: 'Thailand',
    hub: 'Bangkok (BKK)',
    alliance: 'Star Alliance',
    website: 'https://www.thaiairways.com',
    color: '#4e2a84',
    logo: '/images/airlines/logos/thai-airways.svg',
  },
  {
    slug: 'british-airways',
    name: 'British Airways',
    code: 'BA',
    group: 'international',
    country: 'United Kingdom',
    hub: 'London (LHR & LGW)',
    alliance: 'oneworld',
    website: 'https://www.britishairways.com',
    color: '#075aaa',
    logo: '/images/airlines/logos/british-airways.svg',
  },
  {
    slug: 'salamair',
    name: 'SalamAir',
    code: 'OV',
    group: 'international',
    country: 'Oman',
    hub: 'Muscat (MCT)',
    alliance: 'None',
    website: 'https://www.salamair.com',
    color: '#00a19a',
    logo: '/images/airlines/logos/salamair.svg',
  },
];

export function getAirline(slug: string) {
  return airlines.find((a) => a.slug === slug);
}

export const pakistaniAirlines = airlines.filter((a) => a.group === 'pakistani');
export const internationalAirlines = airlines.filter((a) => a.group === 'international');
