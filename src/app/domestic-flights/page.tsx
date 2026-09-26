import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Domestic Flights in Pakistan — PIA, Airblue, Serene, AirSial & Fly Jinnah | BookMyFlight',
  description:
    'Book domestic flights across Pakistan. Compare schedules and fares for Islamabad, Karachi, Lahore, Quetta, Peshawar, and Skardu with personalized WhatsApp booking assistance.',
  alternates: {
    canonical: 'https://bookmyflight.pk/domestic-flights',
  },
  openGraph: {
    title: 'Domestic Flights Pakistan | BookMyFlight',
    description:
      'Convenient booking for all domestic airlines in Pakistan. Real-time schedule comparison and swift ticketing via WhatsApp.',
    url: 'https://bookmyflight.pk/domestic-flights',
    type: 'website',
  },
};

const domesticAirlines = [
  {
    name: 'Pakistan International Airlines (PIA)',
    focus: 'National carrier operating extensive domestic network including scenic Northern areas (Skardu, Gilgit, Chitral).',
    allowance: 'Standard 20kg checked baggage + 7kg hand luggage.',
  },
  {
    name: 'Airblue',
    focus: 'Frequent daily flights connecting Islamabad, Karachi, and Lahore with modern Airbus A320 aircraft.',
    allowance: 'Standard 20kg checked baggage allowance on regular fares.',
  },
  {
    name: 'Serene Air',
    focus: 'Modern Boeing 737-800 and Airbus A330 fleet serving major trunk routes and Quetta with reliable schedules.',
    allowance: 'Generous domestic baggage allowance up to 32kg on select fares.',
  },
  {
    name: 'AirSial',
    focus: 'Sialkot-born carrier with modern Airbus A320 fleet offering friendly hospitality between major cities.',
    allowance: 'Standard 20kg checked luggage + complimentary inflight meal.',
  },
  {
    name: 'Fly Jinnah',
    focus: 'Low-cost value carrier operating frequent hops between Karachi, Islamabad, Lahore, Quetta, and Peshawar.',
    allowance: 'Tiered fares from basic seat-only to baggage-inclusive packages.',
  },
];

const domesticRoutes = [
  { from: 'Islamabad (ISB)', to: 'Karachi (KHI)', flightTime: '2 hours non-stop', frequency: 'Multiple flights daily' },
  { from: 'Lahore (LHE)', to: 'Karachi (KHI)', flightTime: '1h 45m non-stop', frequency: 'Multiple flights daily' },
  { from: 'Islamabad (ISB)', to: 'Skardu (KDU)', flightTime: '1 hour scenic flight', frequency: 'Daily weather permitting' },
  { from: 'Islamabad (ISB)', to: 'Gilgit (GIL)', flightTime: '55 minutes scenic flight', frequency: 'Daily weather permitting' },
  { from: 'Islamabad (ISB)', to: 'Quetta (UET)', flightTime: '1h 25m non-stop', frequency: 'Daily scheduled flights' },
  { from: 'Peshawar (PEW)', to: 'Karachi (KHI)', flightTime: '2 hours non-stop', frequency: 'Daily scheduled flights' },
];

const faqs = [
  {
    question: 'What identification documents are needed for domestic flights in Pakistan?',
    answer:
      'All adult Pakistani citizens must present an original, valid CNIC (or original passport) at the check-in counter and security checkpoints. For children and infants, an original B-Form (Child Registration Certificate) or birth certificate is mandatory.',
  },
  {
    question: 'How early should I arrive at the airport for a domestic flight?',
    answer:
      'Airlines recommend arriving at least 1.5 to 2 hours before scheduled departure. Domestic check-in counters strictly close 45 minutes prior to takeoff.',
  },
  {
    question: 'How do weather delays affect Northern Area flights (Skardu and Gilgit)?',
    answer:
      'Flights into Skardu and Gilgit operate under Visual Flight Rules (VFR) through mountainous terrain. Flights may be subject to same-day weather delays or rescheduling. Our consultants monitor real-time flight updates for our clients.',
  },
];

