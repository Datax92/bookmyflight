import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'Search Flights from Pakistan: Islamabad, Lahore, Karachi & More | BookMyFlight',
  description:
    'Search return, one-way and multi-city flights from Islamabad, Lahore, Karachi, Peshawar, Multan and Sialkot. Compare airlines, baggage and fare rules, then book with O.S Travel & Tours.',
  alternates: { canonical: '/flights' },
};

const data: LandingData = {
  hero: {
    title: 'Flights from Pakistan',
    subtitle: 'Search any route, compare airlines and fare rules, and get a live quote from our ticketing team.',
    search: true,
    breadcrumb: 'Flights',
  },
  blocks: [
    {
      type: 'routes',
      title: 'Popular flight routes',
      intro: 'The most requested routes from Pakistani airports. Choose one to request today’s fare.',
      pairs: [
        ['ISB', 'DXB'], ['LHE', 'LHR'], ['ISB', 'JED'], ['KHI', 'IST'], ['ISB', 'BKK'], ['LHE', 'JED'],
        ['KHI', 'DXB'], ['ISB', 'MAN'], ['PEW', 'RUH'], ['MUX', 'SHJ'], ['SKT', 'DMM'], ['ISB', 'YYZ'],
      ],
    },
    {
      type: 'steps',
      title: 'How flight booking works',
      items: [
        { title: 'Search your trip', body: 'Choose return, one-way or multi-city, your airports, dates, travellers and cabin.' },
        { title: 'Get options on WhatsApp', body: 'Our team compares airlines and sends the best fares with baggage and change rules.' },
        { title: 'Confirm and pay', body: 'We hold your seat, confirm names against passports and issue your e-ticket after payment.' },
      ],
    },
    {
      type: 'table',
      title: 'Choosing a cabin class',
      intro: 'What to expect in each cabin on long-haul flights from Pakistan. Exact benefits depend on the airline and fare type.',
      columns: ['Cabin', 'Typical checked baggage', 'Seat', 'Good for'],
      rows: [
        ['Economy', '20–35 kg, or 1–2 × 23 kg to the Americas', 'Standard seat', 'Most trips, families, Umrah'],
        ['Premium Economy', 'Usually 2 × 23 kg or 35 kg', 'Wider seat, more legroom', 'Long-haul comfort at a lower price than Business'],
        ['Business', 'Usually 40 kg or 2 × 32 kg', 'Lie-flat bed on most long-haul aircraft', 'Overnight flights, business travel'],
        ['First', 'Usually 50 kg or 2–3 × 32 kg', 'Private suite on some airlines', 'Luxury travel on Emirates and a few others'],
      ],
      note: 'Allowances vary by airline and fare type. See each airline page for exact baggage.',
    },
    {
      type: 'links',
      title: 'Related',
      items: [
        { label: 'Cheap flights tips', href: '/cheap-flights' },
        { label: 'International flights', href: '/international-flights' },
        { label: 'Domestic flights', href: '/domestic-flights' },
        { label: 'All airlines', href: '/airlines' },
        { label: 'Explore everywhere', href: '/explore' },
      ],
    },
  ],
  faqTitle: 'Flight search FAQs',
  faqs: [
    { question: 'Can I book a flight directly on BookMyFlight?', answer: 'You search here and send your trip to our ticketing team, who quote live fares and issue the e-ticket after you confirm and pay. This lets us explain fare rules and handle changes for you.' },
    { question: 'Which Pakistani airports can I fly from?', answer: 'You can search from every Pakistani airport with scheduled flights, including Islamabad, Lahore, Karachi, Peshawar, Multan, Sialkot, Faisalabad, Quetta, Gwadar, Skardu and Gilgit.' },
    { question: 'Can I search one-way and multi-city flights?', answer: 'Yes. Use the trip-type chip above the search form to choose Return, One way or Multi-city, and add up to six flights on a multi-city trip.' },
    { question: 'How do I add children and infants?', answer: 'Open “Travellers and cabin class” and add children (aged 2 to 11) and infants (under 2, on lap). Each infant must travel with an adult.' },
    { question: 'Can I choose direct flights only?', answer: 'Yes. Tick “Direct flights” under the search form and we will quote non-stop options where available.' },
    { question: 'What does “Add nearby airports” do?', answer: 'It tells our team to compare nearby airports too, for example Islamabad and Lahore, or Dubai and Sharjah, which can be cheaper.' },
    { question: 'Can I add a hotel to my flight?', answer: 'Yes. “Add a place to stay” is ticked by default; we include hotel options with your flight quote. Untick it if you only need flights.' },
    { question: 'How long will a quote take?', answer: 'We aim to reply during office hours, Monday to Saturday, 9:00 AM to 6:00 PM. Complex multi-city or group requests can take longer.' },
    { question: 'Are fares guaranteed once quoted?', answer: 'Fares are only guaranteed once the ticket is issued. Until then, airlines can change prices or availability.' },
    { question: 'Can I book for someone else?', answer: 'Yes. Share the traveller’s passport details and contact number so the airline can reach them about schedule changes.' },
  ],
};

export default function FlightsPage() {
  return <LandingPage data={data} />;
}
