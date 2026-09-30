import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, Building2, ExternalLink, Landmark, Network, ReceiptText, ShieldCheck, Users } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { JsonLd } from '@/components/JsonLd';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { FacebookIcon, WhatsAppIcon } from '@/components/ui/icons';
import { airlines } from '@/lib/airlines';
import { osTravelsLinks, siteConfig } from '@/lib/config';
import { partnersFaqs } from '@/lib/faqs';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'Partners: O.S Travel & Tours, IATA Accreditation & DTS Licence | BookMyFlight',
  description:
    'BookMyFlight is powered by O.S Travel & Tours, Islamabad: IATA-accredited ticketing via Amadeus and Sabre, DTS government licence #402, FBR and SECP registered. See the airlines we ticket.',
  alternates: { canonical: '/partners' },
};

export default function PartnersPage() {
  const c = siteConfig.credentials;
  const credentials = [
    {
      icon: BadgeCheck,
      title: 'IATA-accredited agent',
      body: c.iataCode
        ? `IATA agency code ${c.iataCode}. Tickets are issued directly in airline systems.`
        : 'Tickets are issued as an IATA-accredited agent, directly in the airlines’ systems.',
    },
    {
      icon: Landmark,
      title: 'DTS government licence',
      body: `Department of Tourist Services, ${c.dtsLicense}. Status: active.`,
      link: { label: 'Verify on dts.gov.pk', href: c.dtsVerifyUrl },
    },
    { icon: Network, title: 'Amadeus & Sabre GDS', body: `Direct GDS ticketing on ${c.gds.join(' and ')} for real-time fares and instant e-tickets.` },
    { icon: ReceiptText, title: 'FBR registered', body: `${c.fbr}.` },
    { icon: Building2, title: 'SECP registered', body: `${c.secp}.` },
    {
      icon: Users,
      title: `${c.facebookCommunity} Facebook community`,
      body: 'One of the most active travel and visa communities in Islamabad.',
      link: { label: 'Visit Facebook page', href: siteConfig.social.facebook },
    },
  ];

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'O.S Travel & Tours',
    url: 'https://ostravels.com/',
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No. 3, Aaly Plaza, Fazal-e-Haq Road, Blue Area',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.youtube],
    subOrganization: { '@type': 'Organization', name: 'BookMyFlight', url: 'https://bookmyflight.pk' },
  };

  return (
    <>
      <JsonLd schema={orgSchema} />
      <PageHero
        title="Our partners"
        subtitle="BookMyFlight is powered by O.S Travel & Tours, a licensed, IATA-accredited travel agency in Blue Area, Islamabad."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Partners' }]}
      />

      <div className={`bpk-container ${styles.body}`}>
        <section className={styles.section}>
          <div className={styles.split}>
            <div>
              <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Image
                  src="/images/brand/os-travels-logo.png"
                  alt="O.S Travel & Tours logo"
                  width={56}
                  height={56}
                  style={{ borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 #25201f4d', background: '#fff' }}
                />
                O.S Travel &amp; Tours
              </h2>
              <p className="text-body" style={{ marginTop: '0.5rem' }}>
                O.S Travel &amp; Tours is a one-stop travel agency in Islamabad offering air ticketing, visit visas,
                Schengen visa file processing, Umrah, hotel bookings and travel insurance. BookMyFlight is its online flight
                desk: every fare you request here is quoted, ticketed and supported by the O.S Travel &amp; Tours team.
              </p>
              <div className={styles.ctaRow}>
                <a href="https://ostravels.com/" target="_blank" rel="noopener" className="bpk-btn bpk-btn--featured bpk-btn--large">
                  Visit ostravels.com <ExternalLink size={16} aria-hidden />
                </a>
                <a
                  href={getWhatsAppUrl('Hello O.S Travel & Tours, I found you through BookMyFlight.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bpk-btn bpk-btn--secondary bpk-btn--large"
                >
                  <WhatsAppIcon size={20} /> WhatsApp the team
                </a>
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
                <p className={styles.statLabel}>Facebook community</p>
                <p className={styles.statValue}>{c.facebookCommunity}</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="credentials" className={styles.section}>
          <h2 className={styles.sectionTitle}>Accreditation &amp; licences</h2>
          <p className={styles.sectionIntro}>
            Verified legal standing and regulatory compliance, as published by O.S Travel &amp; Tours.
          </p>
          <ul className={styles.grid3}>
            {credentials.map(({ icon: Icon, title, body, link }) => (
              <li key={title} className="bpk-card bpk-card--padded" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className={styles.uspIcon}>
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="text-heading-4">{title}</h3>
                </span>
                <p className="text-body" style={{ marginTop: '0.75rem', flex: 1 }}>
                  {body}
                </p>
                {link && (
                  <a href={link.href} target="_blank" rel="noopener" className="bpk-link" style={{ marginTop: '0.75rem', width: 'fit-content', fontWeight: 700 }}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section id="airlines" className={styles.section}>
          <h2 className={styles.sectionTitle}>Airlines we ticket</h2>
          <p className={styles.sectionIntro}>
            Tickets issued through GDS and airline agency channels. Airline names identify the carriers we issue
            tickets for and do not imply endorsement.
          </p>
          <ul className={styles.grid4}>
            {airlines.map((a) => (
              <li key={a.slug}>
                <Link href={`/airlines/${a.slug}`} className="bpk-card bpk-card--padded" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <AirlineBadge airline={a} size={40} />
                  <span>
                    <span style={{ display: 'block', fontWeight: 700 }}>{a.name}</span>
                    <span className="text-footnote text-secondary">
                      {a.alliance !== 'None' ? a.alliance : a.country}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>O.S Travel &amp; Tours services</h2>
          <p className={styles.sectionIntro}>Visa, insurance and travel services from our parent agency.</p>
          <ul className={styles.grid4}>
            {osTravelsLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener" className="bpk-card bpk-card--padded" style={{ display: 'block', height: '100%' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontWeight: 700 }}>
                    {l.label} <ExternalLink size={14} aria-hidden />
                  </span>
                  <span className="text-footnote text-secondary" style={{ display: 'block', marginTop: '0.25rem' }}>
                    {l.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panelDark}>
          <div className={styles.split}>
            <div>
              <h2 className={styles.subTitle}>Corporate &amp; agent partnerships</h2>
              <p className="text-body">
                Businesses, schools, Umrah group organisers and travel agents can work with our Islamabad ticketing desk
                for group fares, corporate travel and ticket issuance support.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '0.75rem', alignContent: 'center' }}>
              <a
                href={getWhatsAppUrl('Hello BookMyFlight, I would like to discuss a corporate / agent partnership.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bpk-btn bpk-btn--whatsapp bpk-btn--large"
              >
                <WhatsAppIcon size={20} /> Talk to us about partnering
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--primary-on-dark bpk-btn--large">
                <FacebookIcon size={18} /> Follow O.S Travel &amp; Tours
              </a>
              <span className="text-footnote" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <ShieldCheck size={16} aria-hidden /> {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city}
              </span>
            </div>
          </div>
        </section>

        <FaqSection id="faqs" title="Partners & accreditation FAQs" faqs={partnersFaqs} />
      </div>
    </>
  );
}
