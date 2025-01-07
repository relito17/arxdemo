import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import LeadMagnet from './components/LeadMagnet';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SectionSeparator from './components/common/SectionSeparator';
import LanguageSwitcher from './components/LanguageSwitcher';
import ScrollToTop from './components/common/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-navy-900">
        <CustomCursor />
        <LanguageSwitcher />
        <Header />
        <main className="relative space-y-24">
          <Hero />
          <div className="relative z-10">
            <SectionSeparator />
            <PainPoints />
            <SectionSeparator />
            <Services />
            <SectionSeparator />
            <LeadMagnet />
          </div>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;