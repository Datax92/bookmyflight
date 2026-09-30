import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Flight Booking in Islamabad: Travel Agency in Blue Area | BookMyFlight',
  description:
    'Air ticketing in Islamabad and Rawalpindi: visit O.S Travel & Tours in Aaly Plaza, Blue Area, or WhatsApp +92 333 5542877. International, domestic and Umrah flights from Islamabad Airport (ISB).',
  alternates: { canonical: '/flight-booking-islamabad' },
};

const { address, contact, hours } = siteConfig;

const data: LandingData = {
  hero: {
    title: 'Flight booking in Islamabad',
    subtitle: 'Trusted air ticketing in the heart of Blue Area for travellers from Islamabad and Rawalpindi.',
    search: { from: 'ISB' },
    breadcrumb: 'Flight booking Islamabad',
  },
  blocks: [
    {
      type: 'cards',
      title: 'Our Islamabad travel desk',
      cols: 3,
      items: [
        { title: 'Office address', body: `O.S Travel & Tours, ${address.street}, ${address.area}, ${address.city}.`, href: '/contact', cta: 'Map & directions' },
        { title: 'Phone & WhatsApp', body: `${contact.phone.join(' · ')} · WhatsApp ${contact.whatsappDisplay}`, whatsapp: 'Hello BookMyFlight Islamabad office, I need a flight quote.' },
        { title: 'Office hours', body: `${hours.days}, ${hours.weekdays}. Closed on Sundays.` },
      ],
    },
    {
      type: 'routes',
      title: 'Popular flights from Islamabad',
      intro: 'Non-stop and one-stop routes from Islamabad International Airport (ISB).',
      pairs: [
        ['ISB', 'DXB'], ['ISB', 'JED'], ['ISB', 'MED'], ['ISB', 'RUH'], ['ISB', 'DOH'], ['ISB', 'IST'],
        ['ISB', 'LHR'], ['ISB', 'LGW'], ['ISB', 'MAN'], ['ISB', 'YYZ'], ['ISB', 'KHI'], ['ISB', 'KDU'],
      ],
    },
    {
      type: 'bullets',
      title: 'Departing from Islamabad Airport (ISB)',
      panel: true,
      items: [
        'Islamabad International Airport is roughly 35–45 minutes from Blue Area, depending on traffic.',
        'International flights: arrive at least 3 to 4 hours before departure for bag drop, FIA immigration and security.',
        'Domestic flights: arrive 1.5 to 2 hours before departure.',
        'Non-stop destinations include Dubai, Abu Dhabi, Sharjah, Doha, Muscat, Bahrain, Jeddah, Madinah, Riyadh, Dammam, Istanbul, Baku, Tashkent, Bangkok, Kuala Lumpur, London, Manchester, Paris and Toronto.',
      ],
    },
    {
      type: 'cards',
      title: 'Services at our Islamabad desk',
      cols: 4,
      items: [
        { title: 'International tickets', body: 'Direct and connecting flights to the Gulf, UK, Europe, Asia and North America.', href: '/international-flights' },
        { title: 'Domestic tickets', body: 'Karachi, Lahore, Quetta, Skardu, Gilgit and more.', href: '/domestic-flights' },
        { title: 'Umrah packages', body: 'Face-to-face planning for family and group Umrah.', href: '/umrah' },
        { title: 'Visa assistance', body: 'Document checks and file processing for visit and Schengen visas.', href: '/visa' },
      ],
    },
  ],
  faqTitle: 'Islamabad flight booking FAQs',
  faqs: [
    { question: 'Where is your Islamabad office?', answer: `O.S Travel & Tours, ${address.street}, ${address.area}, ${address.city}.` },
    { question: 'Do you serve Rawalpindi customers?', answer: 'Yes. Many clients from Rawalpindi, Bahria Town, DHA and the twin-city area book with us by WhatsApp or visit the Blue Area office.' },
    { question: 'Can I pay at your office?', answer: 'Yes, you can visit during office hours to confirm and pay for your booking. Your consultant will confirm the available payment options.' },
    { question: 'Which airlines fly non-stop from Islamabad?', answer: 'Emirates, flydubai, Qatar Airways, Etihad, Saudia, flynas, flyadeal, Turkish Airlines, Gulf Air, Thai Airways, British Airways, SalamAir, Air Arabia (Ras Al Khaimah), PIA, Airblue, AirSial and Fly Jinnah, among others.' },
    { question: 'How long does it take to reach Islamabad airport from Blue Area?', answer: 'Around 35 to 45 minutes by car, depending on traffic and the route you take.' },
    { question: 'How early should I reach ISB for an international flight?', answer: 'At least 3 to 4 hours before departure to allow for check-in, immigration and security.' },
    { question: 'Can you book flights from Lahore or Karachi too?', answer: 'Yes. We book from every Pakistani airport, and sometimes Lahore or Sialkot is cheaper than Islamabad.' },
    { question: 'Do you book Islamabad to Skardu flights?', answer: 'Yes. PIA flies Islamabad–Skardu. Book early in summer, when demand is high and flights depend on the weather.' },
    { question: 'Can I get a same-day ticket?', answer: 'Often yes, if seats are available and payment is completed during office hours.' },
    { question: 'Do you arrange group departures from Islamabad?', answer: 'Yes. We arrange group fares for Umrah groups, schools, companies and families.' },
  ],
};

export default function FlightBookingIslamabadPage() {
  return <LandingPage data={data} />;
}
