'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Code2, Globe, ExternalLink, Monitor, Database, Cpu, Shield, Cloud, Server, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

const projects = [
  {
    title: 'Marketing AI',
    role: 'AI & Full-Stack',
    desc: 'Multi-Channel Influencer CRM & Automated Outreach SaaS. Features automated creator discovery, AI data extraction, and email blast workflows.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini AI', 'Meta Graph API'],
    demo: 'https://marketing-ai-crm.vercel.app/',
    github: 'https://github.com/SonyLucky7/marketing-ai-crm',
    metrics: '900+ Creators • 5+ Platforms'
  },
  {
    title: 'TradeOS AI',
    role: 'Founder & Full-Stack',
    desc: 'AI-Powered Trading Intelligence Platform covering Crypto, Forex, and Indian Stock Markets with real-time multi-model market sentiment analysis.',
    tech: ['Next.js', 'React', 'TypeScript', 'Multi-Model AI', 'Tailwind CSS', 'Serverless'],
    demo: 'https://trading-os-ai-news-aanalyser.vercel.app/',
    github: 'https://github.com/SonyLucky7',
    metrics: 'Real-time • 3+ Markets'
  },
  {
    title: "Digital Bro's",
    role: 'Full-Stack Developer',
    desc: 'Premium digital marketplace featuring 48 secured API routes, multi-tier affiliate systems, and TOTP 2FA multi-factor authentication.',
    tech: ['Next.js 16', 'React 19', 'PostgreSQL', 'Razorpay', 'JWT', 'TOTP 2FA'],
    demo: 'https://digitalbros.qzz.io/',
    github: 'https://github.com/SonyLucky7/digital-bros',
    metrics: '48 API Endpoints • 2FA Security'
  },
  {
    title: 'LicenseHub',
    role: 'Desktop & DRM Architect',
    desc: 'Multi-tenant software licensing & DRM platform with hardware ID binding, real-time seat verification, and tamper-resistant licensing.',
    tech: ['Electron.js', 'Node.js', 'Next.js', 'Prisma ORM', 'PostgreSQL', 'Aiven'],
    demo: 'https://github.com/SonyLucky7',
    github: 'https://github.com/SonyLucky7',
    metrics: 'Hardware Binding • Multi-Tenant'
  },
  {
    title: 'Lucy AI',
    role: 'Founder & Lead Dev',
    desc: 'AI-powered creative assistant engineered for generative workflow automation, intelligent task execution, and agentic workflows.',
    tech: ['Next.js', 'AI Agents', 'Google Gemini AI', 'LangChain', 'Tailwind'],
    demo: 'https://github.com/SonyLucky7',
    github: 'https://github.com/SonyLucky7',
    metrics: 'Autonomous Agents • Generative AI'
  },
  {
    title: 'Personal Business CRM',
    role: 'Full-Stack Developer',
    desc: 'Business intelligence and workflow management solution with client deal pipelines, financial analytics, and automated reporting.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
    demo: 'https://github.com/SonyLucky7',
    github: 'https://github.com/SonyLucky7',
    metrics: 'Workflow Engine • Analytics'
  },
];

const techCategories = [
  {
    name: 'Frontend Engineering',
    icon: <Monitor className="w-5 h-5" />,
    items: ['Next.js 16', 'React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS v4', 'HTML5 / CSS3', 'Framer Motion', 'State Management']
  },
  {
    name: 'Backend & Serverless',
    icon: <Server className="w-5 h-5" />,
    items: ['Node.js', 'Next.js Server Actions', 'RESTful APIs', 'Serverless Functions', 'Microservices', 'Route Handlers']
  },
  {
    name: 'Databases & Storage',
    icon: <Database className="w-5 h-5" />,
    items: ['PostgreSQL', 'Prisma ORM', 'Aiven Cloud', 'Database Indexing', 'Connection Pooling', 'Parameterized Queries']
  },
  {
    name: 'AI & Automation Systems',
    icon: <Cpu className="w-5 h-5" />,
    items: ['Google Gemini AI', 'Multi-Model Integration', 'Prompt Engineering', 'AI Data Extraction', 'Autonomous Agents', 'AI Image Workflows']
  },
  {
    name: 'Security & Authentication',
    icon: <Shield className="w-5 h-5" />,
    items: ['NextAuth v5', 'JWT / HttpOnly Cookies', 'TOTP 2-Factor Auth', 'Google OAuth', 'HMAC-SHA256 Signatures', 'Rate Limiting', 'HSTS & CSP']
  },
  {
    name: 'APIs & Third-Party Services',
    icon: <Cloud className="w-5 h-5" />,
    items: ['Google Gmail API', 'Meta Graph API', 'WhatsApp Cloud API', 'Razorpay Payment Gateway', 'Discord Webhooks', 'Telegram Bot API', 'Resend Email']
  }
];

const archiveWork = [
  { title: 'Digital Bros Studio', type: 'Agency Platform', link: 'https://digitalbrosstudio.vercel.app/' },
  { title: 'Hillside Taxi Tours', type: 'Tour Booking Platform', link: 'https://hillsidetaxitours.com/' },
  { title: 'Shiva Kallapelli Portfolio', type: 'Creative Showcase', link: 'https://shivakallapelli.vercel.app/' },
  { title: 'Sai Chaitanya Portfolio', type: 'Personal Portfolio', link: 'https://sai-chaitanya-kokku.vercel.app/' },
  { title: 'Pippari Manideep Portfolio', type: 'Developer Portfolio', link: 'https://pippari-manideep-portfolio.vercel.app/' },
  { title: 'Premium Wedding Experience', type: 'Interactive Experience', link: 'https://premium-wedding.vercel.app/' },
  { title: 'Standard Wedding Preview', type: 'Client Preview', link: 'https://standard-wedding-preview.vercel.app/' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'projects' | 'tech' | 'archive'>('projects');

  return (
    <section id="Portofolio" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 relative min-h-screen z-10">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/15 blur-[128px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 blur-[128px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-mono text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERED TO IMPRESS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Explore my work through production SaaS products, technical capabilities, and verified architecture milestones.
          </p>
        </motion.div>

        {/* 3 Interactive Tabs */}
        <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-2 flex flex-wrap md:flex-nowrap gap-2 max-w-2xl mx-auto my-10 backdrop-blur-xl relative z-20">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 font-medium text-sm md:text-base ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 border border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Layers className="w-4 h-4" />
            Flagship Projects
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 font-medium text-sm md:text-base ${
              activeTab === 'tech'
                ? 'bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 border border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Tech Stack
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 font-medium text-sm md:text-base ${
              activeTab === 'archive'
                ? 'bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 border border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Globe className="w-4 h-4" />
            Client Work & Archive
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="mt-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-[#030014]/60 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 group flex flex-col backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  >
                    {/* Visual Card Header */}
                    <div className="h-44 bg-gradient-to-br from-indigo-950/80 via-purple-950/60 to-[#030014] relative overflow-hidden flex flex-col justify-between p-5 border-b border-white/5">
                      <div className="flex justify-between items-center z-10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">LIVE STATUS</span>
                        </div>
                        <span className="text-[10px] font-mono text-purple-300 border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 rounded-full">
                          {project.role}
                        </span>
                      </div>

                      <div className="z-10">
                        <span className="text-xs font-mono text-cyan-400 block">{project.metrics}</span>
                        <h4 className="text-xl font-bold text-white mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all">
                          {project.title}
                        </h4>
                      </div>

                      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-all" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
                        {project.desc}
                      </p>
                      
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md group-hover:border-purple-500/30 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        {project.demo && project.demo !== '#' ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5558e6] hover:to-[#9945e8] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] flex justify-center items-center gap-1.5"
                          >
                            Live Demo <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="flex-1 text-center py-2.5 px-4 rounded-xl bg-white/5 text-gray-400 text-xs font-mono uppercase tracking-wider">
                            In R&D
                          </span>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all flex justify-center items-center"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'tech' && (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {techCategories.map((category, idx) => (
                  <div key={idx} className="bg-[#030014]/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.02] transition-all group relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:text-cyan-300 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-100">
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {category.items.map((item, i) => (
                         <span key={i} className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-xs font-mono text-gray-300 group-hover:border-purple-500/30 group-hover:text-white transition-all">
                           {item}
                         </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'archive' && (
              <motion.div
                key="archive"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {archiveWork.map((work, idx) => (
                  <a
                    key={idx}
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#030014]/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/5 transition-all group flex flex-col justify-between h-44 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-purple-400 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                        {work.type}
                      </span>
                      <div className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all">
                        {work.title}
                      </h4>
                      <span className="text-xs font-mono text-gray-500 mt-1 block">Live Project Deployment ↗</span>
                    </div>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
