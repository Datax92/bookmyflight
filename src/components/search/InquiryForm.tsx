'use client';

import { useState } from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/icons';
import { siteConfig } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export interface InquirySummary {
  lines: string[];
  airlines: string[];
}

/** Collects the traveller's contact details and hands the full request to WhatsApp. */
export function InquiryForm({ summary }: { summary: InquirySummary }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', airline: 'Any airline', flexible: 'Exact dates', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = 'Enter your full name';
    if (!/^[+\d][\d\s-]{8,16}$/.test(form.phone.trim())) next.phone = 'Enter a valid mobile or WhatsApp number';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address';
    setErrors(next);
    if (Object.keys(next).length) return;

    const message = [
      'Hello BookMyFlight, please send me the best fares for this trip:',
      '',
      ...summary.lines,
      `Preferred airline: ${form.airline}`,
      `Dates: ${form.flexible}`,
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email ? `Email: ${form.email.trim()}` : null,
      form.notes ? `Notes: ${form.notes.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n');
    const url = getWhatsAppUrl(message);
    setSentUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (sentUrl) {
    return (
      <div className="bpk-card bpk-card--padded" style={{ padding: '2rem' }} role="status">
        <CheckCircle2 size={40} color="#0c838a" aria-hidden />
        <h2 className="text-heading-3" style={{ marginTop: '1rem' }}>
          Your request is ready in WhatsApp
        </h2>
        <p className="text-body" style={{ marginTop: '0.5rem' }}>
          Press send in WhatsApp and our ticketing team will reply with live fares during office hours (
          {siteConfig.hours.days}, {siteConfig.hours.weekdays}).
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
          <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--whatsapp bpk-btn--large">
            <WhatsAppIcon size={20} /> Open WhatsApp again
          </a>
          <a href={`tel:${siteConfig.contact.phone[0]}`} className="bpk-btn bpk-btn--secondary bpk-btn--large">
            <Phone size={20} aria-hidden /> Call {siteConfig.contact.phone[0]}
          </a>
        </div>
      </div>
    );
  }

  const field = (key: 'name' | 'phone' | 'email', label: string, type: string, autoComplete: string, required = true) => (
    <div>
      <label className="bpk-label" htmlFor={`inq-${key}`}>
        {label}
        {!required && <span className="text-secondary" style={{ fontWeight: 400 }}> (optional)</span>}
      </label>
      <input
        id={`inq-${key}`}
        className="bpk-input"
        type={type}
        autoComplete={autoComplete}
        value={form[key]}
        onChange={set(key)}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? `inq-${key}-err` : undefined}
        style={errors[key] ? { borderColor: '#e70866' } : undefined}
      />
      {errors[key] && (
        <p id={`inq-${key}-err`} className="text-footnote" style={{ color: '#e70866', marginTop: '0.25rem' }}>
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="bpk-card bpk-card--padded" style={{ padding: '1.5rem', display: 'grid', gap: '1rem' }}>
      <div>
        <h2 className="text-heading-3">Get today’s best fares</h2>
        <p className="text-footnote text-secondary" style={{ marginTop: '0.25rem' }}>
          Our O.S Travel &amp; Tours ticketing team checks live availability across airlines and replies on WhatsApp.
        </p>
      </div>
      {field('name', 'Full name (as on passport)', 'text', 'name')}
      {field('phone', 'Mobile / WhatsApp number', 'tel', 'tel')}
      {field('email', 'Email', 'email', 'email', false)}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', gap: '1rem' }}>
        <div>
          <label className="bpk-label" htmlFor="inq-airline">
            Preferred airline
          </label>
          <select id="inq-airline" className="bpk-select" value={form.airline} onChange={set('airline')}>
            <option>Any airline</option>
            {summary.airlines.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="bpk-label" htmlFor="inq-flex">
            Date flexibility
          </label>
          <select id="inq-flex" className="bpk-select" value={form.flexible} onChange={set('flexible')}>
            <option>Exact dates</option>
            <option>± 1 day</option>
            <option>± 3 days</option>
            <option>Any day in the same week</option>
          </select>
        </div>
      </div>
      <div>
        <label className="bpk-label" htmlFor="inq-notes">
          Anything else? <span className="text-secondary" style={{ fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          id="inq-notes"
          className="bpk-textarea"
          value={form.notes}
          onChange={set('notes')}
          placeholder="e.g. extra baggage, wheelchair, Umrah visa, group of 12"
        />
      </div>
      <button type="submit" className="bpk-btn bpk-btn--featured bpk-btn--large bpk-btn--full">
        <WhatsAppIcon size={20} /> Send request on WhatsApp
      </button>
      <p className="text-caption text-secondary">
        Your details are only shared with our ticketing team to prepare your quote. We never ask for card details on
        WhatsApp.
      </p>
    </form>
  );
}
