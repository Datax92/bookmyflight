import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'Domestic Flights in Pakistan: PIA, Airblue, AirSial & Fly Jinnah | BookMyFlight',
  description:
    'Book domestic flights across Pakistan: Islamabad, Karachi, Lahore, Peshawar, Quetta, Multan, Skardu and Gilgit on PIA, Airblue, AirSial and Fly Jinnah. Compare fares and baggage.',
  alternates: { canonical: '/domestic-flights' },
};

const data: LandingData = {
  hero: {
    title: 'Domestic flights in Pakistan',
    subtitle: 'Fly between Pakistan’s cities and the northern mountains. We compare PIA, Airblue, AirSial and Fly Jinnah for the best time and fare.',
    search: { from: 'ISB', to: 'KHI', trip: 'oneway' },
    breadcrumb: 'Domestic flights',
  },
  blocks: [
    {
      type: 'routes',
      title: 'Popular domestic routes',
      pairs: [
        ['ISB', 'KHI'], ['KHI', 'ISB'], ['LHE', 'KHI'], ['KHI', 'LHE'], ['ISB', 'KDU'], ['ISB', 'GIL'],
        ['KHI', 'PEW'], ['KHI', 'UET'], ['ISB', 'UET'], ['KHI', 'MUX'], ['KHI', 'SKT'], ['KHI', 'LYP'],
      ],
    },
    {
      type: 'cards',
      title: 'Domestic airlines',
      intro: 'The four Pakistani airlines currently operating scheduled domestic flights. SereneAir flights have been suspended since October 2025.',
      cols: 4,
      items: [
        { title: 'PIA', meta: 'National carrier', body: 'The widest domestic network, including Skardu, Gilgit, Chitral and Turbat. ATR flights include 20 kg checked baggage.', href: '/airlines/pia-pakistan-international-airlines', cta: 'PIA fare rules' },
        { title: 'Airblue', meta: 'Private airline', body: 'Frequent Islamabad–Karachi–Lahore flights plus Peshawar and Quetta. Value fares exclude checked bags; Flexi 20 kg, Xtra 30 kg.', href: '/airlines/airblue', cta: 'Airblue fare rules' },
        { title: 'AirSial', meta: 'Sialkot-based', body: 'Karachi, Islamabad, Lahore, Peshawar, Quetta and Sialkot with 20 kg checked baggage on Economy.', href: '/airlines/airsial', cta: 'AirSial fare rules' },
        { title: 'Fly Jinnah', meta: 'Low-cost', body: 'Karachi to Islamabad, Lahore, Faisalabad, Multan, Peshawar, Sialkot and Quetta with Basic, Value and Ultimate fares.', href: '/airlines/fly-jinnah', cta: 'Fly Jinnah fare rules' },
      ],
    },
    {
      type: 'bullets',
      title: 'Domestic travel rules',
      panel: true,
      items: [
        'Carry your original CNIC or passport; children need a B-Form or passport.',
        'Arrive 1.5 to 2 hours before departure; Airblue closes domestic check-in 45 minutes before the flight.',
        'Cabin baggage is usually one piece of 7 kg.',
        'Flights to Skardu and Gilgit depend on mountain weather and can be delayed or cancelled at short notice.',
        'Power banks must be carried in cabin baggage, never checked in.',
      ],
    },
    {
      type: 'cta',
      title: 'Book a domestic ticket',
      body: 'Send your route and date on WhatsApp and we’ll compare all domestic airlines for you.',
      whatsapp: 'Hello BookMyFlight, I need a domestic flight in Pakistan.',
    },
  ],
  faqTitle: 'Domestic flights FAQs',
  faqs: [
    { question: 'Which airlines fly domestic routes in Pakistan?', answer: 'PIA, Airblue, AirSial and Fly Jinnah operate scheduled domestic flights. SereneAir’s flights remain suspended since October 2025.' },
    { question: 'What ID do I need for a domestic flight?', answer: 'Adults need an original CNIC or passport. Children and infants need a B-Form (Child Registration Certificate) or passport.' },
    { question: 'How early should I arrive for a domestic flight?', answer: 'At least 1.5 to 2 hours before departure. Check-in counters typically close 45 minutes before take-off.' },
    { question: 'How much baggage is allowed on domestic flights?', answer: 'It depends on the airline and fare: PIA ATR flights 20 kg, AirSial Economy 20 kg, Airblue Flexi 20 kg and Xtra 30 kg (Value has none), and Fly Jinnah Value and Ultimate include checked baggage.' },
    { question: 'Which airline flies to Skardu and Gilgit?', answer: 'PIA flies to Gilgit from Islamabad and to Skardu from Islamabad, Lahore and Karachi; Airblue also flies to Skardu from Lahore.' },
    { question: 'Why are Skardu and Gilgit flights often delayed?', answer: 'They operate through mountainous terrain under visual weather conditions, so flights can be rescheduled on the same day if visibility is poor.' },
    { question: 'What is the flight time from Islamabad to Karachi?', answer: 'About 1 hour 45 minutes to 2 hours non-stop.' },
    { question: 'Can I change a domestic ticket?', answer: 'Yes, subject to fare rules. Fly Jinnah, for example, charges at least PKR 4,500 on Basic and includes one free change on Value (up to 12 hours before departure).' },
    { question: 'Are domestic tickets refundable?', answer: 'Refundable fares return the amount minus the airline’s fee. Fly Jinnah Basic can only be cancelled into credit, while Value can be refunded in cash for PKR 12,000.' },
    { question: 'Can I connect a domestic flight to an international flight?', answer: 'Yes. We can plan a domestic leg to Islamabad, Lahore or Karachi before your international flight, ideally with enough connection time or on one ticket.' },
  ],
};

export default function DomesticFlightsPage() {
  return <LandingPage data={data} />;
}
