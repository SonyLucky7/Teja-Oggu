"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-black py-12 md:py-16 border-t border-black/10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-black uppercase tracking-tighter font-heading">
            TEJA OGGU
          </h2>
          <p className="text-black/50 font-mono text-xs uppercase tracking-widest">
            AI-AUGMENTED FULL-STACK DEVELOPER
          </p>
        </div>

        <div className="text-black/40 font-mono text-xs uppercase tracking-widest text-center md:text-right">
          &copy; {currentYear} ALL RIGHTS RESERVED.<br/>
          BUILT FOR REALITY.
        </div>

      </div>
    </footer>
  );
}
