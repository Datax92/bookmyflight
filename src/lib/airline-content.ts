// ============================================================
// Per-airline FAQs and tips, generated from verified data
// ============================================================
import type { Faq } from '@/components/sections/FaqSection';
import { findAirport } from './airports';
import type { AirlineBase } from './airlines';
import { seasonProfiles, type AirlineDetail } from './airline-details';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** 'a' or 'an' before an airline name (PIA -> a PIA, Emirates -> an Emirates) */
export function article(name: string) {
  return /^[aeiou]/i.test(name) ? 'an' : 'a';
}

export function listJoin(items: string[]) {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

export function cityNames(codes: string[]) {
  return codes.map((c) => findAirport(c)?.city ?? c);
}

export function seasonSummary(d: AirlineDetail) {
  const levels = seasonProfiles[d.season].levels;
  const pick = (lv: string) => levels.map((l, i) => (l === lv ? MONTH_NAMES[i] : null)).filter(Boolean) as string[];
  return { cheap: pick('low'), expensive: pick('high'), average: pick('mid') };
}

const hasSaudi = (d: AirlineDetail) => d.routes.some((r) => ['JED', 'MED'].includes(r.code));

export function airlineFaqs(a: AirlineBase, d: AirlineDetail): Faq[] {
  const { cheap, expensive } = seasonSummary(d);
  const direct = d.routes.filter((r) => r.direct && r.country !== 'Pakistan');
  const cheapestFare = d.fareFamilies[0];
  const flexFare = d.fareFamilies[d.fareFamilies.length - 1];

  const faqs: Faq[] = [
    {
      question: `Which Pakistani airports does ${a.name} fly from?`,
      answer: `${a.name} flies from ${listJoin(cityNames(d.pkAirports))}.${
        direct.length
          ? ` Non-stop destinations from Pakistan include ${listJoin(
              direct.map((r) => (r.from ? `${r.city} (from ${listJoin(cityNames(r.from))})` : r.city)),
            )}.`
          : ''
      } Schedules change seasonally, so we confirm the exact flight days when we quote your fare.`,
    },
    {
      question: `When are ${a.name} flights from Pakistan usually cheapest?`,
      answer: `Based on typical demand from Pakistan, ${listJoin(cheap)} are usually the cheapest months to fly ${a.name}. Mid-week departures (Tuesday and Wednesday) and booking 4 to 8 weeks ahead also help. These are seasonal patterns, not live prices; send us your dates for a real-time quote.`,
    },
    {
      question: `When are ${a.name} fares most expensive?`,
      answer: `Fares are usually highest in ${listJoin(expensive)}, around Eid ul-Fitr, Eid ul-Adha, the summer school holidays and year-end travel. Islamic holidays move about 11 days earlier every year, so book early if your trip falls near Eid.`,
    },
    {
      question: `What is the ${a.name} checked baggage allowance?`,
      answer: `It depends on the fare you buy: ${d.fareFamilies
        .map((f) => `${f.name}: ${f.baggage}`)
        .join('; ')}. Your exact allowance is printed on your e-ticket.`,
    },
    {
      question: `How much cabin baggage can I take on ${a.name}?`,
      answer: `${a.name} cabin baggage: ${d.cabinBag}. Keep liquids in containers of 100 ml or less in a clear bag, and keep power banks in your cabin bag, never in checked luggage.`,
    },
    {
      question: `Can I get a refund on ${article(a.name)} ${a.name} ticket?`,
      answer: `${d.refundPolicy.slice(0, 2).join(' ')} On the cheapest ${cheapestFare.name} fare the rule is: ${cheapestFare.refund}. On ${flexFare.name}: ${flexFare.refund}.`,
    },
    {
      question: `How much does it cost to change the date of ${article(a.name)} ${a.name} ticket?`,
      answer: `${d.reissuePolicy[0]} ${cheapestFare.name}: ${cheapestFare.change}; ${flexFare.name}: ${flexFare.change}. We handle the reissue for you and confirm the total before anything is charged.`,
    },
    {
      question: `Which ${a.name} fare type should I book?`,
      answer: `Choose ${cheapestFare.name} if your plans are fixed and you travel light. Pick ${flexFare.name} if your dates may change or you need a refund option; it usually costs more but saves on change and cancellation fees. For Umrah and family trips, check that checked baggage is included.`,
    },
    {
      question: `What happens if I miss my ${a.name} flight?`,
      answer: `If you don’t show up for a flight, the airline may cancel the rest of your itinerary, including the return flight, and charge a no-show fee where the fare allows changes. Tell us before departure if you can’t travel; changing or cancelling in time is almost always cheaper than a no-show.`,
    },
    {
      question: `What is ${a.name}’s hub and alliance?`,
      answer: `${a.name}’s main hub is ${a.hub}.${
        a.alliance && a.alliance !== 'None'
          ? ` It is a member of ${a.alliance}, so you can earn and use miles with partner airlines.`
          : ' It is not part of a global airline alliance.'
      }${d.loyalty ? ` Its frequent flyer programme is ${d.loyalty}.` : ''}`,
    },
    {
      question: `How do I book ${article(a.name)} ${a.name} ticket with BookMyFlight?`,
      answer: `Search your route and dates above, or message us on WhatsApp with your travel details. Our O.S Travel & Tours ticketing team checks live ${a.name} availability, explains the fare rules and baggage, holds the seat and issues your e-ticket once payment is confirmed.`,
    },
    {
      question: `How early should I reach the airport for ${article(a.name)} ${a.name} flight from Pakistan?`,
      answer: `For international flights from Islamabad, Lahore or Karachi, arrive at least 3 hours before departure; immigration and security queues can be long. Online check-in usually opens 24 to 48 hours before the flight. Carry your original passport, visa and a printed or mobile e-ticket.`,
    },
  ];

  if (hasSaudi(d)) {
    faqs.push({
      question: `Can I book ${a.name} for Umrah?`,
      answer: `Yes. ${a.name} serves ${listJoin(d.routes.filter((r) => ['JED', 'MED'].includes(r.code)).map((r) => r.city))}, the gateways for Makkah and Madinah. We can book ${a.name} flights on their own or as part of an Umrah package with visa, hotels and transport. Ramadan and school holidays sell out early.`,
    });
  }

  if (d.loyalty) {
    faqs.push({
      question: `Can I earn miles on ${a.name} tickets booked through a travel agent?`,
      answer: `Yes. Add your ${d.loyalty} membership number to the booking and miles are credited after you fly, according to the fare type booked. Some promotional or lowest fares earn fewer or no miles.`,
    });
  }

  return faqs;
}

export function airlineTips(a: AirlineBase, d: AirlineDetail) {
  const { cheap } = seasonSummary(d);
  const tips = [
    {
      title: `Fly in ${cheap[0] ?? 'the low season'}`,
      body: `Demand from Pakistan is usually lowest in ${listJoin(cheap)}, so ${a.name} fares tend to be cheapest then. Avoid the weeks around Eid and the June–August holidays if you can.`,
    },
    {
      title: 'Pick the right fare type',
      body: `The cheapest ${d.fareFamilies[0].name} fare isn’t always the best value. Once you add bags and possible change fees, ${d.fareFamilies[Math.min(1, d.fareFamilies.length - 1)].name} can work out cheaper.`,
    },
    {
      title: 'Be flexible by a few days',
      body: 'Moving your departure by a day or two, especially to a Tuesday or Wednesday, often unlocks a lower fare bucket. Tell us your flexible window and we’ll compare nearby dates.',
    },
    {
      title: 'Compare nearby airports',
      body: `${a.name} flies from ${listJoin(cityNames(d.pkAirports.slice(0, 5)))}. Fares from one city can be noticeably cheaper than from another, so it can pay to travel a little further to the airport.`,
    },
    {
      title: 'Pre-book extra baggage',
      body: 'Extra baggage bought before you fly is much cheaper than paying at the airport counter. Tell us your bag needs when you book and we’ll add them in advance.',
    },
    d.loyalty
      ? {
          title: `Join ${d.loyalty}`,
          body: `${d.loyalty} membership is free. Earn miles on every ${a.name} flight and use them for upgrades, extra baggage or reward tickets.`,
        }
      : {
          title: 'Book early for Eid and summer',
          body: `${a.name} seats around Eid and the summer holidays sell out early. Booking 6 to 8 weeks ahead secures better fares and seats together for families.`,
        },
  ];
  return tips;
}
