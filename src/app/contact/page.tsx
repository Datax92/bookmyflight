import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactInquiryForm } from '@/components/ContactInquiryForm';
import { FacebookIcon, WhatsAppIcon, YouTubeIcon } from '@/components/ui/icons';
import { siteConfig } from '@/lib/config';
import { contactFaqs } from '@/lib/faqs';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import styles from '@/components/sections/Page.module.css';

export const metadata: Metadata = {
  title: 'Contact BookMyFlight: Travel Agency in Blue Area, Islamabad | WhatsApp +92 333 5542877',
  description:
    'Contact BookMyFlight and O.S Travel & Tours for flight tickets, Umrah and visas. Office No. 3, Aaly Plaza, Blue Area, Islamabad. Call 051-2120700 or WhatsApp +92 333 5542877.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const { contact, address, hours } = siteConfig;
  const { lat, lng } = address.coordinates;
  const methods = [
    {
      icon: <WhatsAppIcon size={24} />,
      title: 'WhatsApp',
      value: contact.whatsappDisplay,
      href: getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.'),
      note: 'Fastest way to get a quote',
      external: true,
    },
    { icon: <Phone size={24} aria-hidden />, title: 'Phone', value: contact.phone.join(' · '), href: `tel:${contact.phone[0]}`, note: 'Office landlines' },
    { icon: <Mail size={24} aria-hidden />, title: 'Email', value: contact.email, href: `mailto:${contact.email}`, note: 'For documents and invoices' },
    { icon: <Clock size={24} aria-hidden />, title: 'Office hours', value: `${hours.days}`, note: `${hours.weekdays} · Sunday closed` },
  ];

  return (
    <>
      <PageHero
        title="Contact us"
        subtitle="Talk to our ticketing and visa team on WhatsApp, by phone or at our office in Blue Area, Islamabad."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <div className={`bpk-container ${styles.body}`}>
        <ul className={styles.grid4}>
          {methods.map((m) => {
            const inner = (
              <>
                <span className={styles.uspIcon}>{m.icon}</span>
                <span className="text-heading-5" style={{ display: 'block', marginTop: '0.75rem' }}>
                  {m.title}
                </span>
                <span className="text-body" style={{ display: 'block', marginTop: '0.25rem', fontWeight: 700, overflowWrap: 'anywhere' }}>
                  {m.value}
                </span>
                <span className="text-footnote text-secondary">{m.note}</span>
              </>
            );
            return (
              <li key={m.title}>
                {m.href ? (
                  <a
                    href={m.href}
                    {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="bpk-card bpk-card--padded"
                    style={{ display: 'block', height: '100%', padding: '1.5rem' }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="bpk-card bpk-card--padded" style={{ height: '100%', padding: '1.5rem' }}>
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.split}>
          <ContactInquiryForm />
          <section aria-labelledby="visit-us" style={{ display: 'grid', gap: '1rem' }}>
            <h2 id="visit-us" className="text-heading-3">
              Visit our office
            </h2>
            <p className="text-body" style={{ display: 'flex', gap: '0.5rem' }}>
              <MapPin size={20} aria-hidden style={{ flexShrink: 0, marginTop: 2 }} />
              <span>
                O.S Travel &amp; Tours, {address.street}, {address.area}, {address.city}, {address.country}
              </span>
            </p>
            <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: '0.75rem', overflow: 'hidden', background: '#eff3f8' }}>
              <iframe
                title="O.S Travel & Tours office on Google Maps"
                src={`https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href={address.googleMaps} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--secondary">
                <MapPin size={18} aria-hidden /> Get directions
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--secondary">
                <FacebookIcon size={16} /> Facebook
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="bpk-btn bpk-btn--secondary">
                <YouTubeIcon size={16} /> YouTube
              </a>
            </div>
          </section>
        </div>

        <FaqSection id="faqs" title="Contact FAQs" faqs={contactFaqs} />
      </div>
    </>
  );
}
