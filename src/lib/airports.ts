// ============================================================
// Airport list for the search autocomplete (IATA codes)
// ============================================================

export interface Airport {
  code: string;
  city: string;
  name: string;
  country: string;
  /** Pakistani airports are shown first in "From" suggestions */
  pk?: boolean;
  popular?: boolean;
}

export const EVERYWHERE: Airport = {
  code: 'EVERYWHERE',
  city: 'Everywhere',
  name: 'Explore every destination',
  country: '',
};

export const airports: Airport[] = [
  // Pakistan
  { code: 'ISB', city: 'Islamabad', name: 'Islamabad International', country: 'Pakistan', pk: true, popular: true },
  { code: 'LHE', city: 'Lahore', name: 'Allama Iqbal International', country: 'Pakistan', pk: true, popular: true },
  { code: 'KHI', city: 'Karachi', name: 'Jinnah International', country: 'Pakistan', pk: true, popular: true },
  { code: 'PEW', city: 'Peshawar', name: 'Bacha Khan International', country: 'Pakistan', pk: true, popular: true },
  { code: 'MUX', city: 'Multan', name: 'Multan International', country: 'Pakistan', pk: true, popular: true },
  { code: 'LYP', city: 'Faisalabad', name: 'Faisalabad International', country: 'Pakistan', pk: true, popular: true },
  { code: 'SKT', city: 'Sialkot', name: 'Sialkot International', country: 'Pakistan', pk: true, popular: true },
  { code: 'UET', city: 'Quetta', name: 'Quetta International', country: 'Pakistan', pk: true },
  { code: 'GWD', city: 'Gwadar', name: 'New Gwadar International', country: 'Pakistan', pk: true },
  { code: 'SKZ', city: 'Sukkur', name: 'Sukkur Airport', country: 'Pakistan', pk: true },
  { code: 'BHV', city: 'Bahawalpur', name: 'Bahawalpur Airport', country: 'Pakistan', pk: true },
  { code: 'RYK', city: 'Rahim Yar Khan', name: 'Shaikh Zayed International', country: 'Pakistan', pk: true },
  { code: 'DEA', city: 'Dera Ghazi Khan', name: 'Dera Ghazi Khan International', country: 'Pakistan', pk: true },
  { code: 'GIL', city: 'Gilgit', name: 'Gilgit Airport', country: 'Pakistan', pk: true },
  { code: 'KDU', city: 'Skardu', name: 'Skardu International', country: 'Pakistan', pk: true },
  { code: 'CJL', city: 'Chitral', name: 'Chitral Airport', country: 'Pakistan', pk: true },
  { code: 'TUK', city: 'Turbat', name: 'Turbat International', country: 'Pakistan', pk: true },

  // Saudi Arabia
  { code: 'JED', city: 'Jeddah', name: 'King Abdulaziz International', country: 'Saudi Arabia', popular: true },
  { code: 'MED', city: 'Madinah', name: 'Prince Mohammad bin Abdulaziz', country: 'Saudi Arabia', popular: true },
  { code: 'RUH', city: 'Riyadh', name: 'King Khalid International', country: 'Saudi Arabia', popular: true },
  { code: 'DMM', city: 'Dammam', name: 'King Fahd International', country: 'Saudi Arabia', popular: true },
  { code: 'TIF', city: 'Taif', name: 'Taif International', country: 'Saudi Arabia' },
  { code: 'ELQ', city: 'Qassim', name: 'Prince Naif bin Abdulaziz', country: 'Saudi Arabia' },
  { code: 'AHB', city: 'Abha', name: 'Abha International', country: 'Saudi Arabia' },
  { code: 'TUU', city: 'Tabuk', name: 'Tabuk Regional', country: 'Saudi Arabia' },

  // UAE
  { code: 'DXB', city: 'Dubai', name: 'Dubai International', country: 'United Arab Emirates', popular: true },
  { code: 'DWC', city: 'Dubai', name: 'Al Maktoum International', country: 'United Arab Emirates' },
  { code: 'AUH', city: 'Abu Dhabi', name: 'Zayed International', country: 'United Arab Emirates', popular: true },
  { code: 'SHJ', city: 'Sharjah', name: 'Sharjah International', country: 'United Arab Emirates', popular: true },
  { code: 'RKT', city: 'Ras Al Khaimah', name: 'Ras Al Khaimah International', country: 'United Arab Emirates' },
  { code: 'AAN', city: 'Al Ain', name: 'Al Ain International', country: 'United Arab Emirates' },

  // Rest of the Gulf & Middle East
  { code: 'DOH', city: 'Doha', name: 'Hamad International', country: 'Qatar', popular: true },
  { code: 'MCT', city: 'Muscat', name: 'Muscat International', country: 'Oman', popular: true },
  { code: 'SLL', city: 'Salalah', name: 'Salalah International', country: 'Oman' },
  { code: 'BAH', city: 'Bahrain', name: 'Bahrain International', country: 'Bahrain' },
  { code: 'KWI', city: 'Kuwait City', name: 'Kuwait International', country: 'Kuwait' },
  { code: 'AMM', city: 'Amman', name: 'Queen Alia International', country: 'Jordan' },
  { code: 'BEY', city: 'Beirut', name: 'Beirut–Rafic Hariri International', country: 'Lebanon' },
  { code: 'CAI', city: 'Cairo', name: 'Cairo International', country: 'Egypt' },
  { code: 'BGW', city: 'Baghdad', name: 'Baghdad International', country: 'Iraq' },
  { code: 'NJF', city: 'Najaf', name: 'Al Najaf International', country: 'Iraq' },
  { code: 'IKA', city: 'Tehran', name: 'Imam Khomeini International', country: 'Iran' },
  { code: 'MHD', city: 'Mashhad', name: 'Mashhad International', country: 'Iran' },

  // Türkiye, Caucasus & Central Asia
  { code: 'IST', city: 'Istanbul', name: 'Istanbul Airport', country: 'Türkiye', popular: true },
  { code: 'SAW', city: 'Istanbul', name: 'Sabiha Gökçen', country: 'Türkiye' },
  { code: 'AYT', city: 'Antalya', name: 'Antalya Airport', country: 'Türkiye' },
  { code: 'ESB', city: 'Ankara', name: 'Esenboğa International', country: 'Türkiye' },
  { code: 'GYD', city: 'Baku', name: 'Heydar Aliyev International', country: 'Azerbaijan', popular: true },
  { code: 'TBS', city: 'Tbilisi', name: 'Tbilisi International', country: 'Georgia' },
  { code: 'TAS', city: 'Tashkent', name: 'Islam Karimov Tashkent International', country: 'Uzbekistan' },
  { code: 'ALA', city: 'Almaty', name: 'Almaty International', country: 'Kazakhstan' },
  { code: 'FRU', city: 'Bishkek', name: 'Manas International', country: 'Kyrgyzstan' },
  { code: 'DYU', city: 'Dushanbe', name: 'Dushanbe International', country: 'Tajikistan' },

  // United Kingdom & Europe
  { code: 'LHR', city: 'London', name: 'Heathrow', country: 'United Kingdom', popular: true },
  { code: 'LGW', city: 'London', name: 'Gatwick', country: 'United Kingdom' },
  { code: 'MAN', city: 'Manchester', name: 'Manchester Airport', country: 'United Kingdom', popular: true },
  { code: 'BHX', city: 'Birmingham', name: 'Birmingham Airport', country: 'United Kingdom' },
  { code: 'GLA', city: 'Glasgow', name: 'Glasgow Airport', country: 'United Kingdom' },
  { code: 'CDG', city: 'Paris', name: 'Charles de Gaulle', country: 'France', popular: true },
  { code: 'FRA', city: 'Frankfurt', name: 'Frankfurt Airport', country: 'Germany' },
  { code: 'MUC', city: 'Munich', name: 'Munich Airport', country: 'Germany' },
  { code: 'AMS', city: 'Amsterdam', name: 'Schiphol', country: 'Netherlands' },
  { code: 'BCN', city: 'Barcelona', name: 'Barcelona–El Prat', country: 'Spain' },
  { code: 'MAD', city: 'Madrid', name: 'Adolfo Suárez Madrid–Barajas', country: 'Spain' },
  { code: 'FCO', city: 'Rome', name: 'Fiumicino', country: 'Italy' },
  { code: 'MXP', city: 'Milan', name: 'Malpensa', country: 'Italy' },
  { code: 'ATH', city: 'Athens', name: 'Athens International', country: 'Greece' },
  { code: 'ZRH', city: 'Zurich', name: 'Zurich Airport', country: 'Switzerland' },
  { code: 'VIE', city: 'Vienna', name: 'Vienna International', country: 'Austria' },
  { code: 'CPH', city: 'Copenhagen', name: 'Copenhagen Airport', country: 'Denmark' },
  { code: 'OSL', city: 'Oslo', name: 'Oslo Gardermoen', country: 'Norway' },
  { code: 'ARN', city: 'Stockholm', name: 'Stockholm Arlanda', country: 'Sweden' },
  { code: 'BRU', city: 'Brussels', name: 'Brussels Airport', country: 'Belgium' },
  { code: 'DUB', city: 'Dublin', name: 'Dublin Airport', country: 'Ireland' },
  { code: 'LIS', city: 'Lisbon', name: 'Humberto Delgado', country: 'Portugal' },

  // North America
  { code: 'YYZ', city: 'Toronto', name: 'Toronto Pearson', country: 'Canada', popular: true },
  { code: 'YUL', city: 'Montreal', name: 'Montréal–Trudeau', country: 'Canada' },
  { code: 'YVR', city: 'Vancouver', name: 'Vancouver International', country: 'Canada' },
  { code: 'JFK', city: 'New York', name: 'John F. Kennedy International', country: 'United States', popular: true },
  { code: 'IAD', city: 'Washington', name: 'Washington Dulles', country: 'United States' },
  { code: 'ORD', city: 'Chicago', name: "O'Hare International", country: 'United States' },
  { code: 'IAH', city: 'Houston', name: 'George Bush Intercontinental', country: 'United States' },
  { code: 'LAX', city: 'Los Angeles', name: 'Los Angeles International', country: 'United States' },
  { code: 'SFO', city: 'San Francisco', name: 'San Francisco International', country: 'United States' },

  // Asia & Pacific
  { code: 'KUL', city: 'Kuala Lumpur', name: 'Kuala Lumpur International', country: 'Malaysia', popular: true },
  { code: 'BKK', city: 'Bangkok', name: 'Suvarnabhumi', country: 'Thailand', popular: true },
  { code: 'HKT', city: 'Phuket', name: 'Phuket International', country: 'Thailand' },
  { code: 'SIN', city: 'Singapore', name: 'Changi', country: 'Singapore' },
  { code: 'CGK', city: 'Jakarta', name: 'Soekarno–Hatta International', country: 'Indonesia' },
  { code: 'DPS', city: 'Bali', name: 'Ngurah Rai International', country: 'Indonesia' },
  { code: 'MNL', city: 'Manila', name: 'Ninoy Aquino International', country: 'Philippines' },
  { code: 'SGN', city: 'Ho Chi Minh City', name: 'Tan Son Nhat International', country: 'Vietnam' },
  { code: 'HAN', city: 'Hanoi', name: 'Noi Bai International', country: 'Vietnam' },
  { code: 'CMB', city: 'Colombo', name: 'Bandaranaike International', country: 'Sri Lanka' },
  { code: 'MLE', city: 'Malé', name: 'Velana International', country: 'Maldives' },
  { code: 'DAC', city: 'Dhaka', name: 'Hazrat Shahjalal International', country: 'Bangladesh' },
  { code: 'KTM', city: 'Kathmandu', name: 'Tribhuvan International', country: 'Nepal' },
  { code: 'PEK', city: 'Beijing', name: 'Beijing Capital', country: 'China' },
  { code: 'PVG', city: 'Shanghai', name: 'Shanghai Pudong', country: 'China' },
  { code: 'CAN', city: 'Guangzhou', name: 'Guangzhou Baiyun', country: 'China' },
  { code: 'URC', city: 'Ürümqi', name: 'Ürümqi Tianshan International', country: 'China' },
  { code: 'HKG', city: 'Hong Kong', name: 'Hong Kong International', country: 'Hong Kong' },
  { code: 'ICN', city: 'Seoul', name: 'Incheon International', country: 'South Korea' },
  { code: 'NRT', city: 'Tokyo', name: 'Narita International', country: 'Japan' },
  { code: 'SYD', city: 'Sydney', name: 'Sydney Kingsford Smith', country: 'Australia' },
  { code: 'MEL', city: 'Melbourne', name: 'Melbourne Airport', country: 'Australia' },
  { code: 'PER', city: 'Perth', name: 'Perth Airport', country: 'Australia' },
  { code: 'AKL', city: 'Auckland', name: 'Auckland Airport', country: 'New Zealand' },

  // Africa
  { code: 'ADD', city: 'Addis Ababa', name: 'Bole International', country: 'Ethiopia' },
  { code: 'NBO', city: 'Nairobi', name: 'Jomo Kenyatta International', country: 'Kenya' },
  { code: 'JNB', city: 'Johannesburg', name: 'O. R. Tambo International', country: 'South Africa' },
  { code: 'CMN', city: 'Casablanca', name: 'Mohammed V International', country: 'Morocco' },
];

