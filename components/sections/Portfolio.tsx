"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  Download, 
  Smartphone, 
  Tv, 
  Globe, 
  Sparkles, 
  Server, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Database,
  Radio,
  ExternalLink,
  LineChart,
  Monitor,
  Repeat,
  Cpu
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

interface PreviewView {
  id: string;
  label: string;
  src: string;
  caption: string;
}

interface FlagshipProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  client: string;
  quote: string;
  description: string;
  platforms: { name: string; icon: string }[];
  keyMetrics: { label: string; value: string; detail: string }[];
  coreStrategies: { title: string; desc: string; tag: string }[];
  services: string[];
  link?: string;
  linkText?: string;
  apkUrl?: string;
  github?: string;
  views: PreviewView[];
}

const flagshipProjects: FlagshipProject[] = [
  {
    id: "melody",
    number: "01",
    title: "Melody",
    tagline: "Spotify-Scale Audio Streaming Architecture Built at $0/Mo Cloud Cost",
    badge: "Cross-Platform Streaming Ecosystem • 552 Lossless Tracks",
    client: "High-Concurrency Distributed Audio System",
    quote: "I engineered a Spotify-range audio streaming architecture from the ground up at $0/month infrastructure cost — delivering sub-millisecond playback across Android Mobile, Google TV, and Web.",
    description: "A production-grade, high-concurrency cross-platform music streaming platform serving 552+ lossless 320kbps audio files (~5 GB). Engineered with a zero-cost distributed multi-bot Telegram CDN pool, a sub-millisecond (0.2ms) HTTP HEAD fast-path metadata router that eliminates 100% of player freezing, dual-slot chain pre-buffering (<100ms latency), and dual-target interfaces for touchscreens and 10-foot Google TV remotes.",
    platforms: [
      { name: "Android Mobile (ExoPlayer & Compose)", icon: "mobile" },
      { name: "Google TV / Android TV (10-Foot D-Pad UI)", icon: "tv" },
      { name: "React 18 Web Player (Web Audio API)", icon: "web" }
    ],
    keyMetrics: [
      { label: "Cloud Storage Cost", value: "$0 / mo", detail: "5-Bot Telegram CDN Pool with Bot Affinity Cache" },
      { label: "HEAD Probe Latency", value: "0.2 ms", detail: "Database-backed Fast-Path (0 socket resets)" },
      { label: "Track Switch Latency", value: "<100 ms", detail: "ExoPlayer & Web Audio Chain Pre-Buffering" },
      { label: "Lossless Audio Library", value: "552 Tracks", detail: "320kbps High-Bitrate Storage (~5 GB)" },
      { label: "Platform Reach", value: "3 Targets", detail: "Android Phone, 4K Google TV & Web Player" },
      { label: "VIP Device Guard", value: "5 Devices", detail: "UPI QR Gateway + Remote Session Revocation" }
    ],
    coreStrategies: [
      {
        tag: "Distributed Storage",
        title: "Zero-Cost Cloud Audio Architecture (5-Bot Telegram CDN)",
        desc: "Utilized Telegram's private cloud infrastructure as a high-speed distributed object store with a 5-bot multi-agent pool. Implemented Bot Affinity Caching (fileBotMap) in Node.js, slashing 80% of Telegram API traffic and avoiding rate limits."
      },
      {
        tag: "Sub-Millisecond Routing",
        title: "0.2ms HTTP HEAD Fast-Path & Anti-Freezing Router",
        desc: "Media engines send HTTP HEAD requests before fetching audio. Writing audio bodies to HEAD violated HTTP specs and froze ExoPlayer for 6-10s. Built a database-backed fast-path answering in 0.2ms with Accept-Ranges and exact Content-Length."
      },
      {
        tag: "Pre-Buffering Pipeline",
        title: "Dual-Slot Chain Pre-Buffering & Zero-Latency Transitions",
        desc: "Engineered a 2-slot media pipeline in Android ExoPlayer. While slot 0 plays the current song, slot 1 pre-buffers upcoming audio and prewarms backend endpoints, dropping track switching latency to under 100ms."
      },
      {
        tag: "10-Foot TV Interface",
        title: "Dual-Target Android Mobile & Google TV Leanback UI",
        desc: "Unified Kotlin & Jetpack Compose codebase supporting touchscreen gestures and 10-foot living room Android TV D-Pad directional navigation with focused item scaling, glow indicators, and hardware back-button handling."
      }
    ],
    services: [
      "Kotlin",
      "Jetpack Compose",
      "Android TV (Leanback)",
      "AndroidX Media3 (ExoPlayer)",
      "React 18",
      "TypeScript",
      "Node.js & Express",
      "PostgreSQL",
      "Telegram CDN Pool",
      "GitHub Actions CI/CD",
      "Scoped Storage",
      "IndexedDB Offline"
    ],
    link: "https://melody-chi-nine.vercel.app",
    linkText: "Live Web Player",
    apkUrl: "https://melody-chi-nine.vercel.app/Melody-v1.0.8.apk",
    github: "https://github.com/SonyLucky7/melody",
    views: [
      {
        id: "web",
        label: "Web Player",
        src: "/melody-preview.png",
        caption: "Live Desktop & Mobile Web Player • 6-Band Equalizer & Instant 0ms Cold Start"
      },
      {
        id: "tv",
        label: "Google TV (10-Foot UI)",
        src: "/melody-tv-preview.jpg",
        caption: "Android TV & Google TV 10-Foot Living Room Interface with D-Pad Remote Focus Engine"
      }
    ]
  },
  {
    id: "chartread",
    number: "02",
    title: "ChartRead",
    tagline: "High-Performance Electron Market Charting Platform with Multi-Timeframe Bar Replay",
    badge: "TradingView-Grade Workstation • Custom Replay Engine • 60 FPS WebGL",
    client: "Desktop Systems Engineering & Quantitative Finance",
    quote: "Inspired by TradingView, I built ChartRead to unlock institutional-grade charting capabilities on desktop — featuring a custom multi-timeframe Bar Replay backtesting engine, multi-chart tiling, and zero-latency WebSocket feeds without subscription paywalls.",
    description: "An enterprise-grade desktop financial analysis and charting workstation built on Electron, Node.js, and Chromium. Designed for active traders and quantitative analysts, ChartRead delivers institutional-level charting capabilities—including real-time multi-asset market data streaming, unlimited technical indicators, multi-chart window tiling, and an engineered client-side Bar Replay Backtesting Engine supporting synchronized historical scrubbing across all timeframes (seconds, intraday minutes, hours, and daily intervals) without subscription paywalls.",
    platforms: [
      { name: "Electron Desktop (Windows & macOS)", icon: "desktop" },
      { name: "Hardware-Accelerated WebGL / Canvas", icon: "zap" },
      { name: "Real-Time WebSocket Streamers", icon: "network" }
    ],
    keyMetrics: [
      { label: "Rendering Engine", value: "60 FPS", detail: "Hardware-Accelerated Canvas/WebGL Pipeline" },
      { label: "Bar Replay Engine", value: "Multi-TF", detail: "Seconds, 1m, 5m, 1h, 1D with Timestamp Clamping" },
      { label: "Paywall Restrictions", value: "$0 Cost", detail: "Unlocked Multi-Charts, Replay & Indicators" },
      { label: "Data Stream Latency", value: "Zero-Lag", detail: "WebSocket Binary & JSON Real-Time Feeds" },
      { label: "Architecture", value: "Electron", detail: "Multi-Process Main, Preload & Renderer" },
      { label: "E2E Testing", value: "CDP E2E", detail: "Headless Chrome DevTools Protocol Suite" }
    ],
    coreStrategies: [
      {
        tag: "Bar Replay Engine",
        title: "Multi-Timeframe Historical Replay (Engineered from Scratch)",
        desc: "Architected a client-side bar replay state machine with microsecond timestamp anchoring (clampBarsToCutoff). Intercepts module updates on resolution change (e.g. 15m to 1m), slices series buffers, and dynamically recalculates indicators (RSI, Volume, MACD) strictly up to visible historical bars."
      },
      {
        tag: "Metaprogramming",
        title: "Runtime Webpack Interception & Prototype Patching",
        desc: "Injected platform-preload.js into Chromium's renderer thread prior to DOM evaluation. Hooked __webpack_require__ to wrap Session, Series, and Replay modules—neutralizing commercial licensing gates, telemetries, and paywall validation classes at runtime."
      },
      {
        tag: "Canvas Performance",
        title: "High-Throughput Canvas & TimeScale Synchronization",
        desc: "Maintains 60 FPS scrolling and zooming across complex multi-chart layouts with hundreds of thousands of historical candle vectors by managing time-scale base indices and routing partial state modifications through lightUpdate."
      },
      {
        tag: "Brand Re-Engineering",
        title: "Complete White-Label Brand & UI Re-Engineering",
        desc: "Completely stripped embedded third-party watermarks, promotional banners, and proprietary assets. Replaced raster assets with scalable SVGs and patched UI template bundles, menus, and localization dictionaries (en.json)."
      }
    ],
    services: [
      "Electron",
      "Node.js",
      "Chromium",
      "WebGL",
      "HTML5 Canvas 2D",
      "WebSockets",
      "JavaScript ES2023+",
      "Webpack Hook Interception",
      "Prototype Metaprogramming",
      "Chrome DevTools Protocol (CDP)",
      "Electron Builder"
    ],
    github: "https://github.com/SonyLucky7/ChartRead",
    views: [
      {
        id: "station",
        label: "Pro Workstation",
        src: "/chartread-preview.png",
        caption: "TradingView-Grade Desktop Workstation • Unlocked Pro Studies & Real-Time Multi-Asset Feeds"
      },
      {
        id: "replay",
        label: "Bar Replay Engine",
        src: "/chartread-replay-preview.png",
        caption: "Client-Side Historical Bar Replay Simulation Engine with Synchronized Study Recalculation"
      },
      {
        id: "multichart",
        label: "Multi-Chart Tiling",
        src: "/chartread-multichart-preview.png",
        caption: "Multi-Window Chart Tiling & Synchronized Multi-Timeframe Market Analysis"
      }
    ]
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <section id="selected-work" className="py-24 md:py-32 bg-[#F9F9F9] text-black border-b border-black/10">
      {/* Anchor for nav #portfolio */}
      <span id="portfolio" className="sr-only" />
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]" ref={containerRef}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-8 overflow-hidden">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Flagship Production Architecture</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter font-heading leading-[0.9] flex flex-col">
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
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/3 text-base md:text-lg font-bold text-black/80 leading-relaxed font-body"
          >
            Production-scale systems, high-concurrency cross-platform architectures, and TradingView & Spotify-caliber platforms engineered for real-world reliability.
          </motion.div>
        </div>

        {/* Flagship Projects Showcase */}
        <div className="mt-16 md:mt-24 flex flex-col gap-16 md:gap-24 relative">
          {flagshipProjects.map((project, index) => (
            <FlagshipProjectCard key={project.id} project={project} index={index} total={flagshipProjects.length} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FlagshipProjectCard({ project, index, total }: { project: FlagshipProject, index: number, total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeViewIndex, setActiveViewIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const currentView = project.views[activeViewIndex] || project.views[0];

  return (
    <div 
      className="relative flex items-center justify-center w-full"
      style={{ zIndex: index }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale, opacity }}
        className="w-full relative"
      >
        <div 
          className="w-full border-2 border-black bg-[#EBEBEB] flex flex-col justify-between p-6 sm:p-8 md:p-12 shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] hover:shadow-[14px_14px_0_0_#000] transition-shadow duration-300 group"
        >
          {/* Top Bar: Identifier, Client & Category Badge */}
          <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-black/20 pb-6 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="font-mono text-xs font-bold text-black bg-white px-2.5 py-1 border border-black shadow-[2px_2px_0_0_#000]">
                  {project.number}
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white bg-black px-2.5 py-1 border border-black">
                  {project.badge}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-black/60 font-mono">
                  {project.client}
                </span>
              </div>
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black font-heading leading-none">
                {project.title}
              </h3>
              <p className="text-sm md:text-lg font-bold font-mono text-black/80 mt-2 tracking-tight">
                {project.tagline}
              </p>
            </div>

            {/* Top Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 font-mono font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition-all shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <span>{project.linkText || "Live Web Player"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              {project.apkUrl && (
                <a
                  href={project.apkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-3 font-mono font-bold text-xs uppercase tracking-wider border-2 border-black hover:bg-black/5 transition-all shadow-[3px_3px_0_0_#000]"
                  title="Download Melody Android APK (v1.0.8)"
                >
                  <Download className="w-4 h-4" />
                  <span>Download APK (v1.0.8)</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-3 font-mono font-bold text-xs uppercase tracking-wider border-2 border-black hover:bg-black/5 transition-all shadow-[3px_3px_0_0_#000]"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-4 h-4 fill-black" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Standout Quote Callout */}
          <div className="my-6 p-4 sm:p-5 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] flex items-start gap-4">
            <div className="w-8 h-8 rounded-none bg-black text-white flex items-center justify-center shrink-0 font-mono font-black text-sm">
              ”
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-black font-body leading-relaxed">
                {project.quote}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2 pt-2 border-t border-black/10 text-xs font-mono text-black/60">
                {project.platforms.map((p, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    {p.icon === 'mobile' && <Smartphone className="w-3.5 h-3.5 text-black" />}
                    {p.icon === 'tv' && <Tv className="w-3.5 h-3.5 text-black" />}
                    {p.icon === 'web' && <Globe className="w-3.5 h-3.5 text-black" />}
                    {p.icon === 'desktop' && <Monitor className="w-3.5 h-3.5 text-black" />}
                    {p.icon === 'zap' && <Zap className="w-3.5 h-3.5 text-black" />}
                    {p.icon === 'network' && <Radio className="w-3.5 h-3.5 text-black" />}
                    <span>{p.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Screen Preview with Platform/Mode Tabs */}
          <div className="w-full relative my-4">
            {/* View Mode Toggle Switcher */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/60 flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-black animate-pulse" />
                <span>Interactive Workstation Views:</span>
              </span>

              <div className="inline-flex items-center gap-1 bg-white border-2 border-black p-1 shadow-[2px_2px_0_0_#000]">
                {project.views.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActiveViewIndex(i)}
                    className={`px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeViewIndex === i
                        ? 'bg-black text-white shadow-[2px_2px_0_0_#000]'
                        : 'text-black hover:bg-black/5'
                    }`}
                  >
                    <span>{v.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Preview Screen */}
            <div className="relative w-full block border-2 border-black overflow-hidden group/img bg-black min-h-[320px] sm:min-h-[440px] md:min-h-[540px] shadow-[6px_6px_0_0_#000]">
              <img 
                src={currentView.src} 
                alt={`${project.title} - ${currentView.label}`} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-102"
              />
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                >
                  <span className="bg-black text-white border-2 border-white px-6 py-3 font-bold uppercase tracking-widest text-xs opacity-0 group-hover/img:opacity-100 transform translate-y-3 group-hover/img:translate-y-0 transition-all duration-300 shadow-[4px_4px_0_0_#fff] flex items-center gap-2">
                    <span>Explore {project.title} ↗</span>
                  </span>
                </a>
              )}

              {/* Bottom Screen Label */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-black/90 backdrop-blur-md text-white border border-white/20 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span className="truncate">{currentView.caption}</span>
              </div>
            </div>
          </div>

          {/* Key Engineering Metrics Grid */}
          <div className="mt-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-black" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                Architectural Metrics & Performance Benchmarks:
              </h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {project.keyMetrics.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-white border-2 border-black p-3.5 flex flex-col justify-between shadow-[3px_3px_0_0_#000]"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/50 leading-tight">
                    {metric.label}
                  </span>
                  <div className="text-xl sm:text-2xl font-black font-heading text-black my-1">
                    {metric.value}
                  </div>
                  <span className="text-[10px] font-mono text-black/70 leading-snug">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Core Engineering Breakthroughs */}
          <div className="mb-8 pt-6 border-t border-black/20">
            <div className="flex items-center gap-2 mb-5">
              <Server className="w-4 h-4 text-black" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                Core Distributed & System Engineering Breakthroughs:
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.coreStrategies.map((strat, i) => (
                <div 
                  key={i} 
                  className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_0_#000] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5">
                        {strat.tag}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-black/40">
                        0{i + 1}
                      </span>
                    </div>
                    <h5 className="text-base font-black uppercase tracking-tight text-black font-heading mb-2">
                      {strat.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-black/75 leading-relaxed font-body">
                      {strat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills & Bottom Footer */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-6 border-t border-black/20 gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.services.map((service: string, i: number) => (
                <span 
                  key={i} 
                  className="text-[11px] font-mono font-bold uppercase tracking-wider border border-black text-black px-2.5 py-1 bg-white shadow-[2px_2px_0_0_#000]"
                >
                  {service}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-blue-600 underline underline-offset-4"
                >
                  <span>{project.linkText || "Launch Web Player"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.apkUrl && (
                <>
                  <span className="text-black/30">•</span>
                  <a
                    href={project.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-blue-600 underline underline-offset-4"
                  >
                    <span>Download APK</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </>
              )}
              {project.github && (
                <>
                  <span className="text-black/30">•</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-blue-600 underline underline-offset-4"
                  >
                    <span>GitHub Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </>
              )}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
