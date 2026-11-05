'use client';

import { socialLinks } from '@/data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line bg-background">
      <div className="container-custom py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="label text-secondary">
          <p>&copy; {currentYear} Abiodun Michael</p>
          <p className="mt-1">Built with Next.js, TypeScript and Tailwind CSS</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label text-primary hover:text-accent transition-colors"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
