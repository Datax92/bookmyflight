import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { blogPosts } from '@/lib/blog-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Travel Blog & Flight Insights — Pakistan Travel Guide | BookMyFlight',
  description:
    'Expert flight booking guides, destination advice, baggage rules, visa tips, and Umrah travel planning for Pakistani travelers. Written by BookMyFlight travel specialists.',
  alternates: {
    canonical: 'https://bookmyflight.pk/blog',
  },
  openGraph: {
    title: 'Travel Blog & Flight Advice | BookMyFlight',
    description:
      'Genuinely helpful travel guides and flight insights for international travelers from Pakistan.',
    url: 'https://bookmyflight.pk/blog',
    type: 'website',
  },
};

export default function BlogHubPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--color-charcoal)',
          paddingTop: 'clamp(100px, 14vw, 150px)',
          paddingBottom: 'clamp(50px, 8vw, 80px)',
          position: 'relative',
        }}
      >
        <div className="container-premium">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Travel Blog' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Travel Knowledge Hub</div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  color: 'white',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Travel Guides, Tips & <span style={{ color: 'var(--color-champagne)' }}>Flight Insights</span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Factual, practical travel guidance written specifically for Pakistani travelers. Learn how to secure better flight fares, navigate airport regulations, and prepare for international journeys.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight editorial team, I have a travel inquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Ask a Travel Consultant on WhatsApp
                </a>
                <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 14 }}>
                  Cheap Flight Strategies
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(24px, 4vw, 40px)',
            }}
          >
            {blogPosts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.06}>
                <article
                  className="card-interactive"
                  style={{
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }} className="image-reveal">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: 'rgba(26,26,26,0.85)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-champagne)',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 2,
                      }}
                    >
                      {post.category}
                    </div>
                  </div>

                  <div style={{ padding: 'clamp(24px, 4vw, 32px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: 12, color: 'var(--color-warm-gray)', marginBottom: 10 }}>
                      {post.publishDate} • {post.readTime}
                    </div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 22,
                        fontWeight: 600,
                        color: 'var(--color-charcoal)',
                        lineHeight: 1.3,
                        marginBottom: 12,
                      }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        className="hover:text-amber-700"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--color-warm-gray-dark)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 16 }}>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: 'var(--color-champagne-dark)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        Read Full Article →
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Banner */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'white', marginBottom: 12 }}>
            Ready to Plan Your Next Journey?
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            Our travel consultants turn travel inspiration into seamless bookings.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Flight Booking
            </Link>
            <Link href="/destinations" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Destinations Hub
            </Link>
            <Link href="/umrah" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Umrah Packages
            </Link>
            <Link href="/visa" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Visa Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
