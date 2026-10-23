import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { siteConfig } from '@/lib/config';
import { getRoute } from '@/lib/routes';

export const alt = 'Flights from Pakistan on BookMyFlight';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logo = await readFile(join(process.cwd(), 'public/images/brand/logo-mark-gradient.png'), 'base64');

/** Social-share card for a route page: "ISB → DXB, 5 non-stop airlines". */
export default async function RouteOgImage({ params }: { params: Promise<{ route: string }> }) {
  const { route } = await params;
  const r = getRoute(route);
  const from = r?.from.code ?? 'PAK';
  const to = r?.toCodes[0] ?? '';
  const title = r ? `${r.from.city} to ${r.toCity}` : 'Flights from Pakistan';
  const airlines = r ? r.direct.map((a) => a.name).join(' · ') : '';

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 80px', background: 'linear-gradient(135deg, #05203c 0%, #0b3a6b 100%)', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={`data:image/png;base64,${logo}`} width={64} height={60} />
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>BookMyFlight</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32, fontSize: 120, fontWeight: 800, letterSpacing: -3 }}>
            <span>{from}</span>
            <span style={{ color: '#4fc1e0', fontSize: 90 }}>→</span>
            <span>{to}</span>
          </div>
          <div style={{ marginTop: 12, fontSize: 52, fontWeight: 700 }}>{`${title} flights`}</div>
          {r && (
            <div style={{ marginTop: 20, fontSize: 30, color: '#c1c7cf', maxWidth: 1040 }}>
              {`${r.direct.length} non-stop airline${r.direct.length > 1 ? 's' : ''}: ${airlines}`}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28 }}>
          <span style={{ display: 'flex', padding: '12px 26px', borderRadius: 12, background: '#0062e3', fontWeight: 700 }}>
            {`Call ${siteConfig.contact.hotlineDisplay}`}
          </span>
          <span style={{ color: '#c1c7cf' }}>bookmyflight.pk</span>
        </div>
      </div>
    ),
    size,
  );
}
