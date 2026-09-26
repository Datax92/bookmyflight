import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { blogPosts } from '@/lib/blog-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found — BookMyFlight',
    };
  }

  return {
    title: `${post.title} | BookMyFlight Travel Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `https://bookmyflight.pk/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://bookmyflight.pk/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: `https://bookmyflight.pk${post.image}`,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://bookmyflight.pk${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://bookmyflight.pk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BookMyFlight',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bookmyflight.pk/images/brand/logo.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bookmyflight.pk/blog/${post.slug}`,
    },
  };

  const faqSchema = post.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd schema={articleSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}

      {/* Hero Header */}
      <section
        style={{
          background: 'var(--color-charcoal)',
          paddingTop: 'clamp(100px, 14vw, 150px)',
          paddingBottom: 'clamp(50px, 8vw, 80px)',
          position: 'relative',
        }}
      >
        <div className="container-premium" style={{ maxWidth: 900 }}>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <AnimateIn>
            <div>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(201,169,110,0.15)',
                  color: 'var(--color-champagne)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: 2,
                  marginBottom: 16,
                }}
              >
                {post.category}
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 4.5vw, 48px)',
                  color: 'white',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                {post.title}
              </h1>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                <span>By {post.author}</span>
                <span>•</span>
                <span>Published {post.publishDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium" style={{ maxWidth: 840 }}>
          {/* Main Article Image */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '16/9',
              maxHeight: 460,
              overflow: 'hidden',
              borderRadius: 2,
              marginBottom: 48,
            }}
            className="image-reveal"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 840px"
            />
          </div>

          {/* Intro Box */}
          <div
            style={{
              background: 'white',
              borderLeft: '4px solid var(--color-champagne)',
              padding: 'clamp(20px, 4vw, 32px)',
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              color: 'var(--color-charcoal)',
              lineHeight: 1.8,
              marginBottom: 48,
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}
          >
            {post.content.intro}
          </div>

          {/* Article Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginBottom: 56 }}>
            {post.content.sections.map((section) => (
              <div key={section.heading}>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(22px, 3.2vw, 30px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 16,
                    lineHeight: 1.25,
                  }}
                >
                  {section.heading}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx} style={{ fontSize: 16, color: 'var(--color-warm-gray-dark)', lineHeight: 1.8 }}>
                      {p}
                    </p>
                  ))}
                  {section.bulletPoints && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 8, marginTop: 8 }}>
                      {section.bulletPoints.map((bp) => (
                        <li key={bp} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: 'var(--color-warm-gray-dark)', lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--color-champagne)', fontSize: 16 }}>✓</span>
                          {bp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion & Direct WhatsApp Conversion Box */}
          <div
            style={{
              background: 'var(--color-charcoal)',
              color: 'white',
              padding: 'clamp(28px, 5vw, 44px)',
              borderRadius: 2,
              marginBottom: 56,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 22,
                color: 'var(--color-champagne)',
                marginBottom: 12,
              }}
            >
              Summary & Consultant Advice
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 24 }}>
              {post.content.conclusion}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a
                href={getWhatsAppUrl(post.whatsappCta)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: 14 }}
              >
                Inquire on WhatsApp
              </a>
              <Link href={post.commercialLink.href} className="btn-secondary" style={{ fontSize: 14 }}>
                {post.commercialLink.label} →
              </Link>
            </div>
          </div>

          {/* Article FAQs if available */}
          {post.faqs && post.faqs.length > 0 && (
            <div style={{ marginBottom: 56 }}>
              <div className="section-label">Common Inquiries</div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 26,
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                Frequently Asked Questions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {post.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    style={{
                      background: 'white',
                      border: '1px solid rgba(0,0,0,0.06)',
                      padding: 24,
                    }}
                  >
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'var(--color-charcoal)', marginBottom: 8 }}>
                      {faq.question}
                    </h4>
                    <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 48 }}>
              <div className="section-label">Continue Reading</div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 24,
                  color: 'var(--color-charcoal)',
                  marginBottom: 24,
                }}
              >
                Related Travel Guides
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="card-interactive"
                    style={{ textDecoration: 'none', padding: 20, background: 'white' }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-champagne-dark)', textTransform: 'uppercase', marginBottom: 6 }}>
                      {rp.category}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'var(--color-charcoal)', marginBottom: 8 }}>
                      {rp.title}
                    </h4>
                    <p style={{ fontSize: 13, color: 'var(--color-warm-gray)', lineHeight: 1.6 }}>
                      {rp.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
