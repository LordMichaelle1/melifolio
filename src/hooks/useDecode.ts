'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { prefersReducedMotion, scramble } from '@/lib/cipher';

const TICK_MS = 40;

interface DecodeOptions {
  duration?: number;
  delay?: number;
}

export function useDecode(text: string, { duration = 800, delay = 0 }: DecodeOptions = {}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  }, []);

  const play = useCallback(() => {
    stop();

    if (prefersReducedMotion()) {
      setDisplay(text);
      return;
    }

    const start = performance.now();
    let lastTick = 0;

    const tick = (now: number) => {
      const progress = Math.min(Math.max((now - start - delay) / duration, 0), 1);

      if (progress === 1) {
        setDisplay(text);
        frame.current = null;
        return;
      }

      if (now - lastTick >= TICK_MS) {
        setDisplay(scramble(text, progress));
        lastTick = now;
      }

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
  }, [text, duration, delay, stop]);

  useEffect(() => stop, [stop]);

  return { display, play };
}