const byCode = new Map(airports.map((a) => [a.code, a]));

export function findAirport(code: string | null | undefined): Airport | undefined {
  if (!code) return undefined;
  if (code === EVERYWHERE.code) return EVERYWHERE;
  return byCode.get(code.toUpperCase());
}

export function airportLabel(a: Airport) {
  return a.code === EVERYWHERE.code ? 'Everywhere' : `${a.city} (${a.code})`;
}

export function searchAirports(query: string, opts: { preferPk?: boolean } = {}): Airport[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    const pool = airports.filter((a) => a.popular && (opts.preferPk ? a.pk : !a.pk));
    return pool.slice(0, 8);
  }
  const scored = airports
    .map((a) => {
      const code = a.code.toLowerCase();
      const city = a.city.toLowerCase();
      let score = -1;
      if (code === q) score = 100;
      else if (city.startsWith(q)) score = 80;
      else if (code.startsWith(q)) score = 70;
      else if (a.name.toLowerCase().includes(q)) score = 50;
      else if (a.country.toLowerCase().startsWith(q)) score = 40;
      else if (city.includes(q)) score = 30;
      if (score >= 0 && a.popular) score += 25;
      if (score >= 0 && opts.preferPk && a.pk) score += 5;
      return { a, score };
    })
    .filter((x) => x.score >= 0)
    .sort((x, y) => y.score - x.score);
  return scored.slice(0, 8).map((x) => x.a);
}
