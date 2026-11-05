'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { experiences } from '@/data/experience';
import { SectionHeading } from './SectionHeading';

export function Timeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 75%'] });

  return (
    <section id="experience" className="section bg-background">
      <div className="container-custom">
        <SectionHeading index="0x03" label="Experience" title="Where I've Worked" />

        <ol ref={listRef} className="relative border-l border-line">
          <motion.span
            aria-hidden="true"
            style={{ scaleY: scrollYProgress }}
            className="absolute -left-px top-0 bottom-0 w-px origin-top bg-accent"
          />

          {experiences.map((exp) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-12 gap-3 md:gap-6 border-b border-line last:border-b-0 py-8 pl-5 md:pl-8"
            >
              <p className="md:col-span-3 label text-accent">{exp.duration}</p>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">{exp.role}</h3>
                <p className="text-secondary text-sm mt-1">{exp.company}</p>
              </div>
              <ul className="md:col-span-5 space-y-2 text-secondary text-sm leading-relaxed">
                {exp.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
