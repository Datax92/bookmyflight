import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { destinations, type DestinationItem } from '@/lib/config';
import { getDestinationWhatsAppUrl, getWhatsAppUrl } from '@/lib/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.id === slug);

  if (!dest) {
    return {
      title: 'Destination Not Found — BookMyFlight',
    };
  }

  return {
    title: `Flights to ${dest.name} from Pakistan — Travel Guide & Fares | BookMyFlight`,
    description: `Complete travel guide for ${dest.name}, ${dest.country}. Flight times from Islamabad, Lahore, and Karachi, visa prerequisites, top attractions, and custom packages from BookMyFlight.`,
    alternates: {
      canonical: `https://bookmyflight.pk/destinations/${dest.id}`,
    },
    openGraph: {
      title: `${dest.name} Travel & Flight Guide from Pakistan | BookMyFlight`,
      description: dest.description,
      url: `https://bookmyflight.pk/destinations/${dest.id}`,
      type: 'article',
      images: [
        {
          url: `https://bookmyflight.pk${dest.image}`,
          alt: `${dest.name}, ${dest.country} — Travel Guide`,
        },
      ],
    },
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.id === slug);

  if (!dest) {
    notFound();
  }

  const relatedDestinations = destinations.filter((d) => d.id !== dest.id).slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dest.faqs.map((faq) => ({
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
              { label: 'Destinations', href: '/destinations' },
              { label: dest.name },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 800 }}>
              <div className="section-label">{dest.country} • {dest.travelType}</div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  color: 'white',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                Flights & Travel Guide to <span style={{ color: 'var(--color-champagne)' }}>{dest.name}</span>
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
                {dest.tagline}
              </p>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                  maxWidth: 720,
                }}
              >
                {dest.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getDestinationWhatsAppUrl(dest.name, dest.travelType)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Inquire for {dest.name} on WhatsApp
                </a>
                <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 14 }}>
                  Compare Fares
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Main Content & Visual Showcase */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          {/* Hero Image Showcase */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '16/9',
              maxHeight: 520,
              overflow: 'hidden',
              borderRadius: 2,
              marginBottom: 64,
            }}
            className="image-reveal"
          >
            <Image
              src={dest.image}
              alt={`${dest.name}, ${dest.country} — Luxury Travel Showcase`}
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              marginBottom: 64,
            }}
          >
            {/* Left Column: Flight & Visa Information */}
            <div>
              <div className="section-label">Aviation Logistics</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                Flight Details from Pakistan to {dest.name}
              </h2>
              <div className="premium-divider" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
                <div style={{ background: 'white', padding: 24, border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)', marginBottom: 6 }}>
                    Flight Duration
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--color-charcoal)', fontWeight: 500 }}>
                    {dest.flightTime}
                  </p>
                </div>

                <div style={{ background: 'white', padding: 24, border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)', marginBottom: 6 }}>
                    Primary Destination Airports
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--color-charcoal)' }}>
                    {dest.primaryAirports.join(' • ')}
                  </p>
                </div>

                <div style={{ background: 'white', padding: 24, border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)', marginBottom: 6 }}>
                    Airlines Operating This Route
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--color-charcoal)' }}>
                    {dest.airlines.join(', ')}
                  </p>
                </div>

                <div style={{ background: 'white', padding: 24, border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)', marginBottom: 6 }}>
                    Visa Guidelines for Pakistani Citizens
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--color-charcoal)', lineHeight: 1.6 }}>
                    {dest.visaType}
                  </p>
                  <Link
                    href="/visa"
                    style={{
                      display: 'inline-block',
                      marginTop: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--color-whatsapp-dark)',
                      textDecoration: 'none',
                    }}
                  >
                    View Full Visa Requirements →
                  </Link>
                </div>

                <div style={{ background: 'white', padding: 24, border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)', marginBottom: 6 }}>
                    Optimal Travel Season
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--color-charcoal)' }}>
                    {dest.bestSeason}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Travel Tips */}
            <div>
              <div className="section-label">Must-Visit Experiences</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                Top Highlights in {dest.name}
              </h2>
              <div className="premium-divider" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                {dest.highlights.map((h, i) => (
                  <div
                    key={h}
                    className="card-interactive"
                    style={{
                      padding: 20,
                      background: 'white',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                    }}
                  >
                    <span style={{ color: 'var(--color-champagne)', fontSize: 18, lineHeight: 1, flexShrink: 0 }}>
                      0{i + 1}
                    </span>
                    <p style={{ fontSize: 15, color: 'var(--color-charcoal)', fontWeight: 500, lineHeight: 1.5 }}>
                      {h}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: 'var(--color-charcoal)',
                  color: 'white',
                  padding: 'clamp(24px, 4vw, 36px)',
                  borderRadius: 2,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 20,
                    color: 'white',
                    marginBottom: 16,
                  }}
                >
                  Practical Tips for Pakistani Travelers
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
                  {dest.travelTips.map((tip) => (
                    <li key={tip} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--color-champagne)', fontSize: 16 }}>•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div style={{ maxWidth: 880, margin: '0 auto 64px' }}>
            <ContactInquiryForm defaultService="flight" />
          </div>

          {/* Destination FAQs */}
          <AnimateIn delay={0.2}>
            <div style={{ maxWidth: 800, margin: '0 auto 64px' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div className="section-label" style={{ justifyContent: 'center' }}>Travel Q&A</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Questions About Traveling to {dest.name}
                </h2>
                <div className="premium-divider" style={{ margin: '16px auto' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {dest.faqs.map((faq) => (
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

          {/* Related Destinations */}
          <AnimateIn delay={0.25}>
            <div>
              <div className="section-label">More Inspiration</div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 26,
                  color: 'var(--color-charcoal)',
                  marginBottom: 24,
                }}
              >
                Other Popular Destinations
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 24,
                }}
              >
                {relatedDestinations.map((rd) => (
                  <Link
                    key={rd.id}
                    href={`/destinations/${rd.id}`}
                    style={{ textDecoration: 'none' }}
                    className="card-interactive"
                  >
                    <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                      <Image
                        src={rd.image}
                        alt={`${rd.name} Travel`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div style={{ padding: 20 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-champagne-dark)', textTransform: 'uppercase' }}>
                        {rd.country}
                      </div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, color: 'var(--color-charcoal)', marginTop: 4 }}>
                        {rd.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Internal Links Banner */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'white', marginBottom: 12 }}>
            Complete Your {dest.name} Travel Plan
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Flight Booking
            </Link>
            <Link href="/visa" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Visa Assistance
            </Link>
            <Link href="/hotels" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Hotel Reservations
            </Link>
            <Link href="/holidays" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Holiday Packages
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
