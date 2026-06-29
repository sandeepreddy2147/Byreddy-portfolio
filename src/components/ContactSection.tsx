/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Linkedin,
  Github,
  MessageSquare,
  Compass,
  ArrowRight,
  Database,
  History,
  TrendingUp,
  Cpu,
  Chrome
} from 'lucide-react';
import { ContactMessage } from '../types';
import { GradientSphere } from './ThreeDIllustration';
import avatarContact from '../../assets/sandeep_avatar_contact.png';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Custom Web Development');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Load sent messages from localStorage for durable telemetry simulation
    const loaded: ContactMessage[] = JSON.parse(localStorage.getItem('sand_messages') || '[]');
    setSubmittedMessages(loaded);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      setStatus('error');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Please write a brief message.');
      setStatus('error');
      return;
    }

    setStatus('idle');
    setErrorMessage('');
    setIsSending(true);

    const newMessage: ContactMessage = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      phone: phone.trim() || undefined,
      projectType,
      budget: budget || undefined,
      message,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newMessage,
          details: message, // map message to details for email body consistency
          source: 'contact'
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || 'Failed to dispatch email inquiry.');
      }

      const updated = [...submittedMessages, newMessage];
      localStorage.setItem('sand_messages', JSON.stringify(updated));
      setSubmittedMessages(updated);

      setStatus('success');
      setErrorMessage('');

      // Clear inputs
      setName('');
      setEmail('');
      setPhone('');
      setBudget('');
      setMessage('');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (err: any) {
      console.error('Contact inquiry dispatch failed:', err);
      setErrorMessage(err.message || 'Failed to send your inquiry, but it has been saved locally.');
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-white border-t border-gray-100">
      {/* Background Orbs */}
      <div className="absolute top-10 -left-40 w-[600px] h-[600px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-brand-medium rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase block">Partnership Gate</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">Let's Build Something Amazing</h2>
          <p className="text-xs sm:text-sm text-gray-500">Have an outstanding project concept or SaaS idea? Let's discuss requirements and construct a solution.</p>
        </div>

        {/* CONTACT MAIN BOX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Column 1: Contact Touchpoints & Workspace Illustration */}
          <div className="lg:col-span-5 space-y-6 text-left">

            {/* Quick cards info */}
            <div className="bg-white border border-gray-200 p-6 rounded-3xl soft-shadow space-y-5">
              <h3 className="font-display font-bold text-base text-gray-900">Direct Touchpoints</h3>

              <div className="space-y-3.5">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-50 text-brand-orange rounded-xl border border-orange-100">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">EMAIL SUPPORT</span>
                    <a href="mailto:b.v.sandeepreddy21@gmail.com" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-brand-orange transition-colors">
                      b.v.sandeepreddy21@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-50 text-brand-orange rounded-xl border border-orange-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">PHONE CALL</span>
                    <a href="tel:+918919429224" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-brand-orange transition-colors">
                      +91 89194 29224
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-50 text-brand-orange rounded-xl border border-orange-100">
                    <Send className="w-4 h-4 -rotate-45" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">TELEGRAM HANDLE</span>
                    <a href="https://t.me/sandeep_reddy_21" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-brand-orange transition-colors">
                      @sandeep_reddy_21
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-50 text-brand-orange rounded-xl border border-orange-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">OFFICE SEAT</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      Andhra Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Workspace Illustration with 3D claymation avatar */}
            <div className="bg-[#FAF3ED]/40 backdrop-blur-md border border-brand-medium rounded-3xl p-5 text-center space-y-4 shadow-sm">
              <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest block">DEVELOPER WORKSPACE</span>

              <div className="bg-white rounded-2xl border border-gray-150 p-4 soft-shadow flex flex-col justify-between aspect-16/10 overflow-hidden relative">
                <div className="absolute top-0 inset-x-0 h-1 bg-brand-orange" />
                <div className="flex items-center justify-between z-10">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[8px] text-orange-500 font-mono font-bold uppercase">Workspace Live v1.0</span>
                </div>

                {/* 3D claymation avatar image */}
                <div className="relative w-full h-[70%] flex items-center justify-center py-2 select-none">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 bg-linear-to-tr from-orange-500/5 to-amber-500/5 rounded-full filter blur-xl animate-pulse-soft" />
                  <img
                    src={avatarContact}
                    alt="Sandeep Reddy working at desk"
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_15px_20px_rgba(255,122,26,0.15)] animate-float"
                  />
                </div>

                <p className="text-[9.5px] text-gray-500 font-mono relative z-10">Status: Active on core pipeline. Let's build!</p>
              </div>
            </div>

          </div>

          {/* Column 2: Rich Form Entry & Simulated Ledger logs */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <form onSubmit={handleFormSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 soft-shadow space-y-4">
              <h3 className="font-display font-bold text-base text-gray-950 pb-2 border-b border-gray-100">Inquire Details</h3>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 bg-green-50 text-green-700 text-xs rounded-2xl flex items-center gap-2 border border-green-150"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Message received! Sandeep has been alerted. We'll reply within 2 hours.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 bg-red-50 text-red-600 text-xs rounded-2xl flex items-center gap-2 border border-red-150"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 font-display">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g.  Sandeep"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 font-display">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. s@hotbuzztechno.com"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 font-display">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 91234 56790"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 font-display">Project Interest</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                  >
                    <option value="Custom Web Development">Custom Web Development</option>
                    <option value="SaaS Product Development">SaaS Product Development</option>
                    <option value="Admin Dashboard Development">Admin Dashboard Development</option>
                    <option value="API Integration & Custom Code">API Integration & Custom Code</option>
                    <option value="Firebase Development">Firebase Development</option>
                    <option value="Performance & SEO Optimization">Performance & SEO Optimization</option>
                    <option value="Maintenance & Support">Maintenance & Support</option>
                    <option value="General Tech Consultation">General Tech Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 font-display">Budget Scope</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                  >
                    <option value="">Choose budget scope...</option>
                    <option value="Under ₹15,000">Under ₹15,000</option>
                    <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                    <option value="₹30,000 - ₹80,000">₹30,000 - ₹80,000</option>
                    <option value="Above ₹80,000">Above ₹80,000 (Complex SaaS)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 font-display">Your Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Sandeep about your product requirements, desired features, timeline constraints..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 disabled:bg-orange-400 text-white rounded-2xl text-xs font-bold font-display flex items-center justify-center gap-1.5 shadow-md shadow-orange-100 hover:shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <span>Sending Lead Specifications...</span>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* REAL-TIME SIMULATED LOGGED TRANSMISSIONS TABLE */}
            {submittedMessages.length > 0 && (
              <div className="bg-slate-50 border border-gray-150 rounded-3xl p-5 space-y-3.5">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-brand-orange" />
                    <span className="text-[10px] font-mono font-bold text-gray-700 uppercase tracking-wider">Local Delivery Telemetry Logs</span>
                  </div>
                  <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Durable Storage Sync</span>
                </div>

                <div className="space-y-2 max-h-[160px] overflow-y-auto">
                  {submittedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-3 bg-white rounded-xl border border-gray-150 flex justify-between items-center text-xs text-gray-600 gap-4"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <strong className="text-gray-800">{msg.name}</strong>
                          <span className="text-[9px] bg-orange-50 text-brand-orange px-1.5 py-0.2 rounded font-mono font-bold">{msg.projectType.split(' ')[0]}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-mono italic truncate max-w-sm">{msg.message}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[8px] font-mono text-gray-400 block">{msg.timestamp}</span>
                        <span className="text-[8px] text-green-500 font-bold uppercase tracking-widest block">● Deliv</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
