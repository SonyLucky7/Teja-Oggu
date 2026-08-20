"use client";

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Marketing AI CRM",
    client: "Marketing Agency",
    services: ["SaaS", "AI Generation", "Full-Stack"],
    link: "https://marketing-ai-crm.vercel.app/",
    image: "/marketing-ai-preview.png"
  },
  {
    id: 2,
    title: "LicenseHub",
    client: "Software Retailer",
    services: ["E-commerce", "Auth", "API Integration"],
    link: "https://license-hub.vercel.app/",
    image: "/licensehub-preview.png"
  },
  {
    id: 3,
    title: "Digital Bro'S",
    client: "Digital Marketplace",
    services: ["Next.js", "Payment Gateway", "Affiliate System"],
    link: "https://digitalbros.qzz.io/",
    image: "/digitalbros-preview.png"
  },
  {
    id: 4,
    title: "TradeOS AI",
    client: "Trading Intelligence",
    services: ["AI Models", "Market Analysis", "Real-time"],
    link: "https://trading-os-ai-news-aanalyser.vercel.app/",
    image: "/tradeos-preview.png"
  },
  {
    id: 5,
    title: "Biz Operator CRM",
    client: "Business Management",
    services: ["Dashboard", "Operations", "Finance Tracking"],
    link: "/personal-crm-preview.png",
    image: "/personal-crm-preview.png"
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]" ref={containerRef}>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-8 overflow-hidden">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading leading-[0.9] flex flex-col">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              SELECTED
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
              className="text-black/30"
            >
              WORK
            </motion.span>
          </h2>
          <div className="md:w-1/3 text-lg font-bold">
            A collection of robust systems, AI integrations, and full-stack solutions.
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
          ))}
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
      className="sticky top-32 mb-12 md:mb-24 flex items-center justify-center w-full"
      style={{ zIndex: index, top: `calc(100px + ${index * 30}px)` }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale }}
        className="w-full relative"
      >
        <div 
          className="w-full border-2 border-black bg-[#EBEBEB] flex flex-col justify-between p-6 md:p-10 shadow-[8px_8px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] transition-shadow duration-300 group"
        >
          <div className="flex justify-between items-start border-b border-black/20 pb-6">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black w-2/3">
              {project.title}
            </h3>
          </div>
          
          <div className="flex-grow flex items-center justify-center w-full relative my-8 min-h-[300px] md:min-h-[500px]">
            {project.image ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative w-full h-full block border-2 border-black overflow-hidden group/img cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover/img:grayscale-0 transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest text-sm opacity-0 group-hover/img:opacity-100 transform translate-y-4 group-hover/img:translate-y-0 transition-all duration-300">
                    Visit Live Site
                  </span>
                </div>
              </a>
            ) : (
              <div className="text-black/20 font-black text-4xl uppercase tracking-widest">[ PROJECT VISUAL ]</div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-black/20 gap-4">
            <div className="flex flex-wrap gap-2">
              {project.services.map((service: string, i: number) => (
                <span key={i} className="text-xs font-bold uppercase tracking-widest border border-black text-black px-3 py-1 bg-white">
                  {service}
                </span>
              ))}
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-black bg-white px-3 py-1 border border-black">
              CLIENT: {project.client}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
