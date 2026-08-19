'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { featuredProjects, experimentalProjects } from '@/data/projects'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Activity, 
  Radio, 
  Lock,
  ArrowUpRight
} from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLElement>(null)
  
  return (
    <section 
      id="work" 
      ref={containerRef}
      className="py-32 md:py-48 px-6 md:px-12 lg:px-16 relative z-10"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            FLAGSHIP ARCHITECTURE & ENGINEERING
          </motion.div>

          <div className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-[-0.03em] leading-[1.05]">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
                className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
              >
                FEATURED
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 }}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent"
              >
                PRODUCTION SYSTEMS.
              </motion.div>
            </div>
          </div>
        </div>

        {/* PROJECT SHOWCASE LIST */}
        <div className="flex flex-col gap-24 md:gap-36">
          {featuredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* LEFT COLUMN: PROJECT DETAILS */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 tracking-[0.2em]">
                      0{index + 1} //
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      {project.status === 'live' ? 'LIVE DEPLOYMENT' : 'SYSTEM ARCHITECTURE'}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white mt-4">
                    {project.title}
                  </h3>

                  {project.tagline && (
                    <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mt-2">
                      {project.tagline}
                    </p>
                  )}

                  <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] w-fit">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-mono text-zinc-300">
                      {project.role}
                    </span>
                  </div>

                  <p className="text-zinc-400 mt-6 text-base md:text-lg leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Key Features Bullet Grid */}
                  {project.features && (
                    <div className="mt-6 grid grid-cols-1 gap-2.5">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-cyan-500/40 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-10 flex flex-wrap gap-4 items-center">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="pointer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-mono uppercase tracking-[0.15em] font-medium shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300"
                      >
                        <span>LAUNCH PLATFORM</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="pointer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.15] bg-white/[0.03] text-zinc-200 text-xs font-mono uppercase tracking-[0.15em] hover:bg-white/[0.08] hover:border-white/[0.3] transition-all duration-300"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* RIGHT COLUMN: HIGH-FIDELITY SIMULATED BROWSER / PRODUCT PREVIEW */}
                <div className="lg:col-span-7">
                  <SpotlightCard 
                    className="p-0 border-white/[0.12] bg-[#0A0C14]/90"
                    spotlightColor="rgba(0, 240, 255, 0.15)"
                    borderGlow="rgba(59, 130, 246, 0.4)"
                  >
                    {/* macOS Browser Chrome */}
                    <div className="px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>

                      {/* Mock URL Bar */}
                      <div className="px-4 py-1 rounded-full bg-black/40 border border-white/[0.06] text-[11px] font-mono text-zinc-400 flex items-center gap-2 max-w-[280px] truncate">
                        <Lock className="w-3 h-3 text-cyan-400" />
                        <span className="text-zinc-300 truncate">
                          {project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.id}.systems.internal`}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider hidden sm:inline">LIVE</span>
                      </div>
                    </div>

                    {/* Interactive UI Mockup Interior */}
                    <div className="p-6 md:p-8 min-h-[360px] flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#0c0e18] via-[#080910] to-[#040508]">
                      {/* Ambient Grid Lines in Dashboard */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                      {/* Top Metric Strip */}
                      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {project.metrics?.map((m, mIdx) => (
                          <div key={mIdx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                              {m.label}
                            </span>
                            <span className="text-xl md:text-2xl font-heading font-bold text-white mt-1 block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Custom Simulated Visual per Project */}
                      {project.id === 'marketing-ai' && (
                        <div className="relative z-10 my-6 p-5 rounded-2xl bg-black/40 border border-cyan-500/20 backdrop-blur-md">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                              <span className="text-xs font-mono text-cyan-300 font-medium uppercase">Active Outreach Pipeline</span>
                            </div>
                            <span className="text-[11px] font-mono text-zinc-400">Gemini 1.5 Flash • Meta Graph</span>
                          </div>
                          
                          <div className="space-y-2.5">
                            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs font-mono">
                              <span className="text-zinc-300">@techcreator_pro • 240K Reach</span>
                              <span className="text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">AI Extracted & Emailed</span>
                            </div>
                            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs font-mono">
                              <span className="text-zinc-300">@dev_insights • 95K Reach</span>
                              <span className="text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">Awaiting Response</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'tradeos-ai' && (
                        <div className="relative z-10 my-6 p-5 rounded-2xl bg-black/40 border border-blue-500/20 backdrop-blur-md">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-blue-400" />
                              <span className="text-xs font-mono text-blue-300 font-medium uppercase">Live Multi-Market Signals</span>
                            </div>
                            <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">SENTIMENT: BULLISH 94%</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono mt-3">
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                              <span className="text-zinc-400 block text-[10px]">BTC/USD</span>
                              <span className="text-emerald-400 font-bold mt-0.5 block">+5.84% ?</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                              <span className="text-zinc-400 block text-[10px]">NIFTY 50</span>
                              <span className="text-emerald-400 font-bold mt-0.5 block">+1.22% ?</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                              <span className="text-zinc-400 block text-[10px]">EUR/USD</span>
                              <span className="text-cyan-400 font-bold mt-0.5 block">1.0842</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'digital-bros' && (
                        <div className="relative z-10 my-6 p-5 rounded-2xl bg-black/40 border border-purple-500/20 backdrop-blur-md">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-purple-400" />
                              <span className="text-xs font-mono text-purple-300 font-medium uppercase">Secured Gateway & 2FA</span>
                            </div>
                            <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Razorpay • TOTP</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono">
                            <span className="text-zinc-300">48 API Micro-routes</span>
                            <span className="text-emerald-400">Active High-Availability</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'licensehub' && (
                        <div className="relative z-10 my-6 p-5 rounded-2xl bg-black/40 border border-indigo-500/20 backdrop-blur-md">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Terminal className="w-4 h-4 text-indigo-400" />
                              <span className="text-xs font-mono text-indigo-300 font-medium uppercase">Hardware DRM Validator</span>
                            </div>
                            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">ONLINE</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-zinc-300 flex justify-between">
                            <span>HWID-SHA256: 8F2A-99B1-C4E2</span>
                            <span className="text-cyan-400">Authenticated (1/1 Seat)</span>
                          </div>
                        </div>
                      )}

                      {/* Bottom Visual Watermark */}
                      <div className="relative z-10 flex justify-between items-center pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                        <span>ARCHITECTURE ENGINE v2.4</span>
                        <span className="text-cyan-400/80">TEJA OGGU LABS</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* EXPERIMENTAL R&D INITIATIVES */}
        {experimentalProjects && experimentalProjects.length > 0 && (
          <div className="mt-36">
            <div className="flex items-center gap-2 mb-12">
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
                ACTIVE R&D & EXPERIMENTAL INITIATIVES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experimentalProjects.map((exp, idx) => (
                <SpotlightCard
                  key={exp.id}
                  className="p-8 md:p-10 border-white/[0.08] bg-[#0A0C14]/70"
                  spotlightColor="rgba(59, 130, 246, 0.12)"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                      IN R&D PHASE
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      SYS-0{idx + 5}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {exp.title}
                  </h4>

                  <div className="text-xs font-mono text-cyan-400 mt-2">
                    {exp.role}
                  </div>

                  <p className="text-sm md:text-base text-zinc-400 mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.features && (
                    <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-2">
                      {exp.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}