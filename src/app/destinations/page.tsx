import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { destinations } from '@/lib/config';
import { getDestinationWhatsAppUrl, getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Top International Destinations for Pakistani Travelers | BookMyFlight',
  description:
    'Explore curated international travel destinations for Pakistani travelers including Dubai, Istanbul, London, Bangkok, Kuala Lumpur, Riyadh, Jeddah, Doha, Baku, and Paris. Flights, visas, and holiday planning with BookMyFlight.',
  alternates: {
    canonical: 'https://bookmyflight.pk/destinations',
  },
  openGraph: {
    title: 'Top International Destinations | BookMyFlight',
    description:
      'Curated flight and travel guides for the world’s most sought-after destinations from Pakistan.',
    url: 'https://bookmyflight.pk/destinations',
    type: 'website',
  },
};

export default function DestinationsHubPage() {
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
              { label: 'Destinations' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Global Destinations</div>
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
                Curated Travel Guides & <span style={{ color: 'var(--color-champagne)' }}>Flight Destinations</span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                From glamorous Arabian skylines and historical Turkish treasures to Southeast Asian tropical retreats and European capitals — discover verified flight times, visa prerequisites, and customized packages.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like to plan a trip to an international destination.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Plan on WhatsApp
                </a>
                <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 14 }}>
                  Compare Flight Fares
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Destinations Grid */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(20px, 3.5vw, 32px)',
            }}
          >
            {destinations.map((dest, i) => (
              <AnimateIn key={dest.id} delay={i * 0.05}>
                <div
                  className="card-interactive"
                  style={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }} className="image-reveal">
                    <Image
                      src={dest.image}
                      alt={`${dest.name}, ${dest.country} — BookMyFlight Travel Guide`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
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
                      {dest.travelType.split(',')[0]}
                    </div>
                  </div>

                  <div style={{ padding: 'clamp(20px, 3vw, 28px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-champagne-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                      {dest.country}
                    </div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 24,
                        fontWeight: 600,
                        color: 'var(--color-charcoal)',
                        marginBottom: 10,
                      }}
                    >
                      {dest.name}
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                      {dest.description}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 14, marginBottom: 16, fontSize: 13, color: 'var(--color-warm-gray-dark)' }}>
                      <div>✈ <strong>Flight:</strong> {dest.flightTime.split('direct')[0].replace('Approx. ', '')}</div>
                      <div style={{ marginTop: 4 }}>🛂 <strong>Visa:</strong> {dest.visaType.split('(')[0]}</div>
                    </div>

                    <div style={{ display: 'flex', gap: 10 }}>
                      <Link
                        href={`/destinations/${dest.id}`}
                        style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '10px 14px',
                          border: '1px solid var(--color-champagne)',
                          color: 'var(--color-charcoal)',
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          borderRadius: 2,
                        }}
                      >
                        View Travel Guide →
                      </Link>
                      <a
                        href={getDestinationWhatsAppUrl(dest.name, dest.travelType)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          background: 'var(--color-whatsapp)',
                          color: 'white',
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: 'none',
                          borderRadius: 2,
                        }}
                        title={`Inquire about ${dest.name} on WhatsApp`}
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

      {/* Custom Holiday Inquiry */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 26, color: 'white', marginBottom: 12 }}>
            Looking for a Destination Not Listed Here?
          </h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 640, margin: '0 auto 24px' }}>
            Our travel consultants can arrange flights, visas, and hotel reservations to virtually any international destination worldwide.
          </p>
          <a
            href={getWhatsAppUrl('Hello BookMyFlight, I would like to plan a custom trip to a destination not listed on your website.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 14 }}
          >
            Request Custom Destination on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
