// ============================================================
// Flight search state <-> URL query encoding
// ============================================================

export type TripType = 'return' | 'oneway' | 'multicity';
export type Cabin = 'economy' | 'premium_economy' | 'business' | 'first';

export interface Leg {
  from: string;
  to: string;
  date: string; // yyyy-mm-dd
}

export interface FlightSearch {
  trip: TripType;
  from: string;
  to: string;
  depart: string;
  ret: string;
  legs: Leg[]; // multi-city only
  adults: number;
  children: number;
  infants: number;
  cabin: Cabin;
  cabinBags: number;
  checkedBags: number;
  direct: boolean;
  nearbyFrom: boolean;
  nearbyTo: boolean;
  stay: boolean;
}

export const cabinLabels: Record<Cabin, string> = {
  economy: 'Economy',
  premium_economy: 'Premium Economy',
  business: 'Business',
  first: 'First',
};

export const tripLabels: Record<TripType, string> = {
  return: 'Return',
  oneway: 'One way',
  multicity: 'Multi-city',
};

export const defaultSearch: FlightSearch = {
  trip: 'return',
  from: 'ISB',
  to: '',
  depart: '',
  ret: '',
  legs: [
    { from: 'ISB', to: '', date: '' },
    { from: '', to: '', date: '' },
  ],
  adults: 1,
  children: 0,
  infants: 0,
  cabin: 'economy',
  cabinBags: 0,
  checkedBags: 0,
  direct: false,
  nearbyFrom: false,
  nearbyTo: false,
  stay: true,
};

const clampInt = (v: string | null, min: number, max: number, fallback: number) => {
  const n = Number.parseInt(v ?? '', 10);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback;
};

const isDate = (v: string | null) => (v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : '');
const isCode = (v: string | null) => (v && /^[A-Z]{3}$|^EVERYWHERE$/.test(v) ? v : '');

export function toQuery(s: FlightSearch): string {
  const p = new URLSearchParams();
  p.set('trip', s.trip);
  if (s.trip === 'multicity') {
    s.legs.forEach((l, i) => {
      p.set(`l${i}`, `${l.from}-${l.to}-${l.date}`);
    });
  } else {
    p.set('from', s.from);
    if (s.to) p.set('to', s.to);
    if (s.depart) p.set('depart', s.depart);
    if (s.trip === 'return' && s.ret) p.set('return', s.ret);
  }
  p.set('adults', String(s.adults));
  if (s.children) p.set('children', String(s.children));
  if (s.infants) p.set('infants', String(s.infants));
  p.set('cabin', s.cabin);
  if (s.cabinBags) p.set('cabinBags', String(s.cabinBags));
  if (s.checkedBags) p.set('checkedBags', String(s.checkedBags));
  if (s.direct) p.set('direct', '1');
  if (s.nearbyFrom) p.set('nearbyFrom', '1');
  if (s.nearbyTo) p.set('nearbyTo', '1');
  if (s.stay) p.set('stay', '1');
  return p.toString();
}

type ParamSource = Record<string, string | string[] | undefined>;

export function fromParams(input: ParamSource | URLSearchParams): FlightSearch {
  const get = (k: string): string | null => {
    if (input instanceof URLSearchParams) return input.get(k);
    const v = input[k];
    return Array.isArray(v) ? (v[0] ?? null) : (v ?? null);
  };
  const trip = (['return', 'oneway', 'multicity'] as const).find((t) => t === get('trip')) ?? 'return';
  const cabin = (['economy', 'premium_economy', 'business', 'first'] as const).find((c) => c === get('cabin')) ?? 'economy';
  const adults = clampInt(get('adults'), 1, 9, 1);
  const legs: Leg[] = [];
  for (let i = 0; i < 6; i++) {
    const raw = get(`l${i}`);
    if (!raw) break;
    const [from = '', to = '', ...date] = raw.split('-');
    legs.push({ from: isCode(from), to: isCode(to), date: isDate(date.join('-')) });
  }
  return {
    trip,
    from: isCode(get('from')) || 'ISB',
    to: isCode(get('to')),
    depart: isDate(get('depart')),
    ret: isDate(get('return')),
    legs: legs.length >= 2 ? legs : defaultSearch.legs,
    adults,
    children: clampInt(get('children'), 0, 8, 0),
    infants: clampInt(get('infants'), 0, adults, 0),
    cabin,
    cabinBags: clampInt(get('cabinBags'), 0, 1, 0),
    checkedBags: clampInt(get('checkedBags'), 0, 2, 0),
    direct: get('direct') === '1',
    nearbyFrom: get('nearbyFrom') === '1',
    nearbyTo: get('nearbyTo') === '1',
    stay: get('stay') === '1',
  };
}

export function travellersLabel(s: Pick<FlightSearch, 'adults' | 'children' | 'infants' | 'cabin'>) {
  const total = s.adults + s.children + s.infants;
  const who =
    s.children === 0 && s.infants === 0
      ? `${s.adults} Adult${s.adults > 1 ? 's' : ''}`
      : `${total} Travellers`;
  return `${who}, ${cabinLabels[s.cabin]}`;
}

// ---------- Date helpers (local dates, no timezone drift) ----------
export function toISODate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parseISODate(v: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return null;
  const [y, m, d] = v.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function formatDisplayDate(v: string) {
  const d = parseISODate(v);
  if (!d) return '';
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

export function formatLongDate(v: string) {
  const d = parseISODate(v);
  if (!d) return '';
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}
