'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/config';
import { internationalAirlines, pakistaniAirlines } from '@/lib/airlines';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { AirlineBadge } from '@/components/ui/AirlineBadge';
import { Logo } from '@/components/ui/Logo';
import { NavGlyph, PakistanFlag, WhatsAppIcon } from '@/components/ui/icons';
import { MobileMenu } from './MobileMenu';
import styles from './Header.module.css';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  // Menus remember the path they were opened on, so they close automatically on navigation.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [culturePath, setCulturePath] = useState<string | null>(null);
  const [menuLeft, setMenuLeft] = useState(0);
  const menuOpen = menuPath === pathname;
  const cultureOpen = culturePath === pathname;
  const setMenuOpen = useCallback((v: boolean) => setMenuPath(v ? pathname : null), [pathname]);
  const setCultureOpen = useCallback((v: boolean) => setCulturePath(v ? pathname : null), [pathname]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const airlinesTabRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLLIElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const positionMenu = useCallback(() => {
    const wrapper = wrapperRef.current;
    const tab = airlinesTabRef.current;
    const menu = menuRef.current;
    if (!wrapper || !tab || !menu) return;
    const wrapperBox = wrapper.getBoundingClientRect();
    const tabBox = tab.getBoundingClientRect();
    const maxLeft = Math.max(0, wrapperBox.width - menu.offsetWidth);
    setMenuLeft(Math.min(Math.max(0, tabBox.left - wrapperBox.left), maxLeft));
  }, []);

  const openMenu = useCallback(() => {
    positionMenu();
    setMenuOpen(true);
  }, [positionMenu, setMenuOpen]);

  // Escape + outside click
  useEffect(() => {
    if (!menuOpen && !cultureOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setCultureOpen(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        menuOpen &&
        !menuRef.current?.contains(target) &&
        !airlinesTabRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
      if (cultureOpen && !cultureRef.current?.contains(target)) {
        setCultureOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', positionMenu);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', positionMenu);
    };
  }, [menuOpen, cultureOpen, positionMenu, setMenuOpen, setCultureOpen]);

  const hoverCapable = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const onMenuEnter = () => {
    if (!hoverCapable()) return;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(openMenu, 120);
  };

  const onMenuLeave = () => {
    if (!hoverCapable()) return;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMenuOpen(false), 200);
  };

  return (
    <header className={styles.header}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className={`bpk-container ${styles.wrapper}`} ref={wrapperRef}>
        <div className={styles.logoRow}>
          <Logo className={styles.logo} markClassName={styles.logoMark} textClassName={styles.logoText} />

          <ul className={styles.secondaryNav}>
            <li>
              <Link href="/contact" className={styles.helpLink}>
                Help
              </Link>
            </li>
            <li className={styles.cultureWrap} ref={cultureRef}>
              <button
                type="button"
                className={styles.cultureButton}
                aria-expanded={cultureOpen}
                aria-haspopup="dialog"
                onClick={() => setCultureOpen(!cultureOpen)}
              >
                <span className={styles.cultureLocale}>English (UK)</span>
                <PakistanFlag className={styles.flag} />
                <span>Pakistan</span>
                <span className={styles.currency}>Rs PKR</span>
              </button>
              {cultureOpen && (
                <div className={styles.popover} role="dialog" aria-label="Contact and region">
                  <p className={styles.popoverTitle}>Pakistan · English · Rs PKR</p>
                  <div className={styles.popoverRow}>
                    <Phone size={16} />
                    <span>
                      <a href={`tel:${siteConfig.contact.phone[0]}`}>{siteConfig.contact.phone[0]}</a>
                      {' · '}
                      <a href={`tel:${siteConfig.contact.phone[1]}`}>{siteConfig.contact.phone[1]}</a>
                    </span>
                  </div>
                  <div className={styles.popoverRow}>
                    <WhatsAppIcon size={16} />
                    <a href={getWhatsAppUrl('Hello BookMyFlight, I need help with a booking.')} target="_blank" rel="noopener noreferrer">
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                  </div>
                  <div className={styles.popoverRow}>
                    <Mail size={16} />
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  </div>
                  <div className={styles.popoverRow}>
                    <Clock size={16} />
                    <span>
                      {siteConfig.hours.days}, {siteConfig.hours.weekdays}
                    </span>
                  </div>
                  <div className={styles.popoverRow}>
                    <MapPin size={16} />
                    <span>
                      {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city}
                    </span>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a
                href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconButton}
                aria-label="Chat with us on WhatsApp"
              >
                <WhatsAppIcon size={24} />
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppUrl('Hello BookMyFlight, I would like a fare quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quoteButton}
              >
                Get a quote
              </a>
            </li>
            <li>
              <MobileMenu />
            </li>
          </ul>
        </div>

        <nav className={styles.primaryNav} aria-label="Main">
          <ul className={styles.tabScroll}>
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              const cls = `${styles.tab} ${active ? styles.tabSelected : ''}`;
              if (item.dropdown === 'airlines') {
                return (
                  <li key={item.href} onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
                    <button
                      ref={airlinesTabRef}
                      type="button"
                      className={cls}
                      aria-expanded={menuOpen}
                      aria-controls="airlines-menu"
                      onClick={() => (menuOpen ? setMenuOpen(false) : openMenu())}
                    >
                      <NavGlyph name={item.icon} className={styles.tabIcon} strokeWidth={2.25} />
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className={`${styles.tabChevron} ${menuOpen ? styles.tabChevronOpen : ''}`}
                        strokeWidth={2.5}
                      />
                    </button>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link href={item.href} className={cls} aria-current={active ? 'page' : undefined}>
                    <NavGlyph name={item.icon} className={styles.tabIcon} strokeWidth={2.25} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Airlines mega menu: always in the DOM so crawlers see the links */}
        <div
          id="airlines-menu"
          ref={menuRef}
          className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}
          style={{ left: menuLeft }}
          onMouseEnter={onMenuEnter}
          onMouseLeave={onMenuLeave}
        >
          <div className={styles.menuGrid}>
            <div>
              <p className={styles.menuHeading}>Pakistani airlines</p>
              <ul className={styles.menuList}>
                {pakistaniAirlines.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/airlines/${a.slug}`} className={styles.menuLink} tabIndex={menuOpen ? 0 : -1}>
                      <AirlineBadge airline={a} />
                      <span>
                        <span className={styles.menuLinkName}>{a.name}</span>
                        <span className={styles.menuLinkMeta}>{a.hub}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.menuHeading}>International airlines</p>
              <ul className={`${styles.menuList} ${styles.menuListTwoCol}`}>
                {internationalAirlines.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/airlines/${a.slug}`} className={styles.menuLink} tabIndex={menuOpen ? 0 : -1}>
                      <AirlineBadge airline={a} />
                      <span>
                        <span className={styles.menuLinkName}>{a.name}</span>
                        <span className={styles.menuLinkMeta}>{a.hub}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.menuFooter}>
            <span>Fares, refund &amp; reissue rules for every airline</span>
            <Link href="/airlines" tabIndex={menuOpen ? 0 : -1}>
              View all airlines <ChevronRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
