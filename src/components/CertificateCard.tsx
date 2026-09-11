import React from 'react';
import { Certification } from '../types';
import { Award, ExternalLink, ShieldCheck, ZoomIn, CheckCircle2, Calendar, FileText } from 'lucide-react';
import { sound } from '../utils/audio';

interface CertificateCardProps {
  cert: Certification;
  onInspect: (cert: Certification) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ cert, onInspect }) => {
  const handleClick = () => {
    sound.playClick();
    onInspect(cert);
  };

  return (
    <div className="rounded-3xl bg-white border border-black/10 hover:border-[#04703D]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group">
      
      {/* 1. PRIMARY FOCUS: The Visual Certificate (Top Focus) */}
      <div 
        onClick={handleClick}
        className="relative p-3 sm:p-4 bg-[#0A0F0D] cursor-pointer overflow-hidden border-b border-black/10 group-hover:bg-[#070B09] transition-colors"
      >
        {/* Hover zoom hint badge */}
        <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-[#04703D] px-2.5 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 shadow-lg border border-[#04703D]/40 backdrop-blur-sm">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Click to Inspect</span>
        </div>

        {/* Dynamic Render of the exact official certificate */}
        <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-inner flex flex-col justify-between relative select-none">
          
          {/* CLICKUP CERTIFICATE STYLE */}
          {cert.category === 'clickup' && (
            <div className="w-full h-full bg-white text-[#1E1F21] p-3.5 sm:p-4 flex flex-col justify-between relative border-4 border-double border-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
              {/* Decorative Rainbow Border Frame */}
              <div className="absolute inset-1 border border-pink-400/40 rounded-lg pointer-events-none" />
              
              {/* Header */}
              <div className="text-center pt-1">
                <h4 className="font-serif text-sm sm:text-base font-extrabold text-[#2A2B2E] tracking-tight">
                  Certificate of Completion
                </h4>
              </div>

              {/* Central Unicorn Astronaut & Badge */}
              <div className="flex flex-col items-center justify-center my-auto">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-[#111936] rounded-2xl p-2 flex flex-col items-center justify-center shadow-md border-2 border-black/10">
                  {/* Space stars texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px] opacity-40 rounded-2xl" />
                  
                  {/* Unicorn astronaut mascot representation */}
                  <div className="relative text-2xl sm:text-3xl mb-0.5">
                    🦄
                  </div>
                  
                  {/* Gradient Badge Band */}
                  <div className={`w-full py-0.5 px-2 text-[9px] sm:text-[10px] font-extrabold text-[#0A0A0A] text-center rounded tracking-wider uppercase shadow ${
                    cert.badgeType === 'admin'
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500'
                      : cert.badgeType === 'intermediate'
                      ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400'
                      : 'bg-gradient-to-r from-pink-600 to-yellow-400'
                  }`}>
                    {cert.badgeName}
                  </div>

                  {/* ClickUp small logo mark */}
                  <div className="text-[8px] font-bold text-[#0A0A0A] mt-0.5 flex items-center gap-0.5">
                    <span className="text-pink-400">▲</span> ClickUp
                  </div>
                </div>
              </div>

              {/* Certificate Metadata Footer */}
              <div className="flex items-end justify-between text-[8px] sm:text-[9px] text-gray-600 font-mono pt-1 border-t border-gray-100">
                <div>
                  <div>Issued: {cert.issued}</div>
                  {cert.certificateNo && <div className="font-semibold text-gray-800">No: {cert.certificateNo}</div>}
                </div>
                <div className="text-right flex items-center gap-1 font-bold text-[#7B68EE]">
                  <span className="w-2 h-2 rounded-full bg-[#7B68EE]"></span>
                  <span>ClickUp</span>
                </div>
              </div>
            </div>
          )}

          {/* AIRTABLE CERTIFICATE STYLE */}
          {cert.category === 'airtable' && (
            <div className="w-full h-full bg-[#F4EFFE] text-[#2D2250] p-4 sm:p-5 flex flex-col justify-between relative border-4 border-[#D8C7F8]">
              {/* Top Purple Badge */}
              <div className="flex items-start justify-between">
                <div className="bg-[#482880] text-[#0A0A0A] px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-bold flex items-center gap-1 shadow">
                  <span>⬡</span>
                  <span>Certified Admin</span>
                </div>
                <div className="w-3 h-6 bg-[#482880] rounded-b-md" />
              </div>

              {/* Watermark & Recipient Center */}
              <div className="text-center my-auto relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <span className="text-6xl font-bold text-[#482880]">⚙</span>
                </div>
                <div className="font-serif text-xs sm:text-sm font-bold text-[#2D2250] mb-0.5">
                  {cert.recipientName}
                </div>
                <div className="font-serif italic text-[9px] sm:text-[10px] text-gray-500 mb-1">
                  has successfully earned the
                </div>
                <div className="font-sans text-xs sm:text-sm font-extrabold text-[#482880]">
                  Airtable Admin Certification
                </div>
              </div>

              {/* Validity & Cert No Footer */}
              <div className="text-[8px] sm:text-[9px] text-gray-600 font-mono pt-1 border-t border-[#E3D6F8] flex items-end justify-between">
                <div>
                  <div>{cert.validity || `Issued: ${cert.issued}`}</div>
                  {cert.certificateNo && <div>Certificate No: {cert.certificateNo}</div>}
                </div>
                <span className="font-bold text-[#482880] text-[10px]">Airtable</span>
              </div>
            </div>
          )}

          {/* NOTION ACADEMY CERTIFICATE STYLE */}
          {cert.category === 'notion' && (
            <div className="w-full h-full bg-white text-black p-4 sm:p-5 flex flex-col justify-between relative border-4 border-black rounded-xl">
              {/* Header */}
              <div className="text-center pt-0.5">
                <h4 className="font-sans text-xs sm:text-sm font-extrabold text-black tracking-tight">
                  {cert.name}
                </h4>
              </div>

              {/* Recipient */}
              <div className="text-center my-auto">
                <div className="font-sans text-[11px] sm:text-xs font-semibold text-black mb-1">
                  {cert.recipientName}
                </div>
                <div className="text-[9px] text-gray-600">
                  Has completed: {cert.badgeName}
                </div>
                <div className="text-[8px] text-gray-500">
                  Issued by: Notion Academy
                </div>
              </div>

              {/* Bottom: QR Code + Official Badge Shield */}
              <div className="flex items-end justify-between pt-1">
                {/* QR Code graphic */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black p-0.5 flex flex-wrap gap-0.5 rounded">
                  <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                </div>

                {/* Notion Shield Badge */}
                <div className="w-10 sm:w-12 border border-black rounded-b-xl overflow-hidden shadow-sm">
                  <div className="bg-black text-[#0A0A0A] text-[6px] sm:text-[7px] text-center py-0.5 font-sans font-bold leading-tight">
                    Notion Academy
                  </div>
                  <div className={`p-1.5 flex items-center justify-center text-xs text-black font-bold ${
                    cert.badgeType === 'advanced' 
                      ? 'bg-[#F5C518]' 
                      : cert.badgeType === 'workflows' 
                      ? 'bg-[#1E88E5] text-[#0A0A0A]' 
                      : 'bg-[#EA4335] text-[#0A0A0A]'
                  }`}>
                    {cert.badgeType === 'advanced' && '🛠️'}
                    {cert.badgeType === 'workflows' && '🔗'}
                    {cert.badgeType === 'essentials' && '🍎'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MAKE.COM CERTIFICATE STYLE */}
          {cert.category === 'make' && (
            <div className="w-full h-full bg-[#130026] p-3 sm:p-4 flex items-center justify-center relative rounded-xl overflow-hidden border-2 border-purple-600/40">
              <div className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-2xl">
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="makePurpleGradientCard" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#6E00F5" />
                      <stop offset="45%" stopColor="#4A00A0" />
                      <stop offset="100%" stopColor="#250058" />
                    </linearGradient>
                    <path id="makeAcademyCurveCard" d="M 72,195 A 128,128 0 0,1 328,195" fill="none" />
                  </defs>
                  
                  {/* Main Circular Background */}
                  <circle cx="200" cy="200" r="195" fill="url(#makePurpleGradientCard)" stroke="#9333EA" strokeWidth="4" />
                  
                  {/* Inner White Rings */}
                  <circle cx="200" cy="200" r="172" stroke="white" strokeWidth="2.5" opacity="0.9" />
                  <circle cx="200" cy="200" r="145" stroke="white" strokeWidth="2.5" opacity="0.9" />
                  
                  {/* MAKE ACADEMY Curved Text */}
                  <text fill="white" fontSize="16" fontWeight="bold" letterSpacing="7" fontFamily="system-ui, -apple-system, sans-serif">
                    <textPath href="#makeAcademyCurveCard" startOffset="50%" textAnchor="middle">
                      MAKE ACADEMY
                    </textPath>
                  </text>
                  
                  {/* Two White Stars */}
                  <g fill="white" transform="translate(160, 95)">
                    <polygon points="12,0 15.5,8 24,9 17.5,15 19.5,23.5 12,19 4.5,23.5 6.5,15 0,9 8.5,8" />
                  </g>
                  <g fill="white" transform="translate(216, 95)">
                    <polygon points="12,0 15.5,8 24,9 17.5,15 19.5,23.5 12,19 4.5,23.5 6.5,15 0,9 8.5,8" />
                  </g>
                  
                  {/* MAKE Logo: 3 angled bars + text */}
                  <g fill="white" transform="translate(75, 142)">
                    <rect x="5" y="14" width="7.5" height="34" rx="3.75" transform="rotate(-15 5 14)" />
                    <rect x="20" y="14" width="7.5" height="34" rx="3.75" transform="rotate(-15 20 14)" />
                    <rect x="35" y="14" width="7.5" height="34" rx="3.75" transform="rotate(-15 35 14)" />
                    <text x="65" y="47" fill="white" fontSize="48" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-1">
                      make
                    </text>
                  </g>
                  
                  {/* Divider Line */}
                  <line x1="75" y1="214" x2="325" y2="214" stroke="white" strokeWidth="3.5" />
                  
                  {/* BASICS Text */}
                  <text x="200" y="260" fill="white" fontSize="30" fontWeight="900" textAnchor="middle" letterSpacing="4" fontFamily="system-ui, -apple-system, sans-serif">
                    BASICS
                  </text>
                  
                  {/* Checkmark Symbol */}
                  <g transform="translate(200, 305)">
                    <path d="M -22 -6 L -7 9 L 22 -20 L 27 -15 L -7 19 L -27 -1 Z" fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* 2. THE WRITEUP (Underneath the Image as requested) */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
        <div>
          {/* Badge & Organization */}
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#04703D]/15 text-[#04703D] border border-[#04703D]/30">
              {cert.tier}
            </span>
            <span className="text-xs font-mono text-[#0A0A0A]/50">
              {cert.organization}
            </span>
          </div>

          {/* Title */}
          <h4 className="font-serif text-lg font-bold text-[#0A0A0A] mb-2 leading-snug group-hover:text-[#04703D] transition-colors">
            {cert.name}
          </h4>

          {/* Writeup Description */}
          <p className="text-xs sm:text-sm text-[#0A0A0A]/75 leading-relaxed mb-4 font-sans">
            {cert.description}
          </p>
        </div>

        {/* Certificate Actions & Verification Links */}
        <div className="pt-3 border-t border-black/10 flex items-center justify-between gap-2">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#04703D] hover:underline cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Inspect Full Certificate</span>
          </button>

          {cert.verificationUrl ? (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
            >
              <span>Skilljar ID</span>
              <ExternalLink className="w-3 h-3 text-[#04703D]" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#04703D]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified</span>
            </span>
          )}
        </div>

      </div>

    </div>
  );
};
