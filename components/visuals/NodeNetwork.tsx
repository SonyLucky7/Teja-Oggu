'use client'
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface NodeNetworkProps {
  className?: string;
}

export default function NodeNetwork({ className }: NodeNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;
    
    let mouse = { x: width / 2, y: height / 2 };

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodesData = [
      { label: 'AI', angle: 0 },
      { label: 'Frontend', angle: Math.PI / 4 },
      { label: 'Backend', angle: Math.PI / 2 },
      { label: 'APIs', angle: (3 * Math.PI) / 4 },
      { label: 'Databases', angle: Math.PI },
      { label: 'Automation', angle: (5 * Math.PI) / 4 },
      { label: 'Security', angle: (3 * Math.PI) / 2 },
      { label: 'Deployment', angle: (7 * Math.PI) / 4 },
    ];

    const nodes = nodesData.map((data) => {
      const radius = Math.min(width, height) * 0.35;
      const baseX = width / 2 + Math.cos(data.angle) * radius;
      const baseY = height / 2 + Math.sin(data.angle) * radius;
      
      return {
        ...data,
        baseX,
        baseY,
        x: baseX,
        y: baseY,
        vx: 0,
        vy: 0,
        radius: 4 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      };
    });

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < Math.min(width, height) * 0.6) {
            const mx = (nodes[i].x + nodes[j].x) / 2;
            const my = (nodes[i].y + nodes[j].y) / 2;
            const mouseDist = Math.sqrt(Math.pow(mx - mouse.x, 2) + Math.pow(my - mouse.y, 2));
            
            const maxDist = 300;
            let opacity = 0.15;
            if (!isReducedMotion && mouseDist < maxDist) {
              opacity = 0.15 + (1 - mouseDist / maxDist) * 0.3;
            }

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        if (!isReducedMotion) {
          const dx = mouse.x - node.baseX;
          const dy = mouse.y - node.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 400;
          let targetX = node.baseX;
          let targetY = node.baseY;
          
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            targetX = node.baseX - dx * force * 0.1;
            targetY = node.baseY - dy * force * 0.1;
          }

          node.x += (targetX - node.x) * 0.1;
          node.y += (targetY - node.y) * 0.1;
        } else {
          node.x = node.baseX;
          node.y = node.baseY;
        }

        const pulse = isReducedMotion ? 1 : 1 + Math.sin(time / 1000 + node.phase) * 0.2;
        
        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#3B82F6';
        ctx.fill();

        // Text
        ctx.font = '10px monospace';
        ctx.fillStyle = '#8A8A8A';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + 16);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={cn('absolute inset-0 w-full h-full opacity-60 pointer-events-none', className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full hidden md:block"
      />
      {/* Mobile static fallback */}
      <div className="md:hidden absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
    </div>
  );
}
