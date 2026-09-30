'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { airports } from '@/lib/airports';
import type { ExploreItem, Region } from '@/lib/explore';
import styles from './Explore.module.css';

const origins = airports.filter((a) => a.pk && a.popular);

export function ExploreGrid({
  items,
  regions,
  nonstop,
  cheap,
  initialFrom,
}: {
  items: ExploreItem[];
  regions: Region[];
  nonstop: Record<string, string[]>;
  cheap: Record<string, string[]>;
  initialFrom: string;
}) {
  const [from, setFrom] = useState(origins.some((o) => o.code === initialFrom) ? initialFrom : 'ISB');
  const [region, setRegion] = useState<Region | 'All'>('All');
  const [directOnly, setDirectOnly] = useState(false);

  const shown = useMemo(
    () =>
      items.filter(
        (it) => (region === 'All' || it.region === region) && (!directOnly || nonstop[it.code]?.includes(from)),
      ),
    [items, region, directOnly, from, nonstop],
  );

  return (
    <div>
      <div className={styles.controls}>
        <label className={styles.fromLabel}>
          <span className="bpk-label">Flying from</span>
          <select className="bpk-select" value={from} onChange={(e) => setFrom(e.target.value)}>
            {origins.map((o) => (
              <option key={o.code} value={o.code}>
                {o.city} ({o.code})
              </option>
            ))}
          </select>
        </label>
        <div className={styles.chips} role="group" aria-label="Filter by region">
          {(['All', ...regions] as const).map((r) => (
            <button key={r} type="button" className="bpk-chip" aria-pressed={region === r} onClick={() => setRegion(r)}>
              {r}
            </button>
          ))}
          <label className="bpk-checkbox" style={{ marginLeft: '0.5rem', alignSelf: 'center' }}>
            <input type="checkbox" checked={directOnly} onChange={(e) => setDirectOnly(e.target.checked)} />
            Non-stop only
          </label>
        </div>
      </div>

      <p className="text-footnote text-secondary" style={{ margin: '1rem 0' }} aria-live="polite">
        {shown.length} destination{shown.length === 1 ? '' : 's'} from {origins.find((o) => o.code === from)?.city}
      </p>

      <ul className={styles.grid}>
        {shown.map((it) => {
          const direct = nonstop[it.code]?.includes(from);
          const href = `/search?trip=return&from=${from}&to=${it.code}`;
          return (
            <li key={it.code}>
              <article className={`bpk-card ${styles.card}`}>
                <Link href={href} className={styles.media} aria-label={`Flights from ${from} to ${it.city}`}>
                  {it.image ? (
                    <Image src={it.image} alt={`${it.city}, ${it.country}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className={styles.img} />
                  ) : (
                    <span className={styles.placeholder}>{it.code}</span>
                  )}
                  <span className={`${styles.stopBadge} ${direct ? styles.direct : ''}`}>{direct ? 'Direct' : '1+ stops'}</span>
                </Link>
                <div className={styles.content}>
                  <h3 className={styles.city}>
                    <Link href={href} className="bpk-link-implicit">
                      {it.city}
                    </Link>
                  </h3>
                  <p className={styles.country}>{it.country}</p>
                  <p className={styles.blurb}>{it.blurb}</p>
                  <p className={styles.cheap}>
                    Cheapest months: <strong>{(cheap[it.season] ?? []).slice(0, 3).join(', ')}</strong>
                  </p>
                  <div className={styles.actions}>
                    <Link href={href} className="bpk-btn bpk-btn--featured">
                      Get fares
                    </Link>
                    {it.href && (
                      <Link href={it.href} className="bpk-btn bpk-btn--secondary">
                        Travel guide
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
