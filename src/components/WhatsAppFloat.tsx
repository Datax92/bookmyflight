import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/icons';

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl('Hello BookMyFlight, I would like travel assistance.')}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
