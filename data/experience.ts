export interface JourneyStage {
  id: string;
  title: string;
  duration?: string;
  description?: string;
  skills?: string[];
  links?: { label: string; url: string }[];
  details?: Record<string, string>;
}

export const journeyStages: JourneyStage[] = [
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    duration: '3 years',
    skills: ['Patient Care', 'Medication Management', 'Inventory Management', 'Customer Service']
  },
  {
    id: 'trading',
    title: 'Trading',
    duration: '5+ years',
    skills: ['Technical Analysis', 'Risk Management', 'Market Research', 'Forex', 'Crypto', 'Indian Stock Markets']
  },
  {
    id: 'gaming-esports',
    title: 'Gaming & Esports',
    duration: '6+ years gaming, 3+ esports',
    details: {
      Player: 'HAC',
      UID: '55604445176',
      Setup: '5-Finger Claw, Full Gyroscope',
      Role: 'All-Rounder'
    },
    links: [
      { label: 'YouTube', url: '#' },
      { label: 'Instagram', url: '#' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing (Digital Bros Studio)',
    skills: ['SEO', 'Content Marketing', 'Social Media Management', 'Campaign Strategy', 'Analytics'],
    links: [
      { label: 'Website', url: 'https://digitalbrosstudio.vercel.app/' }
    ]
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    duration: 'Current Focus',
    skills: ['Frontend Development', 'Backend Development', 'API Integration', 'Database Management', 'SaaS Architecture']
  },
  {
    id: 'ai-products',
    title: 'AI Products',
    duration: 'Current & Future Focus',
    skills: ['AI Integration', 'LLM Prompting', 'AI Workflows', 'Agentic Systems', 'Automation']
  }
];

export const digitalMarketingSkills: string[] = [
  'SEO', 'Content Marketing', 'Social Media Management', 'Campaign Strategy', 'Analytics'
];
