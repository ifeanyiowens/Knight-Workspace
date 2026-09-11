import React, { useState } from 'react';
import { BRAND_INFO } from '../data/portfolioData';
import { Calendar, Mail, Copy, Check, ArrowUpRight, Instagram, Linkedin, Facebook, Send, ShieldCheck, Clock } from 'lucide-react';

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenBooking }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentTools: 'Notion & Spreadsheets',
    bottleneck: 'Scattered Spreadsheets & Lost Context',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0C120F]/72 text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#1C3A5E] text-xs font-mono uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C3A5E]"></span>
            <span>Let Us Fix Your Operations</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Ready to stop holding your business together with duct tape?
          </h2>
          
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
            Choose the fastest path to clarity: book a 20-minute discovery call directly on my calendar or send me details about what is breaking in your backend right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Cal.com Booking Card (Moritz Dunkel style) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#16201B]/88 text-[#EDEDEA] p-7 sm:p-9 lg:p-10 border border-[#1C3A5E]/30 shadow-2xl relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C3A5E]">
                  Fast Track Discovery
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/50 text-[#1C3A5E] border border-[#1C3A5E]/30">
                  Cal.com Live Sync
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Book a Systems Diagnostic
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  In 20 minutes, we will map your current tools, identify the exact operational bottlenecks holding you back, and outline the architecture you need.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#111815] border border-white/10 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1C3A5E] mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-white/90 font-sans">
                    <strong className="text-[#1C3A5E] font-semibold block mb-0.5 font-mono">Zero High-Pressure Sales:</strong>
                    Purely an operational audit to see if your business is ready for a custom build.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#111815] border border-white/10 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1C3A5E] mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-white/90 font-sans">
                    <strong className="text-[#1C3A5E] font-semibold block mb-0.5 font-mono">Tailored Recommendations:</strong>
                    Get honest guidance on whether Notion, ClickUp, Airtable, or Make.com is your best solution.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-xl bg-[#1C3A5E] text-white hover:bg-[#2A4D7A] font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Owens Calendar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs font-mono text-white/60 pt-2 border-t border-white/10">
                <span>Direct calendar link:</span>
                <a
                  href={BRAND_INFO.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1C3A5E] hover:underline"
                >
                  cal.com/owen-oparaku
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry & Quick Audit Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#16201B]/88 border border-white/10 p-7 sm:p-9 lg:p-10 shadow-2xl flex flex-col justify-between">
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    Send a Direct Project Brief
                  </h3>
                  <p className="text-xs font-mono text-white/60">
                    Tell me about your team and what is falling through the cracks. I reply within 24 to 48 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#111815] text-xs font-mono text-white focus:outline-hidden focus:border-[#1C3A5E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@agency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#111815] text-xs font-mono text-white focus:outline-hidden focus:border-[#1C3A5E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-1.5">
                      Primary Tools In Use
                    </label>
                    <select
                      value={formData.currentTools}
                      onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#111815] text-xs font-mono text-white focus:outline-hidden focus:border-[#1C3A5E]"
                    >
                      <option value="Notion & Spreadsheets">Notion & Spreadsheets</option>
                      <option value="ClickUp & Slack">ClickUp & Slack</option>
                      <option value="Airtable & Zapier">Airtable & Zapier</option>
                      <option value="Google Sheets & WhatsApp">Google Sheets & WhatsApp</option>
                      <option value="Multiple disparate tools">5+ Fragmented Tools</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-1.5">
                      Biggest Bottleneck
                    </label>
                    <select
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#111815] text-xs font-mono text-white focus:outline-hidden focus:border-[#1C3A5E]"
                    >
                      <option value="Scattered Spreadsheets & Lost Context">Scattered Spreadsheets & Lost Context</option>
                      <option value="Founder is the Bottleneck">Founder is the Bottleneck</option>
                      <option value="Missed Client Follow-ups">Missed Client Follow-ups</option>
                      <option value="Manual Copy-Pasting Between Tools">Manual Copy-Pasting Between Tools</option>
                      <option value="Need Custom CRM with Permissions">Need Custom CRM with Permissions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-1.5">
                    What system do you need built? (Optional notes)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me a bit about your business, team size, or what is slowing you down..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#111815] text-xs font-mono text-white focus:outline-hidden focus:border-[#1C3A5E]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-white/5 text-white hover:bg-[#1C3A5E] hover:text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Systems Brief</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4 my-auto">
                <div className="w-14 h-14 rounded-full bg-[#1B4332] text-[#1C3A5E] flex items-center justify-center mx-auto shadow-xl border border-[#1C3A5E]/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">
                  Brief Received
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto font-sans">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Owens has received your project inquiry regarding {formData.bottleneck} and will respond within 24 to 48 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-[#1C3A5E] underline cursor-pointer"
                  >
                    Send another brief
                  </button>
                </div>
              </div>
            )}

            {/* Quick Email Copy & Direct Channels */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1C3A5E]" />
                <span className="text-xs font-mono text-white/80">{BRAND_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#1C3A5E]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-[#1C3A5E]">Copied!</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={BRAND_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#1C3A5E] hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#1C3A5E] hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#1C3A5E] hover:bg-white/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
