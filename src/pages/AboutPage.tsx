import React, { useState } from 'react';
import { BRAND_INFO, TESTIMONIALS, CERTIFICATIONS } from '../data/portfolioData';
import { PageId, Certification } from '../types';
import { TiltCard } from '../components/TiltCard';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { CertificateCard } from '../components/CertificateCard';
import { CertificateModal } from '../components/CertificateModal';
import { sound } from '../utils/audio';
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Award,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Cpu,
  Layers,
  Terminal,
  Quote,
  Clock,
  Filter
} from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [currentImgSrc, setCurrentImgSrc] = useState<string>(BRAND_INFO.profilePhotoUrl);
  const [imageFailed, setImageFailed] = useState(false);
  const [activeCertCategory, setActiveCertCategory] = useState<'all' | 'clickup' | 'notion' | 'airtable' | 'make'>('all');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleImageError = () => {
    if (currentImgSrc !== BRAND_INFO.profilePhotoFallback) {
      setCurrentImgSrc(BRAND_INFO.profilePhotoFallback);
    } else {
      setImageFailed(true);
    }
  };

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (activeCertCategory === 'all') return true;
    return c.category === activeCertCategory;
  });

  const principles = [
    {
      num: '01',
      title: 'Zero Sticky Notes Policy',
      desc: 'If a vital business process depends on a founder’s memory, a WhatsApp DM, or a yellow sticky note on a monitor, it is not a business — it is a vulnerability waiting to cost you a client.'
    },
    {
      num: '02',
      title: 'Relational Integrity First',
      desc: 'Isolated spreadsheets create duplicate data entry. We design relational database schemas where projects, clients, invoices, and deliverables speak to each other automatically.'
    },
    {
      num: '03',
      title: 'Humans for Strategy, Machines for Repetition',
      desc: 'Your high-value team should never spend 45 minutes manually copying lead information or sending generic calendar reminders. Automation handles the mechanical so humans can do the creative.'
    },
    {
      num: '04',
      title: 'Turnover-Proof Systems',
      desc: 'When a key team member departs, their institutional knowledge should not leave with them. Every Oparaku build includes step-by-step video SOPs so new staff onboard in 48 hours.'
    }
  ];

  const toolsStack = [
    { name: 'Notion', role: 'Relational Workspaces & Company OS', badge: 'Certified' },
    { name: 'Make.com', role: 'Advanced Multi-Branch Webhooks & Logic', badge: 'Certified' },
    { name: 'Airtable', role: 'Relational Data & Custom Interfaces', badge: 'Expert' },
    { name: 'ClickUp', role: 'Sprint Management & Task Cadences', badge: 'Certified' },
    { name: 'Zapier', role: 'Quick Event Triggers & Alerts', badge: 'Pro' },
    { name: 'Cal.com', role: 'Zero-Friction Client Booking', badge: 'Sync' },
    { name: 'Typeform / Tally', role: 'Structured Client Intake', badge: 'Native' },
    { name: 'Slack / Discord', role: 'Real-Time Automated Alert Dispatch', badge: 'Bot API' }
  ];

  return (
    <div className="w-full bg-[#0D1310] text-[#EDEDEA]">
      
      {/* Header Banner */}
      <section className="py-20 md:py-24 bg-[#111815]/88 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#1B4332]/35 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-3 font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PAGE [05/06] • ABOUT OWENS & THE OPARAKU PHILOSOPHY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            The Mind Behind the Systems.
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed font-sans mb-8">
            I help high-growth small business owners bridge the gap between where their revenue is and how their team actually operates behind the scenes.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              className="px-7 py-4 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Systems Diagnostic</span>
            </button>
            <a
              href={BRAND_INFO.notionSite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-white/5 hover:bg-[#1B4332] text-white font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-[#D4AF37]/40 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Notion Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>Follow @notion_knight</span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <MarqueeTicker speed="normal" />

      {/* Main Bio & Founder Card Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left: Clean, Welcoming Portrait Image of Owens */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft warm ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1B4332]/60 to-[#D4AF37]/30 rounded-3xl blur-2xl opacity-70 -z-10" />

              <div className="relative rounded-3xl overflow-hidden bg-[#16201B] border border-white/15 shadow-2xl group">
                {!imageFailed ? (
                  <img
                    src={currentImgSrc}
                    alt={BRAND_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[500px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-96 flex flex-col items-center justify-center bg-[#1B4332] text-white p-6 text-center">
                    <span className="font-serif text-4xl font-bold text-[#D4AF37] mb-2">OO</span>
                    <span className="font-serif text-xl font-bold">Owens Oparaku</span>
                    <span className="text-xs text-white/70 mt-1">Business Operations Architect</span>
                  </div>
                )}

                {/* Soft bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0E1411] via-[#0E1411]/60 to-transparent pointer-events-none" />

                {/* Friendly Name Badge */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#111815]/90 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white leading-tight">
                      Owens Oparaku
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-semibold">
                      Founder & Systems Architect
                    </p>
                    <p className="text-[11px] text-white/60 mt-0.5">
                      Operational Infrastructure & Automations
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={BRAND_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-[#111815] transition-all flex items-center justify-center text-white"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={BRAND_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-[#111815] transition-all flex items-center justify-center text-white"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>THE ARCHITECT'S STORY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              "Most business chaos is not a discipline problem. It is an architecture problem."
            </h2>

            <div className="space-y-4 text-base text-white/80 leading-relaxed font-sans">
              <p>
                I founded Oparaku Systems after watching high-revenue entrepreneurs and agency founders run successful businesses using little more than memory, scattered WhatsApp threads, and fragile Google Sheets.
              </p>
              <p>
                When a business grows fast, communication breaks down. Tasks slip through the cracks, onboarding a new hire takes six weeks of hand-holding, and the founder becomes trapped as the single point of failure.
              </p>
              <p>
                As a certified Notion and Make.com architect, I don’t deliver pretty templates that collect dust. I build living operational backbones: clean databases where work flows naturally, automations that eliminate manual copy-pasting, and step-by-step video SOPs so your team runs smoothly without asking you 50 questions a day.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
                ⚡ 1,000+ Annual Hours Saved
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
                ⭐ 100% 5-Star Client Track Record
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
                🌍 Global Clients (US, UK, EU, Africa)
              </div>
            </div>
          </div>

        </div>

        {/* The 4 Architectural Principles */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The 4 Core Architectural Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="p-8 rounded-3xl bg-[#16201B] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#D4AF37] font-bold px-2.5 py-1 rounded bg-black/40 border border-[#D4AF37]/20 inline-block mb-4">
                    PRINCIPLE [{p.num}]
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-white mb-3">
                    {p.title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Certifications & Credentials Grid */}
        <div id="certifications" className="rounded-3xl bg-[#141C18] border border-white/10 p-8 sm:p-12 mb-24 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mb-3">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>OFFICIAL VERIFIED CREDENTIALS</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                Official Certifications & Accreditations
              </h3>
              <p className="text-sm text-white/70 font-sans max-w-2xl">
                Every system is built on certified mastery — verified credentials across Notion Academy, ClickUp, Airtable, and Make.com. Click any certificate to inspect full credentials.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 self-start md:self-auto">
              {[
                { id: 'all', label: 'All Badges (8)' },
                { id: 'clickup', label: 'ClickUp (3)' },
                { id: 'notion', label: 'Notion Academy (3)' },
                { id: 'airtable', label: 'Airtable (1)' },
                { id: 'make', label: 'Make.com (1)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveCertCategory(tab.id as any);
                  }}
                  className={`text-xs font-mono px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    activeCertCategory === tab.id
                      ? 'bg-[#D4AF37] text-[#111815] font-bold shadow-md'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid: Visual Certificate on Top, Writeup Under */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCerts.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onInspect={(c) => setSelectedCert(c)}
              />
            ))}
          </div>
        </div>

        {/* Certificate Modal Inspector */}
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

        {/* Tech Stack Master Matrix */}
        <div className="mb-24">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            The Systems & Integrations Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {toolsStack.map((tool) => (
              <div key={tool.name} className="p-5 rounded-2xl bg-[#16201B] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-lg font-bold text-white">{tool.name}</span>
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-xs font-mono text-white/60">
                  {tool.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Testimonials Wall */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              What Founders Say Post-Deployment
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-7 rounded-3xl bg-[#16201B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#D4AF37] text-sm">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      {t.source}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed mb-6 font-serif">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono text-xs">
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-white/50 text-[11px] mb-2">{t.role || t.company}</div>
                  <div className="text-[10px] text-[#D4AF37] bg-black/40 px-2 py-1 rounded inline-block">
                    {t.projectType}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page Bridge Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#111815] border border-white/10">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase">NEXT SECTION</span>
            <h4 className="font-serif text-2xl font-bold text-white">
              Book a Systems Discovery & Audit
            </h4>
            <p className="text-xs font-mono text-[#D4AF37] mt-1">
              [PAGE 06/06] Live Cal.com scheduling, ROI calculator, and project intake
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('contact');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Proceed to Contact & Booking</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
