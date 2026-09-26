"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Starfield from '@/components/visuals/Starfield';

const roles = [
  "AI-Augmented Full-Stack Developer",
  "SaaS & CRM Systems Architect",
  "Strategic Trader & Risk Analyst",
  "Competitive Esports Gamer",
  "Growth & Automation Specialist"
];

const techPills = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "AI Integration",
  "Tailwind CSS",
  "PostgreSQL",
  "APIs & Automation"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Mouse tracking for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / (rect.width / 2));
      mouseY.set((e.clientY - centerY) / (rect.height / 2));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.94]);

  // Subtle 3D tilt transforms
  const rotateX = useTransform(springY, [-1, 1], [4, -4]);
  const rotateY = useTransform(springX, [-1, 1], [-4, 4]);

  const letterVariants = {
    hidden: { 
      y: "100%", 
      opacity: 0, 
      rotateX: 70,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.15 + i * 0.04,
      },
    }),
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: {
        duration: 0.35,
      }
    }
  };

  const nameChars = "TEJA OGGU".split("");

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050508] text-white pt-20 pb-16"
    >
      {/* 3D Perspective Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          perspective: '800px',
          perspectiveOrigin: '50% 35%',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute w-[200vw] h-[200vh] -left-[50vw]"
          style={{
            transform: 'rotateX(75deg) translateY(-25%)',
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
            maskImage: 'radial-gradient(ellipse 75% 55% at 50% 45%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 45%, black 20%, transparent 70%)',
          }}
        />
      </div>

      {/* Particle Network Canvas */}
      <Starfield />
      
      {/* Ambient Gradient Glows (Clean Dark Neon Depth - No White Haze) */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 25, -20, 0],
            y: [0, -18, 12, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/3 w-[36vw] h-[36vw] rounded-full blur-[110px]"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ 
            x: [0, -20, 15, 0],
            y: [0, 15, -20, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-[32vw] h-[32vw] rounded-full blur-[110px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main Content with 3D Tilt */}
      <motion.div 
        style={{ 
          y: y1, 
          opacity, 
          scale,
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center max-w-5xl"
      >
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-6 hover:border-emerald-500/30 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] text-white/80 uppercase">
            Available for Select Projects
          </span>
        </motion.div>

        {/* Main Name Headline */}
        <div 
          className="overflow-hidden flex flex-wrap justify-center text-[13vw] sm:text-[72px] md:text-[96px] lg:text-[118px] leading-[0.92] font-bold uppercase tracking-[-0.03em] font-heading select-none"
          style={{ perspective: '600px' }}
        >
          {nameChars.map((char, idx) => (
            <motion.span
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block origin-bottom"
              style={{ 
                paddingRight: char === ' ' ? '0.3em' : '0',
                textShadow: '0 0 50px rgba(59, 130, 246, 0.28), 0 0 100px rgba(139, 92, 246, 0.15)',
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Dynamic Rotating Role */}
        <div className="h-[44px] flex items-center justify-center overflow-hidden relative w-full px-4 mt-3">
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.h2
                key={currentRole}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={subtitleVariants}
                className="absolute text-lg sm:text-xl md:text-2xl font-normal italic tracking-[0.03em] font-instrument-serif text-white/80"
              >
                {roles[currentRole]}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        {/* Short Value Proposition Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mt-4 leading-relaxed font-body px-4"
        >
          Engineering high-performance SaaS platforms, CRM systems, and AI-automated workflows that turn complex ideas into scalable reality.
        </motion.p>

        {/* Professional CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:bg-[#3B82F6] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md text-white/90 font-mono font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
          </a>
        </motion.div>

        {/* Tech Stack Floating Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mt-8 max-w-xl"
        >
          {techPills.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs font-mono text-white/50 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Minimal Clean Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 flex flex-col items-center gap-2 pointer-events-none z-20"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
          Scroll
        </span>
        <div className="relative w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
