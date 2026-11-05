'use client';

import { useEffect, type RefObject } from 'react';
import { prefersReducedMotion, randomGlyph } from '@/lib/cipher';

const CELL = 22;
const RADIUS = 170;
const SECRET = 'MELI';
const RIPPLE_MS = 1400;
const RIPPLE_SPEED = 0.45;
const RIPPLE_WIDTH = 70;

interface Ripple {
  x: number;
  y: number;
  start: number;
}

function readColors() {
  const styles = getComputedStyle(document.documentElement);
  return {
    base: styles.getPropertyValue('--primary').trim(),
    signal: styles.getPropertyValue('--accent').trim(),
  };
}

function rippleStrength(ripple: Ripple, x: number, y: number, now: number) {
  const age = now - ripple.start;
  const ringDistance = Math.abs(Math.hypot(x - ripple.x, y - ripple.y) - age * RIPPLE_SPEED);
  return Math.max(0, 1 - ringDistance / RIPPLE_WIDTH) * Math.max(0, 1 - age / RIPPLE_MS);
}

// Draws a dim grid of glyphs that resolves into a repeating word near a focus point. The focus
// follows the mouse once there is one. Until then it drifts on its own and scrolling pushes it
// along, so phones get the effect too. Tapping or clicking sends a ripple through the field.
export function useCipherField(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const mouse = { x: 0, y: 0, seen: false };
    const reduced = prefersReducedMotion();
    const frameMs = window.matchMedia('(hover: none)').matches ? 50 : 33;
    let ripples: Ripple[] = [];
    let colors = readColors();
    let cols = 0;
    let rows = 0;
    let cells: string[] = [];
    let frame: number | null = null;
    let lastDraw = 0;
    let drawCount = 0;

    const getFocus = (now: number) => {
      if (mouse.seen) return mouse;

      const phase = now * 0.00035 + window.scrollY * 0.004;
      return {
        x: canvas.clientWidth * (0.5 + 0.4 * Math.sin(phase * 1.3)),
        y: canvas.clientHeight * (0.3 + 0.22 * Math.sin(phase * 2.1 + 1)),
      };
    };

    const draw = (now: number) => {
      const focus = getFocus(now);
      const radius = Math.min(RADIUS, canvas.clientWidth * 0.34);
      ripples = ripples.filter((ripple) => now - ripple.start < RIPPLE_MS);
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          const x = col * CELL;
          const y = row * CELL;
          const wave = Math.max(0, Math.sin((x + y) * 0.006 - now * 0.0005)) ** 12;
          let near = Math.max(0, 1 - Math.hypot(x - focus.x, y - focus.y) / radius);

          for (const ripple of ripples) near = Math.max(near, rippleStrength(ripple, x, y, now));

          if (Math.random() < 0.004 + wave * 0.05) cells[index] = randomGlyph();

          ctx.globalAlpha = Math.min(1, 0.07 + wave * 0.16 + near * 0.9);
          ctx.fillStyle = near > 0.15 ? colors.signal : colors.base;
          ctx.fillText(near > 0.3 ? SECRET[(col + row) % SECRET.length] : cells[index], x, y);
        }
      }
    };

    const loop = (now: number) => {
      // Pinned behind the paper sheet the canvas still counts as on screen, so skip drawing once covered.
      const isCovered = window.scrollY > canvas.clientHeight;

      if (!isCovered && now - lastDraw >= frameMs) {
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
      draw(performance.now());
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.seen = true;
    };

    const handleDown = (event: PointerEvent) => {
      if ((event.target as Element).closest('.paper')) return;

      const rect = canvas.getBoundingClientRect();
      ripples.push({ x: event.clientX - rect.left, y: event.clientY - rect.top, start: performance.now() });
    };

    const resizeObserver = new ResizeObserver(resize);
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startLoop();
      else stopLoop();
    });

    resizeObserver.observe(canvas);
    visibility.observe(canvas);
    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerdown', handleDown, { passive: true });

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleDown);
    };
  }, [canvasRef]);
}
