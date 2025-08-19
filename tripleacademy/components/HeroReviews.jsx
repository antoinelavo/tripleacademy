import React from 'react';

const HeroReviews = () => {
  // Top row images (moves right to left)
  const topRowImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `/images/review${i + 1}.png`,
    alt: `학생 후기 ${i + 1}`
  }));

  // Bottom row images (moves left to right) 
  const bottomRowImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 6,
    src: `/images/review${i + 6}.png`,
    alt: `학생 후기 ${i + 6}`
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 pt-16">
      {/* Floating background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -left-8 w-48 h-48 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div> */}

      {/* Hero Content - Constrained Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">3번 안에</span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                SAT 1550+
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl">고득점 전문</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              결과로 증명합니다.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </div>


      {/* Reviews Section - Full Width */}
      <div className="w-full space-y-8 pb-16">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            실제 학생들의 <span className="text-blue-600">손글씨 후기</span>
          </h2>
          <p className="text-lg text-gray-600">
            트리플 어학원 수강생들이 직접 작성한 진솔한 후기를 확인해보세요
          </p>
        </div>

        {/* Horizontal Scrolling Reviews - Full Screen Width */}
        <div className="space-y-8 overflow-hidden w-full">
          {/* Desktop Version - 2 Rows (md and up) */}
          <div className="hidden md:block space-y-8">
            {/* Top Row - Right to Left */}
            <div className="relative w-full">
              <div className="flex space-x-6 animate-scroll-rtl">
                {/* First set of images */}
                {topRowImages.map((image) => (
                  <div
                    key={`desktop-top-1-${image.id}`}
                    className="flex-shrink-0 w-167 h-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {topRowImages.map((image) => (
                  <div
                    key={`desktop-top-2-${image.id}`}
                    className="flex-shrink-0 w-167 h-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Left to Right */}
            <div className="relative w-full">
              <div className="flex space-x-6 animate-scroll-ltr">
                {/* First set of images */}
                {bottomRowImages.map((image) => (
                  <div
                    key={`desktop-bottom-1-${image.id}`}
                    className="flex-shrink-0 w-167 h-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {bottomRowImages.map((image) => (
                  <div
                    key={`desktop-bottom-2-${image.id}`}
                    className="flex-shrink-0 w-167 h-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Version - 3 Rows (below md) */}
          <div className="block md:hidden space-y-6">
            {/* Mobile Row 1 - Right to Left */}
            <div className="relative w-full">
              <div className="flex space-x-4 animate-scroll-rtl">
                {Array.from({ length: 4 }, (_, i) => ({
                  id: i + 1,
                  src: `/images/review${i + 1}.png`,
                  alt: `학생 후기 ${i + 1}`
                })).concat(Array.from({ length: 5 }, (_, i) => ({
                  id: i + 1,
                  src: `/images/review${i + 1}.png`,
                  alt: `학생 후기 ${i + 1}`
                }))).map((image, index) => (
                  <div
                    key={`mobile-row1-${index}`}
                    className="flex-shrink-0 w-117 h-70 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Row 2 - Left to Right */}
            <div className="relative w-full">
              <div className="flex space-x-4 animate-scroll-ltr">
                {Array.from({ length: 4 }, (_, i) => ({
                  id: i + 4,
                  src: `/images/review${i + 4}.png`,
                  alt: `학생 후기 ${i + 4}`
                })).concat(Array.from({ length: 5 }, (_, i) => ({
                  id: i + 4,
                  src: `/images/review${i + 4}.png`,
                  alt: `학생 후기 ${i + 4}`
                }))).map((image, index) => (
                  <div
                    key={`mobile-row2-${index}`}
                    className="flex-shrink-0 w-117 h-70 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Row 3 - Right to Left */}
            <div className="relative w-full">
              <div className="flex space-x-4 animate-scroll-rtl">
                {Array.from({ length: 4 }, (_, i) => ({
                  id: i + 11,
                  src: `/images/review${i + 8}.png`,
                  alt: `학생 후기 ${i + 8}`
                })).concat(Array.from({ length: 6 }, (_, i) => ({
                  id: i + 11,
                  src: `/images/review${i + 8}.png`,
                  alt: `학생 후기 ${i + 8}`
                }))).map((image, index) => (
                  <div
                    key={`mobile-row3-${index}`}
                    className="flex-shrink-0 w-117 h-70 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 30s linear infinite;
        }
        
        .animate-scroll-ltr {
          animation: scroll-ltr 30s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll-rtl:hover,
        .animate-scroll-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HeroReviews;