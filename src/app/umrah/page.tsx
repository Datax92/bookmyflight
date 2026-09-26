import type { Metadata } from 'next';
import Image from 'next/image';
import { AnimateIn } from '@/components/AnimateIn';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Umrah Packages — BookMyFlight | Complete Umrah Solutions',
  description: 'Comprehensive Umrah packages including visa processing, flights, hotel accommodations in Makkah & Madinah, and ground transportation from BookMyFlight.',
};

export default function UmrahPage() {
  const inclusions = [
    'Umrah Visa Processing & Documentation',
    'Direct & Connecting Return Flights',
    'Handpicked Hotels in Makkah (Walking Distance or Shuttle)',
    'Quality Accommodations in Madinah (Central Markazia)',
    'Private or Shared Ground Transportation & Airport Transfers',
    'Full Ziyarat Arrangements in Makkah & Madinah',
    'Personalized Support from O.S Travel & Tours Consultants',
    'Travel Insurance & Health Requirements Guidance',
  ];

  const packageTiers = [
    {
      title: '5-Star Executive Umrah',
      subtitle: 'Premium Luxury & Proximity',
      highlights: [
        '5-Star hotels directly facing the Haram (Clock Tower / Jabal Omar)',
        'Private VIP luxury vehicle transfers (GMC / luxury van)',
        'Full Umrah visa processing & fast-track clearance',
        'Private guided Ziyarat in Makkah & Madinah',
        'Flexible 7, 10, or 14-night itineraries',
      ],
      whatsappMsg:
        'Hello BookMyFlight, I am interested in the 5-Star Executive Umrah package. Please share available dates and options.',
      badge: 'Most Exclusive',
    },
    {
      title: 'Deluxe Family Package',
      subtitle: 'Comfort, Value & Convenience',
      highlights: [
        'Quality 4-Star hotels within short walking distance',
        'Spacious family rooms (Double, Triple, or Quad)',
        'Private air-conditioned airport and inter-city transfers',
        'Complete visa handling & flight bookings',
        'Comprehensive Ziyarat tour included',
      ],
      whatsappMsg:
        'Hello BookMyFlight, I am interested in the Deluxe Family Umrah package. Please provide itinerary and pricing.',
      badge: 'Family Favorite',
    },
    {
      title: 'Tailored & Group Umrah',
      subtitle: 'Customized to Your Schedule',
      highlights: [
        'Custom duration and budget-tailored hotel options',
        'Reliable group or private transport options',
        'Full visa issuance and ticketing support',
        'Ideal for groups, organizations, and custom dates',
        'Dedicated travel consultant assistance',
      ],
      whatsappMsg:
        'Hello BookMyFlight, I would like to design a custom Umrah itinerary for my family/group. Please guide me.',
      badge: 'Fully Flexible',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '50vh', minHeight: 440, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/destinations/makkah.jpg" alt="Umrah packages — BookMyFlight" fill priority style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.6) 50%, rgba(26,26,26,0.95) 100%)' }} />
        </div>
        <div className="container-premium" style={{ position: 'relative', zIndex: 1, paddingTop: 88 }}>
          <AnimateIn>
            <div className="section-label">Umrah Services</div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', fontWeight: 600, lineHeight: 1.1, marginBottom: 16 }}>
              Your Sacred
              <br /><span style={{ color: 'var(--color-champagne)' }}>Journey Awaits</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 540, lineHeight: 1.7 }}>
              Complete Umrah packages with visa processing, flights, premium accommodations, and guided support powered by O.S Travel & Tours.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Package Tiers */}
      <section style={{ background: 'var(--color-ivory)', padding: '90px 0 60px' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Curated Packages</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 16 }}>
                Umrah Package Options
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                Choose the travel style that best suits your family. Each package is fully customizable to your preferred travel dates and airline preferences.
              </p>
            </div>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(20px, 3vw, 28px)', marginBottom: 60 }}>
            {packageTiers.map((pkg, idx) => (
              <AnimateIn key={pkg.title} delay={idx * 0.1}>
                <div
                  className="card-interactive"
                  style={{
                    padding: 'clamp(24px, 4vw, 36px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'inline-block', alignSelf: 'flex-start', background: 'rgba(201,169,110,0.15)', color: 'var(--color-champagne-dark)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, marginBottom: 16 }}>
                    {pkg.badge}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: 6 }}>
                    {pkg.title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--color-champagne-dark)', fontWeight: 500, marginBottom: 24 }}>
                    {pkg.subtitle}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                    {pkg.highlights.map((h) => (
                      <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--color-warm-gray-dark)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--color-champagne)', fontSize: 16, lineHeight: 1 }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={getWhatsAppUrl(pkg.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '14px 20px' }}
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Inclusions & Visual */}
      <section style={{ background: 'white', padding: 'var(--spacing-section) 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container-premium">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            <AnimateIn>
              <div>
                <div className="section-label">End-to-End Service</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 16 }}>
                  Everything Handled With Care
                </h2>
                <div className="premium-divider" />
                <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8, marginBottom: 28 }}>
                  With O.S Travel & Tours’ established industry relationships and accreditation, we ensure all logistical details of your pilgrimage are coordinated seamlessly — from hotel reservations in the central markazia to ground transportation.
                </p>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 20 }}>
                  What Every Package Covers
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                  {inclusions.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 15, color: 'var(--color-warm-gray-dark)' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-champagne)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like to consult with an Umrah specialist for my upcoming journey.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Consult an Umrah Specialist →
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15} direction="right">
              <div className="image-reveal" style={{ position: 'relative', aspectRatio: '3/4', maxHeight: 580, borderRadius: 2 }}>
                <Image src="/images/destinations/makkah.jpg" alt="Makkah — Umrah packages" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
