'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectPanel } from './ProjectPanel';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start start', 'end end'] });

  return (
    <section id="projects" className="section bg-background">
      <div className="container-custom">
        <SectionHeading index="0x02" label="Projects" title="Selected Work" />

        <div ref={listRef} className="space-y-6">
          {projects.map((project, index) => (
            <ProjectPanel
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
