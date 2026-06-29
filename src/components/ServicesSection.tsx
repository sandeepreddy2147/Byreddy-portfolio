/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Layers, 
  Cpu, 
  Database, 
  Flame, 
  Settings, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight,
  TrendingUp,
  Workflow,
  Sparkles
} from 'lucide-react';
import { GradientSphere } from './ThreeDIllustration';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const SERVICES = [
  {
    id: 'custom-web',
    title: 'Custom Web Development',
    desc: 'Professional responsive websites tailored to represent modern startups with flawless interactive logic.',
    price: '₹15,000',
    icon: <Laptop className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50/20',
    features: [
      'Stunning bespoke typography & design',
      'Fully responsive & mobile optimized',
      'SEO optimized structural schemas',
      'Performance rating 95%+ on lighthouse',
      'Social integrations & custom contact hooks'
    ]
  },
  {
    id: 'saas-prod',
    title: 'SaaS Product Development',
    desc: 'End-to-end web applications featuring multi-tenant auth layers, billing, dashboards, and scalable databases.',
    price: '₹80,000',
    icon: <Layers className="w-5 h-5" />,
    color: 'from-amber-500 to-yellow-500',
    bg: 'bg-amber-50/20',
    recommended: true,
    features: [
      'Owner, Admin, and Client dashboard structures',
      'Integrated subscription/billing systems',
      'Complex multi-record relational schemas',
      'Automated invoice and transaction logs',
      'Realtime customer communication hubs'
    ]
  },
  {
    id: 'admin-dash',
    title: 'Admin Dashboard Development',
    desc: 'Custom-designed internal panels displaying analytics graphs, secure user control grids, and system telemetry.',
    price: '₹30,000',
    icon: <Database className="w-5 h-5" />,
    color: 'from-orange-600 to-amber-600',
    bg: 'bg-orange-50/10',
    features: [
      'Interactive charts, logs & filter panels',
      'Multi-tiered role authorization permissions',
      'CSV / PDF report download generation',
      'Realtime pipeline stream connections',
      'System settings management consoles'
    ]
  },
  {
    id: 'api-integration',
    title: 'API Integration & Custom Code',
    desc: 'Seamless backend connections mapping payment gateways, maps, SMS, AI endpoints, and complex CRM software.',
    price: '₹10,000',
    icon: <Workflow className="w-5 h-5" />,
    color: 'from-amber-600 to-orange-600',
    bg: 'bg-amber-50/10',
    features: [
      'Razorpay, Stripe & PayPal systems',
      'Custom webhook listener microservices',
      'AI models integration (Gemini / OpenAI)',
      'Google Maps & Location Services',
      'Email & SMS alerts automation pipelines'
    ]
  },
  {
    id: 'firebase-dev',
    title: 'Firebase Development',
    desc: 'Robust cloud setups matching realtime firestore pipelines, secure user access rules, and file bucket management.',
    price: '₹3,499',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'from-orange-500 to-yellow-500',
    bg: 'bg-orange-50/20',
    features: [
      'Durable Firestore schema architecture',
      'Secure security rules design & audits',
      'Firebase serverless cloud functions',
      'Realtime chat and socket simulation',
      'Unified cloud storage file upload pipelines'
    ]
  },
  {
    id: 'perf-opt',
    title: 'Performance & SEO Optimization',
    desc: 'Audit and code correction targeting slow index times, high script delays, weak Core Web Vitals, and poor rankings.',
    price: '₹3,000',
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50/20',
    features: [
      'Asset optimizations & code-splitting',
      'Static page generation strategies',
      'Meta tags & structured JSON-LD schemas',
      'Lighthouse audit score improvements',
      'Caching layers & server response boosts'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    desc: 'Continuous application oversight, periodic server patch updates, minor enhancements, and monitoring.',
    price: '₹2,000 / mo',
    icon: <Settings className="w-5 h-5" />,
    color: 'from-zinc-600 to-zinc-800',
    bg: 'bg-zinc-50',
    features: [
      'Weekly database and credential backup',
      'Rapid hotfix response for vital crashes',
      'Minor front-end design tweaks & edits',
      'Server health alerts & logs reporting',
      'Dependency update testing schedules'
    ]
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="relative py-12 overflow-hidden bg-transparent">
      {/* Large Spinning Gear in background */}
      <div className="absolute right-[-80px] top-[40%] text-gray-200/50 opacity-30 pointer-events-none z-0 animate-spin-slow">
        <Settings className="w-72 h-72" />
      </div>

      {/* Background Orbs */}
      <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-brand-medium rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2 select-none">
          <span className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase block">Premium Offerings</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">My Services</h2>
          <p className="text-xs sm:text-sm text-gray-500 font-sans">High-quality solutions tailored to your business needs.</p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {SERVICES.map((serv) => (
            <div 
              key={serv.id}
              className={`group bg-[#FAF3ED]/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-brand-medium soft-shadow flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange/35 relative overflow-hidden ${serv.recommended ? 'ring-2 ring-orange-500/25 bg-white/80' : 'bg-white/60'}`}
            >
              {/* Recommended Badge */}
              {serv.recommended && (
                <div className="absolute top-4 right-4 bg-brand-orange text-white text-[8px] font-extrabold uppercase font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Popular</span>
                </div>
              )}

              {/* Card Header */}
              <div className="space-y-4 text-left">
                <div className={`w-11 h-11 rounded-xl bg-linear-to-tr ${serv.color} text-white flex items-center justify-center soft-shadow transition-transform duration-300 group-hover:rotate-6`}>
                  {serv.icon}
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-base text-gray-800 tracking-tight group-hover:text-orange-500 transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-mono mt-1 flex items-baseline gap-1">Starting From <span className="font-display font-black text-orange-500 text-sm sm:text-base">{serv.price}</span></p>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  {serv.desc}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-4 border-t border-orange-500/5 mt-4 text-left">
                {serv.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-[11px] text-gray-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Book Service Action Button */}
              <button
                onClick={() => onOpenBooking(serv.title)}
                className="w-full mt-6 py-2.5 bg-gray-50 group-hover:bg-brand-orange hover:opacity-90 group-hover:text-white border border-gray-200 group-hover:border-transparent text-gray-700 rounded-2xl text-xs font-bold font-display transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
