export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  type: 'work' | 'education' | 'journey';
}

export const experiences: Experience[] = [
  {
    id: 'journey-1',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    duration: '2023 - Present',
    achievements: [
      'Building full-stack web applications for clients',
      'Delivering responsive, modern websites with React & Next.js',
      'Managing projects from concept to deployment',
    ],
    type: 'work',
  },
  {
    id: 'journey-2',
    role: 'Full Stack Developer',
    company: 'Personal Projects & Open Source',
    duration: '2022 - Present',
    achievements: [
      'Built multiple full-stack applications with React, Node.js, and databases',
      'Explored mobile development with React Native',
      'Contributed to open-source projects and developer communities',
    ],
    type: 'journey',
  },
  {
    id: 'journey-3',
    role: 'Started Coding Journey',
    company: 'Self-Taught Developer',
    duration: '2021',
    achievements: [
      'Learned fundamentals of HTML, CSS, and JavaScript',
      'Built first websites and discovered passion for development',
      'Expanded into backend technologies and databases',
    ],
    type: 'journey',
  },
  {
    id: 'edu-1',
    role: 'Secondary Education',
    company: 'Currently Studying',
    duration: '2020 - Present',
    achievements: [
      'Balancing academics with self-taught programming',
      'Applying technical skills to solve real-world problems',
      'Continuously learning and growing as a developer',
    ],
    type: 'education',
  },
];
