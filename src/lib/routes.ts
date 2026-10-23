// ============================================================
// Flight routes from Pakistan, derived only from the verified
// airline route data in airline-details.ts (no invented routes).
// Powers the /flights/[route] landing pages.
// ============================================================
import { airlines, type AirlineBase } from './airlines';
import { airlineDetails, type SeasonProfile } from './airline-details';
import { findAirport, type Airport } from './airports';
import { destinations } from './config';

export interface FlightRoute {
  /** e.g. "islamabad-to-dubai" */
  slug: string;
  from: Airport;
  toCity: string;
  toCountry: string;
  /** Destination airports with non-stop service from `from` */
  toCodes: string[];
  /** Airlines flying non-stop */
  direct: AirlineBase[];
  /** Airlines that serve `from` and sell this city with a connection via their hub */
  connecting: AirlineBase[];
  season?: SeasonProfile;
  domestic: boolean;
  /** Destination guide id in config.destinations, when one exists */
  guide?: string;
}

const SEASON_BY_COUNTRY: Record<string, SeasonProfile> = {
  'Saudi Arabia': 'saudi',
  'United Arab Emirates': 'gulf',
  Qatar: 'gulf',
  Oman: 'gulf',
  Bahrain: 'gulf',
  Kuwait: 'gulf',
  'United Kingdom': 'europe',
  France: 'europe',
  Canada: 'europe',
  'Türkiye': 'europe',
  Azerbaijan: 'europe',
  Malaysia: 'asia',
  Thailand: 'asia',
  China: 'asia',
};

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildRoutes(): FlightRoute[] {
  const map = new Map<string, FlightRoute>();
  const bySlug = new Map(airlines.map((a) => [a.slug, a]));

  for (const [slug, d] of Object.entries(airlineDetails)) {
    const airline = bySlug.get(slug);
    if (!airline) continue;
    for (const r of d.routes) {
      if (!r.direct) continue;
      const to = findAirport(r.code);
      if (!to) continue;
      for (const code of r.from ?? d.pkAirports) {
        const from = findAirport(code);
        if (!from || from.city === to.city) continue;
        const key = `${from.code}|${to.city}`;
        let route = map.get(key);
        if (!route) {
          route = {
            slug: `${slugify(from.city)}-to-${slugify(to.city)}`,
            from,
            toCity: to.city,
            toCountry: to.country,
            toCodes: [],
            direct: [],
            connecting: [],
            season: SEASON_BY_COUNTRY[to.country],
            domestic: to.country === 'Pakistan',
            guide: destinations.find((g) => g.name === to.city)?.id,
          };
          map.set(key, route);
        }
        if (!route.toCodes.includes(to.code)) route.toCodes.push(to.code);
        if (!route.direct.includes(airline)) route.direct.push(airline);
      }
    }
  }

  // One-stop options: airlines that fly from the origin and list the city as a connecting destination
  for (const route of map.values()) {
    for (const [slug, d] of Object.entries(airlineDetails)) {
      const airline = bySlug.get(slug);
      if (!airline || route.direct.includes(airline) || !d.pkAirports.includes(route.from.code)) continue;
      const sellsCity = d.routes.some((r) => !r.direct && findAirport(r.code)?.city === route.toCity);
      if (sellsCity) route.connecting.push(airline);
    }
  }

  const order = (a: AirlineBase) => airlines.indexOf(a);
  return [...map.values()]
    .map((r) => ({ ...r, direct: [...r.direct].sort((a, b) => order(a) - order(b)) }))
    .sort((a, b) => b.direct.length - a.direct.length || a.slug.localeCompare(b.slug));
}

export const flightRoutes: FlightRoute[] = buildRoutes();

const routeBySlug = new Map(flightRoutes.map((r) => [r.slug, r]));

export function getRoute(slug: string) {
  return routeBySlug.get(slug);
}

/** Route page for an origin airport and destination airport, if one exists */
export function findRoute(fromCode: string, toCode: string) {
  const to = findAirport(toCode);
  if (!to) return undefined;
  return flightRoutes.find((r) => r.from.code === fromCode.toUpperCase() && r.toCity === to.city);
}

/** Link to the route landing page when we have one, otherwise to a prefilled search */
export function routeHref(fromCode: string, toCode: string) {
  const route = findRoute(fromCode, toCode);
  return route ? `/flights/${route.slug}` : `/search?trip=return&from=${fromCode}&to=${toCode}`;
}

export const routeLabel = (r: FlightRoute) => `${r.from.city} to ${r.toCity}`;