export default function DomesticFlightsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd schema={faqSchema} />

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
              { label: 'Domestic Flights' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Across Pakistan</div>
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
                Seamless <span style={{ color: 'var(--color-champagne)' }}>Domestic Flights</span>
                <br />In Pakistan
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Fly between Pakistan&apos;s major economic centers and breathtaking Northern mountain valleys. We compare all 5 domestic carriers for the best timing and price.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like to book a domestic flight in Pakistan.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Inquire on WhatsApp
                </a>
                <Link href="/flight-booking" className="btn-secondary" style={{ fontSize: 14 }}>
                  How Booking Works
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Domestic Routes */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 720, marginBottom: 48 }}>
              <div className="section-label">Primary Corridors</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                Major Domestic Flight Routes
              </h2>
              <div className="premium-divider" />
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                Frequent non-stop connections linking the federal capital, provincial hubs, and northern adventure destinations.
              </p>
            </div>
          </AnimateIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(16px, 2.5vw, 24px)',
              marginBottom: 64,
            }}
          >
            {domesticRoutes.map((r) => (
              <div
                key={`${r.from}-${r.to}`}
                className="card-interactive"
                style={{
                  padding: 'clamp(20px, 3vw, 28px)',
                  background: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-charcoal)' }}>{r.from}</span>
                  <span style={{ color: 'var(--color-champagne)', fontSize: 16 }}>✈</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-charcoal)' }}>{r.to}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--color-champagne-dark)', fontWeight: 500, marginBottom: 6 }}>
                  {r.flightTime}
                </p>
                <p style={{ fontSize: 13, color: 'var(--color-warm-gray)', marginBottom: 16, flex: 1 }}>
                  {r.frequency}
                </p>
                <a
                  href={getWhatsAppUrl(`Hello BookMyFlight, I would like to book a flight from ${r.from} to ${r.to}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center', fontSize: 12, padding: '10px 16px' }}
                >
                  Book on WhatsApp
                </a>
              </div>
            ))}
          </div>

          {/* Airlines Comparison */}
          <AnimateIn delay={0.15}>
            <div style={{ marginBottom: 64 }}>
              <div style={{ maxWidth: 700, marginBottom: 36 }}>
                <div className="section-label">Fleet & Network</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 3vw, 34px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Domestic Airlines in Pakistan
                </h3>
                <p style={{ fontSize: 15, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                  We issue tickets across all five licensed commercial carriers operating domestic services.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {domesticAirlines.map((al) => (
                  <div
                    key={al.name}
                    className="card-interactive"
                    style={{
                      padding: 'clamp(20px, 3.5vw, 28px)',
                      background: 'white',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 19,
                        fontWeight: 600,
                        color: 'var(--color-charcoal)',
                        marginBottom: 6,
                      }}
                    >
                      {al.name}
                    </h4>
                    <p style={{ fontSize: 14, color: 'var(--color-warm-gray-dark)', lineHeight: 1.7, marginBottom: 8 }}>
                      {al.focus}
                    </p>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-champagne-dark)' }}>
                      Baggage: {al.allowance}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Quick Inquiry Form */}
          <div style={{ maxWidth: 880, margin: '0 auto 64px' }}>
            <ContactInquiryForm defaultService="flight" />
          </div>

          {/* FAQs */}
          <AnimateIn delay={0.25}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div className="section-label" style={{ justifyContent: 'center' }}>Domestic Travel Rules</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Frequently Asked Questions
                </h2>
                <div className="premium-divider" style={{ margin: '16px auto' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    style={{
                      background: 'white',
                      border: '1px solid rgba(0,0,0,0.06)',
                      padding: 'clamp(20px, 3.5vw, 28px)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 18,
                        fontWeight: 600,
                        color: 'var(--color-charcoal)',
                        marginBottom: 10,
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'white', marginBottom: 12 }}>
            Connected Services
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            Planning domestic connecting flights to international departures? We coordinate your full itinerary.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/international-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              International Flights
            </Link>
            <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Cheap Flights Tips
            </Link>
            <Link href="/flight-booking-islamabad" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Islamabad Air Ticketing
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Visit Islamabad Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
