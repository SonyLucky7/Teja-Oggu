'use client'

import { motion } from 'framer-motion'
import { LineChart, Gamepad2, ShieldAlert, Cpu } from 'lucide-react'

export default function Interests() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  }

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#030306] relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#8B5CF6]/5 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[120px] mix-blend-screen" />
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
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8A8A8A]">INTERESTS</span>
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
              <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent block">BEYOND</span>
              <span className="text-white/20 mt-2 block">DEVELOPMENT.</span>
            </motion.h3>
          </div>
        </header>

        <motion.div 
          className="grid lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* TRADING */}
          <motion.div variants={cardVariants} className="bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl rounded-3xl p-8 md:p-10 flex flex-col h-full group hover:border-[#3B82F6]/30 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 blur-[80px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 text-[#3B82F6]">
                <LineChart className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] mb-3">TRADING</h4>
              <h5 className="text-xl font-heading text-white/90">5+ years of learning and market practice</h5>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {['Market Analysis', 'Intraday Trading', 'Forex', 'Price Action', 'Risk Management', 'Trading Psychology', 'Strategy Development'].map(tag => (
                  <span key={tag} className="text-xs font-mono text-white/60 px-3 py-1.5 bg-black/40 border border-white/[0.08] rounded-full group-hover:border-white/[0.15] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* GAMING & ESPORTS */}
          <motion.div variants={cardVariants} className="bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-[#8B5CF6]/20 shadow-[inset_0_1px_0_0_rgba(139,92,246,0.2),0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl rounded-3xl p-8 md:p-10 flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 blur-[80px] -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#8B5CF6]">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full text-[10px] font-mono text-[#8B5CF6] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                  Telemetry Active
                </div>
              </div>

              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B5CF6] mb-3">GAMING & ESPORTS</h4>
              <h5 className="text-xl font-heading text-white/90">6+ years gaming • 3+ years esports</h5>
              
              <div className="mt-8 bg-black/40 border border-white/[0.08] rounded-2xl p-5 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Player</div>
                    <div className="text-sm font-medium text-white/90">HAC</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">UID</div>
                    <div className="text-sm font-mono text-[#8B5CF6]">55604445176</div>
                  </div>
                  <div className="col-span-2 border-t border-white/[0.05] pt-3 mt-1">
                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Setup Config</div>
                    <div className="text-sm font-medium text-white/90 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-white/40" />
                      5-Finger Claw / Full Gyro
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {['Competitive scrims', '50K & 100K finals', 'Tournament participation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-5 h-5 rounded flex items-center justify-center bg-white/[0.03] border border-white/[0.08]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                {[
                  { label: '@dkxio', url: '#' },
                  { label: '@bloodcore087', url: '#' },
                  { label: '@CarLabX7', url: '#' }
                ].map(link => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#8B5CF6] bg-[#8B5CF6]/5 px-3 py-1.5 rounded-md hover:bg-[#8B5CF6]/20 transition-colors border border-[#8B5CF6]/10">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CYBERSECURITY */}
          <motion.div variants={cardVariants} className="bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl rounded-3xl p-8 md:p-10 flex flex-col h-full group hover:border-[#00F0FF]/30 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 blur-[80px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 text-[#00F0FF]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-3">SECURITY</h4>
              <h5 className="text-xl font-heading text-white/90">Security-conscious development</h5>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {['App Security', 'Ethical Hacking', 'System Analysis', 'Bug Hunting', 'Security Tools', 'System Architecture'].map(tag => (
                  <span key={tag} className="text-xs font-mono text-white/60 px-3 py-1.5 bg-black/40 border border-white/[0.08] rounded-full group-hover:border-[#00F0FF]/30 transition-colors group-hover:text-[#00F0FF]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#00F0FF]/70">
                  <div className="w-1.5 h-1.5 bg-[#00F0FF] animate-pulse" />
                  EXPLORATION NODE ACTIVE
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
