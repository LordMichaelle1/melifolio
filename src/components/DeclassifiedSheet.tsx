'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

// The paper sheet that slides up over the pinned hero, with a stamp that lands as it arrives.
export function DeclassifiedSheet({ children }: { children: ReactNode }) {
  return (
    <div className="paper relative z-10">
      <div className="container-custom relative">
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.8, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.35, delay: 0.15, ease: [0.5, 0, 0.1, 1] }}
          className="label absolute right-4 sm:right-6 lg:right-10 top-8 md:top-12 border-2 border-accent px-3 py-1.5 text-accent"
        >
          Declassified
        </motion.span>
      </div>
      {children}
    </div>
  );
}
