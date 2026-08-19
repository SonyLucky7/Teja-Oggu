'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer circle uses more damping for lag
  const outerX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const outerY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  // Inner dot follows tightly
  const innerX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.1 });
  const innerY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.1 });

  useEffect(() => {
    // Only mount on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setMounted(true);
      document.documentElement.classList.add('cursor-none');
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        setIsHovering(true);
        setHoverType(cursorTarget.getAttribute('data-cursor'));
      } else if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
        setHoverType('pointer');
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.classList.remove('cursor-none');
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full pointer-events-none z-[99]"
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovering && hoverType === 'view' ? 0 : 1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[99] flex items-center justify-center text-[10px] font-mono tracking-widest text-[#F5F5F5]"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoverType === 'view' ? 2.5 : hoverType === 'pointer' ? 1.5 : 1,
          backgroundColor: hoverType === 'view' ? 'rgba(59, 130, 246, 0.8)' : hoverType === 'pointer' ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
          borderColor: hoverType === 'view' ? 'rgba(59, 130, 246, 0)' : 'rgba(255, 255, 255, 0.2)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {hoverType === 'view' && <span className="opacity-100">VIEW</span>}
      </motion.div>
    </>
  );
}
