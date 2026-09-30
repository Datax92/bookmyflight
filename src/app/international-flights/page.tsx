import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'International Flights from Pakistan: Routes, Airlines & Travel Rules | BookMyFlight',
  description:
    'International flights from Islamabad, Lahore and Karachi to the Gulf, Saudi Arabia, UK, Europe, Asia and North America. Airlines by region, documents and airport rules.',
  alternates: { canonical: '/international-flights' },
};

const data: LandingData = {
  hero: {
    title: 'International flights',
    subtitle: 'Fly from Pakistan to the world with verified baggage, transit rules and fare conditions explained.',
    search: true,
    breadcrumb: 'International flights',
  },
  blocks: [
    {
      type: 'cards',
      title: 'Flights by region',
      intro: 'Key corridors from Pakistan and the airlines that fly them.',
      cols: 4,
      items: [
        { title: 'Gulf & Middle East', meta: 'Dubai, Abu Dhabi, Sharjah, Doha, Muscat, Bahrain', body: 'The busiest routes from Pakistan with many daily non-stop flights. Emirates, flydubai, Qatar Airways, Etihad, Air Arabia, Oman Air, Gulf Air, SalamAir, PIA, Airblue, AirSial and Fly Jinnah.', href: '/explore' },
        { title: 'Saudi Arabia', meta: 'Jeddah, Madinah, Riyadh, Dammam', body: 'Umrah, Hajj-season and work travel on Saudia, flynas, flyadeal, PIA, Airblue, AirSial and Fly Jinnah.', href: '/umrah' },
        { title: 'UK & Europe', meta: 'London, Manchester, Paris, Istanbul', body: 'Non-stop PIA and British Airways flights plus one-stop options on Gulf carriers and Turkish Airlines.', href: '/destinations/london' },
        { title: 'Asia & North America', meta: 'Bangkok, Kuala Lumpur, Beijing, Toronto, New York', body: 'Thai Airways to Bangkok, PIA to Toronto and Kuala Lumpur, and connections via the Gulf and Istanbul.', href: '/explore' },
      ],
    },
    {
      type: 'bullets',
      title: 'Before you fly abroad',
      panel: true,
      items: [
        'Passport valid for at least 6 months, with blank visa pages.',
        'Visa or e-visa for your destination, and for any transit country that requires one.',
        'Protector stamp if travelling on an employment visa.',
        'Arrive at the airport 3 to 4 hours before international departures.',
        'Check the baggage allowance on your e-ticket; basic fares may exclude checked bags.',
        'Keep power banks and valuables in cabin baggage.',
      ],
    },
    {
      type: 'table',
      title: 'Cabin class guide',
      columns: ['Cabin', 'Typical checked baggage', 'What you get'],
      rows: [
        ['Economy', '20–35 kg, or 1–2 × 23 kg to the Americas', 'Meals on full-service airlines, standard seat, seat-back entertainment on most long-haul aircraft'],
        ['Premium Economy', 'Often 2 × 23 kg or 35 kg', 'Wider seat with more recline and legroom, upgraded meals'],
        ['Business', 'Often 40 kg or 2 × 32 kg', 'Lie-flat seat on most long-haul aircraft, lounge access, priority services'],
        ['First', 'Often 50 kg or 2–3 × 32 kg', 'Private suite on some airlines, premium lounges and dining'],
      ],
      note: 'Allowances differ by airline and fare type; your e-ticket shows the exact allowance.',
    },
    {
      type: 'links',
      title: 'Related',
      items: [
        { label: 'Airlines from Pakistan', href: '/airlines' },
        { label: 'Visa assistance', href: '/visa' },
        { label: 'Hotels', href: '/hotels' },
        { label: 'Cheap flights tips', href: '/cheap-flights' },
        { label: 'All destinations', href: '/destinations' },
      ],
    },
  ],
  faqTitle: 'International flights FAQs',
  faqs: [
    { question: 'How early should I arrive for an international flight from Pakistan?', answer: 'Arrive at Islamabad, Lahore or Karachi airport 3 to 4 hours before departure to complete check-in, FIA immigration and security.' },
    { question: 'What passport validity do I need?', answer: 'Most countries require at least 6 months of validity beyond your travel dates and blank visa pages.' },
    { question: 'Do I need a transit visa for a connection in Dubai, Doha or Istanbul?', answer: 'Usually not if you stay airside on one ticket and don’t collect your bags, but rules depend on your passport, airport and layover length. We confirm transit rules before ticketing.' },
    { question: 'Which airlines fly non-stop from Pakistan to the UK?', answer: 'PIA (Islamabad and Lahore to London Heathrow and Manchester) and British Airways (Islamabad to London Gatwick).' },
    { question: 'Which airline flies non-stop to Canada?', answer: 'PIA flies non-stop to Toronto from Islamabad and Karachi.' },
    { question: 'Is baggage checked through on connecting flights?', answer: 'On a single ticket, bags are normally checked to your final destination. On separate tickets you must collect and re-check them, which may need a transit visa.' },
    { question: 'Can I book a stopover in Dubai, Doha or Istanbul?', answer: 'Yes. Many airlines allow stopovers on the way; we can price a ticket with a stopover of a few days.' },
    { question: 'How much baggage can I take to the USA or Canada?', answer: 'Most airlines use the piece concept on these routes, typically 1 or 2 bags of up to 23 kg in Economy depending on the fare.' },
    { question: 'Can I carry food items from Pakistan?', answer: 'Dry, packaged foods are usually allowed, but many countries restrict meat, dairy and fresh produce. Always declare food at customs.' },
    { question: 'Do you help with travel insurance?', answer: 'Yes. O.S Travel & Tours arranges travel insurance, including Schengen-compliant cover.' },
  ],
};

export default function InternationalFlightsPage() {
  return <LandingPage data={data} />;
}
