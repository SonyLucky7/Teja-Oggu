"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    category: "Frontend & UI",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX Implementation"]
  },
  {
    category: "Backend & Architecture",
    items: ["Node.js", "Next.js Server Actions", "REST APIs", "Serverless APIs", "PostgreSQL", "Prisma ORM", "Aiven"]
  },
  {
    category: "AI & Automation",
    items: ["Google Gemini AI", "Multi-Model AI Integration", "Prompt Engineering", "OpenAI / Claude / Grok Concepts", "AI Content Workflows"]
  },
  {
    category: "APIs & Integrations",
    items: ["Google Gmail API", "Meta Graph API", "WhatsApp Business API", "Razorpay", "Discord / Telegram", "OAuth"]
  },
  {
    category: "Security & Auth",
    items: ["NextAuth", "JWT & TOTP", "HMAC-SHA256", "Secure Cookies", "Rate Limiting", "CSP & HSTS", "Hardware ID Security"]
  }
];

export default function TechStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="stack" className="py-24 md:py-32 bg-[#0A0A0A] text-white border-y border-white/10" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading text-white">
            The<br />Stack
          </h2>
          <p className="text-xl md:text-2xl mt-4 font-medium max-w-2xl text-white/70">
            A comprehensive arsenal of modern web technologies, AI models, and robust backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pb-12 border-b border-white/10 last:border-0"
            >
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter w-full md:w-1/3 text-white/80 shrink-0">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 w-full md:w-2/3">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-5 py-3 rounded-full border border-white/20 bg-white/5 text-sm md:text-base font-medium font-mono hover:bg-white hover:text-black transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
