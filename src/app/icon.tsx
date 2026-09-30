import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

const logo = await readFile(join(process.cwd(), 'public/images/brand/logo-mark-white.png'), 'base64');

/** App / browser-tab icon: white bird mark on Dark Sky. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#05203c',
          borderRadius: 112,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={`data:image/png;base64,${logo}`} width={340} height={317} />
      </div>
    ),
    size,
  );
}
