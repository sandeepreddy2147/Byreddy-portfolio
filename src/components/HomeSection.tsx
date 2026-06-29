/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Calendar,
  Eye,
  Play,
  Star,
  Flame,
  Cpu,
  Layers,
  Laptop,
  ShieldCheck,
  History,
  Smartphone,
  TrendingUp,
  Terminal,
  Activity,
  ArrowUpRight,
  Clock,
  ArrowRight,
  UserCheck2,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ThumbsUp,
  MessageSquare,
  BookmarkCheck
} from 'lucide-react';
import {
  GradientSphere,
  AvatarIllustration,
  FloatingTechIcon,
  LaptopMockup3D,
  SmartphoneMockup3D
} from './ThreeDIllustration';
import { PageId } from '../types';
import avatarDesk from '../../assets/sandeep_avatar_desk.png';


interface HomeSectionProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

const STATS_CARDS = [
  { label: 'Experience', value: '1+ Years', desc: 'Crafting SaaS and Apps' },
  { label: 'Technologies', value: '15+ Techs', desc: 'React, Node, Firebase' },
  { label: 'Live Projects', value: '5+ Projects', desc: 'Deployed full-stack' },
  { label: 'Satisfaction', value: '100%', desc: 'Pristine client records' }
];

const STACK_ACCENTS = [
  { name: 'Clean Architecture', icon: <Layers className="w-4 h-4" /> },
  { name: 'Transparent Communication', icon: <UserCheck2 className="w-4 h-4" /> },
  { name: 'Modern UI/UX', icon: <Flame className="w-4 h-4" /> },
  { name: 'Performance Optimized', icon: <TrendingUp className="w-4 h-4" /> },
  { name: 'Secure Development', icon: <ShieldCheck className="w-4 h-4" /> },
  { name: 'Long-Term Support', icon: <Clock className="w-4 h-4" /> }
];

const FEATURES_CARDS = [
  { title: 'Business Websites', desc: 'Polished marketing pages designed with high-conversion visual strategy.', bg: 'bg-orange-50/50' },
  { title: 'SaaS Products', desc: 'Interactive subscription platforms with robust database pipelines.', bg: 'bg-amber-50/50' },
  { title: 'Admin Dashboards', desc: 'Actionable business analytics boards with clean chart models.', bg: 'bg-slate-50' },
  { title: 'AI Integration', desc: 'Empowering software with smart LLM agents, automated pipelines, and chat.', bg: 'bg-orange-50/50' },
  { title: 'Firebase Apps', desc: 'Realtime database pipelines, secure user authorization, and storage.', bg: 'bg-amber-50/50' },
  { title: 'API Integration', desc: 'Custom, high-speed connection rails matching payment and CRM workflows.', bg: 'bg-slate-50' },
  { title: 'Performance Optimization', desc: 'Boosting page scores, rendering speeds, and SEO metrics.', bg: 'bg-orange-50/50' }
];

const TESTIMONIALS = [
  {
    badge: "Founder Reflection",
    rating: "5.0 / 5.0 Vision & Execution",
    quote: "Building HotBers has been one of the most rewarding challenges of my career. From identifying real problems faced by PG owners and tenants to developing a scalable SaaS platform, every feature was designed with performance, simplicity, and user experience in mind. Leveraging React, Firebase, AI-powered features, Razorpay integration, and real-time synchronization, I focused on creating a secure, modern, and scalable solution that can grow with the business. HotBers reflects my commitment to solving real-world problems through technology.",
    author: "Byreddy Venkata Sandeep Reddy",
    role: "Founder & Full Stack Developer, HotBers",
    avatar: "BS"
  },
  {
    badge: "Capstone Project Evaluation",
    rating: "5.0 / 5.0 Capstone Project Evaluation",
    quote: "Tvarit demonstrates strong full-stack engineering skills and a practical approach to solving real-world problems through AI. The platform combines an intuitive user interface with well-structured backend architecture, showcasing effective integration of modern web technologies, cloud services, and intelligent recommendation features. The project reflects excellent problem-solving ability, clean code organization, and a solid understanding of scalable application development.",
    author: "Dr J Benita Madam",
    role: "Capstone Project Review, Full Stack Development Program",
    avatar: "JB"
  }
];

