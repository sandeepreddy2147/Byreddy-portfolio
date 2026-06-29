/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2, Sparkles, MessageSquare } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenBooking: () => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export const Header: React.FC<HeaderProps> = ({ 
  activePage, 
  setActivePage, 
  onOpenBooking 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mx-auto max-w-5xl rounded-2xl transition-all duration-300 ${scrolled ? 'glass-panel soft-shadow px-4 sm:px-6' : 'px-2'}`}>
            <div className="flex items-center justify-between h-14">
              
              {/* Brand Logo */}
              <div 
                className="flex items-center gap-1.5 cursor-pointer group select-none"
                onClick={() => handleNavClick('home')}
              >
                <span className="font-display font-extrabold text-brand-orange text-lg font-mono tracking-tight">&lt;/&gt;</span>
                <span className="font-display font-bold text-sm tracking-tight text-gray-950">
                  Sandeep Reddy
                </span>
              </div>

              {/* Desktop Nav Items */}
              <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-gray-500">
                {NAV_ITEMS.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative py-1 transition-colors duration-200 cursor-pointer ${isActive ? 'text-gray-900 font-bold border-b-2 border-brand-orange' : 'hover:text-gray-900'}`}
                    >
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Action Trigger Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer hover:scale-105"
                >
                  <span>Let's Talk</span>
                </button>
              </div>

              {/* Mobile Burger Toggle */}
              <div className="flex md:hidden items-center gap-2">
                <button
                  onClick={onOpenBooking}
                  className="p-2 bg-orange-100 text-orange-600 rounded-xl hover:bg-orange-200 transition-colors"
                  aria-label="Let's Talk"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-500 hover:text-gray-800 hover:bg-orange-50/50 rounded-xl transition-all cursor-pointer"
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-30 md:hidden p-4"
          >
            <div className="glass-panel p-5 rounded-2xl shadow-xl border border-orange-500/10 space-y-4">
              <nav className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-orange-500 text-white font-bold' : 'text-gray-600 hover:bg-orange-50/30'}`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-2 border-t border-orange-500/5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 bg-brand-orange hover:bg-orange-600 text-white text-center rounded-2xl font-bold font-display text-xs flex items-center justify-center gap-1.5 shadow-md shadow-orange-200 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
