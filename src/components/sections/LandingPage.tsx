import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from './PageHero';
import { FaqSection, type Faq } from './FaqSection';
import { WhatsAppIcon } from '@/components/ui/icons';
import { findAirport } from '@/lib/airports';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import type { FlightSearch } from '@/lib/search';
import styles from './Page.module.css';

export interface CardItem {
  title: string;
  body?: string;
  meta?: string;
  badge?: string;
  bullets?: string[];
  href?: string;
  /** Opens href in a new tab (outbound link) */
  external?: boolean;
  image?: string;
  whatsapp?: string; // pre-filled WhatsApp message
  cta?: string;
}

export type Block =
  | { type: 'text'; title?: string; paragraphs: string[] }
  | { type: 'cards'; title: string; intro?: string; cols?: 2 | 3 | 4; items: CardItem[]; id?: string }
  | { type: 'steps'; title: string; intro?: string; items: { title: string; body: string }[] }
  | { type: 'table'; title: string; intro?: string; columns: string[]; rows: string[][]; note?: string }
  | { type: 'bullets'; title: string; intro?: string; items: string[]; panel?: boolean }
  | { type: 'routes'; title: string; intro?: string; pairs: [string, string][] }
  | { type: 'links'; title: string; items: { label: string; href: string }[] }
  | { type: 'cta'; title: string; body: string; whatsapp: string; button?: string };

export interface LandingData {
  hero: {
    title: string;
    subtitle?: string;
    search?: boolean | Partial<FlightSearch>;
    breadcrumb: string;
  };
  blocks: Block[];
  faqTitle: string;
  faqs: Faq[];
}

