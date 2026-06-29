/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Briefcase, 
  Database, 
  Layers, 
  Check, 
  HelpCircle,
  Building2,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GradientSphere } from './ThreeDIllustration';

interface PricingSectionProps {
  onOpenBooking: (planName?: string) => void;
}

const PLANS = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: '₹3,000',
    desc: 'Perfect for startups, campaigns, and individual business introductions.',
    icon: <Rocket className="w-5 h-5 text-orange-500" />,
    features: [
      'Single page premium fluid architecture',
      'Advanced mobile-first design standard',
      'SEO meta tag schema injection',
      'Integrated contact forms & map embeds',
      'Lighthouse speed rating 95%+'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '₹15,000',
    desc: 'Professional dynamic multi-page websites designed to scale your operations.',
    icon: <Briefcase className="w-5 h-5 text-amber-500" />,
    features: [
      'Up to 5 custom layout pages',
      'CMS / blog setup integration',
      'Interactive client appointment booking',
      'Detailed analytics hook setup',
      '1-month post-launch support support'
    ],
    ctaText: 'Launch Project'
  },
  {
    id: 'admin',
    name: 'Admin Dashboard',
    price: '₹30,000',
    desc: 'Powerful administrative workspaces designed to capture data and charts.',
    icon: <Database className="w-5 h-5 text-orange-600" />,
    recommended: true,
    features: [
      'High-speed Recharts analytics models',
      'Secure tiered-role authentication',
      'CSV statement & PDF statement generation',
      'Automated backend cron schedule triggers',
      'Realtime system alerts telemetry'
    ],
    ctaText: 'Build Console'
  },
  {
    id: 'saas',
    name: 'Custom SaaS',
    price: '₹80,000',
    desc: 'Complete full stack subscription software platforms with advanced features.',
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    features: [
      'Multi-tenant database architectures',
      'Secure payment gateway callbacks hook',
      'Full renter complaint logging panels',
      'Automated email/SMS ledger alerts',
      'Enterprise security rules setup'
    ],
    ctaText: 'Develop Platform'
  }
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-white border-t border-gray-100">
      {/* Background Orbs */}
      <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-brand-medium rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase block">Investment Options</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">Simple & Transparent Pricing</h2>
          <p className="text-xs sm:text-sm text-gray-500 font-sans">Choose the best structure matching your project parameters. No hidden fees.</p>
        </div>

        {/* PRIMARY PRICING PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`group bg-white rounded-3xl p-6 sm:p-7 border border-orange-500/5 soft-shadow flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/20 relative ${plan.recommended ? 'ring-2 ring-orange-500/20' : ''}`}
            >
              {/* Highlight badge for recommended */}
              {plan.recommended && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-[8px] font-extrabold uppercase font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Popular Plan</span>
                </div>
              )}

              <div className="space-y-4 text-left">
                {/* Icon & Title */}
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-orange-50 text-orange-500 rounded-xl">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-gray-800 group-hover:text-orange-500 transition-colors">
                      {plan.name}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-medium">Starting at</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold font-display text-gray-900">{plan.price}</span>
                  <span className="text-xs text-gray-400 font-medium">/ custom</span>
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed font-sans min-h-[44px]">
                  {plan.desc}
                </p>

                {/* Features checklist */}
                <div className="space-y-2 pt-4 border-t border-orange-500/5">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-[10.5px] text-gray-600">
                      <Check className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger button */}
              <button
                onClick={() => onOpenBooking(plan.name)}
                className={`w-full mt-6 py-2.5 text-xs font-bold font-display rounded-2xl transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${plan.recommended ? 'bg-brand-orange hover:bg-orange-600 text-white shadow-md shadow-orange-100 hover:shadow-lg' : 'bg-gray-50 group-hover:bg-brand-orange group-hover:text-white border border-gray-200 group-hover:border-transparent text-gray-700'}`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          ))}
        </div>

        {/* BOTTOM ACCORDION SUMMARY STRIPS (Enterprise & Maintenance) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Strip 1: Enterprise */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 text-brand-orange rounded-2xl border border-orange-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-display font-bold text-sm text-gray-800">Enterprise Applications</h4>
                <p className="text-[11px] text-gray-400 font-mono">Custom Quote</p>
                <p className="text-[11px] text-gray-500 font-sans max-w-sm">Tailored custom cloud ecosystems for large companies requiring security compliance audits.</p>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking('Enterprise Custom App')}
              className="px-5 py-2.5 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold rounded-2xl shadow-sm transition-all flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Strip 2: Maintenance */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 text-brand-orange rounded-2xl border border-orange-100">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-display font-bold text-sm text-gray-800">Maintenance & Patch Plans</h4>
                <p className="text-[11px] text-gray-400 font-mono">Monthly plans available</p>
                <p className="text-[11px] text-gray-500 font-sans max-w-sm">Keep your landing pages and server clusters secure, fully patched, and performance-boosted.</p>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking('Monthly Maintenance Plan')}
              className="px-5 py-2.5 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold rounded-2xl shadow-sm transition-all flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Explore Plans</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
