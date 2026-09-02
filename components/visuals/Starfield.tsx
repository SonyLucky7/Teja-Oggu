"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const isMobile = width < 768;
    const numParticles = isMobile ? 60 : 150;
    const connectionDistance = isMobile ? 100 : 140;
    const mouseRadius = isMobile ? 80 : 160;

    const colors = [
      'rgba(96, 165, 250,',
      'rgba(139, 92, 246,',
      'rgba(59, 130, 246,',
      'rgba(34, 211, 238,',
      'rgba(167, 139, 250,',
      'rgba(255, 255, 255,',
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x, y,
        baseX: x, baseY: y,
        z: Math.random() * 3 + 0.5,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      const offsetX = (mouseX - width / 2) * 0.03;
      const offsetY = (mouseY - height / 2) * 0.03;

      for (const p of particles) {
        p.alpha = 0.3 + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.3;
        p.x += p.vx;
        p.y += p.vy;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          p.x += (dx / dist) * force * force * 3;
          p.y += (dy / dist) * force * force * 3;
        }

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const ax = a.x - offsetX * a.z;
        const ay = a.y - offsetY * a.z;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const bx = b.x - offsetX * b.z;
          const by = b.y - offsetY * b.z;
          const ddx = ax - bx;
          const ddy = ay - by;
          const distance = Math.sqrt(ddx * ddx + ddy * ddy);

          if (distance < connectionDistance) {
            const lineAlpha = (1 - distance / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }

        // Connection to mouse
        const mouseDx = ax - mouseX;
        const mouseDy = ay - mouseY;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDist < mouseRadius * 1.5) {
          const lineAlpha = (1 - mouseDist / (mouseRadius * 1.5)) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(ax, ay);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      // Draw particles with glow
      for (const p of particles) {
        const renderX = p.x - offsetX * p.z;
        const renderY = p.y - offsetY * p.z;
        const clampedAlpha = Math.max(0, Math.min(1, p.alpha));

        if (p.radius > 1.2) {
          const gradient = ctx.createRadialGradient(renderX, renderY, 0, renderX, renderY, p.radius * 4);
          gradient.addColorStop(0, `${p.color} ${clampedAlpha * 0.4})`);
          gradient.addColorStop(1, `${p.color} 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(renderX, renderY, p.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `${p.color} ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(renderX, renderY, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-[1] pointer-events-none"
    />
  );
}
