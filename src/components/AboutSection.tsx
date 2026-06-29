/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Database, 
  Cpu, 
  Workflow,
  Globe,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { GradientSphere } from './ThreeDIllustration';
import avatarPortrait from '../../assets/sandeep_avatar_portrait.png';


const TIMELINE_EVENTS = [
  {
    year: '2025 – Present',
    role: 'HotBers – PG Management SaaS Platform',
    company: 'Property Management SaaS',
    desc: 'Built a scalable SaaS platform that streamlines PG management with tenant onboarding, room booking, digital payments, maintenance tracking, and owner analytics. Integrated secure authentication, real-time Firebase synchronization, Razorpay payments, push notifications, and a responsive client portal to deliver a seamless experience for both property owners and tenants.'
  },
  {
    year: '2024 – 2025',
    role: 'Tvarit – AI-Powered Meal Kit Platform',
    company: 'AI-Powered Food Technology',
    desc: 'Developed an AI-powered meal planning platform that recommends personalized recipes, generates smart shopping lists, and simplifies meal preparation. Implemented intelligent recommendation workflows, responsive user interfaces, secure authentication, and cloud-based data management for a smooth end-to-end user experience.'
  },
  {
    year: '2023 – 2024',
    role: 'Full Stack Development & Engineering Projects',
    company: 'Engineering & Full Stack Projects',
    desc: 'Built multiple responsive web applications and management systems using React, Node.js, Firebase, JavaScript, and SQL. Focused on scalable architectures, REST APIs, authentication, database design, and performance optimization while following modern software engineering practices.'
  }
];

const VALUES = [
  { title: 'Transparency', desc: 'Clear, open technical status logs throughout the full development process.', color: 'border-orange-500/10 hover:border-orange-500/30' },
  { title: 'Security', desc: 'Implementing bank-grade credentials, Firestore rules, and encrypted tokens.', color: 'border-amber-500/10 hover:border-amber-500/30' },
  { title: 'Quality', desc: 'Clean, modular, self-documenting code built to pass premium lint standards.', color: 'border-slate-300/30 hover:border-slate-500/30' },
  { title: 'Scalability', desc: 'Stateless cloud setups that scale dynamically to millions of simultaneous requests.', color: 'border-orange-500/10 hover:border-orange-500/30' },
  { title: 'Communication', desc: 'Regular video-call standups, detailed requirements documents, and demo tapes.', color: 'border-amber-500/10 hover:border-amber-500/30' },
  { title: 'Long-Term Support', desc: 'Continuous performance oversight, security patches, and cloud monitoring.', color: 'border-slate-300/30 hover:border-slate-500/30' }
];

