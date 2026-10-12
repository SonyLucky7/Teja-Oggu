export interface ProjectItem {
  id: string;
  title: string;
  category: 'SaaS & AI' | 'Client & Business' | 'Portfolios' | 'Web Experiences' | 'Video Editing' | 'Graphic Design';
  type: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: 'live' | 'development';
  tags?: string[];
  mediaType?: 'image' | 'video' | 'web';
  mediaUrl?: string;
}

export const allProjects: ProjectItem[] = [
  // ── 21 Flagship Websites ───────────────────────────────────────────────────
  {
    id: "teja-oggu",
    title: "Teja Oggu",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Personal portfolio showcasing AI full-stack development, SaaS applications, AI projects, web development, digital marketing, graphic design, and selected client projects.",
    liveUrl: "https://tejaoggu.vercel.app/",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
    mediaType: "web"
  },
  {
    id: "digital-bros-studio",
    title: "Digital Bros Studio",
    category: "Client & Business",
    type: "Digital Marketing & Technology Agency",
    description: "Professional digital agency website showcasing digital marketing, graphic design, video editing, social media marketing, paid advertising, automation, web development, and AI-powered solutions.",
    liveUrl: "https://digital-bros-studio.vercel.app/",
    tags: ["Agency", "Marketing", "Web Development", "AI Solutions"],
    mediaType: "web"
  },
  {
    id: "marketing-ai",
    title: "Marketing AI",
    category: "SaaS & AI",
    type: "Influencer CRM & Automated Outreach SaaS",
    description: "AI-powered multi-channel influencer discovery and CRM platform for creator discovery, profile analysis, contact management, and personalized outreach.",
    liveUrl: "https://marketing-ai-crm.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/marketing-ai-crm",
    tags: ["SaaS", "Next.js", "Gemini AI", "PostgreSQL", "Prisma"],
    mediaType: "web"
  },
  {
    id: "digital-bros",
    title: "Digital Bro'S",
    category: "SaaS & AI",
    type: "Digital Products Marketplace",
    description: "Full-stack digital marketplace for digital products, subscriptions, AI tools, portfolio services, and digital offerings.",
    liveUrl: "https://digitalbros.qzz.io/",
    githubUrl: "https://github.com/SonyLucky7/digital-bros",
    tags: ["E-Commerce", "Razorpay", "Next.js", "Auth 2FA"],
    mediaType: "web"
  },
  {
    id: "tradeos-ai",
    title: "TradeOS AI",
    category: "SaaS & AI",
    type: "Trading Intelligence Platform",
    description: "AI-powered trading intelligence platform for market-moving news, event analysis, alerts, and AI-assisted market research across Crypto, Forex, and Indian Stock Markets.",
    liveUrl: "https://trading-os-ai-news-aanalyser.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/tradingOS-AI-News-Aanalyser-",
    tags: ["AI Intelligence", "Market Analysis", "Real-Time"],
    mediaType: "web"
  },
  {
    id: "licensehub",
    title: "LicenseHub",
    category: "SaaS & AI",
    type: "Software Licensing Platform",
    description: "Multi-tenant software licensing platform for license creation, validation, subscription management, hardware-bound licensing, APIs, sandbox tools, and documentation.",
    status: "development",
    tags: ["DRM", "Hardware ID Binding", "Multi-Tenant", "APIs"],
    mediaType: "web"
  },
  {
    id: "hillside-taxi-tours",
    title: "Hillside Taxi Tours",
    category: "Client & Business",
    type: "Taxi & Tour Booking Platform",
    description: "Modern responsive booking website for intercity taxi and hill-tour services across Guwahati, Shillong, and Meghalaya, with fleet presentation, tour packages, pricing, and WhatsApp booking.",
    liveUrl: "https://www.hillsidetaxitours.com/",
    githubUrl: "https://github.com/SonyLucky7/hillside-taxi-tours",
    tags: ["Booking System", "WhatsApp API", "Responsive"],
    mediaType: "web"
  },
  {
    id: "wadi-al-raha",
    title: "Wadi Al Raha",
    category: "Client & Business",
    type: "Premium Business Website",
    description: "Modern responsive business website with premium visual design, structured service presentation, and polished UI interactions.",
    liveUrl: "https://wadialraha-com-opal.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/wadialraha.com",
    tags: ["Business", "UI/UX", "Responsive"],
    mediaType: "web"
  },
  {
    id: "rise-up-plumbing",
    title: "Rise Up Plumbing",
    category: "Client & Business",
    type: "Plumbing Business Website",
    description: "Professional responsive website for a plumbing business showcasing services, business information, calls to action, and customer contact options.",
    liveUrl: "https://riseup-plumbing.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Riseup-Plumbing",
    tags: ["Local Business", "Lead Gen", "Call To Action"],
    mediaType: "web"
  },
  {
    id: "havener-real-estate",
    title: "Havener Real Estate",
    category: "Client & Business",
    type: "Real Estate Website",
    description: "Modern real estate website focused on property presentation, company information, property discovery, and lead-generation oriented experience.",
    liveUrl: "https://havener-real-estate.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Havener-Real-Estate",
    tags: ["Real Estate", "Property Showcase", "Lead Gen"],
    mediaType: "web"
  },
  {
    id: "alkanz-tours",
    title: "Alkanz Tours",
    category: "Client & Business",
    type: "Travel Website",
    description: "Travel and tourism website showcasing tour offerings, destinations, travel services, and booking-oriented content.",
    liveUrl: "https://alkanztourscom.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/alkanztours.com",
    tags: ["Tourism", "Destinations", "Travel Services"],
    mediaType: "web"
  },
  {
    id: "eppies-restaurant",
    title: "Eppie's Restaurant",
    category: "Client & Business",
    type: "Restaurant Website",
    description: "Modern restaurant website designed to showcase the restaurant, menu/content, brand identity, dining experience, and customer-facing information.",
    liveUrl: "https://eppies-restaurant-rosy.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Eppies-Restaurant",
    tags: ["Dining", "Brand Identity", "Interactive Menu"],
    mediaType: "web"
  },
  {
    id: "silverpoint-estate",
    title: "Silverpoint Estate",
    category: "Client & Business",
    type: "Luxury Estate Website",
    description: "Premium accommodation and estate website focused on luxury presentation, property information, gallery, booking information, and responsive customer experience.",
    liveUrl: "https://silverpoint-estate-hotel.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Silverpoint-Estate-Hotel",
    tags: ["Luxury Hospitality", "Gallery", "Booking"],
    mediaType: "web"
  },
  {
    id: "one-india",
    title: "One India",
    category: "Web Experiences",
    type: "Interactive Web Platform",
    description: "Modern web platform concept delivering an Indian-themed digital experience with structured content, responsive layouts, and interactive UI elements.",
    liveUrl: "https://one-india.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/one-india",
    tags: ["Culture", "Interactive UI", "Digital Platform"],
    mediaType: "web"
  },
  {
    id: "yash-soni",
    title: "Yash Soni",
    category: "Portfolios",
    type: "3D Interactive Portfolio",
    description: "Interactive 3D portfolio featuring immersive visuals, modern creative direction, motion, interactive sections, and 3D-oriented web presentation.",
    liveUrl: "https://yashsoni-six.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/yashsoni",
    tags: ["Three.js", "3D Web", "Creative Direction", "Motion"],
    mediaType: "web"
  },
  {
    id: "sai-chaitanya-kokku",
    title: "Sai Chaitanya Kokku",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Professional personal portfolio showcasing profile, experience, skills, projects, and professional work.",
    liveUrl: "https://sai-chaitanya-kokku-rust.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Sai-Chaitanya-Kokku",
    tags: ["Personal Portfolio", "Profile", "Responsive"],
    mediaType: "web"
  },
  {
    id: "pippari-manideep",
    title: "Pippari Manideep",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Modern personal portfolio presenting professional information, projects, skills, and work through a clean responsive design.",
    liveUrl: "https://pippari-manideep-portfolio.vercel.app/",
    tags: ["Clean Design", "Profile Showcase", "Responsive"],
    mediaType: "web"
  },
  {
    id: "shiva-kallapelli",
    title: "Shiva Kallapelli",
    category: "Portfolios",
    type: "Personal Portfolio",
    description: "Personal portfolio website presenting professional profile information, projects, skills, and selected work.",
    liveUrl: "https://shivakallapelli.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/shivakallapelli",
    tags: ["Developer Portfolio", "Selected Work", "Modern UI"],
    mediaType: "web"
  },
  {
    id: "premium-wedding",
    title: "Premium Wedding",
    category: "Web Experiences",
    type: "Wedding Website",
    description: "Premium wedding website concept focused on elegant visual presentation, wedding information, storytelling, responsive design, and guest experience.",
    status: "development",
    tags: ["Event Experience", "Storytelling", "Luxury Design"],
    mediaType: "web"
  },
  {
    id: "standard-wedding-preview",
    title: "Standard Wedding Preview",
    category: "Web Experiences",
    type: "Wedding Template",
    description: "Responsive wedding website template for wedding details, event information, visual content, and guest-facing sections.",
    status: "development",
    tags: ["Event Template", "Guest Experience", "Responsive"],
    mediaType: "web"
  },
  {
    id: "farm-bandi",
    title: "Farm Bandi",
    category: "Web Experiences",
    type: "Agriculture Web Project",
    description: "Agriculture and farming-related web project delivering digital solutions, product discovery, and modern workflows for agricultural services.",
    liveUrl: "https://farm-bandi.vercel.app/",
    githubUrl: "https://github.com/SonyLucky7/Farm-Bandi",
    tags: ["Agriculture", "Digital Solutions", "Web Platform"],
    mediaType: "web"
  },

  // ── Video Editing Works ───────────────────────────────────────────────────
  {
    id: "subscription-promo-video",
    title: "Digital Bros Subscription Promo",
    category: "Video Editing",
    type: "Commercial Ad & Promo Film",
    description: "High-energy commercial promo edit featuring sleek kinetic typography, sync cuts, motion graphics, and punchy promotional hooks.",
    mediaType: "video",
    mediaUrl: "/works/videos/subscription-promo.mp4",
    tags: ["Commercial Ad", "Motion Graphics", "Premiere Pro", "After Effects"]
  },
  {
    id: "career-clarity-reel",
    title: "Career Clarity & Mindset Reel",
    category: "Video Editing",
    type: "Short-Form Reel Edit",
    description: "Retention-optimized vertical video edit featuring animated dynamic captions, B-roll overlays, and pacing on finding career clarity.",
    mediaType: "video",
    mediaUrl: "/works/videos/career-clarity-reel.mp4",
    tags: ["Reels", "Subtitles & Hooks", "Color Grading", "Short-Form"]
  },
  {
    id: "commercial-retention-reel",
    title: "High-Retention Commercial Reel",
    category: "Video Editing",
    type: "Viral Ad & Reel Edit",
    description: "Fast-paced commercial short-form edit built with sound effects, dynamic punch-ins, and audience engagement pacing.",
    mediaType: "video",
    mediaUrl: "/works/videos/commercial-retention-reel.mp4",
    tags: ["Commercial", "Sound Design", "Viral Hooks", "CapCut / Premiere"]
  },
  {
    id: "ai-creation-visual",
    title: "AI Visual Creation & CGI Motion",
    category: "Video Editing",
    type: "AI-Generated & Visual Reel",
    description: "Cutting-edge AI-augmented video editing combining generative visuals, cinematic transitions, and futuristic audio design.",
    mediaType: "video",
    mediaUrl: "/works/videos/ai-creation-visual.mp4",
    tags: ["AI Video", "Visual Effects", "Cinematic", "Generative AI"]
  },
  {
    id: "book-series-ep1",
    title: "Book Breakdown Series — Episode 1",
    category: "Video Editing",
    type: "Episodic Storytelling Video",
    description: "Part 1 of episodic storytelling video series featuring narrative pacing, thematic visual cutaways, and structured insights.",
    mediaType: "video",
    mediaUrl: "/works/videos/book-series-ep1.mp4",
    tags: ["Episode 1", "Storytelling", "Series Content", "Audio Mastering"]
  },
  {
    id: "book-series-ep2",
    title: "Book Breakdown Series — Episode 2",
    category: "Video Editing",
    type: "Episodic Storytelling Video",
    description: "Part 2 of the episodic series with continuous narrative arc, audio synchronization, and visual callouts.",
    mediaType: "video",
    mediaUrl: "/works/videos/book-series-ep2.mp4",
    tags: ["Episode 2", "Series Content", "Storytelling", "Visual Cuts"]
  },
  {
    id: "book-series-ep3",
    title: "Book Breakdown Series — Episode 3",
    category: "Video Editing",
    type: "Episodic Storytelling Video",
    description: "Part 3 conclusion of the series with powerful closing hooks, sound staging, and dynamic transitions.",
    mediaType: "video",
    mediaUrl: "/works/videos/book-series-ep3.mp4",
    tags: ["Episode 3", "Series Finale", "Pacing", "Sound Design"]
  },
  {
    id: "premium-motion-edit",
    title: "Premium Motion & Animation Edit",
    category: "Video Editing",
    type: "Kinetic Motion Showcase",
    description: "Polished motion graphic editing with smooth curve transitions, typography reveals, and multi-track audio design.",
    mediaType: "video",
    mediaUrl: "/works/videos/premium-motion-edit.mp4",
    tags: ["Motion Graphics", "Smooth Transitions", "After Effects"]
  },
  {
    id: "premium-client-reel",
    title: "Client Brand Showcase Reel",
    category: "Video Editing",
    type: "Brand Promo Reel",
    description: "Polished brand presentation reel crafted for maximum social proof, conversion, and visual appeal.",
    mediaType: "video",
    mediaUrl: "/works/videos/premium-client-reel.mp4",
    tags: ["Client Reel", "Brand Video", "Social Marketing"]
  },
  {
    id: "dynamic-reels-collection",
    title: "Dynamic Social Reels (Vol. 1-9)",
    category: "Video Editing",
    type: "Social Media Reel Series",
    description: "Curated collection of 9 high-impact short-form edits showcasing diverse editing styles: podcast cutdowns, kinetic typography, cinematic B-roll, and meme hooks.",
    mediaType: "video",
    mediaUrl: "/works/videos/dynamic-reel-1.mp4",
    tags: ["Reels Series", "Dynamic Cuts", "Sound FX", "Short-Form"]
  },

  // ── Graphic Design Works ──────────────────────────────────────────────────
  {
    id: "ak-banner",
    title: "AK YouTube & Channel Banner",
    category: "Graphic Design",
    type: "YouTube & Brand Banner",
    description: "Custom digital banner design featuring modern visual styling, typography, and personal brand identity.",
    mediaType: "image",
    mediaUrl: "/works/graphics/ak-banner.jpg",
    tags: ["Banner", "YouTube", "Photoshop", "Branding"]
  },
  {
    id: "banner-yt",
    title: "YouTube Creator Art Banner",
    category: "Graphic Design",
    type: "Channel Art Banner",
    description: "High-resolution custom YouTube channel header with bold typography and digital brand presence.",
    mediaType: "image",
    mediaUrl: "/works/graphics/banner-yt.jpg",
    tags: ["Channel Art", "Photoshop", "Creative Direction"]
  },
  {
    id: "digital-bros-banner",
    title: "Digital Bros Studio Brand Banner",
    category: "Graphic Design",
    type: "Agency Banner",
    description: "Brand identity banner for Digital Bros Studio highlighting agency digital marketing and creative services.",
    mediaType: "image",
    mediaUrl: "/works/graphics/digital-bros-banner.jpg",
    tags: ["Branding", "Agency", "Identity Design"]
  },
  {
    id: "farm-bandi-brochure",
    title: "Farm Bandi Corporate Brochure",
    category: "Graphic Design",
    type: "Print & Digital Brochure",
    description: "Comprehensive product brochure design for Farm Bandi featuring clean layout, service highlights, and modern corporate typography.",
    mediaType: "image",
    mediaUrl: "/works/graphics/farm-bandi-brochure.jpg",
    tags: ["Brochure", "Print Design", "Corporate Layout"]
  },
  {
    id: "apiculture-workshop-poster",
    title: "Apiculture Workshop 2025 Poster",
    category: "Graphic Design",
    type: "Event Promotional Poster",
    description: "Event campaign poster for Apiculture Workshop 2025 turning passion for nature into a sustainable profitable business.",
    mediaType: "image",
    mediaUrl: "/works/graphics/apiculture-workshop-2025.jpg",
    tags: ["Poster Design", "Event Promotion", "Typography"]
  },
  {
    id: "mushroom-cultivation-poster",
    title: "Online Mushroom Cultivation Workshop",
    category: "Graphic Design",
    type: "Workshop Campaign Poster",
    description: "Promotional marketing poster for Organic Mushroom Cultivation Workshop designed for high social media engagement.",
    mediaType: "image",
    mediaUrl: "/works/graphics/mushroom-cultivation-workshop.jpg",
    tags: ["Social Poster", "Agriculture", "Ad Creative"]
  },
  {
    id: "pmegp-loan-workshop-poster",
    title: "PMEGP Loan Process & Approval Workshop",
    category: "Graphic Design",
    type: "Financial Workshop Poster",
    description: "Informative promotional poster detailing PMEGP government loan procedures, subsidies, and approval guidance.",
    mediaType: "image",
    mediaUrl: "/works/graphics/pmegp-loan-workshop.jpg",
    tags: ["Poster Design", "Government Scheme", "Event"]
  },
  {
    id: "sitara-naturals-catalogue",
    title: "Sitara Naturals Product Catalogue",
    category: "Graphic Design",
    type: "Product Catalogue & Poster",
    description: "Commercial product catalogue presentation showcasing organic items, natural wellness goods, and pricing.",
    mediaType: "image",
    mediaUrl: "/works/graphics/sitara-naturals-catalogue.jpg",
    tags: ["Product Catalogue", "Branding", "E-Commerce"]
  },
  {
    id: "sitara-naturals-cover",
    title: "Sitara Naturals Brand Cover",
    category: "Graphic Design",
    type: "Reel Cover & Branding",
    description: "Instagram reel cover and social thumbnail designed for Sitara Naturals brand storytelling.",
    mediaType: "image",
    mediaUrl: "/works/graphics/sitara-naturals-cover.jpg",
    tags: ["Reel Cover", "Instagram", "Social Media"]
  },
  {
    id: "book-series-ak-cover",
    title: "Book Series Reel Cover",
    category: "Graphic Design",
    type: "Video Thumbnail & Cover",
    description: "Custom reel cover designed for the episodic book breakdown video series.",
    mediaType: "image",
    mediaUrl: "/works/graphics/book-series-ak.jpg",
    tags: ["Reel Cover", "Content Creator", "Thumbnail"]
  },
  {
    id: "founder-reel-cover",
    title: "Founder Spotlight Reel Cover",
    category: "Graphic Design",
    type: "Personal Brand Cover",
    description: "Clean personal brand reel cover highlighting founder perspectives and business mindset.",
    mediaType: "image",
    mediaUrl: "/works/graphics/founder-reel-cover.jpg",
    tags: ["Reel Cover", "Personal Branding", "Visual Design"]
  },
  {
    id: "job-recruitment-poster",
    title: "Career & Hiring Recruitment Poster",
    category: "Graphic Design",
    type: "Hiring Announcement Poster",
    description: "Modern typography-driven recruitment banner and job hiring poster for tech and creative roles.",
    mediaType: "image",
    mediaUrl: "/works/graphics/job-recruitment-poster.webp",
    tags: ["Recruitment", "Poster Design", "Typography"]
  },
  {
    id: "social-carousel-creative",
    title: "Multi-Slide Educational Carousel",
    category: "Graphic Design",
    type: "Instagram Carousel Design",
    description: "Engaging social media carousel layout crafted for high swipe-through rate and audience retention.",
    mediaType: "image",
    mediaUrl: "/works/graphics/carousel-design.jpg",
    tags: ["Carousel", "Social Media", "Infographic"]
  },
  {
    id: "product-sales-creative",
    title: "E-Commerce Product Sales Creative",
    category: "Graphic Design",
    type: "Ad Creative",
    description: "Direct-response advertising creative optimized for e-commerce conversion and promotional campaigns.",
    mediaType: "image",
    mediaUrl: "/works/graphics/product-sales-creative.jpg",
    tags: ["Ad Creative", "E-Commerce", "Performance Marketing"]
  },
  {
    id: "krishnashtami-creative",
    title: "Krishnashtami Festival Creative",
    category: "Graphic Design",
    type: "Festival Social Post",
    description: "Cultural and festive celebratory social media creative with vibrant artistic composition.",
    mediaType: "image",
    mediaUrl: "/works/graphics/krishnashtami-creative.jpg",
    tags: ["Festival Poster", "Creative Direction", "Social Media"]
  },
  {
    id: "creative-brand-posters",
    title: "Creative Brand Poster Series",
    category: "Graphic Design",
    type: "Visual Identity Posters",
    description: "Studio graphic posters showcasing contemporary typography, layout experiments, and brand art.",
    mediaType: "image",
    mediaUrl: "/works/graphics/creative-poster-1.jpg",
    tags: ["Brand Poster", "Poster Design", "Art Direction"]
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
