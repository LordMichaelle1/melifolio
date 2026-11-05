'use client';

import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { marqueeItems } from '@/data/site';
import { wrap } from '@/lib/cipher';

const BASE_SPEED = 1.2;
const items = [...marqueeItems, ...marqueeItems];

// Drifts on its own, speeds up with scroll velocity and flips direction when scrolling back up.
export function TechMarquee() {
  const reduced = useReducedMotion();
  const offset = useMotionValue(0);
  const direction = useRef(1);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(offset, (value) => `${wrap(-50, 0, value)}%`);

  useAnimationFrame((_, delta) => {
    if (reduced) return;

    const speed = boost.get();
    if (speed < 0) direction.current = -1;
    else if (speed > 0) direction.current = 1;

    const step = direction.current * -BASE_SPEED * (delta / 1000);
    offset.set(offset.get() + step + step * Math.abs(speed));
  });

  return (
    <div aria-hidden="true" className="relative z-10 overflow-hidden border-y border-line bg-background py-6 md:py-8">
      <motion.div style={{ x }} className="flex w-max gap-10 md:gap-16">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-hollow text-5xl md:text-7xl font-medium tracking-tighter whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
