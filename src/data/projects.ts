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
    id: 'nexipaas',
    title: 'NexiPaaS',
    description: 'Enterprise integration platform competing with Celigo. Connect apps, automate workflows, and transform data in real-time with AI-powered tools. Built for scale.',
    image: '/nexipaas.png',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    liveUrl: 'https://nexipaas.com/landing-v2',
    size: 'large',
  },
  {
    id: 'bestsolar',
    title: 'BestSolar Energy',
    description:
      'E-commerce platform for a Nigerian solar company. Multi-location business with auth, cart, package configurator, customer portal, and a custom AI assistant for solar advice. Live in production.',
    image: '/solar.png',
    tags: ['Next.js', 'Supabase', 'Stripe', 'AI Agent'],
    liveUrl: 'https://bestsolarr.com',
    size: 'medium',
  },
  {
    id: 'apigrid',
    title: 'API Grid',
    description: 'Backend-as-a-Service platform. Production-ready API endpoints for auth, payments, notifications, user management, and 15+ categories. Ship backends in minutes, not months.',
    image: '/apigrid.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'REST API'],
    liveUrl: 'https://useapigrid.com',
    size: 'medium',
  },
];
