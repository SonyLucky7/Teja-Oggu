'use client'

import { motion } from 'framer-motion'
import { selectedWork } from '@/data/projects'
import Link from 'next/link'

export default function SelectedWork() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#030306] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#030306]/50 to-[#030306] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-12 h-[1px] bg-[#00F0FF]/50"></span>
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[#00F0FF]">
            SELECTED ARCHIVE
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {selectedWork?.map((work: any, index: number) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="h-full"
            >
              <Link
                href={work.url || work.link || work.github || '#'}
                target="_blank"
                data-cursor="pointer"
                className="group relative h-full flex flex-col bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-2xl p-8 overflow-hidden hover:border-[#3B82F6]/40 transition-colors duration-500"
              >
                {/* Hover Sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/0 via-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full">
                      <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                        {work.category || 'PROJECT'}
                      </span>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/30 transition-all duration-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-zinc-100 group-hover:text-[#3B82F6] transition-colors mb-3">
                    {work.title || work.name}
                  </h3>
                  
                  {work.description && (
                    <p className="text-sm text-zinc-400 leading-relaxed font-light mt-auto">
                      {work.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
