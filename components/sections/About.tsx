"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 md:py-32 border-b border-black/10 bg-[#F9F9F9] text-black">
      <div className="container mx-auto px-4 md:px-8" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Header */}
          <div className="md:col-span-4">
            <h2 className="text-7xl md:text-[100px] leading-[0.9] font-black uppercase tracking-tighter font-heading sticky top-32 overflow-hidden">
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
                className="text-black block"
              >
                THE
              </motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
                className="text-[#B3B3B3] block"
              >
                MINDSET
              </motion.span>
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-8 flex flex-col gap-16 mt-4 md:mt-0">
            
            <div className="text-2xl md:text-4xl leading-snug font-bold font-body text-black">
              <RevealText text="I bridge the gap between complex engineering and rapid execution." inView={isInView} delay={0} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-black/10">
              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-black uppercase tracking-widest bg-black text-white px-4 py-2 self-start">THE ORIGIN</h3>
                <p className="text-base text-gray-600 leading-relaxed font-body">
                  With 3 years in Pharmacy, 5+ years in Trading, and 6+ years in high-stakes Gaming, 
                  my background is unconventional. This diverse experience taught me systems thinking, 
                  pattern recognition, and risk management—skills I apply directly to software architecture.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-black uppercase tracking-widest bg-black text-white px-4 py-2 self-start">THE APPROACH</h3>
                <p className="text-base text-gray-600 leading-relaxed font-body">
                  I don't just write code; I solve business problems. Using AI-augmented workflows, 
                  I iterate faster without sacrificing robustness. From SaaS architectures to CRM tools, 
                  I deliver scalable systems built for reality, not just theory.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-y border-black/10 divide-x divide-y md:divide-y-0 divide-black/10 mt-4">
              {[
                { label: 'GAMING (HAC) YEARS', value: '6+' },
                { label: 'TRADING YEARS', value: '5+' },
                { label: 'PHARMACY YEARS', value: '3+' },
                { label: 'DEVELOPMENT YEARS', value: '5+' }
              ].map((stat, i) => (
                <div key={i} className="py-10 px-4 flex flex-col items-center justify-center text-center group">
                  <div className="text-5xl md:text-6xl font-black font-heading mb-3 text-black group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function RevealText({ text, inView, delay }: { text: string, inView: boolean, delay: number }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.1 }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-wrap overflow-hidden"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-2 mb-2 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
