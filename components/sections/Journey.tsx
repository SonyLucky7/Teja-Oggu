"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Gamepad2, HeartPulse, LineChart } from 'lucide-react';

const journeySteps = [
  {
    year: "Present",
    title: "Full-Stack & AI Developer",
    org: "Freelance / Independent",
    desc: "Building SaaS platforms, CRM systems, and AI-integrated web applications. Focusing on modern architectures (Next.js, Tailwind, Prisma) and complex API integrations.",
    icon: <Briefcase className="w-6 h-6 text-black" />,
  },
  {
    year: "2024",
    title: "Digital Marketing & Automation",
    org: "Digital Bros Studio",
    desc: "Spearheaded digital strategy, Meta/Google Ads, and WhatsApp/Instagram automation. Delivered comprehensive technology-based business solutions.",
    icon: <Briefcase className="w-6 h-6 text-black" />,
  },
  {
    year: "5+ Years",
    title: "Professional Trading",
    org: "Financial Markets",
    desc: "Developed a deep understanding of risk management, probability, and split-second decision making. Translates to writing robust, fault-tolerant code.",
    icon: <LineChart className="w-6 h-6 text-black" />,
  },
  {
    year: "6+ Years",
    title: "Esports & High-Stakes Gaming",
    org: "Competitive Circuit",
    desc: "Cultivated intense focus, systems thinking, and rapid execution under pressure. Essential traits for modern full-stack development and debugging.",
    icon: <Gamepad2 className="w-6 h-6 text-black" />,
  },
  {
    year: "3 Years",
    title: "Pharmacy Background",
    org: "Medical Field",
    desc: "Learned strict compliance, attention to detail, and methodical problem solving. A solid foundation for writing secure, bug-free software.",
    icon: <HeartPulse className="w-6 h-6 text-black" />,
  }
];

export default function Journey() {
  const containerRef = useRef(null);

  return (
    <section id="journey" className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="mb-20 md:mb-32">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 font-heading">
            The <br className="md:hidden"/> <span className="text-black/30">Journey</span>
          </h2>
          <p className="text-lg md:text-xl font-bold max-w-2xl text-black/70">
            An unconventional path building systems thinking, risk management, and rapid execution.
          </p>
        </div>

        <div className="max-w-5xl mx-auto md:ml-12 border-l-2 border-black/20 pl-8 md:pl-16 relative perspective-[2000px]">
          {journeySteps.map((step, index) => (
            <JourneyStep key={index} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function JourneyStep({ step, index }: { step: any, index: number }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.6 1"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ rotateX, scale, opacity, y, transformOrigin: "bottom center" }}
      className="relative mb-24 last:mb-0 transform-style-3d"
    >
      <div className="absolute -left-[41px] md:-left-[81px] top-0 w-12 h-12 bg-[#EAEAEA] border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_#000] z-10">
        {step.icon}
      </div>

      <div className="bg-[#EAEAEA] border-2 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-shadow duration-300 group">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6">
          <span className="text-black bg-white border border-black font-mono font-bold px-4 py-2 text-sm uppercase tracking-widest inline-block self-start shadow-[2px_2px_0_0_#000]">
            {step.year}
          </span>
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black">
            {step.title}
          </h3>
        </div>
        
        <h4 className="text-sm font-bold font-mono uppercase tracking-widest text-black/50 mb-6 pb-6 border-b border-black/10">
          {step.org}
        </h4>
        
        <p className="text-black/80 leading-relaxed md:text-lg">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