const SKILL_CATEGORIES = [
  {
    category: 'Frontend Stack',
    icon: <Code2 className="w-4 h-4 text-orange-500" />,
    skills: [
      { name: 'React 18/19', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Next.js', level: 85 },
      { name: 'Motion (Animations)', level: 90 }
    ]
  },
  {
    category: 'Backend & APIs',
    icon: <Workflow className="w-4 h-4 text-amber-500" />,
    skills: [
      { name: 'Node.js (Express)', level: 90 },
      { name: 'REST APIs Design', level: 95 },
      { name: 'Google Cloud Functions', level: 85 },
      { name: 'Webhook Pipelines', level: 88 }
    ]
  },
  {
    category: 'Database & Cloud',
    icon: <Database className="w-4 h-4 text-orange-500" />,
    skills: [
      { name: 'Firebase (Firestore)', level: 95 },
      { name: 'Firebase Auth & Rules', level: 92 },
      { name: 'PostgreSQL / SQL', level: 85 },
      { name: 'Cloud Run / Hosting', level: 88 }
    ]
  },
  {
    category: 'AI Specialization',
    icon: <Cpu className="w-4 h-4 text-amber-500" />,
    skills: [
      { name: 'Gemini SDK Integration', level: 92 },
      { name: 'AI Prompt Engineering', level: 95 },
      { name: 'Automated Agent Flows', level: 88 },
      { name: 'Structured JSON Outputs', level: 94 }
    ]
  }
];

export const AboutSection: React.FC = () => {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(0);

  return (
    <section id="about" className="relative py-12 overflow-hidden bg-transparent">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-brand-light rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-brand-medium rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2 select-none">
          <span className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase block">Biography & Vision</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">About Me</h2>
          <p className="text-xs sm:text-sm text-gray-500 font-sans">Passionate About Building Digital Solutions.</p>
        </div>

        {/* CORE BIO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            {/* My Story */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3 text-left">
              <h3 className="font-display font-bold text-lg text-gray-800 flex items-center gap-2">
                <Compass className="w-5 h-5 text-orange-500" />
                <span>My Story</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-medium">
                I'm a Full Stack Developer and SaaS builder passionate about solving tangible business problems through premium-grade technology. My expertise spans responsive frontend engineering, high-performance database architectures, serverless backends, and smart AI integration systems. I enjoy creating software that is scalable, secure, maintainable, and user-friendly.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3 text-left">
              <h3 className="font-display font-bold text-lg text-gray-800 flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-500" />
                <span>Mission</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-medium">
                To help businesses automate processes, eliminate operational bottlenecks, and build digital products that provide real, measurable business value.
              </p>
            </div>
          </div>

          {/* Column 2: Avatar & Stats Side-by-Side */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-6 justify-center bg-gray-50/50 p-6 rounded-3xl border border-gray-100 shadow-sm h-full">
            {/* Avatar Frame with Concentric Circles */}
            <div className="relative w-40 h-40 flex items-center justify-center shrink-0 select-none">
              {/* Concentric glowing rings */}
              <div className="absolute inset-0 rounded-full border border-orange-500/10 animate-spin-slow pointer-events-none scale-105" />
              <div className="absolute inset-1.5 rounded-full border-2 border-dashed border-orange-500/15 pointer-events-none" />
              <div className="absolute inset-3.5 rounded-full bg-linear-to-tr from-orange-500/5 to-amber-500/10 filter blur-sm pointer-events-none" />
              
              {/* Portrait Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border border-orange-100 relative z-10 shadow-md bg-white">
                <img 
                  src={avatarPortrait} 
                  alt="Sandeep Reddy portrait avatar" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Vertical Stats Stack */}
            <div className="flex flex-col gap-3 flex-1 w-full text-left">
              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <span className="text-2xl font-extrabold text-orange-500 font-display">1+</span>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono uppercase font-bold tracking-wider">Years</p>
                  <p className="text-[11px] text-gray-600 font-sans font-bold">Experience</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <span className="text-2xl font-extrabold text-amber-500 font-display">10+</span>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono uppercase font-bold tracking-wider">Techs</p>
                  <p className="text-[11px] text-gray-600 font-sans font-bold">Technologies</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <span className="text-2xl font-extrabold text-orange-600 font-display">5+</span>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono uppercase font-bold tracking-wider">Major</p>
                  <p className="text-[11px] text-gray-600 font-sans font-bold">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-16 text-left space-y-6">
          <h3 className="font-display font-bold text-sm text-gray-400 uppercase tracking-widest pl-2">My Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((val) => (
              <div 
                key={val.title}
                className={`p-5 bg-white rounded-2xl border soft-shadow transition-all duration-300 hover:-translate-y-0.5 ${val.color}`}
              >
                <h4 className="font-display font-bold text-xs text-gray-800 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span>{val.title}</span>
                </h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE TECH STACK & SKILLS */}
        <div className="mt-24 text-left">
          <div className="text-center max-w-md mx-auto mb-10 space-y-1.5">
            <h3 className="font-display font-bold text-2xl text-gray-800">Advanced Skill Matrix</h3>
            <p className="text-xs text-gray-400">Granular breakdown of capabilities based on live production work.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Category Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => setSelectedSkillCategory(idx)}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${selectedSkillCategory === idx ? 'border-orange-500 bg-orange-50/50 text-orange-600 font-bold shadow-sm' : 'border-gray-150 hover:border-orange-100 text-gray-600 bg-white'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${selectedSkillCategory === idx ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {cat.icon}
                    </div>
                    <span className="text-xs font-bold font-display">{cat.category}</span>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${selectedSkillCategory === idx ? 'rotate-45 text-orange-500' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>

            {/* Level Bars */}
            <div className="lg:col-span-8 bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-5 shadow-inner">
              <h4 className="font-display font-bold text-sm text-gray-700 pb-2 border-b border-gray-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>{SKILL_CATEGORIES[selectedSkillCategory].category} Competency</span>
              </h4>
              
              <div className="space-y-4">
                {SKILL_CATEGORIES[selectedSkillCategory].skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-gray-700">{skill.name}</span>
                      <span className="font-mono font-semibold text-orange-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-linear-to-r from-orange-500 to-amber-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE TIMELINE */}
        <div className="mt-28 text-left">
          <div className="text-center max-w-md mx-auto mb-14 space-y-1.5">
            <h3 className="font-display font-bold text-2xl text-gray-800">Timeline of Delivery</h3>
            <p className="text-xs text-gray-400">Verifiable milestone pathways built during technical tenure.</p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 border-l border-orange-500/20 space-y-10">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={event.year} className="relative space-y-2">
                {/* Timeline Dot Indicator */}
                <div className="absolute left-[-31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-orange-500 shadow" />
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold font-mono text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-500/10">
                    {event.year}
                  </span>
                  <span className="text-xs text-gray-400 font-medium font-display">{event.company}</span>
                </div>
                
                <h4 className="font-display font-bold text-base text-gray-800">{event.role}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
