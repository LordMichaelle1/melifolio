'use client';

import { motion } from 'framer-motion';
import { Redact } from './Redact';

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
      <h2 className="display text-3xl sm:text-5xl lg:text-7xl font-semibold leading-none text-primary">
        <Redact wrap>{title}</Redact>
      </h2>
    </div>
  );
}
