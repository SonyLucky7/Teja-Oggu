'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: string | string[];
  className?: string;
}

export default function TextReveal({ children, className }: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const lines = Array.isArray(children) ? children : [children];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Custom easing for elegant reveal
      },
    },
  };

  const fallbackVariants = {
    hidden: { opacity: 1, y: "0%" },
    visible: { opacity: 1, y: "0%" },
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
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div variants={variants}>
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
