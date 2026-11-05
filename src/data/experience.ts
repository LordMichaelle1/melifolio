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
    id: 'zent',
    role: 'Frontend Engineer',
    company: 'Zent Technologies',
    duration: 'Apr 2026 - Nov 2026',
    achievements: [
      'Owned the community marketplace and marketing dashboard that vendors run real stores on',
      'Shipped features from idea to Figma to live in front of vendors within the same week',
      'Caught money-display, crash and payment-redirect bugs before they reached users',
    ],
    type: 'work',
  },
  {
    id: 'bestpotech',
    role: 'Lead Engineer',
    company: 'Best Solution Polytechnic & Best Solar Energy',
    duration: '2024 - Present',
    achievements: [
      'Built one Next.js app serving the public site, student portal, staff admin and API',
      'Shipped live Paystack payments with webhook reconciliation and per-student data isolation',
      'Built bestsolarr.com and a Python/FastAPI LLM customer service bot',
    ],
    type: 'work',
  },
  {
    id: 'fhf',
    role: 'Backend Engineer',
    company: 'FHF (Contract)',
    duration: 'Sep 2025 - Present',
    achievements: [
      'Own the Django REST Framework backend for a student housing and marketplace platform',
      'Closed live production gaps without breaking auth or the live marketplace',
    ],
    type: 'work',
  },
  {
    id: 'ai-eval',
    role: 'AI Code Evaluator & Task Author',
    company: 'Turing, AfterQuery, Snorkel, Mercor, Revelo',
    duration: '2025 - Present',
    achievements: [
      'Authored Terminal Bench 2 tasks in Harbor format with output-checking tests',
      'Reviewed function calling evaluations and built synthetic Python repositories',
      'Built Rust fuzzing tasks with cargo-fuzz and AddressSanitizer',
    ],
    type: 'work',
  },
  {
    id: 'freelance',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    duration: '2023 - Present',
    achievements: [
      'Delivered web apps and REST APIs for clients in Laravel, Node.js, Next.js and PostgreSQL',
      'Handled auth, role-based access, admin workflows and third-party integrations',
      'Built bill payments and a top-up ledger with webhook reconciliation for a fintech',
    ],
    type: 'work',
  },
  {
    id: 'journey-start',
    role: 'Started Coding',
    company: 'Self-Taught Developer',
    duration: '2021',
    achievements: [
      'Learned HTML, CSS and JavaScript and built first websites',
      'Moved into backend development, databases and later Python and Rust',
    ],
    type: 'journey',
  },
];
