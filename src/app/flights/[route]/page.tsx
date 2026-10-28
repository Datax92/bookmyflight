import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BadgeCheck, FileText, Phone, Plane } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection, type Faq } from '@/components/sections/FaqSection';
import { FareSeasonChart } from '@/components/sections/FareSeasonChart';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { WhatsAppIcon } from '@/components/ui/icons';
import { LAST_VERIFIED, getAirlineDetail, seasonProfiles } from '@/lib/airline-details';
import { listJoin, seasonMonths } from '@/lib/airline-content';
import { findAirport } from '@/lib/airports';
import { siteConfig } from '@/lib/config';
import { flightRoutes, getRoute, routeLabel, type FlightRoute } from '@/lib/routes';
import { absoluteUrl, pageMetadata, YEAR } from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

interface Props {
  params: Promise<{ route: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return flightRoutes.map((r) => ({ route: r.slug }));
}

function airportNames(r: FlightRoute) {
  return r.toCodes.map((c) => {
    const a = findAirport(c);
    return a ? `${a.name} (${a.code})` : c;
  });
}

function routeTitle(r: FlightRoute) {
  const n = r.direct.length;
  return n > 1
    ? `${routeLabel(r)} Flights ${YEAR}: ${n} Non-Stop Airlines`
    : `${routeLabel(r)} Flights ${YEAR}: Non-Stop on ${r.direct[0].name}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { route } = await params;
  const r = getRoute(route);
  if (!r) return { title: 'Route not found' };
  const months = r.season ? seasonMonths(r.season).cheap.slice(0, 2) : [];
  return pageMetadata({
    title: routeTitle(r),
    description: `Compare ${r.from.city} (${r.from.code}) to ${r.toCity} flights on ${listJoin(r.direct.slice(0, 4).map((a) => a.name))}. Baggage, refund rules${
      months.length ? ` & cheapest months (${listJoin(months)})` : ''
    }. Call ${siteConfig.contact.hotlineDisplay}.`,
    path: `/flights/${r.slug}`,
    image: `/flights/${r.slug}/opengraph-image`,
    imageAlt: `${routeLabel(r)} flights`,
  });
}

export default async function RoutePage({ params }: Props) {
  const { route } = await params;
  const r = getRoute(route);
  if (!r) notFound();

  const label = routeLabel(r);
  const season = r.season ? seasonProfiles[r.season] : undefined;
  const months = r.season ? seasonMonths(r.season) : undefined;
  const directNames = r.direct.map((a) => a.name);
  const arrival = airportNames(r);
  const otherOrigins = flightRoutes.filter((x) => x.toCity === r.toCity && x.slug !== r.slug);
  const sameOrigin = flightRoutes.filter((x) => x.from.code === r.from.code && x.slug !== r.slug);
  const whatsapp = getWhatsAppUrl(
    `Hello BookMyFlight, I would like a fare for ${r.from.city} (${r.from.code}) to ${r.toCity} (${r.toCodes.join('/')}).`,
  );

  const rows = r.direct.map((a) => ({ airline: a, detail: getAirlineDetail(a.slug) }));
  const cabinBags = [...new Set(rows.map((x) => x.detail?.cabinBag).filter(Boolean))] as string[];

  const faqs: Faq[] = [
    {
      question: `Which airlines fly non-stop from ${r.from.city} to ${r.toCity}?`,
      answer: `${listJoin(directNames)} ${r.direct.length > 1 ? 'fly' : 'flies'} non-stop from ${r.from.name} (${r.from.code}) to ${listJoin(arrival)}. Schedules change by season, so we confirm the exact flight days when we quote your fare.`,
    },
    ...(months
      ? [
          {
            question: `What is the cheapest month to fly from ${r.from.city} to ${r.toCity}?`,
            answer: `Based on typical demand from Pakistan, ${listJoin(months.cheap)} are usually the cheapest months, while ${listJoin(months.expensive)} are the most expensive. These are seasonal patterns, not live prices; send us your dates for a real-time fare.`,
          },
        ]
      : []),
    {
      question: `How much baggage can I take from ${r.from.city} to ${r.toCity}?`,
      answer: `It depends on the airline and fare type. Cabin baggage: ${rows
        .filter((x) => x.detail)
        .map((x) => `${x.airline.name} ${x.detail!.cabinBag}`)
        .join('; ')}. Checked baggage for each fare type is listed in the table on this page and on each airline’s rules page.`,
    },
    ...(r.connecting.length
      ? [
          {
            question: `Are there one-stop flights from ${r.from.city} to ${r.toCity}?`,
            answer: `Yes. ${listJoin(r.connecting.map((a) => `${a.name} (via ${a.hub})`))} also sell ${r.toCity} from ${r.from.city} with a connection. A one-stop fare is sometimes cheaper than a non-stop one, especially in peak season.`,
          },
        ]
      : []),
    ...(otherOrigins.length
      ? [
          {
            question: `Can I fly to ${r.toCity} from other Pakistani cities?`,
            answer: `Yes. There are non-stop flights to ${r.toCity} from ${listJoin(otherOrigins.map((x) => x.from.city))}. Comparing a nearby departure city can lower your fare.`,
          },
        ]
      : []),
    {
      question: `How do I book a ${label} ticket with BookMyFlight?`,
      answer: `Call or WhatsApp ${siteConfig.contact.whatsappDisplay} with your dates and number of travellers, or use the search form above. Our O.S Travel & Tours ticketing team compares every airline on the route, explains the fare rules and issues your airline e-ticket after payment.`,
    },
    {
      question: 'Can I change or refund my ticket later?',
      answer: `Yes, within your fare rules. Each airline’s refund and date-change policy is summarised on its page${
        r.direct[0] ? `, for example the ${r.direct[0].name} refund policy` : ''
      }. We process reissues and refunds for tickets booked with us.`,
    },
  ];

  const tripSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': absoluteUrl(`/flights/${r.slug}`),
    name: `${label} flights`,
    url: absoluteUrl(`/flights/${r.slug}`),
    inLanguage: 'en-PK',
    about: {
      '@type': 'Trip',
      name: `${label} flights`,
      itinerary: [
        { '@type': 'Airport', name: r.from.name, iataCode: r.from.code },
        ...r.toCodes.map((c) => ({ '@type': 'Airport', name: findAirport(c)?.name, iataCode: c })),
      ],
      provider: r.direct.map((a) => ({ '@type': 'Airline', name: a.name, iataCode: a.code })),
    },
    publisher: { '@id': absoluteUrl('/#organization') },
  };

  return (
    <>
      <JsonLd schema={tripSchema} />
      <PageHero title={`Cheap flights from ${r.from.city} to ${r.toCity}`} search={{ from: r.from.code, to: r.toCodes[0] }} />

      <div className={`bpk-container ${styles.body}`}>
        <Breadcrumbs
          onDark={false}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Flights', href: '/flights' },
            { label: `${label} flights` },
          ]}
        />

        <ul className={styles.usps}>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <Plane size={20} aria-hidden />
            </span>
            {r.direct.length} non-stop airline{r.direct.length > 1 ? 's' : ''} compared for one fare
          </li>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <FileText size={20} aria-hidden />
            </span>
            Baggage, refund and date-change rules before you pay
          </li>
          <li className={styles.usp}>
            <span className={styles.uspIcon}>
              <BadgeCheck size={20} aria-hidden />
            </span>
            Official airline e-ticket from an IATA-accredited agent
          </li>
        </ul>

        {/* Key facts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{label} flights at a glance</h2>
          <p className={styles.sectionIntro}>
            {r.domestic ? 'Domestic' : 'International'} flights from {r.from.name} ({r.from.code}) to {listJoin(arrival)}
            {r.domestic ? '' : `, ${r.toCountry}`}. Non-stop service is operated by {listJoin(directNames)}.
          </p>
          <ul className={styles.stats}>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Non-stop airlines</p>
              <p className={styles.statValue}>{r.direct.length}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Departure airport</p>
              <p className={styles.statValue}>{r.from.code}</p>
            </li>
            <li className={styles.stat}>
              <p className={styles.statLabel}>Arrival airport{r.toCodes.length > 1 ? 's' : ''}</p>
              <p className={styles.statValue}>{r.toCodes.join(' · ')}</p>
            </li>
            {months && (
              <li className={styles.stat}>
                <p className={styles.statLabel}>Cheapest months</p>
                <p className={styles.statValue}>{months.cheap.slice(0, 2).join(' & ')}</p>
              </li>
            )}
            {months && (
              <li className={styles.stat}>
                <p className={styles.statLabel}>Most expensive months</p>
                <p className={styles.statValue}>{months.expensive.slice(0, 2).join(' & ')}</p>
              </li>
            )}
            <li className={styles.stat}>
              <p className={styles.statLabel}>One-stop airlines</p>
              <p className={styles.statValue}>{r.connecting.length}</p>
            </li>
            {cabinBags.length === 1 && (
              <li className={styles.stat}>
                <p className={styles.statLabel}>Cabin baggage</p>
                <p className={styles.statValue} style={{ fontSize: '1.125rem', lineHeight: '1.5rem' }}>
                  {cabinBags[0]}
                </p>
              </li>
            )}
          </ul>
        </section>

        {/* Airlines */}
        <section id="airlines" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Airlines flying non-stop from {r.from.city} to {r.toCity}
          </h2>
          <p className={styles.sectionIntro}>
            Compare cabin baggage and the cheapest and most flexible Economy fares on every non-stop airline.
          </p>
          <div className="bpk-table-wrap">
            <table className="bpk-table">
              <thead>
                <tr>
                  <th scope="col">Airline</th>
                  <th scope="col">Cabin bag</th>
                  <th scope="col">Lowest fare type</th>
                  <th scope="col">Most flexible fare type</th>
                  <th scope="col">Rules</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ airline: a, detail: d }) => {
                  const low = d?.fareFamilies[0];
                  const flex = d && d.fareFamilies.length > 1 ? d.fareFamilies[d.fareFamilies.length - 1] : undefined;
                  return (
                    <tr key={a.slug}>
                      <th scope="row">
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                          <AirlineBadge airline={a} size={28} />
                          {a.name}
                        </span>
                      </th>
                      <td>{d?.cabinBag ?? '—'}</td>
                      <td>{low ? `${low.name}: ${low.baggage}` : '—'}</td>
                      <td>{flex ? `${flex.name}: ${flex.baggage}` : '—'}</td>
                      <td>
                        <Link href={`/airlines/${a.slug}#refunds`} className="bpk-link">
                          Refund &amp; reissue
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className={styles.sources}>
            Routes and fare types from each airline’s official website, last checked {LAST_VERIFIED}. Schedules and fare
            rules can change; the conditions printed on your ticket always apply.
          </p>
        </section>

        {r.connecting.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>One-stop options to {r.toCity}</h2>
            <p className={styles.sectionIntro}>
              These airlines fly from {r.from.city} and connect to {r.toCity} through their hub, which can be cheaper at
              busy times.
            </p>
            <ul className={styles.grid4}>
              {r.connecting.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/airlines/${a.slug}`}
                    className="bpk-card bpk-card--padded"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', height: '100%' }}
                  >
                    <AirlineBadge airline={a} size={40} />
                    <span>
                      <span style={{ display: 'block', fontWeight: 700 }}>{a.name}</span>
                      <span className="text-footnote text-secondary">Via {a.hub}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {season && months && (
          <section id="fares-by-month" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              When are {r.from.city} to {r.toCity} flights cheapest?
            </h2>
            <p className={styles.sectionIntro}>
              Typical fare levels by month. Fares are usually cheapest in {listJoin(months.cheap)} and most expensive in{' '}
              {listJoin(months.expensive)}.
            </p>
            <FareSeasonChart levels={season.levels} caption="Typical fare level by month, based on seasonal demand from Pakistan (not live prices)" />
            <ul className={styles.bullets} style={{ marginTop: '1.5rem' }}>
              {Object.entries(season.notes).map(([m, note]) => (
                <li key={m}>{note}</li>
              ))}
            </ul>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to get a cheaper {label} fare</h2>
          <div className={styles.tips}>
            <div>
              <h3 className={styles.tipTitle}>Be flexible by a few days</h3>
              <p className={styles.tipBody}>
                Tuesday and Wednesday departures are usually cheaper than weekends. Moving your trip by 2–3 days can drop
                you into a lower fare class.
              </p>
            </div>
            <div>
              <h3 className={styles.tipTitle}>
                {r.direct.length > 1 ? `Compare all ${r.direct.length} airlines` : 'Compare one-stop fares'}
              </h3>
              <p className={styles.tipBody}>
                {r.direct.length > 1
                  ? `${listJoin(directNames)} price this route differently by day. We check them all for one quote.`
                  : `${directNames[0]} is the only non-stop airline, so compare one-stop fares too.`}
              </p>
            </div>
            <div>
              <h3 className={styles.tipTitle}>Check the baggage</h3>
              <p className={styles.tipBody}>
                The lowest fare types often include less checked baggage. Once a bag is added, a flexible fare can cost
                about the same.
              </p>
            </div>
            {otherOrigins.length > 0 && (
              <div>
                <h3 className={styles.tipTitle}>Try another departure city</h3>
                <p className={styles.tipBody}>
                  Non-stop flights to {r.toCity} also leave from {listJoin(otherOrigins.slice(0, 4).map((x) => x.from.city))}.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.panelDark}>
          <h2 className={styles.subTitle}>Get today’s {label} fare</h2>
          <p className="text-body" style={{ maxWidth: '44rem' }}>
            Tell us your dates and travellers. Our ticketing team compares {listJoin(directNames)} and replies with the best
            fares, baggage and change rules. Office hours: {siteConfig.hours.days}, {siteConfig.hours.weekdays}.
          </p>
          <div className={styles.ctaRow}>
            <a href={`tel:${siteConfig.contact.hotline}`} className="bpk-btn bpk-btn--primary-on-dark bpk-btn--large">
              <Phone size={20} aria-hidden /> Call {siteConfig.contact.hotlineDisplay}
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--whatsapp bpk-btn--large">
              <WhatsAppIcon size={20} /> Get fare on WhatsApp
            </a>
          </div>
        </section>

        <FaqSection id="faqs" title={`${label} flights: FAQs`} faqs={faqs} />

        {(sameOrigin.length > 0 || otherOrigins.length > 0 || r.guide) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Related flights</h2>
            <div className={styles.chipRow} style={{ marginTop: '1rem' }}>
              {r.guide && (
                <Link href={`/destinations/${r.guide}`} className="bpk-chip">
                  {r.toCity} travel guide
                </Link>
              )}
              {otherOrigins.map((x) => (
                <Link key={x.slug} href={`/flights/${x.slug}`} className="bpk-chip">
                  {routeLabel(x)}
                </Link>
              ))}
              {sameOrigin.slice(0, 12).map((x) => (
                <Link key={x.slug} href={`/flights/${x.slug}`} className="bpk-chip">
                  {routeLabel(x)}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
