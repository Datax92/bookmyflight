import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'International Flights from Pakistan — Global Routes & Cabin Guide | BookMyFlight',
  description:
    'Book international flights from Islamabad, Lahore, and Karachi to UK, Europe, Middle East, Far East, and North America. Compare cabin classes and verified airline baggage allowances with BookMyFlight.',
  alternates: {
    canonical: 'https://bookmyflight.pk/international-flights',
  },
  openGraph: {
    title: 'International Flights from Pakistan | BookMyFlight',
    description:
      'Premier international air ticketing from Pakistan. Direct & connecting flights to London, Dubai, Istanbul, Jeddah, Bangkok, and worldwide.',
    url: 'https://bookmyflight.pk/international-flights',
    type: 'website',
  },
};

const globalRegions = [
  {
    region: 'Middle East & GCC',
    cities: 'Dubai, Abu Dhabi, Doha, Riyadh, Jeddah, Dammam, Muscat, Bahrain',
    description:
      'The highest-frequency international corridor from Pakistan. Multiple daily non-stop flights operating from Islamabad (ISB), Lahore (LHE), Karachi (KHI), and Peshawar (PEW).',
    carriers: 'Emirates, Qatar Airways, Saudia, Flydubai, Flynas, PIA, Airblue',
  },
  {
    region: 'United Kingdom & Europe',
    cities: 'London (Heathrow/Gatwick), Manchester, Birmingham, Istanbul, Paris, Frankfurt',
    description:
      'High-demand routes for family reunions, academic studies, and business. Served by direct flights to Istanbul and seamless single-transfer flights via Gulf carriers.',
    carriers: 'Turkish Airlines, Qatar Airways, Emirates, British Airways, Gulf Air',
  },
  {
    region: 'Southeast & Central Asia',
    cities: 'Bangkok, Kuala Lumpur, Singapore, Baku, Tashkent',
    description:
      'Thriving leisure destinations offering tropical beach resorts, shopping, and scenic city breaks. Convenient flight times under 6 hours from Pakistan.',
    carriers: 'Thai Airways, Malaysia Airlines, Batik Air, AZAL, PIA',
  },
  {
    region: 'North America',
    cities: 'Toronto, New York (JFK), Chicago, Washington D.C., Dallas',
    description:
      'Long-haul flights connecting Pakistan to the diaspora across Canada and the United States. Baggage allowance generally features 2 pieces of 23kg each in Economy.',
    carriers: 'PIA (direct to Toronto), Qatar Airways, Emirates, Turkish Airlines',
  },
];

const cabinClasses = [
  {
    name: 'Economy Class',
    baggage: 'Generally 20kg to 30kg (or 2x 23kg for Transatlantic)',
    benefits: 'Complimentary meals, standard seat pitch, personal seatback entertainment, USB charging ports.',
  },
  {
    name: 'Premium Economy',
    baggage: 'Extra 5kg to 10kg allowance or 2x 23kg prioritized',
    benefits: 'Wider recliner seats with leg rests, enhanced dining, priority boarding, dedicated quiet cabin.',
  },
  {
    name: 'Business Class',
    baggage: '40kg allowance or 2x 32kg checked luggage',
    benefits: 'Lie-flat beds, gourmet dining on demand, airport lounge access with fine cuisine, fast-track security.',
  },
  {
    name: 'First Class',
    baggage: '50kg allowance or 3x 32kg checked bags',
    benefits: 'Private enclosed suites, luxury chauffeur transfers, a la carte dining, luxury amenity kits.',
  },
];

const faqs = [
  {
    question: 'How early should I arrive at the airport for an international flight from Pakistan?',
    answer:
      'Airlines strictly recommend arriving at Islamabad, Lahore, or Karachi airport at least 3.5 to 4 hours before scheduled departure to complete baggage drop, FIA immigration clearance, and security checks.',
  },
  {
    question: 'What passport validity is required for international travel?',
    answer:
      'Almost all countries require your passport to have at least 6 months remaining validity from the date of entry or departure. Ensure your passport has at least 2 blank visa pages.',
  },
  {
    question: 'Do I need a transit visa if I have a layover in the Gulf or Turkey?',
    answer:
      'If you remain airside within the international transit terminal of airports like Doha (Hamad), Dubai (DXB), or Istanbul (IST) for less than 12-24 hours without collecting checked bags, a transit visa is generally not required for Pakistani citizens. Our team confirms transit rules for every ticket.',
  },
];

export default function InternationalFlightsPage() {
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
              { label: 'International Flights' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Global Horizons</div>
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
                Book <span style={{ color: 'var(--color-champagne)' }}>International Flights</span>
                <br />Across the World
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Fly with world-class airlines to hundreds of international destinations. Expert ticketing assistance for verified baggage, seat selections, and transit connections.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like to inquire about international flight bookings.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Inquire on WhatsApp
                </a>
                <Link href="/destinations" className="btn-secondary" style={{ fontSize: 14 }}>
                  Explore Top Destinations
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Global Route Corridors */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 720, marginBottom: 48 }}>
              <div className="section-label">Route Corridors</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                Key International Flight Routes from Pakistan
              </h2>
              <div className="premium-divider" />
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                Explore major global aviation pathways connecting Islamabad, Lahore, and Karachi to regional capitals and worldwide metropolitan centers.
              </p>
            </div>
          </AnimateIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(20px, 3vw, 28px)',
              marginBottom: 64,
            }}
          >
            {globalRegions.map((gr, idx) => (
              <AnimateIn key={gr.region} delay={idx * 0.08}>
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
                  <div style={{ width: 36, height: 2, background: 'var(--color-champagne)', marginBottom: 16 }} />
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 22,
                      fontWeight: 600,
                      color: 'var(--color-charcoal)',
                      marginBottom: 8,
                    }}
                  >
                    {gr.region}
                  </h3>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-champagne-dark)', marginBottom: 12 }}>
                    {gr.cities}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                    {gr.description}
                  </p>
                  <div style={{ fontSize: 13, color: 'var(--color-charcoal)', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 14 }}>
                    <strong>Major Carriers:</strong> {gr.carriers}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Cabin Class Selection Guide */}
          <AnimateIn delay={0.15}>
            <div style={{ marginBottom: 64 }}>
              <div style={{ maxWidth: 700, marginBottom: 36 }}>
                <div className="section-label">Travel Experience</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 3vw, 34px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Choosing the Right Cabin Class
                </h3>
                <p style={{ fontSize: 15, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                  Understanding ticket benefits ensures you receive the baggage allowances, seat comfort, and flexibility you need for long-haul journeys.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                  gap: 'clamp(16px, 2.5vw, 24px)',
                }}
              >
                {cabinClasses.map((cc) => (
                  <div
                    key={cc.name}
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
                        marginBottom: 8,
                      }}
                    >
                      {cc.name}
                    </h4>
                    <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-champagne-dark)', marginBottom: 12 }}>
                      {cc.baggage}
                    </p>
                    <p style={{ fontSize: 13, color: 'var(--color-warm-gray)', lineHeight: 1.6 }}>
                      {cc.benefits}
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
                <div className="section-label" style={{ justifyContent: 'center' }}>Travel Advice</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  International Travel FAQ
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
            Ensure your complete travel dossier is ready before heading to the airport.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/visa" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Visa Assistance Services
            </Link>
            <Link href="/hotels" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              International Hotel Bookings
            </Link>
            <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Cheap Flights Tips
            </Link>
            <Link href="/destinations" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              All Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
