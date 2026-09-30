// ============================================================
// Airline fare, refund & reissue details
// Sourced from each airline's official website (see `sources`).
// Last verified: 29 September 2026. Fees are per passenger per
// sector unless stated; the fare rules printed on the ticket
// always take priority.
// ============================================================

export type SeasonProfile = 'gulf' | 'saudi' | 'europe' | 'asia';
export type FareLevel = 'low' | 'mid' | 'high';

export interface FareFamily {
  name: string;
  baggage: string;
  change: string;
  refund: string;
}

export interface RouteInfo {
  city: string;
  code: string;
  country: string;
  direct: boolean;
  /** Pakistani airports with non-stop service (defaults to all of the airline's Pakistani airports) */
  from?: string[];
}

export interface AirlineDetail {
  intro: string;
  loyalty?: string;
  pkAirports: string[]; // IATA codes of Pakistani airports served
  routes: RouteInfo[];
  cabinBag: string;
  fareFamilies: FareFamily[];
  fareNote?: string;
  refundPolicy: string[];
  reissuePolicy: string[];
  season: SeasonProfile;
  sources: { label: string; url: string }[];
}

export const LAST_VERIFIED = '29 September 2026';

/** Typical fare level by calendar month (Jan..Dec) for travel from Pakistan. */
export const seasonProfiles: Record<SeasonProfile, { levels: FareLevel[]; notes: Partial<Record<number, string>> }> = {
  gulf: {
    levels: ['mid', 'low', 'high', 'mid', 'high', 'high', 'high', 'mid', 'low', 'low', 'low', 'high'],
    notes: {
      2: 'Eid ul-Fitr falls around 10 March 2027, so seats fill up in the weeks before and after it.',
      4: 'Eid ul-Adha falls around 17 May 2027, another peak for family travel.',
      5: 'School summer holidays start in June and fares climb.',
      6: 'Peak summer holidays and overseas Pakistanis visiting home.',
      8: 'After the summer rush, September is one of the cheapest months.',
      9: 'Low demand in October and November makes these the best-value months.',
      11: 'Winter holidays and year-end travel push prices up from mid-December.',
    },
  },
  saudi: {
    levels: ['mid', 'high', 'high', 'mid', 'high', 'mid', 'low', 'low', 'mid', 'low', 'low', 'high'],
    notes: {
      1: 'Ramadan (from around 8 February 2027) is the busiest Umrah season of the year.',
      2: 'The last ten nights of Ramadan and Eid ul-Fitr keep Jeddah and Madinah fares high.',
      4: 'Hajj and Eid ul-Adha (around 17 May 2027) are the peak for Saudi routes.',
      6: 'July and August are usually quiet months after Hajj.',
      9: 'October and November offer cheaper Umrah travel with milder weather.',
      11: 'Winter school holidays make December a popular Umrah month.',
    },
  },
  europe: {
    levels: ['mid', 'low', 'mid', 'mid', 'mid', 'high', 'high', 'high', 'low', 'low', 'low', 'high'],
    notes: {
      1: 'February is usually the cheapest month for long-haul flights from Pakistan.',
      5: 'June to August combines summer holidays in Pakistan and the UK, so fares peak.',
      8: 'From September, demand drops and fares fall until early December.',
      11: 'Christmas holidays abroad bring the diaspora home, making December expensive.',
    },
  },
  asia: {
    levels: ['mid', 'low', 'mid', 'mid', 'mid', 'high', 'high', 'mid', 'low', 'low', 'mid', 'high'],
    notes: {
      1: 'February is a good-value month for Bangkok and Kuala Lumpur.',
      5: 'Family holidays in June and July push fares up.',
      8: 'September and October are the cheapest months before the cool, dry season.',
      11: 'December is peak season for South-East Asia holidays.',
    },
  },
};

