'use client';

import { useEffect, type RefObject } from 'react';
import { prefersReducedMotion, randomGlyph } from '@/lib/cipher';

const CELL = 22;
const RADIUS = 170;
const FRAME_MS = 33;
const SECRET = 'MELI';

function readColors() {
  const styles = getComputedStyle(document.documentElement);
  return {
    base: styles.getPropertyValue('--primary').trim(),
    signal: styles.getPropertyValue('--accent').trim(),
  };
}

// Draws a dim grid of glyphs. Near the pointer the noise resolves into a repeating word.
export function useCipherField(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const pointer = { x: -9999, y: -9999 };
    const reduced = prefersReducedMotion();
    let colors = readColors();
    let cols = 0;
    let rows = 0;
    let cells: string[] = [];
    let frame: number | null = null;
    let lastDraw = 0;
    let drawCount = 0;

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          const x = col * CELL;
          const y = row * CELL;
          const near = Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / RADIUS);
          const wave = Math.max(0, Math.sin((x + y) * 0.006 - now * 0.0005)) ** 12;

          if (Math.random() < 0.004 + wave * 0.05) cells[index] = randomGlyph();

          ctx.globalAlpha = 0.07 + wave * 0.16 + near * 0.9;
          ctx.fillStyle = near > 0.15 ? colors.signal : colors.base;
          ctx.fillText(near > 0.3 ? SECRET[(col + row) % SECRET.length] : cells[index], x, y);
        }
      }
    };

    const loop = (now: number) => {
      // Pinned behind the paper sheet the canvas still counts as on screen, so skip drawing once covered.
      const isCovered = window.scrollY > canvas.clientHeight;

      if (!isCovered && now - lastDraw >= FRAME_MS) {
        if (drawCount++ % 30 === 0) colors = readColors();
        draw(now);
        lastDraw = now;
      }
      frame = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (frame === null && !reduced) frame = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    };

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * scale;
      canvas.height = canvas.clientHeight * scale;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.font = `10px ${getComputedStyle(canvas).fontFamily}`;
      ctx.textBaseline = 'top';
      cols = Math.ceil(canvas.clientWidth / CELL);
      rows = Math.ceil(canvas.clientHeight / CELL);
      cells = Array.from({ length: cols * rows }, randomGlyph);
      draw(0);
    };

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const resizeObserver = new ResizeObserver(resize);
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startLoop();
      else stopLoop();
    });

    resizeObserver.observe(canvas);
    visibility.observe(canvas);
    window.addEventListener('pointermove', handlePointer, { passive: true });

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener('pointermove', handlePointer);
    };
  }, [canvasRef]);
}
