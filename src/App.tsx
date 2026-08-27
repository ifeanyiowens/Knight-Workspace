import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CalModal } from './components/CalModal';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';
import { SiteBackground } from './components/SiteBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { PageSwitcherBar } from './components/PageSwitcherBar';
import { PageId } from './types';
import { PAGES_CONFIG } from './data/portfolioData';
import { sound } from './utils/audio';

// 6 Distinct Pages
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Sync with window.location.hash on mount & hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = ['home', 'work', 'services', 'process', 'about', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    sound.playTrigger();
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  // Render the active 6-page component
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />;
      case 'work':
        return <WorkPage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />;
      case 'process':
        return <ProcessPage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />;
      default:
        return <HomePage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1310]/95 text-[#EDEDEA] font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] relative flex flex-col justify-between">
      {/* Custom smooth tracking cursor */}
      <CustomCursor />

      {/* Recolored streak background image, forest green into gold */}
      <SiteBackground />

      {/* Subtle organic film grain texture */}
      <NoiseOverlay opacity={0.035} />

      {/* Scroll indicator & quick audio / section floating controller */}
      <ScrollProgress />

      {/* Sticky Top Nav with 6-Page Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {renderCurrentPage()}
      </main>

      {/* Floating Bottom 6-Page Switcher Bar */}
      <PageSwitcherBar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Full 6-Page Footer Directory */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Cal.com Booking Scheduler Modal */}
      <CalModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
