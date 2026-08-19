"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, Terminal, Database, Cpu } from "lucide-react";

const typewriterPhrases = [
  "SaaS Product Architect",
  "AI Integration Specialist",
  "Full-Stack Engineer",
  "CRM & Automation Builder",
  "High-Performance APIs Developer",
];

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "PostgreSQL",
  "Google Gemini AI",
  "Tailwind CSS",
  "Node.js",
];

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = typewriterPhrases[currentPhraseIndex];
      
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <section id="Home" className="min-h-screen relative flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background space elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-purple-500/30 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-xs font-mono inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent block pb-2">
                  AI-Augmented
                </span>
                <span className="text-white relative">
                  Full Stack Developer
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full opacity-50"></div>
                </span>
              </h1>

              <div className="h-8 sm:h-10 text-xl sm:text-2xl font-medium text-gray-300 flex items-center">
                <span>{displayText}</span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] inline-block ml-1 animate-pulse"></span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              Enhancing digital experiences that are smooth, scalable, and engineered to impress. Specializing in SaaS, CRM, AI integration, and full-stack systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 max-w-xl"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                href="#Portofolio"
                className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] px-7 py-3.5 rounded-xl text-white font-medium text-sm flex items-center gap-2 transition-all duration-300"
              >
                Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#Contact"
                className="border border-white/10 bg-white/5 hover:bg-white/10 px-7 py-3.5 rounded-xl text-white font-medium text-sm flex items-center gap-2 transition-all duration-300"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Right Column (Holographic Visual Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full lg:w-1/2 relative hidden lg:block"
          >
            <div className="bg-[#030014]/60 border border-purple-500/20 rounded-3xl p-6 shadow-[0_0_50px_rgba(99,102,241,0.15)] relative overflow-hidden backdrop-blur-xl group">
              
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-gray-500 flex-1 text-center pr-10">
                  teja-oggu@workspace:~
                </span>
              </div>

              {/* Terminal Output */}
              <div className="font-mono text-sm space-y-3 text-gray-400">
                <div className="flex gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">bun run init-ai-engine</span>
                </div>
                <div className="text-gray-500 animate-pulse">Initializing multi-model Gemini AI core...</div>
                <div className="text-purple-400">[SUCCESS] AI engine operational.</div>
                
                <div className="flex gap-2 mt-4">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">connect-db aiven-postgres</span>
                </div>
                <div className="text-green-400">[CONNECTED] PostgreSQL connection established.</div>

                <div className="flex gap-2 mt-4">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">start-microservices</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center gap-2 text-xs bg-white/5 p-2 rounded">
                    <Database className="w-3 h-3 text-blue-400" /> DB Pool Active
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-white/5 p-2 rounded">
                    <Cpu className="w-3 h-3 text-purple-400" /> AI Router OK
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-white/5 p-2 rounded">
                    <Terminal className="w-3 h-3 text-green-400" /> API Gateway OK
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-20 bg-[#030014]/80 border border-purple-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md hidden xl:block"
              >
                <div className="text-xs font-medium text-white flex items-center gap-2">
                  <span>⚡</span> 900+ Creators Outreach Engine
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 top-40 bg-[#030014]/80 border border-blue-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md hidden xl:block"
              >
                <div className="text-xs font-medium text-white flex items-center gap-2">
                  <span>🔒</span> Hardware ID DRM Platform
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -right-4 bottom-20 bg-[#030014]/80 border border-green-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md hidden xl:block"
              >
                <div className="text-xs font-medium text-white flex items-center gap-2">
                  <span>🤖</span> Multi-Model Gemini AI
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-10 -bottom-6 bg-[#030014]/80 border border-indigo-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md hidden xl:block z-20"
              >
                <div className="text-xs font-medium text-white flex items-center gap-2">
                  <span>🚀</span> 48 Production API Routes
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
