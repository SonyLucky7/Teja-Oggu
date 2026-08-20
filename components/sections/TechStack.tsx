"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"] },
  { category: "AI & APIs", items: ["OpenAI API", "Gemini API", "Stripe Integration", "REST APIs", "GraphQL"] },
  { category: "Security", items: ["Clerk Auth", "NextAuth", "JWT", "OAuth", "Role-Based Access"] },
  { category: "Marketing", items: ["Meta Ads", "Google Ads", "WhatsApp Auto", "Lead Gen", "SEO"] },
  { category: "Design", items: ["Figma", "UI/UX", "Graphic Design", "Video Editing"] },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={containerRef}>
        
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 font-heading">
          Technical <span className="text-black/30">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-20">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 border-b border-black/20 pb-4">
                <span className="font-mono text-xs font-bold text-black bg-[#EAEAEA] px-2 py-1">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-black">
                  {skillGroup.category}
                </h3>
              </div>
              
              <ul className="flex flex-col gap-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-black/70 font-mono text-sm tracking-wide flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
