/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Database, 
  Cpu, 
  Terminal, 
  Code, 
  Zap, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Chrome
} from 'lucide-react';

interface SphereProps {
  size?: string;
  color?: string;
  className?: string;
}

export const GradientSphere: React.FC<SphereProps> = ({ 
  size = 'w-64 h-64', 
  color = 'from-orange-500/10 to-transparent', 
  className = '' 
}) => {
  return (
    <div 
      className={`absolute rounded-full bg-linear-to-tr filter blur-2xl animate-pulse-soft pointer-events-none ${size} ${color} ${className}`}
    />
  );
};

export const FloatingCodeCard: React.FC<{ delay?: number; text: string; className?: string }> = ({ 
  delay = 0, 
  text, 
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, type: 'spring' }}
      className={`absolute glass-panel p-3 rounded-xl soft-shadow pointer-events-none animate-float text-xs font-mono select-none border border-orange-500/10 ${className}`}
    >
      <div className="flex gap-1.5 mb-1.5">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      <span className="text-gray-400">const</span> <span className="text-orange-500">app</span> = <span className="text-blue-500">{text}</span>;
    </motion.div>
  );
};

export const FloatingTechIcon: React.FC<{ 
  icon: React.ReactNode; 
  name: string; 
  className?: string; 
  delay?: number;
  glow?: boolean;
}> = ({ icon, name, className = '', delay = 0, glow = false }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay, 
        type: 'spring', 
        stiffness: 100, 
        damping: 10 
      }}
      className={`absolute group cursor-pointer z-10 ${className}`}
    >
      <div className={`p-4 rounded-2xl bg-white soft-shadow flex flex-col items-center justify-center border border-orange-500/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-orange-500/30 ${glow ? 'glow-orange' : ''} preserve-3d perspective-1000`}>
        <div className="text-orange-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          {icon}
        </div>
        <span className="mt-1.5 text-[10px] font-medium tracking-wide text-gray-400 font-display opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

