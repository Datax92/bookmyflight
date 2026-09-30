import type { MetadataRoute } from 'next';
import { destinations } from '@/lib/config';
import { blogPosts } from '@/lib/blog-data';
import { airlines } from '@/lib/airlines';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bookmyflight.pk';
  const lastModified = new Date();

  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly') => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    page('', 1.0, 'daily'),
    page('/ticketing', 0.9),
    page('/airlines', 0.9),
    page('/explore', 0.8),
    page('/partners', 0.7, 'monthly'),
    page('/blog', 0.8, 'daily'),
    page('/about', 0.6, 'monthly'),
    page('/contact', 0.7, 'monthly'),
    page('/flights', 0.8),
    page('/cheap-flights', 0.9),
    page('/flight-booking', 0.8),
    page('/flight-booking-islamabad', 0.8),
    page('/international-flights', 0.8),
    page('/international-flights-pakistan', 0.7),
    page('/domestic-flights', 0.8),
    page('/umrah', 0.9),
    page('/visa', 0.8),
    page('/hotels', 0.7),
    page('/holidays', 0.7),
    page('/destinations', 0.7),
    page('/privacy', 0.2, 'yearly'),
    page('/terms', 0.2, 'yearly'),
    page('/credits', 0.1, 'yearly'),
  ];

  const airlineRoutes = airlines.map((a) => page(`/airlines/${a.slug}`, 0.8));
  const destinationRoutes = destinations.map((d) => page(`/destinations/${d.id}`, 0.7));
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...airlineRoutes, ...destinationRoutes, ...blogRoutes];
}
