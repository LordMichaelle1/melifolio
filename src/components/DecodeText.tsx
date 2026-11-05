'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useDecode } from '@/hooks/useDecode';
import { cn } from '@/lib/utils';

interface DecodeTextProps {
  text: string;
  trigger?: 'view' | 'hover';
  delay?: number;
  duration?: number;
  className?: string;
}

// While decoding, the real text stays in place invisibly to hold the layout, so nothing shifts.
export function DecodeText({ text, trigger = 'view', delay, duration, className }: DecodeTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });
  const { display, play } = useDecode(text, { delay, duration });

  useEffect(() => {
    if (trigger === 'view' && isInView) play();
  }, [trigger, isInView, play]);

  useEffect(() => {
    if (trigger !== 'hover') return;

    const host = ref.current?.closest<HTMLElement>('a, button, li') ?? ref.current;
    host?.addEventListener('mouseenter', play);
    host?.addEventListener('focus', play);

    return () => {
      host?.removeEventListener('mouseenter', play);
      host?.removeEventListener('focus', play);
    };
  }, [trigger, play]);

  const isDecoding = display !== text;

  return (
    <span ref={ref} className={cn('relative inline-block', className)}>
      <span className={cn(isDecoding && 'invisible')}>{text}</span>
      {isDecoding && <span aria-hidden="true" className="absolute inset-0">{display}</span>}
    </span>
  );
}
