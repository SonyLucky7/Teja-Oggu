'use client'

import { motion } from 'framer-motion'
import { digitalMarketingSkills } from '@/data/experience'
import { ExternalLink, Target } from 'lucide-react'

export default function DigitalMarketing() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#030306] relative">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[120px] -translate-y-1/2 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8A8A8A]">BEYOND CODE</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-[-0.03em] leading-[1.1]"
            >
              <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent block">I DON'T JUST BUILD.</span>
              <span className="text-white/20 mt-2 block">I UNDERSTAND GROWTH.</span>
            </motion.h3>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8">
                  <Target className="w-6 h-6 text-[#00F0FF]" />
                </div>
                <p className="text-xl md:text-2xl text-white/70 leading-[1.6] font-light">
                  My experience in digital marketing helps me think beyond the code. I understand the connection between products, users, marketing, automation, and business growth.
                </p>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/[0.08]">
                <a 
                  href="https://digitalbrosstudio.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm font-mono text-[#00F0FF] hover:bg-white/[0.08] hover:border-[#00F0FF]/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 uppercase tracking-[0.1em] group"
                >
                  DIGITAL BROS STUDIO 
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-gradient-to-b from-[#00F0FF]/[0.05] to-transparent border border-[#00F0FF]/[0.08] shadow-[inset_0_1px_0_0_rgba(0,240,255,0.1)] backdrop-blur-2xl rounded-3xl p-8 md:p-10 h-full"
            >
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                Skill Stack
              </div>
              <div className="flex flex-wrap gap-3">
                {digitalMarketingSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/20 to-[#3B82F6]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center text-xs font-mono text-white/70 px-4 py-2 bg-black/40 border border-white/[0.08] rounded-full group-hover:border-[#00F0FF]/50 group-hover:text-white transition-all duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
