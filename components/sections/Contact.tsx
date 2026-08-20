"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, Instagram } from 'lucide-react';
import { DiscordIcon, TwitterIcon, GithubIcon } from '@/components/ui/SocialIcons';

const contactLinks = [
  {
    name: "GitHub",
    action: "COMMIT",
    href: "https://github.com/SonyLucky7",
    icon: <GithubIcon className="w-10 h-10 fill-black" />,
  },
  {
    name: "Discord",
    action: "JOIN",
    copyText: "karmaa_07",
    redirectUrl: "https://discord.com/app",
    icon: <DiscordIcon className="w-10 h-10 fill-black" />,
  },
  {
    name: "Outlook",
    action: "MAIL",
    href: "mailto:tejavoggu@outlook.com",
    icon: <Mail className="w-10 h-10 text-black" />,
  },
  {
    name: "Instagram",
    action: "FOLLOW",
    href: "https://instagram.com/karmaa_07",
    icon: <Instagram className="w-10 h-10 text-black" />,
  },
  {
    name: "Telegram",
    action: "CHAT",
    href: "https://t.me/xO_HaC",
    icon: <Send className="w-10 h-10 text-black" />,
  },
  {
    name: "Twitter",
    action: "ENGAGE",
    href: "https://x.com/Karmaa_07",
    icon: <TwitterIcon className="w-10 h-10 fill-black" />,
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F9F9F9] text-black border-t border-black/10 flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        <div className="flex flex-col items-center text-center mb-16 overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 font-heading flex gap-4">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              LET'S
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
              className="text-black/30"
            >
              TALK
            </motion.span>
          </h2>

          <div className="relative mb-6">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-none bg-white border-4 border-black flex items-center justify-center overflow-hidden shadow-[8px_8px_0_0_#000]">
              <img src="/profile-sketch.jpg" alt="Profile" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
          
          <div className="font-mono text-lg md:text-xl font-bold text-black tracking-[0.2em] uppercase">
            @Teja_Oggu
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-6xl">
          {contactLinks.map((link, i) => (
            link.copyText ? (
              <CopyCard key={i} {...link} />
            ) : (
              <LinkCard key={i} {...link} />
            )
          ))}
        </div>

      </div>
    </section>
  );
}

function LinkCard({ name, action, href, icon }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center gap-6 p-8 bg-white border-2 border-black transition-all duration-300 shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1"
    >
      <div>{icon}</div>
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-xl font-black text-black tracking-tighter uppercase">{name}</h3>
        <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-black/40">
          {action}
        </span>
      </div>
    </a>
  );
}

function CopyCard({ name, action, copyText, redirectUrl, icon }: any) {
  const [copied, setCopied] = useState(false);

  return (
    <button 
      onClick={() => {
        navigator.clipboard.writeText(copyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        if (redirectUrl) {
          setTimeout(() => {
            window.open(redirectUrl, '_blank');
          }, 400);
        }
      }}
      className="group flex flex-col items-center justify-center gap-6 p-8 bg-white border-2 border-black transition-all duration-300 shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 cursor-pointer"
    >
      <div>
        {copied ? <CheckCircle2 className="w-10 h-10 text-black" /> : icon}
      </div>
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-xl font-black text-black tracking-tighter uppercase">{copied ? "Copied!" : name}</h3>
        <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-black/40">
          {copied ? "COPIED" : action}
        </span>
      </div>
    </button>
  );
}
