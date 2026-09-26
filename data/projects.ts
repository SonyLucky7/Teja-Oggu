export interface ProjectItem {
  id: string;
  title: string;
  category: 'SaaS & AI' | 'Client & Business' | 'Portfolios' | 'Web Experiences';
  type: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: 'live' | 'development';
  tags?: string[];
}

export const allProjects: ProjectItem[] = [
  {
    id: "teja-oggu",
    title: "Teja Oggu",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Personal portfolio showcasing AI full-stack development, SaaS applications, AI projects, web development, digital marketing, graphic design, and selected client projects.",
    liveUrl: "https://tejaoggu.vercel.app/",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    id: "digital-bros-studio",
    title: "Digital Bros Studio",
    category: "Client & Business",
    type: "Digital Marketing & Technology Agency",
    description: "Professional digital agency website showcasing digital marketing, graphic design, video editing, social media marketing, paid advertising, automation, web development, and AI-powered solutions.",
    liveUrl: "https://digital-bros-studio.vercel.app/",
    tags: ["Agency", "Marketing", "Web Development", "AI Solutions"]
  },
  {
    id: "marketing-ai",
    title: "Marketing AI",
    category: "SaaS & AI",
    type: "Influencer CRM & Automated Outreach SaaS",
    description: "AI-powered multi-channel influencer discovery and CRM platform for creator discovery, profile analysis, contact management, and personalized outreach.",
    liveUrl: "https://marketing-ai-crm.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/marketing-ai-crm",
    tags: ["SaaS", "Next.js", "Gemini AI", "PostgreSQL", "Prisma"]
  },
  {
    id: "digital-bros",
    title: "Digital Bro'S",
    category: "SaaS & AI",
    type: "Digital Products Marketplace",
    description: "Full-stack digital marketplace for digital products, subscriptions, AI tools, portfolio services, and digital offerings.",
    liveUrl: "https://digitalbros.qzz.io/",
    githubUrl: "https://github.com/SonyLucky7/digital-bros",
    tags: ["E-Commerce", "Razorpay", "Next.js", "Auth 2FA"]
  },
  {
    id: "tradeos-ai",
    title: "TradeOS AI",
    category: "SaaS & AI",
    type: "Trading Intelligence Platform",
    description: "AI-powered trading intelligence platform for market-moving news, event analysis, alerts, and AI-assisted market research across Crypto, Forex, and Indian Stock Markets.",
    liveUrl: "https://trading-os-ai-news-aanalyser.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/tradingOS-AI-News-Aanalyser-",
    tags: ["AI Intelligence", "Market Analysis", "Real-Time"]
  },
  {
    id: "licensehub",
    title: "LicenseHub",
    category: "SaaS & AI",
    type: "Software Licensing Platform",
    description: "Multi-tenant software licensing platform for license creation, validation, subscription management, hardware-bound licensing, APIs, sandbox tools, and documentation.",
    status: "development",
    tags: ["DRM", "Hardware ID Binding", "Multi-Tenant", "APIs"]
  },
  {
    id: "hillside-taxi-tours",
    title: "Hillside Taxi Tours",
    category: "Client & Business",
    type: "Taxi & Tour Booking Platform",
    description: "Modern responsive booking website for intercity taxi and hill-tour services across Guwahati, Shillong, and Meghalaya, with fleet presentation, tour packages, pricing, and WhatsApp booking.",
    liveUrl: "https://www.hillsidetaxitours.com/",
    githubUrl: "https://github.com/SonyLucky7/hillside-taxi-tours",
    tags: ["Booking System", "WhatsApp API", "Responsive"]
  },
  {
    id: "wadi-al-raha",
    title: "Wadi Al Raha",
    category: "Client & Business",
    type: "Business Website",
    description: "Modern responsive business website with premium visual design, structured service presentation, and polished UI interactions.",
    liveUrl: "https://wadialraha-com-opal.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/wadialraha.com",
    tags: ["Business", "UI/UX", "Responsive"]
  },
  {
    id: "rise-up-plumbing",
    title: "Rise Up Plumbing",
    category: "Client & Business",
    type: "Plumbing Business Website",
    description: "Professional responsive website for a plumbing business showcasing services, business information, calls to action, and customer contact options.",
    liveUrl: "https://riseup-plumbing.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Riseup-Plumbing",
    tags: ["Local Business", "Lead Gen", "Call To Action"]
  },
  {
    id: "havener-real-estate",
    title: "Havener Real Estate",
    category: "Client & Business",
    type: "Real Estate Website",
    description: "Modern real estate website focused on property presentation, company information, property discovery, and lead-generation oriented experience.",
    liveUrl: "https://havener-real-estate.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Havener-Real-Estate",
    tags: ["Real Estate", "Property Showcase", "Lead Gen"]
  },
  {
    id: "alkanz-tours",
    title: "Alkanz Tours",
    category: "Client & Business",
    type: "Travel & Tours Website",
    description: "Travel and tourism website showcasing tour offerings, destinations, travel services, and booking-oriented content.",
    liveUrl: "https://alkanztourscom.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/alkanztours.com",
    tags: ["Tourism", "Destinations", "Travel Services"]
  },
  {
    id: "eppies-restaurant",
    title: "Eppie's Restaurant",
    category: "Client & Business",
    type: "Restaurant Website",
    description: "Modern restaurant website designed to showcase the restaurant, menu/content, brand identity, dining experience, and customer-facing information.",
    liveUrl: "https://eppies-restaurant-rosy.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Eppies-Restaurant",
    tags: ["Dining", "Brand Identity", "Interactive Menu"]
  },
  {
    id: "silverpoint-estate",
    title: "Silverpoint Estate",
    category: "Client & Business",
    type: "Luxury Estate Website",
    description: "Premium accommodation and estate website focused on luxury presentation, property information, gallery, booking information, and responsive customer experience.",
    liveUrl: "https://silverpoint-estate-hotel.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Silverpoint-Estate-Hotel",
    tags: ["Luxury Hospitality", "Gallery", "Booking"]
  },
  {
    id: "one-india",
    title: "One India",
    category: "Web Experiences",
    type: "Web Platform",
    description: "Modern web platform concept delivering an Indian-themed digital experience with structured content, responsive layouts, and interactive UI elements.",
    liveUrl: "https://one-india.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/one-india",
    tags: ["Culture", "Interactive UI", "Digital Platform"]
  },
  {
    id: "yash-soni",
    title: "Yash Soni",
    category: "Portfolios",
    type: "3D Interactive Portfolio",
    description: "Interactive 3D portfolio featuring immersive visuals, modern creative direction, motion, interactive sections, and 3D-oriented web presentation.",
    liveUrl: "https://yashsoni-six.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/yashsoni",
    tags: ["Three.js", "3D Web", "Creative Direction", "Motion"]
  },
  {
    id: "sai-chaitanya-kokku",
    title: "Sai Chaitanya Kokku",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Professional personal portfolio showcasing profile, experience, skills, projects, and professional work.",
    liveUrl: "https://sai-chaitanya-kokku-rust.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Sai-Chaitanya-Kokku",
    tags: ["Personal Portfolio", "Profile", "Responsive"]
  },
  {
    id: "pippari-manideep",
    title: "Pippari Manideep",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Modern personal portfolio presenting professional information, projects, skills, and work through a clean responsive design.",
    liveUrl: "https://pippari-manideep-portfolio.vercel.app/",
    tags: ["Clean Design", "Profile Showcase", "Responsive"]
  },
  {
    id: "shiva-kallapelli",
    title: "Shiva Kallapelli",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Personal portfolio website presenting professional profile information, projects, skills, and selected work.",
    liveUrl: "https://shivakallapelli.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/shivakallapelli",
    tags: ["Developer Portfolio", "Selected Work", "Modern UI"]
  },
  {
    id: "premium-wedding",
    title: "Premium Wedding",
    category: "Web Experiences",
    type: "Wedding Website",
    description: "Premium wedding website concept focused on elegant visual presentation, wedding information, storytelling, responsive design, and guest experience.",
    liveUrl: "https://premium-wedding.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/premium-wedding",
    tags: ["Event Experience", "Storytelling", "Luxury Design"]
  },
  {
    id: "standard-wedding-preview",
    title: "Standard Wedding Preview",
    category: "Web Experiences",
    type: "Wedding Website",
    description: "Responsive wedding website template for wedding details, event information, visual content, and guest-facing sections.",
    liveUrl: "https://standard-wedding-preview.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/standard-wedding-preview",
    tags: ["Event Template", "Guest Experience", "Responsive"]
  },
  {
    id: "premium-wedding-preview",
    title: "Premium Wedding Preview",
    category: "Web Experiences",
    type: "Wedding Website Demo",
    description: "Preview and demo version of the premium wedding website concept with storytelling and interactive event schedules.",
    githubUrl: "https://github.com/SonyLucky7/premium-wedding-preview",
    status: "development",
    tags: ["Demo", "Event Concept", "Interactive"]
  },
  {
    id: "farm-bandi",
    title: "Farm Bandi",
    category: "Web Experiences",
    type: "Agriculture Web Project",
    description: "Agriculture and farming-related web project delivering digital solutions, product discovery, and modern workflows for agricultural services.",
    liveUrl: "https://farm-bandi.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Farm-Bandi",
    tags: ["Agriculture", "Digital Solutions", "Web Platform"]
  }
];

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
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Google Gemini AI', 'Tailwind CSS'],
    description: 'Multi-Channel Influencer CRM & Automated Outreach SaaS.',
    features: ['Multi-Channel Outreach', 'AI Powered Data Extraction', 'Comprehensive CRM features'],
    metrics: [
      { value: '900+', label: 'Creators' },
      { value: '5+', label: 'Platforms' },
      { value: 'AI', label: 'Powered Extraction' },
      { value: 'Multi-Channel', label: 'Outreach' }
    ]
  },
  {
    id: 'tradeos-ai',
    title: 'TradeOS AI',
    role: 'Founder & Full-Stack Developer',
    status: 'live',
    liveUrl: 'https://trading-os-ai-news-aanalyser.vercel.app/',
    githubUrl: 'https://github.com/SonyLucky7/tradingOS-AI-News-Aanalyser-',
    tech: ['Next.js', 'React', 'TypeScript', 'AI APIs', 'Tailwind CSS'],
    description: 'AI-Powered Trading Intelligence Platform.',
    features: ['Real-Time Analysis', 'Multi-Market Support', 'AI Intelligence'],
    tagline: 'KNOW THE MARKET BEFORE THE MARKET MOVES.',
    markets: 'CRYPTO • FOREX • INDIAN STOCK MARKETS',
    metrics: [
      { value: 'Multi-Model', label: 'AI Support' },
      { value: 'Real-Time', label: 'Analysis' },
      { value: '3+', label: 'Markets' },
      { value: 'AI', label: 'Intelligence' }
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
      { value: '48', label: 'API Routes' },
      { value: '2FA', label: 'Authentication' },
      { value: 'Multi-Tier', label: 'Affiliate System' },
      { value: 'Security', label: 'Conscious Architecture' }
    ]
  },
  {
    id: 'licensehub',
    title: 'LicenseHub',
    role: 'Full-Stack & Desktop Developer',
    status: 'live',
    tech: ['Electron.js', 'Node.js', 'Next.js', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    description: 'Multi-Tenant Software Licensing & DRM Platform.',
    features: ['Hardware ID Binding', 'Real-Time Verification', 'Multi-Tenant Architecture'],
    metrics: [
      { value: 'Multi-Tenant', label: 'Architecture' },
      { value: 'Desktop', label: 'Application' },
      { value: 'Real-Time', label: 'Verification' },
      { value: 'Hardware ID', label: 'Device Binding' }
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
  { title: 'Digital Bros Studio', url: 'https://digital-bros-studio.vercel.app/' },
  { title: 'Hillside Taxi Tours', url: 'https://hillsidetaxitours.com/' },
  { title: 'Shiva Kallapelli Portfolio', url: 'https://shivakallapelli.vercel.app/' },
  { title: 'Sai Chaitanya Portfolio', url: 'https://sai-chaitanya-kokku-rust.vercel.app/' },
  { title: 'Pippari Manideep Portfolio', url: 'https://pippari-manideep-portfolio.vercel.app/' },
  { title: 'Premium Wedding Website', url: 'https://premium-wedding.vercel.app/' },
  { title: 'Standard Wedding Website', url: 'https://standard-wedding-preview.vercel.app/' }
];

