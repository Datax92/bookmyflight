import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';
import { destinations } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Destination Guides: Dubai, Jeddah, London, Istanbul & More from Pakistan | BookMyFlight',
  description:
    'Travel guides for the most popular destinations from Pakistan: flight times, airlines, best season, visa type, highlights and tips for Dubai, Makkah, Jeddah, Riyadh, Doha, Istanbul, London, Paris, Baku, Bangkok and Kuala Lumpur.',
  alternates: { canonical: '/destinations' },
};

const data: LandingData = {
  hero: {
    title: 'Destination guides',
    subtitle: 'Flight times, airlines, visas and travel tips for the places travellers from Pakistan visit most.',
    breadcrumb: 'Destinations',
  },
  blocks: [
    {
      type: 'cards',
      title: 'Popular destinations',
      cols: 3,
      items: destinations.map((d) => ({
        title: d.name,
        meta: `${d.country} · ${d.travelType}`,
        body: d.description,
        image: d.image,
        href: `/destinations/${d.id}`,
        cta: `${d.name} guide`,
      })),
    },
    {
      type: 'links',
      title: 'More ways to explore',
      items: [
        { label: 'Explore everywhere', href: '/explore' },
        { label: 'Holiday packages', href: '/holidays' },
        { label: 'Umrah packages', href: '/umrah' },
        { label: 'Visa assistance', href: '/visa' },
      ],
    },
  ],
  faqTitle: 'Destination FAQs',
  faqs: [
    { question: 'Which destination is most popular from Pakistan?', answer: 'Dubai and Saudi Arabia (Jeddah, Madinah and Riyadh) are the busiest routes, followed by Doha, the UK, Istanbul and Malaysia.' },
    { question: 'Which destinations have non-stop flights from Pakistan?', answer: 'Dubai, Abu Dhabi, Doha, Jeddah, Madinah, Riyadh, Istanbul, Baku, Bangkok, Kuala Lumpur, London, Manchester, Paris and Toronto, among others, depending on your city.' },
    { question: 'What is the best season to travel?', answer: 'The Gulf and Saudi Arabia are best from November to March, Europe from May to September, and South-East Asia from November to February.' },
    { question: 'Do I need a visa for these destinations?', answer: 'Yes, Pakistani passport holders need a visa or e-visa for all of these destinations. Our visa team can guide you.' },
    { question: 'Can you plan a full trip, not just flights?', answer: 'Yes. We combine flights, hotels, visas, transfers and tours into one plan.' },
    { question: 'Which destination is best for a first trip abroad?', answer: 'Dubai, Baku and Kuala Lumpur are popular first trips thanks to short flights, easier visas and family-friendly attractions.' },
    { question: 'How far ahead should I book?', answer: '4 to 8 weeks for most international trips, and earlier for Eid, summer holidays or visa-dependent travel.' },
    { question: 'Are the guides kept up to date?', answer: 'We review guides regularly, but visa and airline rules change often, so we confirm the latest requirements when you book.' },
    { question: 'Can I get a price for a destination?', answer: 'Yes. Open a guide and use the search form, or send your dates on WhatsApp.' },
    { question: 'Which destination is best for Umrah?', answer: 'Fly into Jeddah or Madinah. See our Umrah page and Jeddah and Makkah guides.' },
  ],
};

export default function DestinationsPage() {
  return <LandingPage data={data} />;
}
