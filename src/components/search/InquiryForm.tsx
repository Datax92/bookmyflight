'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Phone, Plane, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/icons';
import { findAirport } from '@/lib/airports';
import { siteConfig } from '@/lib/config';
import { formatLongDate, summaryLines, travellersLabel, tripLabels, type FlightSearch } from '@/lib/search';
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
      <div className={styles.sent} role="status">
        <span className={styles.sentCheck} aria-hidden>
          <Check size={32} strokeWidth={3} />
        </span>
        <h2 className="text-heading-3">Your request is ready in WhatsApp</h2>
        <p className="text-body">
          Press send in WhatsApp and our ticketing team will reply with live fares during office hours (
          {siteConfig.hours.days}, {siteConfig.hours.weekdays}).
        </p>
        <div className={styles.sentActions}>
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
    <form onSubmit={onSubmit} noValidate className={styles.form}>
      <div>
        <h2 className="text-heading-3">Get today’s best fares</h2>
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
          className={`bpk-textarea ${styles.notes}`}
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          placeholder="e.g. extra baggage, wheelchair, Umrah visa, group of 12"
        />
      </div>
      <button type="submit" className={`bpk-btn bpk-btn--whatsapp bpk-btn--large bpk-btn--full ${styles.submit}`}>
        <WhatsAppIcon size={20} /> Send request on WhatsApp
      </button>
      <p className="text-caption text-secondary">
        Your details are only shared with our ticketing team to prepare your quote. We never ask for card details on
        WhatsApp.
      </p>
    </form>
  );
}

/** Boarding-pass style recap of the trip shown at the top of the pop-up. */
function TripHeader({ search: s }: { search: FlightSearch }) {
  const multi = s.trip === 'multicity';
  const fromCode = multi ? s.legs[0]?.from : s.from;
  const toCode = multi ? s.legs[s.legs.length - 1]?.to : s.to;
  const from = findAirport(fromCode);
  const to = findAirport(toCode);
  const dates = multi
    ? `${s.legs.length} flights · from ${formatLongDate(s.legs[0]?.date) || 'date to confirm'}`
    : [formatLongDate(s.depart), s.trip === 'return' ? formatLongDate(s.ret) : ''].filter(Boolean).join(' – ') ||
      'Dates to confirm';

  return (
    <div className={styles.header}>
      <p className={styles.eyebrow}>
        {tripLabels[s.trip]} · {travellersLabel(s)}
      </p>
      <div className={styles.route} id="inq-title">
        <span className={styles.place}>
          <strong>{from?.code ?? (fromCode || '—')}</strong>
          <span>{from?.city ?? 'Origin'}</span>
        </span>
        <span className={styles.path} aria-hidden>
          <Plane size={22} className={styles.plane} />
        </span>
        <span className="sr-only">to</span>
        <span className={`${styles.place} ${styles.placeEnd}`}>
          <strong>{to?.code ?? (toCode || '—')}</strong>
          <span>{to?.city ?? 'Destination'}</span>
        </span>
      </div>
      <p className={styles.dates}>{dates}</p>
    </div>
  );
}

/** Pop-up shown when a traveller presses Search. */
export function InquiryModal({ search, onClose }: { search: FlightSearch; onClose: () => void }) {
  // Play the exit animation before unmounting
  const [closing, setClosing] = useState(false);
  const requestClose = useCallback(() => setClosing(true), []);

  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(onClose, 180);
    return () => clearTimeout(t);
  }, [closing, onClose]);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') requestClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      opener?.focus();
    };
  }, [requestClose]);

  return createPortal(
    <div className={`${styles.root} ${closing ? styles.closing : ''}`}>
      <div className={styles.backdrop} onClick={requestClose} aria-hidden />
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="inq-title">
        <button type="button" className={styles.close} onClick={requestClose} aria-label="Close">
          <X size={22} aria-hidden />
        </button>
        <TripHeader search={search} />
        <div className={styles.body}>
          <InquiryForm lines={summaryLines(search)} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

/** Button that opens the inquiry pop-up for a trip already described on the page. */
export function InquiryButton({ search }: { search: FlightSearch }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button type="button" className="bpk-btn bpk-btn--featured bpk-btn--large" onClick={() => setOpen(true)}>
        <WhatsAppIcon size={20} /> Get today’s best fares
      </button>
      {open && <InquiryModal search={search} onClose={close} />}
    </>
  );
}
