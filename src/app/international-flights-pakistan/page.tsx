import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'International Flights from Pakistan — Outbound Routes & Airline Booking | BookMyFlight',
  description:
    'Complete guide and booking service for international flights from Pakistan. Departures from Islamabad, Lahore, and Karachi to UAE, Saudi Arabia, UK, Europe, Far East, and North America.',
  alternates: {
    canonical: 'https://bookmyflight.pk/international-flights-pakistan',
  },
  openGraph: {
    title: 'International Flights Pakistan | BookMyFlight',
    description:
      'IATA-accredited international flight booking across Pakistan. Professional consultation and transparent airfares on WhatsApp.',
    url: 'https://bookmyflight.pk/international-flights-pakistan',
    type: 'website',
  },
};

const departureHubs = [
  {
    airport: 'Islamabad International Airport (ISB)',
    focus: 'Direct flights to Dubai, Doha, Riyadh, Jeddah, Dammam, Istanbul, Baku, Bangkok, and connecting services worldwide.',
  },
  {
    airport: 'Allama Iqbal International Airport Lahore (LHE)',
    focus: 'Major international hub for Punjab with frequent services to GCC, Europe, Central Asia, and Southeast Asia.',
  },
  {
    airport: 'Jinnah International Airport Karachi (KHI)',
    focus: 'Southern commercial gateway with dense frequencies to Middle Eastern transit hubs and Asian destinations.',
  },
  {
    airport: 'Regional Outbound Airports',
    focus: 'Direct international Middle Eastern flights from Peshawar (PEW), Sialkot (SKT), Multan (MUX), and Faisalabad (LYP).',
  },
];

export default function InternationalFlightsPakistanPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--color-charcoal)',
          paddingTop: 'clamp(100px, 14vw, 150px)',
          paddingBottom: 'clamp(50px, 8vw, 80px)',
          position: 'relative',
        }}
      >
        <div className="container-premium">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Flights', href: '/flights' },
              { label: 'International Flights Pakistan' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Outbound Pakistan Air Travel</div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  color: 'white',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Comprehensive <span style={{ color: 'var(--color-champagne)' }}>International Flights</span>
                <br />From Across Pakistan
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Whether departing from Islamabad, Lahore, Karachi, or regional international terminals, BookMyFlight connects you with global airline networks through experienced travel consultants.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like to book an international flight from Pakistan.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Request International Quote
                </a>
                <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 14 }}>
                  Tips for Cheaper Fares
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Departure Hubs Section */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 720, marginBottom: 48 }}>
              <div className="section-label">Departure Gateways</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                International Departure Terminals in Pakistan
              </h2>
              <div className="premium-divider" />
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                Learn about departure facilities and major airline networks operating from Pakistan&apos;s primary international airports.
              </p>
            </div>
          </AnimateIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(20px, 3vw, 28px)',
              marginBottom: 64,
            }}
          >
            {departureHubs.map((hub, idx) => (
              <AnimateIn key={hub.airport} delay={idx * 0.08}>
                <div
                  className="card-interactive"
                  style={{
                    padding: 'clamp(24px, 4vw, 36px)',
                    background: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 20,
                      fontWeight: 600,
                      color: 'var(--color-charcoal)',
                      marginBottom: 10,
                    }}
                  >
                    {hub.airport}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7, flex: 1 }}>
                    {hub.focus}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Quick Inquiry Form */}
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <ContactInquiryForm defaultService="flight" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'white', marginBottom: 12 }}>
            Connected Services
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Cheap Flights
            </Link>
            <Link href="/international-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Global Routes
            </Link>
            <Link href="/flight-booking-islamabad" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Islamabad Office
            </Link>
            <Link href="/destinations" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
