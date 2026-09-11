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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playTrigger();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (idx: number) => {
    sound.playClick();
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="w-full text-[#16201B]">
      
      {/* Header Banner */}
      <section className="py-20 md:py-24 bg-[#EDEDEA] border-b border-black/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#1C3A5E]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#16201B] tracking-tight leading-[1.05] mb-6">
            Let's Build a System That Holds.
          </h1>

          <p className="text-base sm:text-xl text-[#16201B]/70 max-w-3xl leading-relaxed font-sans mb-8">
            Book a call to walk through what's slowing your team down. Consultations start at $50, builds start at $70.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              className="px-7 py-4 rounded-xl bg-[#1C3A5E] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#2A4D7A] transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a call</span>
            </button>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="px-6 py-4 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] font-mono text-xs uppercase tracking-wider border border-black/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#1C3A5E]" />
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
            
            <div className="rounded-3xl bg-white border border-black/10 p-7 sm:p-8 shadow-2xl">
              <span className="text-xs font-mono text-[#04703D] uppercase tracking-widest font-bold block mb-2">
                INSTANT SCHEDULING
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16201B] mb-1">
                30 Minute Call
              </h3>
              <div className="font-mono text-sm font-bold text-[#04703D] mb-4">Starting at $50</div>
              <p className="text-xs sm:text-sm text-[#16201B]/70 leading-relaxed mb-6 font-sans">
                We go through what's actually slowing your team down and map out what to fix first. If it turns into a build, that starts at $70.
              </p>

              <div className="space-y-3 mb-6 font-mono text-xs text-[#16201B]/80">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#04703D]" />
                  <span>Conducted via Zoom / Google Meet</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#04703D]" />
                  <span>Direct 1-on-1 with Owens Oparaku</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#04703D]" />
                  <span>No pushy sales. Pure architecture breakdown.</span>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.playTrigger();
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-xl bg-[#1C3A5E] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#2A4D7A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a call</span>
              </button>
            </div>

          </div>

          {/* Right: Structured Architecture Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-black/10 p-7 sm:p-10 shadow-2xl">
              
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#04703D] uppercase">
                <MessageSquare className="w-4 h-4" />
                <span>PROJECT INTAKE BRIEF</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16201B] mb-2">
                Submit Your Systems Requirements
              </h3>
              <p className="text-xs text-[#16201B]/60 mb-8">
                Tell us about your team and what feels messy. We'll reply within 24 to 48 hours with an initial audit assessment.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#059C54] border border-[#1C3A5E] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#04703D] mx-auto" />
                  <h4 className="font-serif text-2xl font-bold text-[#16201B]">
                    Brief Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#16201B]/80 max-w-md mx-auto">
                    Thank you {formData.name || 'there'}. Owens has received your project parameters and will review your tool stack within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-black/10 text-[#16201B] text-xs font-mono uppercase tracking-wider hover:bg-black/20 transition-colors"
                  >
                    Submit another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#16201B]/60 mb-1.5 uppercase text-[10px]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-[#16201B] placeholder-white/30 focus:border-[#1C3A5E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#16201B]/60 mb-1.5 uppercase text-[10px]">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@agency.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-[#16201B] placeholder-white/30 focus:border-[#1C3A5E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#16201B]/60 mb-1.5 uppercase text-[10px]">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Vance Media Group"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-[#16201B] placeholder-white/30 focus:border-[#1C3A5E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#16201B]/60 mb-1.5 uppercase text-[10px]">Team Size</label>
                      <select
                        value={formData.teamSize}
                        onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-[#16201B] focus:border-[#1C3A5E] focus:outline-none"
                      >
                        <option value="1-5">1 - 5 Team Members</option>
                        <option value="6-15">6 - 15 Team Members</option>
                        <option value="16-35">16 - 35 Team Members</option>
                        <option value="35+">35+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#16201B]/60 mb-2 uppercase text-[10px]">Tools Currently In Your Stack (Select All That Apply):</label>
                    <div className="flex flex-wrap gap-2">
                      {availableStack.map(tool => (
                        <button
                          type="button"
                          key={tool}
                          onClick={() => handleStackToggle(tool)}
                          className={`px-3 py-1.5 rounded-lg border text-[11px] transition-all cursor-pointer ${
                            formData.stack.includes(tool)
                              ? 'bg-[#059C54] text-[#1C3A5E] border-[#1C3A5E]'
                              : 'bg-black/5 text-[#16201B]/60 border-black/10 hover:border-black/20'
                          }`}
                        >
                          {tool} {formData.stack.includes(tool) ? '✓' : '+'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#16201B]/60 mb-1.5 uppercase text-[10px]">What is your #1 operational bottleneck right now? *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.bottleneck}
                      onChange={e => setFormData({ ...formData, bottleneck: e.target.value })}
                      placeholder="e.g. Lead intake is lost between WhatsApp and spreadsheets, and clients constantly ask where their deliverables are."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-[#16201B] placeholder-white/30 focus:border-[#1C3A5E] focus:outline-none"
                    />
                  </div>

                  {submitError && (
                    <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#1C3A5E] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#2A4D7A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Submit System Brief'}</span>
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
        <div className="rounded-3xl bg-white border border-black/10 p-8 sm:p-12 mb-20 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#04703D] uppercase tracking-widest font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#16201B]">
              Everything You Need to Know Before We Start
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-black/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#16201B] hover:text-[#1C3A5E] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaqIdx === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#1C3A5E] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#16201B]/40 flex-shrink-0" />
                  )}
                </button>
                
                {openFaqIdx === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#16201B]/70 leading-relaxed font-sans border-t border-black/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Return to Home Bridge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white border border-black/10">
          <div>
            <span className="text-xs font-mono text-[#16201B]/40 uppercase">RETURN TO TOP</span>
            <h4 className="font-serif text-2xl font-bold text-[#16201B]">
              Back to Overview & Architecture
            </h4>
            <p className="text-xs font-mono text-[#1C3A5E] mt-1">
              Hero, verified metrics, and real client results
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('home');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#1C3A5E] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#2A4D7A] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Return to Home</span>
          </button>
        </div>

      </section>

    </div>
  );
};
