import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';
import { destinations } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Holiday Packages from Pakistan: Dubai, Baku, Istanbul, Malaysia & More | BookMyFlight',
  description:
    'Holiday packages from Pakistan with flights, hotels, visas and tours: Dubai, Istanbul, Baku, Kuala Lumpur, Bangkok, London, Paris and Doha. Custom family and honeymoon trips.',
  alternates: { canonical: '/holidays' },
};

const data: LandingData = {
  hero: {
    title: 'Holiday packages',
    subtitle: 'Flights, hotels, visas and tours in one plan, designed around your dates and budget.',
    breadcrumb: 'Holidays',
  },
  blocks: [
    {
      type: 'cards',
      title: 'Popular holidays',
      cols: 3,
      items: destinations
        .filter((d) => d.id !== 'makkah' && d.id !== 'jeddah' && d.id !== 'riyadh')
        .map((d) => ({
          title: d.name,
          meta: `${d.country} · ${d.travelType}`,
          body: d.tagline,
          image: d.image,
          href: `/destinations/${d.id}`,
          cta: 'Destination guide',
        })),
    },
    {
      type: 'steps',
      title: 'How we plan your holiday',
      items: [
        { title: 'Tell us your idea', body: 'Destination (or ask us to suggest one), dates, travellers, budget and interests.' },
        { title: 'Get a custom plan', body: 'Flights, hotels, visa and optional tours and transfers in one quote.' },
        { title: 'Travel with support', body: 'Vouchers, tickets and visa in hand, with our team a WhatsApp message away.' },
      ],
    },
    {
      type: 'cta',
      title: 'Don’t see your destination?',
      body: 'We plan holidays to most destinations worldwide, including honeymoons, family trips and group tours.',
      whatsapp: 'Hello BookMyFlight, I would like to plan a holiday. Destination and dates:',
      button: 'Plan my holiday',
    },
  ],
  faqTitle: 'Holiday package FAQs',
  faqs: [
    { question: 'What is included in a holiday package?', answer: 'Typically return flights, hotels and visa assistance, with optional transfers, tours and travel insurance.' },
    { question: 'Which holidays are easiest for Pakistani passport holders?', answer: 'Destinations with e-visas or simpler visa processes such as Azerbaijan, Malaysia, Sri Lanka, the Maldives and Türkiye (with eligible visas) are popular.' },
    { question: 'Can I customise a package?', answer: 'Yes. Every holiday is built around your dates, budget, hotel style and activities.' },
    { question: 'Do you plan honeymoons?', answer: 'Yes. Popular honeymoons include the Maldives, Baku, Istanbul with Cappadocia, Bali and Malaysia.' },
    { question: 'Do you arrange family holidays?', answer: 'Yes, with family rooms, halal-friendly food options and child-friendly activities.' },
    { question: 'How early should I book a holiday?', answer: '6 to 10 weeks ahead is ideal, and earlier if a visa is needed or you travel in peak season.' },
    { question: 'Can you arrange group tours?', answer: 'Yes, for families, friends, schools and companies, with group fares and shared transport.' },
    { question: 'Is travel insurance included?', answer: 'It can be added, and it is mandatory for Schengen trips.' },
    { question: 'Can I pay in instalments?', answer: 'Payment terms depend on the airline and hotel conditions; ask your consultant about deposit options for your package.' },
    { question: 'What if my visa is refused?', answer: 'We recommend refundable or reservation-only bookings until the visa is approved, to limit your costs.' },
  ],
};

export default function HolidaysPage() {
  return <LandingPage data={data} />;
}
