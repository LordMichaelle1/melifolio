import { ClipboardCheck, Code2, Server, type LucideIcon } from 'lucide-react';

export const EMAIL = 'Michaelabiodun2006@gmail.com';
export const LOCATION = 'Lagos, Nigeria';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = [
  { href: 'https://github.com/lordmichaelle1', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/shipwithmeli/', label: 'LinkedIn' },
  { href: 'https://x.com/Michael52110896', label: 'X' },
  { href: `mailto:${EMAIL}`, label: 'Email' },
];

export const specialties = ['Next.js', 'Python', 'Rust', 'APIs', 'AI Evaluation'];

export const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Django',
  'Rust',
  'PostgreSQL',
  'Laravel',
  'Tailwind CSS',
];

export interface FocusArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    icon: Code2,
    title: 'Production Systems',
    description: 'Payments, auth, role-based access and admin tools in apps with real users.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'REST APIs in Django, Laravel and Node.js, including the third-party integrations around them.',
  },
  {
    icon: ClipboardCheck,
    title: 'AI Evaluation',
    description: 'Benchmark tasks checked by automated tests, and reviews of how models handle function calling.',
  },
];

export const stats = [
  { value: 5, suffix: '+', label: 'Years Coding' },
  { value: 20, suffix: '+', label: 'Projects Built' },
  { value: 10, suffix: '+', label: 'Clients' },
];
