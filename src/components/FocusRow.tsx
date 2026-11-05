'use client';

import { motion } from 'framer-motion';
import type { FocusArea } from '@/data/site';
import { useCenterActive } from '@/hooks/useCenterActive';

interface FocusRowProps {
  area: FocusArea;
  index: number;
}

export function FocusRow({ area, index }: FocusRowProps) {
  const { ref, isActive } = useCenterActive<HTMLLIElement>();

  return (
    <motion.li
      ref={ref}
      data-active={isActive}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="wipe border-b border-line p-5 flex items-start gap-4 cursor-default"
    >
      <area.icon className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
      <div>
        <h3 className="text-primary font-medium mb-1">{area.title}</h3>
        <p className="text-secondary text-sm">{area.description}</p>
      </div>
    </motion.li>
  );
}
