import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Visa Assistance — BookMyFlight | Global Visa Services',
  description: 'Expert visa consultancy for US, UK, Canada, Schengen, Malaysia, Singapore, Thailand, Saudi Arabia, and more. BookMyFlight visa services powered by O.S Travel & Tours.',
};

export default function VisaPage() {
  const visaTypes = [
    { country: 'United States', type: 'Tourist / Business / Student', flag: '🇺🇸' },
    { country: 'United Kingdom', type: 'Tourist / Business / Student', flag: '🇬🇧' },
    { country: 'Canada', type: 'Tourist / Business / Student', flag: '🇨🇦' },
    { country: 'Schengen Countries', type: 'Tourist / Business', flag: '🇪🇺' },
    { country: 'Saudi Arabia', type: 'Umrah / Tourist / Business', flag: '🇸🇦' },
    { country: 'Malaysia', type: 'Tourist / Business', flag: '🇲🇾' },
    { country: 'Singapore', type: 'Tourist / Business', flag: '🇸🇬' },
    { country: 'Thailand', type: 'Tourist', flag: '🇹🇭' },
  ];

  return (
    <>
      <section style={{ background: 'var(--color-charcoal)', paddingTop: 'clamp(100px, 15vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 600 }}>
              <div className="section-label">Visa Services</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', color: 'white', fontWeight: 600, lineHeight: 1.1, marginBottom: 24 }}>
                Expert Visa
                <br /><span style={{ color: 'var(--color-champagne)' }}>Assistance</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Professional visa consultancy for destinations worldwide. Our experienced team guides you through the entire visa application process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 600, marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.5vw, 32px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 16 }}>
                Visa Services We Offer
              </h2>
              <div className="premium-divider" />
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                We provide visa consultancy services for a wide range of countries. Our team assists with document preparation, file processing, and application guidance.
              </p>
            </div>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'clamp(16px, 2.5vw, 20px)' }}>
            {visaTypes.map((visa, i) => (
              <AnimateIn key={visa.country} delay={i * 0.06}>
                <div
                  className="card-interactive"
                  style={{ padding: 'clamp(20px, 4vw, 32px)', cursor: 'pointer', height: '100%' }}
                >
                  <span style={{ fontSize: 32, marginBottom: 16, display: 'block' }}>{visa.flag}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: 4 }}>{visa.country}</h3>
                  <p style={{ fontSize: 13, color: 'var(--color-warm-gray)', marginBottom: 16 }}>{visa.type}</p>
                  <a
                    href={getWhatsAppUrl(`Hello BookMyFlight, I need visa assistance for ${visa.country}. Please guide me through the process.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-whatsapp-dark)', textDecoration: 'none' }}
                  >
                    Talk to a Visa Expert →
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
