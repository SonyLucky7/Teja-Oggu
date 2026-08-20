"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Huge background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap font-heading">
          TEJA OGGU
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10 pb-12">
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 font-heading">
                Build Beyond<br />Limits.
              </h3>
              <p className="text-white/60 max-w-sm font-body">
                AI-Augmented Full-Stack Developer creating robust, scalable, and intelligent systems.
              </p>
            </div>
            <div className="mt-8 font-mono text-xs uppercase tracking-widest text-white/40">
              Based in Hyderabad, India
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <nav className="flex flex-col gap-2 md:text-right font-mono uppercase tracking-widest text-sm">
              <a href="#about" className="hover:text-white/70 transition-colors">About</a>
              <a href="#stack" className="hover:text-white/70 transition-colors">Stack</a>
              <a href="#portfolio" className="hover:text-white/70 transition-colors">Work</a>
              <a href="#journey" className="hover:text-white/70 transition-colors">Journey</a>
            </nav>
            <div className="mt-8 md:text-right font-mono text-xs uppercase tracking-widest text-white/40">
              Available for Opportunities
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 font-mono text-xs uppercase tracking-widest text-white/40">
          <p>© {new Date().getFullYear()} Teja Oggu. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
