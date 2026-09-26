import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function NotFound() {
  const quickLinks = [
    { label: 'Search Flights', href: '/flight-booking', desc: 'Domestic & International routes' },
    { label: 'Cheap Flights Guide', href: '/cheap-flights', desc: 'Practical tips to lower fares' },
    { label: 'Popular Destinations', href: '/destinations', desc: 'Dubai, Istanbul, London & more' },
    { label: 'Umrah Services', href: '/umrah', desc: 'Verified packages & visa support' },
    { label: 'Travel Knowledge Hub', href: '/blog', desc: 'Travel tips & visa guidelines' },
    { label: 'Contact Travel Desk', href: '/contact', desc: 'Blue Area, Islamabad office' },
  ];

  return (
    <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px', position: 'relative' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 720, width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: 20,
            background: 'rgba(201,169,110,0.1)',
            border: '1px solid rgba(201,169,110,0.25)',
            color: 'var(--color-champagne)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          404 — Flight Path Not Found
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 600,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          The Route You Requested Does Not Exist
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 17px)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            maxWidth: 580,
            margin: '0 auto 40px',
          }}
        >
          The page or itinerary you are trying to access has been relocated or expired. Explore our core travel portals below or contact our reservations desk directly.
        </p>

        {/* Quick Links Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 14,
            marginBottom: 44,
            textAlign: 'left',
          }}
        >
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                padding: '16px 18px',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ color: 'white', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                {item.label} →
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>
                {item.desc}
              </div>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              borderRadius: 4,
              background: 'linear-gradient(135deg, var(--color-champagne), var(--color-gold))',
              color: 'var(--color-charcoal)',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Return to Homepage
          </Link>
          <a
            href={getWhatsAppUrl('Hello BookMyFlight desk, I encountered a 404 page and need travel help.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              borderRadius: 4,
              background: 'var(--color-whatsapp)',
              color: 'white',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Ask On WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
