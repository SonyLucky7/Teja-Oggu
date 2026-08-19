"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-black/15">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/20 pb-16 mb-8">
          
          <div className="md:col-span-8 flex flex-col justify-between">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading mb-4">
                Teja Oggu.
              </h2>
              <p className="text-xl md:text-2xl text-white/60 font-medium max-w-xl">
                AI-Augmented Full Stack Developer building scalable systems.
              </p>
            </div>
            <div className="mt-12 md:mt-0 font-mono text-xl font-bold uppercase tracking-widest">
              Hyderabad, India
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col justify-between gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6 font-mono">Navigation</h3>
              <ul className="flex flex-col gap-4 font-bold text-xl uppercase tracking-wider">
                <li><Link href="#portfolio" className="hover:text-white/60 transition-colors">Work</Link></li>
                <li><Link href="#about" className="hover:text-white/60 transition-colors">About</Link></li>
                <li><Link href="#journey" className="hover:text-white/60 transition-colors">Journey</Link></li>
                <li><Link href="#contact" className="hover:text-white/60 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <a 
              href="mailto:sonylucky46hac@gmail.com"
              className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-center hover:bg-white/80 transition-colors"
            >
              Start Project
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm text-white/40">
          <p>© {new Date().getFullYear()} Teja Oggu. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest">
            <span>Built with Next.js</span>
            <span>&</span>
            <span>Brutalism</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
