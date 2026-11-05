'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/data/experience';
import { useCenterActive } from '@/hooks/useCenterActive';

export function TimelineRow({ experience }: { experience: Experience }) {
  const { ref, isActive } = useCenterActive<HTMLLIElement>();

  return (
    <motion.li
      ref={ref}
      data-active={isActive}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6 }}
      className="group grid md:grid-cols-12 gap-3 md:gap-6 border-b border-line last:border-b-0 py-8 pl-5 md:pl-8"
    >
      <p className="md:col-span-3 label text-accent">{experience.duration}</p>
      <div className="md:col-span-4">
        <h3 className="text-xl md:text-2xl font-semibold text-primary transition-colors duration-300 group-data-[active=true]:text-accent">
          {experience.role}
        </h3>
        <p className="text-secondary text-sm mt-1">{experience.company}</p>
      </div>
      <ul className="md:col-span-5 space-y-2 text-secondary text-sm leading-relaxed">
        {experience.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </motion.li>
  );
}
