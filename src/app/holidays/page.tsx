import type { Metadata } from 'next';
import Image from 'next/image';
import { AnimateIn } from '@/components/AnimateIn';
import { destinations } from '@/lib/config';
import { getDestinationWhatsAppUrl, getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Holiday Packages — BookMyFlight | Curated Travel Experiences',
  description: 'Discover curated holiday packages to Dubai, Istanbul, London, Bangkok, Paris, Baku, and more. Personalized travel solutions from BookMyFlight.',
};

export default function HolidaysPage() {
  return (
    <>
      <section style={{ background: 'var(--color-charcoal)', paddingTop: 'clamp(100px, 15vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 600 }}>
              <div className="section-label">Holiday Packages</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', color: 'white', fontWeight: 600, lineHeight: 1.1, marginBottom: 24 }}>
                Curated Travel
                <br /><span style={{ color: 'var(--color-champagne)' }}>Experiences</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Explore carefully curated holiday packages to the world&apos;s most sought-after destinations. Let our travel experts design the perfect getaway for you.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
            {destinations.map((dest, i) => (
              <AnimateIn key={dest.id} delay={i * 0.06}>
                <div className="image-reveal" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', cursor: 'pointer' }}>
                  <Image src={dest.image} alt={`${dest.name} holiday — BookMyFlight`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(26,26,26,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px, 4vw, 32px)' }}>
                    <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 8 }}>{dest.travelType}</p>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 26px)', fontWeight: 600, color: 'white', marginBottom: 4 }}>{dest.name}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{dest.country}</p>
                    <a
                      href={getDestinationWhatsAppUrl(dest.name, dest.travelType)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 24px', background: 'var(--color-whatsapp)', color: 'white', fontSize: 13, fontWeight: 600, textDecoration: 'none', borderRadius: 2, width: '100%' }}
                    >
                      Plan My Holiday →
                    </a>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 64 }}>
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', marginBottom: 24 }}>
                Don&apos;t see your destination? Our team can arrange holidays to any destination worldwide.
              </p>
              <a
                href={getWhatsAppUrl('Hello BookMyFlight, I would like to plan a holiday. Please help me with options.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Plan a Custom Holiday →
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
