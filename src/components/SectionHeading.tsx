'use client';

import { motion } from 'framer-motion';
import { DecodeText } from './DecodeText';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
}

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="label text-accent">{index}</span>
        <span className="label text-secondary">{label}</span>
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
          className="h-px flex-1 origin-left bg-line"
        />
      </div>
      <h2 className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tighter text-primary">
        <DecodeText text={title} duration={900} />
      </h2>
    </div>
  );
}
