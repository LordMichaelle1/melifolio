'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '@/data/site';
import { prefersReducedMotion } from '@/lib/cipher';

const DURATION_MS = 1600;

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (!isInView || prefersReducedMotion()) return;

    const start = performance.now();
    let frame: number;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 4)) * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  return (
    <section aria-label="Stats" className="bg-background pb-20 md:pb-32">
      <dl className="container-custom grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-t border-line pt-4">
            <dd className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tighter text-primary tabular-nums">
              <CountUp target={stat.value} />
              <span className="text-accent">{stat.suffix}</span>
            </dd>
            <dt className="label text-secondary mt-2">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
