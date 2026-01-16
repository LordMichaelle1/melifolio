'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { categories, skills } from '@/data/skills';
import { cn } from '@/lib/utils';

function ProgressBar({ level, isInView, delay }: { level: number; isInView: boolean; delay: number }) {
  return (
    <div className="h-2 w-full bg-surface-solid/50 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: isInView ? `${level}%` : '0%',
          transitionDelay: `${delay}ms`,
          background: level >= 90
            ? 'linear-gradient(90deg, var(--accent), var(--cta))'
            : level >= 75
              ? 'var(--accent)'
              : 'var(--secondary)',
        }}
      />
    </div>
  );
}

function SkillLevel({ level }: { level: number }) {
  if (level >= 90) return <span className="text-xs text-cta font-medium">Expert</span>;
  if (level >= 75) return <span className="text-xs text-accent font-medium">Advanced</span>;
  if (level >= 60) return <span className="text-xs text-secondary font-medium">Intermediate</span>;
  return <span className="text-xs text-secondary font-medium">Learning</span>;
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section bg-surface-solid/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium',
                'transition-all duration-300 btn-press',
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-surface-solid/50 text-secondary hover:bg-surface-solid hover:text-primary'
              )}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.id === 'all' ? 'All' : category.title.split(' ')[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className={cn(
                'glass-card p-3 sm:p-5 group',
                'hover:glow-accent transition-all duration-300'
              )}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h3 className="text-primary text-sm sm:text-base font-semibold group-hover:text-accent transition-colors truncate mr-2">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                  <span className="hidden sm:inline"><SkillLevel level={skill.level} /></span>
                  <span className="text-xs text-secondary">{skill.level}%</span>
                </div>
              </div>
              <ProgressBar
                level={skill.level}
                isInView={isInView}
                delay={index * 30}
              />
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent">{skills.length}+</div>
            <div className="text-xs sm:text-sm text-secondary">Technologies</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-cta">
              {skills.filter(s => s.level >= 90).length}
            </div>
            <div className="text-xs sm:text-sm text-secondary">Expert Level</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent">
              {skills.filter(s => s.level >= 75).length}
            </div>
            <div className="text-xs sm:text-sm text-secondary">Advanced+</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
