export type PageId = 'home' | 'work' | 'services' | 'process' | 'about' | 'contact';

export interface PageInfo {
  id: PageId;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  path: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  location?: string;
  industry: string;
  tools: string[];
  problem: string;
  solution: string;
  outcome: string;
  badge: string;
  stats?: { label: string; value: string };
  highlights: string[];
  image?: string;
  link?: string;
  linkText?: string;
  liveDemoUrl?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  company?: string;
  content: string;
  rating: number;
  source: 'Verified Client' | 'Direct Client' | 'Client Review';
  projectType: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: 'Notion Academy' | 'ClickUp' | 'Airtable' | 'Make.com';
  tier: string;
  badgeName: string;
  recipientName: string;
  issued: string;
  validity?: string;
  certificateNo?: string;
  verificationUrl?: string;
  description: string;
  color: string;
  category: 'notion' | 'clickup' | 'airtable' | 'make';
  badgeType: 'admin' | 'intermediate' | 'novice' | 'workflows' | 'essentials' | 'advanced' | 'automation';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tools: string[];
  deliverables: string[];
  bestFor: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  duration: string;
  description: string;
  activities: string[];
  deliverable: string;
}
