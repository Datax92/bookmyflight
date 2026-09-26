import type { Metadata } from 'next';
import { AnimateIn } from '@/components/AnimateIn';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy — BookMyFlight',
  description: 'Privacy policy for BookMyFlight — powered by O.S Travel & Tours.',
};

export default function PrivacyPage() {
  return (
    <section style={{ background: 'var(--color-ivory)', paddingTop: 'clamp(100px, 15vw, 140px)', paddingBottom: 'var(--spacing-section)' }}>
      <div className="container-premium" style={{ maxWidth: 800 }}>
        <AnimateIn>
          <div className="section-label">Legal</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 24 }}>Privacy Policy</h1>
          <div className="premium-divider" style={{ marginBottom: 40 }} />
          <div style={{ fontSize: 15, color: 'var(--color-warm-gray)', lineHeight: 1.9 }}>
            <p style={{ marginBottom: 24 }}>
              BookMyFlight (powered by O.S Travel & Tours) is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 12, marginTop: 32 }}>Information We Collect</h2>
            <p style={{ marginBottom: 16 }}>When you submit a travel inquiry through our website or WhatsApp, we may collect your name, contact details, travel dates, destination preferences, and passenger information. This information is used solely to process your travel inquiry and provide you with relevant fare and package options.</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 12, marginTop: 32 }}>How We Use Your Information</h2>
            <p style={{ marginBottom: 16 }}>Your information is used to process travel inquiries, provide fare quotes, arrange bookings, and communicate with you about your travel plans. We do not sell your personal information to third parties.</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: 12, marginTop: 32 }}>Contact</h2>
            <p>For questions about this privacy policy, please contact us at <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--color-champagne-dark)' }}>{siteConfig.contact.email}</a>.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
