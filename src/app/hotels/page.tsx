import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'Hotel Reservations Worldwide: Makkah, Madinah, Dubai, Istanbul & More | BookMyFlight',
  description:
    'Hotel bookings for travellers from Pakistan: Haram-facing hotels in Makkah and Madinah, Dubai, Istanbul, London, Kuala Lumpur and Bangkok. Hand-picked options on WhatsApp.',
  alternates: { canonical: '/hotels' },
};

const hotel = (city: string, category: string, body: string, image?: string) => ({
  title: city,
  meta: category,
  body,
  image,
  whatsapp: `Hello BookMyFlight, I am looking for hotel options in ${city}. Please share properties and rates.`,
  cta: 'Get hotel rates',
});

const data: LandingData = {
  hero: {
    title: 'Hotels',
    subtitle: 'Hand-picked hotels worldwide, from Haram-facing rooms in Makkah to city stays in Dubai and Istanbul.',
    breadcrumb: 'Hotels',
  },
  blocks: [
    {
      type: 'cards',
      title: 'Popular hotel destinations',
      cols: 3,
      items: [
        hotel('Makkah & Madinah', 'Near the Haram', 'Clock Tower and Jabal Omar hotels, plus central (Markazia) hotels within walking distance in Madinah.', '/images/destinations/makkah.jpg'),
        hotel('Dubai', 'City, beach & business', 'Downtown and Burj Khalifa views, Palm Jumeirah resorts and budget stays near the Metro.', '/images/destinations/dubai.jpg'),
        hotel('Istanbul', 'Bosphorus & old city', 'Sultanahmet boutique hotels, Taksim city stays and Bosphorus waterfront hotels.', '/images/destinations/istanbul.jpg'),
        hotel('London', 'Central & family-friendly', 'Hotels near Tube stations in central London and serviced apartments for families.', '/images/destinations/london.jpg'),
        hotel('Kuala Lumpur', 'Halal-friendly city stays', 'Bukit Bintang and KLCC hotels close to shopping, food and the Petronas Towers.', '/images/destinations/kuala-lumpur.jpg'),
        hotel('Bangkok', 'Shopping & river views', 'Sukhumvit and riverside hotels with easy access to markets and the Skytrain.', '/images/destinations/bangkok.jpg'),
      ],
    },
    {
      type: 'steps',
      title: 'How hotel booking works',
      items: [
        { title: 'Share your stay details', body: 'City, check-in and check-out dates, guests and preferences such as breakfast or walking distance.' },
        { title: 'Review hand-picked options', body: 'We send suitable hotels with location, room type and cancellation terms on WhatsApp.' },
        { title: 'Confirm and get your voucher', body: 'We confirm the booking and send your hotel confirmation voucher.' },
      ],
    },
    {
      type: 'cta',
      title: 'Need a hotel with your flight?',
      body: 'Tick “Add a place to stay” in the flight search, or send your hotel request directly on WhatsApp.',
      whatsapp: 'Hello BookMyFlight, I need a hotel booking. City and dates:',
      button: 'Request hotel options',
    },
  ],
  faqTitle: 'Hotel booking FAQs',
  faqs: [
    { question: 'Can you book hotels worldwide?', answer: 'Yes. We book hotels in most cities worldwide, with a focus on the destinations travellers from Pakistan visit most.' },
    { question: 'Can I get a hotel close to the Haram?', answer: 'Yes. We offer Haram-facing hotels in the Clock Tower and Jabal Omar areas as well as more affordable options with shuttles.' },
    { question: 'Are hotel bookings refundable?', answer: 'It depends on the rate. Flexible rates can be cancelled free before a deadline, while non-refundable rates are cheaper but cannot be cancelled.' },
    { question: 'Can I use a hotel booking for my visa application?', answer: 'Yes. We can provide hotel confirmations that meet embassy requirements for visa files.' },
    { question: 'Do you book family rooms?', answer: 'Yes. Triple, quad and connecting rooms are available at many hotels, especially in Makkah, Madinah and Dubai.' },
    { question: 'Is breakfast included?', answer: 'Some rates include breakfast and others are room-only. We show this clearly in each option.' },
    { question: 'Can I pay at the hotel?', answer: 'Some rates allow payment at the hotel; others are prepaid. We confirm the payment terms for each option.' },
    { question: 'Do you arrange airport transfers?', answer: 'Yes, in many destinations, including Jeddah, Madinah, Dubai and Istanbul.' },
    { question: 'How quickly will I get hotel options?', answer: 'Usually during the same office day for standard requests.' },
    { question: 'Can you combine hotel and flights in one quote?', answer: 'Yes. Combining flights and hotels makes it easier to match dates and compare the total trip cost.' },
  ],
};

export default function HotelsPage() {
  return <LandingPage data={data} />;
}
