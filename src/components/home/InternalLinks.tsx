'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Home.module.css';

export interface LinkGroup {
  label: string;
  links: { label: string; href: string }[];
}

const PER_SLIDE = 24; // 6 columns x 4 rows, as on Skyscanner

export function InternalLinks({ title, groups }: { title: string; groups: LinkGroup[] }) {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);
  const links = groups[tab]?.links ?? [];
  const pages = Math.max(1, Math.ceil(links.length / PER_SLIDE));
  const slides = Array.from({ length: pages }, (_, i) => links.slice(i * PER_SLIDE, (i + 1) * PER_SLIDE));

  return (
    <section aria-labelledby="internal-links-title">
      <div className={styles.linksHeader}>
        <h2 id="internal-links-title" className="text-heading-3">
          {title}
        </h2>
        <div className={styles.linkTabs} role="tablist" aria-label={title}>
          {groups.map((g, i) => (
            <button
              key={g.label}
              type="button"
              role="tab"
              aria-selected={tab === i}
              className={`bpk-chip ${styles.linkTab}`}
              onClick={() => {
                setTab(i);
                setPage(0);
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.carousel} role="tabpanel">
        <div className={styles.track} style={{ transform: `translateX(-${page * 100}%)` }}>
          {slides.map((slide, i) => (
            <ul key={i} className={styles.slide} aria-hidden={i !== page} style={{ listStyle: 'none' }}>
              {slide.map((l) => (
                <li key={l.href + l.label} className={styles.slideLink}>
                  <Link href={l.href} tabIndex={i === page ? 0 : -1}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <div className={styles.pager}>
          <button
            type="button"
            className={styles.pagerArrow}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous links"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1} of ${pages}`}
                aria-current={i === page}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.pagerArrow}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            disabled={page === pages - 1}
            aria-label="Next links"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </section>
  );
}
