import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { BlogCard } from '@/components/blog/BlogGrid';
import { formatPostDate } from '@/lib/format';
import { WhatsAppIcon } from '@/components/ui/icons';
import { blogPosts } from '@/lib/blog-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';
import blog from '@/components/blog/Blog.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Article not found | BookMyFlight' };
  return {
    title: `${post.title} | BookMyFlight`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://bookmyflight.pk/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [{ url: `https://bookmyflight.pk${post.image}`, alt: post.title }],
    },
  };
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/^\d+\.\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://bookmyflight.pk${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { '@type': 'Organization', name: post.author, url: 'https://bookmyflight.pk' },
    publisher: {
      '@type': 'Organization',
      name: 'BookMyFlight',
      logo: { '@type': 'ImageObject', url: 'https://bookmyflight.pk/images/brand/logo.jpg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://bookmyflight.pk/blog/${post.slug}` },
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <section style={{ background: '#05203c', color: '#fff', padding: '1.5rem 0 2.5rem' }}>
        <div className={`bpk-container ${blog.articleHeader}`} style={{ maxWidth: '76.5rem' }}>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blogs', href: '/blog' },
              { label: post.category },
            ]}
          />
          <p className={blog.category} style={{ color: '#84b8ff' }}>
            {post.category}
          </p>
          <h1 className="text-heading-1" style={{ marginTop: '0.5rem', maxWidth: '50rem' }}>
            {post.title}
          </h1>
          <p className={blog.articleMeta}>
            <span>By {post.author}</span>
            <span>{formatPostDate(post.publishDate)}</span>
            <span>{post.readTime}</span>
          </p>
        </div>
      </section>

      <div className={`bpk-container ${styles.body}`}>
        <div className={blog.articleHero}>
          <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 1224px) 100vw, 1224px" style={{ objectFit: 'cover' }} />
        </div>

        <div className={blog.articleLayout}>
          <article className={blog.article}>
            <p className={blog.lead}>{post.content.intro}</p>

            {post.content.sections.length > 2 && (
              <nav aria-label="In this article" className={styles.panel} style={{ marginTop: '2rem', padding: '1.5rem' }}>
                <p className="text-heading-5">In this article</p>
                <ol className="toc-list" style={{ marginTop: '0.75rem', paddingLeft: '1.25rem', display: 'grid', gap: '0.375rem' }}>
                  {post.content.sections.map((s) => (
                    <li key={s.heading} className="text-body">
                      <a href={`#${slugify(s.heading)}`} className="bpk-link-implicit">
                        {s.heading.replace(/^\d+\.\s*/, '')}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="bpk-prose">
              {post.content.sections.map((s) => (
                <section key={s.heading}>
                  <h2 id={slugify(s.heading)} style={{ scrollMarginTop: '1rem' }}>
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} style={{ marginTop: '1rem' }}>
                      {p}
                    </p>
                  ))}
                  {s.bulletPoints && (
                    <ul style={{ marginTop: '1rem' }}>
                      {s.bulletPoints.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
              <h2>Summary</h2>
              <p>{post.content.conclusion}</p>
            </div>

            <div className={blog.authorBox}>
              <span className={blog.authorAvatar}>
                <Image src="/images/brand/logo-mark-white.png" alt="" width={28} height={26} />
              </span>
              <div>
                <p className="text-heading-5">{post.author}</p>
                <p className="text-footnote" style={{ marginTop: '0.25rem' }}>
                  Written by the ticketing and visa team at{' '}
                  <a href="https://ostravels.com/" target="_blank" rel="noopener" className="bpk-link">
                    O.S Travel &amp; Tours
                  </a>
                  , Blue Area, Islamabad, which books flights, Umrah and visas for travellers across Pakistan. Read more
                  guides on the{' '}
                  <a href="https://ostravels.com/blog/" target="_blank" rel="noopener" className="bpk-link">
                    O.S Travel blog
                  </a>
                  .
                </p>
              </div>
            </div>
          </article>

          <aside className={blog.sidebar} aria-label="Book with BookMyFlight">
            <div className={styles.panelDark} style={{ padding: '1.5rem' }}>
              <p className="text-heading-4">Planning this trip?</p>
              <p className="text-footnote" style={{ marginTop: '0.5rem' }}>
                Get live fares, baggage and refund rules from our ticketing team.
              </p>
              <a
                href={getWhatsAppUrl(post.whatsappCta)}
                target="_blank"
                rel="noopener noreferrer"
                className="bpk-btn bpk-btn--whatsapp bpk-btn--full"
                style={{ marginTop: '1rem' }}
              >
                <WhatsAppIcon size={18} /> Ask on WhatsApp
              </a>
            </div>
            <Link href={post.commercialLink.href} className="bpk-card bpk-card--padded" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', fontWeight: 700 }}>
              {post.commercialLink.label}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link href="/airlines" className="bpk-card bpk-card--padded" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', fontWeight: 700 }}>
              Airline refund &amp; reissue rules
              <ArrowRight size={18} aria-hidden />
            </Link>
          </aside>
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <FaqSection id="faqs" title="Frequently asked questions" faqs={post.faqs} columns={post.faqs.length > 3 ? 2 : 1} />
        )}

        <section className={styles.section} aria-labelledby="related">
          <h2 id="related" className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
            Keep reading
          </h2>
          <ul className={styles.grid3}>
            {related.map((p) => (
              <li key={p.slug}>
                <BlogCard post={p} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
