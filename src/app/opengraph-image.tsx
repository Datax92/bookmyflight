import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'BookMyFlight: compare cheap flights from Pakistan';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logo = await readFile(join(process.cwd(), 'public/images/brand/logo-mark-gradient.png'), 'base64');
const photo = await readFile(join(process.cwd(), 'public/images/hero/hero-aviation.jpg'), 'base64');

/** Default social-share image for every page without its own. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#05203c' }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src={`data:image/jpeg;base64,${photo}`}
          width={1200}
          height={670}
          style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover', opacity: 0.55 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background: 'linear-gradient(90deg, #05203c 0%, rgba(5,32,60,0.85) 45%, rgba(5,32,60,0.1) 100%)',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={`data:image/png;base64,${logo}`} width={86} height={80} />
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                letterSpacing: -1.5,
                backgroundImage: 'linear-gradient(90deg, #ec7826 0%, #f0a04e 42%, #7fd0e2 58%, #4fc1e0 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              BookMyFlight
            </span>
          </div>
          <div style={{ marginTop: 40, fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 720 }}>
            Cheap flights from Pakistan. One simple search.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: '#c1c7cf', maxWidth: 720 }}>
            Compare airlines, refund &amp; reissue rules · Powered by O.S Travel &amp; Tours
          </div>
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '14px 28px',
              borderRadius: 12,
              background: '#0062e3',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            bookmyflight.pk
          </div>
        </div>
      </div>
    ),
    size,
  );
}
