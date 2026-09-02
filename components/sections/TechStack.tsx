"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { category: "AI Orchestration", items: ["Prompt Engineering", "Cursor & Windsurf", "Claude & ChatGPT", "AI Code Generation", "System Architecture"] },
  { category: "Frameworks (AI-Assisted)", items: ["Next.js", "React", "Tailwind CSS", "Node.js", "Firebase", "Vercel"] },
  { category: "Digital Marketing", items: ["Meta Ads", "Google Ads", "WhatsApp Automation", "Lead Generation", "SEO"] },
  { category: "Design & UX", items: ["Figma", "UI/UX Design", "Graphic Design", "Video Editing", "Rapid Prototyping"] },
  { category: "Operations", items: ["Business Strategy", "Risk Management", "Workflow Automation", "CRM Systems"] },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 15,
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl" ref={containerRef}>
        
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 font-heading flex gap-4 overflow-hidden">
          <motion.span
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            TECHNICAL
          </motion.span>
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-black/30"
          >
            ARSENAL
          </motion.span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-20">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
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
                  <motion.li 
                    key={i} 
                    variants={itemVariants}
                    whileHover={{ x: 8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                    className="text-black/70 font-mono text-sm tracking-wide flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
