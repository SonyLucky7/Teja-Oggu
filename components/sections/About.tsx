'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, TrendingUp, Gamepad2, MapPin, Calendar, Code2 } from 'lucide-react';

export default function About() {
  const stats = [
    {
      title: 'DISCIPLINE & HEALTHCARE',
      value: '3 Years',
      subtitle: 'Pharmacy Experience',
      desc: 'Strong work ethic, attention to detail, precision',
      icon: <HeartPulse className="w-6 h-6 text-purple-400" />,
    },
    {
      title: 'MARKET INTELLIGENCE',
      value: '5+ Years',
      subtitle: 'Trading & Financial Analysis',
      desc: 'Risk management, price action, quantitative thinking',
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    },
    {
      title: 'TACTICAL STRATEGY',
      value: '6+ Years',
      subtitle: 'Gaming & Esports (HAC)',
      desc: 'UID: 55604445176 • 5-Finger Claw + Full Gyroscope',
      icon: <Gamepad2 className="w-6 h-6 text-indigo-400" />,
    },
  ];

  return (
    <section id="About" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-purple-500/20 blur-[128px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming complex challenges into scalable, elegant digital solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#030014]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-purple-400/80 mb-1">
                    {stat.title}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-300 mb-2">
                {stat.subtitle}
              </div>
              <div className="text-xs text-gray-500">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#030014]/60 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden mt-12"
        >
          {/* Internal ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[64px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Hello! I&apos;m <strong className="text-white">Teja Oggu</strong>, a 21-year-old Full-Stack Developer based in Hyderabad, India. 
                My journey into tech is unconventional—spanning healthcare, financial trading, and competitive gaming. 
                This diverse background has shaped my approach to software engineering: combining the precision of pharmacy, 
                the analytical rigor of market trading, and the tactical execution of esports.
              </p>
              <p>
                Today, I specialize in crafting scalable SaaS products, intelligent CRM systems, and AI-powered applications. 
                Whether it&apos;s integrating complex APIs, architecting backend services, or building fluid, modern user interfaces, 
                I thrive on solving difficult problems and turning abstract ideas into robust digital realities.
              </p>
            </div>
            
            <div className="flex flex-col justify-center gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-purple-400"><Code2 className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-gray-500">Name</div>
                    <div className="text-sm font-semibold text-gray-200">Teja Oggu</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-blue-400"><Calendar className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-gray-500">Age / DOB</div>
                    <div className="text-sm font-semibold text-gray-200">21 • 01 Jan 2005</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-indigo-400"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    <div className="text-sm font-semibold text-gray-200">Hyderabad, India</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-purple-400"><TrendingUp className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs text-gray-500">Focus</div>
                    <div className="text-sm font-semibold text-gray-200">SaaS • CRM • AI • APIs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
