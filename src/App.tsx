/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PageId } from './types';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <div 
      id={id} 
      className="max-w-5xl mx-auto my-12 bg-white rounded-4xl border border-orange-500/5 shadow-2xl overflow-hidden scroll-mt-24 relative z-10 transition-all duration-300 hover:shadow-orange-100/40 hover:border-orange-500/10"
    >
      {/* Mockup Browser Header */}
      <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center justify-between px-6 select-none">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="bg-white border border-gray-200/85 text-[10px] text-gray-400 font-mono px-8 py-1 rounded-full flex items-center gap-1.5 justify-center w-5/12 sm:w-1/3 shadow-inner">
          <span className="text-gray-300">https://</span>
          <span className="text-gray-600 font-medium">sandeep-reddy.dev/{id === 'home' ? '' : id}</span>
        </div>
        <div className="w-12 text-right">
          <span className="text-[9px] font-mono font-bold text-gray-400 tracking-widest uppercase">{id}</span>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefillService, setBookingPrefillService] = useState<string | undefined>(undefined);

  // Scroll Spy to automatically highlight the active section in the header
  useEffect(() => {
    const handleScroll = () => {
      const sections: PageId[] = ['home', 'about', 'services', 'projects', 'process', 'pricing', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 250; // Offset for wrapper height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActivePage(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (servicePrefill?: string) => {
    setBookingPrefillService(servicePrefill);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefillService(undefined);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF3ED] text-gray-850 selection:bg-orange-100 selection:text-orange-600 pb-16 overflow-hidden">
      
      {/* 3D Floating Spheres in Background */}
      <div className="absolute top-[15vh] left-[5%] w-32 h-32 rounded-full three-d-sphere pointer-events-none z-0 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[90vh] right-[3%] w-24 h-24 rounded-full three-d-sphere pointer-events-none z-0 animate-float-reverse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[220vh] left-[2%] w-28 h-28 rounded-full three-d-sphere pointer-events-none z-0 animate-float" style={{ animationDelay: '0.8s' }} />
      <div className="absolute top-[360vh] right-[5%] w-36 h-36 rounded-full three-d-sphere pointer-events-none z-0 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[530vh] left-[4%] w-20 h-20 rounded-full three-d-sphere pointer-events-none z-0 animate-float-reverse" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-[690vh] right-[4%] w-30 h-30 rounded-full three-d-sphere pointer-events-none z-0 animate-float" style={{ animationDelay: '0.5s' }} />

      {/* Sticky Header */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Sections Stack */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 z-10">
        <SectionWrapper id="home">
          <HomeSection 
            onOpenBooking={() => handleOpenBooking()} 
            onNavigate={(page) => setActivePage(page)} 
          />
        </SectionWrapper>
        
        <SectionWrapper id="about">
          <AboutSection />
        </SectionWrapper>
        
        <SectionWrapper id="services">
          <ServicesSection 
            onOpenBooking={(service) => handleOpenBooking(service)} 
          />
        </SectionWrapper>
        
        <SectionWrapper id="projects">
          <ProjectsSection 
            onOpenBooking={() => handleOpenBooking()} 
          />
        </SectionWrapper>
        
        <SectionWrapper id="process">
          <ProcessSection />
        </SectionWrapper>
        
        <SectionWrapper id="pricing">
          <PricingSection 
            onOpenBooking={(plan) => handleOpenBooking(plan)} 
          />
        </SectionWrapper>
        
        <SectionWrapper id="faq">
          <FAQSection />
        </SectionWrapper>
        
        <SectionWrapper id="contact">
          <ContactSection />
        </SectionWrapper>

        {/* Footer wrapped in browser layout card */}
        <div className="max-w-5xl mx-auto my-12 bg-white rounded-4xl border border-orange-500/5 shadow-2xl overflow-hidden relative z-10">
          <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center justify-between px-6 select-none">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="bg-white border border-gray-200/85 text-[10px] text-gray-400 font-mono px-8 py-1 rounded-full flex items-center gap-1.5 justify-center w-5/12 sm:w-1/3 shadow-inner">
              <span className="text-gray-300">https://</span>
              <span className="text-gray-650 font-medium">sandeep-reddy.dev/footer</span>
            </div>
            <div className="w-12 text-right">
              <span className="text-[9px] font-mono font-bold text-gray-400 tracking-widest uppercase">footer</span>
            </div>
          </div>
          <Footer 
            onNavigate={(page) => setActivePage(page)} 
            onOpenBooking={() => handleOpenBooking()} 
          />
        </div>
      </main>

      {/* Shared Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        initialService={bookingPrefillService} 
      />

    </div>
  );
}

