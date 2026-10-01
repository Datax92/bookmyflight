'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, Phone, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/icons';
import { siteConfig } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from './InquiryForm.module.css';

/** Asks for the traveller's name and hands the full request to WhatsApp. */
function InquiryForm({ lines }: { lines: string[] }) {
  const [form, setForm] = useState({ name: '', notes: '' });
  const [nameError, setNameError] = useState<string | null>(null);
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return setNameError('Enter your full name');
    setNameError(null);

    const message = [
      'Hello BookMyFlight, please send me the best fares for this trip:',
      '',
      ...lines,
      '',
      `Name: ${form.name.trim()}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n');
    const url = getWhatsAppUrl(message);
    setSentUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (sentUrl) {
    return (
      <div role="status">
        <CheckCircle2 size={40} color="#0c838a" aria-hidden />
        <h2 id="inq-title" className="text-heading-3" style={{ marginTop: '1rem' }}>
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

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: '1rem' }}>
      <div>
        <h2 id="inq-title" className="text-heading-3">Get today’s best fares</h2>
        <p className="text-footnote text-secondary" style={{ marginTop: '0.25rem' }}>
          Our O.S Travel &amp; Tours ticketing team checks live availability across airlines and replies on WhatsApp.
        </p>
      </div>
      <div>
        <label className="bpk-label" htmlFor="inq-name">
          Full name
        </label>
        <input
          id="inq-name"
          className="bpk-input"
          type="text"
          autoComplete="name"
          autoFocus
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          aria-invalid={!!nameError}
          aria-describedby={nameError ? 'inq-name-err' : undefined}
          style={nameError ? { borderColor: '#e70866' } : undefined}
        />
        {nameError && (
          <p id="inq-name-err" className="text-footnote" style={{ color: '#e70866', marginTop: '0.25rem' }}>
            {nameError}
          </p>
        )}
      </div>
      <div>
        <label className="bpk-label" htmlFor="inq-notes">
          Anything else? <span className="text-secondary" style={{ fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          id="inq-notes"
          className="bpk-textarea"
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
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

/** Pop-up shown when a traveller presses Search. */
export function InquiryModal({ lines, onClose }: { lines: string[]; onClose: () => void }) {
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      opener?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.root}>
      <div className={styles.backdrop} onClick={onClose} aria-hidden />
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="inq-title">
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          <X size={24} aria-hidden />
        </button>
        <InquiryForm lines={lines} />
      </div>
    </div>,
    document.body,
  );
}

/** Button that opens the inquiry pop-up for a trip already described on the page. */
export function InquiryButton({ lines }: { lines: string[] }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button type="button" className="bpk-btn bpk-btn--featured bpk-btn--large" onClick={() => setOpen(true)}>
        <WhatsAppIcon size={20} /> Get today’s best fares
      </button>
      {open && <InquiryModal lines={lines} onClose={close} />}
    </>
  );
}
