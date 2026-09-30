import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { internationalAirlines, pakistaniAirlines, airlines, type AirlineBase } from '@/lib/airlines';
import { LAST_VERIFIED, getAirlineDetail } from '@/lib/airline-details';
import { seasonSummary } from '@/lib/airline-content';
import { airlinesFaqs } from '@/lib/faqs';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'Airlines Flying from Pakistan: Refund, Reissue & Baggage Rules Compared | BookMyFlight',
  description:
    'Compare 18 airlines flying from Pakistan: PIA, Airblue, AirSial, Fly Jinnah, Emirates, Qatar Airways, Saudia, Turkish and more. Fare types, baggage, refund and reissue policies and the cheapest months to fly.',
  alternates: { canonical: '/airlines' },
};

function AirlineCard({ a }: { a: AirlineBase }) {
  const d = getAirlineDetail(a.slug);
  const cheap = d ? seasonSummary(d).cheap.slice(0, 2).join(' & ') : '';
  return (
    <li>
      <Link href={`/airlines/${a.slug}`} className="bpk-card bpk-card--padded" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AirlineBadge airline={a} size={44} />
          <span>
            <span className={styles.cardTitle} style={{ display: 'block' }}>
              {a.name}
            </span>
            <span className={styles.cardMeta} style={{ display: 'block', marginTop: 0 }}>
              {a.country} · {a.hub}
            </span>
          </span>
        </span>
        {d && (
          <span className={styles.cardBody} style={{ flex: 1 }}>
            Flies from {d.pkAirports.length} Pakistani airport{d.pkAirports.length > 1 ? 's' : ''} · {d.fareFamilies.length} fare type
            {d.fareFamilies.length > 1 ? 's' : ''}
          </span>
        )}
        <span className={styles.cardFooter}>
          {cheap && <span className={`${styles.badge} ${styles.badgeSuccess}`}>Cheapest: {cheap}</span>}
          <span style={{ color: '#0062e3' }}>View rules</span>
        </span>
      </Link>
    </li>
  );
}

export default function AirlinesPage() {
  return (
    <>
      <PageHero
        title="Airlines flying from Pakistan"
        subtitle="Compare fare types, baggage, refund and reissue rules for every major airline, then search your route."
        search
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Airlines' }]}
      />

      <div className={`bpk-container ${styles.body}`}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pakistani airlines</h2>
          <p className={styles.sectionIntro}>Domestic and international carriers based in Pakistan.</p>
          <ul className={styles.grid4}>
            {pakistaniAirlines.map((a) => (
              <AirlineCard key={a.slug} a={a} />
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>International airlines</h2>
          <p className={styles.sectionIntro}>
            Gulf, Saudi, Turkish, Asian and European airlines with scheduled flights from Pakistani airports.
          </p>
          <ul className={styles.grid4}>
            {internationalAirlines.map((a) => (
              <AirlineCard key={a.slug} a={a} />
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Refund &amp; baggage comparison</h2>
          <p className={styles.sectionIntro}>
            The cheapest and most flexible Economy fare of each airline side by side. Rules checked on each airline’s
            official website on {LAST_VERIFIED}.
          </p>
          <div className="bpk-table-wrap">
            <table className="bpk-table">
              <thead>
                <tr>
                  <th scope="col">Airline</th>
                  <th scope="col">Cheapest fare</th>
                  <th scope="col">Baggage</th>
                  <th scope="col">Refund</th>
                  <th scope="col">Most flexible fare</th>
                  <th scope="col">Refund</th>
                </tr>
              </thead>
              <tbody>
                {airlines.map((a) => {
                  const d = getAirlineDetail(a.slug);
                  if (!d) return null;
                  const low = d.fareFamilies[0];
                  const high = d.fareFamilies[d.fareFamilies.length - 1];
                  return (
                    <tr key={a.slug}>
                      <th scope="row">
                        <Link href={`/airlines/${a.slug}`} className="bpk-link">
                          {a.name}
                        </Link>
                      </th>
                      <td>{low.name}</td>
                      <td>{low.baggage}</td>
                      <td>{low.refund}</td>
                      <td>{high.name}</td>
                      <td>{high.refund}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <FaqSection id="faqs" title="Airlines from Pakistan: FAQs" faqs={airlinesFaqs} />
      </div>
    </>
  );
}
