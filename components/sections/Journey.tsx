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
    year: "Present",
    title: "Digital Marketing",
    org: "Co-Founder @ Digital Bros Studio",
    desc: "Co-founded the startup to spearhead digital strategy, Meta/Google Ads, and WhatsApp/Instagram automation. Delivering comprehensive technology-based business solutions.",
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
    title: "Pharmacy Operations",
    org: "Medical Agency & Pharmacy",
    desc: "Gained hands-on experience deciphering complex prescriptions and deeply understanding pharmacological use-cases. Cultivated extreme attention to detail and methodical problem-solving—a foundation that now translates directly into writing precise, secure software.",
    icon: <HeartPulse className="w-6 h-6 text-black" />,
  }
];

export default function Journey() {
  const containerRef = useRef(null);

  return (
    <section id="journey" className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="mb-20 md:mb-32 overflow-hidden">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 font-heading flex flex-col">
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 60, damping: 15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              The
            </motion.span>
            <motion.span
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-black/30"
            >
              Journey
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-lg md:text-xl font-bold max-w-2xl text-black/70"
          >
            An unconventional path building systems thinking, risk management, and rapid execution.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto pl-12 sm:pl-16 md:pl-20 relative">
          {/* Vertical Timeline Track */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-6 bottom-6 w-[2px] bg-black/20" />

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

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [35, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="relative mb-14 md:mb-20 last:mb-0"
    >
      {/* Timeline Step Icon perfectly centered on track */}
      <div className="absolute left-[-32px] sm:left-[-40px] md:left-[-48px] top-6 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#EAEAEA] border-2 border-black flex items-center justify-center shadow-[3px_3px_0_0_#000] z-10">
        {step.icon}
      </div>

      <div 
        className="bg-[#EAEAEA] border-2 border-black p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-shadow duration-300 group"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6">
          <span className="text-black bg-white border border-black font-mono font-bold px-4 py-2 text-sm uppercase tracking-widest inline-block self-start shadow-[2px_2px_0_0_#000]">
            {step.year}
          </span>
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-300">
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
