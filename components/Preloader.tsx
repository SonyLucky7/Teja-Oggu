'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Counter animation
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 150);

    // Timeout to unmount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const title = 'TEJA OGGU'.split(' ');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f5f5f5]"
        >
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 overflow-hidden mb-2 text-reveal">
              {title.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1] as const,
                    delay: idx * 0.1
                  }}
                  className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-[#111111] uppercase inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm font-mono text-[#555555] tracking-widest uppercase"
            >
              AI-Augmented Full-Stack Developer
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[80%] max-w-md flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm font-mono text-[#111111]">
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>
            <div className="h-[1px] w-full bg-black/10 overflow-hidden">
              <motion.div
                className="h-full bg-black"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
