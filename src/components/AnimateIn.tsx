'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.7,
  className,
  style,
}: AnimateInProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
