"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { DiscordIcon, TwitterIcon, GithubIcon } from '@/components/ui/SocialIcons';
import { motion } from 'framer-motion';

const contactLinks = [
  {
    name: "GitHub",
    action: "COMMIT",
    href: "https://github.com/SonyLucky7",
    icon: <GithubIcon className="w-10 h-10 fill-white" />,
    hoverClass: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    actionColor: "group-hover:text-purple-400",
    badge: true
  },
  {
    name: "Discord",
    action: "JOIN",
    copyText: "karmaa_07",
    icon: <DiscordIcon className="w-10 h-10 fill-[#5865F2]" />,
    hoverClass: "group-hover:border-[#5865F2]/50 group-hover:shadow-[0_0_30px_rgba(88,101,242,0.15)]",
    actionColor: "group-hover:text-[#5865F2]"
  },
  {
    name: "Outlook",
    action: "MAIL",
    href: "mailto:tejavoggu@outlook.com",
    icon: <Mail className="w-10 h-10 text-[#0078D4]" />,
    hoverClass: "group-hover:border-[#0078D4]/50 group-hover:shadow-[0_0_30px_rgba(0,120,212,0.15)]",
    actionColor: "group-hover:text-[#0078D4]"
  },
  {
    name: "WhatsApp",
    action: "CONNECT",
    href: "https://wa.me/916300464187",
    icon: <MessageSquare className="w-10 h-10 text-[#25D366]" />,
    hoverClass: "group-hover:border-[#25D366]/50 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.15)]",
    actionColor: "group-hover:text-[#25D366]"
  },
  {
    name: "Telegram",
    action: "CHAT",
    href: "https://t.me/xO_HaC",
    icon: <Send className="w-10 h-10 text-[#229ED9]" />,
    hoverClass: "group-hover:border-[#229ED9]/50 group-hover:shadow-[0_0_30px_rgba(34,158,217,0.15)]",
    actionColor: "group-hover:text-[#229ED9]"
  },
  {
    name: "Twitter",
    action: "ENGAGE",
    href: "https://x.com/Karmaa_07",
    icon: <TwitterIcon className="w-10 h-10 fill-white" />,
    hoverClass: "group-hover:border-white/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
    actionColor: "group-hover:text-white"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden min-h-[80vh] flex items-center">
      
      {/* Background Starry Particles */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj4KICA8ZyBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiPgogICAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjMwMCIgcj0iMS41IiAvPgogICAgPGNpcmNsZSBjeD0iMjUwIiBjeT0iMTUwIiByPSIwLjUiIC8+CiAgICA8Y2lyY2xlIGN4PSIzNTAiIGN5PSI1MCIgcj0iMSIgLz4KICA8L2c+Cjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Avatar Profile */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">
            Web Presence - <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">DEV NETWORK</span>
          </h2>

          <div className="relative group mb-6">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-60 blur-md animate-[spin_4s_linear_infinite]"></div>
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden z-10">
              <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">TO</span>
            </div>
          </div>
          
          <div className="font-mono text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 tracking-[0.2em] uppercase">
            @Teja_Oggu
          </div>
        </div>

        {/* Square Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full max-w-6xl">
          {contactLinks.map((link, i) => (
            link.copyText ? (
              <CopyCard key={i} {...link} />
            ) : (
              <LinkCard key={i} {...link} />
            )
          ))}
        </div>

        <p className="mt-16 text-white/30 text-xs font-mono tracking-[0.2em] uppercase">
          Explore further by clicking on any of the profile cards above!
        </p>
      </div>
    </section>
  );
}

function LinkCard({ name, action, href, icon, hoverClass, actionColor, badge }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center gap-6 p-8 bg-[#0a0a0c] border border-white/5 rounded-2xl transition-all duration-300 relative overflow-hidden ${hoverClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {badge && (
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
      )}

      <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
        {icon}
      </div>
      
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
        <span className={`text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/30 transition-colors duration-300 ${actionColor}`}>
          {action}
        </span>
      </div>
    </a>
  );
}

function CopyCard({ name, action, copyText, icon, hoverClass, actionColor }: any) {
  const [copied, setCopied] = useState(false);

  return (
    <button 
      onClick={() => {
        navigator.clipboard.writeText(copyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={`group flex flex-col items-center justify-center gap-6 p-8 bg-[#0a0a0c] border border-white/5 rounded-2xl transition-all duration-300 relative overflow-hidden cursor-pointer ${hoverClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
        {copied ? <CheckCircle2 className="w-10 h-10 text-green-500" /> : icon}
      </div>
      
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-xl font-bold text-white tracking-tight">{copied ? "Copied!" : name}</h3>
        <span className={`text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/30 transition-colors duration-300 ${actionColor}`}>
          {copied ? "COPIED" : action}
        </span>
      </div>
    </button>
  );
}
