// ============================================================
// WhatsApp Integration Utilities
// ============================================================

import { siteConfig } from './config';

/**
 * Generate a WhatsApp deep link with a pre-filled message.
 */
export function getWhatsAppUrl(message: string): string {
  const phone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Generate a WhatsApp URL for a flight inquiry.
 */
export function getFlightWhatsAppUrl(params: {
  from?: string;
  to?: string;
  departure?: string;
  returnDate?: string;
  passengers?: number;
  cabin?: string;
  tripType?: string;
}): string {
  const lines = [
    `Hello BookMyFlight, I would like to get a flight quote.`,
    '',
    params.from ? `From: ${params.from}` : null,
    params.to ? `To: ${params.to}` : null,
    params.departure ? `Departure: ${params.departure}` : null,
    params.returnDate ? `Return: ${params.returnDate}` : null,
    params.passengers ? `Passengers: ${params.passengers}` : null,
    params.cabin ? `Cabin: ${params.cabin}` : null,
    params.tripType ? `Trip Type: ${params.tripType}` : null,
    '',
    'Please share the best available fares. Thank you!',
  ];

  const message = lines.filter(Boolean).join('\n');
  return getWhatsAppUrl(message);
}

/**
 * Generate a WhatsApp URL for a service inquiry.
 */
export function getServiceWhatsAppUrl(
  serviceTitle: string,
  additionalContext?: string,
): string {
  let message = `Hello BookMyFlight, I am interested in ${serviceTitle}.`;
  if (additionalContext) {
    message += `\n\n${additionalContext}`;
  }
  message += '\n\nPlease share available options. Thank you!';
  return getWhatsAppUrl(message);
}

/**
 * Generate a WhatsApp URL for a destination inquiry.
 */
export function getDestinationWhatsAppUrl(
  destination: string,
  travelType?: string,
): string {
  let message = `Hello BookMyFlight, I would like to travel to ${destination}.`;
  if (travelType) {
    message += `\nTravel Type: ${travelType}`;
  }
  message += '\n\nPlease share available options and fares. Thank you!';
  return getWhatsAppUrl(message);
}
