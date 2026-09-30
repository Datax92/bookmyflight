'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { osTravelsLinks, siteConfig } from '@/lib/config';
import { airlines } from '@/lib/airlines';
import { FacebookIcon, WhatsAppIcon, YouTubeIcon } from '@/components/ui/icons';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const primaryLinks: FooterLink[] = [
  { label: 'Help', href: '/contact' },
  { label: 'Ticketing', href: '/ticketing' },
  { label: 'Partners', href: '/partners' },
  { label: 'Blogs', href: '/blog' },
];

const companyLinks: FooterLink[] = [
  { label: 'About us', href: '/about' },
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of service', href: '/terms' },
  { label: 'Company details', href: '/partners#credentials' },
  { label: 'Photo credits', href: '/credits' },
];

const groups: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Explore everywhere', href: '/explore' },
      { label: 'Cheap flights', href: '/cheap-flights' },
      { label: 'International flights', href: '/international-flights' },
      { label: 'Domestic flights', href: '/domestic-flights' },
      { label: 'Flights to Dubai', href: '/destinations/dubai' },
      { label: 'Flights to Jeddah', href: '/destinations/jeddah' },
      { label: 'Flights to London', href: '/destinations/london' },
      { label: 'Flights to Istanbul', href: '/destinations/istanbul' },
      { label: 'All destinations', href: '/destinations' },
    ],
  },
  {
    title: 'Airlines',
    links: [
      ...airlines.map((a) => ({ label: a.name, href: `/airlines/${a.slug}` })),
      { label: 'All airlines', href: '/airlines' },
    ],
  },
  {
    title: 'Travel services',
    links: [
      { label: 'Air ticketing', href: '/ticketing' },
      { label: 'Umrah packages', href: '/umrah' },
      { label: 'Visa assistance', href: '/visa' },
      { label: 'Hotels', href: '/hotels' },
      { label: 'Holiday packages', href: '/holidays' },
      { label: 'Special offers', href: '/offers' },
      { label: 'Flight booking Islamabad', href: '/flight-booking-islamabad' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Our partners', href: '/partners' },
      { label: 'IATA & licences', href: '/partners#credentials' },
      { label: 'Airline partners', href: '/partners#airlines' },
    ],
  },
  {
    title: 'O.S Travel & Tours',
    links: osTravelsLinks.map((l) => ({ label: l.label, href: l.href, external: true })),
  },
];

function FooterGroup({ title, links }: { title: string; links: FooterLink[] }) {
  const [open, setOpen] = useState(false);
  const id = `footer-${title.toLowerCase().replace(/[^a-z]+/g, '-')}`;
  return (
    <div className={styles.group}>
      <button type="button" className={styles.toggle} aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
        <span className={styles.toggleText}>{title}</span>
        <ChevronDown size={16} aria-hidden className={`${styles.toggleIcon} ${open ? styles.toggleIconOpen : ''}`} />
      </button>
      <ul id={id} className={`${styles.list} ${open ? '' : styles.listHidden}`}>
        {links.map((l) => (
          <li key={l.href + l.label}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noopener" className={styles.listLink}>
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className={styles.listLink}>
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkContainer}>
        <div className={styles.culture}>
          <a
            href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cultureButton}
          >
            Pakistan · English (UK) · Rs PKR
          </a>
          <p className={styles.poweredBy}>
            BookMyFlight is associated with{' '}
            <a href={siteConfig.parent.website} target="_blank" rel="noopener">
              O.S Travel &amp; Tours
            </a>
            , a government-licensed travel agency in Blue Area, Islamabad.
          </p>
          <div className={styles.social}>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="O.S Travel & Tours on Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="O.S Travel & Tours on YouTube">
              <YouTubeIcon size={18} />
            </a>
            <a
              href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp BookMyFlight"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        <div className={styles.userLinks}>
          {primaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.userLinks}>
          {companyLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.seoLinks}>
          {groups.map((g) => (
            <FooterGroup key={g.title} title={g.title} links={g.links} />
          ))}
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.seoLine}>Compare and book cheap flights from Pakistan with BookMyFlight</p>
        <p className={styles.copyText}>
          © {new Date().getFullYear()} BookMyFlight · Powered by O.S Travel &amp; Tours · Website by{' '}
          <a href="https://www.datax.pk" target="_blank" rel="noopener noreferrer">
            DataX Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
