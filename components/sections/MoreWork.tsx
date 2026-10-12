"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Sparkles, TerminalSquare, Layers, Search, Play, Eye, X } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { allProjects, ProjectItem } from '@/data/projects';
import { GithubIcon } from '@/components/ui/SocialIcons';

const categories = [
  "All",
  "SaaS & AI",
  "Client & Business",
  "Portfolios",
  "Web Experiences",
  "Video Editing",
  "Graphic Design"
] as const;

type CategoryType = typeof categories[number];

const inDevelopment = [
  {
    title: "LUCY AI",
    type: "Personal AI Assistant & Creative Studio",
    desc: "Intelligent autonomous assistant for workflow automation, task orchestration, and AI-powered visual asset generation from text prompts.",
    status: "In Development",
    icon: <TerminalSquare className="w-6 h-6" />
  }
];

export default function MoreWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMedia, setActiveMedia] = useState<ProjectItem | null>(null);

  // Close media modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMedia(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="more-work" className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Production Catalog</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-heading">
              Project <span className="text-black/30">Archive</span>
            </h2>
          </div>
          <p className="md:w-1/3 text-sm md:text-base font-medium text-black/70 leading-relaxed">
            A comprehensive portfolio of {allProjects.length} deployed platforms, client solutions, video editing productions, and graphic design assets.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = cat === "All" ? allProjects.length : allProjects.filter(p => p.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border-2 border-black ${
                    isActive 
                      ? "bg-black text-white shadow-[4px_4px_0_0_#000]" 
                      : "bg-white text-black hover:bg-black/5 shadow-[2px_2px_0_0_#000]"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 text-[10px] rounded-sm ${isActive ? "bg-white text-black" : "bg-black/10 text-black"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
            <input
              type="text"
              placeholder="Search projects, tags, media..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border-2 border-black font-mono text-xs text-black placeholder:text-black/40 focus:outline-none focus:shadow-[4px_4px_0_0_#000] transition-shadow"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
                key={project.id}
                className="bg-white border-2 border-black p-6 flex flex-col justify-between shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div>
                  {/* Media Preview (For Video & Graphics) */}
                  {project.mediaUrl && (
                    <div 
                      onClick={() => setActiveMedia(project)}
                      className="relative w-full aspect-video bg-black/5 -mx-6 -mt-6 mb-5 overflow-hidden border-b-2 border-black cursor-pointer group/media"
                      style={{ width: 'calc(100% + 3rem)' }}
                    >
                      {project.mediaType === 'video' ? (
                        <>
                          <video
                            src={project.mediaUrl}
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/35 flex items-center justify-center group-hover/media:bg-black/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white text-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0_0_#000] group-hover/media:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-black ml-0.5" />
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-white/20">
                            Video Edit
                          </span>
                        </>
                      ) : (
                        <>
                          <img
                            src={project.mediaUrl}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/media:bg-black/20 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-all duration-300">
                            <div className="px-3 py-1.5 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center gap-1.5">
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Artwork</span>
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-white/20">
                            Graphic
                          </span>
                        </>
                      )}
                    </div>
                  )}

                  {/* Card Header: Category & Number */}
                  <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black bg-[#EAEAEA] px-2.5 py-1 border border-black/20">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-black/40">
                      #{String(allProjects.findIndex(p => p.id === project.id) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#3B82F6] transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-black/60 uppercase tracking-wider mb-4">
                    {project.type}
                  </p>

                  {/* Description */}
                  <p className="text-black/75 text-sm leading-relaxed mb-6 font-body">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-black/10">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono font-medium text-black/70 bg-[#F2F2F2] px-2 py-0.5 border border-black/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.mediaUrl ? (
                      <button
                        type="button"
                        onClick={() => setActiveMedia(project)}
                        className="inline-flex items-center gap-1.5 bg-black text-white px-3.5 py-2 font-mono font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition-colors shadow-[2px_2px_0_0_#000] cursor-pointer"
                      >
                        {project.mediaType === 'video' ? (
                          <>
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Watch Video</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Artwork</span>
                          </>
                        )}
                      </button>
                    ) : project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-black text-white px-3.5 py-2 font-mono font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition-colors shadow-[2px_2px_0_0_#000]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black/5 text-black/50 px-3 py-1.5 border border-black/20">
                        In Development
                      </span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white text-black px-3 py-2 font-mono font-bold text-xs uppercase tracking-wider border border-black hover:bg-black/5 transition-colors shadow-[2px_2px_0_0_#000]"
                        title="View Source on GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5 fill-black" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white border-2 border-black shadow-[4px_4px_0_0_#000]">
            <p className="font-mono text-base font-bold text-black/60">
              No projects found matching "{searchQuery}" in {selectedCategory}.
            </p>
          </div>
        )}

        {/* The Lab / R&D Section */}
        <div className="mt-20 pt-16 border-t border-black/10">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              The <span className="text-black/40">Lab</span> (Upcoming R&D)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inDevelopment.map((item, i) => (
              <div
                key={i}
                className="bg-white border-2 border-black p-6 md:p-8 relative overflow-hidden shadow-[6px_6px_0_0_#000]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-black p-2 bg-[#EAEAEA] border border-black inline-block">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold bg-[#EAEAEA] px-3 py-1 border border-black">
                    {item.status}
                  </span>
                </div>
                
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-1 text-black">
                  {item.title}
                </h4>
                <p className="text-xs font-mono uppercase tracking-widest text-black/50 mb-4 pb-3 border-b border-black/10">
                  {item.type}
                </p>
                <p className="text-black/75 leading-relaxed text-sm font-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Media Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMedia(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-2 border-black max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[12px_12px_0_0_#000] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b-2 border-black bg-[#FAFAFA]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black bg-[#EAEAEA] px-2.5 py-0.5 border border-black/20">
                      {activeMedia.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-black/60 uppercase">
                      {activeMedia.type}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
                    {activeMedia.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveMedia(null)}
                  className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0_0_#000]"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Media Player / Canvas */}
              <div className="p-4 md:p-6 bg-black flex items-center justify-center min-h-[300px]">
                {activeMedia.mediaType === 'video' ? (
                  <video
                    src={activeMedia.mediaUrl}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[60vh] max-w-full rounded shadow-lg"
                  />
                ) : (
                  <img
                    src={activeMedia.mediaUrl}
                    alt={activeMedia.title}
                    className="max-h-[60vh] max-w-full object-contain rounded shadow-lg"
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 border-t-2 border-black bg-white">
                <p className="text-black/80 text-sm md:text-base leading-relaxed mb-4">
                  {activeMedia.description}
                </p>
                {activeMedia.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {activeMedia.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono font-medium text-black/70 bg-[#F2F2F2] px-2 py-0.5 border border-black/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {activeMedia.mediaUrl && (
                  <a
                    href={activeMedia.mediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition-colors shadow-[2px_2px_0_0_#000]"
                  >
                    <span>Open Raw Asset</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
