"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#portfolio' },
    { name: 'ABOUT', href: '#about' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-[#F9F9F9]/90 backdrop-blur-md border-black/10 py-4 shadow-sm' : 'bg-[#F9F9F9] border-black/10 py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-black font-heading tracking-tighter" data-cursor="pointer">
          <span className="text-black">TEJA</span>
          <span className="text-gray-400">OGGU</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors"
              data-cursor="pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-black text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors"
            data-cursor="pointer"
          >
            LET'S TALK
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F9F9F9] border-b border-black/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold tracking-widest uppercase text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-black text-white px-6 py-4 text-center text-sm font-bold uppercase tracking-widest mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                LET'S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
