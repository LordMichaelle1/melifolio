'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { experiences } from '@/data/experience';
import { SectionHeading } from './SectionHeading';
import { TimelineRow } from './TimelineRow';

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

          {experiences.map((experience) => (
            <TimelineRow key={experience.id} experience={experience} />
          ))}
        </ol>
      </div>
    </section>
  );
}
