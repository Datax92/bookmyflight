import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Hotel Reservations — BookMyFlight | Worldwide Accommodations',
  description: 'Book the right accommodations worldwide with BookMyFlight. Get personalized hotel recommendations and competitive rates from our travel consultants.',
};

export default function HotelsPage() {
  const hotelDestinations = [
    {
      city: 'Dubai & UAE',
      category: 'Luxury Resorts & Downtown Suites',
      highlights: 'Palm Jumeirah resorts, Downtown Burj views, and financial district business hotels.',
      whatsappMsg: 'Hello BookMyFlight, I am looking for hotel options in Dubai. Please share available properties and rates.',
    },
    {
      city: 'Makkah & Madinah',
      category: 'Haram Facing & Central Area',
      highlights: 'Clock Tower suites, Jabal Omar 5-star properties, and Markazia hotels within walking distance.',
      whatsappMsg: 'Hello BookMyFlight, I need hotel bookings in Makkah & Madinah. Please share options close to the Haram.',
    },
    {
      city: 'Istanbul & Turkey',
      category: 'Bosphorus Views & Historic Stays',
      highlights: 'Bosphorus waterfront luxury, Sultanahmet boutique hotels, and Taksim central accommodations.',
      whatsappMsg: 'Hello BookMyFlight, I would like hotel recommendations in Istanbul. Please provide options.',
    },
    {
      city: 'London & UK',
      category: 'Mayfair, Central & Boutique',
      highlights: 'Central London luxury, family serviced apartments, and Kensington/Westminster locations.',
      whatsappMsg: 'Hello BookMyFlight, I am looking for hotel reservations in London. Please share available choices.',
    },
    {
      city: 'Bangkok & Southeast Asia',
      category: 'Tropical Resorts & High-Rise Stays',
      highlights: 'City center high-rises in Bangkok & Kuala Lumpur, riverside retreats, and family vacation suites.',
      whatsappMsg: 'Hello BookMyFlight, I am planning a trip to Southeast Asia and need hotel arrangements.',
    },
    {
      city: 'Worldwide Custom Stays',
      category: 'Any City, Any Style',
      highlights: 'Tailored reservations for transit hotels, corporate business bookings, or boutique escapes worldwide.',
      whatsappMsg: 'Hello BookMyFlight, I need hotel recommendations for an international trip. Please assist me.',
    },
  ];

  return (
    <>
      <section style={{ background: 'var(--color-charcoal)', paddingTop: 140, paddingBottom: 80 }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 640 }}>
              <div className="section-label">Hotel Reservations</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', color: 'white', fontWeight: 600, lineHeight: 1.1, marginBottom: 24 }}>
                Curated
                <br /><span style={{ color: 'var(--color-champagne)' }}>Accommodations</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Find the right accommodation for your journey. From prestigious 5-star suites to convenient central city stays, our travel consultants curate recommendations matching your preferences.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Featured Destinations */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0 60px' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Worldwide Network</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 16 }}>
                Popular Hotel Destinations
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                Explore properties curated for prime locations, verified comfort, and competitive rates.
              </p>
            </div>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(16px, 3vw, 24px)', marginBottom: 60 }}>
            {hotelDestinations.map((dest, idx) => (
              <AnimateIn key={dest.city} delay={idx * 0.08}>
                <div
                  className="card-interactive"
                  style={{
                    padding: 'clamp(20px, 4vw, 32px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ width: 36, height: 2, background: 'var(--color-champagne)', marginBottom: 20 }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: 4 }}>
                    {dest.city}
                  </h3>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-champagne-dark)', marginBottom: 14 }}>
                    {dest.category}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7, marginBottom: 24, flex: 1 }}>
                    {dest.highlights}
                  </p>
                  <a
                    href={getWhatsAppUrl(dest.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-whatsapp-dark)', textDecoration: 'none' }}
                  >
                    Request Rates for {dest.city.split('&')[0].trim()} →
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works & Personalized Booking */}
      <section style={{ background: 'white', padding: 'var(--spacing-section) 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container-premium" style={{ maxWidth: 860 }}>
          <AnimateIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Booking Process</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.5vw, 32px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 16 }}>
                How Hotel Booking Works
              </h2>
              <div className="premium-divider" style={{ margin: '16px auto 24px' }} />
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                Skip the guesswork of automated booking portals. Our team checks real-time availability, verifies property locations, and provides handpicked recommendations directly on WhatsApp.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
              {[
                { step: '01', title: 'Share Your Travel Details', desc: 'Tell us your destination city, check-in & check-out dates, guest count, and any specific preferences (e.g. walking distance, breakfast included, suite tier).' },
                { step: '02', title: 'Review Curated Options', desc: 'Our travel consultant compares inventory across verified partner networks and sends you selected hotel options with full transparent details on WhatsApp.' },
                { step: '03', title: 'Confirm & Receive Vouchers', desc: 'Select your preferred accommodation. Our team secures the booking and sends your official hotel confirmation voucher.' },
              ].map((item) => (
                <div key={item.step} className="card-interactive" style={{ display: 'flex', gap: 'clamp(14px, 3vw, 24px)', alignItems: 'flex-start', padding: 'clamp(18px, 3vw, 28px)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 400, color: 'var(--color-champagne)', opacity: 0.7, flexShrink: 0 }}>{item.step}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(17px, 2.5vw, 19px)', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div style={{ textAlign: 'center' }}>
              <a
                href={getWhatsAppUrl('Hello BookMyFlight, I would like to book hotel accommodations. Please help me find the best options.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: 15, padding: '16px clamp(24px, 5vw, 44px)' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Hotel Rates on WhatsApp
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
