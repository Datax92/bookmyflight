import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Flight Booking Pakistan — International & Domestic Air Tickets | BookMyFlight',
  description:
    'Reliable flight booking in Pakistan powered by O.S Travel & Tours. Book domestic & international airline tickets with personalized fare advice, verified baggage rules, and WhatsApp support.',
  alternates: {
    canonical: 'https://bookmyflight.pk/flight-booking',
  },
  openGraph: {
    title: 'Flight Booking Pakistan | BookMyFlight',
    description:
      'Professional flight booking service for international and domestic journeys from Islamabad, Lahore, and Karachi. Powered by O.S Travel & Tours.',
    url: 'https://bookmyflight.pk/flight-booking',
    type: 'website',
  },
};

const bookingSteps = [
  {
    step: '01',
    title: 'Send Your Journey Details',
    desc: 'Share your departure city, destination, travel dates, passenger count (adults/children/infants), and cabin preference (Economy, Premium, Business).',
  },
  {
    step: '02',
    title: 'Receive Curated Options & Fares',
    desc: 'Our IATA-trained travel consultants check live airline reservation systems across multiple carriers to find optimal timings, routes, and verified baggage allowances.',
  },
  {
    step: '03',
    title: 'Confirm & Receive Official E-Tickets',
    desc: 'Select your preferred flight. Once payment is confirmed through O.S Travel & Tours official accounts, you receive verifiable airline PNRs and e-ticket receipts.',
  },
];

const airlinesList = [
  { name: 'Emirates', desc: 'Global connections via Dubai; renowned inflight service and generous baggage.' },
  { name: 'Qatar Airways', desc: 'Frequent flights from Pakistan to Hamad International Airport Doha with global reach.' },
  { name: 'Turkish Airlines', desc: 'Direct flights to Istanbul connecting to more countries than any other airline.' },
  { name: 'Saudia & Flynas', desc: 'Comprehensive flight schedules connecting Pakistan directly to Jeddah, Riyadh, and Madinah.' },
  { name: 'PIA (Pakistan International)', desc: 'Direct domestic flights and international routes to GCC, Far East, and Toronto.' },
  { name: 'Airblue, Serene, AirSial, Fly Jinnah', desc: 'Budget-conscious domestic and regional Middle East routes with reliable schedules.' },
];

const faqs = [
  {
    question: 'How do I book a flight through BookMyFlight?',
    answer:
      'You can submit your travel details through our website inquiry form or contact our consultants directly on WhatsApp (+92 333 5542877). A dedicated travel expert compares available airline options and coordinates your ticketing.',
  },
  {
    question: 'Are payments made securely?',
    answer:
      'Yes. All official payments, invoices, and booking confirmations are processed directly through O.S Travel & Tours, an established travel agency operating in Blue Area, Islamabad.',
  },
  {
    question: 'Can you assist with flight changes, date adjustments, or cancellations?',
    answer:
      'Yes. Unlike automated online aggregators where getting human support is frustrating, our travel team handles airline change requests, date modifications, and refund claims directly with the airlines according to fare rules.',
  },
  {
    question: 'Do you offer group booking discounts for families or delegations?',
    answer:
      'Yes. For groups of 10 or more passengers traveling together, our consultants request dedicated group fare blocks with flexible payment terms from the operating airlines.',
  },
];

export default function FlightBookingPage() {
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
              { label: 'Flight Booking' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">IATA-Accredited Ticketing</div>
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
                Personalized <span style={{ color: 'var(--color-champagne)' }}>Flight Booking</span>
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
                Experience human-guided air ticketing with transparent advice, verified baggage allowances, and rapid WhatsApp communication. Powered by O.S Travel & Tours in Islamabad.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like to book a flight ticket. Please share options.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Request a Flight Quote on WhatsApp
                </a>
                <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 14 }}>
                  Tips for Cheaper Fares
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Booking Process Section */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 56px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Simple & Transparent</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                How Flight Booking Works
              </h2>
              <div className="premium-divider" style={{ margin: '16px auto' }} />
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                Skip the confusing hidden charges and impersonal chatbots of generic portals. Work with professional travel consultants who care about your comfort.
              </p>
            </div>
          </AnimateIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(20px, 3vw, 32px)',
              marginBottom: 64,
            }}
          >
            {bookingSteps.map((step, idx) => (
              <AnimateIn key={step.step} delay={idx * 0.1}>
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
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 32,
                      fontWeight: 400,
                      color: 'var(--color-champagne)',
                      opacity: 0.8,
                      marginBottom: 16,
                    }}
                  >
                    {step.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 20,
                      fontWeight: 600,
                      color: 'var(--color-charcoal)',
                      marginBottom: 12,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-warm-gray-dark)', lineHeight: 1.7, flex: 1 }}>
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Airlines We Book */}
          <AnimateIn delay={0.15}>
            <div style={{ marginBottom: 64 }}>
              <div style={{ maxWidth: 720, marginBottom: 36 }}>
                <div className="section-label">Aviation Partners</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 3vw, 34px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Major Airlines Serving Pakistani Travelers
                </h3>
                <p style={{ fontSize: 15, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                  We issue tickets across all major international and domestic carriers with official reservations.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 'clamp(16px, 2.5vw, 24px)',
                }}
              >
                {airlinesList.map((a) => (
                  <div
                    key={a.name}
                    className="card-interactive"
                    style={{
                      padding: 'clamp(20px, 3vw, 28px)',
                      background: 'white',
                    }}
                  >
                    <div style={{ width: 32, height: 2, background: 'var(--color-champagne)', marginBottom: 16 }} />
                    <h4
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 18,
                        fontWeight: 600,
                        color: 'var(--color-charcoal)',
                        marginBottom: 8,
                      }}
                    >
                      {a.name}
                    </h4>
                    <p style={{ fontSize: 13, color: 'var(--color-warm-gray)', lineHeight: 1.6 }}>
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Inquiry Form */}
          <div style={{ maxWidth: 880, margin: '0 auto 64px' }}>
            <ContactInquiryForm defaultService="flight" />
          </div>

          {/* FAQs */}
          <AnimateIn delay={0.25}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div className="section-label" style={{ justifyContent: 'center' }}>Knowledge Base</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Flight Booking Questions & Answers
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

      {/* Internal Linking Nav */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'white', marginBottom: 12 }}>
            Connected Travel Services
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            BookMyFlight provides end-to-end travel solutions powered by O.S Travel & Tours.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Cheap Flights Guide
            </Link>
            <Link href="/international-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              International Flights
            </Link>
            <Link href="/domestic-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Domestic Pakistan Flights
            </Link>
            <Link href="/flight-booking-islamabad" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Islamabad Air Ticketing
            </Link>
            <Link href="/destinations" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              View Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
