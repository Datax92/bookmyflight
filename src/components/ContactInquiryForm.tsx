'use client';

import { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/icons';

interface ContactInquiryFormProps {
  defaultService?: string;
}

const services = [
  ['Flight Booking', 'Flight booking (domestic & international)'],
  ['Ticket Change / Refund', 'Ticket change, reissue or refund'],
  ['Umrah Packages', 'Umrah packages'],
  ['Visa Assistance', 'Visa assistance'],
  ['Hotel Reservations', 'Hotel reservations'],
  ['Holiday Packages', 'Holiday & tour packages'],
  ['Group / Corporate Travel', 'Group or corporate travel'],
  ['General Travel Assistance', 'Something else'],
] as const;

export function ContactInquiryForm({ defaultService = 'Flight Booking' }: ContactInquiryFormProps = {}) {
  const [form, setForm] = useState({ name: '', phone: '', service: defaultService, message: '' });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return setError('Please enter your name.');
    setError(null);
    const text = [
      'Hello BookMyFlight, I would like to submit a travel inquiry.',
      '',
      `Name: ${form.name.trim()}`,
      form.phone ? `Phone: ${form.phone.trim()}` : null,
      `Service: ${form.service}`,
      form.message ? `Details: ${form.message.trim()}` : null,
      '',
      'Please connect me with an O.S Travel & Tours consultant. Thank you!',
    ]
      .filter((l) => l !== null)
      .join('\n');
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="bpk-card bpk-card--padded" style={{ padding: '1.5rem', display: 'grid', gap: '1rem' }}>
      <div>
        <h2 className="text-heading-3">Send us a message</h2>
        <p className="text-footnote text-secondary" style={{ marginTop: '0.25rem' }}>
          Your message opens in WhatsApp, ready to send to our travel desk.
        </p>
      </div>
      <div>
        <label className="bpk-label" htmlFor="ci-name">
          Full name
        </label>
        <input
          id="ci-name"
          className="bpk-input"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-invalid={!!error}
          aria-describedby={error ? 'ci-err' : undefined}
        />
        {error && (
          <p id="ci-err" className="text-footnote" style={{ color: '#e70866', marginTop: '0.25rem' }}>
            {error}
          </p>
        )}
      </div>
      <div>
        <label className="bpk-label" htmlFor="ci-phone">
          Phone / WhatsApp <span className="text-secondary" style={{ fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          id="ci-phone"
          className="bpk-input"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="bpk-label" htmlFor="ci-service">
          How can we help?
        </label>
        <select id="ci-service" className="bpk-select" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
          {services.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="bpk-label" htmlFor="ci-message">
          Details
        </label>
        <textarea
          id="ci-message"
          className="bpk-textarea"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Route, dates, number of travellers, PNR if you already have a booking…"
        />
      </div>
      <button type="submit" className="bpk-btn bpk-btn--featured bpk-btn--large bpk-btn--full">
        <WhatsAppIcon size={20} /> Send on WhatsApp
      </button>
    </form>
  );
}
