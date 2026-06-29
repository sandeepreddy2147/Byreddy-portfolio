/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  FileSearch, 
  Map, 
  Video, 
  Palette, 
  Code2, 
  SearchCode, 
  CloudLightning, 
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GradientSphere } from './ThreeDIllustration';

const STEPS = [
  {
    num: '01',
    title: 'Requirement Gathering',
    desc: 'Understand your business goals in depth. Take detailed, meticulous notes, and identify critical technological hurdles early on.',
    icon: <FileSearch className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50/50'
  },
  {
    num: '02',
    title: 'Project Planning',
    desc: 'Establish a comprehensive features checklist, user workflow path, relational database schema diagrams, and architecture roadmap.',
    icon: <Map className="w-5 h-5" />,
    color: 'from-amber-500 to-yellow-500',
    bg: 'bg-amber-50/50'
  },
  {
    num: '03',
    title: 'Video Call Discussion',
    desc: 'Hop on a live video-call to clarify logic structures, review wireframes, address concerns, and refine overall scope alignment.',
    icon: <Video className="w-5 h-5" />,
    color: 'from-orange-600 to-amber-600',
    bg: 'bg-orange-50/40'
  },
  {
    num: '04',
    title: 'UI/UX Design',
    desc: 'Construct fluid high-contrast desktop & mobile interface layouts. Map exact user pathways and get final brand visual approvals.',
    icon: <Palette className="w-5 h-5" />,
    color: 'from-amber-600 to-orange-600',
    bg: 'bg-amber-50/40'
  },
  {
    num: '05',
    title: 'Development',
    desc: 'Construct the product iteratively module-by-module. Share continuous staging links, build with TypeScript, and maintain clean commit history.',
    icon: <Code2 className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50/50'
  },
  {
    num: '06',
    title: 'Testing & QA',
    desc: 'Conduct extreme responsive verification, end-to-end user testing, load/speed audits, and strict Firebase security rule reviews.',
    icon: <SearchCode className="w-5 h-5" />,
    color: 'from-amber-500 to-yellow-500',
    bg: 'bg-amber-50/50'
  },
  {
    num: '07',
    title: 'Deployment & Launch',
    desc: 'Deploy static bundles to high-speed CDN hosting, set up custom domains, connect SSL certifications, and configure cloud monitoring.',
    icon: <CloudLightning className="w-5 h-5" />,
    color: 'from-orange-600 to-amber-600',
    bg: 'bg-orange-50/40'
  },
  {
    num: '08',
    title: 'Knowledge Transfer',
    desc: 'Handover clean source files, structural documentation, server credentials, step-by-step deployment guidebooks, and support guidelines.',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'from-amber-600 to-orange-600',
    bg: 'bg-amber-50/40'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative py-24 overflow-hidden bg-white border-t border-gray-100">
      {/* Background Orbs */}
      <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-brand-medium rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase block">Operational Framework</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">My Development Workflow</h2>
          <p className="text-xs sm:text-sm text-gray-500">A structured, completely transparent milestone process mapping every stage of project delivery.</p>
        </div>

        {/* WORKFLOW PATH STAGGERED GRID */}
        <div className="relative">
          {/* Decorative glowing connector path in the center for desktop */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#FF7A1A]/10 via-[#FF7A1A]/30 to-[#FF7A1A]/10 hidden lg:block -translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-stretch relative">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.num}
                  className={`flex flex-col sm:flex-row items-stretch gap-4 p-5 rounded-3xl bg-white border border-gray-150 soft-shadow transition-all duration-300 hover:border-brand-orange/30 group hover:-translate-y-1 relative ${isEven ? 'lg:text-left' : 'lg:text-left lg:flex-row-reverse'}`}
                >
                  
                  {/* Decorative glowing point matching the center line */}
                  <div className={`absolute top-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-orange shadow hidden lg:block -translate-y-1/2 z-10 ${isEven ? '-right-[31px]' : '-left-[31px]'}`} />

                  {/* Icon Circle */}
                  <div className="shrink-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-2xl bg-linear-to-tr ${step.color} text-white flex items-center justify-center soft-shadow transition-transform duration-300 group-hover:rotate-6`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Description */}
                  <div className="space-y-1.5 flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-extrabold text-brand-orange text-sm tracking-widest">{step.num}</span>
                      <h3 className="font-display font-bold text-sm text-gray-800 group-hover:text-brand-orange transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
