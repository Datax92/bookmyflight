import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bookmyflight.pk';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/offers/', // Paid campaign / promotional landing pages (marked noindex)
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
