import type { AirlineBase } from '@/lib/airlines';

/** Square code badge in the airline's brand colour (used instead of trademarked logos). */
export function AirlineBadge({
  airline,
  size = 32,
}: {
  airline: Pick<AirlineBase, 'code' | 'color' | 'name'>;
  size?: number;
}) {
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
