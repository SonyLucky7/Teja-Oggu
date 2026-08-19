'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0 to 1 typically
  direction?: 'up' | 'down';
}

export default function ParallaxWrapper({
  children,
  className,
  speed = 0.5,
  direction = 'up',
}: ParallaxWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = direction === 'up' ? 100 * speed : -100 * speed;
  
  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
