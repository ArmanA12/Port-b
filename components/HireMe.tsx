import React from 'react';
import { MessageCircle, ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const HireMe: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: CTA Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block px-3 py-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white">Open for Work</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-neutral-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
              Want to hire me <br/>
              <span className="text-neutral-400 dark:text-neutral-600">as a freelancer?</span>
            </h2>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-mono uppercase tracking-wide mb-10 max-w-md leading-relaxed">
              Let's discuss. Drop your message and let's discuss about your project.
            </p>

            <motion.a 
              href="https://wa.me/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 px-8 py-5 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider text-sm border border-transparent hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all group"
            >
              <MessageCircle size={20} className="group-hover:-translate-y-0.5 transition-transform" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: Email Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative Backdrop */}
            <div className="absolute -inset-4 border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 -z-10" />

            <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-neutral-900 dark:bg-white animate-pulse"></div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight">Quick Inquiry</h3>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-lg outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-700 font-mono"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Message</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell me a bit about your project..." 
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-lg outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-700 font-mono resize-none"
                  />
                </div>

                <button className="w-full group flex items-center justify-between bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-6 py-5 mt-4 hover:bg-neutral-900 hover:border-neutral-900 dark:hover:bg-white dark:hover:border-white hover:text-white dark:hover:text-black transition-all duration-300">
                  <span className="font-bold uppercase tracking-wider text-sm">Send Request</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-[10px] text-neutral-400 text-center uppercase tracking-widest">
                  I usually respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
