import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { siteConfig } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About BookMyFlight — Powered by O.S Travel & Tours',
  description: 'BookMyFlight is a premium travel service powered by O.S Travel & Tours — a travel agency based in Islamabad, Pakistan offering flights, Umrah, visa, and hotel services.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--color-charcoal)', paddingTop: 140, paddingBottom: 80 }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 700 }}>
              <div className="section-label">About Us</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', color: 'white', fontWeight: 600, lineHeight: 1.1, marginBottom: 24 }}>
                Your Trusted
                <br /><span style={{ color: 'var(--color-champagne)' }}>Travel Partner</span>
              </h1>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 560 }}>
                BookMyFlight is a modern travel platform powered by the experience and expertise of O.S Travel & Tours.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(32px, 5vw, 64px)' }}>
            <AnimateIn>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.5vw, 32px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 16 }}>
                  BookMyFlight
                </h2>
                <div className="premium-divider" />
                <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8, marginBottom: 24 }}>
                  BookMyFlight is a premium digital travel platform that connects travelers with experienced travel consultants. Rather than providing automated, impersonal booking experiences, we believe in the power of personal service.
                </p>
                <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8, marginBottom: 24 }}>
                  When you inquire through BookMyFlight, your request goes directly to a knowledgeable travel professional who understands the market, knows the airlines, and can find the right solutions for your specific needs.
                </p>
                <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                  Our mission is to make premium travel services accessible and effortless — combining the convenience of digital inquiry with the expertise of professional travel consultants.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.5vw, 32px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 16 }}>
                  O.S Travel & Tours
                </h2>
                <div className="premium-divider" />
                <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8, marginBottom: 24 }}>
                  BookMyFlight is powered by <strong>O.S Travel & Tours</strong>, a travel agency based in Islamabad, Pakistan. O.S Travel & Tours provides comprehensive travel services including visa consultancy, IATA-accredited air ticketing, Umrah packages, hotel bookings, and travel insurance.
                </p>

                <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', padding: 'clamp(20px, 4vw, 32px)', marginTop: 32 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'var(--color-charcoal)', marginBottom: 20 }}>Company Information</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 4 }}>Registered Name</div>
                      <p style={{ fontSize: 15, color: 'var(--color-charcoal)' }}>O.S Travel & Tours</p>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 4 }}>Office Address</div>
                      <p style={{ fontSize: 15, color: 'var(--color-warm-gray-dark)', lineHeight: 1.6 }}>
                        {siteConfig.address.street}<br />
                        {siteConfig.address.area}<br />
                        {siteConfig.address.city}, {siteConfig.address.country}
                      </p>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 4 }}>Business Hours</div>
                      <p style={{ fontSize: 15, color: 'var(--color-warm-gray-dark)' }}>
                        {siteConfig.hours.days}: {siteConfig.hours.weekdays}
                      </p>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 4 }}>Website</div>
                      <a href={siteConfig.parent.website} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'var(--color-champagne-dark)', textDecoration: 'none' }}>
                        {siteConfig.parent.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* CTA */}
          <AnimateIn delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 80, padding: 'clamp(36px, 6vw, 56px) clamp(20px, 4vw, 32px)', background: 'var(--color-charcoal)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3.5vw, 28px)', color: 'white', marginBottom: 16 }}>
                Ready to Get Started?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 32 }}>
                Our travel consultants are available to assist you.
              </p>
              <a
                href={getWhatsAppUrl('Hello BookMyFlight, I would like to speak with a travel consultant about my travel plans.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: 15 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to a Travel Expert
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
