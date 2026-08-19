'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} index={index} />
      ))}
    </div>
  );
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix if possible
  const match = metric.value.match(/^([\d.,]+)(.*)$/);
  const numberStr = match ? match[1].replace(/,/g, '') : null;
  const suffix = match ? match[2] : null;
  
  const isNumber = numberStr !== null && !isNaN(Number(numberStr));
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface border border-border rounded-xl p-6 flex flex-col justify-center"
    >
      <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
        {isNumber ? (
          <AnimatedNumber value={Number(numberStr)} />
        ) : (
          <span>{metric.value}</span>
        )}
        {isNumber && suffix && <span>{suffix}</span>}
      </div>
      <div className="text-xs font-mono text-muted uppercase tracking-wider mt-2">
        {metric.label}
      </div>
    </motion.div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing out cubic
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeOutProgress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);
  
  return <span ref={ref}>{count}</span>;
}