export const HomeSection: React.FC<HomeSectionProps> = ({
  onOpenBooking,
  onNavigate
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [demoPlaying, setDemoPlaying] = useState(false);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative py-6 sm:py-12 overflow-hidden bg-transparent">
      {/* Background ambient light */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-brand-medium rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-0 sm:min-h-[60vh]">
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-brand-orange text-[10px] sm:text-xs font-bold uppercase tracking-wider"
            >
              <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
              <span className="hidden sm:inline">✦ Full Stack Developer | SaaS Builder | AI Specialist</span>
              <span className="sm:hidden">✦ Full Stack Dev | SaaS | AI</span>
            </motion.div>

            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-xs sm:text-sm font-semibold text-orange-500 tracking-wide block uppercase"
              >
                Hi, I'm Byreddy Venkata Sandeep Reddy
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7.5xl tracking-tight text-gray-900 leading-[1.08]"
              >
                Building <span className="text-brand-orange">Scalable</span> Software for Modern Businesses
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm text-gray-500 max-w-lg leading-relaxed font-sans"
            >
              I help startups, entrepreneurs, and businesses transform ideas into secure, scalable, and production-ready software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 mt-2"
            >
              <button
                onClick={onOpenBooking}
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-brand-orange text-white rounded-2xl font-bold text-xs shadow-2xl shadow-orange-200 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  onNavigate('projects');
                }}
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold text-xs shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105"
              >
                <Eye className="w-4 h-4 text-gray-400" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('hotbers-showcase');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-orange-50 border border-orange-200 text-orange-600 rounded-2xl font-bold text-xs shadow-sm hover:bg-orange-100/50 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch HOTBERS Demo</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="w-full flex justify-center"
            >
              <div className="relative w-full max-w-[240px] sm:max-w-[340px] aspect-square rounded-[2rem] sm:rounded-[2.5rem] bg-white/40 backdrop-blur-lg border border-orange-500/10 p-3 sm:p-4 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-orange-500/5 to-amber-500/10 rounded-full filter blur-xl animate-pulse-soft" />
                <img
                  src={avatarDesk}
                  alt="Sandeep Reddy Developer Avatar"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_25px_30px_rgba(255,122,26,0.25)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Floating Tech Badges */}
            <FloatingTechIcon
              icon={<Sparkles className="w-5 h-5" />}
              name="AI Agent"
              className="top-0 right-4 rotate-12 animate-float"
              glow
              delay={0.4}
            />
            <FloatingTechIcon
              icon={<Laptop className="w-5 h-5" />}
              name="React"
              className="bottom-32 left-0 -rotate-12 animate-float-reverse"
              delay={0.5}
            />
            <FloatingTechIcon
              icon={<ShieldCheck className="w-5 h-5" />}
              name="Firebase"
              className="bottom-6 right-4 rotate-6 animate-float"
              delay={0.6}
            />
          </div>
        </div>

        {/* BOTTOM ACCENT RAIL */}
        <div className="mt-8 sm:mt-12 py-4 sm:py-6 border-t border-b border-orange-500/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {STACK_ACCENTS.map((accent, idx) => (
            <div
              key={accent.name}
              className="flex items-center gap-2.5 p-2 px-3 rounded-xl hover:bg-orange-50/40 transition-colors duration-200"
            >
              <div className="p-1.5 bg-orange-100 text-orange-600 rounded-lg">
                {accent.icon}
              </div>
              <span className="text-[11px] font-bold text-gray-600 tracking-tight font-display">{accent.name}</span>
            </div>
          ))}
        </div>

        {/* METRICS & STATISTICS BOARD */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center max-w-md mx-auto mb-8 sm:mb-10 space-y-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-800">Operational Excellence</h2>
            <p className="text-xs text-gray-400">Verifiable delivery milestones built across production applications.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {STATS_CARDS.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-orange-500/5 hover:border-orange-500/10 soft-shadow text-center space-y-1 sm:space-y-1.5 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-gray-400 text-[10px] sm:text-xs font-medium font-display uppercase tracking-wider">{stat.label}</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-orange-500 font-display tracking-tight">{stat.value}</div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-mono font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES & SERVICES OVERVIEW */}
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div className="text-left space-y-2">
              <span className="text-orange-500 text-xs font-mono font-bold tracking-wider uppercase block">Capabilities Spectrum</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-800">What I Excel At</h2>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                onNavigate('services');
              }}
              className="text-xs font-bold text-orange-500 flex items-center gap-1 hover:gap-2 transition-all cursor-pointer font-display"
            >
              <span>Explore full services details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES_CARDS.map((feat, idx) => (
              <div
                key={feat.title}
                className={`p-5 rounded-2xl border border-orange-500/5 soft-shadow flex flex-col justify-between h-[155px] hover:border-orange-500/20 transition-all duration-300 hover:scale-[1.01] ${feat.bg}`}
              >
                <div className="space-y-1.5 text-left">
                  <h3 className="font-display font-bold text-sm text-gray-800">{feat.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-sans">{feat.desc}</p>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    onNavigate('contact');
                  }}
                  className="flex items-center gap-1.5 text-orange-500 font-mono text-[9px] font-bold uppercase tracking-wider self-end mt-2 cursor-pointer hover:gap-2.5 transition-all"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-2.5 h-2.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PRIMARY HOTBERS FEATURED SHOWCASE */}
        <div id="hotbers-showcase" className="mt-16 sm:mt-28 bg-linear-to-br from-orange-500/5 to-amber-500/5 rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 border border-orange-500/10 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Project Copy */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[10px] font-extrabold text-orange-500 font-mono uppercase tracking-wider border border-orange-500/10">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>Featured Masterpiece</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-gray-800 tracking-tight leading-[1.1]">
                HOTBERS
              </h3>
              <p className="text-xs text-orange-500 font-semibold font-mono tracking-wide -mt-3">
                PG Management SaaS Platform
              </p>

              <p className="text-xs text-gray-500 leading-relaxed">
                A complete, production-grade cloud SaaS built to help paying guest owners streamline customer onboarding, room assignments, auto-invoicing, bookings, payments, and live complaints management. Integrates complex dashboards for both owners and renters.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-[11px] text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Owner Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Renter Console</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Auto Subscriptions</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Live Booking Engine</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    onNavigate('projects');
                  }}
                  className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-display text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://www.hotbers.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-display text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Demo Video</span>
                </a>
              </div>
            </div>

            {/* Laptop / Mobile Mockups - hidden on mobile */}
            <div className="lg:col-span-7 relative hidden sm:flex flex-col sm:flex-row items-center gap-6 justify-center">
              <LaptopMockup3D className="w-full sm:w-80 shrink-0 z-10" />
              <SmartphoneMockup3D className="w-36 shrink-0 sm:-ml-12 sm:-mt-12 z-20" />
            </div>
          </div>
        </div>

        {/* REVIEWS SLIDER SECTION */}
        <div className="mt-16 sm:mt-28 py-6 sm:py-8 bg-slate-50/50 rounded-2xl sm:rounded-3xl border border-gray-100 p-5 sm:p-8 md:p-10 text-left relative overflow-hidden">
          {/* Badge & Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100 uppercase tracking-wider">
              {TESTIMONIALS[activeTestimonial].badge}
            </span>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 text-orange-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-[10px] font-mono font-bold text-gray-400">{TESTIMONIALS[activeTestimonial].rating}</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-display font-semibold text-sm sm:text-base md:text-lg text-gray-700 italic max-w-3xl leading-relaxed">
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-display font-extrabold text-xs">
                  {TESTIMONIALS[activeTestimonial].avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-gray-800">{TESTIMONIALS[activeTestimonial].author}</h4>
                  <p className="text-[11px] text-gray-400">{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-orange-300 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-all cursor-pointer shadow-sm"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2 rounded-full transition-all ${activeTestimonial === idx ? 'bg-orange-500 w-6' : 'bg-gray-250 hover:bg-gray-300 w-2'}`}
                      aria-label={`Review ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-orange-300 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-all cursor-pointer shadow-sm"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* DEMO VIDEO MODAL PREVIEW */}
      {demoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md" onClick={() => setDemoPlaying(false)} />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-6 shadow-2xl max-w-2xl w-full border border-orange-500/10 z-10"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h4 className="font-display font-bold text-sm text-gray-800 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-orange-500" />
                <span>HOTBERS Core Demo Platform</span>
              </h4>
              <button
                onClick={() => setDemoPlaying(false)}
                className="p-1 text-gray-400 hover:text-gray-800 rounded-full bg-gray-50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Simulated interactive video display */}
            <div className="aspect-video bg-gray-950 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center p-4">
              <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-500 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase animate-pulse">
                System Active
              </div>

              <div className="text-center space-y-3 max-w-sm z-10">
                <div className="inline-flex p-3 bg-orange-500/10 text-orange-500 rounded-full animate-pulse">
                  <Activity className="w-8 h-8" />
                </div>
                <h5 className="font-display font-bold text-white text-sm">Simulated HOTBERS Terminal Sync</h5>
                <p className="text-[11px] text-gray-400">
                  This demo exhibits automated multi-tenant ledger synchronization, live tenant notification broadcasts, and secure Razorpay payment gateway callbacks.
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-1 rounded font-mono">auth_channel_ok</span>
                  <span className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-1 rounded font-mono">db_replica_synced</span>
                </div>
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setDemoPlaying(false)}
                className="px-4 py-2 bg-orange-500 text-white font-display text-xs font-bold rounded-xl shadow"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
};

// Add a tiny placeholder X icon wrapper
const X: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
