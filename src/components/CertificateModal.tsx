import React from 'react';
import { Certification } from '../types';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Award, Calendar, Hash, Copy } from 'lucide-react';
import { sound } from '../utils/audio';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  const handleClose = () => {
    sound.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-black/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-black/10 bg-white">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#16201B] leading-tight">
                {cert.name}
              </h3>
              <p className="text-xs font-mono text-[#D4AF37]">
                {cert.organization} • {cert.tier}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#16201B]/70 hover:text-[#16201B] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Prominent Certificate Showcase */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Main Visual Certificate Frame */}
          <div className="w-full bg-[#0A0F0D] p-3 sm:p-6 rounded-2xl border border-black/15 shadow-2xl flex items-center justify-center">
            
            {/* CLICKUP MODAL VIEW */}
            {cert.category === 'clickup' && (
              <div className="w-full max-w-lg aspect-[4/3] bg-white text-[#1E1F21] p-6 sm:p-8 flex flex-col justify-between relative rounded-xl shadow-2xl border-8 border-double border-pink-400">
                {/* Rainbow Inner Border */}
                <div className="absolute inset-2 border-2 border-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-lg pointer-events-none" />
                
                <div className="text-center pt-2">
                  <h2 className="font-serif text-xl sm:text-2xl font-black text-[#2A2B2E] tracking-tight">
                    Certificate of Completion
                  </h2>
                </div>

                <div className="flex flex-col items-center justify-center my-auto">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-[#111936] rounded-3xl p-3 flex flex-col items-center justify-center shadow-xl border-4 border-black/10">
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px] opacity-40 rounded-3xl" />
                    
                    <div className="relative text-4xl sm:text-5xl mb-1">
                      🦄
                    </div>
                    
                    <div className={`w-full py-1 px-3 text-[11px] sm:text-xs font-black text-[#16201B] text-center rounded tracking-widest uppercase shadow ${
                      cert.badgeType === 'admin'
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500'
                        : cert.badgeType === 'intermediate'
                        ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400'
                        : 'bg-gradient-to-r from-pink-600 to-yellow-400'
                    }`}>
                      {cert.badgeName}
                    </div>

                    <div className="text-[10px] font-bold text-[#16201B] mt-1 flex items-center gap-1">
                      <span className="text-pink-400">▲</span> ClickUp
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between text-xs text-gray-700 font-mono pt-3 border-t border-gray-200">
                  <div>
                    <div>Issued: {cert.issued}</div>
                    {cert.certificateNo && <div className="font-bold text-gray-900">Certificate No: {cert.certificateNo}</div>}
                    {cert.verificationUrl && <div className="text-[10px] text-gray-500 truncate max-w-xs">{cert.verificationUrl}</div>}
                  </div>
                  <div className="text-right flex items-center gap-1.5 font-bold text-[#7B68EE] text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7B68EE]"></span>
                    <span>ClickUp</span>
                  </div>
                </div>
              </div>
            )}

            {/* AIRTABLE MODAL VIEW */}
            {cert.category === 'airtable' && (
              <div className="w-full max-w-lg aspect-[4/3] bg-[#F4EFFE] text-[#2D2250] p-6 sm:p-8 flex flex-col justify-between relative rounded-xl shadow-2xl border-8 border-[#D8C7F8]">
                <div className="flex items-start justify-between">
                  <div className="bg-[#482880] text-[#16201B] px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow">
                    <span>⬡</span>
                    <span>Certified Admin</span>
                  </div>
                  <div className="w-4 h-8 bg-[#482880] rounded-b-md" />
                </div>

                <div className="text-center my-auto relative">
                  <div className="font-serif text-lg sm:text-2xl font-bold text-[#2D2250] mb-1">
                    {cert.recipientName}
                  </div>
                  <div className="font-serif italic text-xs sm:text-sm text-gray-500 mb-2">
                    has successfully earned the
                  </div>
                  <div className="font-sans text-base sm:text-lg font-black text-[#482880]">
                    Airtable Admin Certification
                  </div>
                </div>

                <div className="text-xs text-gray-700 font-mono pt-3 border-t border-[#E3D6F8] flex items-end justify-between">
                  <div>
                    <div>{cert.validity || `Issued: ${cert.issued}`}</div>
                    {cert.certificateNo && <div className="font-bold">Certificate No: {cert.certificateNo}</div>}
                  </div>
                  <span className="font-bold text-[#482880] text-sm">Airtable</span>
                </div>
              </div>
            )}

            {/* NOTION MODAL VIEW */}
            {cert.category === 'notion' && (
              <div className="w-full max-w-lg aspect-[4/3] bg-white text-black p-6 sm:p-8 flex flex-col justify-between relative rounded-xl shadow-2xl border-8 border-black">
                <div className="text-center pt-1">
                  <h2 className="font-sans text-xl sm:text-2xl font-black text-black tracking-tight">
                    {cert.name}
                  </h2>
                </div>

                <div className="text-center my-auto">
                  <div className="font-sans text-base sm:text-lg font-bold text-black mb-1.5">
                    {cert.recipientName}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    Has completed: <span className="font-semibold text-black">{cert.badgeName}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Issued by: Notion Academy
                  </div>
                </div>

                <div className="flex items-end justify-between pt-2">
                  <div className="w-12 h-12 bg-black p-1 flex flex-wrap gap-1 rounded">
                    <div className="w-4 h-4 bg-white rounded-xs"></div>
                    <div className="w-4 h-4 bg-white rounded-xs"></div>
                    <div className="w-4 h-4 bg-white rounded-xs"></div>
                    <div className="w-4 h-4 bg-white rounded-xs"></div>
                  </div>

                  <div className="w-16 border-2 border-black rounded-b-2xl overflow-hidden shadow">
                    <div className="bg-black text-[#16201B] text-[8px] text-center py-1 font-sans font-bold leading-tight">
                      Notion Academy
                    </div>
                    <div className={`p-2 flex items-center justify-center text-xl text-black font-bold ${
                      cert.badgeType === 'advanced' 
                        ? 'bg-[#F5C518]' 
                        : cert.badgeType === 'workflows' 
                        ? 'bg-[#1E88E5] text-[#16201B]' 
                        : 'bg-[#EA4335] text-[#16201B]'
                    }`}>
                      {cert.badgeType === 'advanced' && '🛠️'}
                      {cert.badgeType === 'workflows' && '🔗'}
                      {cert.badgeType === 'essentials' && '🍎'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MAKE MODAL VIEW */}
            {cert.category === 'make' && (
              <div className="w-full max-w-lg aspect-[4/3] bg-[#130026] text-[#16201B] p-6 sm:p-8 flex items-center justify-center relative rounded-2xl shadow-2xl border-4 border-purple-600/40">
                <div className="w-48 h-48 sm:w-60 sm:h-60 drop-shadow-2xl">
                  <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="makePurpleGradientModal" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#6E00F5" />
                        <stop offset="45%" stopColor="#4A00A0" />
                        <stop offset="100%" stopColor="#250058" />
                      </linearGradient>
                      <path id="makeAcademyCurveModal" d="M 72,195 A 128,128 0 0,1 328,195" fill="none" />
                    </defs>
                    
                    {/* Main Circular Background */}
                    <circle cx="200" cy="200" r="195" fill="url(#makePurpleGradientModal)" stroke="#9333EA" strokeWidth="4" />
                    
                    {/* Inner White Rings */}
                    <circle cx="200" cy="200" r="172" stroke="white" strokeWidth="2.5" opacity="0.9" />
                    <circle cx="200" cy="200" r="145" stroke="white" strokeWidth="2.5" opacity="0.9" />
                    
                    {/* MAKE ACADEMY Curved Text */}
                    <text fill="white" fontSize="16" fontWeight="bold" letterSpacing="7" fontFamily="system-ui, -apple-system, sans-serif">
                      <textPath href="#makeAcademyCurveModal" startOffset="50%" textAnchor="middle">
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

          {/* Writeup & Credential Metadata Details (Under the image) */}
          <div className="space-y-4 bg-white p-5 rounded-2xl border border-black/10">
            <div>
              <h4 className="text-xs font-mono text-[#4A7350] uppercase tracking-wider font-bold mb-1">
                About This Credential
              </h4>
              <p className="text-sm text-[#16201B]/80 leading-relaxed font-sans">
                {cert.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-black/10 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-black/40 border border-black/5">
                <span className="text-[#16201B]/40 block text-[10px]">ISSUING BODY</span>
                <span className="text-[#16201B] font-semibold">{cert.organization}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-black/5">
                <span className="text-[#16201B]/40 block text-[10px]">RECIPIENT</span>
                <span className="text-[#16201B] font-semibold truncate block">Owens Oparaku</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-black/5 col-span-2 sm:col-span-1">
                <span className="text-[#16201B]/40 block text-[10px]">STATUS</span>
                <span className="text-[#4A7350] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Official Verified
                </span>
              </div>
            </div>

            {/* External verification button */}
            {cert.verificationUrl && (
              <div className="pt-2">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#D4AF37] text-[#111815] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#E5C358] transition-colors shadow-md"
                >
                  <span>Verify on Skilljar Online Registry</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
