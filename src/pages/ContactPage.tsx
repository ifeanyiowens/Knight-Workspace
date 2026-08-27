import React, { useState } from 'react';
import { BRAND_INFO, FAQ_ITEMS } from '../data/portfolioData';
import { PageId } from '../types';
import { RoiCalculator } from '../components/RoiCalculator';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { sound } from '../utils/audio';
import {
  Calendar,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '1-5',
    bottleneck: '',
    stack: [] as string[],
    budget: '$2,500 - $5,000'
  });
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const availableStack = ['Notion', 'Make.com', 'ClickUp', 'Airtable', 'Zapier', 'Slack', 'Google Sheets'];

  const handleStackToggle = (tool: string) => {
    sound.playClick();
    setFormData(prev => ({
      ...prev,
      stack: prev.stack.includes(tool)
        ? prev.stack.filter(t => t !== tool)
        : [...prev.stack, tool]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playTrigger();
    setFormSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    sound.playClick();
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#0D1310] text-[#EDEDEA]">
      
      {/* Header Banner */}
      <section className="py-20 md:py-24 bg-[#111815]/88 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-3 font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PAGE [06/06] • SYSTEMS DISCOVERY & BOOKING</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Let's Build a System That Holds.
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed font-sans mb-8">
            Book a complimentary 30-minute Systems Diagnostic with Owens Oparaku, calculate your estimated operational waste, or submit a custom architecture project brief.
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
              <span>Open Live Calendar</span>
            </button>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <MarqueeTicker speed="fast" />

      {/* Main Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column: Live Cal.com Scheduler Trigger & Project Brief Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left: Quick Booking Card & Channel Directs */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-[#16201B] border border-white/10 p-7 sm:p-8 shadow-2xl">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold block mb-2">
                INSTANT SCHEDULING
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                30-Min Systems Diagnostic
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-sans">
                On this call, we analyze your current tool sprawl, map out your highest-priority automation opportunities, and give you an actionable roadmap — even if we don't work together.
              </p>

              <div className="space-y-3 mb-6 font-mono text-xs text-white/80">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Conducted via Zoom / Google Meet</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct 1-on-1 with Owens Oparaku</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>No pushy sales. Pure architecture breakdown.</span>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.playTrigger();
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Select Date & Time</span>
              </button>
            </div>

            {/* Direct Contact Channels */}
            <div className="rounded-3xl bg-[#111815] border border-white/10 p-7 font-mono text-xs space-y-4">
              <span className="text-[#D4AF37] uppercase tracking-widest font-bold block text-[11px]">
                DIRECT CHANNELS
              </span>
              
              <div className="space-y-3">
                <div>
                  <span className="text-white/40 block text-[10px]">EMAIL ADDRESS</span>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-white hover:text-[#D4AF37] transition-colors">
                    {BRAND_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px]">INSTAGRAM DM</span>
                  <a href={BRAND_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors">
                    {BRAND_INFO.instagramHandle}
                  </a>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px]">AVAILABILITY</span>
                  <span className="text-white">Global Client Coverage • Remote Architecture</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Structured Architecture Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#16201B] border border-white/10 p-7 sm:p-10 shadow-2xl">
              
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#D4AF37] uppercase">
                <MessageSquare className="w-4 h-4" />
                <span>PROJECT INTAKE BRIEF</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Submit Your Systems Requirements
              </h3>
              <p className="text-xs text-white/60 mb-8">
                Tell us about your team and what feels messy. We'll reply within 24 to 48 hours with an initial audit assessment.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#1B4332] border border-[#D4AF37] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Brief Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto">
                    Thank you {formData.name || 'there'}. Owens has received your project parameters and will review your tool stack within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/20 transition-colors"
                  >
                    Submit another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 mb-1.5 uppercase text-[10px]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1411] border border-white/10 text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 mb-1.5 uppercase text-[10px]">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@agency.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1411] border border-white/10 text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 mb-1.5 uppercase text-[10px]">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Vance Media Group"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1411] border border-white/10 text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 mb-1.5 uppercase text-[10px]">Team Size</label>
                      <select
                        value={formData.teamSize}
                        onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1411] border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                      >
                        <option value="1-5">1 - 5 Team Members</option>
                        <option value="6-15">6 - 15 Team Members</option>
                        <option value="16-35">16 - 35 Team Members</option>
                        <option value="35+">35+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 mb-2 uppercase text-[10px]">Tools Currently In Your Stack (Select All That Apply):</label>
                    <div className="flex flex-wrap gap-2">
                      {availableStack.map(tool => (
                        <button
                          type="button"
                          key={tool}
                          onClick={() => handleStackToggle(tool)}
                          className={`px-3 py-1.5 rounded-lg border text-[11px] transition-all cursor-pointer ${
                            formData.stack.includes(tool)
                              ? 'bg-[#1B4332] text-[#D4AF37] border-[#D4AF37]'
                              : 'bg-white/5 text-white/60 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {tool} {formData.stack.includes(tool) ? '✓' : '+'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 mb-1.5 uppercase text-[10px]">What is your #1 operational bottleneck right now? *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.bottleneck}
                      onChange={e => setFormData({ ...formData, bottleneck: e.target.value })}
                      placeholder="e.g. Lead intake is lost between WhatsApp and spreadsheets, and clients constantly ask where their deliverables are."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1411] border border-white/10 text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#111815] font-bold text-xs uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit System Brief</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Interactive ROI Calculator Module */}
        <div className="mb-24">
          <RoiCalculator onOpenBooking={onOpenBooking} />
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="rounded-3xl bg-[#16201B] border border-white/10 p-8 sm:p-12 mb-20 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Everything You Need to Know Before We Start
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0E1411] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaqIdx === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
                  )}
                </button>
                
                {openFaqIdx === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed font-sans border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Return to Home Bridge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#111815] border border-white/10">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase">RETURN TO TOP</span>
            <h4 className="font-serif text-2xl font-bold text-white">
              Back to Overview & Architecture
            </h4>
            <p className="text-xs font-mono text-[#D4AF37] mt-1">
              [PAGE 01/06] Hero, verified metrics, and interactive systems simulator
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('home');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Return to Home [01]</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
