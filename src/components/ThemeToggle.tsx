'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2" aria-label="Toggle theme">
        <div className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="btn-press p-2 text-secondary hover:text-accent transition-colors"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}
