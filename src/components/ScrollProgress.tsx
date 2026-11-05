'use client';

import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

// Page position as a hex offset, 0x00 at the top and 0xFF at the bottom.
function toOffset(progress: number) {
  const value = Math.round(progress * 255);
  return `0x${value.toString(16).toUpperCase().padStart(2, '0')}`;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  const [offset, setOffset] = useState(toOffset(0));

  useMotionValueEvent(scrollYProgress, 'change', (value) => setOffset(toOffset(value)));

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 z-[55] h-px origin-left bg-accent"
      />
      <span
        aria-hidden="true"
        className="label fixed bottom-5 right-5 z-[55] hidden md:block text-secondary mix-blend-difference"
      >
        {offset}
      </span>
    </>
  );
}
