import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const StickyContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: '카카오톡',
      icon: MessageCircle,
      color: 'bg-yellow-400 hover:bg-yellow-500',
      href: 'https://pf.kakao.com/_QuAbK', // Replace with actual Kakao link
      primary: true
    },
    {
      name: '전화문의',
      icon: Phone,
      color: 'bg-green-500 hover:bg-green-600',
      href: 'tel:+82-XX-XXXX-XXXX' // Replace with actual phone
    },
    {
      name: '이메일',
      icon: Mail,
      color: 'bg-blue-500 hover:bg-blue-600',
      href: 'mailto:eugenepark912@gmail.com' // Replace with actual email
    }
  ];

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
       'translate-y-0 opacity-100'
    }`}>
      {/* Contact Options */}
      <div className={`mb-4 space-y-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <div
            key={option.name}
            className={`transform transition-all duration-300 delay-${index * 50}`}
            style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
          >
            <a
              href={option.href}
              className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white transition-all duration-200 hover:scale-110 hover:shadow-xl ${option.color}`}
              title={option.name}
            >
              <option.icon className="w-6 h-6" />
            </a>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700 rotate-45' 
            : 'bg-blue-600 hover:bg-blue-700 animate-pulse'
        }`}
        aria-label="문의하기"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {isOpen ? (
            <div className="w-6 h-6 relative">
              <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
        </div>
        
        {/* Ripple effect */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
        )}
      </button>

      {/* Tooltip for main button */}
      {!isOpen && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          문의하기
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default StickyContactButton;