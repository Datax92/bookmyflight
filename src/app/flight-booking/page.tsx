import type { Metadata } from 'next';
import { LandingPage, type LandingData } from '@/components/sections/LandingPage';

export const metadata: Metadata = {
  title: 'Flight Booking in Pakistan: International & Domestic Air Tickets | BookMyFlight',
  description:
    'Book international and domestic air tickets in Pakistan with human support: fare comparison, verified baggage, holds, e-tickets, reissues and refunds by O.S Travel & Tours.',
  alternates: { canonical: '/flight-booking' },
};

const data: LandingData = {
  hero: {
    title: 'Flight booking',
    subtitle: 'Human-guided air ticketing with clear fare rules, verified baggage and WhatsApp support from search to landing.',
    search: true,
    breadcrumb: 'Flight booking',
  },
  blocks: [
    {
      type: 'steps',
      title: 'How flight booking works',
      intro: 'No chatbots and no surprise charges after you confirm: a travel consultant handles your booking end to end.',
      items: [
        { title: 'Send your journey details', body: 'Departure city, destination, dates, passengers (adults, children, infants) and cabin preference.' },
        { title: 'Receive options and fare rules', body: 'We check live airline availability and send the best timings, routes and baggage allowances.' },
        { title: 'Confirm and receive your e-ticket', body: 'After payment to O.S Travel & Tours you receive a verifiable airline PNR and e-ticket.' },
      ],
    },
    {
      type: 'cards',
      title: 'Airlines we book most',
      intro: 'We issue tickets on all major airlines serving Pakistan. Open an airline to see its fare types, refund and reissue rules.',
      cols: 3,
      items: [
        { title: 'Emirates', body: 'One-stop via Dubai to Europe, the Americas, Africa and Australia; 20–35 kg Economy by fare type.', href: '/airlines/emirates', cta: 'Emirates rules' },
        { title: 'Qatar Airways', body: 'Via Doha to the UK, Europe and North America; Economy Comfort has free date changes and a fee-free refund.', href: '/airlines/qatar-airways', cta: 'Qatar Airways rules' },
        { title: 'Turkish Airlines', body: 'Non-stop to Istanbul from Islamabad, Lahore and Karachi with connections across Europe.', href: '/airlines/turkish-airlines', cta: 'Turkish rules' },
        { title: 'Saudia', body: 'Jeddah and Riyadh for Umrah and work travel, with Guest Saver to Guest Flex fares.', href: '/airlines/saudia', cta: 'Saudia rules' },
        { title: 'PIA', body: 'Domestic network plus the Gulf, Saudi Arabia, UK, Europe, Canada, China and Malaysia.', href: '/airlines/pia-pakistan-international-airlines', cta: 'PIA rules' },
        { title: 'Airblue, AirSial & Fly Jinnah', body: 'Pakistani private airlines on domestic, Gulf and Saudi routes.', href: '/airlines', cta: 'Compare airlines' },
      ],
    },
    {
      type: 'bullets',
      title: 'What’s included in our service',
      panel: true,
      items: [
        'Fare comparison across airlines, dates and fare types',
        'Baggage, change and refund rules explained before you pay',
        'Seat holds while you finalise visas or family plans',
        'Seat selection, meals, extra baggage and wheelchair requests',
        'Reissues, refunds and schedule-change handling after ticketing',
        'Group fares for 10+ travellers',
      ],
    },
    {
      type: 'links',
      title: 'Related',
      items: [
        { label: 'Air ticketing', href: '/ticketing' },
        { label: 'Cheap flights tips', href: '/cheap-flights' },
        { label: 'International flights', href: '/international-flights' },
        { label: 'Domestic flights', href: '/domestic-flights' },
        { label: 'Islamabad office', href: '/flight-booking-islamabad' },
      ],
    },
  ],
  faqTitle: 'Flight booking FAQs',
  faqs: [
    { question: 'How do I book a flight through BookMyFlight?', answer: 'Use the search form or message +92 333 5542877 on WhatsApp. A consultant compares airlines and coordinates your ticketing.' },
    { question: 'Are payments secure?', answer: 'Payments, receipts and confirmations are handled by O.S Travel & Tours, an established agency in Blue Area, Islamabad. Tickets are issued only after payment, and we never ask for card details on WhatsApp.' },
    { question: 'Can you help with date changes and cancellations?', answer: 'Yes. We handle change requests, reissues and refund claims directly with the airline according to your fare rules.' },
    { question: 'Do you offer group bookings?', answer: 'Yes. For 10 or more passengers we request group fares, which often have flexible name submission and deposit-based payment.' },
    { question: 'Can I hold a booking before paying?', answer: 'Usually yes, for a limited time set by the airline. The fare is only guaranteed once the ticket is issued.' },
    { question: 'Will I get an official airline ticket?', answer: 'Yes. You receive an airline e-ticket with a PNR and 13-digit ticket number that you can verify on the airline’s website.' },
    { question: 'Can I choose my seat?', answer: 'Yes, where the airline allows it. Some fares include free seat selection, while others charge a fee.' },
    { question: 'Do you book business class?', answer: 'Yes. We quote Premium Economy, Business and First on airlines that offer them from Pakistan.' },
    { question: 'Do I need to visit your office?', answer: 'No. Everything can be done remotely, but you are welcome to visit our Blue Area office Monday to Saturday.' },
    { question: 'Can you book tickets for travellers abroad?', answer: 'Yes. We book tickets for overseas Pakistanis and their families, including trips that start outside Pakistan.' },
  ],
};

export default function FlightBookingPage() {
  return <LandingPage data={data} />;
}
