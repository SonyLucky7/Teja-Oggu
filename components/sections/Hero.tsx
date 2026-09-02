"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Starfield from '@/components/visuals/Starfield';

const roles = [
  "AI-Augmented Full-Stack Developer.",
  "Strategic Trader.",
  "Competitive Gamer.",
  "Digital Marketing Specialist.",
  "SaaS & Automation Expert."
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setMounted(true);
    }, 1800);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

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
      clearTimeout(delayTimeout);
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  // 3D tilt transforms
  const rotateX = useTransform(springY, [-1, 1], [3, -3]);
  const rotateY = useTransform(springX, [-1, 1], [-3, 3]);

  const letterVariants = {
    hidden: { 
      y: "120%", 
      opacity: 0, 
      rotateX: 90,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3 + i * 0.06,
      },
    }),
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
      }
    }
  };

  const nameChars = "TEJA OGGU".split("");

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050508] text-white"
    >
      {/* Infinite Grid Floor */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          perspective: '800px',
          perspectiveOrigin: '50% 40%',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute w-[200vw] h-[200vh] -left-[50vw]"
          style={{
            transform: 'rotateX(75deg) translateY(-30%)',
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)',
          }}
        />
      </div>

      {/* Particle Network */}
      <Starfield />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.8 }}
        className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
      >
        {/* Primary orb - blue */}
        <motion.div
          animate={{ 
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 15, -10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] rounded-full blur-[100px] md:blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)' }}
        />
        {/* Secondary orb - purple */}
        <motion.div
          animate={{ 
            x: [0, -25, 15, -10, 0],
            y: [0, 15, -25, 10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-[35vw] h-[35vw] md:w-[20vw] md:h-[20vw] rounded-full blur-[100px] md:blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)' }}
        />
        {/* Accent orb - cyan */}
        <motion.div
          animate={{ 
            x: [0, 20, -30, 0],
            y: [0, -30, 10, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/2 w-[30vw] h-[30vw] md:w-[18vw] md:h-[18vw] rounded-full blur-[80px] md:blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)' }}
        />
      </motion.div>

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
        className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center w-full"
      >
        {/* Name */}
        <div 
          className="overflow-hidden flex flex-wrap justify-center text-[13vw] sm:text-[72px] md:text-[96px] lg:text-[120px] leading-[0.95] font-bold uppercase tracking-[-0.03em] font-heading"
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
                textShadow: '0 0 60px rgba(59, 130, 246, 0.3), 0 0 120px rgba(139, 92, 246, 0.15)',
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Thin decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 md:w-40 h-[1px] my-5 md:my-6 origin-center"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), rgba(139, 92, 246, 0.5), transparent)',
          }}
        />

        {/* Subtitle cycling */}
        <div className="h-[60px] md:h-[40px] flex items-center justify-center overflow-hidden relative w-full px-4">
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.h2
                key={currentRole}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={subtitleVariants}
                className="absolute text-[15px] md:text-[19px] leading-[1.2] font-normal italic tracking-[0.05em] font-instrument-serif text-white/60"
              >
                {roles[currentRole]}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Scroll Down Indicator — Mouse shape */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none z-20"
      >
        {/* Mouse outline */}
        <div className="relative w-6 h-10 rounded-full border border-white/20">
          <motion.div
            animate={{ y: [2, 12, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400/80"
          />
        </div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9F9F9] to-transparent z-[15] pointer-events-none" />
    </section>
  );
}
