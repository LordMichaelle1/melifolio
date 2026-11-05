'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useMediaQuery } from './useMediaQuery';

// Touch screens have no hover, so whatever crosses the middle of the screen counts as hovered.
export function useCenterActive<T extends Element>() {
  const ref = useRef<T>(null);
  const isTouch = useMediaQuery('(hover: none)');
  const isInBand = useInView(ref, { margin: '-49% 0px -49% 0px' });

  return { ref, isActive: isTouch && isInBand };
}
