export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'data' | 'evaluation' | 'tools';
}

export interface SkillCategory {
  id: string;
  title: string;
}

export const categories: SkillCategory[] = [
  { id: 'all', title: 'All' },
  { id: 'frontend', title: 'Frontend' },
  { id: 'backend', title: 'Backend' },
  { id: 'data', title: 'Data' },
  { id: 'evaluation', title: 'AI Evaluation' },
  { id: 'tools', title: 'Mobile & Tools' },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'Fastify', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Django REST Framework', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Rust', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Payload CMS', category: 'backend' },

  // Data
  { name: 'PostgreSQL', category: 'data' },
  { name: 'MySQL', category: 'data' },
  { name: 'MongoDB', category: 'data' },
  { name: 'Supabase', category: 'data' },
  { name: 'Prisma', category: 'data' },

  // AI Evaluation
  { name: 'Terminal Bench 2', category: 'evaluation' },
  { name: 'Harbor', category: 'evaluation' },
  { name: 'cargo-fuzz', category: 'evaluation' },
  { name: 'AddressSanitizer', category: 'evaluation' },

  // Mobile & Tools
  { name: 'React Native', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
];
