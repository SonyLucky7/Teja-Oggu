import React from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span 
      className={cn(
        "inline-flex items-center justify-center px-3 py-1.5",
        "border border-border rounded-full",
        "text-xs font-mono text-muted",
        "transition-colors duration-300",
        "hover:text-foreground hover:border-accent/30",
        className
      )}
    >
      {name}
    </span>
  );
}
