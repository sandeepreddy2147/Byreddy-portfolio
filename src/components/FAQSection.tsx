/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { GradientSphere } from './ThreeDIllustration';

const FAQ_ITEMS = [
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer: 'Timeline depends entirely on scope parameters. A premium Landing Page usually takes 3 to 7 business days, a standard Business Website requires 1 to 2 weeks, while a comprehensive multi-tenant SaaS or Custom Dashboard can range from 3 to 6 weeks depending on requirements.'
  },
  {
    id: 'source-code',
    question: 'Do you provide source code?',
    answer: 'Absolutely. Upon project completion and final account sync, 100% of the intellectual property, clean structured source files, deployment guides, and cloud hosting access keys are compiled and handed over directly to you.'
  },
  {
    id: 'ndas',
    question: 'Do you sign NDAs?',
    answer: 'Yes. I deeply respect the confidentiality of proprietary ideas and startup products. I am fully open to signing standard bilateral Non-Disclosure Agreements (NDAs) before you share any confidential credentials or product requirement documents.'
  },
  {
    id: 'maintenance',
    question: 'Do you provide maintenance?',
    answer: 'Yes, I provide optional monthly maintenance support packages. This ensures your code remains clean of dependency bugs, database logs are routinely pruned and backed up, and small front-end enhancements are rolled out steadily.'
  },
  {
    id: 'redesign',
    question: 'Can you redesign an existing project?',
    answer: 'Definitely. I can conduct comprehensive visual and technical refactoring of existing applications. I will clean up slow legacy databases, rewrite outdated logic using React 19 / TypeScript, and inject modern responsive Tailwind styles.'
  },
  {
    id: 'additional-features',
    question: 'Can I request additional features later?',
    answer: 'Yes! All codebases are engineered with strict modularity (using SOLID principles) so that adding subsequent features or microservices is highly straightforward and doesn’t break existing layouts.'
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('timeline');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-white border-t border-gray-100">
      {/* Background Orbs */}
      <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-brand-medium rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase block">Inquiry Center</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-gray-500">Clear and transparent responses addressing standard contract queries.</p>
        </div>

        {/* FAQ ACCORDION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography Graphic Side (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative select-none pointer-events-none">
              {/* Floating ambient orb */}
              <div className="absolute -inset-10 bg-linear-to-tr from-orange-500/10 to-amber-500/20 rounded-full filter blur-2xl animate-pulse-soft" />
              
              <div className="relative font-display font-black text-8xl sm:text-9xl text-transparent bg-clip-text bg-linear-to-br from-orange-500 to-amber-500 drop-shadow-[0_20px_40px_rgba(255,122,26,0.18)] tracking-tighter flex items-center leading-none">
                FAQ
                <span className="text-brand-orange animate-float ml-2">?</span>
              </div>
            </div>
            
            <div className="space-y-2 max-w-sm">
              <h3 className="font-display font-bold text-lg text-gray-800">Have a unique question?</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Don't see your specific concern answered here? No problem! Reach out directly or schedule a direct consultation video call.
              </p>
            </div>
            
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-50 border border-orange-200 text-orange-600 rounded-xl text-xs font-bold font-display hover:bg-orange-100/50 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Get in Touch Directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* FAQ Accordion Side (Right) */}
          <div className="lg:col-span-7 space-y-3 text-left">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-brand-orange/30 shadow-md' : 'border-gray-150 hover:border-brand-orange/10'}`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm text-gray-800 focus:outline-none cursor-pointer"
                  >
                    <span className="pr-4">{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-[11.5px] sm:text-xs text-gray-500 leading-relaxed font-sans border-t border-orange-500/5">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
