import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimateIn } from '@/components/AnimateIn';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Flight Booking in Islamabad — Trusted Travel Agency in Blue Area | BookMyFlight',
  description:
    'Looking for reliable flight booking and air ticketing in Islamabad? Visit our office in Blue Area or message our IATA-accredited travel consultants on WhatsApp (+92 333 5542877). Powered by O.S Travel & Tours.',
  alternates: {
    canonical: 'https://bookmyflight.pk/flight-booking-islamabad',
  },
  openGraph: {
    title: 'Flight Booking in Islamabad | BookMyFlight',
    description:
      'IATA-accredited air ticketing and travel consultancy in Blue Area, Islamabad. Flights, Umrah, visa assistance, and corporate travel.',
    url: 'https://bookmyflight.pk/flight-booking-islamabad',
    type: 'website',
  },
};

const islamabadServices = [
  {
    title: 'International Air Ticketing',
    desc: 'Direct and connecting flights from Islamabad International Airport (ISB) to UK, Europe, Middle East, Far East, and North America with verified baggage.',
  },
  {
    title: 'Domestic Pakistan Flights',
    desc: 'Daily flights from ISB to Karachi, Quetta, Lahore, and direct mountain flights to Skardu and Gilgit.',
  },
  {
    title: 'Umrah Package Consultation',
    desc: 'Face-to-face consultation in our Blue Area office for family Umrah packages, Markazia hotels, and group departures.',
  },
  {
    title: 'Global Visa Consultancy',
    desc: 'Professional document verification, appointment assistance, and file processing for US, UK, Canada, Schengen, and Asian e-visas.',
  },
];

export default function FlightBookingIslamabadPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'BookMyFlight — O.S Travel & Tours Islamabad',
    description:
      'Premier flight booking and travel consultancy in Blue Area, Islamabad. International and domestic flights, Umrah, and visa services.',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: 'https://bookmyflight.pk/flight-booking-islamabad',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.coordinates.lat,
      longitude: siteConfig.address.coordinates.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <>
      <JsonLd schema={localBusinessSchema} />

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
              { label: 'Flight Booking Islamabad' },
            ]}
          />

          <AnimateIn>
            <div style={{ maxWidth: 760 }}>
              <div className="section-label">Islamabad & Rawalpindi</div>
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
                Premier <span style={{ color: 'var(--color-champagne)' }}>Flight Booking</span>
                <br />In Islamabad
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Located in the heart of Blue Area, Islamabad. O.S Travel & Tours and BookMyFlight provide trusted, IATA-accredited air ticketing, transparent fare comparison, and dedicated travel support.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight Islamabad team, I would like to inquire about flight bookings.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 14 }}
                >
                  Message Islamabad Office on WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone[0]}`}
                  className="btn-secondary"
                  style={{ fontSize: 14 }}
                >
                  Call: {siteConfig.contact.phone[0]}
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Local Office Highlights */}
      <section style={{ background: 'var(--color-ivory)', padding: 'var(--spacing-section) 0' }}>
        <div className="container-premium">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              marginBottom: 64,
            }}
          >
            {/* Left: Office Information */}
            <AnimateIn>
              <div
                style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.06)',
                  padding: 'clamp(24px, 4vw, 40px)',
                  height: '100%',
                }}
              >
                <div className="section-label">Visit Our Office</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(22px, 3vw, 30px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  O.S Travel & Tours — Blue Area Office
                </h2>
                <div className="premium-divider" />
                <p style={{ fontSize: 15, color: 'var(--color-warm-gray)', lineHeight: 1.7, marginBottom: 20 }}>
                  We welcome travelers for in-person consultations, visa file preparation, and group travel arrangements in our Islamabad office.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)' }}>
                      Physical Address
                    </span>
                    <p style={{ fontSize: 14, color: 'var(--color-charcoal)', marginTop: 4, lineHeight: 1.6 }}>
                      {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city}, {siteConfig.address.country}
                    </p>
                  </div>

                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)' }}>
                      Direct Phone Lines
                    </span>
                    <div style={{ marginTop: 4 }}>
                      {siteConfig.contact.phone.map((p) => (
                        <a key={p} href={`tel:${p}`} style={{ display: 'block', fontSize: 15, fontWeight: 600, color: 'var(--color-charcoal)', textDecoration: 'none' }}>
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-dark)' }}>
                      Operating Hours
                    </span>
                    <p style={{ fontSize: 14, color: 'var(--color-charcoal)', marginTop: 4 }}>
                      {siteConfig.hours.days}: {siteConfig.hours.weekdays}
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.address.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '12px 20px' }}
                >
                  View on Google Maps →
                </a>
              </div>
            </AnimateIn>

            {/* Right: Islamabad Airport Travel Advice */}
            <AnimateIn delay={0.15}>
              <div
                style={{
                  background: 'var(--color-charcoal)',
                  color: 'white',
                  padding: 'clamp(24px, 4vw, 40px)',
                  height: '100%',
                }}
              >
                <div className="section-label" style={{ color: 'var(--color-champagne)' }}>
                  Airport Guidelines
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(22px, 3vw, 30px)',
                    color: 'white',
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  Departing from Islamabad Airport (ISB)
                </h2>
                <div className="premium-divider" />
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                  Islamabad International Airport is situated approximately 35-45 minutes from Blue Area via Srinagar Highway / M-1.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                  <div>
                    <strong style={{ color: 'var(--color-champagne)' }}>International Reporting Time:</strong> 3.5 to 4 hours before departure to allow comfortable baggage screening and FIA immigration queues.
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-champagne)' }}>Domestic Reporting Time:</strong> 1.5 to 2 hours before scheduled departure. Counters close strictly 45 minutes prior.
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-champagne)' }}>Direct International Flights from ISB:</strong> Dubai, Doha, Riyadh, Jeddah, Dammam, Istanbul, Bangkok, Baku, London (via connections), and Toronto.
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Services Grid */}
          <AnimateIn delay={0.2}>
            <div style={{ marginBottom: 64 }}>
              <div style={{ maxWidth: 700, marginBottom: 36 }}>
                <div className="section-label">Comprehensive Support</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 3vw, 34px)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Services Available at Our Islamabad Travel Desk
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                  gap: 'clamp(16px, 2.5vw, 24px)',
                }}
              >
                {islamabadServices.map((s) => (
                  <div
                    key={s.title}
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
                      {s.title}
                    </h4>
                    <p style={{ fontSize: 13, color: 'var(--color-warm-gray)', lineHeight: 1.6 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Contact Inquiry Form */}
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <ContactInquiryForm defaultService="flight" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ background: 'var(--color-charcoal)', padding: '60px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="container-premium" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'white', marginBottom: 12 }}>
            Connected Travel Services
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            Explore specialized travel pages for Islamabad & Rawalpindi residents.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/cheap-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Cheap Flights Tips
            </Link>
            <Link href="/international-flights" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              International Flights
            </Link>
            <Link href="/umrah" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Islamabad Umrah Packages
            </Link>
            <Link href="/visa" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Visa Assistance Islamabad
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
