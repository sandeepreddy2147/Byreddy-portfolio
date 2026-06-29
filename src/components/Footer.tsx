/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Code2, Github, Linkedin, Send, Heart } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

const LINKS: { label: string; id: PageId }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Process', id: 'process' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' }
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-[-50px] left-[50%] -translate-x-1/2 w-[300px] h-[150px] bg-linear-to-tr from-orange-500/5 to-amber-500/5 rounded-full filter blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CTA Title Block */}
        <div className="max-w-3xl mx-auto pb-12 border-b border-gray-100 space-y-4 text-center">
          <h3 className="font-display font-black text-2xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
            Let's Create Something Incredible Together!
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Ready to scale your business? Book a free, no-obligation strategy session to map your technological requirements.
          </p>
          <div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl text-xs font-bold font-display shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-gray-100">
          
          {/* Logo Brand info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div 
              className="flex items-center gap-1.5 cursor-pointer group select-none" 
              onClick={() => handleNavClick('home')}
            >
              <span className="font-display font-extrabold text-brand-orange text-lg font-mono tracking-tight">&lt;/&gt;</span>
              <div>
                <span className="font-display font-bold text-sm tracking-tight text-gray-950 block">
                  Sandeep Reddy
                </span>
                <span className="text-[10px] text-gray-400 font-mono font-medium block">SaaS & AI Architect</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-sans">
              Designing and building custom production-grade SaaS products, complex dashboards, high-conversion marketing websites, and AI automation solutions.
            </p>
          </div>

          {/* Quick Links Matrix */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2.5">
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-xs font-semibold text-gray-500 hover:text-brand-orange transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Connect Socially</h4>
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://github.com/sandeepreddy2147/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 hover:bg-orange-50 text-gray-500 hover:text-brand-orange rounded-xl border border-gray-200 hover:border-orange-100 transition-all cursor-pointer"
                title="GitHub Link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/byreddy-venkata-sandeep-reddy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 hover:bg-orange-50 text-gray-500 hover:text-brand-orange rounded-xl border border-gray-200 hover:border-orange-100 transition-all cursor-pointer"
                title="LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://t.me/sandeep_reddy_21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 hover:bg-orange-50 text-gray-500 hover:text-brand-orange rounded-xl border border-gray-200 hover:border-orange-100 transition-all cursor-pointer"
                title="Telegram Support"
              >
                <Send className="w-4 h-4 -rotate-45" />
              </a>
            </div>
            <p className="text-[10px] text-gray-400 font-mono">Available for consulting contracts globally.</p>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[10px] text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Byreddy Venkata Sandeep Reddy. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[10.5px] text-gray-400 font-semibold font-display">
            <span>Designed and Developed by Sandeep Reddy</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
};
