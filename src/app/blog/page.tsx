import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { BlogGrid, type BlogCardData } from '@/components/blog/BlogGrid';
import { formatPostDate } from '@/lib/format';
import { WhatsAppIcon } from '@/components/ui/icons';
import { blogPosts } from '@/lib/blog-data';
import { blogFaqs } from '@/lib/faqs';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';
import blog from '@/components/blog/Blog.module.css';

export const metadata: Metadata = {
  title: 'Travel Blog: Flight Guides, Airline Refund Rules & Umrah Tips for Pakistan | BookMyFlight',
  description:
    'Guides for travellers from Pakistan: airline refund and reissue rules, cheapest months to fly, UK and Umrah flight tips, low-cost airline comparisons and travel checklists.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'BookMyFlight Travel Blog',
    description: 'Practical flight and travel guides for travellers from Pakistan.',
    url: 'https://bookmyflight.pk/blog',
    type: 'website',
  },
};

export default function BlogHubPage() {
  const [featured, ...rest] = blogPosts;
  const cards: BlogCardData[] = rest.map(({ slug, title, excerpt, category, readTime, publishDate, image }) => ({
    slug,
    title,
    excerpt,
    category,
    readTime,
    publishDate,
    image,
  }));
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <>
      <PageHero
        title="Travel blog"
        subtitle="Flight guides, airline rules and travel tips for travellers from Pakistan, written by our ticketing and visa team."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs' }]}
      />

      <div className={`bpk-container ${styles.body}`}>
        <article className={`bpk-card ${blog.featured}`}>
          <Link href={`/blog/${featured.slug}`} className={blog.featuredMedia} tabIndex={-1} aria-hidden>
            <Image src={featured.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
          </Link>
          <div className={blog.featuredContent}>
            <span className={blog.category}>Latest · {featured.category}</span>
            <h2 className={blog.featuredTitle}>
              <Link href={`/blog/${featured.slug}`} className="bpk-link-implicit">
                {featured.title}
              </Link>
            </h2>
            <p className="text-body" style={{ marginTop: '0.75rem' }}>
              {featured.excerpt}
            </p>
            <p className={blog.meta}>
              {formatPostDate(featured.publishDate)} · {featured.readTime}
            </p>
            <div className={styles.ctaRow}>
              <Link href={`/blog/${featured.slug}`} className="bpk-btn bpk-btn--featured">
                Read the guide
              </Link>
            </div>
          </div>
        </article>

        <section className={styles.section} aria-labelledby="all-articles">
          <h2 id="all-articles" className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
            All articles
          </h2>
          <BlogGrid posts={cards} categories={categories} />
        </section>

        <section className={styles.panelDark}>
          <h2 className={styles.subTitle}>Have a travel question?</h2>
          <p className="text-body" style={{ maxWidth: '44rem' }}>
            Ask our travel desk about fares, baggage, visas or refunds and get a reply from a real consultant.
          </p>
          <div className={styles.ctaRow}>
            <a
              href={getWhatsAppUrl('Hello BookMyFlight travel desk, I have a question.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bpk-btn bpk-btn--whatsapp bpk-btn--large"
            >
              <WhatsAppIcon size={20} /> Ask on WhatsApp
            </a>
          </div>
        </section>

        <FaqSection id="faqs" title="Travel blog FAQs" faqs={blogFaqs} />
      </div>
    </>
  );
}
