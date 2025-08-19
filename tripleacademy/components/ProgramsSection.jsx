import React, { useState } from 'react';
import { BookOpen, Users, Clock, Target, Star, ArrowRight, Calendar, Award, Zap, Heart } from 'lucide-react';

const ProgramsSection = () => {
  const [activeProgram, setActiveProgram] = useState('regular');

  const programs = {
    regular: {
      title: 'SAT 정규반',
      subtitle: '체계적인 장기 커리큘럼',
      description: '기초부터 고득점까지 단계별로 실력을 쌓아가는 정규 과정입니다.',
      icon: BookOpen,
      color: 'blue',
      duration: '3-6개월',
      classSize: '8-12명',
      schedule: '주 2-3회',
      targetScore: '1400-1550+',
      features: [
        '개인별 진단테스트 및 맞춤 커리큘럼',
        '체계적인 Reading & Writing 전략 학습',
        'Math 개념부터 고난도 문제까지',
        '매주 모의고사 및 실력 점검',
        '개별 피드백 및 보충수업'
            ],
      price: '월 XXX,XXX원',
      bestFor: '탄탄한 기초를 바탕으로 고득점을 원하는 학생'
    },
    intensive: {
      title: 'SAT 방학 특강',
      subtitle: '단기간 고득점 달성',
      description: '빠른 시간 내에 목표 점수 달성을 위한 방학 프로그램입니다.',
      icon: Zap,
      color: 'red',
      duration: '4-8주',
      classSize: '4-6명',
      schedule: '주 4-5회',
      targetScore: '1500-1600',
      features: [
        '고난도 문제 중심 집중 훈련',
        '시간 관리 및 문제 풀이 전략',
        '매일 실전 연습 및 피드백',
        '개별 약점 보완 프로그램',
        '시험 직전 파이널 모의고사',
        '멘탈 관리 및 시험 팁 제공'
      ],
      price: '총 XXX,XXX원',
      bestFor: '이미 기초가 있고 단기간에 점수 향상이 필요한 학생'
    },
    private: {
      title: '1:1 개인 수업',
      subtitle: '완전 맞춤형 수업',
      description: '학생의 수준과 목표에 완벽하게 맞춘 개인별 맞춤 수업입니다.',
      icon: Heart,
      color: 'purple',
      duration: '협의',
      classSize: '1명',
      schedule: '협의',
      targetScore: '목표별 맞춤',
      features: [
        '100% 개별 맞춤 커리큘럼',
        '학생 스케줄에 맞는 유연한 시간',
        '집중적인 약점 보완',
        '실시간 질의응답 및 피드백',
        '학부모 상담 및 진도 보고',
        '최상위권 전문 강사 배정'
      ],
      price: '시간당 XXX,XXX원',
      bestFor: '개별 관리가 필요하거나 특별한 목표가 있는 학생'
    }
  };

  const features = [
    {
      icon: Target,
      title: '목표 점수 보장',
      description: '목표 미달성 시 무료 보강 수업 제공'
    },
    {
      icon: Users,
      title: '소수 정예',
      description: '철저한 개별 관리와 맞춤형 지도'
    },
    {
      icon: Award,
      title: '검증된 커리큘럼',
      description: '1600 만점자 배출 실적의 체계적 시스템'
    },
    {
      icon: Calendar,
      title: '유연한 스케줄',
      description: '학생 일정에 맞춘 다양한 수업 시간'
    }
  ];

  const currentProgram = programs[activeProgram];
  const IconComponent = currentProgram.icon;

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-500',
        gradient: 'from-blue-500 to-blue-600'
      },
      red: {
        bg: 'bg-red-500',
        bgLight: 'bg-red-50',
        text: 'text-red-600',
        border: 'border-red-500',
        gradient: 'from-red-500 to-red-600'
      },
      purple: {
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-500',
        gradient: 'from-purple-500 to-purple-600'
      }
    };
    return colorMap[color]?.[type] || colorMap.blue[type];
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            프로그램 소개
          </h2>
        </div>

        {/* Program Selector */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-2">
            {Object.entries(programs).map(([key, program]) => {
              const IconComp = program.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveProgram(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeProgram === key
                      ? `${getColorClasses(program.color, 'bg')} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                  <span className="whitespace-nowrap">{program.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Program Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Program Info */}
          <div className="space-y-8">
            <div>
              <div className={`inline-flex items-center space-x-3 ${getColorClasses(currentProgram.color, 'bgLight')} px-6 py-3 rounded-full mb-6`}>
                <IconComponent className={`w-6 h-6 ${getColorClasses(currentProgram.color, 'text')}`} />
                <span className={`font-semibold ${getColorClasses(currentProgram.color, 'text')}`}>
                  {currentProgram.subtitle}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentProgram.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentProgram.description}
              </p>
            </div>

            {/* Program Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">수업 기간</span>
                </div>
                <p className="text-gray-700">{currentProgram.duration}</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">수강 인원</span>
                </div>
                <p className="text-gray-700">{currentProgram.classSize}</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">수업 횟수</span>
                </div>
                <p className="text-gray-700">{currentProgram.schedule}</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">목표 점수</span>
                </div>
                <p className="text-gray-700">{currentProgram.targetScore}</p>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">프로그램 특징</h4>
              <ul className="space-y-3">
                {currentProgram.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full ${getColorClasses(currentProgram.color, 'bg')} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and CTA */}
            <div className={`bg-gradient-to-r ${getColorClasses(currentProgram.color, 'gradient')} rounded-2xl p-6 text-white`}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-90 mb-1">수강료</p>
                  <p className="text-2xl font-bold">{currentProgram.price}</p>
                </div>
                <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105">
                  상담 신청
                </button>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:order-last">
            <div className="relative">
              <div className={`bg-gradient-to-br ${getColorClasses(currentProgram.color, 'gradient')} rounded-3xl p-8 text-white`}>
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold mb-2">이런 학생에게 추천드립니다</h4>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {currentProgram.bestFor}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                      <span>자세히 알아보기</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Additional Features */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl py-12 px-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              어떤 프로그램이 나에게 맞을까요?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              전문 상담사가 학생의 현재 실력과 목표를 분석하여 최적의 프로그램을 추천해드립니다
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              무료 레벨테스트 신청
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProgramsSection;