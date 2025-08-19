import React from 'react';
import Header from '@/components/Header';
import HeroReviews from '@/components/HeroReviews';
import ResultsShowcase from '@/components/ResultsShowcase';
import ProgramsSection from '@/components/ProgramsSection';
import Footer from '@/components/Footer';
import StickyContactButton from '@/components/StickyContactButton';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* Disable scroll-behavior for reduced motion users */
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with Reviews */}
        <HeroReviews />
        
        {/* Results Section */}
        <ResultsShowcase />
        
        {/* Programs Section */}
        <ProgramsSection />

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <StickyContactButton />
    </div>
  );
}