import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { AccordionItem } from '@/components/ui/Accordion';
import { osTravelsLinks } from '@/lib/config';
import styles from './Home.module.css';

/** "Our international sites" equivalent: the O.S Travel & Tours association with backlinks. */
export function AssociatedSites({ defaultOpen = false }: { defaultOpen?: boolean }) {
  return (
    <section aria-label="Associated with O.S Travel & Tours">
      <AccordionItem title="Associated with O.S Travel & Tours" headingLevel={2} large defaultOpen={defaultOpen}>
        <p className={`text-body ${styles.sitesIntro}`} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <Image
            src="/images/brand/os-travels-logo.png"
            alt="O.S Travel & Tours logo"
            width={48}
            height={48}
            style={{ flexShrink: 0, borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 #25201f4d', background: '#fff' }}
          />
          <span>
            BookMyFlight is the online flight desk of{' '}
            <a href="https://ostravels.com/" target="_blank" rel="noopener">
              O.S Travel &amp; Tours
            </a>
            , a government-licensed (DTS) travel agency in Blue Area, Islamabad with 10+ years of air ticketing,
            visa and Umrah experience. Every ticket you request here is issued by the O.S Travel &amp; Tours
            ticketing team.
          </span>
        </p>
        <ul className={styles.sitesGrid} style={{ listStyle: 'none' }}>
          {osTravelsLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener" className={`bpk-card ${styles.siteCard}`}>
                <span className={styles.siteName}>
                  {l.label} <ExternalLink size={14} aria-hidden />
                </span>
                <span className={styles.siteNote}>{l.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </section>
  );
}
