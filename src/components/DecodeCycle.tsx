'use client';

import { useEffect, useState } from 'react';
import { useDecode } from '@/hooks/useDecode';

const HOLD_MS = 2600;

interface DecodeCycleProps {
  words: string[];
  className?: string;
}

export function DecodeCycle({ words, className }: DecodeCycleProps) {
  const [index, setIndex] = useState(0);
  const word = words[index];
  const { display, play } = useDecode(word, { duration: 600 });

  useEffect(() => {
    play();
    const timer = setTimeout(() => setIndex((current) => (current + 1) % words.length), HOLD_MS);
    return () => clearTimeout(timer);
  }, [play, words.length]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">{display}</span>
      <span aria-hidden="true" className="caret" />
    </span>
  );
}
