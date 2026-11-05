'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DecodeText } from './DecodeText';

interface ProjectPanelProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

// On desktop the panels stack: each sticks below the last and pushes it back slightly.
export function ProjectPanel({ project, index, total, progress }: ProjectPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(panelRef, { once: true, margin: '-10% 0px' });
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index - 1) * 0.025]);
  const number = String(index + 1).padStart(2, '0');

  return (
    <div ref={panelRef} className="lg:sticky" style={{ top: `calc(5rem + ${index * 1.25}rem)` }}>
      <motion.article
        style={isDesktop ? { scale } : undefined}
        className="group origin-top border border-line bg-surface grid lg:grid-cols-12 lg:h-[72vh] lg:min-h-[480px]"
      >
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : undefined}
          transition={{ duration: 1, ease: [0.7, 0, 0.2, 1] }}
          className="relative aspect-video lg:aspect-auto lg:col-span-7 lg:order-2 overflow-hidden bg-surface-solid"
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="project-image object-cover object-left-top"
          />
        </motion.div>

        <div className="lg:col-span-5 lg:order-1 flex flex-col justify-between gap-8 p-6 md:p-8 lg:border-r border-line">
          <div>
            <p className="label text-accent mb-4">{number} / {String(total).padStart(2, '0')}</p>
            <h3 className="display text-2xl md:text-4xl font-semibold leading-none text-primary mb-5">
              {project.title}
            </h3>
            <p className="text-secondary leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-5">
            <p className="label text-secondary">{project.tags.join(' / ')}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wipe btn-press label inline-flex items-center gap-2 border border-line px-4 py-3 text-primary"
              >
                <DecodeText text="View Live" trigger="hover" duration={400} />
                <ArrowUpRight className="w-4 h-4" />
                <span className="sr-only">: {project.title}</span>
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
