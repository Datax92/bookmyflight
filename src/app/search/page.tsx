import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Luggage, Users } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FareSeasonChart } from '@/components/sections/FareSeasonChart';
import { InquiryButton } from '@/components/search/InquiryForm';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { airlines } from '@/lib/airlines';
import { airlineDetails, seasonProfiles, type SeasonProfile } from '@/lib/airline-details';
import { findAirport } from '@/lib/airports';
import { formatLongDate, fromParams, travellersLabel, tripLabels } from '@/lib/search';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'Flight search | BookMyFlight',
  robots: { index: false, follow: true },
};

interface Props {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const GULF = ['United Arab Emirates', 'Qatar', 'Oman', 'Bahrain', 'Kuwait'];
const EUROPE_NA = ['United Kingdom', 'France', 'Germany', 'Netherlands', 'Spain', 'Italy', 'Greece', 'Switzerland', 'Austria', 'Denmark', 'Norway', 'Sweden', 'Belgium', 'Ireland', 'Portugal', 'Türkiye', 'Canada', 'United States'];

function profileFor(country: string | undefined): SeasonProfile {
  if (!country) return 'gulf';
  if (country === 'Saudi Arabia') return 'saudi';
  if (GULF.includes(country) || country === 'Pakistan') return 'gulf';
  if (EUROPE_NA.includes(country)) return 'europe';
  return 'asia';
}

function routeAirlines(from: string, to: string) {
  const toAirport = findAirport(to);
  return airlines
    .map((a) => {
      const d = airlineDetails[a.slug];
      if (!d || !d.pkAirports.includes(from)) return null;
      const route = d.routes.find((r) => r.code === to);
      if (route) return { a, direct: route.direct && (!route.from || route.from.includes(from)) };
      if (toAirport?.country === 'Pakistan' && a.group === 'pakistani' && d.pkAirports.includes(to)) return { a, direct: true };
      return null;
    })
    .filter((x): x is { a: (typeof airlines)[number]; direct: boolean } => !!x)
    .sort((x, y) => Number(y.direct) - Number(x.direct));
}

export default async function SearchPage({ searchParams }: Props) {
  const s = fromParams(await searchParams);
  const from = s.trip === 'multicity' ? s.legs[0]?.from : s.from;
  const to = s.trip === 'multicity' ? s.legs[0]?.to : s.to;
  const fromA = findAirport(from);
  const toA = findAirport(to);
  const title =
    s.trip === 'multicity'
      ? 'Your multi-city trip'
      : `${fromA?.city ?? from} to ${toA?.city ?? (to || 'anywhere')}`;
  const options = from && to ? routeAirlines(from, to) : [];
  const profile = profileFor(toA?.country);

  return (
    <>
      <PageHero title={title} search={s} />
      <div className={`bpk-container ${styles.body}`}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2rem' }} className="search-layout">
          <section aria-labelledby="trip-summary" className={styles.panel}>
            <h2 id="trip-summary" className="text-heading-4">
              Trip summary
            </h2>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CalendarDays size={20} aria-hidden style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  {tripLabels[s.trip]}
                  {s.trip !== 'multicity' && s.depart && ` · ${formatLongDate(s.depart)}`}
                  {s.trip === 'return' && s.ret && ` – ${formatLongDate(s.ret)}`}
                  {s.trip !== 'multicity' && !s.depart && ' · dates to confirm'}
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <Users size={20} aria-hidden style={{ flexShrink: 0 }} /> {travellersLabel(s)}
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <Luggage size={20} aria-hidden style={{ flexShrink: 0 }} />
                {s.checkedBags ? `${s.checkedBags} checked bag(s) per traveller` : 'Baggage per fare (we’ll show options)'}
                {s.direct ? ' · Direct flights only' : ''}
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <InquiryButton search={s} />
            </div>
          </section>

          <div className={styles.split}>
            <section aria-labelledby="route-airlines">
              <h2 id="route-airlines" className="text-heading-3" style={{ marginBottom: '1rem' }}>
                {options.length ? 'Airlines on this route' : 'Airlines from ' + (fromA?.city ?? 'Pakistan')}
              </h2>
              {options.length ? (
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                  {options.map(({ a, direct }) => (
                    <li key={a.slug}>
                      <Link
                        href={`/airlines/${a.slug}`}
                        className="bpk-card bpk-card--padded"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                      >
                        <AirlineBadge airline={a} size={40} />
                        <span style={{ flex: 1 }}>
                          <span style={{ display: 'block', fontWeight: 700 }}>{a.name}</span>
                          <span className="text-footnote text-secondary">Refund, reissue &amp; baggage rules</span>
                        </span>
                        <span className={`${styles.badge} ${direct ? styles.badgeSuccess : ''}`}>
                          {direct ? 'Direct' : '1+ stops'}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-body">
                  Many airlines connect this route via Dubai, Doha, Abu Dhabi, Istanbul or Muscat. Send your request and
                  we’ll compare every option.{' '}
                  <Link href="/airlines" className="bpk-link">
                    Browse all airlines <ArrowRight size={14} style={{ display: 'inline' }} aria-hidden />
                  </Link>
                </p>
              )}
            </section>

            <section aria-labelledby="route-season">
              <h2 id="route-season" className="text-heading-3" style={{ marginBottom: '1rem' }}>
                Cheapest months to fly{toA ? ` to ${toA.city}` : ''}
              </h2>
              <FareSeasonChart
                levels={seasonProfiles[profile].levels}
                caption="Typical fare level by month from Pakistan (not live prices)"
              />
            </section>
          </div>

          <section aria-labelledby="next-steps">
            <h2 id="next-steps" className={styles.sectionTitle}>
              What happens next
            </h2>
            <ol className={styles.grid3} style={{ listStyle: 'none', marginTop: '1rem' }}>
              {[
                ['1. We check live fares', 'Our ticketing team searches Amadeus, Sabre and airline-direct inventory for your dates and cabin.'],
                ['2. You choose on WhatsApp', 'We send the best options with baggage, refund and change rules explained, so there are no surprises.'],
                ['3. We issue your e-ticket', 'Once payment is confirmed we issue an official airline e-ticket with a PNR you can verify on the airline’s website.'],
              ].map(([t, b]) => (
                <li key={t} className={styles.panel}>
                  <h3 className="text-heading-4">{t}</h3>
                  <p className="text-body" style={{ marginTop: '0.5rem' }}>
                    {b}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </>
  );
}
