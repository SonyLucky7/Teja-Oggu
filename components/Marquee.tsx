"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';

export default function Marquee() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const directionFactor = useRef<number>(1);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -0.01 * delta; // Base speed

    // Add scroll velocity 
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="py-8 md:py-16 overflow-hidden bg-[#0A0A0A] border-y border-white/5 flex flex-col items-center justify-center">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div className="flex whitespace-nowrap text-[8vw] leading-none font-bold uppercase tracking-tighter font-heading text-white/5" style={{ x }}>
          <span className="mr-8">SAAS • CRM • AI INTEGRATION • AUTOMATION • APIS • FULL-STACK • SECURITY • DEPLOYMENT •</span>
          <span className="mr-8">SAAS • CRM • AI INTEGRATION • AUTOMATION • APIS • FULL-STACK • SECURITY • DEPLOYMENT •</span>
          <span className="mr-8">SAAS • CRM • AI INTEGRATION • AUTOMATION • APIS • FULL-STACK • SECURITY • DEPLOYMENT •</span>
          <span className="mr-8">SAAS • CRM • AI INTEGRATION • AUTOMATION • APIS • FULL-STACK • SECURITY • DEPLOYMENT •</span>
        </motion.div>
      </div>
    </section>
  );
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}
