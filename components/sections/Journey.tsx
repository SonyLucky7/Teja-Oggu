"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timeline = [
  {
    year: "2024",
    title: "AI & Full-Stack Mastery",
    desc: "Integrating LLMs, building autonomous agents, and architecting scalable SaaS platforms. Merging rapid prototyping with production-ready systems.",
  },
  {
    year: "2021-2023",
    title: "System Automation",
    desc: "Developing intelligent CRM tools, data pipelines, and automation scripts. Focused on reducing friction and maximizing efficiency in business logic.",
  },
  {
    year: "2018-2020",
    title: "The Pivot",
    desc: "Transitioning from Pharmacy and Trading into deep tech. Leveraging analytical skills to recognize software patterns and architecture.",
  },
  {
    year: "Pre-2018",
    title: "The Foundations",
    desc: "6+ years in highly competitive gaming (HAC). Building the foundational discipline, reaction time, and strategic thinking required for high-level engineering.",
  }
];

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="journey" ref={containerRef} className="py-24 md:py-32 bg-[#f5f5f5] border-b border-black/15">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 md:mb-24 flex justify-between items-end border-b-4 border-black pb-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading">
            Evolution
          </h2>
          <div className="hidden md:block text-xl font-bold font-mono">
            [ 2018 — 2024 ]
          </div>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-black/10 -translate-x-1/2"></div>
          <motion.div 
            className="absolute left-[27px] md:left-1/2 top-0 w-1 bg-black origin-top -translate-x-1/2"
            style={{ height: "100%", scaleY: scrollYProgress }}
          ></motion.div>

          <div className="flex flex-col gap-12 md:gap-0">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full md:h-64">
                  
                  {/* Node */}
                  <div className="absolute left-[27px] md:left-1/2 w-6 h-6 bg-[#f5f5f5] border-4 border-black rounded-full -translate-x-1/2 z-10 top-0 md:top-1/2 md:-translate-y-1/2"></div>
                  
                  {/* Content Left */}
                  <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'} pt-2 md:pt-0`}>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                    <p className="text-base text-black/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Date Right */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'order-2 pl-12' : 'text-right pr-12'}`}>
                    <span className="text-5xl md:text-7xl font-black font-mono text-black/10 tracking-tighter">
                      {item.year}
                    </span>
                  </div>

                  {/* Mobile Date */}
                  <div className="md:hidden pl-16 mt-4">
                    <span className="text-3xl font-black font-mono bg-black text-white px-2 py-1">
                      {item.year}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
