'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/site';
import { cn } from '@/lib/utils';
import { CipherLink } from './CipherLink';
import { DecodeText } from './DecodeText';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const MenuIcon = isOpen ? X : Menu;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300',
        scrolled || isOpen ? 'bg-background border-line' : 'border-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="font-mono text-sm text-primary">
          <DecodeText text="Meli.Dev" trigger="hover" duration={400} />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="label text-secondary hover:text-primary transition-colors">
                <DecodeText text={link.label} trigger="hover" duration={350} />
              </a>
            </li>
          ))}
        </ul>

        <CipherLink href="/cv.pdf" download label="Download CV" icon={<Download className="w-3.5 h-3.5" />} className="hidden md:inline-flex py-2.5" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-primary"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 top-[57px] -z-10 bg-background cursor-default"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto', transition: { duration: 0.26, ease: [0.2, 0, 0, 1] } }}
              exit={{ height: 0, transition: { duration: 0.2 } }}
              className="md:hidden overflow-hidden border-t border-line bg-background"
            >
              <div className="container-custom flex flex-col py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="display text-2xl font-semibold text-primary py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-line">
                  <CipherLink href="/cv.pdf" download label="Download CV" icon={<Download className="w-3.5 h-3.5" />} className="w-full py-2.5" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
