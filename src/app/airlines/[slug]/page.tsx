import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BadgeCheck, ExternalLink, FileText, MessageCircle, Plane } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { FareSeasonChart } from '@/components/sections/FareSeasonChart';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { WhatsAppIcon } from '@/components/ui/icons';
import { airlines, getAirline } from '@/lib/airlines';
import { LAST_VERIFIED, getAirlineDetail, seasonProfiles } from '@/lib/airline-details';
import { airlineFaqs, airlineTips, article, cityNames, listJoin, seasonSummary } from '@/lib/airline-content';
import { findAirport } from '@/lib/airports';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return airlines.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAirline(slug);
  const d = getAirlineDetail(slug);
  if (!a || !d) return { title: 'Airline not found | BookMyFlight' };
  const { cheap } = seasonSummary(d);
  return {
    title: `${a.name} Flights from Pakistan: Refund & Reissue Policy, Baggage, Cheapest Months | BookMyFlight`,
    description: `Book ${a.name} (${a.code}) tickets from ${listJoin(cityNames(d.pkAirports.slice(0, 4)))}. Compare ${a.name} fare types, baggage, refund and date-change rules. Cheapest months: ${listJoin(cheap.slice(0, 3))}.`,
    alternates: { canonical: `/airlines/${a.slug}` },
    openGraph: {
      title: `${a.name} flights from Pakistan | BookMyFlight`,
      description: `${a.name} fare types, baggage allowance, refund and reissue policy, and the cheapest months to fly from Pakistan.`,
      url: `https://bookmyflight.pk/airlines/${a.slug}`,
    },
  };
}

