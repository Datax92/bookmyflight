import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { siteConfig } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';

export const metadata: Metadata = {
  title: 'Contact BookMyFlight — Get in Touch with Our Travel Team',
  description: 'Contact BookMyFlight for flights, Umrah packages, visa assistance, and hotel reservations. Reach us via WhatsApp, phone, email, or visit our office in Islamabad.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--color-charcoal)', paddingTop: 140, paddingBottom: 80 }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 600 }}>
              <div className="section-label">Contact</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)', color: 'white', fontWeight: 600, lineHeight: 1.1, marginBottom: 24 }}>
                Let&apos;s Plan Your
                <br /><span style={{ color: 'var(--color-champagne)' }}>Next Journey</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Our travel consultants are ready to help. Reach out through WhatsApp for the fastest response.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(20px, 4vw, 40px)' }}>
            {/* WhatsApp - Primary */}
            <AnimateIn>
              <div style={{ background: 'var(--color-whatsapp)', padding: 'clamp(24px, 5vw, 40px)', color: 'white' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 600, marginBottom: 8 }}>WhatsApp</h3>
                <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 20 }}>Fastest Response</p>
                <p style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 600, marginBottom: 8, wordBreak: 'break-word' }}>{siteConfig.contact.whatsappDisplay}</p>
                <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 24, lineHeight: 1.6 }}>
                  Send us a message anytime. Our team typically responds within minutes during business hours.
                </p>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 28px', background: 'white', color: 'var(--color-whatsapp-dark)', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'transform 0.3s ease', width: '100%' }}
                >
                  Start a Conversation →
                </a>
              </div>
            </AnimateIn>

            {/* Phone */}
            <AnimateIn delay={0.1}>
              <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', padding: 'clamp(24px, 5vw, 40px)', height: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: 8 }}>Phone</h3>
                <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 20 }}>Call Us Directly</p>
                {siteConfig.contact.phone.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} style={{ display: 'block', fontSize: 'clamp(17px, 3.5vw, 20px)', fontWeight: 600, color: 'var(--color-charcoal)', textDecoration: 'none', marginBottom: 8 }}>
                    {phone}
                  </a>
                ))}
                <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', marginTop: 16, lineHeight: 1.6 }}>
                  {siteConfig.hours.days}<br />{siteConfig.hours.weekdays}
                </p>
              </div>
            </AnimateIn>

            {/* Email */}
            <AnimateIn delay={0.2}>
              <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', padding: 'clamp(24px, 5vw, 40px)', height: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: 8 }}>Email</h3>
                <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 20 }}>Write to Us</p>
                <a href={`mailto:${siteConfig.contact.email}`} style={{ fontSize: 'clamp(16px, 3.2vw, 20px)', fontWeight: 600, color: 'var(--color-charcoal)', textDecoration: 'none', wordBreak: 'break-word' }}>
                  {siteConfig.contact.email}
                </a>
                <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', marginTop: 16, lineHeight: 1.6 }}>
                  We respond to emails within one business day.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Direct WhatsApp Inquiry Form */}
          <AnimateIn delay={0.25}>
            <div style={{ maxWidth: 900, margin: '48px auto' }}>
              <ContactInquiryForm />
            </div>
          </AnimateIn>

          {/* Office Address & Map */}
          <AnimateIn delay={0.3}>
            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(20px, 4vw, 40px)' }}>
              <div style={{ background: 'var(--color-charcoal)', padding: 'clamp(24px, 5vw, 48px)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 600, color: 'white', marginBottom: 24 }}>Office</h3>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.area}<br />
                  {siteConfig.address.city}, {siteConfig.address.region}<br />
                  {siteConfig.address.country}
                </p>
                <div style={{ marginTop: 24 }}>
                  <a
                    href={siteConfig.address.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--color-champagne)', textDecoration: 'none' }}
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', padding: 'clamp(24px, 5vw, 48px)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: 24 }}>Business Hours</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, color: 'var(--color-warm-gray-dark)', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: 12 }}>
                      <span>{day}</span>
                      <span style={{ fontWeight: 500 }}>{siteConfig.hours.weekdays}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, color: 'var(--color-warm-gray)' }}>
                    <span>Sunday</span>
                    <span style={{ fontWeight: 500 }}>{siteConfig.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
