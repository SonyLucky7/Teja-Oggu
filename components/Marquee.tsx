"use client";

import React from 'react';

export default function Marquee() {
  const text = "SAAS • CRM • AI INTEGRATION • AUTOMATION • APIS • FULL-STACK • SECURITY • DEPLOYMENT • ";
  
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9] border-y border-black/10 py-6 md:py-10 flex">
      <div className="flex whitespace-nowrap animate-marquee group cursor-default">
        <span className="text-3xl md:text-5xl font-heading font-black tracking-tighter text-black/20 mx-4 group-hover:text-black/40 transition-colors duration-500">
          {text}
        </span>
        <span className="text-3xl md:text-5xl font-heading font-black tracking-tighter text-black/20 mx-4 group-hover:text-black/40 transition-colors duration-500">
          {text}
        </span>
        <span className="text-3xl md:text-5xl font-heading font-black tracking-tighter text-black/20 mx-4 group-hover:text-black/40 transition-colors duration-500">
          {text}
        </span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
