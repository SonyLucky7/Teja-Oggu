"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Copy, CheckCircle2 } from 'lucide-react';
import { DiscordIcon, InstagramIcon, TwitterIcon } from '@/components/ui/SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sonylucky46hac@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-b border-black/15">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-heading">
            Initiate
          </h2>
          <p className="text-xl md:text-2xl mt-4 font-medium max-w-2xl">
            Ready to build? Drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-8">
          
          {/* Left Column */}
          <div>
            <div className="flex flex-col gap-6 font-mono">
              
              {/* Email */}
              <div className="border-2 border-black p-6 flex items-center justify-between hover:bg-black hover:text-white transition-colors group">
                <div className="flex items-center gap-4">
                  <Mail size={24} />
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-80">Email</p>
                    <p className="text-lg font-bold">sonylucky46hac@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 transition-colors"
                  title="Copy Email"
                >
                  {copied ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                </button>
              </div>

              {/* WhatsApp & Telegram */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://wa.me/916300464187" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="border-2 border-black p-6 flex items-center gap-4 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors group">
                    <MessageSquare size={24} />
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-80">WhatsApp</p>
                      <p className="font-bold">+91 6300464187</p>
                    </div>
                  </div>
                </a>
                
                <a href="https://t.me/xO_HaC" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="border-2 border-black p-6 flex items-center gap-4 hover:bg-[#229ED9] hover:text-white hover:border-[#229ED9] transition-colors group">
                    <Send size={24} />
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-80">Telegram</p>
                      <p className="font-bold">@xO_HaC</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Socials */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t-2 border-black/15">
                <div className="border border-black/15 p-4 flex flex-col items-center gap-2">
                  <DiscordIcon className="w-6 h-6" />
                  <span className="text-xs text-center font-bold">karmaa_07</span>
                </div>
                <a href="https://instagram.com/zxn_wxx7" target="_blank" rel="noopener noreferrer" className="border border-black/15 p-4 flex flex-col items-center gap-2 hover:bg-black hover:text-white transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                  <span className="text-xs text-center font-bold">@zxn_wxx7</span>
                </a>
                <a href="https://x.com/Karmaa_07" target="_blank" rel="noopener noreferrer" className="border border-black/15 p-4 flex flex-col items-center gap-2 hover:bg-black hover:text-white transition-colors">
                  <TwitterIcon className="w-6 h-6" />
                  <span className="text-xs text-center font-bold">@Karmaa_07</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="bg-[#f5f5f5] border-2 border-black p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest font-mono">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white border-2 border-black px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest font-mono">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white border-2 border-black px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all font-mono"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest font-mono">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-white border-2 border-black px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all font-mono"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest font-mono">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-white border-2 border-black px-4 py-3 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all font-mono resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 px-8 border-2 border-black hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
              >
                {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Transmission"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
