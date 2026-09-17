export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Leadership',
    items: [
      'Technology Strategy',
      'Org Design & Operating Models',
      'Engineering Management',
      'Hiring, Coaching & Succession',
      'Stakeholder & Board Communication',
      'Budgeting, FinOps & Cost Optimization',
      'Vendor & Partner Management',
    ],
  },
  {
    title: 'Delivery',
    items: [
      'Product Strategy & Roadmapping',
      'Agile & Lean Delivery',
      'Portfolio Governance',
      'Quality Engineering & Test Automation',
      'Incident Management & Post-Mortems',
    ],
  },
  {
    title: 'Architecture & Platform',
    items: [
      'Microservices & Distributed Systems',
      'APIs & Enterprise Integration',
      'Cloud (GCP, AWS, Azure)',
      'DevOps, SRE & CI/CD',
      'Observability & Performance',
      'Security, Compliance & Risk',
      'Data Engineering & Analytics',
      'AI/ML Strategy & Applied LLM Systems',
    ],
  },
  {
    title: 'Hands-on',
    items: [
      'Go', 'Java / Kotlin', 'TypeScript / Node.js', 'C# / .NET', 'PHP',
      'Swift / Objective-C', 'NestJS', 'Next.js', 'React',
      'PostgreSQL / Supabase', 'BigQuery', 'Playwright',
      'HashiCorp Vault', 'Docker / Kubernetes', 'n8n', 'LLM Orchestration',
    ],
  },
];
