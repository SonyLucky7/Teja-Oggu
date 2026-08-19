'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  }

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#030306]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8A8A8A]">CREDENTIALS</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {education.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden group hover:border-white/[0.15] transition-all duration-500"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/[0.2] rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/[0.2] rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full text-[10px] font-mono text-white/50 flex items-center gap-2">
                  <Award className="w-3 h-3 text-[#3B82F6]" />
                  Verified
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-white/90 mb-2">
                  {item.level}
                </h3>
                <p className="text-base text-white/60">
                  {item.institution}
                </p>
                {item.details && (
                  <div className="mt-6 pt-6 border-t border-white/[0.05]">
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
                      {item.details}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
