import type { ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Previously a scroll-reveal wrapper. The Skyscanner-style design shows content
 * immediately, so this now renders a plain container (props kept for compatibility).
 */
export function AnimateIn({ children, className, style }: AnimateInProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
