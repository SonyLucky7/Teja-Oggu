"use client";

import { motion } from "framer-motion";
import { Briefcase, Activity, Target, Megaphone, Code, BrainCircuit } from "lucide-react";

const milestones = [
  {
    title: "Healthcare & Pharmacy Discipline",
    description: "3 Years Professional Pharmacy Experience • Precision, compliance & clinical operations",
    icon: <Activity className="w-6 h-6 text-indigo-400" />,
    date: "3 Years Discipline",
  },
  {
    title: "Financial Markets & Quantitative Trading",
    description: "5+ Years Active Market Practice • Technical price action, risk management & algorithmic strategy",
    icon: <Target className="w-6 h-6 text-purple-400" />,
    date: "5+ Years Trading",
  },
  {
    title: "Competitive Gaming & Esports Strategy",
    description: "Player HAC (UID: 55604445176) • 5-Finger Claw & Full Gyroscope • High-stakes scrims & tournament finals",
    icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
    date: "6+ Years Strategy",
  },
  {
    title: "Digital Marketing & Growth Systems",
    description: "Digital Bros Studio • Organic reach, influencer pipeline funnels & conversion architecture",
    icon: <Megaphone className="w-6 h-6 text-purple-400" />,
    date: "Digital Bros Studio",
  },
  {
    title: "Full-Stack Software Engineering",
    description: "Next.js 16, React 19, TypeScript, PostgreSQL, Prisma ORM, Serverless Microservices",
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    date: "Production Engineering",
  },
  {
    title: "AI Product Architecture & Systems",
    description: "Gemini AI Multi-Model Integration, Automated CRMs, Autonomous Agent Workflows & DRM Platforms",
    icon: <Briefcase className="w-6 h-6 text-purple-400" />,
    date: "Current Focus & Future",
  },
];

export default function Journey() {
  return (
    <section id="Experience" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            Experience & Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The evolutionary path that shaped my engineering mindset.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent rounded-full opacity-30 hidden md:block"></div>

          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-5/12 mb-6 md:mb-0 hidden md:block"></div>

                <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#030014] border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] mb-6 md:mb-0 relative mx-auto md:mx-0">
                  {milestone.icon}
                  <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/20"></div>
                </div>

                <div className="w-full md:w-5/12">
                  <div className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="inline-block px-3 py-1 mb-4 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-semibold">
                      {milestone.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
