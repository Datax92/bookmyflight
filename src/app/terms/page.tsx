import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms & Conditions — BookMyFlight',
  description: 'Terms and conditions for BookMyFlight — powered by O.S Travel & Tours.',
};

export default function TermsPage() {
  return (
    <section style={{ background: 'var(--color-ivory)', paddingTop: 'clamp(100px, 15vw, 140px)', paddingBottom: 'var(--spacing-section)' }}>
      <div className="container-premium" style={{ maxWidth: 800 }}>
        <AnimateIn>
          <div className="section-label">Legal</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 24 }}>Terms & Conditions</h1>
          <div className="premium-divider" style={{ marginBottom: 40 }} />
          <div style={{ fontSize: 15, color: 'var(--color-warm-gray)', lineHeight: 1.9 }}>
            <p style={{ marginBottom: 24 }}>
              By using BookMyFlight (powered by O.S Travel & Tours), you agree to the following terms and conditions.
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 12, marginTop: 32 }}>Service Description</h2>
            <p style={{ marginBottom: 16 }}>BookMyFlight is a travel inquiry platform that connects you with professional travel consultants at O.S Travel & Tours. We facilitate travel inquiries and connect you with our team to arrange bookings. Final bookings, payments, and confirmations are handled directly through O.S Travel & Tours.</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 12, marginTop: 32 }}>Pricing & Availability</h2>
            <p style={{ marginBottom: 16 }}>All fares, rates, and availability displayed or communicated are subject to change and confirmation by the relevant airline, hotel, or service provider. BookMyFlight does not guarantee specific prices or availability until confirmed by our travel team.</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 12, marginTop: 32 }}>Contact</h2>
            <p>For questions about these terms, please contact us at <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--color-champagne-dark)' }}>{siteConfig.contact.email}</a>.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
