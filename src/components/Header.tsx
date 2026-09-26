'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation, siteConfig } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0, 1)',
          background: isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(201, 169, 110, 0.1)' : '1px solid transparent',
        }}
      >
        <div className="container-premium" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isScrolled ? 72 : 88, transition: 'height 0.4s ease' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(201, 169, 110, 0.5)' }}>
              <img src="/images/brand/logo.jpg" alt="BookMyFlight" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: 'white', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                BookMyFlight
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: 'var(--color-champagne)', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1, opacity: 0.85 }}>
                {siteConfig.parent.relationship}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ alignItems: 'center', gap: 'clamp(12px, 1.3vw, 24px)' }} className="hidden xl:flex">
            {navigation.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    color: isActive ? 'var(--color-champagne)' : 'rgba(255, 255, 255, 0.75)',
                    textDecoration: 'none',
                    fontSize: 'clamp(11px, 0.9vw, 12.5px)',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    paddingBottom: 4,
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-champagne)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    }
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'linear-gradient(90deg, var(--color-champagne), var(--color-gold))',
                        borderRadius: 1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <a
            href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex"
            style={{
              alignItems: 'center',
              gap: 8,
              padding: '10px 22px',
              background: 'var(--color-whatsapp)',
              color: 'white',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.03em',
              textDecoration: 'none',
              borderRadius: 2,
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-whatsapp-dark)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-whatsapp)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <WhatsAppIcon size={16} />
            WhatsApp Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              zIndex: 1002,
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              style={{ width: 24, height: 1.5, background: 'var(--color-champagne)', display: 'block', transformOrigin: 'center' }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: 18, height: 1.5, background: 'var(--color-champagne)', display: 'block', marginLeft: 'auto' }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              style={{ width: 24, height: 1.5, background: 'var(--color-champagne)', display: 'block', transformOrigin: 'center' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(26, 26, 26, 0.98)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100dvh',
              maxHeight: '100dvh',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              gap: 'clamp(12px, 2.2vh, 24px)',
              padding: 'calc(72px + env(safe-area-inset-top, 0px)) 24px calc(32px + env(safe-area-inset-bottom, 0px))',
            }}
          >
            {navigation.map((item, i) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      color: isActive ? 'var(--color-champagne)' : 'white',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(20px, 3.2vh, 26px)',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '-0.01em',
                      transition: 'color 0.3s ease',
                      display: 'inline-block',
                      padding: '4px 0',
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              style={{ marginTop: 'clamp(8px, 1.5vh, 16px)', width: '100%', maxWidth: 300 }}
            >
              <a
                href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: 15, width: '100%', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={18} />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
