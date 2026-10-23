import type { MetadataRoute } from 'next';
import { destinations } from '@/lib/config';
import { blogPosts } from '@/lib/blog-data';
import { airlines } from '@/lib/airlines';
import { LAST_VERIFIED } from '@/lib/airline-details';
import { flightRoutes } from '@/lib/routes';
import { SITE_URL } from '@/lib/seo';

// Real "last changed" dates. Google ignores lastmod values that change on every
// build, so pages only carry a date when their content actually changed.
const SITE_UPDATED = new Date('2026-10-23');
const AIRLINE_DATA_UPDATED = new Date(`${LAST_VERIFIED} UTC`);

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly',
    lastModified: Date = SITE_UPDATED,
    images?: string[],
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
    ...(images ? { images: images.map((src) => `${SITE_URL}${src}`) } : {}),
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    page('', 1.0, 'daily'),
    page('/ticketing', 0.9),
    page('/airlines', 0.9, 'weekly', AIRLINE_DATA_UPDATED),
    page('/flights', 0.9),
    page('/cheap-flights', 0.9),
    page('/umrah', 0.9),
    page('/explore', 0.8),
    page('/blog', 0.8, 'daily'),
    page('/flight-booking', 0.8),
    page('/flight-booking-islamabad', 0.8),
    page('/international-flights', 0.8),
    page('/domestic-flights', 0.8),
    page('/visa', 0.8),
    page('/international-flights-pakistan', 0.7),
    page('/destinations', 0.7),
    page('/hotels', 0.7),
    page('/holidays', 0.7),
    page('/offers', 0.6),
    page('/partners', 0.6, 'monthly'),
    page('/contact', 0.7, 'monthly'),
    page('/about', 0.6, 'monthly'),
    page('/privacy', 0.2, 'yearly'),
    page('/terms', 0.2, 'yearly'),
    page('/credits', 0.1, 'yearly'),
  ];

  const routePages = flightRoutes.map((r) =>
    page(`/flights/${r.slug}`, r.direct.length > 2 ? 0.8 : 0.7, 'weekly', AIRLINE_DATA_UPDATED),
  );
  const airlinePages = airlines.map((a) =>
    page(`/airlines/${a.slug}`, 0.8, 'weekly', AIRLINE_DATA_UPDATED, [a.logo]),
  );
  const destinationPages = destinations.map((d) => page(`/destinations/${d.id}`, 0.7, 'monthly', SITE_UPDATED, [d.image]));
  const blogPages = blogPosts.map((post) =>
    page(`/blog/${post.slug}`, 0.6, 'monthly', new Date(post.publishDate), [post.image]),
  );

  return [...staticRoutes, ...routePages, ...airlinePages, ...destinationPages, ...blogPages];
}
