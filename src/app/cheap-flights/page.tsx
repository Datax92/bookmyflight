import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Cheap Flights from Pakistan — Expert Fare Comparison | BookMyFlight',
  description:
    'Discover practical ways to find affordable domestic and international flight fares from Islamabad, Lahore, and Karachi. Contact our IATA-accredited consultants on WhatsApp for personalized fare quotes.',
  alternates: {
    canonical: 'https://bookmyflight.pk/cheap-flights',
  },
  openGraph: {
    title: 'Cheap Flights from Pakistan | BookMyFlight',
    description:
      'Save on international and domestic flights from Pakistan. Transparent fare comparison and dedicated travel consultant assistance on WhatsApp.',
    url: 'https://bookmyflight.pk/cheap-flights',
    type: 'website',
  },
};

const fareTips = [
  {
    title: '1. Maintain Date & Day Flexibility',
    desc: 'Mid-week departures (Tuesdays and Wednesdays) frequently cost 15% to 25% less than Friday, Saturday, or Sunday flights. Traveling during shoulder seasons rather than school vacations yields major savings.',
  },
  {
    title: '2. Compare Direct vs. Connecting Flights',
    desc: 'While direct flights save travel time, connecting flights via Gulf hubs (Doha, Dubai, Abu Dhabi, Bahrain, Muscat) often offer significantly lower fares and higher baggage allowances.',
  },
  {
    title: '3. Plan 4 to 8 Weeks in Advance',
    desc: 'International airlines open lower fare buckets months in advance. As travel dates approach, budget fare classes sell out, leaving only expensive full-flex tickets. Last-minute cheap flights are rare for peak long-haul routes.',
  },
  {
    title: '4. Check Baggage Allowances Before Booking',
    desc: 'Some ultra-low base fares include only hand luggage or a single 20kg piece. Paying for excess baggage at the airport can wipe out any ticket savings. Our consultants verify baggage rules for your exact ticket tier.',
  },
  {
    title: '5. Consider Alternate Departure Airports',
    desc: 'If flying from the northern region, compare fares from both Islamabad (ISB) and Lahore (LHE), or even Sialkot (SKT) and Peshawar (PEW). Airline competition varies by airport and can produce major fare differences.',
  },
  {
    title: '6. Avoid Peak Holiday Surcharges',
    desc: 'Travel dates immediately surrounding Eid-ul-Fitr, Eid-ul-Adha, Muharram, Christmas/New Year, and summer vacation periods carry high demand premiums. Shifting your departure by just 3 to 5 days can lead to substantial savings.',
  },
];

const popularCheapRoutes = [
  { from: 'Islamabad (ISB)', to: 'Dubai (DXB)', duration: '3h 30m', airlines: 'Emirates, Flydubai, PIA, Airblue' },
  { from: 'Lahore (LHE)', to: 'Jeddah (JED)', duration: '5h 15m', airlines: 'Saudia, Flynas, PIA, Airblue' },
  { from: 'Karachi (KHI)', to: 'Istanbul (IST)', duration: '5h 45m', airlines: 'Turkish Airlines, Pegasus, PIA' },
  { from: 'Islamabad (ISB)', to: 'London (LHR)', duration: '8h 30m', airlines: 'Qatar Airways, Emirates, Gulf Air, BA' },
  { from: 'Lahore (LHE)', to: 'Baku (GYD)', duration: '3h 45m', airlines: 'AZAL, PIA' },
  { from: 'Karachi (KHI)', to: 'Bangkok (BKK)', duration: '4h 45m', airlines: 'Thai Airways, connecting carriers' },
];

const faqs = [
  {
    question: 'How does BookMyFlight help travelers find cheaper flights?',
    answer:
      'Rather than relying on automated aggregators that add hidden markups or miss complex routing savings, our IATA-trained travel consultants at O.S Travel & Tours search GDS inventory directly across multiple airlines, dates, and fare classes to find the most cost-effective option for your travel plans.',
  },
  {
    question: 'Can you guarantee the lowest price for every flight?',
    answer:
      'No ethical travel agency can guarantee the absolute cheapest price 100% of the time because airline seat pricing changes by the minute based on global algorithms. However, we guarantee honest, transparent fare advice, verified baggage allowances, and personalized routing options without hidden fees.',
  },
  {
    question: 'What is the best way to request a flight quote?',
    answer:
      'The fastest and most convenient method is sending your origin, destination, preferred departure dates, passenger count, and cabin preference directly to our WhatsApp number (+92 333 5542877). A consultant responds within minutes during business hours.',
  },
  {
    question: 'Are domestic flights in Pakistan also available at discounted rates?',
    answer:
      'Yes, we compare domestic schedules and fares across Pakistan International Airlines (PIA), Airblue, Serene Air, Fly Jinnah, and AirSial connecting Islamabad, Karachi, Lahore, Quetta, Peshawar, and Skardu.',
  },
];

