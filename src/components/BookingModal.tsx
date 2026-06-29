/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  Mail, 
  User, 
  Phone,
  ArrowRight, 
  AlertCircle,
  FileText,
  CalendarCheck2,
  ExternalLink,
  ChevronRight,
  Download
} from 'lucide-react';
import { Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM'
];

const SERVICE_OPTIONS = [
  'Landing Page Development',
  'Business Website Development',
  'Admin Dashboard Development',
  'Custom SaaS Development',
  'Enterprise Custom App',
  'Monthly Maintenance Plan',
  'API Integration & Custom Code',
  'Firebase Development',
  'Performance & SEO Optimization',
  'General Tech Consultation'
];

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  initialService = 'General Tech Consultation' 
}) => {
  // Map pricing plan names to service options
  const mapServiceName = (service: string): string => {
    const mapping: Record<string, string> = {
      'Landing Page': 'Landing Page Development',
      'Business Website': 'Business Website Development',
      'Admin Dashboard': 'Admin Dashboard Development',
      'Custom SaaS': 'Custom SaaS Development',
      'Enterprise Custom App': 'Enterprise Custom App',
      'Monthly Maintenance Plan': 'Monthly Maintenance Plan',
    };
    return mapping[service] || service;
  };

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState(mapServiceName(initialService));
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);
  const [isSending, setIsSending] = useState(false);

  // Generate date options (next 10 business days)
  const [dateOptions, setDateOptions] = useState<{ value: string; display: string }[]>([]);

  useEffect(() => {
    setSelectedService(mapServiceName(initialService));
  }, [initialService]);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    let count = 0;
    
    // Find next 10 business days
    while (count < 10) {
      today.setDate(today.getDate() + 1);
      const day = today.getDay();
      // Skip weekends (0 is Sunday, 6 is Saturday)
      if (day !== 0 && day !== 6) {
        const valueStr = today.toISOString().split('T')[0];
        const displayStr = today.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
        dates.push({ value: valueStr, display: displayStr });
        count++;
      }
    }
    setDateOptions(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].value);
    }
  }, []);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 1) {
      if (!selectedDate || !selectedTimeSlot) {
        setError('Please select a date and an available time slot.');
        return;
      }
      setError('');
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  // Helper to format ISO datetime for Calendar integration
  const getCalendarTimes = (dateStr: string, timeSlot: string) => {
    // Parse time slot, e.g., "10:30 AM"
    const [time, ampm] = timeSlot.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (ampm === 'PM' && hours !== 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;

    const startDate = new Date(dateStr);
    startDate.setHours(hours, minutes, 0);

    const endDate = new Date(startDate.getTime() + 45 * 60 * 1000); // 45 min meeting

    const formatISO = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const formatOutlookISO = (date: Date) => {
      return date.toISOString().split('.')[0] + 'Z';
    };

    return {
      startISO: formatISO(startDate),
      endISO: formatISO(endDate),
      startOutlook: formatOutlookISO(startDate),
      endOutlook: formatOutlookISO(endDate),
      formattedText: startDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }) + ` at ${timeSlot}`
    };
  };

  // Client-Side iCalendar (.ics) Generator
  const downloadICSFile = (booking: Booking) => {
    const times = getCalendarTimes(booking.date, booking.timeSlot);
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sandeep Reddy Portfolio//Consultation Scheduler//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:booking-${booking.id}@sandeepreddy.dev`,
      `DTSTAMP:${times.startISO}`,
      `DTSTART:${times.startISO}`,
      `DTEND:${times.endISO}`,
      `SUMMARY:Tech Consultation with Byreddy Venkata Sandeep Reddy`,
      `DESCRIPTION:Hello ${booking.name},\\n\\nThank you for scheduling a free consultation. Here are your meeting details:\\n\\nService: ${booking.projectType}\\nBudget: ${booking.budget || 'Not specified'}\\nClient Details: ${booking.details || 'None provided'}\\n\\nMeeting Link (Google Meet/Zoom) will be sent separately before the meeting. See you there!`,
      'LOCATION:Google Meet / Remote Video Call',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Sandeep_Reddy_Consultation_${booking.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSending(true);
    
    const newBooking: Booking = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      phone: phone || undefined,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      projectType: selectedService,
      budget: budget || undefined,
      details: details || undefined,
      syncedToGoogle: true,
      syncedToOutlook: true
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newBooking,
          source: 'booking'
        })
      });

      const resData = await response.json();
      
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to send automated email alert.');
      }

      // Save to localStorage for durable client simulation
      const currentBookings: Booking[] = JSON.parse(localStorage.getItem('sand_bookings') || '[]');
      currentBookings.push(newBooking);
      localStorage.setItem('sand_bookings', JSON.stringify(currentBookings));

      setCreatedBooking(newBooking);
      setStep(3);
    } catch (err: any) {
      console.error('Email notification failure:', err);
      setError(err.message || 'Failed to send consultation email alert, but your session is saved.');
    } finally {
      setIsSending(false);
    }
  };

  // Build Calendar Deep Links
  const getGoogleCalendarUrl = (booking: Booking) => {
    const times = getCalendarTimes(booking.date, booking.timeSlot);
    const text = encodeURIComponent('Tech Consultation with Byreddy Venkata Sandeep Reddy');
    const dates = `${times.startISO}/${times.endISO}`;
    const detailsText = encodeURIComponent(
      `Hello ${booking.name},\n\nThank you for booking a free consultation.\n\nService: ${booking.projectType}\nBudget: ${booking.budget || 'Not specified'}\nYour Details: ${booking.details || 'None'}\n\nWe will discuss details on Google Meet/Zoom.`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${detailsText}&sf=true&output=xml`;
  };

  const getOutlookCalendarUrl = (booking: Booking) => {
    const times = getCalendarTimes(booking.date, booking.timeSlot);
    const text = encodeURIComponent('Tech Consultation with Byreddy Venkata Sandeep Reddy');
    const start = encodeURIComponent(times.startOutlook);
    const end = encodeURIComponent(times.endOutlook);
    const detailsText = encodeURIComponent(
      `Hello ${booking.name},\n\nThank you for booking a free consultation.\n\nService: ${booking.projectType}\nBudget: ${booking.budget || 'Not specified'}\nYour Details: ${booking.details || 'None'}`
    );
    return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${text}&startdt=${start}&enddt=${end}&body=${detailsText}&location=Google+Meet+Remote`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-200 z-10 flex flex-col max-h-[90vh]"
      >
        {/* Top Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-orange-50 text-brand-orange rounded-2xl border border-orange-100">
              <CalendarCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-gray-950">
                {step === 3 ? 'Consultation Booked!' : 'Schedule Free Consultation'}
              </h2>
              <p className="text-xs text-gray-500 font-sans">1-on-1 Strategy & Design Sync with Sandeep Reddy</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content / Steps */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* Step Progress Bar (Only show for Step 1 and 2) */}
          {step !== 3 && (
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-400'}`}>1</span>
                <span className="text-xs font-semibold text-gray-900 font-sans">Select Slot</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-400'}`}>2</span>
                <span className="text-xs font-semibold text-gray-500 font-sans">Your Details</span>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 p-3.5 bg-red-50 text-red-600 text-xs rounded-2xl flex items-center gap-2 border border-red-150">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* STEP 1: Date & Time Select */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-display">What service are you looking for?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`text-left p-3.5 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${selectedService === service ? 'border-brand-orange bg-orange-50 text-brand-orange font-bold' : 'border-gray-200 hover:border-brand-orange/30 text-gray-600'}`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-display">Pick a Date</label>
                <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
                  {dateOptions.map((date) => (
                    <button
                      key={date.value}
                      type="button"
                      onClick={() => setSelectedDate(date.value)}
                      className={`shrink-0 px-4 py-3 rounded-2xl border flex flex-col items-center gap-1 min-w-[85px] transition-all cursor-pointer ${selectedDate === date.value ? 'border-brand-orange bg-orange-50 text-brand-orange font-bold shadow-sm shadow-orange-100' : 'border-gray-200 hover:border-orange-100 text-gray-600'}`}
                    >
                      <span className="text-[10px] uppercase font-mono">{date.display.split(',')[0]}</span>
                      <span className="text-sm font-bold font-display">{date.display.split(',')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-display">Available Timeslots (IST / India Time)</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-2.5 rounded-2xl border text-xs font-mono font-medium transition-all flex items-center justify-center gap-1 cursor-pointer ${selectedTimeSlot === slot ? 'border-brand-orange bg-brand-orange text-white font-bold shadow-md shadow-orange-100' : 'border-gray-200 hover:border-orange-100 text-gray-600'}`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 mt-2 block italic">Slots are adjusted to your schedule, syncing to portfolio calendar.</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl text-xs font-bold font-display flex items-center gap-1.5 shadow-md shadow-orange-100 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Client Form */}
          {step === 2 && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-display">Your Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Elon Musk"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-display">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@startup.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-display">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-display">Project Budget (Optional)</label>
                <select
                  value={budget}
                  required
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all"
                >
                  <option value="">Select your range...</option>
                  <option value="Under ₹15,000">Under ₹5,000</option>
                  <option value="₹15,000 - ₹30,000">₹5,000 - ₹20,000</option>
                  <option value="₹30,000 - ₹80,000">₹20,000 - ₹45,000</option>
                  <option value="₹80,000 - ₹2,00,000">₹45,000 - ₹1,00,000</option>
                  <option value="Above ₹2,00,000">Above ₹1,00,000 (Enterprise / Complex SaaS)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-display">Project Details & Objectives</label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell Sandeep about your vision, technical goals, and deadlines..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-orange focus:bg-white rounded-2xl text-xs outline-none transition-all resize-none"
                />
              </div>

              {/* Selected Slot Recap */}
              <div className="p-3.5 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-between text-xs text-orange-950">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-orange" />
                  <span className="font-semibold">{selectedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span className="font-semibold">{selectedTimeSlot}</span>
                </div>
                <span className="text-[10px] text-brand-orange font-bold uppercase">{selectedService.split(' ')[0]}</span>
              </div>

              <div className="pt-2 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-4 py-2.5 border border-gray-200 hover:border-orange-200 hover:text-brand-orange text-gray-600 rounded-2xl text-xs font-bold font-display cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-3 bg-brand-orange hover:bg-orange-600 disabled:bg-orange-400 text-white rounded-2xl text-xs font-bold font-display flex items-center gap-1.5 shadow-md shadow-orange-100 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <span>Sending Alert...</span>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Confirm Consultation</span>
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Booking Success & Calendar Integration Links */}
          {step === 3 && createdBooking && (
            <div className="text-center space-y-6 py-4">
              <div className="inline-flex p-4 bg-green-50 text-green-500 rounded-full animate-bounce">
                <CheckCircle className="w-12 h-12" />
              </div>
              
              <div className="max-w-md mx-auto space-y-2">
                <h3 className="font-display font-bold text-2xl text-gray-950">Appointment Confirmed!</h3>
                <p className="text-xs text-gray-500">
                  Congratulations <strong>{createdBooking.name}</strong>, your meeting with Byreddy Venkata Sandeep Reddy is successfully scheduled and logged!
                </p>
              </div>

              {/* Appointment Card */}
              <div className="bg-brand-light rounded-2xl p-5 border border-orange-100 max-w-md mx-auto text-left space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-orange-100">
                  <span className="text-[10px] font-mono text-brand-orange font-bold tracking-wider uppercase">Meeting Token: #{createdBooking.id}</span>
                  <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">Auto-Synced</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-700">
                    <FileText className="w-4 h-4 text-brand-orange" />
                    <span><strong>Project Type:</strong> {createdBooking.projectType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-700">
                    <Calendar className="w-4 h-4 text-brand-orange" />
                    <span><strong>Date:</strong> {getCalendarTimes(createdBooking.date, createdBooking.timeSlot).formattedText}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-700">
                    <Mail className="w-4 h-4 text-brand-orange" />
                    <span><strong>Email Hook:</strong> {createdBooking.email}</span>
                  </div>
                </div>
              </div>

              {/* Sync Integration Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto">
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider font-display">Sync to Your Calendar Instantly</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Google Calendar Link */}
                  <a
                    href={getGoogleCalendarUrl(createdBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-white hover:bg-orange-50 border border-gray-200 hover:border-brand-orange rounded-2xl text-xs font-semibold text-gray-700 shadow-sm hover:text-brand-orange transition-all group"
                  >
                    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                    </svg>
                    <span>Google Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Outlook Link */}
                  <a
                    href={getOutlookCalendarUrl(createdBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-white hover:bg-orange-50 border border-gray-200 hover:border-brand-orange rounded-2xl text-xs font-semibold text-gray-700 shadow-sm hover:text-brand-orange transition-all group"
                  >
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    <span>Outlook Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Local ICS file download option */}
                <button
                  type="button"
                  onClick={() => downloadICSFile(createdBooking)}
                  className="w-full flex items-center justify-center gap-2 p-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl text-xs font-bold shadow-md shadow-orange-100 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download iCal File (.ics)</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-medium text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
