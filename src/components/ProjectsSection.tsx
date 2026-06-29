/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Laptop,
  Smartphone,
  Layers,
  Code2,
  ExternalLink,
  Github,
  CheckCircle2,
  TrendingUp,
  Users,
  DollarSign,
  Database,
  ShieldCheck,
  ArrowRight,
  Workflow,
  Sparkles,
  Play,
  FileText,
  X
} from 'lucide-react';
import { GradientSphere } from './ThreeDIllustration';
import { Project } from '../types';
import hotbersDesktop from '../../assets/hotbers_dashboard_desktop.png';

interface ProjectsSectionProps {
  onOpenBooking: () => void;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'hotbers',
    title: 'HOTBERS',
    subtitle: 'Paying Guest Management SaaS Platform',
    description: 'A complete, enterprise-level multi-tenant platform designed to automate operations for Paying Guest (PG) and hostel owners.',
    problem: 'Traditional Paying Guest operations are plagued by manual rental logs, delayed invoicing, untracked tenant handovers, paper payment slips, and scattered complaint messages.',
    solution: 'Engineered a centralized, real-time database architecture enabling automated billing alerts, tenant onboarding logs, live payment receipts, and automated renter complaint ticketing.',
    technologies: ['React 19', 'Firebase Firestore', 'Firebase Auth', 'Node.js', 'Tailwind v4', 'Webhooks'],
    features: [
      'Owner, Admin & Tenant dashboard tiers',
      'Automated subscription & e-bill generation',
      'Realtime ledger logs & data downloads',
      'Unified tenant complaint ticketing pipeline',
      'Fully responsive fluid interface grid'
    ],
    liveUrl: 'https://www.hotbers.in/',
    category: 'SaaS Platform',
    stats: [
      { label: 'Active Renters', value: '450+ Renters' },
      { label: 'Payments Synced', value: '100% Logs' },
      { label: 'Billing Speed', value: 'Instant' }
    ],
    highlightColor: 'text-orange-500'
  },
  {
    id: 'tvarit',
    title: 'TVARIT',
    subtitle: 'AI-Powered Smart Meal Kit Platform',
    description: 'An intelligent food-tech platform that recommends personalized recipes, delivers portion-based ingredient kits, and simplifies healthy cooking through AI-driven meal planning and cloud-based order management.',
    problem: 'Many people struggle to prepare healthy meals due to busy schedules, lack of recipe knowledge, and difficulty purchasing the exact ingredients required. Traditional grocery shopping often results in food waste and unnecessary expenses.',
    solution: 'Tvarit is an AI-powered meal kit platform that recommends personalized recipes based on user preferences, dietary goals, allergies, and available ingredients. It provides perfectly portioned ingredient kits, guided cooking instructions, and a seamless online ordering experience.',
    technologies: ['React 19', 'Firebase Auth', 'Cloud Firestore', 'Cloud Functions', 'Node.js', 'Tailwind CSS', 'Google Maps API', 'AI Engine'],
    features: [
      'AI Recipe Recommendation Engine',
      'Personalized Meal Planning',
      'Smart Ingredient Kits',
      'Weekly & Monthly Subscription Plans',
      'Real-Time Order Tracking',
      'Secure Payment Integration',
      'AI Chat Assistant for Cooking Guidance',
      'Admin Dashboard, Inventory & Order Management'
    ],
    liveUrl: 'https://tvarit-gamma.vercel.app/login',
    githubUrl: 'https://github.com/sandeepreddy2147/tvarit',
    category: 'AI Platform',
    stats: [
      { label: 'AI Match Rate', value: '98%' },
      { label: 'Food Waste Reduction', value: '35%' },
      { label: 'Order Velocity', value: 'Fast' }
    ],
    highlightColor: 'text-orange-500'
  },
  {
    id: 'api-demo',
    title: 'API Integration & Pipeline Demo',
    subtitle: 'Unified Callback Orchestration Service',
    description: 'A transactionally-durable backend routing utility connecting payment gateways, maps, and SMS brokers.',
    problem: 'Distributed SaaS applications frequently fail to align payment callbacks, maps geocoding triggers, and CRM alerts, causing state desynchronizations.',
    solution: 'Designed an idempotent Express webhook listener and retry queue orchestrating Razorpay, Twilio alerts, and Google Maps location validation gracefully.',
    technologies: ['Node.js', 'Express.js', 'Webhooks', 'Axios API', 'TypeScript'],
    features: [
      'Automated retry queue mechanisms',
      'Secure encrypted callback checksum checks',
      'Twilio SMS alerts dispatch pipeline',
      'Google Maps geocoding alignment',
      'Detailed log streaming viewer'
    ],
    category: 'API Connection',
    stats: [
      { label: 'Callback Latency', value: '<250ms' },
      { label: 'Webhook Durability', value: '99.9%' }
    ],
    highlightColor: 'text-amber-500'
  },
  {
    id: 'business-dashboard',
    title: 'Business Dashboard & Analytics',
    subtitle: 'High-Density Executive Analytics Board',
    description: 'A real-time telemetry control center displaying complex data vectors, transactional ledgers, and download options.',
    problem: 'Managers face information overload from slow, unaligned reports lacking real-time stream updates and spreadsheet exports.',
    solution: 'Engineered a fluid dashboard harnessing Recharts models, local storage persistence, responsive widgets, and instant PDF ledger generation.',
    technologies: ['React 19', 'Recharts', 'Tailwind CSS', 'jsPDF', 'LocalStorage'],
    features: [
      'Live charting models with custom filters',
      'High-speed data vector tables with sorting',
      'Dynamic PDF and CSV statement downloads',
      'Custom alerts telemetry indicators',
      'Responsive bento-style design interface'
    ],
    category: 'Admin Dashboard',
    stats: [
      { label: 'Render Response', value: '<50ms' },
      { label: 'Metrics Models', value: '12 Channels' }
    ],
    highlightColor: 'text-orange-600'
  },
  {
    id: 'auth-system',
    title: 'Authentication & Security Hub',
    subtitle: 'Enterprise Guarded Gateway',
    description: 'A robust user access and security module integrating multi-factor login controls and strict database rules.',
    problem: 'Traditional database backends are vulnerable to client-side credential spoofing and loose field authorizations.',
    solution: 'Configured a secure login manager utilizing Google OAuth, token verification routines, and rigorous Firestore row-level security assertions.',
    technologies: ['Firebase Auth', 'Firestore Rules', 'React 19', 'Tailwind CSS'],
    features: [
      'Google, Email, and Phone verification flows',
      'Granular row-level Firestore authorization checks',
      'JSON Web Token (JWT) local encodings',
      'Comprehensive security audits analyzer',
      'Session longevity management'
    ],
    category: 'Security Hub',
    stats: [
      { label: 'Security Score', value: 'A+ Rated' },
      { label: 'Auth Handshake', value: 'Secure' }
    ],
    highlightColor: 'text-amber-600'
  }
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenBooking }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-white border-t border-gray-100">
      {/* Background Orbs */}
      <div className="absolute top-10 -right-20 w-[600px] h-[600px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-[500px] h-[500px] bg-brand-medium rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase block">Technical Showcase</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">My Projects</h2>
          <p className="text-xs sm:text-sm text-gray-500">Production-grade applications built with precision engineering, clean security, and rich interfaces.</p>
        </div>

        {/* PROJECTS GRID DISPLAY */}
        <div className="space-y-16">

          {/* 1. SPOTLIGHT: HOTBERS PROJECT SHOWCASE */}
          <div className="bg-white rounded-4xl p-6 sm:p-10 border border-gray-200 soft-shadow text-left relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Product Info */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-orange-50 text-brand-orange rounded-full text-[10px] font-extrabold uppercase font-mono border border-orange-100">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>Primary Case Study</span>
                </div>

                <h3 className="font-display font-black text-3xl text-gray-950 leading-none">HOTBERS</h3>
                <p className="text-xs text-brand-orange font-mono font-bold uppercase tracking-wider -mt-3">PG Management Cloud SaaS</p>

                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  A high-fidelity SaaS ecosystem designed specifically for hostel and paying guest owners. It centralizes rent logs, speeds up tenant registrations, logs online payments, and processes maintenance requests automatically.
                </p>

                {/* Micro metrics */}
                <div className="grid grid-cols-3 gap-3 bg-gray-50/50 p-3 rounded-2xl border border-gray-100 text-center">
                  {PROJECTS_DATA[0].stats?.map((stat) => (
                    <div key={stat.label} className="space-y-0.5">
                      <span className="text-[9px] text-gray-400 block font-mono font-bold uppercase">{stat.label}</span>
                      <span className="text-sm font-extrabold text-brand-orange font-display">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {PROJECTS_DATA[0].technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-gray-50 text-[10px] text-gray-600 font-mono font-bold rounded-lg border border-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedCaseStudy(PROJECTS_DATA[0])}
                    className="px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-display text-xs font-bold rounded-2xl shadow-md transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>
                  {PROJECTS_DATA[0].liveUrl && (
                    <a
                      href={PROJECTS_DATA[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-display text-xs font-bold rounded-2xl transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main HOTBERS Showcase Image */}
              <div className="lg:col-span-7 flex items-center justify-center">
                <img
                  src={hotbersDesktop}
                  alt="HOTBERS Admin Dashboard"
                  className="w-full object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>

            </div>
          </div>

          {/* 2. SECONDARY PROJECTS GRID (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.slice(1).map((proj) => (
              <div
                key={proj.id}
                className="group bg-white rounded-3xl p-6 border border-orange-500/5 soft-shadow flex flex-col justify-between h-[390px] hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-orange-500/5">
                    <span className="text-[9px] font-mono font-bold text-orange-500 uppercase tracking-widest">{proj.title.split(' ')[0]} API</span>
                    <div className="flex gap-2">
                      {proj.stats?.map((st) => (
                        <span key={st.label} className="text-[8px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded font-bold font-mono">
                          {st.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-gray-800 group-hover:text-orange-500 transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-medium font-sans">{proj.subtitle}</p>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-gray-50 text-[9px] text-gray-500 font-mono font-bold rounded border border-gray-100">
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[8px] text-gray-400 font-mono font-bold bg-gray-50 rounded">
                        +{proj.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-orange-500/5 mt-4">
                  <button
                    onClick={() => setSelectedCaseStudy(proj)}
                    className="text-xs font-bold text-orange-500 font-display flex items-center gap-1 hover:gap-1.5 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex gap-1.5">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                        title="Github Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                        title="Live App"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* CASE STUDY DETAIL DIALOG */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/65 backdrop-blur-md" onClick={() => setSelectedCaseStudy(null)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white rounded-3xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl border border-orange-500/10 z-10 relative flex flex-col max-h-[85vh] overflow-y-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 bg-gray-50 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-wider block mb-1">In-Depth Case Study</span>
                  <h3 className="font-display font-black text-2xl text-gray-800 leading-none">{selectedCaseStudy.title}</h3>
                  <p className="text-xs text-gray-400 font-semibold mt-1">{selectedCaseStudy.subtitle}</p>
                </div>

                {/* Problem vs Solution bento rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-500/5 text-left space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest">The Problem</span>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">{selectedCaseStudy.problem}</p>
                  </div>
                  <div className="p-4 bg-green-50/50 rounded-2xl border border-green-500/5 text-left space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-green-600 uppercase tracking-widest">The Solution</span>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">{selectedCaseStudy.solution}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-gray-800 border-b border-gray-100 pb-2">Core Delivered Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCaseStudy.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech & Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {selectedCaseStudy.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-gray-100 text-[10px] text-gray-600 font-mono font-bold rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {selectedCaseStudy.liveUrl && (
                      <a
                        href={selectedCaseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                      >
                        <span>Live App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {selectedCaseStudy.githubUrl && (
                      <a
                        href={selectedCaseStudy.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-200 hover:border-gray-400 text-gray-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Codebase</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
