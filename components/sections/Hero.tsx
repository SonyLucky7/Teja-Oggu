"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Starfield from '@/components/visuals/Starfield';

const roles = [
  "AI-Augmented Full-Stack Developer.",
  "Strategic Trader.",
  "Competitive Gamer.",
  "Digital Marketing Specialist.",
  "SaaS & Automation Expert."
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setMounted(true);
    }, 1800);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(interval);
    };
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants = {
    hidden: { y: "110%", opacity: 0, rotateZ: 5 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 2.2, // Slower, luxurious duration
        ease: [0.16, 1, 0.3, 1] as const, // Expo ease out
        delay: i * 0.08, // Increased stagger delay
      },
    }),
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808] text-white"
    >
      <Starfield />
      <motion.div 
        style={{ y: y1, opacity }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center"
      >
        <div className="overflow-hidden flex justify-center text-[48px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[1] font-bold uppercase tracking-[-0.02em] font-heading text-white">
          {"TEJA OGGU".split("").map((char, idx) => (
            <motion.span
              key={idx}
              custom={idx + 1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-block origin-bottom-left"
              style={{ paddingRight: char === ' ' ? '1rem' : '0' }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <div className="mt-2 md:mt-4 h-[30px] md:h-[40px] flex items-center justify-center overflow-hidden relative w-full">
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.h2
                key={currentRole}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={subtitleVariants}
                className="absolute text-[16px] md:text-[20px] leading-[1.2] font-normal italic tracking-[0.05em] font-instrument-serif text-white/70 whitespace-nowrap"
              >
                {roles[currentRole]}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
