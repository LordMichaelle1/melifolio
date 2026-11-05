'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RedactProps {
  children: ReactNode;
  delay?: number;
  wrap?: boolean;
}

// A redaction bar that wipes away once the text scrolls into view.
export function Redact({ children, delay = 0, wrap = false }: RedactProps) {
  return (
    <span className={cn('relative inline-block text-primary', !wrap && 'whitespace-nowrap')}>
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.7, delay, ease: [0.7, 0, 0.2, 1] }}
        className="absolute inset-x-0 inset-y-[0.1em] origin-right bg-primary"
      />
    </span>
  );
}
