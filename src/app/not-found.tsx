import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import styles from '@/components/sections/Page.module.css';

export default function NotFound() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Air ticketing', href: '/ticketing' },
    { label: 'Airlines', href: '/airlines' },
    { label: 'Explore everywhere', href: '/explore' },
    { label: 'Umrah packages', href: '/umrah' },
    { label: 'Travel blog', href: '/blog' },
    { label: 'Contact us', href: '/contact' },
  ];
  return (
    <>
      <PageHero title="Page not found" subtitle="The page you’re looking for has moved or doesn’t exist. Try a new search instead." search />
      <div className={`bpk-container ${styles.body}`}>
        <section>
          <h2 className={styles.subTitle}>Popular pages</h2>
          <div className={styles.chipRow} style={{ marginTop: '1rem' }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="bpk-chip">
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
