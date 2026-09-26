'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimateIn } from '@/components/AnimateIn';
import { getFlightWhatsAppUrl, getWhatsAppUrl } from '@/lib/whatsapp';

export default function FlightsPage() {
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
    padding: '16px 18px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(201,169,110,0.2)',
    color: 'white',
    fontSize: 15,
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
    marginBottom: 10,
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: 'clamp(340px, 42vh, 460px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: 'clamp(90px, 12vh, 120px) 0 40px',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/hero/hero-aviation.jpg"
            alt="Flight booking — BookMyFlight"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.6) 50%, rgba(26,26,26,0.95) 100%)',
            }}
          />
        </div>
        <div
          className="container-premium"
          style={{ position: 'relative', zIndex: 1, width: '100%' }}
        >
          <AnimateIn>
            <div className="section-label">Flight Booking</div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: 'white',
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Find Your
              <br />
              <span style={{ color: 'var(--color-champagne)' }}>Perfect Flight</span>
            </h1>
            <p
              style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: 500,
                lineHeight: 1.7,
              }}
            >
              Share your travel details and our consultants will find the best
              available fares for your journey.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Flight Inquiry Form */}
      <section
        style={{
          background: 'var(--color-charcoal)',
          padding: 'clamp(50px, 8vw, 90px) 0',
        }}
      >
        <div className="container-premium">
          <AnimateIn>
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: 900,
                margin: '0 auto',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,169,110,0.12)',
                padding: 'clamp(24px, 4vw, 48px)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 28,
                  color: 'white',
                  marginBottom: 8,
                }}
              >
                Flight Inquiry
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 14,
                  marginBottom: 36,
                }}
              >
                Fill in your travel details and receive the best available fares
                directly on WhatsApp.
              </p>

              {/* Quick Route Pills */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ ...labelStyle, marginBottom: 12 }}>Popular Routes</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    { from: 'Islamabad (ISB)', to: 'Dubai (DXB)', label: 'Islamabad ⇄ Dubai' },
                    { from: 'Lahore (LHE)', to: 'London (LHR)', label: 'Lahore ⇄ London' },
                    { from: 'Islamabad (ISB)', to: 'Jeddah (JED)', label: 'Islamabad ⇄ Jeddah' },
                    { from: 'Karachi (KHI)', to: 'Istanbul (IST)', label: 'Karachi ⇄ Istanbul' },
                    { from: 'Islamabad (ISB)', to: 'Bangkok (BKK)', label: 'Islamabad ⇄ Bangkok' },
                  ].map((route) => (
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

              {/* Trip Type Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div>
                  <label style={labelStyle}>Trip Type</label>
                  <select
                    value={form.tripType}
                    onChange={(e) => setForm({ ...form, tripType: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="Return">Return</option>
                    <option value="One Way">One Way</option>
                    <option value="Multi City">Multi City</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Cabin Class</label>
                  <select
                    value={form.cabin}
                    onChange={(e) => setForm({ ...form, cabin: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Travelers</label>
                  <select
                    value={form.passengers}
                    onChange={(e) => setForm({ ...form, passengers: e.target.value })}
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

              {/* From / To */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div>
                  <label style={labelStyle}>From</label>
                  <input
                    type="text"
                    placeholder="e.g., Islamabad (ISB)"
                    value={form.from}
                    onChange={(e) => setForm({ ...form, from: e.target.value })}
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
              </div>

              {/* Dates */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                <div>
                  <label style={labelStyle}>Departure Date</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
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
                    <label style={labelStyle}>Return Date</label>
                    <input
                      type="date"
                      min={form.departure || new Date().toISOString().split('T')[0]}
                      value={form.returnDate}
                      onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                      style={{ ...inputStyle, colorScheme: 'dark' }}
                      required
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn-whatsapp"
                style={{
                  width: '100%',
                  padding: '20px',
                  fontSize: 16,
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Flight Fare on WhatsApp
              </button>
            </form>
          </AnimateIn>

          {/* Process explanation */}
          <AnimateIn delay={0.2}>
            <div
              style={{
                maxWidth: 700,
                margin: '64px auto 0',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 22,
                  color: 'white',
                  marginBottom: 16,
                }}
              >
                How It Works
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                Submit your flight details above. Our travel consultant will
                receive your inquiry on WhatsApp and respond with the best
                available fares from multiple airlines. Compare options, ask
                questions, and confirm your booking — all through a direct
                conversation with our team.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
