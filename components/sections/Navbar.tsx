"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: isScrolled ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-[#F9F9F9]/80 backdrop-blur-xl backdrop-saturate-150 border-black/10 py-4 shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-black font-heading tracking-tighter group">
          <span className="text-black group-hover:text-black/70 transition-colors duration-300">TEJA</span>
          <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">OGGU</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-sm font-bold tracking-widest uppercase text-black/70 hover:text-black transition-colors duration-300 group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
          <motion.a 
            href="#contact" 
            className="bg-black text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest"
            whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            LET'S TALK
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <motion.button 
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#F9F9F9]/95 backdrop-blur-xl border-b border-black/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold tracking-widest uppercase text-black"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                >
                  {link.name}
                </motion.a>
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
    </motion.header>
  );
}
