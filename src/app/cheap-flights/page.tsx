import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'Cheap Flights from Pakistan: 8 Ways to Pay Less for Air Tickets | BookMyFlight',
  description:
    'How to find cheap flights from Islamabad, Lahore and Karachi: best months and days to fly, direct vs connecting, baggage traps and nearby airports. Get a fare quote on WhatsApp.',
  alternates: { canonical: '/cheap-flights' },
};

const data: LandingData = {
  hero: {
    title: 'Cheap flights from Pakistan',
    subtitle: 'Smart ways to pay less for domestic and international air tickets, plus a live fare check from our team.',
    search: true,
    breadcrumb: 'Cheap flights',
  },
  blocks: [
    {
      type: 'cards',
      title: '8 ways to find cheaper fares',
      intro: 'Airlines price seats dynamically: fares rise as cheaper fare classes sell out. These habits consistently save money for travellers from Pakistan.',
      items: [
        { title: 'Be flexible by a few days', body: 'Tuesday and Wednesday departures are usually cheaper than Friday to Sunday. A shift of 2–3 days can drop you into a lower fare class.' },
        { title: 'Avoid Eid and school holidays', body: 'Fares peak around Eid ul-Fitr, Eid ul-Adha, June–August and late December. Islamic holidays move about 11 days earlier each year.' },
        { title: 'Book 4–8 weeks ahead', body: 'For international trips, cheaper fare buckets open weeks in advance and sell out as departure approaches. Last-minute deals are rare on long-haul routes.' },
        { title: 'Compare one-stop routes', body: 'Connections through Dubai, Doha, Abu Dhabi, Istanbul, Bahrain or Muscat are often cheaper than non-stop flights to Europe and North America.' },
        { title: 'Check what the fare includes', body: 'Basic fares on many airlines include only hand baggage. Once a 20–30 kg bag is added, a full-service fare can cost the same.' },
        { title: 'Try nearby airports', body: 'Compare Islamabad with Lahore, Sialkot or Peshawar in the north, and Dubai with Sharjah or Abu Dhabi on arrival.' },
        { title: 'Pick the right fare type', body: 'If plans might change, a flexible fare can be cheaper than paying a change fee plus fare difference later.' },
        { title: 'Pre-book extra baggage', body: 'Extra kilos bought before the flight cost much less than excess baggage at the airport counter.' },
      ],
      cols: 4,
    },
    {
      type: 'table',
      title: 'Popular routes and airlines',
      intro: 'Airlines with scheduled flights on the busiest corridors from Pakistan. Ask us to compare them for your dates.',
      columns: ['Route', 'Airlines to compare', 'Cheapest months (typical)'],
      rows: [
        ['Pakistan → Dubai / Sharjah', 'Emirates, flydubai, Air Arabia, PIA, Airblue, AirSial, Fly Jinnah', 'Feb, Sep, Oct, Nov'],
        ['Pakistan → Jeddah / Madinah', 'Saudia, PIA, Airblue, AirSial, Fly Jinnah, flynas, flyadeal', 'Jul, Aug, Oct, Nov'],
        ['Pakistan → Riyadh / Dammam', 'Saudia, flynas, flyadeal, PIA, Airblue, AirSial, Fly Jinnah', 'Jul, Aug, Oct, Nov'],
        ['Pakistan → London / Manchester', 'PIA, British Airways, Emirates, Qatar Airways, Etihad, Turkish Airlines', 'Feb, Sep, Oct, Nov'],
        ['Pakistan → Istanbul', 'Turkish Airlines, PIA', 'Feb, Sep, Oct, Nov'],
        ['Pakistan → Bangkok / Kuala Lumpur', 'Thai Airways, PIA, Batik Air', 'Feb, Sep, Oct'],
      ],
      note: 'Seasonal patterns, not live prices. Airline pages show a 12-month fare chart for each carrier.',
    },
    {
      type: 'cta',
      title: 'Want us to find the cheapest fare?',
      body: 'Send your route and a date window on WhatsApp. We compare airlines, nearby dates and fare types, and tell you exactly what each fare includes.',
      whatsapp: 'Hello BookMyFlight, please find me the cheapest fare. My route and dates are:',
      button: 'Find my cheapest fare',
    },
    {
      type: 'links',
      title: 'Related guides',
      items: [
        { label: 'Cheapest months to fly', href: '/blog/cheapest-month-to-fly-from-pakistan' },
        { label: 'Low-cost airlines compared', href: '/blog/low-cost-airlines-from-pakistan-compared' },
        { label: 'Fare families explained', href: '/blog/fare-families-explained-basic-saver-flex' },
        { label: 'All airlines', href: '/airlines' },
      ],
    },
  ],
  faqTitle: 'Cheap flights FAQs',
  faqs: [
    { question: 'How does BookMyFlight help find cheaper flights?', answer: 'Our O.S Travel & Tours consultants search Amadeus and Sabre GDS inventory and airline-direct fares across airlines, dates and fare types, then explain what each fare includes so you compare the real total.' },
    { question: 'Can you guarantee the lowest price?', answer: 'No agency can guarantee the lowest price every time because airline prices change by the minute. We do guarantee honest advice, verified baggage and fare rules, and no surprise charges after you confirm.' },
    { question: 'Which day of the week is cheapest to fly from Pakistan?', answer: 'Tuesday and Wednesday departures are usually cheaper than weekend flights, when demand is highest.' },
    { question: 'What is the cheapest month to fly from Pakistan?', answer: 'For the Gulf and Europe, September to November and February; for Saudi Arabia, July, August, October and November.' },
    { question: 'Are low-cost airlines always cheaper?', answer: 'Not always. Their basic fares exclude checked bags and have strict change rules. With a bag added, full-service airlines can cost about the same.' },
    { question: 'Is it cheaper to book a return or two one-way tickets?', answer: 'On full-service airlines a return is usually cheaper; on low-cost airlines one-ways are priced separately, so two one-ways can be similar.' },
    { question: 'Do fares go down closer to departure?', answer: 'Rarely on international routes from Pakistan. Prices usually rise as seats fill, especially in peak seasons.' },
    { question: 'Are domestic flights in Pakistan cheaper when booked early?', answer: 'Yes, especially around Eid and the summer season to Skardu and Gilgit. PIA, Airblue, AirSial and Fly Jinnah release their cheapest seats first.' },
    { question: 'Can students get cheaper fares?', answer: 'Some airlines, such as Emirates, publish student fares with extra baggage on certain routes. Ask us whether a student fare is available for your trip.' },
    { question: 'How do I request a quote?', answer: 'Use the search form above or send your origin, destination, dates, passengers and cabin to +92 333 5542877 on WhatsApp.' },
  ],
};

export default function CheapFlightsPage() {
  return <LandingPage data={data} />;
}
