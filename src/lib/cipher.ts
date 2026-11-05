const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVXYZ0123456789#%&/<>=+*';

export function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

// Resolves text left to right: characters behind `progress` are real, the rest are noise.
export function scramble(text: string, progress: number) {
  const resolved = Math.floor(text.length * progress);

  return text
    .split('')
    .map((char, index) => (index < resolved || char === ' ' ? char : randomGlyph()))
    .join('');
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
