import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, Landmark, Stamp } from 'lucide-react';
import { SearchWidget } from '@/components/search/SearchWidget';
import { FaqSection } from '@/components/sections/FaqSection';
import { AssociatedSites } from '@/components/home/AssociatedSites';
import { InternalLinks, type LinkGroup } from '@/components/home/InternalLinks';
import { WhatsAppIcon } from '@/components/ui/icons';
import { airlines } from '@/lib/airlines';
import { destinations } from '@/lib/config';
import { blogPosts } from '@/lib/blog-data';
import { findAirport } from '@/lib/airports';
import { homeFaqs } from '@/lib/faqs';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/home/Home.module.css';

export const metadata: Metadata = {
  title: 'BookMyFlight | Compare Cheap Flights from Pakistan & Book Air Tickets',
  description:
    'Search cheap flights from Islamabad, Lahore, Karachi and every Pakistani airport. Compare PIA, Emirates, Qatar Airways, Saudia & Turkish fares, refund and reissue rules, then book with O.S Travel & Tours.',
  alternates: { canonical: '/' },
};

const tiles = [
  {
    label: 'Get fares on WhatsApp',
    href: getWhatsAppUrl('Hello BookMyFlight, please send me the cheapest fares for my trip.'),
    external: true,
    icon: <WhatsAppIcon size={28} />,
  },
  { label: 'Umrah packages', href: '/umrah', icon: <Landmark size={28} strokeWidth={1.75} /> },
  { label: 'Visa services', href: '/visa', icon: <Stamp size={28} strokeWidth={1.75} /> },
  { label: 'Explore everywhere', href: '/explore', icon: <Compass size={28} strokeWidth={1.75} /> },
];

const routePairs: [string, string][] = [
  ['ISB', 'DXB'], ['LHE', 'JED'], ['KHI', 'DXB'], ['ISB', 'JED'], ['LHE', 'DXB'], ['ISB', 'LHR'],
  ['KHI', 'JED'], ['PEW', 'DXB'], ['MUX', 'JED'], ['SKT', 'DXB'], ['ISB', 'DOH'], ['LHE', 'IST'],
  ['ISB', 'KUL'], ['KHI', 'BKK'], ['LHE', 'MAN'], ['ISB', 'YYZ'], ['ISB', 'KHI'], ['KHI', 'ISB'],
  ['LHE', 'KHI'], ['ISB', 'KDU'], ['ISB', 'RUH'], ['LHE', 'RUH'], ['KHI', 'MCT'], ['ISB', 'MED'],
  ['LYP', 'DXB'], ['ISB', 'GYD'], ['LHE', 'DMM'], ['KHI', 'IST'],
];

function routeLabel(from: string, to: string) {
  const a = findAirport(from);
  const b = findAirport(to);
  return `${a?.city ?? from} to ${b?.city ?? to} flights`;
}

const linkGroups: LinkGroup[] = [
  {
    label: 'Airlines',
    links: airlines.flatMap((a) => [
      { label: `${a.name} flights`, href: `/airlines/${a.slug}` },
      { label: `${a.name} refund policy`, href: `/airlines/${a.slug}#refunds` },
    ]),
  },
  {
    label: 'Routes',
    links: routePairs.map(([f, t]) => ({ label: routeLabel(f, t), href: `/search?trip=return&from=${f}&to=${t}` })),
  },
  {
    label: 'Destinations',
    links: [
      ...destinations.map((d) => ({ label: `Flights to ${d.name}`, href: `/destinations/${d.id}` })),
      { label: 'Explore everywhere', href: '/explore' },
      { label: 'Umrah packages', href: '/umrah' },
      { label: 'Cheap flights', href: '/cheap-flights' },
      { label: 'International flights', href: '/international-flights' },
      { label: 'Domestic flights', href: '/domestic-flights' },
    ],
  },
  {
    label: 'Guides',
    links: [
      ...blogPosts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` })),
      { label: 'Air ticketing guide', href: '/ticketing' },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="bpk-container">
          <h1 className={`${styles.heroTitle} bmf-enter`}>Cheap flights from Pakistan. One simple search.</h1>
          <div className="bmf-enter bmf-enter-1">
            <SearchWidget />
          </div>
        </div>
      </section>

      <div className={`bpk-container ${styles.body}`}>
        <nav aria-label="Quick links" className="bmf-enter bmf-enter-2">
          <ul className={styles.tiles} style={{ listStyle: 'none' }}>
            {tiles.map((t) => (
              <li key={t.label} className={styles.tileWrap}>
                {t.external ? (
                  <a href={t.href} target="_blank" rel="noopener noreferrer" className={styles.tile}>
                    <span className={styles.tileIcon}>{t.icon}</span>
                    <span className={styles.tileLabel}>{t.label}</span>
                  </a>
                ) : (
                  <Link href={t.href} className={styles.tile}>
                    <span className={styles.tileIcon}>{t.icon}</span>
                    <span className={styles.tileLabel}>{t.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <section className={styles.banner} aria-labelledby="explore-banner-title">
          <Image
            src="/images/hero/hero-aviation.jpg"
            alt=""
            fill
            sizes="(max-width: 1224px) 100vw, 1224px"
            className={styles.bannerImage}
            loading="eager"
            fetchPriority="high"
          />
          <div className={styles.bannerShade} />
          <div className={styles.bannerContent}>
            <p className={styles.bannerKicker}>Not sure where to go?</p>
            <h2 id="explore-banner-title" className={styles.bannerTitle}>
              Explore every destination
            </h2>
            <Link href="/explore" className="bpk-btn bpk-btn--primary-on-dark">
              Search flights everywhere
            </Link>
          </div>
        </section>

        <FaqSection title="Booking flights with BookMyFlight" faqs={homeFaqs} id="faqs" />

        <AssociatedSites />

        <InternalLinks title="Start planning your adventure" groups={linkGroups} />
      </div>
    </>
  );
}
