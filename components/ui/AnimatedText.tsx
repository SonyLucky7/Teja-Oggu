'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  wordLevel?: boolean;
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  as: Component = 'p',
  wordLevel = true,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const items = wordLevel ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: wordLevel ? 0.05 : 0.02,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 12, stiffness: 100 },
    },
  };

  const MotionComponent = motion(Component);

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block whitespace-pre"
        >
          {item}{wordLevel && index < items.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
