import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/icons';

export function MobileWhatsAppBar() {
  return (
    <div className="mobile-whatsapp-bar">
      <a href={`tel:${siteConfig.contact.hotline}`} className="mobile-call-btn" aria-label={`Call ${siteConfig.contact.hotlineDisplay}`}>
        <Phone size={20} aria-hidden />
        Call
      </a>
      <a
        href={getWhatsAppUrl('Hello BookMyFlight, I would like to get the best fare.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon size={20} />
        Best fare on WhatsApp
      </a>
    </div>
  );
}
