import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: '프로그램 안내', href: '#programs' },
    { name: '성과 확인', href: '#results' },
    { name: '학생 후기', href: '#reviews' },
    { name: '강사진 소개', href: '#teachers' },
    { name: '블로그', href: '#blog' },
    { name: '온라인 문의', href: '#contact' }
  ];

  const programs = [
    { name: 'SAT 정규반', href: '#regular' },
    { name: 'SAT 집중반', href: '#intensive' },
    { name: '개인 과외', href: '#private' },
    { name: '온라인 수업', href: '#online' },
    { name: '모의고사', href: '#mock' },
    { name: '상담 예약', href: '#consultation' }
  ];

  return (
    <footer className="bg-gray-900 text-white">

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} 트리플 어학원.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors duration-200">
                개인정보처리방침
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-200">
                이용약관
              </a>
            </div>
          </div>

          {/* Business Registration Info */}
          <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-500 text-center">
            <p>
              사업자등록번호: [등록번호 입력] | 대표자: [대표자명] | 통신판매업신고: [신고번호]<br />
              주소: [사업장 주소] | 개인정보보호책임자: [책임자명]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;