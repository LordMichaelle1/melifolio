"use client";

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="ml-4 p-2 rounded-full bg-background/70 hover:bg-background/90 border border-border transition-colors text-xl"
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
}
