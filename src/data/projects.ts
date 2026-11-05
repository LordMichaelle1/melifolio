export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  size: 'small' | 'medium' | 'large';
}

export const projects: Project[] = [
  {
    id: 'bestpotech',
    title: 'Best Solution Polytechnic Platform',
    description:
      'Platform for a polytechnic. One Next.js app serves the public site, student portal, staff admin and API. Payload CMS manages 16 typed data models, each student only sees their own data, and live Paystack payments are reconciled by webhook. The public site ranks first for the school name.',
    image: '/portal.png',
    tags: ['Next.js', 'TypeScript', 'Payload CMS', 'PostgreSQL', 'Paystack'],
    liveUrl: 'https://bestpotech.edu.ng',
    size: 'large',
  },
  {
    id: 'shipwithmeli',
    title: 'shipwithmeli',
    description:
      'Productized service for non-technical founders. Take a vibecoded AI MVP from 70% to launched and live in 4 weeks. Fixed price, fixed scope, daily updates. The code is yours from day one.',
    image: '/shipwithmeli.png',
    tags: ['Next.js', 'TypeScript', 'React', 'AI'],
    liveUrl: 'https://shipwithmeli.com',
    size: 'large',
  },
  {
    id: 'bestsolar',
    title: 'BestSolar Energy',
    description:
      'E-commerce platform for a solar energy company with several locations. It has auth, a cart, a package configurator, a customer portal and a custom AI assistant that gives solar advice. It is live in production.',
    image: '/solar.png',
    tags: ['Next.js', 'Supabase', 'Stripe', 'AI Agent'],
    liveUrl: 'https://bestsolarr.com',
    size: 'medium',
  },
  {
    id: 'apigrid',
    title: 'API Grid',
    description: 'Backend-as-a-service platform with ready-made API endpoints across 15+ categories, including auth, payments, notifications and user management.',
    image: '/apigrid.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'REST API'],
    liveUrl: 'https://useapigrid.com',
    size: 'medium',
  },
];
