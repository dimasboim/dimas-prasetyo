export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Technology',
    items: [
      'Technical Strategy & Architecture',
      'Platform Engineering',
      'Cloud (AWS / GCP / Azure)',
      'DevOps, SRE & CI/CD',
      'Security, Compliance & Risk',
      'Data Engineering & Analytics',
      'AI/ML Strategy',
      'Microservices & Distributed Systems',
      'APIs & Enterprise Integration',
      'Observability & Performance',
      'Quality Engineering & Testing',
    ],
  },
  {
    title: 'Delivery',
    items: [
      'Product Strategy & Roadmaps',
      'Agile / Lean Delivery',
      'Governance & Portfolio Management',
      'Vendor & Partner Management',
      'Budgeting, FinOps & Cost Optimization',
    ],
  },
  {
    title: 'Leadership',
    items: [
      'Org Design & Operating Models',
      'Engineering Management',
      'Hiring, Coaching & Mentoring',
      'Stakeholder Management',
    ],
  },
];
