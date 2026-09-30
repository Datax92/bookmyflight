import { SearchWidget } from '@/components/search/SearchWidget';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/Breadcrumbs';
import type { FlightSearch } from '@/lib/search';
import styles from './Page.module.css';

/** Dark hero that continues the header, like Skyscanner's airline and route pages. */
export function PageHero({
  title,
  subtitle,
  search,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  /** Show the flight search widget; pass an object to prefill it */
  search?: boolean | Partial<FlightSearch>;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}) {
  return (
    <section className={styles.hero}>
      <div className="bpk-container">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <h1 className={`${styles.heroTitle} bmf-enter`}>{title}</h1>
        {subtitle && <p className={`${styles.heroSubtitle} bmf-enter bmf-enter-1`}>{subtitle}</p>}
        {search && (
          <div className={`${styles.heroSearch} bmf-enter bmf-enter-2`}>
            <SearchWidget initial={typeof search === 'object' ? search : undefined} />
          </div>
        )}
        {children && <div className={styles.heroChildren}>{children}</div>}
      </div>
    </section>
  );
}
