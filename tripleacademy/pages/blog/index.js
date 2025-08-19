import React from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import StickyContactButton from '@/components/StickyContactButton';

export default function Blog() {
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
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-8">

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight min-h-screen">
                <span className="block">블로그 (준비중입니다)</span>
              </h1>
            </div>
          </div>
        </section>
        

        
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <StickyContactButton />
    </div>
  );
}