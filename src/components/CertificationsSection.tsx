import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { sound } from '../utils/audio';

export const CertificationsSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const platforms = ['All', 'Notion Academy', 'ClickUp', 'Airtable', 'Make.com'];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (selectedPlatform === 'All') return true;
    return c.organization === selectedPlatform;
  });

  return (
    <section id="certifications" className="py-24 bg-[#111815] text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Verified Technical Mastery</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              Built on certified expertise, not guesswork.
            </h2>
            
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
              I hold official certifications across Notion, ClickUp, Airtable, and Make.com. Your business systems are engineered with proven architectural best practices from day one.
            </p>
          </div>

          {/* Platform filter */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-black/40 p-1.5 rounded-2xl border border-white/10">
            {platforms.map((p) => (
              <button
                key={p}
                onClick={() => {
                  sound.playClick();
                  setSelectedPlatform(p);
                }}
                className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedPlatform === p
                    ? 'bg-[#D4AF37] text-[#111815] font-bold shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid: Visual Certificate at top, writeup under */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredCerts.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onInspect={(c) => setSelectedCert(c)}
            />
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

        {/* Why Certification Matters Callout */}
        <div className="rounded-3xl bg-[#1B4332] text-white p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4AF37]/30 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              The Oparaku Engineering Standard
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Why certifications matter for your bottom line
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-sans">
              Uncertified templates break when team permissions expand or formulas overload. Certified engineering guarantees your workspace remains fast, secure, and intuitive through every stage of company growth.
            </p>
          </div>
          
          <div className="flex-shrink-0 flex items-center gap-2 bg-[#111815] px-5 py-3 rounded-xl border border-[#D4AF37]/30 text-xs font-mono font-bold text-[#D4AF37]">
            <CheckCircle className="w-4 h-4" />
            <span>Zero Template Debt Guaranteed</span>
          </div>
        </div>

      </div>
    </section>
  );
};