export default async function AirlinePage({ params }: Props) {
  const { slug } = await params;
  const a = getAirline(slug);
  const d = getAirlineDetail(slug);
  if (!a || !d) notFound();

  const season = seasonProfiles[d.season];
  const { cheap, expensive } = seasonSummary(d);
  const faqs = airlineFaqs(a, d);
  const tips = airlineTips(a, d);
  const from = d.pkAirports[0];
  const others = airlines.filter((x) => x.slug !== a.slug);
  const whatsapp = getWhatsAppUrl(`Hello BookMyFlight, I would like a quote for ${article(a.name)} ${a.name} flight.`);

  const airlineSchema = {
    '@context': 'https://schema.org',
    '@type': 'Airline',
    name: a.name,
    iataCode: a.code,
    url: a.website,
  };

  return (
    <>
      <JsonLd schema={airlineSchema} />
      <PageHero title={`${a.name} flights`} search={{ from }} />

      <div className={`bpk-container ${styles.body}`}>
        <Breadcrumbs
          onDark={false}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Airlines', href: '/airlines' },
            { label: a.name },
          ]}
        />

        <ul className={styles.usps}>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <Plane size={20} aria-hidden />
            </span>
            Compare {a.name} fares from {listJoin(cityNames(d.pkAirports.slice(0, 3)))} with our ticketing team
          </li>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <FileText size={20} aria-hidden />
            </span>
            Know the {a.name} refund, reissue and baggage rules before you pay
          </li>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <BadgeCheck size={20} aria-hidden />
            </span>
            Official e-ticket issued by O.S Travel &amp; Tours, an IATA-accredited agent
          </li>
        </ul>

        <nav className={styles.inPageNav} aria-label="On this page">
          {[
            ['#destinations', 'Top destinations'],
            ['#information', 'Airline information'],
            ['#fares-by-month', 'Cheapest months'],
            ['#fare-types', 'Fare types & baggage'],
            ['#refunds', 'Refund policy'],
            ['#reissue', 'Reissue policy'],
            ['#faqs', 'FAQs'],
            ['#other-airlines', 'Other top airlines'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="bpk-chip">
              {label}
            </a>
          ))}
        </nav>

        {/* Destinations */}
        <section id="destinations" className={styles.section}>
          <h2 className={styles.sectionTitle}>{a.name} destinations</h2>
          <p className={styles.sectionIntro}>
            Popular places you can fly to with {a.name} from Pakistan. Choose a destination to request today’s fare.
          </p>
          <ul className={styles.grid4}>
            {d.routes.map((r) => {
              const origins = r.direct ? r.from ?? d.pkAirports : d.pkAirports;
              const origin = origins.find((c) => c !== r.code) ?? from;
              return (
                <li key={r.code}>
                  <Link
                    href={`/search?trip=return&from=${origin}&to=${r.code}`}
                    className="bpk-card bpk-card--padded"
                    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <span className={styles.cardTitle}>{r.city}</span>
                    <span className={styles.cardMeta}>
                      {r.direct && r.from
                        ? `Non-stop from ${listJoin(cityNames(r.from.filter((c) => c !== r.code)))}`
                        : r.country}
                    </span>
                    <span className={styles.cardFooter}>
                      <span className={`${styles.badge} ${r.direct ? styles.badgeSuccess : ''}`}>
                        {r.direct ? 'Direct' : '1+ stops'}
                      </span>
                      <span style={{ color: '#0062e3' }}>Get fare</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Airline information */}
        <section id="information" className={styles.section}>
          <h2 className={styles.sectionTitle}>{a.name} flight information</h2>
          <p className={styles.sectionIntro}>{d.intro}</p>
          <ul className={styles.stats}>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Cheapest months to fly</p>
              <p className={styles.statValue}>{cheap.slice(0, 2).join(' & ')}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Most expensive months</p>
              <p className={styles.statValue}>{expensive.slice(0, 2).join(' & ')}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Main hub</p>
              <p className={styles.statValue}>{a.hub}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Pakistani airports served</p>
              <p className={styles.statValue}>{d.pkAirports.length}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Airline code</p>
              <p className={styles.statValue}>{a.code}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Alliance</p>
              <p className={styles.statValue}>{a.alliance === 'None' ? 'Independent' : a.alliance}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Cabin baggage</p>
              <p className={styles.statValue} style={{ fontSize: '1.125rem', lineHeight: '1.5rem' }}>
                {d.cabinBag}
              </p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Frequent flyer</p>
              <p className={styles.statValue} style={{ fontSize: '1.125rem', lineHeight: '1.5rem' }}>
                {d.loyalty ?? 'Not offered'}
              </p>
            </li>
          </ul>
        </section>

        {/* Fare comparison by month */}
        <section id="fares-by-month" className={styles.section}>
          <h2 className={styles.sectionTitle}>When are {a.name} flights cheapest?</h2>
          <p className={styles.sectionIntro}>
            Typical {a.name} fare levels from Pakistan by month. Fares are usually cheapest in {listJoin(cheap)} and
            most expensive in {listJoin(expensive)}.
          </p>
          <FareSeasonChart levels={season.levels} caption="Typical fare level by month, based on seasonal demand from Pakistan (not live prices)" />
          <ul className={styles.bullets} style={{ marginTop: '1.5rem' }}>
            {Object.entries(season.notes).map(([m, note]) => (
              <li key={m}>{note}</li>
            ))}
          </ul>
        </section>

        {/* Fare types */}
        <section id="fare-types" className={styles.section}>
          <h2 className={styles.sectionTitle}>{a.name} fare types &amp; baggage</h2>
          <p className={styles.sectionIntro}>
            Every {a.name} Economy fare compared: included checked baggage, date-change rules and refund rules.
          </p>
          <div className="bpk-table-wrap">
            <table className="bpk-table">
              <thead>
                <tr>
                  <th scope="col">Fare type</th>
                  <th scope="col">Checked baggage</th>
                  <th scope="col">Date change / reissue</th>
                  <th scope="col">Cancellation / refund</th>
                </tr>
              </thead>
              <tbody>
                {d.fareFamilies.map((f) => (
                  <tr key={f.name}>
                    <th scope="row">{f.name}</th>
                    <td>{f.baggage}</td>
                    <td>{f.change}</td>
                    <td>{f.refund}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {d.fareNote && (
            <p className="text-footnote text-secondary" style={{ marginTop: '0.75rem' }}>
              {d.fareNote}
            </p>
          )}
        </section>

        {/* Refund & reissue */}
        <div className={styles.split}>
          <section id="refunds" className={`${styles.section} ${styles.panel}`}>
            <h2 className={styles.subTitle}>{a.name} refund policy</h2>
            <ul className={styles.bullets} style={{ marginTop: '1rem' }}>
              {d.refundPolicy.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
          <section id="reissue" className={`${styles.section} ${styles.panel}`}>
            <h2 className={styles.subTitle}>{a.name} reissue &amp; date change policy</h2>
            <ul className={styles.bullets} style={{ marginTop: '1rem' }}>
              {d.reissuePolicy.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        </div>

        <p className={styles.sources}>
          Sources ({a.name} official website), last checked {LAST_VERIFIED}:{' '}
          {d.sources.map((s, i) => (
            <span key={s.url}>
              {i > 0 && ' · '}
              <a href={s.url} target="_blank" rel="noopener nofollow">
                {s.label}
              </a>
            </span>
          ))}
          . Fare rules can change at any time; the conditions printed on your ticket always apply.
        </p>

        {/* Tips */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to find cheap {a.name} flights</h2>
          <p className={styles.sectionIntro}>A few tips to get the best {a.name} fare from Pakistan.</p>
          <div className={styles.tips}>
            {tips.map((t) => (
              <div key={t.title}>
                <h3 className={styles.tipTitle}>{t.title}</h3>
                <p className={styles.tipBody}>{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.panelDark}>
          <h2 className={styles.subTitle}>Book your {a.name} ticket with peace of mind</h2>
          <p className="text-body" style={{ maxWidth: '44rem' }}>
            Our ticketing team at O.S Travel &amp; Tours checks every {a.name} fare type for your dates, explains the
            refund and reissue rules in plain language and handles changes for you after booking.
          </p>
          <div className={styles.ctaRow}>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--whatsapp bpk-btn--large">
              <WhatsAppIcon size={20} /> Get {article(a.name)} {a.name} quote
            </a>
            <Link href="/ticketing" className="bpk-btn bpk-btn--primary-on-dark bpk-btn--large">
              <MessageCircle size={20} aria-hidden /> How ticketing works
            </Link>
          </div>
        </section>

        <FaqSection id="faqs" title={`Finding flights with ${a.name}: FAQs`} faqs={faqs} />

        {/* Other airlines */}
        <section id="other-airlines" className={styles.section}>
          <h2 className={styles.sectionTitle}>Other top airlines</h2>
          <ul className={styles.grid4} style={{ marginTop: '1rem' }}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/airlines/${o.slug}`}
                  className="bpk-card bpk-card--padded"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                  <AirlineBadge airline={o} size={40} />
                  <span>
                    <span style={{ display: 'block', fontWeight: 700 }}>{o.name}</span>
                    <span className="text-footnote text-secondary">{o.hub}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-footnote" style={{ marginTop: '1rem' }}>
            <a href={a.website} target="_blank" rel="noopener nofollow" className="bpk-link">
              Visit the official {a.name} website <ExternalLink size={12} aria-hidden style={{ display: 'inline' }} />
            </a>{' '}
            · Departures from {listJoin(d.pkAirports.map((c) => findAirport(c)?.city ?? c))}
          </p>
        </section>
      </div>
    </>
  );
}
