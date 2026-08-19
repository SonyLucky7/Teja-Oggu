"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 md:py-32 border-b border-black/15 bg-white">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Header */}
          <div className="md:col-span-4">
            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter font-heading sticky top-32">
              The<br />
              <span className="text-black/30">Mindset</span>
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-8 flex flex-col gap-12">
            
            <div className="text-2xl md:text-4xl leading-tight font-medium font-heading">
              <RevealText text="I bridge the gap between complex engineering and rapid execution." inView={isInView} delay={0} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/15">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold uppercase tracking-widest bg-black text-white px-3 py-1 self-start">The Origin</h3>
                <p className="text-base text-black/80 leading-relaxed font-body">
                  With 3 years in Pharmacy, 5+ years in Trading, and 6+ years in high-stakes Gaming, 
                  my background is unconventional. This diverse experience taught me systems thinking, 
                  pattern recognition, and risk management—skills I apply directly to software architecture.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold uppercase tracking-widest bg-black text-white px-3 py-1 self-start">The Approach</h3>
                <p className="text-base text-black/80 leading-relaxed font-body">
                  I don't just write code; I solve business problems. Using AI-augmented workflows, 
                  I iterate faster without sacrificing robustness. From SaaS architectures to CRM tools, 
                  I deliver scalable systems built for reality, not just theory.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-y border-black/15 divide-x divide-y md:divide-y-0 divide-black/15 mt-8">
              {[
                { label: 'Gaming (HAC)', value: '6+' },
                { label: 'Trading', value: '5+' },
                { label: 'Pharmacy', value: '3+' },
                { label: 'Development', value: '5+' }
              ].map((stat, i) => (
                <div key={i} className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl md:text-5xl font-black font-heading mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-black/50">{stat.label} Years</div>
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
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 }
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
