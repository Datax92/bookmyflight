import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'International Airports in Pakistan: Where You Can Fly From | BookMyFlight',
  description:
    'Guide to Pakistan’s international departure airports: Islamabad (ISB), Lahore (LHE), Karachi (KHI), Peshawar, Multan, Sialkot and Faisalabad, with airlines and non-stop destinations.',
  alternates: { canonical: '/international-flights-pakistan' },
};

const data: LandingData = {
  hero: {
    title: 'International flights from Pakistan',
    subtitle: 'Where you can fly from each Pakistani airport, and which airlines fly there.',
    search: true,
    breadcrumb: 'International flights from Pakistan',
  },
  blocks: [
    {
      type: 'table',
      title: 'International airports in Pakistan',
      intro: 'Major departure airports and a selection of their non-stop international destinations.',
      columns: ['Airport', 'Non-stop destinations include', 'Airlines include'],
      rows: [
        ['Islamabad (ISB)', 'Dubai, Doha, Abu Dhabi, Jeddah, Madinah, Riyadh, Istanbul, Baku, Bangkok, Kuala Lumpur, London, Manchester, Paris, Toronto', 'PIA, Emirates, Qatar Airways, Etihad, Saudia, Turkish, British Airways, Thai, Gulf Air, flydubai'],
        ['Lahore (LHE)', 'Dubai, Doha, Abu Dhabi, Jeddah, Riyadh, Dammam, Istanbul, Baku, Bangkok, Kuala Lumpur, London, Manchester', 'PIA, Emirates, Qatar Airways, Etihad, Turkish, Thai, Airblue, AirSial, Fly Jinnah'],
        ['Karachi (KHI)', 'Dubai, Doha, Abu Dhabi, Sharjah, Muscat, Jeddah, Madinah, Riyadh, Istanbul, Bangkok, Colombo, Toronto', 'PIA, Emirates, Qatar Airways, Etihad, Saudia, Oman Air, Turkish, Thai, flynas, flyadeal'],
        ['Peshawar (PEW)', 'Dubai, Sharjah, Abu Dhabi, Doha, Jeddah, Riyadh, Muscat', 'PIA, Emirates, flydubai, Qatar Airways, Etihad, Saudia, Air Arabia, flyadeal, SalamAir'],
        ['Multan (MUX)', 'Dubai, Sharjah, Abu Dhabi, Doha, Jeddah, Madinah, Muscat', 'PIA, flydubai, Qatar Airways, Air Arabia, Airblue, AirSial, Saudia, SalamAir'],
        ['Sialkot (SKT)', 'Dubai, Sharjah, Abu Dhabi, Doha, Jeddah, Riyadh, Dammam, Muscat, Kuwait', 'PIA, Emirates, flydubai, Qatar Airways, Air Arabia, AirSial, flyadeal, SalamAir'],
      ],
      note: 'Based on current airport schedules; routes change seasonally. We confirm availability for your dates.',
    },
    {
      type: 'cards',
      title: 'Tips for flying abroad from Pakistan',
      cols: 3,
      items: [
        { title: 'Compare departure cities', body: 'Fares from Lahore, Sialkot or Peshawar can be cheaper than Islamabad on some Gulf routes, and vice versa.' },
        { title: 'Check who flies non-stop', body: 'Secondary airports have fewer airlines; a short domestic hop to a major airport can open more options.' },
        { title: 'Keep documents together', body: 'Passport, visa, return ticket, hotel booking and Protector (for workers) are checked before departure.' },
      ],
    },
    {
      type: 'links',
      title: 'Related',
      items: [
        { label: 'Explore everywhere', href: '/explore' },
        { label: 'Airlines', href: '/airlines' },
        { label: 'International flights', href: '/international-flights' },
        { label: 'Islamabad office', href: '/flight-booking-islamabad' },
      ],
    },
  ],
  faqTitle: 'International departures FAQs',
  faqs: [
    { question: 'Which Pakistani airport has the most international flights?', answer: 'Islamabad, Lahore and Karachi have the widest choice of airlines and non-stop destinations.' },
    { question: 'Can I fly abroad from Multan, Sialkot or Peshawar?', answer: 'Yes. These airports have non-stop flights to the Gulf and Saudi Arabia, and one-stop connections worldwide.' },
    { question: 'Does Faisalabad have international flights?', answer: 'Faisalabad (LYP) has limited services; Fly Jinnah flies to Karachi, where you can connect to international flights. Check current options with us.' },
    { question: 'Which airport is best for flights to the UK?', answer: 'Islamabad and Lahore have non-stop PIA flights to London and Manchester, and Islamabad has British Airways to Gatwick.' },
    { question: 'Which airport is best for Umrah flights?', answer: 'Islamabad, Lahore, Karachi, Multan and Peshawar all have non-stop flights to Jeddah; Madinah is served non-stop from several cities by PIA and from Karachi by flynas.' },
    { question: 'Is it cheaper to fly from Lahore than Islamabad?', answer: 'Sometimes. It depends on the route and date, so we compare both when you tick “Add nearby airports”.' },
    { question: 'Can I start my journey from a different city than I return to?', answer: 'Yes. Open-jaw tickets such as Karachi → Dubai → Lahore are possible on many airlines.' },
    { question: 'Where do I complete immigration?', answer: 'FIA immigration is completed at your international departure airport after check-in and before security.' },
    { question: 'Are there direct flights from Pakistan to the USA?', answer: 'No non-stop flights currently operate; travellers connect via the Gulf, Istanbul or Europe.' },
    { question: 'Can overseas Pakistanis book flights into smaller airports?', answer: 'Yes. Flying into Sialkot, Multan, Peshawar or Faisalabad via the Gulf can bring you closer to home.' },
  ],
};

export default function InternationalFlightsPakistanPage() {
  return <LandingPage data={data} />;
}
