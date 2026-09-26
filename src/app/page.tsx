'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateIn } from '@/components/AnimateIn';
import { siteConfig, services, destinations } from '@/lib/config';
import {
  getWhatsAppUrl,
  getFlightWhatsAppUrl,
  getDestinationWhatsAppUrl,
} from '@/lib/whatsapp';

// ============================================================
// HOMEPAGE
// ============================================================
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FlightInquirySection />
      <ServicesSection />
      <DestinationsSection />
      <WhyBookMyFlightSection />
      <HowItWorksSection />
      <UmrahSection />
      <ContactCtaSection />
    </>
  );
}

// ============================================================
// HERO SECTION
// ============================================================
function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'clamp(560px, 92svh, 950px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 'clamp(110px, 14vh, 150px) 0 clamp(60px, 8vh, 100px)',
      }}
    >
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero/hero-aviation.jpg"
          alt="Premium aviation — BookMyFlight"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.4) 40%, rgba(26,26,26,0.7) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(26,26,26,0.6) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container-premium"
        style={{ position: 'relative', zIndex: 1, width: '100%' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: 700 }}
        >
          <div className="section-label" style={{ color: 'var(--color-champagne)' }}>
            Premium Travel Services
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 600,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}
          >
            Your Journey.
            <br />
            <span style={{ color: 'var(--color-champagne)' }}>
              Our Expertise.
            </span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.7,
              maxWidth: 540,
              marginBottom: 40,
            }}
          >
            BookMyFlight connects you with experienced travel consultants who find the right flights, packages, and personalized travel solutions for your journey.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              alignItems: 'center',
            }}
          >
            <a
              href={getWhatsAppUrl(
                'Hello BookMyFlight, I would like to get the best available fare.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 14 }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Best Fare on WhatsApp
            </a>
            <a href="#services" className="btn-secondary">
              Explore Travel Services
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden md:flex flex-col items-center"
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              width: 1,
              height: 30,
              background:
                'linear-gradient(180deg, var(--color-champagne), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// FLIGHT INQUIRY SECTION
// ============================================================
function FlightInquirySection() {
  const [form, setForm] = useState({
    from: '',
    to: '',
    departure: '',
    returnDate: '',
    passengers: '1',
    cabin: 'Economy',
    tripType: 'Return',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getFlightWhatsAppUrl({
      from: form.from,
      to: form.to,
      departure: form.departure,
      returnDate: form.tripType === 'Return' ? form.returnDate : undefined,
      passengers: parseInt(form.passengers),
      cabin: form.cabin,
      tripType: form.tripType,
    });
    window.open(url, '_blank');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(201,169,110,0.2)',
    color: 'white',
    fontSize: 14,
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-champagne)',
    marginBottom: 8,
  };

  const today = new Date().toISOString().split('T')[0];

  const popularRoutes = [
    { from: 'Islamabad (ISB)', to: 'Dubai (DXB)', label: 'Islamabad ⇄ Dubai' },
    { from: 'Lahore (LHE)', to: 'London (LHR)', label: 'Lahore ⇄ London' },
    { from: 'Islamabad (ISB)', to: 'Jeddah (JED)', label: 'Islamabad ⇄ Jeddah' },
    { from: 'Karachi (KHI)', to: 'Istanbul (IST)', label: 'Karachi ⇄ Istanbul' },
    { from: 'Islamabad (ISB)', to: 'Bangkok (BKK)', label: 'Islamabad ⇄ Bangkok' },
  ];

  return (
    <section
      id="flight-inquiry"
      style={{
        background: 'var(--color-charcoal)',
        padding: '60px 0',
        position: 'relative',
        marginTop: -2,
      }}
    >
      <div className="container-premium">
        <AnimateIn>
          <div
            style={{
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            <div
              className="section-label"
              style={{ justifyContent: 'center' }}
            >
              Flight Inquiry
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: 'white',
                fontWeight: 600,
              }}
            >
              Where Would You Like to Fly?
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,169,110,0.12)',
              padding: 'clamp(24px, 4vw, 40px)',
            }}
          >
            {/* Quick Route Pills */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ ...labelStyle, marginBottom: 12 }}>Popular Direct Routes</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {popularRoutes.map((route) => (
                  <button
                    key={route.label}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, from: route.from, to: route.to }))}
                    style={{
                      background:
                        form.from === route.from && form.to === route.to
                          ? 'var(--color-champagne)'
                          : 'rgba(255,255,255,0.06)',
                      color:
                        form.from === route.from && form.to === route.to
                          ? 'var(--color-charcoal)'
                          : 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(201,169,110,0.25)',
                      padding: '6px 14px',
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      borderRadius: 2,
                    }}
                  >
                    ✈ {route.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Type & Cabin Class Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 24,
                marginBottom: 24,
              }}
            >
              <div style={{ flex: '1 1 180px' }}>
                <label style={labelStyle}>Trip Type</label>
                <select
                  value={form.tripType}
                  onChange={(e) =>
                    setForm({ ...form, tripType: e.target.value })
                  }
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="Return">Return</option>
                  <option value="One Way">One Way</option>
                  <option value="Multi City">Multi City</option>
                </select>
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={labelStyle}>Cabin Class</label>
                <select
                  value={form.cabin}
                  onChange={(e) =>
                    setForm({ ...form, cabin: e.target.value })
                  }
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
              <div style={{ flex: '1 1 120px' }}>
                <label style={labelStyle}>Travelers</label>
                <select
                  value={form.passengers}
                  onChange={(e) =>
                    setForm({ ...form, passengers: e.target.value })
                  }
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Traveler' : 'Travelers'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* From / To / Dates Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: 20,
                marginBottom: 32,
              }}
            >
              <div>
                <label style={labelStyle}>From</label>
                <input
                  type="text"
                  placeholder="e.g., Islamabad (ISB)"
                  value={form.from}
                  onChange={(e) =>
                    setForm({ ...form, from: e.target.value })
                  }
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>To</label>
                <input
                  type="text"
                  placeholder="e.g., Dubai (DXB)"
                  value={form.to}
                  onChange={(e) => setForm({ ...form, to: e.target.value })}
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Departure</label>
                <input
                  type="date"
                  min={today}
                  value={form.departure}
                  onChange={(e) => {
                    const newDep = e.target.value;
                    setForm((prev) => ({
                      ...prev,
                      departure: newDep,
                      returnDate:
                        prev.returnDate && prev.returnDate < newDep
                          ? newDep
                          : prev.returnDate,
                    }));
                  }}
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                  required
                />
              </div>
              {form.tripType === 'Return' && (
                <div>
                  <label style={labelStyle}>Return</label>
                  <input
                    type="date"
                    min={form.departure || today}
                    value={form.returnDate}
                    onChange={(e) =>
                      setForm({ ...form, returnDate: e.target.value })
                    }
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                    required
                  />
                </div>
              )}
            </div>

            {/* Submit */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="btn-whatsapp"
                style={{
                  padding: '18px 48px',
                  fontSize: 15,
                  width: '100%',
                  maxWidth: 400,
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get My Fare on WhatsApp
              </button>
            </div>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}

// ============================================================
// SERVICES SECTION
// ============================================================
function ServicesSection() {
  const enabledServices = services.filter((s) => s.enabled);

  return (
    <section
      id="services"
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'var(--color-ivory)',
      }}
    >
      <div className="container-premium">
        <AnimateIn>
          <div
            style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}
          >
            <div
              className="section-label"
              style={{ justifyContent: 'center' }}
            >
              Our Services
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: 'var(--color-charcoal)',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Comprehensive Travel Solutions
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'var(--color-warm-gray)',
                lineHeight: 1.7,
              }}
            >
              From flights and Umrah packages to visa assistance — our
              experienced travel consultants handle every detail of your journey.
            </p>
          </div>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 24,
          }}
        >
          {enabledServices.map((service, i) => (
            <AnimateIn key={service.id} delay={i * 0.08}>
              <div
                style={{
                  background: 'white',
                  padding: 'clamp(24px, 4vw, 40px)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0, 1)',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 60px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'var(--color-champagne)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                }}
              >
                {/* Gold accent line */}
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background:
                      'linear-gradient(90deg, var(--color-champagne), var(--color-gold))',
                    marginBottom: 24,
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 22,
                    fontWeight: 600,
                    color: 'var(--color-charcoal)',
                    marginBottom: 4,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-champagne)',
                    marginBottom: 16,
                  }}
                >
                  {service.subtitle}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--color-warm-gray)',
                    lineHeight: 1.7,
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--color-whatsapp-dark)',
                    textDecoration: 'none',
                    transition: 'gap 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '12px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '8px';
                  }}
                >
                  {service.whatsappCta} →
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DESTINATIONS SECTION
// ============================================================
function DestinationsSection() {
  return (
    <section
      id="destinations"
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'var(--color-charcoal)',
      }}
    >
      <div className="container-premium">
        <AnimateIn>
          <div style={{ maxWidth: 600, marginBottom: 64 }}>
            <div className="section-label">Featured Destinations</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: 'white',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Explore the World
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
              }}
            >
              Discover popular destinations and let our travel experts find the
              best routes and fares for your journey.
            </p>
          </div>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: 20,
          }}
        >
          {destinations.map((dest, i) => (
            <AnimateIn key={dest.id} delay={i * 0.06}>
              <div
                className="image-reveal"
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country} — BookMyFlight`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 40%, rgba(26,26,26,0.9) 100%)',
                  }}
                />
                {/* Content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 28,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-champagne)',
                      marginBottom: 8,
                    }}
                  >
                    {dest.travelType}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 24,
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: 4,
                    }}
                  >
                    {dest.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.5)',
                      marginBottom: 4,
                    }}
                  >
                    {dest.country}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.5,
                      marginBottom: 16,
                    }}
                  >
                    {dest.description}
                  </p>
                  <a
                    href={getDestinationWhatsAppUrl(
                      dest.name,
                      dest.travelType
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 20px',
                      background: 'var(--color-whatsapp)',
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      borderRadius: 2,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="14"
                      height="14"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Explore {dest.name}
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// WHY BOOKMYFLIGHT SECTION
// ============================================================
function WhyBookMyFlightSection() {
  const advantages = [
    {
      number: '01',
      title: 'Personalized Travel Assistance',
      description:
        'Every traveler is unique. Our consultants take the time to understand your preferences and find solutions tailored to your needs.',
    },
    {
      number: '02',
      title: 'Competitive Fares',
      description:
        'We work to find the most competitive fares available, leveraging our industry expertise and network.',
    },
    {
      number: '03',
      title: 'Experienced Travel Consultants',
      description:
        'Our team of knowledgeable travel professionals guides you through every step of the booking process.',
    },
    {
      number: '04',
      title: 'End-to-End Travel Support',
      description:
        'From your first inquiry to your return journey — we provide comprehensive support at every stage.',
    },
    {
      number: '05',
      title: 'Flexible Travel Solutions',
      description:
        'Whether you need a simple flight or a complex multi-destination itinerary, we make it work.',
    },
    {
      number: '06',
      title: 'Customer-First Service',
      description:
        'Your satisfaction is our priority. We go the extra mile to ensure a smooth and enjoyable experience.',
    },
  ];

  return (
    <section
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'var(--color-ivory)',
      }}
    >
      <div className="container-premium">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left: Heading */}
          <AnimateIn>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="section-label">Why Choose Us</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 16,
                  lineHeight: 1.15,
                }}
              >
                Travel With
                <br />
                <span style={{ color: 'var(--color-champagne)' }}>
                  Confidence
                </span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: 'var(--color-warm-gray)',
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                BookMyFlight connects you with professional travel consultants
                who provide personalized service, competitive fares, and
                comprehensive travel support.
              </p>
              <a
                href={getWhatsAppUrl(
                  'Hello BookMyFlight, I would like to speak with a travel expert.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Talk to a Travel Expert
              </a>
            </div>
          </AnimateIn>

          {/* Right: Advantages */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {advantages.map((adv, i) => (
              <AnimateIn key={adv.number} delay={i * 0.08} direction="right">
                <div
                  style={{
                    padding: '36px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    gap: 24,
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 32,
                      fontWeight: 400,
                      color: 'var(--color-champagne)',
                      lineHeight: 1,
                      flexShrink: 0,
                      opacity: 0.6,
                    }}
                  >
                    {adv.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 20,
                        fontWeight: 600,
                        color: 'var(--color-charcoal)',
                        marginBottom: 8,
                      }}
                    >
                      {adv.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: 'var(--color-warm-gray)',
                        lineHeight: 1.7,
                      }}
                    >
                      {adv.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// HOW IT WORKS SECTION
// ============================================================
function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Plans',
      description:
        'Share your travel requirements — destination, dates, passengers, and preferences via WhatsApp or our inquiry form.',
    },
    {
      step: '02',
      title: 'We Find the Right Options',
      description:
        'Our travel consultants search for the best available fares, packages, and travel solutions matching your needs.',
    },
    {
      step: '03',
      title: 'Review Your Fare / Package',
      description:
        'Receive personalized options directly on WhatsApp. Compare, ask questions, and choose the best fit.',
    },
    {
      step: '04',
      title: 'Confirm Through Our Team',
      description:
        'Finalize your booking with our travel team. We handle the details so you can focus on your journey.',
    },
  ];

  return (
    <section
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'var(--color-charcoal)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold accent */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-premium">
        <AnimateIn>
          <div
            style={{
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto 72px',
            }}
          >
            <div
              className="section-label"
              style={{ justifyContent: 'center' }}
            >
              Your Journey
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: 'white',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              How It Works
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
              }}
            >
              From your first inquiry to confirmation — a simple, personalized
              booking experience.
            </p>
          </div>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 40,
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <AnimateIn key={step.step} delay={i * 0.1}>
              <div style={{ textAlign: 'center', padding: '0 12px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 56,
                    fontWeight: 400,
                    color: 'var(--color-champagne)',
                    opacity: 0.25,
                    marginBottom: 16,
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 20,
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <a
              href={getWhatsAppUrl(
                'Hello BookMyFlight, I would like to plan my trip.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: 15, padding: '18px 48px' }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Plan My Trip
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

// ============================================================
// UMRAH SECTION
// ============================================================
function UmrahSection() {
  return (
    <section
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'var(--color-ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-premium">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <AnimateIn direction="left">
            <div
              className="image-reveal"
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                maxHeight: 550,
              }}
            >
              <Image
                src="/images/destinations/makkah.jpg"
                alt="Umrah packages — BookMyFlight"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="right" delay={0.15}>
            <div>
              <div className="section-label">Umrah Services</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  color: 'var(--color-charcoal)',
                  fontWeight: 600,
                  marginBottom: 16,
                  lineHeight: 1.15,
                }}
              >
                Complete Umrah
                <br />
                <span style={{ color: 'var(--color-champagne)' }}>
                  Packages
                </span>
              </h2>
              <div className="premium-divider" />
              <p
                style={{
                  fontSize: 16,
                  color: 'var(--color-warm-gray)',
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                Experience a seamless Umrah journey with our comprehensive
                packages. We handle visa processing, flight bookings, hotel
                accommodations, and ground transportation — so you can focus on
                your spiritual journey.
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {[
                  'Umrah Visa Processing',
                  'Return Flights',
                  'Hotel Accommodations in Makkah & Madinah',
                  'Ground Transportation & Transfers',
                  'Guided Support',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontSize: 14,
                      color: 'var(--color-warm-gray-dark)',
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--color-champagne)',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppUrl(
                  'Hello BookMyFlight, I am interested in Umrah packages. Please share available options and pricing.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Discuss Your Umrah Package
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT CTA SECTION
// ============================================================
function ContactCtaSection() {
  return (
    <section
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'var(--color-charcoal)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(201,169,110,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-premium"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <AnimateIn>
          <div
            style={{
              textAlign: 'center',
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            <div
              className="section-label"
              style={{ justifyContent: 'center' }}
            >
              Get in Touch
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: 'white',
                fontWeight: 600,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Ready to Plan
              <br />
              Your Next Journey?
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Our travel consultants are ready to help you find the best flights,
              packages, and travel solutions. Start the conversation today.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                justifyContent: 'center',
                marginBottom: 48,
              }}
            >
              <a
                href={getWhatsAppUrl(
                  'Hello BookMyFlight, I would like to speak with a travel consultant.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: 15 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to a Travel Expert
              </a>
              <Link href="/contact" className="btn-secondary">
                View Contact Details
              </Link>
            </div>

            {/* Contact Info Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '32px 48px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: 32,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-champagne)',
                    marginBottom: 6,
                  }}
                >
                  WhatsApp
                </div>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: 15,
                  }}
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-champagne)',
                    marginBottom: 6,
                  }}
                >
                  Email
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: 15,
                  }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-champagne)',
                    marginBottom: 6,
                  }}
                >
                  Office
                </div>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 15,
                  }}
                >
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
