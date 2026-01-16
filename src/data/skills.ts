import {
  Code2,
  Server,
  Database,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'data' | 'mobile';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const categories: SkillCategory[] = [
  { id: 'all', title: 'All Skills', icon: Code2 },
  { id: 'frontend', title: 'Frontend', icon: Code2 },
  { id: 'backend', title: 'Backend', icon: Server },
  { id: 'data', title: 'Data', icon: Database },
  { id: 'mobile', title: 'Mobile & Tools', icon: Smartphone },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'PHP', level: 80, category: 'backend' },
  { name: 'Laravel', level: 78, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'Java', level: 70, category: 'backend' },
  { name: 'Fastify', level: 72, category: 'backend' },

  // Data
  { name: 'PostgreSQL', level: 85, category: 'data' },
  { name: 'MySQL', level: 82, category: 'data' },
  { name: 'MongoDB', level: 80, category: 'data' },

  // Mobile & Tools
  { name: 'React Native', level: 75, category: 'mobile' },
  { name: 'Git', level: 90, category: 'mobile' },
  { name: 'Docker', level: 82, category: 'mobile' },
  { name: 'CI/CD', level: 78, category: 'mobile' },
  { name: 'Prisma', level: 85, category: 'data' },
];

// Legacy export for backward compatibility
export const skillCategories = categories;
