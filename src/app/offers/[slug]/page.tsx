import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { WhatsAppIcon } from '@/components/ui/icons';
import { campaignOffers } from '@/lib/offers-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return campaignOffers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const o = campaignOffers.find((x) => x.slug === slug);
  if (!o) return { title: 'Offer not found | BookMyFlight' };
  return {
    title: `${o.title} | BookMyFlight`,
    description: o.description,
    alternates: { canonical: `/offers/${o.slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function OfferPage({ params }: Props) {
  const { slug } = await params;
  const o = campaignOffers.find((x) => x.slug === slug);
  if (!o) notFound();
  const others = campaignOffers.filter((x) => x.slug !== o.slug);

  return (
    <>
      <PageHero
        title={o.title}
        subtitle={o.subtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Offers', href: '/offers' },
          { label: o.badge },
        ]}
      />
      <div className={`bpk-container ${styles.body}`}>
        <div className={styles.split}>
          <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: '0.75rem', overflow: 'hidden' }}>
            <Image src={o.image} alt={o.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <span className={`${styles.badge} ${styles.badgeBlue}`}>{o.badge}</span>
            <p className="text-body-longform" style={{ marginTop: '1rem' }}>
              {o.description}
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem', marginTop: '1.5rem' }}>
              {o.benefits.map((b) => (
                <li key={b} style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="#0c838a" aria-hidden style={{ flexShrink: 0, marginTop: 2 }} />
                  <span className="text-body">{b}</span>
                </li>
              ))}
            </ul>
            <div className={styles.ctaRow}>
              <a href={getWhatsAppUrl(o.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--whatsapp bpk-btn--large">
                <WhatsAppIcon size={20} /> {o.ctaText}
              </a>
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
            More offers
          </h2>
          <ul className={styles.grid3}>
            {others.map((x) => (
              <li key={x.slug}>
                <Link href={`/offers/${x.slug}`} className="bpk-card bpk-card--padded" style={{ display: 'block', height: '100%' }}>
                  <span className={styles.cardTitle}>{x.title}</span>
                  <span className={styles.cardMeta} style={{ display: 'block' }}>
                    {x.subtitle}
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
