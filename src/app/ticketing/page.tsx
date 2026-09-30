import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  FileCheck2,
  Globe,
  Landmark,
  Luggage,
  PlaneTakeoff,
  RefreshCw,
  Route,
  Undo2,
  UserPen,
  Users,
  Accessibility,
} from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { WhatsAppIcon } from '@/components/ui/icons';
import { ticketingFaqs } from '@/lib/faqs';
import { siteConfig } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'Air Ticketing in Pakistan: Book International & Domestic Flight Tickets | BookMyFlight',
  description:
    'Air ticketing by O.S Travel & Tours, Islamabad: international, domestic, Umrah and group flight tickets on PIA, Emirates, Qatar Airways, Saudia and more. Ticket reissue, refund and date-change support.',
  alternates: { canonical: '/ticketing' },
};

const services = [
  { icon: Globe, title: 'International flights', body: 'Tickets to the Gulf, Saudi Arabia, the UK, Europe, North America and Asia on full-service and low-cost airlines.' },
  { icon: PlaneTakeoff, title: 'Domestic flights', body: 'PIA, Airblue, AirSial and Fly Jinnah between Islamabad, Karachi, Lahore, Peshawar, Quetta, Skardu, Gilgit and more.' },
  { icon: Landmark, title: 'Umrah tickets', body: 'Return tickets to Jeddah and Madinah, or complete Umrah packages with visa, hotels and transport.' },
  { icon: Users, title: 'Group tickets', body: 'Group fares for 10+ travellers: Umrah groups, weddings, sports teams, students and corporate travel.' },
  { icon: Route, title: 'One-way & multi-city', body: 'Open-jaw and multi-city itineraries such as Islamabad → London, Paris → Lahore on one ticket.' },
  { icon: Building2, title: 'Corporate travel', body: 'Fare holds, fast reissues and one point of contact for businesses that travel regularly from Islamabad and Rawalpindi.' },
];

const afterSales = [
  { icon: RefreshCw, title: 'Date change & reissue', body: 'We reissue your ticket for new dates and explain the fee and fare difference first.' },
  { icon: Undo2, title: 'Refunds', body: 'Refunds filed under your fare rules, with airline penalties explained before you cancel.' },
  { icon: UserPen, title: 'Name corrections', body: 'Minor spelling corrections requested with the airline where its rules allow.' },
  { icon: Luggage, title: 'Extra baggage & seats', body: 'Prepaid extra baggage, seat selection and special meals added to your booking.' },
  { icon: Accessibility, title: 'Special assistance', body: 'Wheelchair, medical and unaccompanied-minor requests coordinated with the airline.' },
  { icon: CalendarClock, title: 'Schedule changes', body: 'If the airline changes or cancels your flight, we arrange rebooking or refund options for you.' },
];

const steps = [
  ['Search or message us', 'Enter your route, dates and travellers above, or send your plan on WhatsApp.'],
  ['Compare options', 'We send the best fares across airlines with baggage, change and refund rules in plain language.'],
  ['Hold & confirm', 'We hold your chosen flight and confirm every passenger name against the passport.'],
  ['Pay & get your e-ticket', 'After payment we issue the official airline e-ticket with PNR and ticket number.'],
  ['Travel with support', 'Online check-in help, reissues, refunds and schedule changes handled by the same team.'],
];

