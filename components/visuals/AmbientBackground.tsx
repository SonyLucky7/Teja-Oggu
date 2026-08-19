"use client";

import React, { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 1,
      d: Math.random() * 5 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030306]">
      {/* Perspective Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        style={{
          transform: "perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
          transformOrigin: "top center",
        }}
      />

      {/* Breathing Auroras */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#00F0FF] opacity-[0.15] blur-[120px] mix-blend-screen animate-float-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#8B5CF6] opacity-[0.12] blur-[130px] mix-blend-screen animate-float-slower" />
      <div className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-[#3B82F6] opacity-[0.1] blur-[100px] mix-blend-screen animate-float" />

      {/* Celestial Micro-stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.s}px`,
              height: `${star.s}px`,
              animationDuration: `${star.d}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Top/Bottom Vignette Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030306] via-transparent to-[#030306] opacity-80" />
    </div>
  );
}
