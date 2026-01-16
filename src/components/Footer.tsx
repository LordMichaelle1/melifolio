'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { icon: Github, href: 'https://github.com/lordmichaelle1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/michael-abiodun-2657a3238/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Michael52110896', label: 'Twitter' },
  { icon: Mail, href: 'mailto:Michaelabiodun2006@gmail.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-secondary text-sm">
              &copy; {currentYear} Abiodun Michael. All rights reserved.
            </p>
            <p className="text-secondary/60 text-xs mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-lg transition-all duration-300 btn-press',
                  'bg-surface-solid/30 hover:bg-surface-solid',
                  'hover:glow-accent text-secondary hover:text-primary'
                )}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
