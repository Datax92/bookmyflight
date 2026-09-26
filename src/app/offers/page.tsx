import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { campaignOffers } from '@/lib/offers-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Travel Packages & Seasonal Inquiries | BookMyFlight',
  description:
    'Discover curated seasonal travel inquiries and promotional packages for flights, Umrah, and Dubai vacations from BookMyFlight and O.S Travel & Tours.',
  alternates: {
    canonical: 'https://bookmyflight.pk/offers',
  },
  openGraph: {
    title: 'Travel Inquiries & Packages | BookMyFlight',
    description: 'Personalized travel inquiries and packages from Pakistan.',
    url: 'https://bookmyflight.pk/offers',
    type: 'website',
  },
};

export default function OffersHubPage() {
  return (
    <>
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
              { label: 'Campaigns & Offers' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Tailored Inquiries</div>
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
                Seasonal <span style={{ color: 'var(--color-champagne)' }}>Travel Packages</span>
                <br />& Flight Inquiries
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Explore dedicated campaign inquiries tailored for popular travel corridors. Direct WhatsApp access to travel consultants with transparent advice and no hidden fees.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(24px, 4vw, 36px)',
            }}
          >
            {campaignOffers.map((offer, idx) => (
              <AnimateIn key={offer.slug} delay={idx * 0.08}>
                <div
                  className="card-interactive"
                  style={{
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: 'rgba(26,26,26,0.85)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-champagne)',
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 2,
                      }}
                    >
                      {offer.badge}
                    </div>
                  </div>

                  <div style={{ padding: 'clamp(20px, 3.5vw, 32px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 22,
                        fontWeight: 600,
                        color: 'var(--color-charcoal)',
                        marginBottom: 8,
                      }}
                    >
                      {offer.title}
                    </h2>
                    <p style={{ fontSize: 13, color: 'var(--color-champagne-dark)', fontWeight: 500, marginBottom: 14 }}>
                      {offer.subtitle}
                    </p>
                    <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                      {offer.description}
                    </p>

                    <div style={{ display: 'flex', gap: 10 }}>
                      <Link
                        href={`/offers/${offer.slug}`}
                        style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '10px 14px',
                          border: '1px solid var(--color-champagne)',
                          color: 'var(--color-charcoal)',
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: 'none',
                          borderRadius: 2,
                        }}
                      >
                        View Campaign →
                      </Link>
                      <a
                        href={getWhatsAppUrl(offer.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ fontSize: 13, padding: '10px 16px' }}
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
