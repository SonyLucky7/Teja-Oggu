'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const steps = [
  { num: '01', title: 'DISCOVER', desc: 'Understanding requirements, target audience, and business goals to define the project scope.', status: 'ANALYZING', color: '#00F0FF' },
  { num: '02', title: 'ARCHITECT', desc: 'Designing scalable system architecture, choosing the right tech stack, and planning databases.', status: 'DRAFTING', color: '#8B5CF6' },
  { num: '03', title: 'BUILD', desc: 'Developing robust frontend and backend solutions with clean, maintainable code.', status: 'COMPILING', color: '#3B82F6' },
  { num: '04', title: 'INTEGRATE', desc: 'Connecting APIs, third-party services, and AI models to enhance functionality.', status: 'SYNCING', color: '#10B981' },
  { num: '05', title: 'SECURE', desc: 'Implementing authentication, authorization, and best security practices.', status: 'ENCRYPTING', color: '#F59E0B' },
  { num: '06', title: 'DEPLOY', desc: 'Setting up CI/CD pipelines, hosting, and monitoring for seamless production release.', status: 'LIVE', color: '#EF4444' },
]

function SpotlightCard({ children, color }: { children: React.ReactNode, color: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}15, transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

export default function WhatIBuild() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-[#030306] overflow-hidden">
      {/* Ambient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8B5CF6] drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
            METHODOLOGY
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent pb-2">
            ENGINEERING PROCESS.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard color={step.color}>
                {/* Mock UI Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05] bg-black/40">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-red-500 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-yellow-500 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-green-500 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px_currentColor]" style={{ backgroundColor: step.color, color: step.color }} />
                    <span className="text-[9px] font-mono tracking-wider text-zinc-400 uppercase">
                      {step.status}
                    </span>
                  </div>
                </div>

                <div className="relative p-8 pb-12">
                  {/* Watermark Number */}
                  <div 
                    className="absolute -right-4 -bottom-4 text-[120px] font-heading font-black opacity-[0.03] leading-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500" 
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </div>
                  
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.08] mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500"
                  >
                    <span className="text-lg font-mono font-bold drop-shadow-[0_0_8px_currentColor]" style={{ color: step.color }}>
                      {step.num}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed relative z-10">
                    {step.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                    <div className="w-1.5 h-1.5 rounded-sm rotate-45 border border-white/[0.2] shadow-[0_0_5px_currentColor]" style={{ borderColor: step.color, color: step.color }} />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
