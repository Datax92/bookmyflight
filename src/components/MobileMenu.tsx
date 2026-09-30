'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Clock, Mail, Menu, Phone, X } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/config';
import { airlines } from '@/lib/airlines';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { Logo } from '@/components/ui/Logo';
import { NavGlyph, WhatsAppIcon } from '@/components/ui/icons';
import styles from './MobileMenu.module.css';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Hamburger + slide-in drawer for phones and small tablets. */
export function MobileMenu() {
  const pathname = usePathname();
  // Remember the path the drawer was opened on so navigating closes it automatically.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [airlinesOpen, setAirlinesOpen] = useState(false);
  const open = openPath === pathname;
  const close = () => setOpenPath(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenPath(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenPath(pathname)}
      >
        <Menu size={24} aria-hidden />
      </button>

      {open &&
        createPortal(
          <div className={styles.root}>
            <div className={styles.backdrop} onClick={close} aria-hidden />
            <div id="mobile-menu" className={styles.drawer} role="dialog" aria-modal="true" aria-label="Menu">
              <div className={styles.top}>
                <Logo className={styles.logo} markClassName={styles.logoMark} textClassName={styles.logoText} />
                <button type="button" className={styles.close} onClick={close} aria-label="Close menu" autoFocus>
                  <X size={24} aria-hidden />
                </button>
              </div>

              <nav aria-label="Mobile">
                <ul className={styles.list}>
                  {navigation.map((item) =>
                    item.dropdown === 'airlines' ? (
                      <li key={item.href}>
                        <button
                          type="button"
                          className={`${styles.item} ${isActive(pathname, item.href) ? styles.itemActive : ''}`}
                          aria-expanded={airlinesOpen}
                          onClick={() => setAirlinesOpen((v) => !v)}
                        >
                          <NavGlyph name={item.icon} size={20} strokeWidth={2.25} />
                          <span className={styles.label}>{item.label}</span>
                          <ChevronDown size={20} aria-hidden className={`${styles.chevron} ${airlinesOpen ? styles.chevronOpen : ''}`} />
                        </button>
                        <div className={`${styles.sub} ${airlinesOpen ? styles.subOpen : ''}`}>
                          <div className={styles.subInner}>
                            <ul className={styles.airlineGrid}>
                              {airlines.map((a) => (
                                <li key={a.slug}>
                                  <Link href={`/airlines/${a.slug}`} className={styles.airline} onClick={close} tabIndex={airlinesOpen ? 0 : -1}>
                                    <AirlineBadge airline={a} size={28} />
                                    <span>{a.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link href="/airlines" className={styles.allAirlines} onClick={close} tabIndex={airlinesOpen ? 0 : -1}>
                              View all airlines &amp; refund rules
                            </Link>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`${styles.item} ${isActive(pathname, item.href) ? styles.itemActive : ''}`}
                          aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                          onClick={close}
                        >
                          <NavGlyph name={item.icon} size={20} strokeWidth={2.25} />
                          <span className={styles.label}>{item.label}</span>
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </nav>

              <div className={styles.contact}>
                <a
                  href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bpk-btn bpk-btn--whatsapp bpk-btn--large bpk-btn--full"
                >
                  <WhatsAppIcon size={20} /> Chat on WhatsApp
                </a>
                <a href={`tel:${siteConfig.contact.phone[0]}`} className={styles.contactRow}>
                  <Phone size={18} aria-hidden /> {siteConfig.contact.phone[0]}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className={styles.contactRow}>
                  <Mail size={18} aria-hidden /> {siteConfig.contact.email}
                </a>
                <p className={styles.contactRow}>
                  <Clock size={18} aria-hidden /> {siteConfig.hours.days}, {siteConfig.hours.weekdays}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
