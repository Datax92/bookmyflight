import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'Umrah Packages from Pakistan: Visa, Flights, Makkah & Madinah Hotels | BookMyFlight',
  description:
    'Umrah packages from Islamabad, Lahore and Karachi with Umrah visa, return flights to Jeddah or Madinah, hotels near the Haram, transport and Ziyarat. Family, executive and group Umrah.',
  alternates: { canonical: '/umrah' },
};

const data: LandingData = {
  hero: {
    title: 'Umrah packages',
    subtitle: 'Umrah visa, flights, hotels in Makkah and Madinah, and transport, arranged by O.S Travel & Tours.',
    search: { to: 'JED' },
    breadcrumb: 'Umrah',
  },
  blocks: [
    {
      type: 'cards',
      title: 'Umrah package options',
      intro: 'Every package is customised to your dates, hotel preference, airline and room sharing.',
      cols: 3,
      items: [
        {
          title: 'Executive Umrah',
          badge: 'Premium',
          bullets: ['5-star hotels close to the Haram (Clock Tower / Jabal Omar area)', 'Private vehicle transfers', 'Umrah visa and flights', 'Guided Ziyarat in Makkah and Madinah', '7, 10 or 14-night itineraries'],
          whatsapp: 'Hello BookMyFlight, I am interested in an Executive Umrah package. Please share dates and options.',
          cta: 'Ask about Executive',
        },
        {
          title: 'Family Umrah',
          badge: 'Family favourite',
          bullets: ['4-star hotels within walking distance', 'Double, triple or quad family rooms', 'Airport and inter-city transfers', 'Umrah visa and flights', 'Ziyarat tour'],
          whatsapp: 'Hello BookMyFlight, I am interested in a Family Umrah package. Please share itinerary and pricing.',
          cta: 'Ask about Family',
        },
        {
          title: 'Group & custom Umrah',
          badge: 'Flexible',
          bullets: ['Your own duration and budget', 'Group or private transport', 'Visa issuance and group air tickets', 'Ideal for organisations and extended families', 'Dedicated consultant'],
          whatsapp: 'Hello BookMyFlight, I would like a custom / group Umrah package.',
          cta: 'Ask about Group',
        },
      ],
    },
    {
      type: 'bullets',
      title: 'What every package can include',
      panel: true,
      items: [
        'Umrah visa processing and documentation',
        'Return flights to Jeddah or Madinah',
        'Hotels in Makkah near the Haram',
        'Hotels in Madinah in the central (Markazia) area',
        'Airport and Makkah–Madinah transfers by road or Haramain train',
        'Ziyarat in Makkah and Madinah',
        'Travel insurance',
        'Support from O.S Travel & Tours before and during travel',
      ],
    },
    {
      type: 'table',
      title: 'Airlines for Umrah from Pakistan',
      columns: ['Airline', 'Umrah gateways', 'Fare note'],
      rows: [
        ['Saudia', 'Jeddah, Riyadh (Madinah via connection)', 'Guest Saver cannot be changed or refunded; Guest Flex changes are free'],
        ['PIA', 'Jeddah, Madinah', 'Umrah fares are round-trip only; half-used Umrah tickets are not refundable'],
        ['Airblue', 'Jeddah', 'Value fares include no checked bag; Flexi 20 kg, Xtra 30 kg'],
        ['AirSial', 'Jeddah', '20 kg checked baggage on Economy'],
        ['Fly Jinnah', 'Jeddah', 'Basic excludes checked bags; Value and Ultimate include them'],
        ['flynas', 'Jeddah, Madinah (from Karachi)', 'Light has no checked bag; Value 30 kg; Plus 2 × 20 kg'],
      ],
      note: 'Rules from each airline’s official website; see the airline pages for full details.',
    },
    {
      type: 'links',
      title: 'Umrah guides',
      items: [
        { label: 'Umrah planning guide', href: '/blog/umrah-travel-planning-guide-pakistan' },
        { label: 'Jeddah or Madinah?', href: '/blog/umrah-flights-jeddah-or-madinah' },
        { label: 'Jeddah guide', href: '/destinations/jeddah' },
        { label: 'Makkah guide', href: '/destinations/makkah' },
      ],
    },
  ],
  faqTitle: 'Umrah FAQs',
  faqs: [
    { question: 'What is included in an Umrah package?', answer: 'Usually the Umrah visa, return flights, hotels in Makkah and Madinah, transport and Ziyarat. Every item can be adjusted to your needs.' },
    { question: 'How long does an Umrah visa take?', answer: 'Umrah e-visas are usually issued within a few working days once documents are complete, but allow extra time in Ramadan and peak seasons.' },
    { question: 'When is the cheapest time for Umrah?', answer: 'Outside Ramadan, Eid and school holidays; July, August, October and November are usually better value.' },
    { question: 'Should I fly into Jeddah or Madinah?', answer: 'Jeddah has the most flights and is closest to Makkah. Madinah lets you visit Masjid an-Nabawi first. Many families fly into one and out of the other.' },
    { question: 'Can I choose my hotel?', answer: 'Yes. We offer options from budget hotels with shuttles to 5-star hotels facing the Haram.' },
    { question: 'Do women need a mahram for Umrah?', answer: 'Saudi Arabia currently allows women to perform Umrah without a mahram under its visa rules, but families should check the latest requirements and airline rules for minors. Ask us for current guidance.' },
    { question: 'Can I travel between Makkah and Madinah by train?', answer: 'Yes. The Haramain High-Speed Railway connects Makkah, Jeddah and Madinah. We can book tickets or arrange road transfers.' },
    { question: 'Do you offer group Umrah?', answer: 'Yes. We arrange group Umrah for families, mosques and organisations with group air fares and shared transport.' },
    { question: 'How much baggage do I need for Umrah?', answer: 'Most pilgrims choose 20–30 kg checked baggage for clothes, Zamzam water and gifts. Budget fares may exclude checked bags.' },
    { question: 'Can overseas Pakistanis book Umrah with you?', answer: 'Yes. We can book packages starting from Pakistan or arrange land packages for travellers flying from abroad.' },
  ],
};

export default function UmrahPage() {
  return <LandingPage data={data} />;
}