export default function TicketingPage() {
  const whatsapp = getWhatsAppUrl('Hello BookMyFlight, I would like to book an air ticket.');
  return (
    <>
      <PageHero
        title="Air ticketing"
        subtitle="International, domestic, Umrah and group flight tickets issued by O.S Travel & Tours, Blue Area, Islamabad."
        search
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Ticketing' }]}
      />

      <div className={`bpk-container ${styles.body}`}>
        <ul className={styles.usps}>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <BadgeCheck size={20} aria-hidden />
            </span>
            IATA-accredited agent with Amadeus &amp; Sabre GDS ticketing
          </li>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <FileCheck2 size={20} aria-hidden />
            </span>
            Government-licensed (DTS) travel agency, {siteConfig.credentials.experienceYears} years in Islamabad
          </li>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <WhatsAppIcon size={20} />
            </span>
            Quotes, e-tickets and after-sales support on WhatsApp
          </li>
        </ul>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What we ticket</h2>
          <p className={styles.sectionIntro}>
            One ticketing desk for every kind of trip from Pakistan, on PIA, Emirates, Qatar Airways, Saudia, Turkish
            Airlines and more.{' '}
            <Link href="/airlines" className="bpk-link">
              See all airlines
            </Link>
          </p>
          <ul className={styles.grid3}>
            {services.map(({ icon: Icon, title, body }) => (
              <li key={title} className="bpk-card bpk-card--padded" style={{ padding: '1.5rem' }}>
                <Icon size={32} color="#0062e3" aria-hidden />
                <h3 className={styles.cardTitle} style={{ marginTop: '1rem' }}>
                  {title}
                </h3>
                <p className={styles.cardBody}>{body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How ticketing works</h2>
          <ol className={styles.grid3} style={{ listStyle: 'none', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))' }}>
            {steps.map(([t, b], i) => (
              <li key={t} className={styles.panel} style={{ padding: '1.5rem' }}>
                <span className={`${styles.badge} ${styles.badgeBlue}`}>Step {i + 1}</span>
                <h3 className="text-heading-4" style={{ marginTop: '0.75rem' }}>
                  {t}
                </h3>
                <p className="text-body" style={{ marginTop: '0.5rem' }}>
                  {b}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <div className={styles.split}>
            <div>
              <h2 className={styles.sectionTitle}>Documents you need</h2>
              <ul className={styles.bullets} style={{ marginTop: '1rem' }}>
                <li>Passport valid for at least 6 months from your travel date (international).</li>
                <li>Visa, e-visa or entry permit for your destination and any transit country that requires one.</li>
                <li>Protector stamp from the Bureau of Emigration for employment visas.</li>
                <li>CNIC for domestic flights; B-form or passport for children.</li>
                <li>Names exactly as printed in the passport: first name, surname and title.</li>
              </ul>
            </div>
            <div className={styles.panel}>
              <h2 className={styles.subTitle}>Fare types explained</h2>
              <p className="text-body" style={{ marginTop: '0.5rem' }}>
                Airlines sell the same seat at several fare types. Cheaper fares carry less baggage and stricter change
                and refund rules; flexible fares cost more but save on penalties if plans change.
              </p>
              <div className="bpk-table-wrap" style={{ marginTop: '1rem', background: '#fff' }}>
              <table className="bpk-table">
                <thead>
                  <tr>
                    <th scope="col">Fare</th>
                    <th scope="col">Baggage</th>
                    <th scope="col">Changes</th>
                    <th scope="col">Refund</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Basic / Lite</th>
                    <td>Often cabin bag only</td>
                    <td>Not allowed or high fee</td>
                    <td>Usually not refundable</td>
                  </tr>
                  <tr>
                    <th scope="row">Standard / Saver</th>
                    <td>20–30 kg</td>
                    <td>Fee + fare difference</td>
                    <td>Fee applies</td>
                  </tr>
                  <tr>
                    <th scope="row">Flex</th>
                    <td>30–40 kg</td>
                    <td>Free or low fee</td>
                    <td>Free or low fee</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>After-sales support</h2>
          <p className={styles.sectionIntro}>The same team that issues your ticket manages every change afterwards.</p>
          <ul className={styles.grid3}>
            {afterSales.map(({ icon: Icon, title, body }) => (
              <li key={title} style={{ display: 'flex', gap: '1rem' }}>
                <span className={styles.uspIcon}>
                  <Icon size={20} aria-hidden />
                </span>
                <span>
                  <h3 className="text-heading-5">{title}</h3>
                  <p className="text-body" style={{ marginTop: '0.25rem' }}>
                    {body}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panelDark}>
          <h2 className={styles.subTitle}>Need a ticket today?</h2>
          <p className="text-body" style={{ maxWidth: '44rem' }}>
            Send your route, dates and passenger names on WhatsApp or call {siteConfig.contact.phone[0]}. Office hours:{' '}
            {siteConfig.hours.days}, {siteConfig.hours.weekdays}.
          </p>
          <div className={styles.ctaRow}>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--whatsapp bpk-btn--large">
              <WhatsAppIcon size={20} /> Book on WhatsApp
            </a>
            <a href={`tel:${siteConfig.contact.phone[0]}`} className="bpk-btn bpk-btn--primary-on-dark bpk-btn--large">
              Call {siteConfig.contact.phone[0]}
            </a>
          </div>
        </section>

        <FaqSection id="faqs" title="Air ticketing FAQs" faqs={ticketingFaqs} />
      </div>
    </>
  );
}
