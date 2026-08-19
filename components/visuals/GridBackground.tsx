import React from 'react';
import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none -z-10",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />
  );
}
