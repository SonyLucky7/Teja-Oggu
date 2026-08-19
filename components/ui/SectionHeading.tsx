'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | string[];
  className?: string;
}

export default function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const titles = Array.isArray(title) ? title : [title];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    },
  };

  const fallbackVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const variants = prefersReducedMotion ? fallbackVariants : itemVariants;

  return (
    <motion.div 
      className={cn("flex flex-col", className)}
      variants={prefersReducedMotion ? fallbackVariants : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {eyebrow && (
        <motion.span 
          variants={variants}
          className="uppercase text-sm font-mono text-accent tracking-widest mb-4 block"
        >
          {eyebrow}
        </motion.span>
      )}
      <div className="flex flex-col">
        {titles.map((line, i) => (
          <motion.h2 
            key={i}
            variants={variants}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground"
          >
            {line}
          </motion.h2>
        ))}
      </div>
    </motion.div>
  );
}
