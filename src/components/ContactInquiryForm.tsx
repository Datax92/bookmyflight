'use client';

import { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface ContactInquiryFormProps {
  defaultService?: string;
}

export function ContactInquiryForm({ defaultService = 'Flight Booking' }: ContactInquiryFormProps = {}) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: defaultService,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textLines = [
      'Hello BookMyFlight, I would like to submit a travel inquiry.',
      '',
      `Name: ${form.name}`,
      form.phone ? `Phone / Contact: ${form.phone}` : null,
      `Service: ${form.service}`,
      form.message ? `Details: ${form.message}` : null,
      '',
      'Please connect me with an O.S Travel & Tours consultant. Thank you!',
    ];
    const text = textLines.filter(Boolean).join('\n');
    const url = getWhatsAppUrl(text);
    window.open(url, '_blank');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: 'white',
    border: '1px solid rgba(0,0,0,0.12)',
    color: 'var(--color-charcoal)',
    fontSize: 14,
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    borderRadius: 2,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--color-charcoal)',
    marginBottom: 8,
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: 'white',
        border: '1px solid rgba(0,0,0,0.08)',
        padding: 'clamp(28px, 4vw, 44px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--color-charcoal)',
            marginBottom: 8,
          }}
        >
          Send an Instant Travel Inquiry
        </h3>
        <p style={{ fontSize: 14, color: 'var(--color-warm-gray)', lineHeight: 1.6 }}>
          Fill in your details below and our consultants will receive your message directly on WhatsApp.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 16,
          marginBottom: 20,
        }}
      >
        <div>
          <label style={labelStyle}>Your Name *</label>
          <input
            type="text"
            placeholder="e.g., Muhammad Ali"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Phone / WhatsApp *</label>
          <input
            type="tel"
            placeholder="e.g., +92 300 1234567"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={inputStyle}
            required
          />
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Service Required</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="Flight Booking">Flight Booking (Domestic & International)</option>
          <option value="Umrah Packages">Umrah Packages (Executive / Deluxe / Custom)</option>
          <option value="Visa Assistance">Visa Assistance (US, UK, Schengen, Saudi, Asia)</option>
          <option value="Hotel Reservations">Hotel Reservations Worldwide</option>
          <option value="Holiday Packages">Holiday & Tour Packages</option>
          <option value="General Travel Assistance">General Travel Assistance</option>
        </select>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={labelStyle}>Trip Details & Specific Requirements</label>
        <textarea
          rows={4}
          placeholder="Share your travel dates, preferred destinations, number of travelers, or any specific questions..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        className="btn-whatsapp"
        style={{
          width: '100%',
          padding: '16px 28px',
          fontSize: 15,
          justifyContent: 'center',
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Send Inquiry to WhatsApp Consultant
      </button>
    </form>
  );
}
