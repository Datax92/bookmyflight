import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { campaignOffers } from '@/lib/offers-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return campaignOffers.map((o) => ({
    slug: o.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = campaignOffers.find((o) => o.slug === slug);

  if (!offer) {
    return { title: 'Offer Not Found — BookMyFlight' };
  }

  return {
    title: `${offer.title} | BookMyFlight`,
    description: offer.description,
    // Ad campaign landing pages have index: false to avoid cannibalizing primary organic landing pages
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `https://bookmyflight.pk/offers/${offer.slug}`,
    },
  };
}

export default async function CampaignOfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = campaignOffers.find((o) => o.slug === slug);

  if (!offer) {
    notFound();
  }

  return (
    <>
      {/* Campaign Focused Hero */}
      <section
        style={{
          background: 'var(--color-charcoal)',
          paddingTop: 'clamp(100px, 14vw, 150px)',
          paddingBottom: 'clamp(50px, 8vw, 80px)',
          position: 'relative',
        }}
      >
        <div className="container-premium" style={{ maxWidth: 960 }}>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Offers', href: '/offers' },
              { label: offer.badge },
            ]}
          />

          <AnimateIn>
            <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(201,169,110,0.15)',
                  color: 'var(--color-champagne)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                  borderRadius: 2,
                  marginBottom: 16,
                }}
              >
                {offer.badge}
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 5vw, 52px)',
                  color: 'white',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                {offer.title}
              </h1>
              <p
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  color: 'var(--color-champagne)',
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  marginBottom: 20,
                }}
              >
                {offer.subtitle}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                  maxWidth: 720,
                  margin: '0 auto 32px',
                }}
              >
                {offer.description}
              </p>
              <a
                href={getWhatsAppUrl(offer.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: 16, padding: '16px 36px', display: 'inline-flex' }}
              >
                {offer.ctaText}
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Benefits & Fast Inquiry Grid */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium" style={{ maxWidth: 960 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(32px, 5vw, 48px)',
              marginBottom: 64,
            }}
          >
            {/* Left: What This Package Includes */}
            <AnimateIn>
              <div
                style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.06)',
                  padding: 'clamp(24px, 4vw, 40px)',
                  height: '100%',
                }}
              >
                <div className="section-label">Key Advantages</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 24,
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  Transparent Service & Benefits
                </h2>
                <div className="premium-divider" />
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, padding: 0 }}>
                  {offer.benefits.map((benefit) => (
                    <li key={benefit} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--color-warm-gray-dark)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--color-champagne)', fontSize: 18, lineHeight: 1 }}>✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            {/* Right: Instant WhatsApp Lead Form */}
            <AnimateIn delay={0.15}>
              <div>
                <ContactInquiryForm defaultService={offer.serviceCategory === 'Umrah' ? 'umrah' : 'flight'} />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
