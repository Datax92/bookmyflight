import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';
import { campaignOffers } from '@/lib/offers-data';

export const metadata: Metadata = {
  title: 'Travel Offers: Flight Fares, Umrah & Dubai Packages | BookMyFlight',
  description:
    'Current travel offers from BookMyFlight and O.S Travel & Tours: best-fare flight assistance, tailored Umrah packages and Dubai flight, visa and hotel packages.',
  alternates: { canonical: '/offers' },
};

const data: LandingData = {
  hero: {
    title: 'Travel offers',
    subtitle: 'Seasonal packages and fare assistance for the most popular trips from Pakistan.',
    breadcrumb: 'Offers',
  },
  blocks: [
    {
      type: 'cards',
      title: 'Current offers',
      cols: 3,
      items: campaignOffers.map((o) => ({
        title: o.title,
        badge: o.badge,
        body: o.subtitle,
        image: o.image,
        href: `/offers/${o.slug}`,
        cta: 'View offer',
      })),
    },
    {
      type: 'cta',
      title: 'Looking for something else?',
      body: 'Tell us your trip and budget, and we’ll suggest the best-value option.',
      whatsapp: 'Hello BookMyFlight, I am looking for a travel offer.',
    },
  ],
  faqTitle: 'Offers FAQs',
  faqs: [
    { question: 'Are these fixed-price deals?', answer: 'No. Airline and hotel prices change daily, so each offer is a tailored quote based on current availability for your dates.' },
    { question: 'How do I claim an offer?', answer: 'Open the offer and press the WhatsApp button; the message tells our team which offer you are interested in.' },
    { question: 'Are there hidden fees?', answer: 'No. Your quote shows the total price before you confirm.' },
    { question: 'Can I combine flights, hotels and visas?', answer: 'Yes. Packages can include any combination of flights, hotels, visas, transfers and insurance.' },
    { question: 'How long is an offer valid?', answer: 'Quotes are valid until the airline or hotel changes its price or availability, so confirm quickly once you are happy.' },
    { question: 'Do offers apply to groups?', answer: 'Yes. Groups of 10 or more can get group fares, which may offer better prices and payment terms.' },
    { question: 'Can overseas Pakistanis use these offers?', answer: 'Yes. We can quote trips starting from Pakistan or from abroad.' },
    { question: 'Do you offer student fares?', answer: 'Some airlines publish student fares with extra baggage. Ask us whether one is available for your route.' },
    { question: 'Can I change the dates after booking?', answer: 'Changes follow the airline and hotel rules for the fare you choose. We explain them before you book.' },
    { question: 'Where can I see airline rules?', answer: 'Each airline page lists fare types, baggage and refund and reissue rules from the airline’s official website.' },
  ],
};

export default function OffersPage() {
  return <LandingPage data={data} />;
}
