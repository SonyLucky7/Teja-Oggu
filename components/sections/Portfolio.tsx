"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

const featuredProjects = [
  {
    id: 1,
    title: "Marketing AI CRM",
    client: "Marketing Agency",
    services: ["SaaS", "Influencer CRM", "AI Outreach"],
    description: "AI-powered multi-channel influencer discovery and CRM platform for creator discovery, profile analysis, contact management, and personalized outreach.",
    link: "https://marketing-ai-crm.vercel.app/",
    github: "https://github.com/SonyLucky7/marketing-ai-crm",
    image: "/marketing-ai-preview.png"
  },
  {
    id: 2,
    title: "TradeOS AI",
    client: "Trading Intelligence",
    services: ["AI Models", "Market Analysis", "Real-Time"],
    description: "AI-powered trading intelligence platform for market-moving news, event analysis, alerts, and AI-assisted market research across Crypto, Forex, and Indian Stock Markets.",
    link: "https://trading-os-ai-news-aanalyser.vercel.app/",
    github: "https://github.com/SonyLucky7/tradingOS-AI-News-Aanalyser-",
    image: "/tradeos-preview.png"
  },
  {
    id: 3,
    title: "Digital Bro'S",
    client: "Digital Marketplace",
    services: ["Next.js", "Payment Gateway", "Affiliate System"],
    description: "Full-stack digital marketplace for digital products, subscriptions, AI tools, portfolio services, and digital offerings.",
    link: "https://digitalbros.qzz.io/",
    github: "https://github.com/SonyLucky7/digital-bros",
    image: "/digitalbros-preview.png"
  },
  {
    id: 4,
    title: "Digital Bros Studio",
    client: "Digital Agency",
    services: ["Agency", "Marketing", "Web Development", "AI Solutions"],
    description: "Professional digital agency website showcasing digital marketing, graphic design, video editing, social media marketing, paid advertising, automation, web development, and AI-powered solutions.",
    link: "https://digital-bros-studio.vercel.app/",
    image: "/digitalbros-preview.png"
  },
  {
    id: 5,
    title: "LicenseHub",
    client: "Software Licensing",
    services: ["Multi-Tenant", "DRM", "Hardware ID", "APIs"],
    description: "Multi-tenant software licensing platform for license creation, validation, subscription management, hardware-bound licensing, APIs, sandbox tools, and documentation.",
    link: "",
    image: "/licensehub-preview.png"
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]" ref={containerRef}>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-8 overflow-hidden">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading leading-[0.9] flex flex-col">
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 60, damping: 15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              SELECTED
            </motion.span>
            <motion.span
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-black/30"
            >
              WORK
            </motion.span>
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/3 text-lg font-bold"
          >
            Flagship SaaS platforms, marketplace systems, and AI-engineered applications.
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 relative">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={featuredProjects.length} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // 3D tilt on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <div 
      className="sticky top-28 mb-12 md:mb-24 flex items-center justify-center w-full"
      style={{ zIndex: index, top: `calc(90px + ${index * 32}px)` }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale, opacity, rotateX, rotateY, transformPerspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full relative"
      >
        <div 
          className="w-full border-2 border-black bg-[#EBEBEB] flex flex-col justify-between p-6 md:p-10 shadow-[8px_8px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] transition-shadow duration-300 group"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-black/20 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-black bg-white px-2 py-0.5 border border-black">
                  0{index + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-black/50">
                  {project.client}
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                {project.title}
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 font-mono font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition-colors shadow-[2px_2px_0_0_#000]"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 bg-black/10 text-black/70 px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider border border-black/20">
                  In Development
                </span>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-2.5 font-mono font-bold text-xs uppercase tracking-wider border border-black hover:bg-black/5 transition-colors shadow-[2px_2px_0_0_#000]"
                >
                  <GithubIcon className="w-4 h-4 fill-black" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-black/70 text-sm md:text-base leading-relaxed my-4 font-body">
            {project.description}
          </p>
          
          <div className="flex-grow flex items-center justify-center w-full relative my-4 min-h-[260px] md:min-h-[460px]">
            {project.image ? (
              <a 
                href={project.link || "#"} 
                target={project.link ? "_blank" : "_self"} 
                rel="noopener noreferrer" 
                className="relative w-full h-full block border-2 border-black overflow-hidden group/img cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover/img:grayscale-0 transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-black text-white px-6 py-2.5 font-bold uppercase tracking-widest text-xs opacity-0 group-hover/img:opacity-100 transform translate-y-3 group-hover/img:translate-y-0 transition-all duration-300">
                    {project.link ? "Visit Platform ↗" : "Preview Platform"}
                  </span>
                </div>
              </a>
            ) : (
              <div className="text-black/20 font-black text-3xl uppercase tracking-widest">[ PROJECT VISUAL ]</div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-5 border-t border-black/20 gap-4">
            <div className="flex flex-wrap gap-2">
              {project.services.map((service: string, i: number) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold uppercase tracking-widest border border-black text-black px-3 py-1 bg-white shadow-[2px_2px_0_0_#000]"
                >
                  {service}
                </motion.span>
              ))}
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/60">
              FEATURED PRODUCT 0{index + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
