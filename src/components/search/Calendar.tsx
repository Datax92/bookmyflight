'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { parseISODate, toISODate } from '@/lib/search';
import styles from './SearchWidget.module.css';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

function monthDays(month: Date): (Date | null)[] {
  const first = startOfMonth(month);
  const lead = (first.getDay() + 6) % 7; // Monday-first
  const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = Array.from({ length: lead }, () => null);
  for (let i = 1; i <= count; i++) cells.push(new Date(month.getFullYear(), month.getMonth(), i));
  return cells;
}

export interface CalendarProps {
  start: string;
  end: string;
  range: boolean;
  minDate?: string;
  onSelect: (iso: string) => void;
  /** Number of months that can be navigated forward from today */
  maxMonths?: number;
}

export function Calendar({ start, end, range, minDate, onSelect, maxMonths = 12 }: CalendarProps) {
  const today = useMemo(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }, []);
  const min = (minDate && parseISODate(minDate)) || today;
  const startDate = parseISODate(start);
  const endDate = parseISODate(end);

  const [viewMonth, setViewMonth] = useState(() => startOfMonth(startDate ?? today));
  const firstAllowed = startOfMonth(today);
  const lastAllowed = addMonths(firstAllowed, maxMonths - 1);
  const months = [viewMonth, addMonths(viewMonth, 1)];

  const canPrev = viewMonth > firstAllowed;
  const canNext = addMonths(viewMonth, 1) < lastAllowed;

  const startISO = startDate ? toISODate(startDate) : '';
  const endISO = endDate ? toISODate(endDate) : '';

  return (
    <div>
      <div className={styles.calendarTop}>
        <span className={styles.calendarTitle}>
          {range ? 'Select departure and return dates' : 'Select a departure date'}
        </span>
        <div className={styles.calendarNav}>
          <button
            type="button"
            className={styles.calendarNavButton}
            onClick={() => setViewMonth((m) => addMonths(m, -1))}
            disabled={!canPrev}
            aria-label="Previous month"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            className={styles.calendarNavButton}
            onClick={() => setViewMonth((m) => addMonths(m, 1))}
            disabled={!canNext}
            aria-label="Next month"
          >
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
      </div>

      <div className={styles.months}>
        {months.map((month) => (
          <div key={month.toISOString()}>
            <p className={styles.monthName}>
              {month.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>
            <div className={styles.weekdays} aria-hidden>
              {WEEKDAYS.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
            <div className={styles.days} role="grid" aria-label={month.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}>
              {monthDays(month).map((day, i) => {
                if (!day) return <span key={`blank-${i}`} />;
                const iso = toISODate(day);
                const disabled = day < min;
                const isStart = iso === startISO;
                const isEnd = range && iso === endISO;
                const inRange = range && startDate && endDate && day > startDate && day < endDate;
                const hasRange = range && startISO && endISO && startISO !== endISO;
                let cellClass = styles.dayCell;
                if (inRange) cellClass += ` ${styles.dayCellMiddle}`;
                else if (isStart && hasRange) cellClass += ` ${styles.dayCellStart}`;
                else if (isEnd && hasRange) cellClass += ` ${styles.dayCellEnd}`;
                let dayClass = styles.day;
                if (isStart || isEnd) dayClass += ` ${styles.daySelected}`;
                if (iso === toISODate(today)) dayClass += ` ${styles.dayToday}`;
                return (
                  <span key={iso} className={cellClass}>
                    <button
                      type="button"
                      className={dayClass}
                      disabled={disabled}
                      aria-pressed={isStart || isEnd}
                      aria-label={day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                      onClick={() => onSelect(iso)}
                    >
                      {day.getDate()}
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
