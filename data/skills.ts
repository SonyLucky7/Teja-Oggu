export interface SkillCategory {
  category: string;
  skills: string[];
}

export const techStack: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Next.js Server Actions', 'REST APIs', 'Serverless APIs']
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'Prisma ORM', 'Aiven']
  },
  {
    category: 'AI',
    skills: ['Google Gemini AI', 'AI API Integration', 'AI Data Extraction', 'Prompt Engineering', 'AI Automation', 'AI Image Generation Workflows', 'Multi-Model AI Integration']
  },
  {
    category: 'Auth & Security',
    skills: ['NextAuth v5', 'JWT', 'Google OAuth', 'TOTP/2FA', 'HttpOnly Cookies', 'Secure Cookies', 'SameSite Protection', 'HMAC-SHA256 Verification', 'Content Security Policy', 'HSTS', 'Rate Limiting', 'Parameterized Queries', 'Input Validation']
  },
  {
    category: 'APIs & Integrations',
    skills: ['Gmail API', 'Google OAuth', 'Meta Graph API', 'Instagram', 'WhatsApp Business Cloud API', 'Razorpay', 'Discord', 'Telegram', 'Resend']
  },
  {
    category: 'Infrastructure',
    skills: ['Vercel', 'Aiven', 'Serverless Architecture', 'Vercel Cron Jobs', 'Database Connection Optimization']
  }
];
