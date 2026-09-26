export interface CampaignOffer {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  whatsappMessage: string;
  ctaText: string;
  image: string;
  serviceCategory: string;
}

export const campaignOffers: CampaignOffer[] = [
  {
    slug: 'cheap-flights',
    badge: 'Special Fare Assistance',
    title: 'Find the Best Available Flight Fares',
    subtitle: 'Transparent Airfare Comparison with Verified Baggage',
    description:
      'Looking for competitive flight rates from Pakistan? Skip automated aggregator markups and talk directly with our IATA-accredited ticketing consultants for honest fare advice and flexible date options.',
    benefits: [
      'Multi-airline fare comparison across GDS reservation systems',
      'Verified checked and cabin baggage allowances with no hidden fees',
      'Assistance with seat preferences, meal requests, and transit rules',
      'Dedicated travel consultant support on WhatsApp for quick changes',
    ],
    whatsappMessage: 'Hello BookMyFlight, I saw your flight offer and would like to request the best available fare for my route.',
    ctaText: 'Get Best Fare on WhatsApp',
    image: '/images/hero/hero-aviation.jpg',
    serviceCategory: 'Flights',
  },
  {
    slug: 'umrah',
    badge: 'Spiritual Pilgrimage Inquiry',
    title: 'Tailored Umrah Packages for Pakistani Families',
    subtitle: 'Close Markazia Hotels & Complete Visa Processing',
    description:
      'Plan your spiritual pilgrimage with confidence. With decades of dedicated service through O.S Travel & Tours, we customize Umrah travel dates, markazia hotel proximity to the Haram, and private ground transportation.',
    benefits: [
      'Approved Saudi electronic Umrah visa processing',
      'Return international flights from Islamabad, Lahore, or Karachi',
      'Handpicked hotels in Makkah and Madinah with flexible room sharing',
      'Optional private GMC and high-speed train transfers',
    ],
    whatsappMessage: 'Hello BookMyFlight, I would like to consult with an Umrah specialist about tailored package options for my family.',
    ctaText: 'Discuss Umrah on WhatsApp',
    image: '/images/destinations/makkah.jpg',
    serviceCategory: 'Umrah',
  },
  {
    slug: 'dubai-flights',
    badge: 'Dubai Travel Package',
    title: 'Fly to Dubai — Flights, Visa & Hotel Packages',
    subtitle: 'Direct Flights from Islamabad, Lahore & Karachi',
    description:
      'Planning a getaway to Dubai? Let our travel team coordinate non-stop flights via Emirates, Flydubai, or PIA, combined with fast 30-day or 60-day UAE tourist e-visas.',
    benefits: [
      'Daily direct departures from all major Pakistani airports',
      'Fast 30-day and 60-day UAE tourist visa processing',
      'Curated hotel options near Metro stations and Dubai Mall',
      'Optional Desert Safari and city tour activity vouchers',
    ],
    whatsappMessage: 'Hello BookMyFlight, I am interested in Dubai flight fares and visa assistance. Please share available packages.',
    ctaText: 'Inquire for Dubai on WhatsApp',
    image: '/images/destinations/dubai.jpg',
    serviceCategory: 'Destinations',
  },
];
