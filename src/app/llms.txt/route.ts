import { airlines } from '@/lib/airlines';
import { blogPosts } from '@/lib/blog-data';
import { destinations, siteConfig } from '@/lib/config';
import { flightRoutes, routeLabel } from '@/lib/routes';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

/** llms.txt: a plain-text map of the site for AI assistants and answer engines (llmstxt.org). */
export function GET() {
  const { contact, address, hours, parent } = siteConfig;
  const link = (label: string, path: string, note?: string) => `- [${label}](${SITE_URL}${path})${note ? `: ${note}` : ''}`;

  const body = `# ${siteConfig.name}

> ${siteConfig.name} compares flights from every Pakistani airport and books official airline e-tickets through ${parent.name}, a DTS-licensed, IATA-accredited travel agency in Blue Area, Islamabad. It also arranges Umrah packages, visit visas, hotels and holidays.

- Call: ${contact.hotlineDisplay}
- WhatsApp: ${contact.whatsappDisplay}
- Office: ${contact.phone.join(', ')}
- Email: ${contact.email}
- Address: ${parent.name}, ${address.street}, ${address.area}, ${address.city}, ${address.country}
- Online support: 24/7 on call and WhatsApp (${contact.hotlineDisplay})
- Office hours: ${hours.days}, ${hours.weekdays} (Pakistan time); Sunday closed
- Bookings are made with a human consultant (phone or WhatsApp); there is no instant online checkout.
- Airline refund, reissue and baggage rules on this site are summarised from each airline's official website. Fare-by-month charts show seasonal demand patterns, not live prices.

## Services
${link('Air ticketing', '/ticketing', 'international, domestic, Umrah and group tickets; reissues and refunds')}
${link('Umrah packages', '/umrah', 'visa, flights, Makkah and Madinah hotels, transport')}
${link('Visa assistance', '/visa', 'visit visas and Schengen file processing')}
${link('Hotels', '/hotels')}
${link('Holiday packages', '/holidays')}
${link('Cheap flights guide', '/cheap-flights')}
${link('Contact', '/contact')}

## Airlines: refund, reissue and baggage rules
${airlines.map((a) => link(`${a.name} (${a.code})`, `/airlines/${a.slug}`)).join('\n')}

## Non-stop flight routes from Pakistan
${flightRoutes.map((r) => link(`${routeLabel(r)} flights`, `/flights/${r.slug}`, r.direct.map((a) => a.name).join(', '))).join('\n')}

## Destination guides
${destinations.map((d) => link(`${d.name}, ${d.country}`, `/destinations/${d.id}`)).join('\n')}

## Guides
${blogPosts.map((p) => link(p.title, `/blog/${p.slug}`)).join('\n')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
