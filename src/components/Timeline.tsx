'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section bg-surface-solid/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            My Journey
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={cn(
                'relative mb-12 last:mb-0',
                'pl-12 md:pl-0',
                index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
              )}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  'absolute top-0 w-8 h-8 rounded-full',
                  'bg-accent flex items-center justify-center',
                  'left-0 md:left-1/2 md:-translate-x-1/2',
                  'shadow-lg shadow-accent/25'
                )}
              >
                {exp.type === 'work' ? (
                  <Briefcase className="w-4 h-4 text-white" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-white" />
                )}
              </div>

              <div
                className={cn(
                  'glass-card p-6',
                  'hover:glow-accent transition-all duration-300'
                )}
              >
                <span className="text-cta text-sm font-medium">
                  {exp.duration}
                </span>
                <h3 className="text-lg font-semibold text-primary mt-1">
                  {exp.role}
                </h3>
                <p className="text-accent text-sm mb-4">
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-secondary text-sm flex items-start gap-2"
                    >
                      <span className="text-cta mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
