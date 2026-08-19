"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden border-b border-black/15"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          
          <motion.div 
            style={{ y: y1, opacity }}
            className="md:col-span-8 flex flex-col"
          >
            <div className="overflow-hidden">
              <motion.h1 
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-7xl md:text-[9rem] leading-[0.85] font-black uppercase tracking-tighter font-heading text-black"
              >
                Teja
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-7xl md:text-[9rem] leading-[0.85] font-black uppercase tracking-tighter font-heading text-black/90"
              >
                Oggu<span className="text-black/30">.</span>
              </motion.h1>
            </div>
            
            <div className="mt-8 md:mt-12 overflow-hidden max-w-2xl">
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-xl md:text-3xl font-medium leading-tight font-heading"
              >
                AI-Augmented Full Stack Developer
              </motion.p>
            </div>
            <div className="mt-4 overflow-hidden max-w-xl">
              <motion.p
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-base md:text-lg text-black/60 font-body"
              >
                Building scalable SaaS, intelligent CRM systems, and AI-driven automation. 
                Merging deep technical expertise with rapid execution.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y2, opacity }}
            className="md:col-span-4 border border-black/15 p-6 md:p-8 bg-[#f5f5f5]/50 backdrop-blur-sm self-end mb-12 md:mb-0"
          >
            <div className="flex flex-col space-y-6 font-mono text-sm uppercase tracking-wider">
              <div>
                <h3 className="text-black/40 mb-1">Status</h3>
                <p className="font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black block animate-pulse"></span>
                  Available for Work
                </p>
              </div>
              <div>
                <h3 className="text-black/40 mb-1">Location</h3>
                <p className="font-semibold">Remote / Global</p>
              </div>
              <div>
                <h3 className="text-black/40 mb-1">Expertise</h3>
                <p className="font-semibold">SaaS / CRM / AI / API</p>
              </div>
              <div className="pt-4 border-t border-black/15">
                <a href="#portfolio" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all">
                  View Work <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background large typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] font-black uppercase text-black/[0.03] leading-none tracking-tighter whitespace-nowrap"
        >
          Developer
        </motion.div>
      </div>
    </section>
  );
}
