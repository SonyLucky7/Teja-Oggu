"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TiltCard from '../ui/TiltCard';

const projects = [
  {
    id: 1,
    title: "Marketing AI",
    client: "Multi-Channel CRM",
    year: "2024",
    services: ["Next.js", "AI Integration", "Gmail API", "Prisma"],
    color: "#0a0a0a",
    link: "https://marketing-ai-crm.vercel.app/",
    image: "/marketing-ai-preview.png"
  },
  {
    id: 2,
    title: "LicenseHub",
    client: "DRM Platform",
    year: "2024",
    services: ["Electron", "Node.js", "Desktop App", "Licensing"],
    color: "#111111",
    link: "#",
    image: "/licensehub-preview.png"
  },
  {
    id: 3,
    title: "Digital Bro'S",
    client: "Digital Marketplace",
    year: "2024",
    services: ["Next.js", "Payment Gateway", "Affiliate System"],
    color: "#161616",
    link: "https://digitalbros.qzz.io/",
    image: "/digitalbros-preview.png"
  },
  {
    id: 4,
    title: "TradeOS AI",
    client: "Trading Intelligence",
    year: "2023",
    services: ["AI Models", "Market Analysis", "Real-time"],
    color: "#1a1a1a",
    link: "https://trading-os-ai-news-aanalyser.vercel.app/",
    image: "/tradeos-preview.png"
  },
  {
    id: 5,
    title: "Biz Operator CRM",
    client: "Business Management",
    year: "2024",
    services: ["Dashboard", "Operations", "Finance Tracking"],
    color: "#212121",
    link: "/personal-crm-preview.png",
    image: "/personal-crm-preview.png"
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);
  
  return (
    <section id="portfolio" ref={containerRef} className="py-24 md:py-32 relative bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading">
            Selected<br />Work
          </h2>
          <p className="text-lg md:text-xl max-w-sm font-medium text-white/70">
            A collection of SaaS products, AI CRM systems, and full-stack solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          {projects.map((project, index) => {
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                total={projects.length} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  return (
    <div 
      className="sticky top-32 mb-12 flex items-center justify-center w-full"
      style={{ zIndex: index, top: `calc(100px + ${index * 30}px)` }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale }}
        className="w-full"
      >
        <TiltCard>
          <div 
            style={{ backgroundColor: project.color }}
            className="w-full min-h-[70vh] border border-white/10 flex flex-col justify-between p-6 md:p-10 transform origin-top shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-shadow hover:shadow-[0_12px_40px_rgba(255,255,255,0.05)] rounded-2xl"
          >
            <div className="flex justify-between items-start border-b border-white/10 pb-6">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                {project.title}
              </h3>
            </div>
            
            <div className="flex-grow flex items-center justify-center w-full relative my-8 min-h-[300px]">
              {project.image ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full h-full relative group cursor-pointer rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  {/* Image using standard img tag for simplicity, object-cover/contain depending on preference. object-cover usually looks better. */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                      Visit Live Site
                    </span>
                  </div>
                </a>
              ) : (
                <div className="text-2xl md:text-4xl font-bold opacity-10 uppercase tracking-widest text-center w-full h-full flex items-center justify-center border border-white/5 rounded-xl bg-white/5">
                  [ {project.title} Visual ]
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-sm uppercase tracking-widest font-bold mb-2 text-white/50">Platform</p>
                <p className="text-lg font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest font-bold mb-2 text-white/50">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s: string) => (
                    <span key={s} className="border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-white text-black px-8 py-4 text-center uppercase font-bold tracking-widest hover:bg-white/80 transition-colors rounded-full block z-20">
                View Details
              </a>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}
