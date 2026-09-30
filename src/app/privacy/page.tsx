import type { Metadata } from 'next';
import { LegalPage } from '@/components/sections/LegalPage';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy | BookMyFlight',
  description: 'How BookMyFlight and O.S Travel & Tours collect, use and protect your personal information when you search, enquire and book travel.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  const { contact, address } = siteConfig;
  return (
    <LegalPage
      title="Privacy policy"
      updated="29 September 2026"
      intro="BookMyFlight, operated with O.S Travel & Tours, respects your privacy. This policy explains what information we collect when you use this website or contact us, how we use it and the choices you have."
      sections={[
        {
          heading: 'Information we collect',
          bullets: [
            'Trip details you enter in the search or inquiry forms: airports, dates, travellers, cabin and preferences.',
            'Contact details you give us: name, phone or WhatsApp number and email address.',
            'Passenger details needed to book: names as in passports, dates of birth, passport or CNIC numbers, and visa information.',
            'Messages you send us on WhatsApp, by phone or by email.',
            'Basic technical data such as browser type and pages visited, if website analytics are enabled.',
          ],
        },
        {
          heading: 'How our forms work',
          paragraphs: [
            'Our search and inquiry forms do not store your details on this website. When you press send, your message opens in WhatsApp so that you can review it and send it to our official number yourself.',
          ],
        },
        {
          heading: 'How we use your information',
          bullets: [
            'To prepare fare quotes and travel options you ask for.',
            'To make reservations and issue tickets, hotel vouchers, visas and insurance.',
            'To contact you about your booking, including schedule changes by airlines.',
            'To process changes, refunds and after-sales requests.',
            'To meet legal, tax and regulatory obligations in Pakistan.',
          ],
        },
        {
          heading: 'Who we share information with',
          paragraphs: [
            'We share passenger information only as needed to deliver your booking: with airlines and their reservation systems (such as Amadeus and Sabre), hotels, insurers, embassies and visa processing centres, and payment providers. We do not sell your personal information.',
          ],
        },
        {
          heading: 'Payments',
          paragraphs: [
            'We never ask for card details on WhatsApp. Payment options are confirmed by your consultant before any ticket is issued.',
          ],
        },
        {
          heading: 'How long we keep information',
          paragraphs: [
            'We keep booking records for as long as needed to provide the service, handle refunds and changes, and meet accounting and legal requirements, after which they are deleted or anonymised.',
          ],
        },
        {
          heading: 'Your choices',
          bullets: [
            'Ask us for a copy of the personal information we hold about you.',
            'Ask us to correct inaccurate details.',
            'Ask us to delete information we no longer need, subject to legal requirements.',
            'Ask us to stop sending you travel offers at any time.',
          ],
        },
        {
          heading: 'External links',
          paragraphs: [
            'This website links to other sites, including airline websites and ostravels.com. Their own privacy policies apply when you visit them.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            `For privacy questions, email ${contact.email}, call ${contact.phone[0]} or write to O.S Travel & Tours, ${address.street}, ${address.area}, ${address.city}.`,
          ],
        },
      ]}
    />
  );
}
