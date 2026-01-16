'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code2, Users, Bug } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stat {
  icon: typeof Briefcase;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Briefcase, value: 4, suffix: '+', label: 'Years Coding' },
  { icon: Code2, value: 20, suffix: '+', label: 'Projects Built' },
  { icon: Users, value: 10, suffix: '+', label: 'Happy Clients' },
  { icon: Bug, value: 500, suffix: '+', label: 'Bugs Squashed' },
];

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={cn(
                  'inline-flex p-3 rounded-xl mb-4',
                  'bg-accent/10 text-accent',
                  'group-hover:bg-accent group-hover:text-white',
                  'transition-colors duration-300'
                )}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  <CountUp target={stat.value} />
                  <span className="text-cta">{stat.suffix}</span>
                </div>
                <p className="text-secondary text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
