import type { Metadata } from 'next';
import Link from 'next/link';
import { BadgeCheck, FileText, Hotel, Landmark, MessagesSquare, Plane, ShieldCheck, Stamp, Umbrella } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { AssociatedSites } from '@/components/home/AssociatedSites';
import { WhatsAppIcon } from '@/components/ui/icons';
import { siteConfig } from '@/lib/config';
import { aboutFaqs } from '@/lib/faqs';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'About BookMyFlight | Flight Booking by O.S Travel & Tours, Islamabad',
  description:
    'BookMyFlight is the online flight desk of O.S Travel & Tours, a DTS-licensed, IATA-accredited travel agency in Blue Area, Islamabad: flight tickets, Umrah, visas and hotels.',
  alternates: { canonical: '/about' },
};

const services = [
  { icon: Plane, title: 'Flight tickets', body: 'Domestic, international, Umrah and group tickets.', href: '/ticketing' },
  { icon: Landmark, title: 'Umrah packages', body: 'Visa, flights, hotels and transport together.', href: '/umrah' },
  { icon: Stamp, title: 'Visa assistance', body: 'Visit visas and Schengen visa files for 20+ countries.', href: '/visa' },
  { icon: Hotel, title: 'Hotels', body: 'Hotels worldwide, including near the Haram in Makkah and Madinah.', href: '/hotels' },
  { icon: Umbrella, title: 'Holidays', body: 'Holiday packages to Dubai, Baku, Malaysia, Türkiye and more.', href: '/holidays' },
  { icon: FileText, title: 'Airline rules', body: 'Refund, reissue and baggage rules for 18 airlines.', href: '/airlines' },
];

const promises = [
  { icon: BadgeCheck, title: 'Real airline tickets', body: 'Every booking is an official airline e-ticket you can verify on the airline’s website.' },
  { icon: FileText, title: 'Rules explained upfront', body: 'We explain baggage, change and refund rules before you pay, not after.' },
  { icon: MessagesSquare, title: 'People, not bots', body: 'A consultant who knows your booking handles quotes, changes and refunds.' },
  { icon: ShieldCheck, title: 'Licensed and accountable', body: 'DTS-licensed, FBR and SECP registered, with a real office in Blue Area.' },
];

export default function AboutPage() {
  const c = siteConfig.credentials;
  return (
    <>
      <PageHero
        title="About BookMyFlight"
        subtitle="Cheap flights from Pakistan with the confidence of a licensed travel agency behind every ticket."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <div className={`bpk-container ${styles.body}`}>
        <section className={styles.split}>
          <div>
            <h2 className={styles.sectionTitle}>Our story</h2>
            <div className="bpk-prose" style={{ marginTop: '0.5rem' }}>
              <p>
                BookMyFlight was created by{' '}
                <a href="https://ostravels.com/" target="_blank" rel="noopener">
                  O.S Travel &amp; Tours
                </a>
                , an Islamabad travel agency with {c.experienceYears} years of experience in air ticketing, visas and
                Umrah. After years of helping travellers on WhatsApp and at our Blue Area office, we built a simple way
                to search flights, understand airline rules and book with real people, online.
              </p>
              <p>
                Our mission is simple: make it easy for anyone in Pakistan, or any overseas Pakistani, to find a fair
                fare, know exactly what the ticket includes and get help when plans change.
              </p>
            </div>
          </div>
          <ul className={`${styles.stats} ${styles.stats3}`}>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Years of experience</p>
              <p className={styles.statValue}>{c.experienceYears}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Happy clients</p>
              <p className={styles.statValue}>{c.happyClients}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Airlines covered</p>
              <p className={styles.statValue}>18</p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <ul className={styles.grid3} style={{ marginTop: '1rem' }}>
            {services.map(({ icon: Icon, title, body, href }) => (
              <li key={title}>
                <Link href={href} className="bpk-card bpk-card--padded" style={{ display: 'flex', gap: '1rem', height: '100%', padding: '1.5rem' }}>
                  <span className={styles.uspIcon}>
                    <Icon size={20} aria-hidden />
                  </span>
                  <span>
                    <span className="text-heading-5" style={{ display: 'block' }}>
                      {title}
                    </span>
                    <span className="text-body" style={{ display: 'block', marginTop: '0.25rem' }}>
                      {body}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.sectionTitle}>Our promise</h2>
          <ul className={styles.grid4} style={{ marginTop: '1.5rem' }}>
            {promises.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <Icon size={28} color="#0062e3" aria-hidden />
                <h3 className="text-heading-4" style={{ marginTop: '0.75rem' }}>
                  {title}
                </h3>
                <p className="text-body" style={{ marginTop: '0.5rem' }}>
                  {body}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-body" style={{ marginTop: '1.5rem' }}>
            See our{' '}
            <Link href="/partners#credentials" className="bpk-link">
              accreditation and licences
            </Link>
            .
          </p>
        </section>

        <AssociatedSites defaultOpen />

        <section className={styles.panelDark}>
          <h2 className={styles.subTitle}>Plan your next trip with us</h2>
          <p className="text-body" style={{ maxWidth: '44rem' }}>
            {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city} · {siteConfig.hours.days},{' '}
            {siteConfig.hours.weekdays}
          </p>
          <div className={styles.ctaRow}>
            <a
              href={getWhatsAppUrl('Hello BookMyFlight, I would like to speak with a travel consultant.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bpk-btn bpk-btn--whatsapp bpk-btn--large"
            >
              <WhatsAppIcon size={20} /> Chat on WhatsApp
            </a>
            <Link href="/contact" className="bpk-btn bpk-btn--primary-on-dark bpk-btn--large">
              Contact details
            </Link>
          </div>
        </section>

        <FaqSection id="faqs" title="About BookMyFlight: FAQs" faqs={aboutFaqs} />
      </div>
    </>
  );
}