function CardGrid({ items, cols = 3 }: { items: CardItem[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 4 ? styles.grid4 : cols === 2 ? styles.grid2 : styles.grid3;
  return (
    <ul className={grid}>
      {items.map((it) => {
        const content = (
          <>
            {it.image && (
              <span style={{ position: 'relative', display: 'block', aspectRatio: '16 / 10', margin: '-1rem -1rem 1rem', overflow: 'hidden', borderRadius: '0.75rem 0.75rem 0 0' }}>
                <Image src={it.image} alt={it.title} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </span>
            )}
            {it.badge && <span className={`${styles.badge} ${styles.badgeBlue}`} style={{ marginBottom: '0.75rem', width: 'fit-content' }}>{it.badge}</span>}
            <span className={styles.cardTitle}>{it.title}</span>
            {it.meta && <span className={styles.cardMeta}>{it.meta}</span>}
            {it.body && <span className={styles.cardBody}>{it.body}</span>}
            {it.bullets && (
              <ul className={styles.bullets} style={{ marginTop: '0.75rem', gap: '0.5rem' }}>
                {it.bullets.map((b) => (
                  <li key={b} style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {(it.href || it.whatsapp) && (
              <span className={styles.cardFooter} style={{ marginTop: 'auto', paddingTop: '1rem', color: it.whatsapp && !it.href ? '#128c7e' : '#0062e3' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  {it.whatsapp && !it.href && <WhatsAppIcon size={16} />}
                  {it.cta ?? (it.href ? 'Learn more' : 'Ask on WhatsApp')}
                </span>
                <ArrowRight size={16} aria-hidden />
              </span>
            )}
          </>
        );
        const cardStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' };
        return (
          <li key={it.title}>
            {it.href && it.external ? (
              <a href={it.href} target="_blank" rel="noopener" className="bpk-card bpk-card--padded" style={cardStyle}>
                {content}
              </a>
            ) : it.href ? (
              <Link href={it.href} className="bpk-card bpk-card--padded" style={cardStyle}>
                {content}
              </Link>
            ) : it.whatsapp ? (
              <a href={getWhatsAppUrl(it.whatsapp)} target="_blank" rel="noopener noreferrer" className="bpk-card bpk-card--padded" style={cardStyle}>
                {content}
              </a>
            ) : (
              <div className="bpk-card bpk-card--padded" style={cardStyle}>
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case 'text':
      return (
        <section key={i} className={styles.section}>
          {b.title && <h2 className={styles.sectionTitle}>{b.title}</h2>}
          <div className="bpk-prose" style={{ maxWidth: '50rem' }}>
            {b.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>
      );
    case 'cards':
      return (
        <section key={i} id={b.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{b.title}</h2>
          {b.intro ? <p className={styles.sectionIntro}>{b.intro}</p> : <div style={{ height: '1rem' }} />}
          <CardGrid items={b.items} cols={b.cols} />
        </section>
      );
    case 'steps':
      return (
        <section key={i} className={styles.section}>
          <h2 className={styles.sectionTitle}>{b.title}</h2>
          {b.intro ? <p className={styles.sectionIntro}>{b.intro}</p> : <div style={{ height: '1rem' }} />}
          <ol className={styles.grid3} style={{ listStyle: 'none', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))' }}>
            {b.items.map((s, n) => (
              <li key={s.title} className={styles.panel} style={{ padding: '1.5rem' }}>
                <span className={`${styles.badge} ${styles.badgeBlue}`}>Step {n + 1}</span>
                <h3 className="text-heading-4" style={{ marginTop: '0.75rem' }}>
                  {s.title}
                </h3>
                <p className="text-body" style={{ marginTop: '0.5rem' }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>
      );
    case 'table':
      return (
        <section key={i} className={styles.section}>
          <h2 className={styles.sectionTitle}>{b.title}</h2>
          {b.intro ? <p className={styles.sectionIntro}>{b.intro}</p> : <div style={{ height: '1rem' }} />}
          <div className="bpk-table-wrap">
            <table className="bpk-table">
              <thead>
                <tr>
                  {b.columns.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r) => (
                  <tr key={r.join('|')}>
                    {r.map((cell, ci) =>
                      ci === 0 ? (
                        <th key={ci} scope="row">
                          {cell}
                        </th>
                      ) : (
                        <td key={ci}>{cell}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note && (
            <p className="text-footnote text-secondary" style={{ marginTop: '0.75rem' }}>
              {b.note}
            </p>
          )}
        </section>
      );
    case 'bullets':
      return (
        <section key={i} className={`${styles.section} ${b.panel ? styles.panel : ''}`}>
          <h2 className={b.panel ? styles.subTitle : styles.sectionTitle}>{b.title}</h2>
          {b.intro && <p className={styles.sectionIntro}>{b.intro}</p>}
          <ul className={styles.bullets} style={{ marginTop: '1rem', columns: b.items.length > 6 ? 2 : 1 }}>
            {b.items.map((it) => (
              <li key={it} style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                {it}
              </li>
            ))}
          </ul>
        </section>
      );
    case 'routes':
      return (
        <section key={i} className={styles.section}>
          <h2 className={styles.sectionTitle}>{b.title}</h2>
          {b.intro ? <p className={styles.sectionIntro}>{b.intro}</p> : <div style={{ height: '1rem' }} />}
          <ul className={styles.grid4}>
            {b.pairs.map(([f, t]) => {
              const a = findAirport(f);
              const z = findAirport(t);
              return (
                <li key={f + t}>
                  <Link href={`/search?trip=return&from=${f}&to=${t}`} className="bpk-card bpk-card--padded" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <span className={styles.cardTitle}>
                      {a?.city ?? f} → {z?.city ?? t}
                    </span>
                    <span className={styles.cardMeta}>
                      {f} – {t} · {z?.country}
                    </span>
                    <span className={styles.cardFooter} style={{ color: '#0062e3' }}>
                      Get fare <ArrowRight size={16} aria-hidden />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      );
    case 'links':
      return (
        <section key={i} className={styles.section}>
          <h2 className={styles.subTitle}>{b.title}</h2>
          <div className={styles.chipRow} style={{ marginTop: '1rem' }}>
            {b.items.map((l) => (
              <Link key={l.href} href={l.href} className="bpk-chip">
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      );
    case 'cta':
      return (
        <section key={i} className={styles.panelDark}>
          <h2 className={styles.subTitle}>{b.title}</h2>
          <p className="text-body" style={{ maxWidth: '44rem' }}>
            {b.body}
          </p>
          <div className={styles.ctaRow}>
            <a href={getWhatsAppUrl(b.whatsapp)} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--whatsapp bpk-btn--large">
              <WhatsAppIcon size={20} /> {b.button ?? 'Chat on WhatsApp'}
            </a>
            <Link href="/contact" className="bpk-btn bpk-btn--primary-on-dark bpk-btn--large">
              Contact us
            </Link>
          </div>
        </section>
      );
  }
}

export function LandingPage({ data }: { data: LandingData }) {
  return (
    <>
      <PageHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        search={data.hero.search}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: data.hero.breadcrumb }]}
      />
      <div className={`bpk-container ${styles.body}`}>
        {data.blocks.map(renderBlock)}
        <FaqSection id="faqs" title={data.faqTitle} faqs={data.faqs} />
      </div>
    </>
  );
}
