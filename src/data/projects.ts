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
    id: 'nexipaas',
    title: 'NexiPaaS',
    description: 'Enterprise integration platform competing with Celigo. Connect apps, automate workflows, and transform data in real-time with AI-powered tools. Built for scale.',
    image: '/nexipaas.png',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    liveUrl: 'https://nexipaas.com/landing-v2',
    size: 'large',
  },
  {
    id: 'apigrid',
    title: 'API Grid',
    description: 'Backend-as-a-Service platform. Production-ready API endpoints for auth, payments, notifications, user management, and 15+ categories. Ship backends in minutes, not months.',
    image: '/apigrid.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'REST API'],
    liveUrl: 'https://api-grid.vercel.app',
    size: 'medium',
  },
  {
    id: 'visiondev',
    title: 'Vision Dashboard (Demo)',
    description: 'AI-powered crypto intelligence platform. Real-time whale tracking, trending narrative analysis, and market predictions. Monitor smart money movements and get high-risk alerts.',
    image: '/visiondev.png',
    tags: ['React', 'Web3', 'AI', 'Crypto', 'Real-time'],
    liveUrl: 'https://visiondev-frontend.vercel.app',
    size: 'medium',
  },
];
