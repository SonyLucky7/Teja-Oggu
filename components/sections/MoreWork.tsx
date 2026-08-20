"use client";

import React, { useRef } from 'react';
import { ArrowUpRight, Beaker, TerminalSquare } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const otherProjects = [
  { title: "Digital Bros Studio", type: "Marketing Agency", url: "https://digital-bros-studio.vercel.app/" },
  { title: "Hillside Taxi Tours", type: "Tourism Platform", url: "https://hillsidetaxitours.com/" },
  { title: "Shiva Kallapelli", type: "Portfolio Website", url: "https://shivakallapelli.vercel.app/" },
  { title: "Sai Chaitanya", type: "Portfolio Website", url: "https://sai-chaitanya-kokku.vercel.app/" },
  { title: "Pippari Manideep", type: "Portfolio Website", url: "https://pippari-manideep-portfolio.vercel.app/" },
  { title: "Premium Wedding", type: "Event Experience", url: "https://premium-wedding.vercel.app/" },
  { title: "Standard Wedding", type: "Event Experience", url: "https://standard-wedding-preview.vercel.app/" },
];

const inDevelopment = [
  {
    title: "LUCY AI",
    type: "Personal AI Assistant",
    desc: "Intelligent assistant for workflow automation and AI-powered creative generation (posters, flyers, visual assets) from text prompts.",
    status: "In Development",
    icon: <TerminalSquare className="w-6 h-6" />
  }
];

export default function MoreWork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="more-work" className="py-24 md:py-32 bg-[#050505] text-white border-b border-white/10" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Other Projects (Archive List) */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 text-white flex items-center gap-4">
              Project <span className="text-white/30">Archive</span>
            </h3>
            
            <div className="flex flex-col border-t border-white/10">
              {otherProjects.map((project, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  key={i}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-4 md:mb-0">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-6 text-white/50 group-hover:text-white transition-colors">
                    <span className="font-mono text-sm uppercase tracking-widest text-right">{project.type}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: In Development (Lab) */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 text-white flex items-center gap-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Lab</span>
            </h3>

            <div className="flex flex-col gap-6">
              {inDevelopment.map((project, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  key={i}
                  className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors cursor-pointer"
                >
                  {/* Flashing Status Dot */}
                  <div className="absolute top-8 right-8 flex items-center gap-2 z-20">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold hidden md:block">
                      {project.status}
                    </span>
                  </div>

                  <div className="relative z-20">
                    <div className="text-white/40 mb-6 group-hover:text-purple-400 transition-colors">
                      {project.icon}
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 text-white">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6 border-b border-white/10 pb-6">
                      {project.type}
                    </p>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">
                      {project.desc}
                    </p>
                  </div>

                  {/* Image Preview Overlay on Hover */}
                  {project.image && (
                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                  )}
                  {project.image && (
                     <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
