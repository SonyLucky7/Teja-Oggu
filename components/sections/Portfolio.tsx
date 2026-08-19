"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AI CRM System",
    client: "Internal SaaS",
    year: "2024",
    services: ["Architecture", "Full-Stack", "AI Integration"],
    color: "#e5e5e5"
  },
  {
    id: 2,
    title: "Trading Analytics Dashboard",
    client: "Prop Firm",
    year: "2023",
    services: ["Frontend", "Data Viz", "WebSocket"],
    color: "#d4d4d4"
  },
  {
    id: 3,
    title: "Pharmacy Automation",
    client: "Retail Chain",
    year: "2022",
    services: ["Systems Integration", "Full-Stack"],
    color: "#c4c4c4"
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);
  
  return (
    <section id="portfolio" ref={containerRef} className="py-24 md:py-32 relative bg-[#f5f5f5]">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/15 pb-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading">
            Selected<br />Work
          </h2>
          <p className="text-lg md:text-xl max-w-sm font-medium">
            A collection of robust systems, AI integrations, and full-stack solutions.
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
  
  // Create a sticky effect for the card container
  return (
    <div 
      className="sticky top-32 mb-12 flex items-center justify-center w-full"
      style={{ zIndex: index, top: `calc(100px + ${index * 30}px)` }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale, backgroundColor: project.color }}
        className="w-full h-[60vh] md:h-[70vh] border-2 border-black flex flex-col justify-between p-6 md:p-10 transform origin-top shadow-[8px_8px_0_rgba(0,0,0,1)] transition-shadow hover:shadow-[12px_12px_0_rgba(0,0,0,1)]"
      >
        <div className="flex justify-between items-start border-b-2 border-black/15 pb-6">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter w-2/3">
            {project.title}
          </h3>
          <div className="text-right">
            <span className="text-xl font-bold font-mono bg-black text-white px-3 py-1">
              {project.year}
            </span>
          </div>
        </div>
        
        <div className="flex-grow flex items-center justify-center">
          <div className="text-2xl md:text-4xl font-bold opacity-20 uppercase tracking-widest text-center">
            [ Project Visual ]
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-6 border-t-2 border-black/15">
          <div>
            <p className="text-sm uppercase tracking-widest font-bold mb-2">Client</p>
            <p className="text-lg font-medium">{project.client}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest font-bold mb-2">Services</p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s: string) => (
                <span key={s} className="border border-black px-3 py-1 text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <button className="w-full md:w-auto bg-black text-white px-8 py-4 uppercase font-bold tracking-widest hover:bg-black/80 transition-colors">
            View Details
          </button>
        </div>
      </motion.div>
    </div>
  );
}
