import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { ExploreGrid } from '@/components/explore/ExploreGrid';
import { cheapMonths, exploreItems, nonstopOrigins, regions } from '@/lib/explore';
import { exploreFaqs } from '@/lib/faqs';
import type { SeasonProfile } from '@/lib/airline-details';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'Explore Everywhere: Cheap Flight Destinations from Pakistan | BookMyFlight',
  description:
    'Not sure where to go? Explore destinations from Islamabad, Lahore, Karachi and other Pakistani airports: direct flights, cheapest months and travel guides for the Gulf, Saudi Arabia, Europe and Asia.',
  alternates: { canonical: '/explore' },
};

interface Props {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

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
          <ExploreGrid items={exploreItems} regions={regions} nonstop={nonstopOrigins()} cheap={cheap} initialFrom={from} />
        </section>
        <FaqSection id="faqs" title="Exploring destinations from Pakistan: FAQs" faqs={exploreFaqs} />
      </div>
    </>
  );
}
