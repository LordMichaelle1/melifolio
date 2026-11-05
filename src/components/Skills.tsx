'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categories, skills } from '@/data/skills';
import { cn } from '@/lib/utils';
import { DecodeText } from './DecodeText';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section bg-background">
      <div className="container-custom">
        <SectionHeading index="0x04" label="Skills" title="What I Use" />

        <div role="group" aria-label="Filter skills" className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={cn(
                'label relative py-2 transition-colors duration-200',
                activeCategory === category.id ? 'text-primary' : 'text-secondary hover:text-primary'
              )}
            >
              {category.title}
              {activeCategory === category.id && (
                <motion.span layoutId="skill-filter" className="absolute inset-x-0 bottom-0 h-px bg-accent" />
              )}
            </button>
          ))}
        </div>

        <motion.ul layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px border border-line bg-line">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredSkills.map((skill) => (
              <motion.li
                key={skill.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="wipe bg-background px-4 py-5 text-primary text-sm md:text-base tracking-tight cursor-default"
              >
                <DecodeText text={skill.name} trigger="hover" duration={400} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
