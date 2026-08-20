"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const journeySteps = [
  {
    year: "Current",
    title: "Full-Stack & AI Developer",
    org: "Independent Developer",
    desc: "Building SaaS platforms, AI-powered applications, and complete digital products from idea to deployment."
  },
  {
    year: "2024",
    title: "Digital Bros Studio",
    org: "Marketing & Tech Initiative",
    desc: "Bridging creative excellence and business results through Meta Ads, social media strategy, and digital solutions."
  },
  {
    year: "5+ Years",
    title: "Independent Trader",
    org: "Forex & Intraday",
    desc: "Developing disciplined trading strategies with a focus on risk management, price action, and psychological control."
  },
  {
    year: "6+ Years",
    title: "Competitive Gamer",
    org: "Esports",
    desc: "Competing in high-stakes BGMI finals with fast decision-making, strategic thinking, and team coordination."
  },
  {
    year: "3 Years",
    title: "Pharmacy Operations",
    org: "Healthcare",
    desc: "Developed operational discipline, attention to detail, and reliable workflow management in a high-stakes environment."
  }
];

function JourneyStep({ step, index }: { step: any, index: number }) {
  const ref = useRef(null);
  
  // Track scroll position relative to THIS specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.6 1"] // Starts animating when top of element hits bottom of viewport, finishes when it reaches 40% up
  });

  // 3D Physics mapped to scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  
  // Parallax the content slightly
  const contentY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ 
        scale, 
        opacity, 
        rotateX, 
        y, 
        transformOrigin: "top center",
        transformStyle: "preserve-3d" 
      }}
      className="mb-24 last:mb-0 relative w-full"
    >
      {/* 3D Connector Node */}
      <div className="absolute -left-[37px] md:-left-[69px] top-8 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10" />
      <div className="absolute -left-[45px] md:-left-[77px] top-6 w-8 h-8 rounded-full border border-white/30 animate-[ping_3s_linear_infinite] z-0" />
      
      {/* 3D Glass Card */}
      <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/30 transition-all duration-500">
        
        {/* Dynamic Inner Shine */}
        <div className="absolute inset-0 -translate-x-[150%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

        <motion.div style={{ y: contentY }} className="flex flex-col gap-4 relative z-10">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
            {step.year}
          </span>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white drop-shadow-xl">
            {step.title}
          </h3>
          <h4 className="text-lg md:text-xl font-bold text-white/60 font-mono mb-2 uppercase tracking-widest">
            {step.org}
          </h4>
          <p className="text-base md:text-lg text-white/40 font-body leading-relaxed max-w-3xl">
            {step.desc}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const containerRef = useRef(null);
  
  // Parallax the header
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="journey" className="py-32 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden" ref={containerRef}>
      
      {/* Deep Space Background Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div style={{ y: headerY }} className="mb-24 text-center md:text-left flex flex-col items-center md:items-start relative z-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading text-white leading-none">
            The<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20">Journey</span>
          </h2>
          <p className="text-base md:text-lg mt-6 font-medium max-w-2xl text-white/40 font-mono tracking-widest uppercase">
            An unconventional path building systems thinking, risk management, and rapid execution.
          </p>
        </motion.div>

        {/* 3D Perspective Container */}
        <div style={{ perspective: "2000px" }} className="max-w-5xl mx-auto md:ml-12 border-l-2 border-white/10 pl-8 md:pl-16 relative z-10">
          {journeySteps.map((step, index) => (
            <JourneyStep key={index} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