export const airlineDetails: Record<string, AirlineDetail> = {
  // ---------------------------------------------------------------- PIA
  'pia-pakistan-international-airlines': {
    intro:
      'Pakistan International Airlines (PIA) is Pakistan’s national flag carrier and has the widest network from Pakistan, linking major cities and northern airports such as Skardu, Gilgit and Chitral with the Gulf, Saudi Arabia, the UK, Europe, Canada, China and Malaysia. Direct flights from Lahore to London resumed in March 2026.',
    loyalty: 'PIA Awards+Plus',
    pkAirports: ['ISB', 'KHI', 'LHE', 'PEW', 'MUX', 'SKT', 'LYP', 'UET', 'SKZ', 'GIL', 'KDU', 'CJL', 'TUK'],
    routes: [
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: true, from: ['ISB', 'LHE', 'KHI', 'PEW', 'MUX', 'SKT'] },
      { city: 'Madinah', code: 'MED', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI', 'MUX', 'SKT'] },
      { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', direct: true, from: ['ISB', 'KHI', 'PEW', 'MUX', 'SKT'] },
      { city: 'Riyadh', code: 'RUH', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI', 'PEW', 'MUX', 'SKT'] },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Manchester', code: 'MAN', country: 'United Kingdom', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Toronto', code: 'YYZ', country: 'Canada', direct: true, from: ['ISB', 'KHI'] },
      { city: 'Paris', code: 'CDG', country: 'France', direct: true, from: ['ISB'] },
      { city: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia', direct: true, from: ['ISB'] },
      { city: 'Baku', code: 'GYD', country: 'Azerbaijan', direct: true, from: ['ISB', 'LHE', 'KHI'] },
      { city: 'Skardu', code: 'KDU', country: 'Pakistan', direct: true, from: ['ISB', 'LHE', 'KHI'] },
      { city: 'Gilgit', code: 'GIL', country: 'Pakistan', direct: true, from: ['ISB'] },
    ],
    cabinBag: '7 kg in Economy',
    fareFamilies: [
      {
        name: 'Economy',
        baggage: 'As printed on the ticket (route and fare dependent); ATR domestic flights 20 kg',
        change: 'Change-of-booking fee + fare difference (Pakistan → Europe: USD 60)',
        refund: 'Refund fee applies (Pakistan → Europe: USD 80); promotional fares may differ',
      },
      {
        name: 'Executive Economy',
        baggage: 'Higher allowance than Economy, as printed on the ticket',
        change: 'One free change on the original ticket when requested at least 3 days before (from Europe)',
        refund: 'Refund fee applies per country table',
      },
      {
        name: 'Umrah fares',
        baggage: 'As printed on the ticket',
        change: 'Re-issue of fully unused tickets online or at PIA offices',
        refund: 'Fully unused tickets only; no partial refunds on half-used Umrah tickets',
      },
    ],
    fareNote:
      'PIA publishes penalties country by country. Figures above are PIA’s published charges for travel from Pakistan to Europe; Gulf and domestic charges differ and are confirmed on your quote.',
    refundPolicy: [
      'All unused tickets can be refunded under PIA’s refund policy, minus the published refund charge for the country of travel.',
      'Travel from Pakistan to Europe: refund charge USD 80; no-show charge USD 90.',
      'If you are a no-show and then ask for a refund or change, only one charge (whichever is higher) applies.',
      'Refunds are not allowed if flight coupons are used out of sequence.',
      'No penalty applies in the case of death or hospitalisation of the passenger or an immediate family member on the same booking, with documents.',
      'Umrah tickets are sold as round trips only, and half-used Umrah tickets cannot be refunded.',
    ],
    reissuePolicy: [
      'Change of booking (COB) charge for travel from Pakistan to Europe: USD 60, plus any fare difference.',
      'Penalties are charged in addition to any fare difference caused by season, travel class or other reasons.',
      'Changes to the domestic Pakistan leg of an international ticket do not attract the international change charge.',
      'Web tickets are non-transferable, non-endorsable and non-reroutable.',
      'One stopover in Pakistan is free; further stopovers are charged.',
    ],
    season: 'gulf',
    sources: [
      { label: 'PIA Booking Conditions and Penalties', url: 'https://www.piac.com.pk/facilities/booking-conditions' },
      { label: 'PIA Fare Rules (Europe)', url: 'https://www.piac.com.pk/fare-rules/europe' },
      { label: 'PIA Umrah Policy', url: 'https://www.piac.com.pk/fare-rules/umrah-policy-pia-web-and-mobile' },
      { label: 'PIA Baggage Guide', url: 'https://www.piac.com.pk/facilities/baggage-guide' },
    ],
  },

  // ---------------------------------------------------------------- Airblue
  airblue: {
    intro:
      'Airblue is a private Pakistani airline flying Airbus aircraft between Islamabad, Karachi, Lahore, Peshawar and Quetta, and to the UAE and Saudi Arabia. It is a popular choice for Umrah and Gulf work travel.',
    pkAirports: ['ISB', 'KHI', 'LHE', 'PEW', 'UET', 'MUX'],
    routes: [
      { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', direct: true, from: ['ISB', 'KHI', 'MUX'] },
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: true, from: ['ISB', 'LHE', 'MUX'] },
      { city: 'Riyadh', code: 'RUH', country: 'Saudi Arabia', direct: true, from: ['ISB'] },
      { city: 'Sharjah', code: 'SHJ', country: 'United Arab Emirates', direct: true, from: ['ISB', 'MUX'] },
      { city: 'Abu Dhabi', code: 'AUH', country: 'United Arab Emirates', direct: true, from: ['ISB'] },
      { city: 'Dammam', code: 'DMM', country: 'Saudi Arabia', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Karachi', code: 'KHI', country: 'Pakistan', direct: true, from: ['ISB', 'LHE', 'PEW', 'UET'] },
      { city: 'Islamabad', code: 'ISB', country: 'Pakistan', direct: true, from: ['KHI'] },
    ],
    cabinBag: '1 bag, 7 kg, max 45 in (22 × 15 × 8 in)',
    fareFamilies: [
      { name: 'Economy Value', baggage: 'No free checked baggage', change: 'Fee shown on e-ticket + fare difference', refund: 'Fee shown on e-ticket' },
      { name: 'Economy Flexi', baggage: '20 kg (1 bag)', change: 'Fee shown on e-ticket + fare difference', refund: 'Fee shown on e-ticket' },
      { name: 'Economy Xtra', baggage: '30 kg (1 bag)', change: 'Fee shown on e-ticket + fare difference', refund: 'Fee shown on e-ticket' },
    ],
    refundPolicy: [
      'You pay the refund fee shown on your e-ticket; the balance is returned only to the original form of payment.',
      'CNIC details are required for every passenger on a refund.',
      'Partial refunds are not allowed on connecting-flight bookings.',
      'Tickets expire 30 days after the flight date and then have no refund or change value.',
    ],
    reissuePolicy: [
      'Changes cost the fee shown on your e-ticket plus any fare difference; the same fare is not guaranteed.',
      'Exchanges are allowed for the same sector only.',
      'Change fees are charged per passenger and are non-refundable.',
      'Check-in closes 45 minutes before domestic and 90 minutes before international departures.',
    ],
    season: 'gulf',
    sources: [{ label: 'Airblue Legal Terms & Conditions', url: 'https://www.airblue.com/corp/terms' }],
  },

  // ---------------------------------------------------------------- AirSial
  airsial: {
    intro:
      'AirSial is a Sialkot-based Pakistani airline, founded by the Sialkot business community, with domestic flights between Karachi, Islamabad, Lahore, Peshawar, Sialkot and Quetta and international flights to the UAE, Saudi Arabia and Oman.',
    pkAirports: ['SKT', 'KHI', 'ISB', 'LHE', 'PEW', 'MUX', 'UET'],
    routes: [
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI', 'SKT', 'MUX', 'PEW'] },
      { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', direct: true, from: ['ISB', 'LHE', 'SKT'] },
      { city: 'Riyadh', code: 'RUH', country: 'Saudi Arabia', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Dammam', code: 'DMM', country: 'Saudi Arabia', direct: true, from: ['ISB', 'SKT'] },
      { city: 'Muscat', code: 'MCT', country: 'Oman', direct: true, from: ['ISB', 'SKT'] },
      { city: 'Abu Dhabi', code: 'AUH', country: 'United Arab Emirates', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Karachi', code: 'KHI', country: 'Pakistan', direct: true, from: ['ISB', 'LHE', 'SKT', 'PEW', 'UET'] },
      { city: 'Islamabad', code: 'ISB', country: 'Pakistan', direct: true, from: ['KHI'] },
    ],
    cabinBag: '1 piece, 7 kg, max 45 in (22 + 15 + 8)',
    fareFamilies: [
      {
        name: 'Economy',
        baggage: '20 kg checked (max 32 kg per piece, 54 in)',
        change: 'Fee per fare conditions + fare difference',
        refund: 'Cancellation penalty deducted; some discounted fares non-refundable',
      },
    ],
    refundPolicy: [
      'If the fare conditions allow it, bookings can be cancelled and refunded after the cancellation penalty is deducted.',
      'Some discounted and promotional fares are non-refundable.',
      'Involuntary refunds apply if AirSial cancels or fails to operate a flight as scheduled.',
    ],
    reissuePolicy: [
      'Most discounted fares incur a fee for changes, plus any fare difference and additional taxes.',
      'The exact penalty is shown before you confirm a change, and we confirm it on your quote.',
    ],
    season: 'gulf',
    sources: [
      { label: 'AirSial FAQs', url: 'https://www.airsial.com/faqs' },
      { label: 'AirSial Conditions of Carriage (PDF)', url: 'https://www.airsial.com/general_documents/conditions_of_carriage.pdf' },
    ],
  },

  // ---------------------------------------------------------------- Fly Jinnah
  'fly-jinnah': {
    intro:
      'Fly Jinnah is a Pakistani low-cost airline, a joint venture of Air Arabia and Pakistan’s Lakson Group, flying Airbus A320s from Karachi, Islamabad and Lahore to Pakistani cities and the Gulf.',
    pkAirports: ['KHI', 'ISB', 'LHE', 'LYP', 'MUX', 'PEW', 'SKT', 'UET'],
    routes: [
      { city: 'Sharjah', code: 'SHJ', country: 'United Arab Emirates', direct: true, from: ['ISB'] },
      { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', direct: true, from: ['LHE'] },
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI'] },
      { city: 'Riyadh', code: 'RUH', country: 'Saudi Arabia', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Dammam', code: 'DMM', country: 'Saudi Arabia', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Bahrain', code: 'BAH', country: 'Bahrain', direct: true, from: ['ISB', 'LHE'] },
      { city: 'Muscat', code: 'MCT', country: 'Oman', direct: true, from: ['LHE'] },
      { city: 'Islamabad', code: 'ISB', country: 'Pakistan', direct: true, from: ['KHI', 'LHE'] },
    ],
    cabinBag: 'Hand baggage included on all fares',
    fareFamilies: [
      {
        name: 'Basic',
        baggage: 'Hand baggage only; checked bags at extra cost',
        change: 'Domestic: min PKR 4,500 up to 24 h; international: min AED 200 up to 24 h',
        refund: 'Credit only: domestic min PKR 5,500 / international min AED 200 up to 24 h; no cash refund',
      },
      {
        name: 'Value',
        baggage: 'Checked baggage included',
        change: 'Domestic: 1 free change up to 12 h; international: 1 free change up to 24 h',
        refund: 'Credit: domestic min PKR 4,500 / intl AED 100. Cash: domestic PKR 12,000 / intl AED 300',
      },
      {
        name: 'Ultimate',
        baggage: 'Higher checked allowance',
        change: 'Domestic: 2 free changes up to 6 h; international: 2 free changes up to 8 h',
        refund: 'Credit free (6 h domestic / 8 h intl). Cash: domestic PKR 7,000 / intl AED 200',
      },
    ],
    refundPolicy: [
      'Basic fares can only be cancelled into travel credit; cash refunds are not permitted.',
      'Value and Ultimate fares can be refunded as credit or to the original payment (cash) for the fees shown above.',
      'No refunds within 24 hours (Basic), 12 hours (Value, domestic) or 6–8 hours (Ultimate) of departure.',
    ],
    reissuePolicy: [
      'Fare difference always applies on top of any modification charge.',
      'Changes are not allowed inside the cut-off: 24 h (Basic), 12 h domestic / 24 h international (Value), 6 h domestic / 8 h international (Ultimate).',
    ],
    season: 'gulf',
    sources: [
      { label: 'Fly Jinnah Modifications & Cancellations', url: 'https://flyjinnah.com/terms-and-conditions-modifications-and-cancellations' },
      { label: 'Fly Jinnah Fare Types', url: 'https://www.flyjinnah.com/en/plan/reservation/fare-types' },
    ],
  },

  // ---------------------------------------------------------------- Emirates
  emirates: {
    intro:
      'Emirates is the Dubai-based airline with daily flights from Islamabad, Karachi, Lahore, Peshawar and Sialkot to Dubai International, and one-stop connections to Europe, North America, Africa and Australia.',
    loyalty: 'Emirates Skywards',
    pkAirports: ['ISB', 'KHI', 'LHE', 'PEW', 'SKT'],
    routes: [
      { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', direct: true },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: false },
      { city: 'Manchester', code: 'MAN', country: 'United Kingdom', direct: false },
      { city: 'Toronto', code: 'YYZ', country: 'Canada', direct: false },
      { city: 'New York', code: 'JFK', country: 'United States', direct: false },
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: false },
      { city: 'Madinah', code: 'MED', country: 'Saudi Arabia', direct: false },
      { city: 'Sydney', code: 'SYD', country: 'Australia', direct: false },
    ],
    cabinBag: '1 piece, 7 kg in Economy',
    fareFamilies: [
      { name: 'Economy Special', baggage: '20 kg', change: 'Most restricted fare; highest penalties where changes are allowed', refund: 'Most restricted; check fare conditions' },
      { name: 'Economy Saver', baggage: '25 kg', change: 'Fee applies + fare difference', refund: 'Fee applies' },
      { name: 'Economy Flex', baggage: '30 kg', change: 'Changes allowed for a fee', refund: 'Cancellation allowed for a fee' },
      { name: 'Economy Flex Plus', baggage: '35 kg', change: 'Fully flexible: no change fee (fare difference applies)', refund: 'Fully flexible: no refund fee' },
    ],
    fareNote:
      'Weight concept applies on flights between Pakistan and Dubai. On routes to and from the Americas and Africa, Economy is 1 × 23 kg (Special) or 2 × 23 kg (Saver, Flex, Flex Plus). Emirates prints the exact fee for each fare in its fare conditions.',
    refundPolicy: [
      'Some fares are not refundable, and others carry a cancellation charge, which is shown in the Fare Conditions before you pay.',
      'Flex Plus is Emirates’ fully flexible, unrestricted fare and has no refund fee.',
      'Seat selection is free on Flex and Flex Plus and paid on Special and Saver fares.',
    ],
    reissuePolicy: [
      'Special is the most restricted fare; Saver is slightly more flexible; Flex allows changes for a fee; Flex Plus has no change fee.',
      'Any fare difference between the original and new flight is always payable.',
      'Special fares cannot be upgraded; Saver fares can only be upgraded within 48 hours of departure.',
    ],
    season: 'gulf',
    sources: [
      { label: 'Emirates: Differences between Special, Saver, Flex and Flex Plus', url: 'https://www.emirates.com/us/english/help/faqs/what-are-the-differences-between-special-saver-flex-and-flex-plus-fares/' },
      { label: 'Emirates Checked Baggage', url: 'https://www.emirates.com/pk/english/before-you-fly/baggage/checked-baggage/' },
    ],
  },

  // ---------------------------------------------------------------- flydubai
  flydubai: {
    intro:
      'flydubai is Dubai’s budget-friendly carrier, flying from Islamabad, Karachi, Peshawar, Multan and Sialkot to Dubai International with connections across the GCC, Central Asia, Africa and Europe and codeshares with Emirates.',
    loyalty: 'Emirates Skywards',
    pkAirports: ['ISB', 'KHI', 'PEW', 'MUX', 'SKT'],
    routes: [
      { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', direct: true },
      { city: 'Baku', code: 'GYD', country: 'Azerbaijan', direct: false },
      { city: 'Tbilisi', code: 'TBS', country: 'Georgia', direct: false },
      { city: 'Istanbul Sabiha Gökçen', code: 'SAW', country: 'Türkiye', direct: false },
      { city: 'Almaty', code: 'ALA', country: 'Kazakhstan', direct: false },
      { city: 'Kuwait City', code: 'KWI', country: 'Kuwait', direct: false },
    ],
    cabinBag: '7 kg in Economy (14 kg Business)',
    fareFamilies: [
      { name: 'Lite', baggage: 'Checked baggage at a charge', change: 'Not permitted', refund: 'Not permitted (taxes only)' },
      { name: 'Value', baggage: '20 kg', change: 'AED 150 + fare difference', refund: 'AED 200 cancellation fee' },
      { name: 'Flex', baggage: '30 kg', change: 'Free (fare difference applies)', refund: 'Free' },
    ],
    refundPolicy: [
      'Cancellation refunds are issued as a flydubai voucher, valid until the expiry date shown on the voucher.',
      'For non-refundable fares, only refundable taxes are returned; government non-refundable taxes are not.',
      'Partial cancellation is not allowed before the journey starts; the whole booking must be cancelled.',
      'Using flights out of sequence cancels all remaining flights without refund.',
      'Optional extras (bags, seats) can only be cancelled up to 24 hours before departure.',
    ],
    reissuePolicy: [
      'Rebooking costs the fare difference, taxes, surcharges and the rebooking fee per person per sector.',
      'Rebooking applies to everyone on the booking; individual passengers cannot be rebooked separately.',
      'Segments or passengers (including infants) cannot be added to an existing booking.',
    ],
    season: 'gulf',
    sources: [
      { label: 'flydubai Fare types and rules', url: 'https://www.flydubai.com/en/flying-with-us/fare-types' },
      { label: 'flydubai Checked baggage', url: 'https://www.flydubai.com/en/flying-with-us/baggage/check-in-baggage' },
    ],
  },

  // ---------------------------------------------------------------- Qatar Airways
  'qatar-airways': {
    intro:
      'Qatar Airways, a oneworld member, connects Islamabad, Karachi, Lahore, Peshawar, Multan and Sialkot with Doha’s Hamad International Airport and onward to its global network, including London, Manchester, Toronto and the United States.',
    loyalty: 'Privilege Club (Avios)',
    pkAirports: ['ISB', 'KHI', 'LHE', 'PEW', 'MUX', 'SKT'],
    routes: [
      { city: 'Doha', code: 'DOH', country: 'Qatar', direct: true },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: false },
      { city: 'Manchester', code: 'MAN', country: 'United Kingdom', direct: false },
      { city: 'Toronto', code: 'YYZ', country: 'Canada', direct: false },
      { city: 'New York', code: 'JFK', country: 'United States', direct: false },
      { city: 'Paris', code: 'CDG', country: 'France', direct: false },
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: false },
      { city: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia', direct: false },
    ],
    cabinBag: '1 piece up to 7 kg (50 × 37 × 25 cm)',
    fareFamilies: [
      { name: 'Economy Lite', baggage: '20 kg', change: 'Most restricted fare', refund: 'Most restricted fare' },
      { name: 'Economy Classic', baggage: '25 kg', change: 'Fee applies + fare difference', refund: 'Fee applies' },
      { name: 'Economy Convenience', baggage: '30 kg', change: 'Lower fee + fare difference', refund: 'Fee applies' },
      { name: 'Economy Comfort', baggage: '35 kg', change: 'Unlimited complimentary date changes', refund: 'Fee-free refund' },
    ],
    fareNote:
      'Weight allowances apply on routes other than Africa and the Americas (1 × 23 kg on Lite, 2 × 23 kg on higher fares there). Standard seats are free on Convenience and Comfort, and paid on Classic.',
    refundPolicy: [
      'Economy Comfort tickets are entitled to a fee-free refund.',
      'When a ticket combines fares, the most restrictive cancellation rule applies to the whole journey.',
      'Unused tickets are valid for 12 months from the date of issue.',
    ],
    reissuePolicy: [
      'Economy Comfort allows unlimited, complimentary changes to the travel date.',
      'Other fare families allow changes for a fee plus any fare difference, as printed in the fare conditions.',
      'Partially used tickets are valid for 12 months from the first outbound flight.',
    ],
    season: 'gulf',
    sources: [
      { label: 'Qatar Airways Baggage allowance', url: 'https://www.qatarairways.com/en-pk/baggage/allowance.html' },
      { label: 'Qatar Airways: New fare families (press release)', url: 'https://www.qatarairways.com/en/press-releases/2020/November/newfarefamilies.html' },
      { label: 'Qatar Airways Fare conditions', url: 'https://www.qatarairways.com/en/Privilege-Club/fare-conditions.html' },
    ],
  },

  // ---------------------------------------------------------------- Etihad
  'etihad-airways': {
    intro:
      'Etihad Airways, the national airline of the UAE, flies from Islamabad, Karachi, Lahore and Peshawar to Abu Dhabi’s Zayed International Airport, with onward connections to Europe, North America and Asia.',
    loyalty: 'Etihad Guest',
    pkAirports: ['ISB', 'KHI', 'LHE', 'PEW'],
    routes: [
      { city: 'Abu Dhabi', code: 'AUH', country: 'United Arab Emirates', direct: true },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: false },
      { city: 'Manchester', code: 'MAN', country: 'United Kingdom', direct: false },
      { city: 'Toronto', code: 'YYZ', country: 'Canada', direct: false },
      { city: 'New York', code: 'JFK', country: 'United States', direct: false },
      { city: 'Bangkok', code: 'BKK', country: 'Thailand', direct: false },
    ],
    cabinBag: '1 piece, 7 kg in Economy',
    fareFamilies: [
      { name: 'Economy Basic', baggage: 'Route dependent (may be cabin bag only)', change: 'Change fee per fare rules + fare difference', refund: 'Most restricted' },
      { name: 'Economy Value', baggage: 'Checked bag included', change: 'Change fee per fare rules + fare difference', refund: 'Fee applies' },
      { name: 'Economy Comfort', baggage: 'Higher allowance', change: 'Change fee per fare rules + fare difference', refund: 'Fee applies' },
      { name: 'Economy Deluxe', baggage: 'Highest Economy allowance', change: 'Most flexible Economy fare', refund: 'Most flexible Economy fare' },
    ],
    fareNote:
      'Seat reservation is free on Comfort and Deluxe. Deluxe also includes Wi-Fi and Priority Access. The exact change and refund charges are printed in the fare rules at booking.',
    refundPolicy: [
      'Refund eligibility and charges depend on the fare brand; Basic is the most restricted and Deluxe the most flexible.',
      'Tickets bought through a travel agent (like BookMyFlight) are refunded through that agent.',
    ],
    reissuePolicy: [
      'Date changes are charged according to the fare rules of your brand, plus any fare difference.',
      'Travel-agent bookings must be changed through the issuing agent.',
    ],
    season: 'gulf',
    sources: [
      { label: 'Etihad: What is included in Economy fares', url: 'https://www.etihad.com/en-us/help/faq/fares' },
      { label: 'Etihad Baggage information', url: 'https://www.etihad.com/en-us/help/baggage-information' },
      { label: 'Etihad: Changing your booking', url: 'https://www.etihad.com/en/help/faq/modification-guide' },
    ],
  },

  // ---------------------------------------------------------------- Air Arabia
  'air-arabia': {
    intro:
      'Air Arabia is the Sharjah-based low-cost airline with flights from Karachi, Peshawar, Multan and Sialkot to Sharjah and Abu Dhabi, and from Islamabad to Ras Al Khaimah, connecting to the Middle East, Central Asia, Africa and Europe.',
    loyalty: 'AirRewards',
    pkAirports: ['KHI', 'PEW', 'MUX', 'SKT', 'ISB'],
    routes: [
      { city: 'Sharjah', code: 'SHJ', country: 'United Arab Emirates', direct: true, from: ['KHI', 'PEW', 'MUX', 'SKT'] },
      { city: 'Abu Dhabi', code: 'AUH', country: 'United Arab Emirates', direct: true, from: ['MUX', 'SKT'] },
      { city: 'Ras Al Khaimah', code: 'RKT', country: 'United Arab Emirates', direct: true, from: ['ISB', 'PEW'] },
      { city: 'Tbilisi', code: 'TBS', country: 'Georgia', direct: false },
      { city: 'Baku', code: 'GYD', country: 'Azerbaijan', direct: false },
      { city: 'Cairo', code: 'CAI', country: 'Egypt', direct: false },
    ],
    cabinBag: 'Hand baggage included on all fares',
    fareFamilies: [
      { name: 'Basic', baggage: 'No checked bag (add 20/30/40 kg at extra cost)', change: 'Min AED 200 up to 24 h', refund: 'Credit only, min AED 200 up to 24 h; no cash refund' },
      { name: 'Value', baggage: '20 kg', change: '1 free modification up to 24 h', refund: 'Credit AED 100 or cash AED 300, up to 24 h' },
      { name: 'Ultimate', baggage: '30 kg', change: '2 free modifications up to 8 h', refund: 'Credit free or cash AED 200, up to 8 h' },
    ],
    fareNote: 'Rules shown are Air Arabia’s published rules for flights from, to and via the UAE.',
    refundPolicy: [
      'Basic fares can only be cancelled into Air Arabia credit; there is no cash refund.',
      'Value and Ultimate fares can be refunded as credit or cash for the fees shown.',
      'No cancellations within 24 hours (Basic, Value) or 8 hours (Ultimate) of departure.',
    ],
    reissuePolicy: [
      'Fare difference applies on every modification, even when the modification itself is free.',
      'Value allows one modification; Ultimate allows two.',
    ],
    season: 'gulf',
    sources: [
      { label: 'Air Arabia Modifications & Cancellations', url: 'https://www.airarabia.com/en/terms-and-conditions-modifications-and-cancellations' },
      { label: 'Air Arabia Fare types', url: 'https://www.airarabia.com/en/plan/reservation/fare-types' },
    ],
  },

  // ---------------------------------------------------------------- Saudia
  saudia: {
    intro:
      'Saudia, the national airline of Saudi Arabia and a SkyTeam member, flies from Islamabad, Karachi, Peshawar and Multan to Jeddah and Riyadh, and is a first choice for Umrah and Hajj travellers and workers heading to the Kingdom.',
    loyalty: 'AlFursan',
    pkAirports: ['ISB', 'KHI', 'PEW', 'MUX'],
    routes: [
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI', 'PEW', 'MUX'] },
      { city: 'Riyadh', code: 'RUH', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI', 'PEW'] },
      { city: 'Madinah', code: 'MED', country: 'Saudi Arabia', direct: false },
      { city: 'Dammam', code: 'DMM', country: 'Saudi Arabia', direct: false },
      { city: 'Cairo', code: 'CAI', country: 'Egypt', direct: false },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: false },
    ],
    cabinBag: 'Per ticket',
    fareFamilies: [
      { name: 'Guest Saver', baggage: 'As shown on the ticket', change: 'Not permitted', refund: 'Not permitted (no-show not permitted)' },
      { name: 'Guest Basic', baggage: 'As shown on the ticket', change: 'Fee applies', refund: 'Fee applies' },
      { name: 'Guest Semi Flex', baggage: 'As shown on the ticket', change: 'Fee applies (free standard seat)', refund: 'Fee applies' },
      { name: 'Guest Flex', baggage: 'As shown on the ticket', change: 'Free', refund: 'Fee applies' },
    ],
    fareNote:
      'Guest is Saudia’s Economy class. AlFursan miles earned: Saver 0%, Basic 60%, Semi Flex 80%, Flex 110%.',
    refundPolicy: [
      'Guest Saver tickets cannot be cancelled or refunded.',
      'Guest Basic, Semi Flex and Flex can be cancelled for a fee.',
      'Children pay 50% of the adult change/refund/no-show fee on Basic and Flex; infants without a seat pay 80% (no no-show fee).',
    ],
    reissuePolicy: [
      'Voluntary changes are not allowed on Guest Saver.',
      'Guest Flex changes are free (fare difference applies); Basic and Semi Flex pay a change fee.',
      'No-show fees apply on all fares except Saver, where no-show is not permitted.',
    ],
    season: 'saudi',
    sources: [
      { label: 'Saudia Branded Fares', url: 'https://www.saudia.com/before-flying/baggage/baggage-allowances' },
      { label: 'Saudia Fare families', url: 'https://www.saudia.com/before-flying/travel-information/fare-families' },
    ],
  },

  // ---------------------------------------------------------------- flynas
  flynas: {
    intro:
      'flynas is Saudi Arabia’s leading low-cost airline, flying from Islamabad to Riyadh and from Karachi to Jeddah, Madinah and Riyadh, which makes it a budget option for Umrah and Saudi work visas.',
    loyalty: 'nasmiles',
    pkAirports: ['ISB', 'KHI'],
    routes: [
      { city: 'Riyadh', code: 'RUH', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI'] },
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: true, from: ['KHI'] },
      { city: 'Madinah', code: 'MED', country: 'Saudi Arabia', direct: true, from: ['KHI'] },
      { city: 'Dammam', code: 'DMM', country: 'Saudi Arabia', direct: false },
      { city: 'Abha', code: 'AHB', country: 'Saudi Arabia', direct: false },
    ],
    cabinBag: '1 × 7 kg on every fare',
    fareFamilies: [
      { name: 'Light', baggage: 'Checked bags at a fee', change: 'SAR 350 + fare difference', refund: 'Not allowed' },
      { name: 'Value', baggage: '1 × 30 kg', change: 'SAR 150 + fare difference', refund: 'Not allowed' },
      { name: 'Plus', baggage: '2 × 20 kg', change: 'Free (fare difference applies)', refund: 'SAR 200 fee, balance to Nas Wallet' },
    ],
    fareNote:
      'These are flynas’ published rules for International Group 3, which includes Islamabad, Karachi and Lahore. Optional flexibility add-ons: Light Flex (change SAR 100), Light/Super Flex (cancel SAR 150, change free), Value/Super Flex (cancel and change free).',
    refundPolicy: [
      'Cancellations are allowed up to 4 hours before departure where the fare permits.',
      'After the cancellation fee, the balance is credited to your Nas Wallet (not refunded to the card).',
      'Nas Wallet credit is valid for one year and can be used by the same passenger via flynas direct channels.',
    ],
    reissuePolicy: [
      'Changes can be made up to 4 hours before departure.',
      'The change fee is per passenger per flight, plus any fare difference.',
    ],
    season: 'saudi',
    sources: [
      { label: 'flynas Fare Types', url: 'https://www.flynas.com/en/booking-flynas/fare-types' },
      { label: 'flynas Baggage', url: 'https://www.flynas.com/en/plan-my-trip/baggage' },
    ],
  },

  // ---------------------------------------------------------------- flyadeal
  flyadeal: {
    intro:
      'flyadeal is a Saudi low-cost airline owned by the Saudia Group, flying from Islamabad, Lahore, Peshawar and Sialkot to Riyadh, and from Karachi to Riyadh, Jeddah and Dammam.',
    pkAirports: ['ISB', 'KHI', 'LHE', 'PEW', 'SKT'],
    routes: [
      { city: 'Riyadh', code: 'RUH', country: 'Saudi Arabia', direct: true, from: ['ISB', 'KHI', 'LHE', 'PEW', 'SKT'] },
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: true, from: ['KHI'] },
      { city: 'Dammam', code: 'DMM', country: 'Saudi Arabia', direct: true, from: ['KHI'] },
      { city: 'Madinah', code: 'MED', country: 'Saudi Arabia', direct: false },
    ],
    cabinBag: '7 kg carry-on + personal item',
    fareFamilies: [
      { name: 'fly', baggage: 'Cabin bag only', change: 'Service fee + fare difference', refund: 'Non-refundable' },
      { name: 'fly+', baggage: 'Checked bag included', change: 'Service fee + fare difference', refund: 'Wallet credit (3 months), fees apply, up to 3 days before' },
      { name: 'flyMax', baggage: 'Larger checked bag included', change: 'Most flexible', refund: 'Wallet credit (3 months), up to 12 hours before' },
    ],
    refundPolicy: [
      'Under flyadeal’s Conditions of Carriage, fares are non-refundable to the original payment.',
      'fly+ bookings can be cancelled up to 3 days before departure into non-refundable flyadeal wallet credit valid 3 months (fees apply).',
      'flyMax bookings can be cancelled up to 12 hours before departure into wallet credit valid 3 months.',
    ],
    reissuePolicy: [
      'Date and time changes are made through Manage Booking, subject to the fare’s change rules and any fare difference.',
    ],
    season: 'saudi',
    sources: [{ label: 'flyadeal Help Centre: Cancel my booking', url: 'https://help.flyadeal.com/hc/en-us/articles/360022477533-I-want-to-cancel-my-booking' }],
  },

  // ---------------------------------------------------------------- Turkish Airlines
  'turkish-airlines': {
    intro:
      'Turkish Airlines, a Star Alliance member, flies from Islamabad, Karachi and Lahore to Istanbul Airport, a major connecting hub for Europe, North America and Africa.',
    loyalty: 'Miles&Smiles',
    pkAirports: ['ISB', 'KHI', 'LHE'],
    routes: [
      { city: 'Istanbul', code: 'IST', country: 'Türkiye', direct: true },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: false },
      { city: 'Manchester', code: 'MAN', country: 'United Kingdom', direct: false },
      { city: 'Paris', code: 'CDG', country: 'France', direct: false },
      { city: 'Toronto', code: 'YYZ', country: 'Canada', direct: false },
      { city: 'New York', code: 'JFK', country: 'United States', direct: false },
      { city: 'Baku', code: 'GYD', country: 'Azerbaijan', direct: false },
    ],
    cabinBag: '8 kg in Economy',
    fareFamilies: [
      { name: 'EcoFly', baggage: 'Route dependent (weight or piece concept)', change: 'Most restricted package', refund: 'Most restricted package' },
      { name: 'ExtraFly', baggage: 'Higher allowance than EcoFly', change: 'Changes for a fee + fare difference', refund: 'Refundable with a deduction' },
      { name: 'PrimeFly', baggage: 'Highest Economy allowance', change: 'Most flexible package', refund: 'Most flexible package' },
    ],
    fareNote:
      'On piece-concept routes, each Economy bag can weigh up to 23 kg. The exact penalty for your package and fare class is shown in the fare rules at booking.',
    refundPolicy: [
      'Refund amounts depend on the flight package and fare class, as shown in the fare rules at booking.',
      'EcoFly is the most restricted package; PrimeFly is the most flexible.',
    ],
    reissuePolicy: [
      'Package changes and date changes are possible according to the fare rules, subject to availability and any fare difference.',
      'Travel-agent tickets are changed through the issuing agent.',
    ],
    season: 'europe',
    sources: [
      { label: 'Turkish Airlines Fare Rules', url: 'https://www.turkishairlines.com/en-us/any-questions/fare-rules/' },
      { label: 'Turkish Airlines International Flight Packages', url: 'https://www.turkishairlines.com/en-int/any-questions/flight-packages-for-international-flights-questions/' },
      { label: 'Turkish Airlines Checked Baggage', url: 'https://www.turkishairlines.com/en-us/any-questions/checked-baggage/' },
    ],
  },

  // ---------------------------------------------------------------- Oman Air
  'oman-air': {
    intro:
      'Oman Air, a oneworld member, flies from Karachi to Muscat, with connections to Europe, the Middle East and Asia. Flights to Pakistan get Oman Air’s enhanced Indian-subcontinent baggage allowance.',
    loyalty: 'Sindbad',
    pkAirports: ['KHI'],
    routes: [
      { city: 'Muscat', code: 'MCT', country: 'Oman', direct: true },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: false },
      { city: 'Paris', code: 'CDG', country: 'France', direct: false },
      { city: 'Bangkok', code: 'BKK', country: 'Thailand', direct: false },
      { city: 'Salalah', code: 'SLL', country: 'Oman', direct: false },
    ],
    cabinBag: '7 kg on every Economy fare',
    fareFamilies: [
      { name: 'Economy Super Saver', baggage: '20 kg on Indian-subcontinent routes', change: 'Highest change fee', refund: 'No refund on cancellation' },
      { name: 'Economy Comfort', baggage: '30 kg on Indian-subcontinent routes', change: 'Change fee applies', refund: 'Refund minus a cancellation fee' },
      { name: 'Economy Flex', baggage: '40 kg on Indian-subcontinent routes', change: 'No change fee', refund: 'Refundable (lowest cancellation fee)' },
    ],
    fareNote: 'On most other routes, Oman Air includes 0 kg (Super Saver), 20 kg (Comfort) or 30 kg (Flex).',
    refundPolicy: [
      'Super Saver fares do not permit refunds on cancellation.',
      'Comfort and Flex can be cancelled for a fee, which is shown when you start the change.',
    ],
    reissuePolicy: [
      'You can change your flight on any fare; the change fee depends on the bundle.',
      'Comfort and Flex bookings can be upgraded to Business Comfort; Super Saver cannot be upgraded.',
    ],
    season: 'gulf',
    sources: [
      { label: 'Oman Air Brand Fares', url: 'https://www.omanair.com/en/farebundles' },
      { label: 'Oman Air Fare Bundles FAQ', url: 'https://www.omanair.com/en/faqs-fare-bundles' },
      { label: 'Oman Air: Increased baggage on selected routes', url: 'https://services.omanair.com/gbl/en/PressRelease/oman-air-enhances-economy-fare-bundles-with-increased-baggage-allowance-on-selected-routes' },
    ],
  },

  // ---------------------------------------------------------------- Gulf Air
  'gulf-air': {
    intro:
      'Gulf Air, the national carrier of Bahrain, flies from Islamabad and Karachi to Bahrain International Airport, with convenient one-stop connections to London, Paris, Frankfurt and the wider GCC.',
    loyalty: 'Falconflyer',
    pkAirports: ['ISB', 'KHI'],
    routes: [
      { city: 'Bahrain', code: 'BAH', country: 'Bahrain', direct: true },
      { city: 'London Heathrow', code: 'LHR', country: 'United Kingdom', direct: false },
      { city: 'Manchester', code: 'MAN', country: 'United Kingdom', direct: false },
      { city: 'Paris', code: 'CDG', country: 'France', direct: false },
      { city: 'Frankfurt', code: 'FRA', country: 'Germany', direct: false },
    ],
    cabinBag: 'Per ticket; cabin bags are weighed and labelled',
    fareFamilies: [
      { name: 'Economy (entry fare)', baggage: '25 kg', change: 'Fee depends on fare type and destination', refund: 'Per fare type' },
      { name: 'Economy (mid fare)', baggage: '30 kg', change: 'Fee depends on fare type and destination', refund: 'Per fare type' },
      { name: 'Economy (flexible fare)', baggage: '35 kg', change: 'Most flexible Economy fare', refund: 'Most flexible Economy fare' },
    ],
    fareNote: 'Bookings made directly on gulfair.com get an extra 5 kg. No single bag may exceed 32 kg or 158 cm.',
    refundPolicy: [
      'Gulf Air’s refund policy depends on the type of ticket purchased.',
      'Voluntary cancellation of prepaid excess baggage is non-refundable.',
    ],
    reissuePolicy: [
      'Ticket change and cancellation fees vary by fare type and destination.',
      'Prepaid excess baggage can be reused on a changed flight or other sectors.',
    ],
    season: 'gulf',
    sources: [
      { label: 'Gulf Air Baggage Information', url: 'https://www.gulfair.com/help/baggage/baggage-information' },
      { label: 'Gulf Air Refund Policy', url: 'https://www.gulfair.com/transparency/Refund-policy' },
      { label: 'Gulf Air baggage allowances (media centre)', url: 'https://www.gulfair.com/about-gulf-air/media-center/gulf-air-eases-january-travel-with-enhanced-baggage-options' },
    ],
  },

  // ---------------------------------------------------------------- Thai Airways
  'thai-airways': {
    intro:
      'Thai Airways, a Star Alliance member, flies from Islamabad, Karachi and Lahore to Bangkok Suvarnabhumi, which makes it the easiest way from Pakistan to Thailand, with onward connections to Phuket, Tokyo, Sydney and more.',
    loyalty: 'Royal Orchid Plus',
    pkAirports: ['ISB', 'KHI', 'LHE'],
    routes: [
      { city: 'Bangkok', code: 'BKK', country: 'Thailand', direct: true },
      { city: 'Phuket', code: 'HKT', country: 'Thailand', direct: false },
      { city: 'Tokyo', code: 'NRT', country: 'Japan', direct: false },
      { city: 'Sydney', code: 'SYD', country: 'Australia', direct: false },
      { city: 'Hong Kong', code: 'HKG', country: 'Hong Kong', direct: false },
    ],
    cabinBag: 'Per ticket',
    fareFamilies: [
      { name: 'Economy Saver (W/L)', baggage: '23 kg', change: 'Most restricted', refund: 'Most restricted' },
      { name: 'Economy Standard (K/S/V)', baggage: '23 kg', change: 'Fee applies', refund: 'Fee applies' },
      { name: 'Economy Flexi (H/Q/T)', baggage: '30 kg', change: 'More flexible', refund: 'More flexible' },
      { name: 'Economy Full Flex (Y/B/M)', baggage: '30 kg', change: 'Most flexible', refund: 'Most flexible' },
    ],
    fareNote: 'Baggage for Saver and Standard was reduced from 25 kg to 23 kg from 1 April 2025, in line with Star Alliance standards.',
    refundPolicy: [
      'Refunds depend on the fare family; Saver is the most restricted and Full Flex the most flexible.',
      'Refund applications must be made within the ticket’s validity rules.',
    ],
    reissuePolicy: [
      'Changes should be made at least 24 hours before departure.',
      'Any fare difference applies on top of the change fee.',
    ],
    season: 'asia',
    sources: [
      { label: 'THAI: Baggage policy for Economy Class', url: 'https://www.thaiairways.com/en-th/content/news-and-announcements/thai-announces-baggage-policy-for-economy-class/' },
      { label: 'THAI Checked Baggage', url: 'https://www.thaiairways.com/en-th/content/baggage/checked-baggage/' },
    ],
  },

  // ---------------------------------------------------------------- British Airways
  'british-airways': {
    intro:
      'British Airways, a oneworld member, flies non-stop between Islamabad and London Gatwick, a key route for British Pakistanis, with onward connections across the UK, Europe and North America.',
    loyalty: 'The British Airways Club (Avios)',
    pkAirports: ['ISB'],
    routes: [
      { city: 'London Gatwick', code: 'LGW', country: 'United Kingdom', direct: true },
      { city: 'Manchester', code: 'MAN', country: 'United Kingdom', direct: false },
      { city: 'Glasgow', code: 'GLA', country: 'United Kingdom', direct: false },
      { city: 'New York', code: 'JFK', country: 'United States', direct: false },
      { city: 'Toronto', code: 'YYZ', country: 'Canada', direct: false },
    ],
    cabinBag: 'Hand baggage included on every fare',
    fareFamilies: [
      { name: 'Basic', baggage: 'Hand baggage only (seat at check-in)', change: 'Per fare rules (most restricted)', refund: 'Per fare rules (most restricted)' },
      { name: 'Standard', baggage: 'Checked bag included', change: 'Per fare rules', refund: 'Per fare rules' },
      { name: 'Select', baggage: 'Checked bag included', change: 'Free changes (fare difference applies)', refund: 'Full refund for a reasonable fee' },
      { name: 'Select Pro', baggage: 'Checked bag included', change: 'Free changes (fare difference applies)', refund: 'Full refund, zero refund fee' },
    ],
    fareNote: 'World Traveller is BA’s long-haul Economy cabin. Seat selection is free at booking on Select Pro.',
    refundPolicy: [
      'Select fares can be fully refunded for any reason for a fee; Select Pro has no refund fee.',
      'Refund claims and changes to prepaid baggage are not accepted after the flight has departed.',
    ],
    reissuePolicy: [
      'Select and Select Pro allow free changes; the fare difference still applies.',
      'Basic customers who later want a hold bag must buy it in advance in Manage My Booking.',
    ],
    season: 'europe',
    sources: [
      { label: 'British Airways Long-haul fares', url: 'https://www.britishairways.com/travel-partner-connect/our-products/fares/longhaul-fares' },
      { label: 'British Airways Changes & cancellations FAQs', url: 'https://www.britishairways.com/content/information/help/faqs/changes-cancellations' },
    ],
  },

  // ---------------------------------------------------------------- SalamAir
  salamair: {
    intro:
      'SalamAir is Oman’s low-cost airline, flying from Islamabad, Karachi, Lahore, Peshawar, Multan and Sialkot to Muscat, with cheap connections to the GCC, East Africa and Central Asia.',
    pkAirports: ['ISB', 'KHI', 'LHE', 'PEW', 'MUX', 'SKT'],
    routes: [
      { city: 'Muscat', code: 'MCT', country: 'Oman', direct: true },
      { city: 'Salalah', code: 'SLL', country: 'Oman', direct: false },
      { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', direct: false },
      { city: 'Jeddah', code: 'JED', country: 'Saudi Arabia', direct: false },
      { city: 'Bangkok', code: 'BKK', country: 'Thailand', direct: false },
    ],
    cabinBag: 'Hand baggage on every fare; 10 kg trolley on Saver and above',
    fareFamilies: [
      { name: 'Lite', baggage: 'Hand baggage only', change: 'Most restricted', refund: 'Most restricted' },
      { name: 'Saver bundle', baggage: '10 kg carry-on trolley, seat selection, priority check-in', change: 'Rebooking for a fee', refund: 'Per bundle rules' },
      { name: 'Value bundle', baggage: 'Checked baggage + seat selection', change: 'Rebooking for a fee', refund: 'Cancellation fee applies' },
      { name: 'Flexi bundle', baggage: 'Higher checked allowance, meals, seat', change: 'Flexible date changes', refund: 'Most flexible' },
    ],
    refundPolicy: [
      'Refunds and cancellation fees depend on the bundle; the Lite fare is the most restricted.',
      'We confirm the exact cancellation charge on your quote before you pay.',
    ],
    reissuePolicy: [
      'The Flexi bundle offers the most flexibility for date changes.',
      'Any fare difference applies on top of rebooking fees.',
    ],
    season: 'gulf',
    sources: [{ label: 'SalamAir Flight Fares & Bundles', url: 'https://www.salamair.com/en/plan/fares-bundles' }],
  },
};

export function getAirlineDetail(slug: string): AirlineDetail | undefined {
  return airlineDetails[slug];
}
