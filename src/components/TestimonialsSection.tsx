import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'carousel'>('grid');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextTestimonial = () => {
    setCarouselIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCarouselIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0C120F]/72 text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#1C3A5E] text-xs font-mono uppercase tracking-widest mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[#1C3A5E]" />
              <span>Verified Client Proof</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              Real results from verified client builds.
            </h2>
            
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
              Authentic reviews from founders, directors, and team leads who trust Oparaku Systems to run their daily operations.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('grid')}
              className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-[#1C3A5E] text-[#111815] font-bold shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              All Reviews (5)
            </button>
            <button
              onClick={() => setActiveTab('carousel')}
              className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'carousel'
                  ? 'bg-[#1C3A5E] text-[#111815] font-bold shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Spotlight View
            </button>
          </div>
        </div>

        {/* Grid View */}
        {activeTab === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className="rounded-3xl bg-[#16201B] border border-white/10 p-7 flex flex-col justify-between hover:border-[#1C3A5E]/40 transition-all relative group"
              >
                <div>
                  {/* Rating Stars & Source */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#1C3A5E] text-[#1C3A5E]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/50 text-[#1C3A5E] border border-[#1C3A5E]/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#1C3A5E]" />
                      {t.source}
                    </span>
                  </div>

                  {/* Project Type */}
                  <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1C3A5E] mb-3">
                    {t.projectType}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-white/90 leading-relaxed italic mb-6 font-sans">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs font-mono text-white/50">
                      {t.role} {t.company ? `(${t.company})` : ''}
                    </p>
                  </div>
                  <Quote className="w-6 h-6 text-[#1C3A5E]/30" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Carousel / Spotlight View */}
        {activeTab === 'carousel' && (
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-[#16201B]/88 border border-white/10 p-8 sm:p-12 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  {[...Array(TESTIMONIALS[carouselIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#1C3A5E] text-[#1C3A5E]" />
                  ))}
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-black/50 text-[#1C3A5E] border border-[#1C3A5E]/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1C3A5E]" />
                  {TESTIMONIALS[carouselIndex].source}
                </span>
              </div>

              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C3A5E] mb-4">
                Project: {TESTIMONIALS[carouselIndex].projectType}
              </div>

              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed italic mb-8">
                &ldquo;{TESTIMONIALS[carouselIndex].content}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {TESTIMONIALS[carouselIndex].author}
                  </h4>
                  <p className="text-xs font-mono text-white/50">
                    {TESTIMONIALS[carouselIndex].role} {TESTIMONIALS[carouselIndex].company ? `(${TESTIMONIALS[carouselIndex].company})` : ''}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