export default function CheapFlightsPage() {
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

      {/* Hero Section */}
      <section
        style={{
          background: 'var(--color-charcoal)',
          paddingTop: 'clamp(100px, 14vw, 150px)',
          paddingBottom: 'clamp(50px, 8vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container-premium">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Flights', href: '/flights' },
              { label: 'Cheap Flights' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Smart Travel Planning</div>
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
                How to Find <span style={{ color: 'var(--color-champagne)' }}>Cheap Flights</span>
                <br />From Pakistan
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Finding genuinely affordable flight tickets is not about luck — it is about strategy, timing, route selection, and experienced ticketing consultants who know how airline fare classes work.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like to get the latest flight fare options.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Get Latest Flight Fare on WhatsApp
                </a>
                <Link href="/flights" className="btn-secondary" style={{ fontSize: 14 }}>
                  Compare Popular Routes
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Main Guidance Section */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <AnimateIn>
            <div style={{ maxWidth: 720, marginBottom: 48 }}>
              <div className="section-label">Practical Travel Advice</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                6 Proven Strategies for Lower Airfares
              </h2>
              <div className="premium-divider" />
              <p style={{ fontSize: 16, color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                Airlines use dynamic pricing algorithms that raise prices as flights fill up. Here are practical ways Pakistani travelers can secure better fares on domestic and international journeys.
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
            {fareTips.map((tip, idx) => (
              <AnimateIn key={tip.title} delay={idx * 0.08}>
                <div
                  className="card-interactive"
                  style={{
                    padding: 'clamp(24px, 4vw, 36px)',
                    height: '100%',
                    background: 'white',
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
                      marginBottom: 12,
                    }}
                  >
                    {tip.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-warm-gray-dark)', lineHeight: 1.7, flex: 1 }}>
                    {tip.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Popular Routes Comparison Table */}
          <AnimateIn delay={0.2}>
            <div
              style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                padding: 'clamp(24px, 4vw, 40px)',
                marginBottom: 64,
              }}
            >
              <div className="section-label">Route Information</div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 24,
                  fontWeight: 600,
                  color: 'var(--color-charcoal)',
                  marginBottom: 12,
                }}
              >
                Frequently Booked Flight Routes from Pakistan
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.7, marginBottom: 24 }}>
                Fares on these high-demand routes fluctuate based on seasonality and seat availability. Inquire with our consultants for current quotes.
              </p>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: 600 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgba(201,169,110,0.3)', color: 'var(--color-charcoal)' }}>
                      <th style={{ padding: '12px 16px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Departure</th>
                      <th style={{ padding: '12px 16px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Destination</th>
                      <th style={{ padding: '12px 16px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Flight Time</th>
                      <th style={{ padding: '12px 16px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Major Airlines</th>
                      <th style={{ padding: '12px 16px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularCheapRoutes.map((r) => (
                      <tr key={`${r.from}-${r.to}`} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <td style={{ padding: '16px', fontSize: 14, fontWeight: 500, color: 'var(--color-charcoal)' }}>{r.from}</td>
                        <td style={{ padding: '16px', fontSize: 14, fontWeight: 600, color: 'var(--color-champagne-dark)' }}>{r.to}</td>
                        <td style={{ padding: '16px', fontSize: 13, color: 'var(--color-warm-gray)' }}>{r.duration}</td>
                        <td style={{ padding: '16px', fontSize: 13, color: 'var(--color-warm-gray-dark)' }}>{r.airlines}</td>
                        <td style={{ padding: '16px' }}>
                          <a
                            href={getWhatsAppUrl(`Hello BookMyFlight, I would like to check current fare options for flights from ${r.from} to ${r.to}.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              padding: '6px 14px',
                              background: 'var(--color-whatsapp)',
                              color: 'white',
                              fontSize: 12,
                              fontWeight: 600,
                              textDecoration: 'none',
                              borderRadius: 2,
                            }}
                          >
                            Check Fare
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                <div className="section-label" style={{ justifyContent: 'center' }}>Got Questions?</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Frequently Asked Questions About Flight Fares
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

      {/* Internal Links & Contextual Footer Banner */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'white', marginBottom: 12 }}>
            Explore Related Travel Services
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            BookMyFlight is powered by O.S Travel & Tours — offering end-to-end travel assistance from Islamabad.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/flight-booking" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Flight Booking Services
            </Link>
            <Link href="/destinations" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Explore Destinations
            </Link>
            <Link href="/visa" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Visa Assistance
            </Link>
            <Link href="/umrah" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Umrah Packages
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Contact Travel Consultants
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
