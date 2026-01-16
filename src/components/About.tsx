'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency to deliver lightning-fast user experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with teams and stakeholders to bring ideas to life effectively.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Passionate About Building
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary text-lg leading-relaxed">
              I&apos;m a software engineer with a passion for creating digital experiences
              that are both beautiful and functional. With expertise spanning frontend
              and backend technologies, I bring ideas to life through code.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              My journey in tech has been driven by curiosity and a constant desire
              to learn. I thrive on solving complex problems and turning them into
              simple, elegant solutions that users love.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={cn(
                  'glass-card p-6 flex items-start gap-4',
                  'hover:glow-accent transition-all duration-300',
                  'group cursor-default'
                )}
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {value.title}
                  </h3>
                  <p className="text-secondary text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
