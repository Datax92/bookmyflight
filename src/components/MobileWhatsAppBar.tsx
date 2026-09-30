import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/icons';

export function MobileWhatsAppBar() {
  return (
    <div className="mobile-whatsapp-bar">
      <a
        href={getWhatsAppUrl('Hello BookMyFlight, I would like to get the best fare.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon size={20} />
        Get your best fare on WhatsApp
      </a>
    </div>
  );
}
