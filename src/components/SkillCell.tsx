'use client';

import { motion } from 'framer-motion';
import { useCenterActive } from '@/hooks/useCenterActive';
import { DecodeText } from './DecodeText';

export function SkillCell({ name }: { name: string }) {
  const { ref, isActive } = useCenterActive<HTMLLIElement>();

  return (
    <motion.li
      ref={ref}
      data-active={isActive}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="wipe border-r border-b border-line px-4 py-5 text-primary text-sm md:text-base cursor-default"
    >
      <DecodeText text={name} trigger="hover" duration={400} active={isActive} />
    </motion.li>
  );
}
