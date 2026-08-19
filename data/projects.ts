export type Metric = {
  value: string;
  label: string;
};

export interface Project {
  id: string;
  title: string;
  role: string;
  status: 'live' | 'development';
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  description: string;
  features: string[];
  metrics?: Metric[];
  tagline?: string;
  markets?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'marketing-ai',
    title: 'Marketing AI',
    role: 'Full-Stack Developer',
    status: 'live',
    liveUrl: 'https://marketing-ai-crm.vercel.app/',
    githubUrl: 'https://github.com/SonyLucky7/marketing-ai-crm',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Aiven', 'Prisma ORM', 'NextAuth v5', 'Google Gmail API', 'Meta Graph API', 'Google Gemini AI', 'Tailwind CSS'],
    description: 'Multi-Channel Influencer CRM & Automated Outreach SaaS.',
    features: ['Multi-Channel Outreach', 'AI Powered Data Extraction', 'Comprehensive CRM features'],
    metrics: [
      {value: '900+', label: 'Creators'}, 
      {value: '5+', label: 'Platforms'}, 
      {value: 'AI', label: 'Powered Extraction'}, 
      {value: 'Multi-Channel', label: 'Outreach'}
    ]
  },
  {
    id: 'tradeos-ai',
    title: 'TradeOS AI',
    role: 'Founder & Full-Stack Developer',
    status: 'live',
    liveUrl: 'https://trading-os-ai-news-aanalyser.vercel.app/',
    tech: ['Next.js', 'React', 'TypeScript', 'AI APIs', 'Tailwind CSS'],
    description: 'AI-Powered Trading Intelligence Platform.',
    features: ['Real-Time Analysis', 'Multi-Market Support', 'AI Intelligence'],
    tagline: 'KNOW THE MARKET BEFORE THE MARKET MOVES.',
    markets: 'CRYPTO • FOREX • INDIAN STOCK MARKETS',
    metrics: [
      {value: 'Multi-Model', label: 'AI Support'}, 
      {value: 'Real-Time', label: 'Analysis'}, 
      {value: '3+', label: 'Markets'}, 
      {value: 'AI', label: 'Intelligence'}
    ]
  },
  {
    id: 'digital-bros',
    title: "Digital Bro's",
    role: 'Full-Stack Developer',
    status: 'live',
    liveUrl: 'https://digitalbros.qzz.io/',
    githubUrl: 'https://github.com/SonyLucky7/digital-bros',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Razorpay', 'JWT', 'TOTP 2FA'],
    description: 'Premium Digital Products Marketplace.',
    features: ['Multi-Tier Affiliate System', 'Advanced Security', 'Premium Product Marketplace'],
    metrics: [
      {value: '48', label: 'API Routes'}, 
      {value: '2FA', label: 'Authentication'}, 
      {value: 'Multi-Tier', label: 'Affiliate System'}, 
      {value: 'Security', label: 'Conscious Architecture'}
    ]
  },
  {
    id: 'licensehub',
    title: 'LicenseHub',
    role: 'Full-Stack & Desktop Developer',
    status: 'live',
    tech: ['Electron.js', 'Node.js', 'Next.js', 'Prisma ORM', 'PostgreSQL', 'Aiven', 'Tailwind CSS', 'Vercel'],
    description: 'Multi-Tenant Software Licensing & DRM Platform.',
    features: ['Hardware ID Binding', 'Real-Time Verification', 'Multi-Tenant Architecture'],
    metrics: [
      {value: 'Multi-Tenant', label: 'Architecture'}, 
      {value: 'Desktop', label: 'Application'}, 
      {value: 'Real-Time', label: 'Verification'}, 
      {value: 'Hardware ID', label: 'Device Binding'}
    ]
  }
];

export const experimentalProjects: Project[] = [
  {
    id: 'lucy-ai',
    title: 'Lucy AI',
    role: 'Founder & Developer',
    status: 'development',
    tech: ['Next.js', 'AI APIs'],
    description: 'AI-Powered Creative Assistant. Capabilities planned for advanced creative augmentation.',
    features: ['Generative AI', 'Creative Assistant Workflow']
  },
  {
    id: 'personal-business-crm',
    title: 'Personal Business CRM',
    role: 'Developer',
    status: 'development',
    tech: ['Next.js', 'PostgreSQL'],
    description: 'Business & Workflow Management System.',
    features: ['Workflow Management', 'Business Insights']
  }
];

export interface SelectedWork {
  title: string;
  url: string;
}

export const selectedWork: SelectedWork[] = [
  { title: 'Digital Bros Studio', url: 'https://digitalbrosstudio.vercel.app/' },
  { title: 'Hillside Taxi Tours', url: 'https://hillsidetaxitours.com/' },
  { title: 'Shiva Kallapelli Portfolio', url: 'https://shivakallapelli.vercel.app/' },
  { title: 'Sai Chaitanya Portfolio', url: 'https://sai-chaitanya-kokku.vercel.app/' },
  { title: 'Pippari Manideep Portfolio', url: 'https://pippari-manideep-portfolio.vercel.app/' },
  { title: 'Premium Wedding Website', url: 'https://premium-wedding.vercel.app/' },
  { title: 'Standard Wedding Website', url: 'https://standard-wedding-preview.vercel.app/' }
];
