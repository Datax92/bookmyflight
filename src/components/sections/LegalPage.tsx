import { PageHero } from './PageHero';
import styles from './Page.module.css';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero title={title} subtitle={`Last updated ${updated}`} breadcrumbs={[{ label: 'Home', href: '/' }, { label: title }]} />
      <div className={`bpk-container ${styles.body}`}>
        <article className="bpk-prose" style={{ maxWidth: '46rem' }}>
          <p className="text-body-longform">{intro}</p>
          {sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} style={{ marginTop: '1rem' }}>
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul style={{ marginTop: '1rem' }}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
