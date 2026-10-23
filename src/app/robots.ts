import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// AI search and answer engines. Allowing them lets BookMyFlight be cited in
// ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews answers.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  // Never block /_next/: Google needs the CSS and JS to render pages.
  // Offer and search pages stay crawlable so crawlers can see their noindex tag.
  const disallow = ['/api/'];

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      { userAgent: aiCrawlers, allow: '/', disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
