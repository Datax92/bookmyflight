import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { imageCredits } from '@/lib/image-credits';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'Photo Credits | BookMyFlight',
  description: 'Credits and licences for Creative Commons photographs used on BookMyFlight.',
  alternates: { canonical: '/credits' },
};

export default function CreditsPage() {
  return (
    <>
      <PageHero
        title="Photo credits"
        subtitle="Some photographs on this website are used under Creative Commons licences. We thank the photographers below."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Photo credits' }]}
      />
      <div className={`bpk-container ${styles.body}`}>
        <ul className={styles.grid3}>
          {imageCredits.map((c) => (
            <li key={c.file} className="bpk-card" style={{ overflow: 'hidden' }}>
              <span style={{ position: 'relative', display: 'block', aspectRatio: '16 / 10' }}>
                <Image src={c.file} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </span>
              <span style={{ display: 'block', padding: '1rem' }}>
                <span className="text-heading-5" style={{ display: 'block' }}>
                  <a href={c.source} target="_blank" rel="noopener nofollow" className="bpk-link-implicit">
                    {c.title}
                  </a>
                </span>
                <span className="text-footnote" style={{ display: 'block', marginTop: '0.25rem' }}>
                  by {c.creator} ·{' '}
                  <a href={c.licenseUrl} target="_blank" rel="noopener nofollow license" className="bpk-link">
                    {c.license}
                  </a>
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-footnote text-secondary">
          Images were resized for web use. All other photographs and graphics belong to BookMyFlight and O.S Travel &amp;
          Tours. Airline names are used only to identify carriers.
        </p>
      </div>
    </>
  );
}
