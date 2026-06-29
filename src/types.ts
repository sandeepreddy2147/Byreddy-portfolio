/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'process'
  | 'pricing'
  | 'faq'
  | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  stats?: { label: string; value: string }[];
  highlightColor?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
  iconName: string;
  recommended?: boolean;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
  details: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone?: string;
  date: string;
  timeSlot: string;
  projectType: string;
  budget?: string;
  details?: string;
  syncedToGoogle: boolean;
  syncedToOutlook: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
  timestamp: string;
}
