'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftRight, ChevronDown, Globe, Minus, Plane, Plus, X } from 'lucide-react';
import { EVERYWHERE, airportLabel, findAirport, searchAirports, type Airport } from '@/lib/airports';
import {
  cabinLabels,
  defaultSearch,
  formatDisplayDate,
  toQuery,
  travellersLabel,
  tripLabels,
  type Cabin,
  type FlightSearch,
  type Leg,
  type TripType,
} from '@/lib/search';
import { Calendar } from './Calendar';
import styles from './SearchWidget.module.css';

type Panel =
  | 'trip'
  | 'bags'
  | 'from'
  | 'to'
  | 'dates'
  | 'travellers'
  | `leg-from-${number}`
  | `leg-to-${number}`
  | `leg-date-${number}`
  | null;

type ErrorField = 'from' | 'to' | 'depart' | 'return' | `leg-${number}` | null;

/* ------------------------------------------------------------
   Popover shell: dropdown on desktop, bottom sheet on mobile
   ------------------------------------------------------------ */
function Popover({
  title,
  onClose,
  className = '',
  children,
}: {
  title: string;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} aria-hidden />
      <div className={`${styles.popover} ${className}`} role="dialog" aria-label={title}>
        <div className={styles.sheetHeader}>
          <span>{title}</span>
          <button type="button" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Location autocomplete field
   ------------------------------------------------------------ */
function LocationField({
  label,
  value,
  onChange,
  open,
  onOpen,
  onClose,
  className,
  placeholder,
  allowEverywhere,
  preferPk,
  error,
  onPicked,
  children,
}: {
  label: string;
  value: string;
  onChange: (code: string) => void;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  /** Called after a suggestion is chosen (defaults to onClose) */
  onPicked?: () => void;
  className: string;
  placeholder: string;
  allowEverywhere?: boolean;
  preferPk?: boolean;
  error?: string | null;
  children?: React.ReactNode;
}) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const selected = findAirport(value);

  const results = useMemo<Airport[]>(() => {
    const list = searchAirports(query, { preferPk });
    if (allowEverywhere && !query.trim()) return [EVERYWHERE, ...list];
    return list;
  }, [query, preferPk, allowEverywhere]);

  const openField = () => {
    if (open) return;
    setQuery('');
    setActive(0);
    onOpen();
  };

  const choose = (a: Airport) => {
    onChange(a.code);
    setQuery('');
    (onPicked ?? onClose)();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) return openField();
      setActive((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter') {
      if (open && results[active]) {
        e.preventDefault();
        choose(results[active]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const listId = `${id}-list`;
  const display = open ? query : selected ? airportLabel(selected) : '';

  return (
    <div
      className={`${styles.field} ${className} ${open ? styles.fieldActive : ''} ${error ? styles.fieldError : ''}`}
      onClick={() => {
        inputRef.current?.focus();
        openField();
      }}
    >
      <label className={styles.fieldButton} htmlFor={`${id}-input`}>
        <span className={styles.fieldLabel}>{label}</span>
        <input
          ref={inputRef}
          id={`${id}-input`}
          className={styles.fieldInput}
          value={display}
          placeholder={open && selected ? airportLabel(selected) : placeholder}
          onChange={(e) => {
            if (!open) onOpen();
            setQuery(e.target.value);
            setActive(0);
          }}
          onFocus={openField}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && results[active] ? `${listId}-${results[active].code}` : undefined}
          autoComplete="off"
          spellCheck={false}
        />
      </label>
      {error && <span className={styles.error} role="alert">{error}</span>}
      {open && (
        <Popover title={label} onClose={onClose}>
          <ul id={listId} role="listbox" className={styles.suggestions} onMouseDown={(e) => e.preventDefault()}>
            {!query.trim() && (
              <li className={styles.suggestionHeading} role="presentation">
                {preferPk ? 'Popular airports in Pakistan' : 'Popular destinations'}
              </li>
            )}
            {results.map((a, i) => (
              <li
                key={a.code}
                id={`${listId}-${a.code}`}
                role="option"
                aria-selected={i === active}
                className={`${styles.suggestion} ${i === active ? styles.suggestionActive : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={(e) => {
                  e.stopPropagation();
                  choose(a);
                }}
              >
                {a.code === EVERYWHERE.code ? <Globe size={24} /> : <Plane size={24} />}
                <span>
                  <span className={styles.suggestionTitle}>
                    {a.code === EVERYWHERE.code ? (
                      <strong>Everywhere</strong>
                    ) : (
                      <>
                        <strong>{a.city}</strong> ({a.code})
                      </>
                    )}
                  </span>
                  <span className={styles.suggestionSub}>
                    {a.code === EVERYWHERE.code ? a.name : `${a.name}, ${a.country}`}
                  </span>
                </span>
              </li>
            ))}
            {results.length === 0 && (
              <li className={styles.noResults} role="presentation">
                No airports match “{query}”. Try a city name or 3-letter code.
              </li>
            )}
          </ul>
        </Popover>
      )}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------
   Nudger (stepper)
   ------------------------------------------------------------ */
function Nudger({
  label,
  sub,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  sub?: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className={styles.nudgerRow}>
      <span className={styles.nudgerLabel}>
        {label}
        {sub && <span className={styles.nudgerSub}>{sub}</span>}
      </span>
      <span className={styles.nudger}>
        <button
          type="button"
          className={styles.nudgerButton}
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
        >
          <Minus size={16} />
        </button>
        <span className={styles.nudgerValue} aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          className={styles.nudgerButton}
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          aria-label={`Increase ${label}`}
        >
          <Plus size={16} />
        </button>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------
   Search widget
   ------------------------------------------------------------ */
export interface SearchWidgetProps {
  initial?: Partial<FlightSearch>;
  /** Hide the checkbox row (compact placements) */
  hideOptions?: boolean;
}

export function SearchWidget({ initial, hideOptions }: SearchWidgetProps) {
  const router = useRouter();
  const rootRef = useRef<HTMLFormElement>(null);
  const [s, setS] = useState<FlightSearch>(() => ({ ...defaultSearch, ...initial }));
  const [panel, setPanel] = useState<Panel>(null);
  const [selecting, setSelecting] = useState<'depart' | 'return'>('depart');
  const [error, setError] = useState<{ field: ErrorField; message: string } | null>(null);
  const [spun, setSpun] = useState(false);

  const update = (patch: Partial<FlightSearch>) => {
    setS((prev) => ({ ...prev, ...patch }));
    setError(null);
  };

  // Close on outside click / Escape
  useEffect(() => {
    if (!panel) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setPanel(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPanel(null);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [panel]);

  const toggle = (p: Panel) => setPanel((cur) => (cur === p ? null : p));

  const openDates = (which: 'depart' | 'return') => {
    setSelecting(which === 'return' && !s.depart ? 'depart' : which);
    setPanel('dates');
  };

  const onPickDate = (iso: string) => {
    if (selecting === 'depart' || s.trip === 'oneway') {
      const clearReturn = s.ret && s.ret < iso;
      update({ depart: iso, ret: clearReturn ? '' : s.ret });
      if (s.trip === 'return') setSelecting('return');
      else setPanel(null);
    } else if (iso < s.depart) {
      update({ depart: iso });
    } else {
      update({ ret: iso });
      setPanel(null);
    }
  };

  const setLeg = (i: number, patch: Partial<Leg>) => {
    setS((prev) => {
      const legs = prev.legs.map((l, idx) => (idx === i ? { ...l, ...patch } : l));
      // Chain: next leg starts where this one lands
      if (patch.to && legs[i + 1] && !legs[i + 1].from) legs[i + 1] = { ...legs[i + 1], from: patch.to };
      return { ...prev, legs };
    });
    setError(null);
  };

  const validate = (): boolean => {
    if (s.trip === 'multicity') {
      for (let i = 0; i < s.legs.length; i++) {
        const l = s.legs[i];
        if (!l.from || !l.to || !l.date) {
          setError({ field: `leg-${i}`, message: `Complete flight ${i + 1}: origin, destination and date` });
          return false;
        }
        if (i > 0 && l.date < s.legs[i - 1].date) {
          setError({ field: `leg-${i}`, message: `Flight ${i + 1} can't depart before flight ${i}` });
          return false;
        }
      }
      return true;
    }
    if (!s.from) return setError({ field: 'from', message: 'Enter an origin' }), false;
    if (!s.to) return setError({ field: 'to', message: 'Enter a destination' }), false;
    if (s.from === s.to) return setError({ field: 'to', message: 'Origin and destination must differ' }), false;
    if (s.to === EVERYWHERE.code) return true;
    if (!s.depart) return setError({ field: 'depart', message: 'Add a departure date' }), false;
    if (s.trip === 'return' && !s.ret) return setError({ field: 'return', message: 'Add a return date' }), false;
    return true;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPanel(null);
    if (!validate()) return;
    if (s.trip !== 'multicity' && s.to === EVERYWHERE.code) {
      router.push(`/explore?from=${encodeURIComponent(s.from)}`);
      return;
    }
    router.push(`/search?${toQuery(s)}`);
  };

  const fieldError = (f: ErrorField) => (error?.field === f ? error.message : null);

  /* ---------- Travellers panel (shared) ---------- */
  const travellersPanel = (
    <Popover title="Travellers and cabin class" onClose={() => setPanel(null)} className={styles.popoverRight}>
      <div className={styles.panel}>
        <div className={styles.panelSection}>
          <label className={styles.panelTitle} htmlFor="cabin-class">
            Cabin class
          </label>
          <select
            id="cabin-class"
            className="bpk-select"
            value={s.cabin}
            onChange={(e) => update({ cabin: e.target.value as Cabin })}
          >
            {(Object.keys(cabinLabels) as Cabin[]).map((c) => (
              <option key={c} value={c}>
                {cabinLabels[c]}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.panelSection}>
          <Nudger
            label="Adults"
            sub="Aged 12+"
            value={s.adults}
            min={1}
            max={9 - s.children}
            onChange={(n) => update({ adults: n, infants: Math.min(s.infants, n) })}
          />
          <Nudger
            label="Children"
            sub="Aged 2 to 11"
            value={s.children}
            min={0}
            max={9 - s.adults}
            onChange={(n) => update({ children: n })}
          />
          <Nudger
            label="Infants"
            sub="Under 2, on lap"
            value={s.infants}
            min={0}
            max={s.adults}
            onChange={(n) => update({ infants: n })}
          />
          <p className={styles.panelNote}>
            Your age at the time of travel must be valid for the age category booked. Airlines restrict
            unaccompanied minors under 12.
          </p>
        </div>
        <button type="button" className={`bpk-btn bpk-btn--featured ${styles.panelDone}`} onClick={() => setPanel(null)}>
          Apply
        </button>
      </div>
    </Popover>
  );

  const travellersField = (extraClass = '') => (
    <div className={`${styles.field} ${styles.traveller} ${extraClass} ${panel === 'travellers' ? styles.fieldActive : ''}`}>
      <button
        type="button"
        className={styles.fieldButton}
        onClick={() => toggle('travellers')}
        aria-expanded={panel === 'travellers'}
        aria-haspopup="dialog"
      >
        <span className={styles.fieldLabel}>Travellers and cabin class</span>
        <span className={styles.fieldValue}>{travellersLabel(s)}</span>
      </button>
      {panel === 'travellers' && travellersPanel}
    </div>
  );

  return (
    <form ref={rootRef} className={styles.root} onSubmit={onSubmit} noValidate>
      {/* Trip type + bags chips */}
      <div className={styles.dropdowns}>
        <div className={styles.chipWrap}>
          <button
            type="button"
            className="bpk-chip bpk-chip--on-dark"
            aria-expanded={panel === 'trip'}
            aria-haspopup="listbox"
            onClick={() => toggle('trip')}
          >
            {tripLabels[s.trip]}
            <span className="bpk-chip__trailing">
              <ChevronDown size={16} aria-hidden />
            </span>
          </button>
          {panel === 'trip' && (
            <Popover title="Trip type" onClose={() => setPanel(null)}>
              <ul className={styles.chipList} role="listbox" aria-label="Trip type">
                {(Object.keys(tripLabels) as TripType[]).map((t) => (
                  <li
                    key={t}
                    role="option"
                    aria-selected={s.trip === t}
                    className={styles.chipOption}
                    tabIndex={0}
                    onClick={() => {
                      update({
                        trip: t,
                        legs:
                          t === 'multicity'
                            ? [
                                { from: s.from, to: s.to === EVERYWHERE.code ? '' : s.to, date: s.depart },
                                { from: s.to === EVERYWHERE.code ? '' : s.to, to: s.trip === 'return' ? s.from : '', date: s.ret },
                              ]
                            : s.legs,
                      });
                      setPanel(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        (e.currentTarget as HTMLElement).click();
                      }
                    }}
                  >
                    <span className={`${styles.radio} ${s.trip === t ? styles.radioOn : ''}`} aria-hidden />
                    {tripLabels[t]}
                  </li>
                ))}
              </ul>
            </Popover>
          )}
        </div>

        <div className={styles.chipWrap}>
          <button
            type="button"
            className="bpk-chip bpk-chip--on-dark"
            aria-expanded={panel === 'bags'}
            aria-haspopup="dialog"
            onClick={() => toggle('bags')}
          >
            {s.cabinBags + s.checkedBags > 0 ? `Bags (${s.cabinBags + s.checkedBags})` : 'Bags'}
            <span className="bpk-chip__trailing">
              <ChevronDown size={16} aria-hidden />
            </span>
          </button>
          {panel === 'bags' && (
            <Popover title="Bags" onClose={() => setPanel(null)}>
              <div className={styles.panel}>
                <p className={styles.panelTitle}>Bags per traveller</p>
                <Nudger
                  label="Cabin bags"
                  sub="Overhead locker, up to 7 kg on most airlines"
                  value={s.cabinBags}
                  min={0}
                  max={1}
                  onChange={(n) => update({ cabinBags: n })}
                />
                <Nudger
                  label="Checked bags"
                  sub="Hold luggage, 20–30 kg per piece"
                  value={s.checkedBags}
                  min={0}
                  max={2}
                  onChange={(n) => update({ checkedBags: n })}
                />
                <p className={styles.panelNote}>
                  We&rsquo;ll only quote fares that include the bags you choose.
                </p>
                <button type="button" className={`bpk-btn bpk-btn--featured ${styles.panelDone}`} onClick={() => setPanel(null)}>
                  Apply
                </button>
              </div>
            </Popover>
          )}
        </div>
      </div>

      {s.trip !== 'multicity' ? (
        <div className={styles.grid}>
          <LocationField
            label="From"
            value={s.from}
            onChange={(code) => update({ from: code })}
            open={panel === 'from'}
            onOpen={() => setPanel('from')}
            onClose={() => setPanel(null)}
            onPicked={() => setPanel(s.to ? null : 'to')}
            className={styles.origin}
            placeholder="Country, city or airport"
            preferPk
            error={fieldError('from')}
          >
            <button
              type="button"
              className={`${styles.swap} ${spun ? styles.swapSpun : ''}`}
              aria-label="Swap origin and destination"
              onClick={(e) => {
                e.stopPropagation();
                if (s.to === EVERYWHERE.code) return;
                update({ from: s.to, to: s.from });
                setSpun((v) => !v);
              }}
            >
              <ArrowLeftRight size={20} strokeWidth={2.5} aria-hidden />
            </button>
          </LocationField>

          <LocationField
            label="To"
            value={s.to}
            onChange={(code) => update({ to: code })}
            open={panel === 'to'}
            onOpen={() => setPanel('to')}
            onClose={() => setPanel(null)}
            onPicked={() => {
              (document.activeElement as HTMLElement | null)?.blur();
              if (s.depart) return setPanel(null);
              setSelecting('depart');
              setPanel('dates');
            }}
            className={styles.destination}
            placeholder="Country, city or airport"
            allowEverywhere
            error={fieldError('to')}
          />

          <div className={`${styles.field} ${styles.depart} ${panel === 'dates' && selecting === 'depart' ? styles.fieldActive : ''} ${fieldError('depart') ? styles.fieldError : ''}`}>
            <button type="button" className={styles.fieldButton} onClick={() => openDates('depart')} aria-haspopup="dialog">
              <span className={styles.fieldLabel}>Depart</span>
              {s.depart ? (
                <span className={styles.fieldValue}>{formatDisplayDate(s.depart)}</span>
              ) : (
                <span className={styles.fieldPlaceholder}>Add date</span>
              )}
            </button>
            {fieldError('depart') && <span className={styles.error} role="alert">{fieldError('depart')}</span>}
          </div>

          <div className={`${styles.field} ${styles.return} ${panel === 'dates' && selecting === 'return' ? styles.fieldActive : ''} ${fieldError('return') ? styles.fieldError : ''}`}>
            <button
              type="button"
              className={styles.fieldButton}
              onClick={() => {
                if (s.trip === 'oneway') update({ trip: 'return' });
                openDates('return');
              }}
              aria-haspopup="dialog"
            >
              <span className={styles.fieldLabel}>Return</span>
              {s.trip === 'oneway' ? (
                <span className={styles.fieldPlaceholder}>(One way)</span>
              ) : s.ret ? (
                <span className={styles.fieldValue}>{formatDisplayDate(s.ret)}</span>
              ) : (
                <span className={styles.fieldPlaceholder}>Add date</span>
              )}
            </button>
            {fieldError('return') && <span className={styles.error} role="alert">{fieldError('return')}</span>}
          </div>

          {travellersField()}

          <button type="submit" className={styles.cta}>
            Search
          </button>

          {panel === 'dates' && (
            <Popover
              title={selecting === 'depart' ? 'Depart' : 'Return'}
              onClose={() => setPanel(null)}
              className={`${styles.popoverRight} ${styles.datesPopover}`}
            >
              <div className={styles.calendar}>
                <Calendar
                  start={s.depart}
                  end={s.trip === 'return' ? s.ret : ''}
                  range={s.trip === 'return'}
                  onSelect={onPickDate}
                />
                <div className={styles.calendarFooter}>
                  <span className="text-secondary">
                    {s.trip === 'return'
                      ? selecting === 'depart'
                        ? 'Choose your departure date'
                        : 'Now choose your return date'
                      : 'One-way trip'}
                  </span>
                  <button type="button" className="bpk-btn bpk-btn--featured" onClick={() => setPanel(null)}>
                    Apply
                  </button>
                </div>
              </div>
            </Popover>
          )}

          {!hideOptions && (
            <div className={styles.checks}>
              <div className={`${styles.check} ${styles.checkFrom}`}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" checked={s.nearbyFrom} onChange={(e) => update({ nearbyFrom: e.target.checked })} />
                  Add nearby airports
                </label>
              </div>
              <div className={`${styles.check} ${styles.checkTo}`}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" checked={s.nearbyTo} onChange={(e) => update({ nearbyTo: e.target.checked })} />
                  Add nearby airports
                </label>
              </div>
              <div className={`${styles.check} ${styles.checkStay}`}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" checked={s.stay} onChange={(e) => update({ stay: e.target.checked })} />
                  Add a place to stay
                </label>
              </div>
              <div className={`${styles.check} ${styles.checkDirect}`}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" checked={s.direct} onChange={(e) => update({ direct: e.target.checked })} />
                  Direct flights
                </label>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className={styles.legs}>
            {s.legs.map((leg, i) => (
              <div key={i} className={styles.legRow}>
                <LocationField
                  label={`Flight ${i + 1}: From`}
                  value={leg.from}
                  onChange={(code) => setLeg(i, { from: code })}
                  open={panel === `leg-from-${i}`}
                  onOpen={() => setPanel(`leg-from-${i}`)}
                  onClose={() => setPanel(null)}
                  className={styles.origin}
                  placeholder="Country, city or airport"
                  preferPk={i === 0}
                  error={fieldError(`leg-${i}`)}
                />
                <LocationField
                  label="To"
                  value={leg.to}
                  onChange={(code) => setLeg(i, { to: code })}
                  open={panel === `leg-to-${i}`}
                  onOpen={() => setPanel(`leg-to-${i}`)}
                  onClose={() => setPanel(null)}
                  className={styles.destination}
                  placeholder="Country, city or airport"
                />
                <div className={`${styles.field} ${styles.legDate} ${panel === `leg-date-${i}` ? styles.fieldActive : ''}`}>
                  <button type="button" className={styles.fieldButton} onClick={() => toggle(`leg-date-${i}`)} aria-haspopup="dialog">
                    <span className={styles.fieldLabel}>Depart</span>
                    {leg.date ? (
                      <span className={styles.fieldValue}>{formatDisplayDate(leg.date)}</span>
                    ) : (
                      <span className={styles.fieldPlaceholder}>Add date</span>
                    )}
                  </button>
                  {panel === `leg-date-${i}` && (
                    <Popover title={`Flight ${i + 1} date`} onClose={() => setPanel(null)} className={styles.popoverRight}>
                      <div className={styles.calendar}>
                        <Calendar
                          start={leg.date}
                          end=""
                          range={false}
                          minDate={i > 0 ? s.legs[i - 1].date || undefined : undefined}
                          onSelect={(iso) => {
                            setLeg(i, { date: iso });
                            setPanel(null);
                          }}
                        />
                      </div>
                    </Popover>
                  )}
                </div>
                {s.legs.length > 2 ? (
                  <button
                    type="button"
                    className={styles.legRemove}
                    aria-label={`Remove flight ${i + 1}`}
                    onClick={() => update({ legs: s.legs.filter((_, idx) => idx !== i) })}
                  >
                    <X size={20} />
                  </button>
                ) : (
                  <span />
                )}
              </div>
            ))}
          </div>
          <div className={styles.multiFooter}>
            <button
              type="button"
              className={styles.addLeg}
              disabled={s.legs.length >= 6}
              onClick={() =>
                update({ legs: [...s.legs, { from: s.legs[s.legs.length - 1]?.to ?? '', to: '', date: '' }] })
              }
            >
              <Plus size={20} aria-hidden /> Add another flight
            </button>
            {travellersField(styles.multiTraveller)}
            <button type="submit" className={styles.cta}>
              Search
            </button>
          </div>
        </>
      )}
    </form>
  );
}
