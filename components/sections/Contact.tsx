"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Copy, CheckCircle2 } from "lucide-react";
import { InstagramIcon, TwitterIcon, DiscordIcon } from "@/components/ui/SocialIcons";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sonylucky46hac@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="Contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind, an idea to build, or want to collaborate? Let's connect.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl rounded-xl p-5 flex items-center justify-between group hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">sonylucky46hac@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copied ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/916300464187" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl rounded-xl p-5 flex items-center gap-4 group hover:border-green-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-white font-medium">+91 6300464187</p>
                  </div>
                </div>
              </a>

              {/* Telegram */}
              <a href="https://t.me/xO_HaC" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl rounded-xl p-5 flex items-center gap-4 group hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Send size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Telegram</p>
                    <p className="text-white font-medium">@xO_HaC</p>
                  </div>
                </div>
              </a>

              {/* Socials Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-indigo-500/30 transition-colors">
                  <DiscordIcon className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs text-gray-400 text-center">Discord<br/>karmaa_07</span>
                </div>
                <a href="https://instagram.com/zxn_wxx7" target="_blank" rel="noopener noreferrer" className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-pink-500/30 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-pink-400" />
                  <span className="text-xs text-gray-400 text-center">Instagram<br/>@zxn_wxx7</span>
                </a>
                <a href="https://x.com/Karmaa_07" target="_blank" rel="noopener noreferrer" className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-gray-400 transition-colors">
                  <TwitterIcon className="w-5 h-5 text-gray-300" />
                  <span className="text-xs text-gray-400 text-center">X (Twitter)<br/>@Karmaa_07</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#030014]/50 border border-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5558e6] hover:to-[#9945e8] text-white font-medium py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitted ? (
                    <>
                      Sent Successfully <CheckCircle2 size={20} />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
