import Image from 'next/image';
import type { AirlineBase } from '@/lib/airlines';

/** Airline badge displaying official vector logo or brand colour fallback badge. */
export function AirlineBadge({
  airline,
  size = 32,
}: {
  airline: Pick<AirlineBase, 'code' | 'color' | 'name'> & Partial<Pick<AirlineBase, 'logo'>>;
  size?: number;
}) {
  if (airline.logo) {
    return (
      <span
        aria-hidden
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: size,
          height: size,
          borderRadius: size >= 40 ? 10 : 8,
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
        }}
      >
        <Image
          src={airline.logo}
          alt={`${airline.name} logo`}
          width={size}
          height={size}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: size >= 40 ? 10 : 8,
        backgroundColor: airline.color,
        color: '#fff',
        fontSize: Math.round(size * 0.36),
        fontWeight: 700,
        letterSpacing: '0.02em',
        lineHeight: 1,
      }}
    >
      {airline.code}
    </span>
  );
}
