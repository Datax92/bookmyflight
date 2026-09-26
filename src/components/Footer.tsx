import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const flightHubs = [
    { label: 'Cheap Flights Guide', href: '/cheap-flights' },
    { label: 'Flight Booking Desk', href: '/flight-booking' },
    { label: 'International Flights', href: '/international-flights' },
    { label: 'Domestic Flights Pakistan', href: '/domestic-flights' },
    { label: 'Air Ticketing Islamabad', href: '/flight-booking-islamabad' },
    { label: 'Outbound Pakistan Flights', href: '/international-flights-pakistan' },
  ];

  const popularDestinations = [
    { label: 'Flights to Dubai', href: '/destinations/dubai' },
    { label: 'Flights to Istanbul', href: '/destinations/istanbul' },
    { label: 'Flights to London', href: '/destinations/london' },
    { label: 'Flights to Jeddah (Umrah)', href: '/destinations/jeddah' },
    { label: 'Flights to Riyadh', href: '/destinations/riyadh' },
    { label: 'Flights to Bangkok', href: '/destinations/bangkok' },
    { label: 'Flights to Kuala Lumpur', href: '/destinations/kuala-lumpur' },
    { label: 'Flights to Baku', href: '/destinations/baku' },
    { label: 'Flights to Doha', href: '/destinations/doha' },
    { label: 'Flights to Paris', href: '/destinations/paris' },
  ];

  const travelServices = [
    { label: 'Umrah Packages', href: '/umrah' },
    { label: 'Visa Assistance Services', href: '/visa' },
    { label: 'Custom Holiday Packages', href: '/holidays' },
    { label: 'Worldwide Hotel Bookings', href: '/hotels' },
    { label: 'All Travel Destinations', href: '/destinations' },
    { label: 'Travel Knowledge Hub & Guides', href: '/blog' },
  ];

  // Top Airlines operating in Pakistan (Domestic & International)
  const domesticAirlines = [
    { name: 'Airblue', code: 'PA', href: '/domestic-flights' },
    { name: 'AirSial', code: 'PF', href: '/domestic-flights' },
    { name: 'Pakistan International Airlines (PIA)', code: 'PK', href: '/domestic-flights' },
    { name: 'Fly Jinnah', code: '9P', href: '/domestic-flights' },
    { name: 'SereneAir', code: 'ER', href: '/domestic-flights' },
  ];

  const middleEastAirlines = [
    { name: 'Emirates', code: 'EK', href: '/international-flights' },
    { name: 'Qatar Airways', code: 'QR', href: '/international-flights' },
    { name: 'Saudia (Saudi Arabian Airlines)', code: 'SV', href: '/international-flights' },
    { name: 'Flydubai', code: 'FZ', href: '/international-flights' },
    { name: 'Etihad Airways', code: 'EY', href: '/international-flights' },
    { name: 'Air Arabia', code: 'G9', href: '/international-flights' },
    { name: 'Gulf Air', code: 'GF', href: '/international-flights' },
    { name: 'Oman Air', code: 'WY', href: '/international-flights' },
    { name: 'Kuwait Airways', code: 'KU', href: '/international-flights' },
    { name: 'Jazeera Airways', code: 'J9', href: '/international-flights' },
    { name: 'Flynas', code: 'XY', href: '/international-flights' },
  ];

  const internationalGlobalAirlines = [
    { name: 'Turkish Airlines', code: 'TK', href: '/international-flights' },
    { name: 'British Airways', code: 'BA', href: '/international-flights' },
    { name: 'Thai Airways', code: 'TG', href: '/international-flights' },
    { name: 'Malaysia Airlines', code: 'MH', href: '/international-flights' },
    { name: 'Azerbaijan Airlines (AZAL)', code: 'J2', href: '/international-flights' },
    { name: 'SriLankan Airlines', code: 'UL', href: '/international-flights' },
    { name: 'Air China', code: 'CA', href: '/international-flights' },
    { name: 'Cathay Pacific', code: 'CX', href: '/international-flights' },
    { name: 'Swiss International Air Lines', code: 'LX', href: '/international-flights' },
    { name: 'American Airlines', code: 'AA', href: '/international-flights' },
    { name: 'Kenya Airways', code: 'KQ', href: '/international-flights' },
  ];

  // Popular Domestic Flight Routes in Pakistan
  const domesticRoutes = [
    { from: 'Karachi', to: 'Islamabad', href: '/domestic-flights' },
    { from: 'Islamabad', to: 'Karachi', href: '/domestic-flights' },
    { from: 'Lahore', to: 'Karachi', href: '/domestic-flights' },
    { from: 'Karachi', to: 'Lahore', href: '/domestic-flights' },
    { from: 'Lahore', to: 'Islamabad', href: '/domestic-flights' },
    { from: 'Islamabad', to: 'Lahore', href: '/domestic-flights' },
    { from: 'Karachi', to: 'Peshawar', href: '/domestic-flights' },
    { from: 'Karachi', to: 'Faisalabad', href: '/domestic-flights' },
    { from: 'Islamabad', to: 'Skardu', href: '/domestic-flights' },
    { from: 'Islamabad', to: 'Gilgit', href: '/domestic-flights' },
  ];

  // Popular International Flight Routes from Pakistan
  const internationalRoutes = [
    { from: 'Karachi', to: 'Dubai', href: '/destinations/dubai' },
    { from: 'Lahore', to: 'Dubai', href: '/destinations/dubai' },
    { from: 'Islamabad', to: 'Dubai', href: '/destinations/dubai' },
    { from: 'Karachi', to: 'Jeddah', href: '/destinations/jeddah' },
    { from: 'Lahore', to: 'Jeddah', href: '/destinations/jeddah' },
    { from: 'Islamabad', to: 'Jeddah', href: '/destinations/jeddah' },
    { from: 'Islamabad', to: 'London', href: '/destinations/london' },
    { from: 'Lahore', to: 'London', href: '/destinations/london' },
    { from: 'Islamabad', to: 'Istanbul', href: '/destinations/istanbul' },
    { from: 'Karachi', to: 'Bangkok', href: '/destinations/bangkok' },
    { from: 'Karachi', to: 'Kuala Lumpur', href: '/destinations/kuala-lumpur' },
    { from: 'Islamabad', to: 'Doha', href: '/destinations/doha' },
    { from: 'Islamabad', to: 'Baku', href: '/destinations/baku' },
    { from: 'Islamabad', to: 'Riyadh', href: '/destinations/riyadh' },
    { from: 'Lahore', to: 'New York', href: '/international-flights' },
  ];

  return (
    <footer style={{ background: 'var(--color-charcoal)', color: 'rgba(255,255,255,0.65)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {/* Main Footer Upper Grid */}
      <div className="container-premium" style={{ paddingTop: 'clamp(48px, 7vw, 76px)', paddingBottom: 'clamp(36px, 5vw, 56px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(28px, 4vw, 44px)' }}>
          {/* Brand Column */}
          <div style={{ maxWidth: 320, gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(201, 169, 110, 0.4)' }}>
                <img src="/images/brand/logo.jpg" alt="BookMyFlight" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 19, fontWeight: 600, color: 'white' }}>
                  BookMyFlight
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 12, color: 'rgba(255,255,255,0.7)' }}>
              Associated with{' '}
              <a
                href="https://ostravels.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-champagne)', textDecoration: 'none', fontWeight: 600 }}
              >
                O.S Travel & Tours
              </a>
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
              IATA-accredited agency ticketing, personalized fare comparison, Umrah logistics, and global visa assistance from Blue Area, Islamabad.
            </p>
            <p style={{ fontSize: 11, lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>
              Website & Technology by{' '}
              <a
                href="https://www.datax.pk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'underline' }}
              >
                DataX Technologies
              </a>
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: 13 }}
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: 13 }}
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Flight Portals */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 18 }}>
              Flight Portals
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {flightHubs.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5, transition: 'color 0.2s ease' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 18 }}>
              Destinations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {popularDestinations.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5, transition: 'color 0.2s ease' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Guides */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 18 }}>
              Services & Guides
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {travelServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5, transition: 'color 0.2s ease' }}>
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5 }}>
                  About BookMyFlight
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5 }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5 }}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Islamabad Office Details */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 18 }}>
              Islamabad Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>WhatsApp Desk</div>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-whatsapp)', textDecoration: 'none', fontSize: 13.5, fontWeight: 600 }}>
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Landline Telephones</div>
                {siteConfig.contact.phone.map((p) => (
                  <a key={p} href={`tel:${p}`} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5, display: 'block', lineHeight: 1.5 }}>
                    {p}
                  </a>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Email Inquiries</div>
                <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12.5 }}>
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Address</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11.5, lineHeight: 1.55 }}>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.area}<br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* TOP AIRLINES & POPULAR FLIGHT ROUTES DIRECTORY (Sastaticket Style) */}
      {/* ============================================================== */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.25)' }}>
        <div className="container-premium" style={{ paddingTop: 'clamp(36px, 5vw, 48px)', paddingBottom: 'clamp(32px, 4vw, 44px)' }}>
          {/* Section Heading */}
          <div style={{ marginBottom: 28, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-champagne)' }} />
                Airline Directory & Popular Corridors
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(18px, 2.2vw, 22px)', color: 'white', fontWeight: 600, margin: 0 }}>
                Top Airlines & Scheduled Flight Routes in Pakistan
              </h3>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: 0, lineHeight: 1.6 }}>
              Direct GDS ticketing, group seat allocations, and verified reservations across all domestic & international carriers operating from Islamabad, Karachi, Lahore, and Peshawar.
            </p>
          </div>

          {/* Directory Columns Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(24px, 3.5vw, 36px)' }}>
            {/* Column 1: Domestic Airlines */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid rgba(201,169,110,0.25)' }}>
                Domestic Airlines
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {domesticAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={airline.href}
                      style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12, transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      <span>{airline.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 18, padding: '10px 12px', background: 'rgba(201,169,110,0.06)', borderRadius: 4, border: '1px solid rgba(201,169,110,0.15)' }}>
                <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--color-champagne)', marginBottom: 2 }}>Domestic Travel Tip</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.45 }}>
                  Valid NADRA CNIC or NICOP is mandatory for boarding all Pakistani domestic flights.
                </div>
              </div>
            </div>

            {/* Column 2: International Airlines (Middle East & GCC) */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid rgba(201,169,110,0.25)' }}>
                Middle East & GCC
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {middleEastAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={airline.href}
                      style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12, transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      <span>{airline.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: International Airlines (Global & Europe) */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid rgba(201,169,110,0.25)' }}>
                Global & Europe
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {internationalGlobalAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={airline.href}
                      style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12, transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      <span>{airline.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Popular Domestic Flight Routes */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid rgba(201,169,110,0.25)' }}>
                Domestic Routes
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {domesticRoutes.map((route) => (
                  <li key={`${route.from}-${route.to}`}>
                    <Link
                      href={route.href}
                      style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12, transition: 'all 0.2s ease' }}
                    >
                      {route.from} to {route.to}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Popular International Flight Routes */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid rgba(201,169,110,0.25)' }}>
                International Routes
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {internationalRoutes.map((route) => (
                  <li key={`${route.from}-${route.to}`}>
                    <Link
                      href={route.href}
                      style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 12, transition: 'all 0.2s ease' }}
                    >
                      {route.from} to {route.to}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* ACCREDITATIONS & VERIFIED PAYMENT METHODS STRIP */}
      {/* ============================================================== */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(15,15,15,0.6)' }}>
        <div className="container-premium" style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
          {/* Trust Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(14px, 2vw, 24px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: 3, background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne)', fontSize: 11, fontWeight: 700 }}>
                ✈
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                IATA Accredited Agency Ticketing
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: 3, background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne)', fontSize: 11, fontWeight: 700 }}>
                ★
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                DTS Approved (Govt of Pakistan Lic. # 1932)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: 3, background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne)', fontSize: 11, fontWeight: 700 }}>
                ✓
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                100% Verifiable PNR & GDS Confirmations
              </span>
            </div>
          </div>

          {/* Payment Methods Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: 4 }}>
              Payment Settlement:
            </span>
            {['Bank Transfer (HBL / Meezan)', 'Raast Instant Settlement', 'Visa', 'Mastercard', 'Cash at Desk'].map((method) => (
              <span
                key={method}
                style={{
                  fontSize: 11,
                  padding: '4px 10px',
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                  whiteSpace: 'nowrap',
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* Bottom Bar: Copyright & Attribution */}
      {/* ============================================================== */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-premium" style={{ padding: '18px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} BookMyFlight. Associated with O.S Travel & Tours. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            Office Hours: {siteConfig.hours.days} ({siteConfig.hours.weekdays})
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            Engineered by <a href="https://www.datax.pk" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>DataX Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