export const LaptopMockup3D: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative perspective-1000 preserve-3d transition-transform duration-700 ease-out hover:rotate-y-6 hover:rotate-x-2 ${className}`}>
      {/* Laptop Screen Frame */}
      <div className="relative bg-zinc-900 border-4 border-zinc-800 rounded-t-2xl shadow-2xl w-full aspect-16/10 overflow-hidden">
        {/* Inner glare */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />
        
        {/* Web browser header */}
        <div className="h-6 bg-zinc-850 border-b border-zinc-800 flex items-center justify-between px-3">
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <div className="bg-zinc-800 text-[9px] text-zinc-400 font-mono px-6 py-0.5 rounded flex items-center gap-1.5 w-1/2 justify-center">
            <Chrome className="w-2.5 h-2.5 text-zinc-500" />
            <span>hotbers.in</span>
          </div>
          <div className="w-6" />
        </div>
        
        {/* Screen Content */}
        <div className="absolute inset-x-0 bottom-0 top-6 bg-gray-50 overflow-hidden flex items-center justify-center">
          {children || (
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-12 bg-orange-100 text-orange-600 text-[10px] font-bold rounded px-1.5 flex items-center justify-center">
                  Live
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between h-20">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-gray-400">Total Users</span>
                    <Users className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-lg font-bold font-display text-gray-800">14,235</span>
                  <span className="text-[8px] text-green-500">+12% vs last month</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between h-20">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-gray-400">Monthly Revenue</span>
                    <DollarSign className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-lg font-bold font-display text-gray-800">$48,920</span>
                  <span className="text-[8px] text-green-500">+18% growth speed</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between h-20">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-gray-400">AI Analytics</span>
                    <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-lg font-bold font-display text-gray-800">98.4%</span>
                  <span className="text-[8px] text-gray-400">Optimum Performance</span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                  <span className="text-[10px] font-bold text-gray-700 font-display">System Telemetry Logs</span>
                  <span className="text-[9px] font-mono text-orange-500">All Nodes Stable</span>
                </div>
                <div className="space-y-1.5 font-mono text-[8px] text-gray-400">
                  <div className="flex justify-between">
                    <span>&gt; db_pipeline_auth_stream_connected</span>
                    <span className="text-green-500">OK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt; sync_google_calendar_agent_pool</span>
                    <span className="text-green-500">SYNCED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt; applet_route_node_balancer_v2</span>
                    <span className="text-orange-500">STABLE</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Laptop Keyboard Base */}
      <div className="relative h-2.5 bg-zinc-800 w-[110%] -left-[5%] rounded-b-xl border-t border-zinc-700 shadow-2xl">
        <div className="absolute top-0 inset-x-[45%] h-1 bg-zinc-900 rounded-b" />
      </div>
      <div className="relative h-1 bg-zinc-900 w-[100%] -left-[0%] rounded-b-xl blur-[1px] opacity-40 mx-auto" />
    </div>
  );
};

export const SmartphoneMockup3D: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative perspective-1000 preserve-3d transition-transform duration-700 ease-out hover:rotate-y-12 hover:-rotate-x-2 ${className}`}>
      <div className="bg-zinc-900 border-4 border-zinc-800 rounded-4xl shadow-2xl w-44 aspect-[9/19] overflow-hidden p-2 relative">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20 flex items-center justify-between px-1.5">
          <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
          <span className="text-[6px] text-zinc-400 font-mono">HOTBERS</span>
        </div>
        
        {/* Screen Interface */}
        <div className="bg-gray-50 rounded-[1.6rem] h-full w-full overflow-hidden flex items-center justify-center text-gray-800 font-sans">
          {children || (
            <div className="space-y-2.5 p-2.5 pt-7 overflow-y-auto h-full w-full">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold font-display text-gray-800">Booking App</span>
                <span className="text-[8px] bg-orange-100 text-orange-600 px-1 rounded-full font-bold">V2</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-gray-150 shadow-sm flex flex-col justify-center text-center">
                <span className="text-[8px] text-gray-400">Total Bookings</span>
                <span className="text-sm font-bold text-orange-500 font-display">1,480+</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-gray-150 shadow-sm space-y-1.5">
                <span className="text-[8px] font-bold text-gray-500 block">Upcoming Consults</span>
                <div className="flex items-center justify-between border-l-2 border-orange-500 pl-1.5">
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] font-bold text-gray-800">SaaS Strategy call</span>
                    <span className="text-[6px] text-gray-400">Sandeep Reddy & Guest</span>
                  </div>
                  <span className="text-[7px] bg-gray-50 text-orange-500 font-bold p-1 rounded">2:30 PM</span>
                </div>
                <div className="flex items-center justify-between border-l-2 border-zinc-300 pl-1.5">
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] font-bold text-gray-800">API Pipeline Refactor</span>
                    <span className="text-[6px] text-gray-400">Client Syncup</span>
                  </div>
                  <span className="text-[7px] bg-gray-50 text-gray-400 font-bold p-1 rounded">4:00 PM</span>
                </div>
              </div>
              <div className="bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl p-2 text-center shadow-md cursor-pointer hover:opacity-90 active:scale-95 transition-all">
                <span className="text-[8px] font-bold block">Book consultation</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const AvatarIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Multi-layered halo / glowing orbs */}
      <div className="absolute inset-0 bg-linear-to-tr from-orange-500/10 to-amber-500/20 rounded-full filter blur-xl animate-pulse-soft" />
      
      {/* 3D Glass card behind */}
      <div className="absolute -inset-4 bg-white/20 backdrop-blur-md rounded-[2.5rem] border border-white/50 -rotate-3 transition-transform duration-500 hover:rotate-3 shadow-lg" />
      
      {/* Main Avatar Drawing inside high end mockup frame */}
      <div className="relative bg-white/60 backdrop-blur-lg border border-orange-500/10 rounded-[2.5rem] p-6 soft-shadow flex flex-col items-center justify-center overflow-hidden h-[380px] w-full">
        
        {/* Geometric aesthetic lines */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-linear-to-r from-transparent via-orange-500/20 to-transparent" />
        <div className="absolute bottom-10 -right-20 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute -top-10 -left-20 w-40 h-40 bg-orange-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-reverse" />

        {/* 3D Vector Avatar Representation */}
        <div className="relative w-48 h-48 mb-4">
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="skinGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE5D9" />
                <stop offset="100%" stopColor="#FFCBB5" />
              </linearGradient>
              <linearGradient id="hairGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2D2D2D" />
                <stop offset="100%" stopColor="#121212" />
              </linearGradient>
              <linearGradient id="hoodieGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="accentOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8C39" />
                <stop offset="100%" stopColor="#FF5E00" />
              </linearGradient>
            </defs>
            
            {/* Background Halo */}
            <circle cx="100" cy="100" r="90" fill="#FFF7F2" />
            <circle cx="100" cy="100" r="85" fill="none" stroke="#FFE8D6" strokeWidth="2" strokeDasharray="5 5" />
            
            {/* Body / Hoodie */}
            <path d="M40,185 C40,150 65,120 100,120 C135,120 160,150 160,185 Z" fill="url(#hoodieGlow)" />
            {/* Hoodie strings */}
            <line x1="90" y1="130" x2="90" y2="155" stroke="#FF7A1A" strokeWidth="3" strokeLinecap="round" />
            <line x1="110" y1="130" x2="110" y2="155" stroke="#FF7A1A" strokeWidth="3" strokeLinecap="round" />
            {/* String beads */}
            <circle cx="90" cy="155" r="3.5" fill="#FFF7F2" />
            <circle cx="110" cy="155" r="3.5" fill="#FFF7F2" />

            {/* Neck */}
            <rect x="88" y="100" width="24" height="25" fill="url(#skinGlow)" rx="4" />
            
            {/* Face */}
            <rect x="70" y="45" width="60" height="65" fill="url(#skinGlow)" rx="24" />
            
            {/* Hair */}
            {/* Main mass */}
            <path d="M68,52 C65,30 90,25 100,28 C110,25 135,30 132,52 C138,58 132,70 132,70 C132,70 128,45 100,45 C72,45 68,70 68,70 Z" fill="url(#hairGlow)" />
            {/* Hair spike details */}
            <path d="M72,42 Q80,28 92,34 Q100,28 112,32 Q125,28 128,44" fill="none" stroke="url(#hairGlow)" strokeWidth="6" strokeLinecap="round" />
            {/* Quiff / Fringe */}
            <path d="M75,45 Q90,38 102,40 Q118,35 125,48" fill="none" stroke="url(#hairGlow)" strokeWidth="5" strokeLinecap="round" />
            
            {/* Beard / Stubble detail */}
            <path d="M70,80 C70,105 85,115 100,115 C115,115 130,105 130,80 L124,80 C124,100 112,108 100,108 C88,108 76,100 76,80 Z" fill="#4B5563" opacity="0.15" />

            {/* Eyebrows */}
            <path d="M78,63 Q85,58 92,62" fill="none" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M108,62 Q115,58 122,63" fill="none" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Eyes */}
            <circle cx="85" cy="69" r="4.5" fill="#1E293B" />
            <circle cx="115" cy="69" r="4.5" fill="#1E293B" />
            {/* Eye light reflections */}
            <circle cx="86.5" cy="67.5" r="1.5" fill="#FFFFFF" />
            <circle cx="116.5" cy="67.5" r="1.5" fill="#FFFFFF" />
            
            {/* Glasses */}
            <rect x="74" y="62" width="22" height="15" rx="6" fill="none" stroke="#FF7A1A" strokeWidth="3" />
            <rect x="104" y="62" width="22" height="15" rx="6" fill="none" stroke="#FF7A1A" strokeWidth="3" />
            <line x1="96" y1="69" x2="104" y2="69" stroke="#FF7A1A" strokeWidth="3" />
            <path d="M74,69 L69,69" stroke="#FF7A1A" strokeWidth="3" />
            <path d="M126,69 L131,69" stroke="#FF7A1A" strokeWidth="3" />
            
            {/* Nose */}
            <path d="M100,72 L100,82 Q100,85 103,85" fill="none" stroke="#E0A38B" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Smile */}
            <path d="M90,92 Q100,100 110,92" fill="none" stroke="#E06D53" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Title Tag */}
        <h3 className="font-display font-semibold text-lg text-gray-800 text-center mb-1 flex items-center gap-1.5">
          Byreddy Venkata Sandeep Reddy <Sparkles className="w-4 h-4 text-orange-500 animate-spin-slow" />
        </h3>
        <p className="text-xs text-orange-500 font-mono font-medium tracking-wide uppercase">
          Full Stack & AI Architect
        </p>
        
        {/* Mini interactive terminal line */}
        <div className="w-full mt-4 bg-gray-950 rounded-xl p-3 text-[10px] font-mono text-gray-300 flex items-center justify-between border border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-400">status:</span>
            <span className="text-green-400">Available for Contracts</span>
          </div>
          <span className="text-gray-600">TZ: IST (UTC+5.5)</span>
        </div>
      </div>
    </div>
  );
};
