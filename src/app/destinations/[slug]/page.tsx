import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, PlaneLanding, Stamp } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection, type Faq } from '@/components/sections/FaqSection';
import { FareSeasonChart } from '@/components/sections/FareSeasonChart';
import { JsonLd } from '@/components/JsonLd';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { WhatsAppIcon } from '@/components/ui/icons';
import { destinations } from '@/lib/config';
import { airlines } from '@/lib/airlines';
import { seasonProfiles, type SeasonProfile } from '@/lib/airline-details';
import { getDestinationWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

const destinationCode: Record<string, string> = {
  dubai: 'DXB', istanbul: 'IST', london: 'LHR', bangkok: 'BKK', 'kuala-lumpur': 'KUL', riyadh: 'RUH',
  jeddah: 'JED', doha: 'DOH', baku: 'GYD', paris: 'CDG', makkah: 'JED',
};

const destinationSeason: Record<string, SeasonProfile> = {
  dubai: 'gulf', doha: 'gulf', riyadh: 'saudi', jeddah: 'saudi', makkah: 'saudi', istanbul: 'europe',
  london: 'europe', paris: 'europe', baku: 'europe', bangkok: 'asia', 'kuala-lumpur': 'asia',
};

function matchAirline(name: string) {
  const n = name.toLowerCase();
  return airlines.find((a) => n.includes(a.name.toLowerCase()) || (a.code === 'PK' && n.includes('pia')));
}

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = destinations.find((x) => x.id === slug);
  if (!d) return { title: 'Destination not found | BookMyFlight' };
  return {
    title: `Flights to ${d.name} from Pakistan: Airlines, Visa & Travel Guide | BookMyFlight`,
    description: `${d.description} Flight time: ${d.flightTime}. Best time to visit: ${d.bestSeason}.`,
    alternates: { canonical: `/destinations/${d.id}` },
    openGraph: { title: `Flights to ${d.name} | BookMyFlight`, description: d.description, images: [{ url: d.image }] },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const d = destinations.find((x) => x.id === slug);
  if (!d) notFound();
  const code = destinationCode[d.id];
  const season = destinationSeason[d.id] ?? 'gulf';
  const others = destinations.filter((x) => x.id !== d.id).slice(0, 6);

  const faqs: Faq[] = [
    ...d.faqs,
    { question: `How long is the flight from Pakistan to ${d.name}?`, answer: d.flightTime },
    { question: `Which airlines fly to ${d.name} from Pakistan?`, answer: `Airlines to compare include ${d.airlines.join(', ')}. Availability depends on your departure city and dates.` },
    { question: `What is the best time to visit ${d.name}?`, answer: d.bestSeason },
    { question: `What visa do I need for ${d.name}?`, answer: `${d.visaType}. Requirements change often, so our visa team confirms the latest rules before you apply.` },
    { question: `Which airport do I fly into for ${d.name}?`, answer: `${d.primaryAirports.join(', ')}.` },
    { question: `Can you arrange hotels in ${d.name}?`, answer: `Yes. Tick “Add a place to stay” in the search, or ask us on WhatsApp for hotel options in ${d.name}.` },
    { question: `How can I get the cheapest flight to ${d.name}?`, answer: 'Be flexible by a few days, avoid Eid and school holidays, compare nearby departure airports and check what baggage each fare includes.' },
  ];

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: `${d.name}, ${d.country}`,
    description: d.description,
    image: `https://bookmyflight.pk${d.image}`,
  };

  return (
    <>
      <JsonLd schema={placeSchema} />
      <PageHero
        title={`Flights to ${d.name}`}
        subtitle={d.tagline}
        search={code ? { to: code } : true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: d.name },
        ]}
      />

      <div className={`bpk-container ${styles.body}`}>
        <div className={styles.split}>
          <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: '0.75rem', overflow: 'hidden', background: '#05203c' }}>
            <Image src={d.image} alt={`${d.name}, ${d.country}`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 className={styles.sectionTitle}>
              About {d.name}, {d.country}
            </h2>
            <p className="text-body-longform" style={{ marginTop: '0.5rem' }}>
              {d.description}
            </p>
            <ul className={styles.stats} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', marginTop: '1.5rem' }}>
              <li className={styles.stat}>
                <p className={styles.statLabel} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Clock size={16} aria-hidden /> Flight time
                </p>
                <p className="text-body" style={{ marginTop: '0.25rem', fontWeight: 700 }}>
                  {d.flightTime}
                </p>
              </li>
              <li className={styles.stat}>
                <p className={styles.statLabel} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <CalendarDays size={16} aria-hidden /> Best time to visit
                </p>
                <p className="text-body" style={{ marginTop: '0.25rem', fontWeight: 700 }}>
                  {d.bestSeason}
                </p>
              </li>
              <li className={styles.stat}>
                <p className={styles.statLabel} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <PlaneLanding size={16} aria-hidden /> Airports
                </p>
                <p className="text-body" style={{ marginTop: '0.25rem', fontWeight: 700 }}>
                  {d.primaryAirports.join(', ')}
                </p>
              </li>
              <li className={styles.stat}>
                <p className={styles.statLabel} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Stamp size={16} aria-hidden /> Visa
                </p>
                <p className="text-body" style={{ marginTop: '0.25rem', fontWeight: 700 }}>
                  {d.visaType}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Airlines to {d.name}</h2>
          <ul className={styles.grid4} style={{ marginTop: '1rem' }}>
            {d.airlines.map((name) => {
              const a = matchAirline(name);
              return (
                <li key={name}>
                  {a ? (
                    <Link href={`/airlines/${a.slug}`} className="bpk-card bpk-card--padded" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <AirlineBadge airline={a} size={40} />
                      <span>
                        <span style={{ display: 'block', fontWeight: 700 }}>{a.name}</span>
                        <span className="text-footnote text-secondary">Refund &amp; baggage rules</span>
                      </span>
                    </Link>
                  ) : (
                    <div className="bpk-card bpk-card--padded" style={{ fontWeight: 700 }}>
                      {name}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>When are flights to {d.name} cheapest?</h2>
          <p className={styles.sectionIntro}>Typical fare levels from Pakistan by month.</p>
          <FareSeasonChart levels={seasonProfiles[season].levels} caption="Typical fare level by month from Pakistan (not live prices)" />
        </section>

        <div className={styles.split}>
          <section className={styles.panel}>
            <h2 className={styles.subTitle}>Highlights</h2>
            <ul className={styles.bullets} style={{ marginTop: '1rem' }}>
              {d.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
          <section className={styles.panel}>
            <h2 className={styles.subTitle}>Travel tips</h2>
            <ul className={styles.bullets} style={{ marginTop: '1rem' }}>
              {d.travelTips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className={styles.panelDark}>
          <h2 className={styles.subTitle}>Plan your {d.name} trip</h2>
          <p className="text-body" style={{ maxWidth: '44rem' }}>
            Flights, hotels and visa for {d.name} in one quote from our travel team.
          </p>
          <div className={styles.ctaRow}>
            <a href={getDestinationWhatsAppUrl(d.name, d.travelType)} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--whatsapp bpk-btn--large">
              <WhatsAppIcon size={20} /> Get a {d.name} quote
            </a>
          </div>
        </section>

        <FaqSection id="faqs" title={`Flights to ${d.name}: FAQs`} faqs={faqs} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
            More destinations
          </h2>
          <ul className={styles.grid3}>
            {others.map((o) => (
              <li key={o.id}>
                <Link href={`/destinations/${o.id}`} className="bpk-card" style={{ display: 'block', overflow: 'hidden', height: '100%' }}>
                  <span style={{ position: 'relative', display: 'block', aspectRatio: '16 / 9' }}>
                    <Image src={o.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  </span>
                  <span style={{ display: 'block', padding: '1rem' }}>
                    <span className={styles.cardTitle}>{o.name}</span>
                    <span className={styles.cardMeta} style={{ display: 'block' }}>
                      {o.country}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
