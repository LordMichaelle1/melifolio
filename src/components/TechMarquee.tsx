'use client';

import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Terminal,
  GitBranch,
} from 'lucide-react';

const technologies = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: Terminal },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Code2 },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'React Native', icon: Smartphone },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Git', icon: GitBranch },
  { name: 'Laravel', icon: Code2 },
  { name: 'Java', icon: Code2 },
];

export function TechMarquee() {
  return (
    <div className="py-12 overflow-hidden bg-surface-solid/20">
      <div className="container-custom mb-8">
        <p className="text-center text-secondary text-sm uppercase tracking-wider">
          Technologies I Work With
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-container">
          <div className="marquee-content">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 glass-card shrink-0 hover:glow-accent transition-shadow duration-300 group"
              >
                <tech.icon className="w-5 h-5 text-accent group-hover:text-cta transition-colors" />
                <span className="text-primary font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .marquee-container {
            overflow: hidden;
            width: 100%;
          }

          .marquee-content {
            display: flex;
            gap: 1rem;
            width: max-content;
            animation: marquee 30s linear infinite;
            will-change: transform;
          }

          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee-content { animation: none; }
          }
        `}</style>
      </div>
    </div>
  );
}
