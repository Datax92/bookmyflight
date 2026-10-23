import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { ExploreGrid } from '@/components/explore/ExploreGrid';
import { cheapMonths, exploreItems, nonstopOrigins, regions } from '@/lib/explore';
import { exploreFaqs } from '@/lib/faqs';
import { flightRoutes } from '@/lib/routes';
import type { SeasonProfile } from '@/lib/airline-details';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Explore Cheap Flight Destinations from Pakistan',
  description:
    'Not sure where to go? See direct flights, cheapest months and travel guides from Islamabad, Lahore, Karachi and every Pakistani airport to the Gulf, Europe and Asia.',
  path: '/explore',
});

interface Props {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

/** "ISB-DXB" -> route landing page slug */
const routePages: Record<string, string> = Object.fromEntries(
  flightRoutes.flatMap((r) => r.toCodes.map((c) => [`${r.from.code}-${c}`, r.slug])),
);

export default async function ExplorePage({ searchParams }: Props) {
  const sp = await searchParams;
  const from = typeof sp.from === 'string' ? sp.from.toUpperCase() : 'ISB';
  const seasons: SeasonProfile[] = ['gulf', 'saudi', 'europe', 'asia'];
  const cheap = Object.fromEntries(seasons.map((s) => [s, cheapMonths(s)]));

  return (
    <>
      <PageHero
        title="Explore everywhere"
        subtitle="Find where you can fly from Pakistan: direct routes, the cheapest months and travel guides in one place."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Explore' }]}
      />
      <div className={`bpk-container ${styles.body}`}>
        <section className={styles.section} aria-label="Destinations">
          <ExploreGrid items={exploreItems} regions={regions} nonstop={nonstopOrigins()} cheap={cheap} initialFrom={from} routePages={routePages} />
        </section>
        <FaqSection id="faqs" title="Exploring destinations from Pakistan: FAQs" faqs={exploreFaqs} />
      </div>
    </>
  );
}
