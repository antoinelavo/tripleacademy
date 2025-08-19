import React, { useState } from 'react';
import { Trophy, Target, Award, TrendingUp, Calendar, School } from 'lucide-react';

const ResultsShowcase = () => {
  const [activeTab, setActiveTab] = useState('may2025');

  const testResults = {
    may2025: {
      title: '2025년 5월',
      date: '2025.05',
      announcement: '"1600 만점" 등장',
      subtitle: '작년 8월에 이어, 이번 5월 SAT시험에서 트리플 수강생이 또다시 SAT 1600 "만점"을 받았습니다.',
      stats: [
        { label: '만점 (1600)', count: 1, highlight: true },
        { label: '1590점', count: 1 },
        { label: '1560점', count: 1 },
        { label: '1550점', count: 5 },
        { label: '1530점', count: 2 },
        { label: 'RW 750 이상', count: 8 },
        { label: 'Math 790 이상', count: 17 }
      ],
      detailedResults: [
        { score: 1600, school: '수도권', name: '***', rw: 800 },
        { score: 1590, school: 'APIS', name: '***', rw: 790 },
        { score: 1560, school: '중남미', name: 'L**', rw: 760 },
        { score: 1550, school: '캐나다', name: 'P**', rw: 760 },
        { score: 1550, school: 'SFS', name: 'K**', rw: 760 },
        { score: 1550, school: '채드윅', name: '***', rw: 790 },
        { score: 1550, school: '채드윅', name: '***', rw: 750 },
        { score: 1550, school: '채드윅', name: '***', rw: 750 }
      ]
    },
march2025: {
  title: '2025년 3월',
  date: '2025.03',
  announcement: '고득점 행진 계속',
  subtitle: '3월 SAT에서도 트리플 수강생들이 우수한 성과를 거두었습니다.',
  stats: [
    { label: '1590점', count: 1, highlight: true },
    { label: '1570점', count: 2 },
    { label: '1560점', count: 1 },
    { label: '1550점', count: 3 },
    { label: '1540점', count: 2 },
    { label: 'RW 750 이상', count: 10 },
    { label: 'Math 790 이상', count: 18 }
  ],
  detailedResults: [
    { score: 1590, school: 'SIS', name: 'L**', rw: 790 },
    { score: 1570, school: '채드윅', name: '***', rw: 790 },
    { score: 1570, school: '채드윅', name: '***', rw: 770 },
    { score: 1560, school: '채드윅', name: '***', rw: 760 },
    { score: 1550, school: 'YISS', name: '***', rw: 760 },
    { score: 1550, school: '채드윅', name: '***', rw: 750 },
    { score: 1550, school: 'SIS', name: '***', rw: 750 }
  ]
},
december2024: {
  title: '2024년 12월',
  date: '2024.12',
  announcement: '연말 고득점 성과',
  subtitle: '12월 SAT에서도 트리플 수강생들이 꾸준한 고득점을 기록했습니다.',
  stats: [
    { label: '1570점', count: 4, highlight: true },
    { label: '1560점', count: 2 },
    { label: '1550점', count: 2 },
    { label: 'RW 750 이상', count: 8 },
    { label: 'Math 790 이상', count: 6 }
  ],
  detailedResults: [
    { score: 1570, school: '채드윅', name: '*Y*', rw: 780 },
    { score: 1570, school: '미보딩', name: 'K**', rw: 770 },
    { score: 1570, school: '중국', name: '*D*', rw: 770 },
    { score: 1570, school: '중국', name: 'L**', rw: 770 },
    { score: 1560, school: '비인가', name: 'K**', rw: 760 },
    { score: 1560, school: '중국', name: 'K**', rw: 760 },
    { score: 1550, school: 'SIS', name: 'K**', rw: 770 },
    { score: 1550, school: '싱가폴', name: 'K**', rw: 760 }
  ]
}
  };

  const tabs = Object.keys(testResults);
  const currentResults = testResults[activeTab];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            트리플은 <span className="text-blue-600">입증된 결과</span>로 말합니다.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적인 커리큘럼과 개인별 맞춤 지도로 달성한 실제 성과입니다.
          </p>
        </div>

        {/* Test Date Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-[1em]">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {testResults[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* Results Content */}
        <div className="space-y-12">
          {/* Announcement Header */}
          {/* <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold">
              <Calendar className="w-5 h-5" />
              <span>{currentResults.date}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              {currentResults.announcement}
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {currentResults.subtitle}
            </p>
          </div> */}

          {/* Statistics Cards */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentResults.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  stat.highlight ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-white' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl mx-auto mb-4 ${
                  stat.highlight ? 'bg-blue-500' : 'bg-gray-100'
                }`}>
                  {stat.highlight ? (
                    <Trophy className="w-6 h-6 text-white" />
                  ) : (
                    <Target className="w-6 h-6 text-gray-600" />
                  )}
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  stat.highlight ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {stat.count}명
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
                {stat.highlight && (
                  <div className="mt-2 inline-flex items-center text-xs text-blue-600 font-semibold">
                    <Award className="w-3 h-3 mr-1" />
                    최고 성과
                  </div>
                )}
              </div>
            ))}
          </div> */}

          {/* Detailed Results Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h4 className="text-xl font-bold text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                {currentResults.title} 상세 결과
              </h4>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">총점</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">학교</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">이름</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">RW 점수</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Math 점수</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {currentResults.detailedResults.map((result, index) => (
                    <tr 
                      key={index}
                      className={`hover:bg-gray-50 transition-colors duration-200 ${
                        result.score === 1600 ? 'bg-blue-50' : ''
                      }`}
                    >
                      <td className={`px-6 py-4 font-bold ${
                        result.score === 1600 ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {result.score}
                        {result.score === 1600 && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Trophy className="w-3 h-3 mr-1" />
                            만점
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="flex items-center">
                          <School className="w-4 h-4 mr-2 text-gray-400" />
                          {result.school}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{result.name}</td>
                      <td className="px-6 py-4 text-gray-700">{result.rw}</td>
                      <td className="px-6 py-4 text-gray-700">{result.score - result.rw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <p className="text-sm text-gray-600">
                * 개인정보 보호를 위해 이름은 일부만 표시됩니다.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl py-12 px-6">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              목표 점수가 몇점이신가요?
            </h4>
            <p className="text-blue-100 mb-8 text-lg">
              트리플 어학원의 검증된 시스템으로 목표 점수를 달성하세요!
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              상담 신청하기
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;