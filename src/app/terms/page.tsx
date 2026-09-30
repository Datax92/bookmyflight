import type { Metadata } from 'next';
import { LegalPage } from '@/components/sections/LegalPage';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Service | BookMyFlight',
  description: 'Terms for using BookMyFlight and booking flights, hotels, Umrah and visas with O.S Travel & Tours.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  const { contact } = siteConfig;
  return (
    <LegalPage
      title="Terms of service"
      updated="29 September 2026"
      intro="By using BookMyFlight you agree to these terms. BookMyFlight is operated with O.S Travel & Tours, Islamabad, which arranges all bookings made through this website."
      sections={[
        {
          heading: 'Our service',
          paragraphs: [
            'BookMyFlight lets you search routes, read airline information and send travel requests. Quotes, reservations, ticketing, payments and confirmations are handled by O.S Travel & Tours. We act as a travel agent; flights are operated by the airlines and hotels by their owners.',
          ],
        },
        {
          heading: 'Information on this website',
          paragraphs: [
            'Airline fare types, baggage, refund and reissue rules on this website are summarised from each airline’s official website and dated. Seasonal “cheap” and “expensive” months are typical patterns, not live prices. Airlines may change their rules and prices at any time; the fare rules attached to your ticket always apply.',
          ],
        },
        {
          heading: 'Quotes and prices',
          bullets: [
            'Quotes are based on availability at the time and are not guaranteed until the ticket or booking is issued.',
            'Your quote shows the total price, including any service charge, before you confirm.',
            'Airlines and hotels can change prices or availability before issuance.',
          ],
        },
        {
          heading: 'Bookings and payment',
          bullets: [
            'Tickets and bookings are issued only after payment is received.',
            'You must check that passenger names match passports exactly before confirming.',
            'Held reservations expire at the time limit set by the airline.',
          ],
        },
        {
          heading: 'Changes, cancellations and refunds',
          paragraphs: [
            'Changes and refunds follow the airline’s or hotel’s rules for the fare you bought, including penalties, fare differences and non-refundable taxes. Some fares are refunded as airline credit rather than cash. Refunds are paid once received from the airline or supplier. Airline penalties are not set by us.',
          ],
        },
        {
          heading: 'Travel documents and visas',
          bullets: [
            'You are responsible for valid passports, visas, Protector stamps, health and entry requirements.',
            'Visa decisions are made solely by embassies and authorities; we cannot guarantee approval.',
            'Airlines may deny boarding if documents are missing or invalid.',
          ],
        },
        {
          heading: 'Schedule changes and disruptions',
          paragraphs: [
            'Airlines may change or cancel flights. We will inform you of the options the airline offers and help with rebooking or refunds, but we are not responsible for decisions made by airlines, hotels or authorities.',
          ],
        },
        {
          heading: 'Liability',
          paragraphs: [
            'Our responsibility is limited to arranging the services you book with due care. We are not liable for losses caused by airlines, hotels, other suppliers, weather, government actions or events outside our control.',
          ],
        },
        {
          heading: 'Trademarks',
          paragraphs: [
            'Airline names and codes are used only to identify the carriers we issue tickets for and do not imply endorsement.',
          ],
        },
        {
          heading: 'Governing law',
          paragraphs: ['These terms are governed by the laws of Pakistan, and disputes fall under the courts of Islamabad.'],
        },
        {
          heading: 'Contact',
          paragraphs: [`Questions about these terms: ${contact.email} or ${contact.phone[0]}.`],
        },
      ]}
    />
  );
}
