'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { techStack } from '@/data/skills'
import { Code2, Server, Database, BrainCircuit, ShieldCheck, Webhook, Cloud } from 'lucide-react'

const iconMap: Record<string, any> = {
  'Frontend': Code2,
  'Backend': Server,
  'Database': Database,
  'AI & Models': BrainCircuit,
  'Auth & Security': ShieldCheck,
  'APIs': Webhook,
  'Cloud & DevOps': Cloud,
}

export default function TechStack() {
  const categories = techStack?.map((cat: any) => cat.category) || []
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Frontend')
  const activeSkills = techStack?.find((c: any) => c.category === activeCategory)?.skills || []
  const ActiveIcon = iconMap[activeCategory] || Code2

  const stats = [
    { label: 'FOCUS DOMAINS', value: '7' },
    { label: 'PRODUCTION TECHNOLOGIES', value: '40+' },
    { label: 'TYPE-SAFE ARCHITECTURE', value: '100%' }
  ]

  return (
    <section id="stack" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-[#030306] overflow-hidden">
      {/* Ambient Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Perspective Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
            SYSTEM CAPABILITIES
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent pb-2">
            TECHNICAL ARSENAL.
          </h2>
        </motion.div>

        {/* Category Selector */}
        <div className="mt-16 flex flex-wrap gap-4">
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-6 py-3 text-xs font-mono uppercase tracking-[0.1em] rounded-xl cursor-pointer transition-all duration-300 group"
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.12] rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(0,240,255,0.3)] backdrop-blur-2xl"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={cn(
                "relative z-10 transition-colors duration-300",
                activeCategory === category 
                  ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                  : "text-zinc-500 hover:text-zinc-300"
              )}>
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Category Showcase */}
        <div className="mt-12 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <ActiveIcon size={24} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white tracking-wide">
                  {activeCategory}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {activeSkills.map((skill: any, index: number) => (
                  <motion.div
                    key={skill.name || skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative px-6 py-4 rounded-xl border border-white/[0.05] bg-black/50 hover:bg-black/80 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 text-sm font-mono text-zinc-400 group-hover:text-[#00F0FF] group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all duration-300">
                      {skill.name || skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient Stats Banner */}
        <div className="mt-24 p-1 rounded-2xl bg-gradient-to-r from-white/[0.1] via-white/[0.05] to-white/[0.1] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/20 via-[#3B82F6]/20 to-[#8B5CF6]/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 bg-[#030306] p-8 md:p-12 rounded-xl border border-white/[0.05]">
            {stats.map((stat, i, arr) => (
              <div key={stat.label} className="flex-1 flex flex-col items-center justify-center relative w-full">
                <div className="text-3xl md:text-5xl font-heading font-bold bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-[#00F0FF] mt-3 uppercase tracking-[0.2em] text-center drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                  {stat.label}
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/[0.15] to-transparent" />
                )}
                {i < arr.length - 1 && (
                  <div className="md:hidden mt-8 w-16 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
