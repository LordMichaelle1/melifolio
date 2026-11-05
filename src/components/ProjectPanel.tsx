'use client';

import { useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { motion, useInView, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useCenterActive } from '@/hooks/useCenterActive';
import { cn } from '@/lib/utils';
import { DecodeText } from './DecodeText';

interface ProjectPanelProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const CLOSED = 'inset(0 100% 0 0)';
const OPEN = 'inset(0 0% 0 0)';

// The panels stack: each sticks below the last and pushes it back slightly. On phones each one is
// a compact file card whose number stays visible as a tab, and its details wipe in over the image,
// so the card never grows taller than the screen and gets covered before it can be read.
export function ProjectPanel({ project, index, total, progress }: ProjectPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(panelRef, { once: true, margin: '-10% 0px' });
  const { ref: articleRef, isActive } = useCenterActive<HTMLElement>();
  const [isOpen, setIsOpen] = useState(false);
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index - 1) * 0.025]);
  const fileNumber = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  const tags = project.tags.join(' / ');

  return (
    <div
      ref={panelRef}
      style={{ '--stack': index } as CSSProperties}
      className="[@media(min-height:640px)]:sticky top-[calc(4.5rem+var(--stack)*1.75rem)] lg:top-[calc(5rem+var(--stack)*1.25rem)]"
    >
      <motion.article
        ref={articleRef}
        data-active={isActive}
        style={{ scale }}
        className="group origin-top border border-line bg-surface grid lg:grid-cols-12 lg:h-[72vh] lg:min-h-[480px]"
      >
        <div className="lg:hidden flex items-center justify-between h-7 px-4 border-b border-line">
          <p className="label text-accent">{fileNumber}</p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="btn-press label flex items-center gap-1.5 h-full text-primary"
          >
            {isOpen ? 'Close' : 'Details'}
            <Plus className={cn('w-3 h-3 transition-transform duration-200', isOpen && 'rotate-45')} />
          </button>
        </div>

        <div className="relative aspect-[3/2] lg:aspect-auto lg:col-span-7 lg:order-2 overflow-hidden bg-surface-solid">
          <motion.div
            initial={{ clipPath: CLOSED }}
            animate={isInView ? { clipPath: OPEN } : undefined}
            transition={{ duration: 1, ease: [0.7, 0, 0.2, 1] }}
            className={cn('absolute inset-0 transition-opacity duration-200', isOpen && 'max-lg:opacity-0')}
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="project-image object-cover object-left-top"
            />
          </motion.div>

          <motion.div
            aria-hidden={!isOpen}
            initial={{ clipPath: CLOSED }}
            animate={{ clipPath: isOpen ? OPEN : CLOSED }}
            transition={{ duration: isOpen ? 0.26 : 0.2, ease: [0.7, 0, 0.2, 1] }}
            className="lg:hidden absolute inset-0 overflow-y-auto bg-surface p-4"
          >
            <p className="text-secondary text-sm leading-relaxed mb-3">{project.description}</p>
            <p className="label text-secondary">{tags}</p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 lg:order-1 flex flex-col justify-between gap-4 lg:gap-8 p-4 md:p-6 lg:p-8 lg:border-r border-line">
          <div>
            <p className="hidden lg:block label text-accent mb-4">{fileNumber}</p>
            <h3 className="display text-2xl md:text-4xl font-semibold leading-none text-primary mb-2 lg:mb-5">
              {project.title}
            </h3>
            <p className="lg:hidden text-secondary text-sm leading-snug">{project.summary}</p>
            <p className="hidden lg:block text-secondary leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-5">
            <p className="hidden lg:block label text-secondary">{tags}</p>
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
