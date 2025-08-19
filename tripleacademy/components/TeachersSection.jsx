import React from 'react';
import { GraduationCap, Award, Users, Star, BookOpen, Target } from 'lucide-react';

const TeachersSection = () => {
  const teachers = [
    {
      id: 1,
      name: 'Dennis',
      title: 'SAT Math 전문 강사',
      image: 'https://via.placeholder.com/300x300?text=김민준+강사',
      experience: '8년',
      education: '한국대학교 수학과 졸업',
      specialization: 'SAT Math',
      achievements: [
        'SAT Math 만점 지도 경험 50회+',
        '평균 점수 향상 150점',
        'MIT, Stanford 합격생 지도'
      ],
      description: '체계적인 수학 개념 정리와 실전 문제 해결 능력 향상에 특화된 강의를 제공합니다. 학생 개개인의 약점을 정확히 파악하여 맞춤형 학습 전략을 수립합니다.',
      rating: 4.9,
      students: 30
    },
    {
      id: 2,
      name: '장유진',
      title: 'SAT Reading & Writing 전문 강사',
      image: 'https://via.placeholder.com/300x300?text=박서연+강사',
      experience: '6년',
      education: '한국대학교 영문학과 졸업',
      specialization: 'SAT R&W, Essay Writing',
      achievements: [
        'SAT R&W 750+ 달성률 95%',
        '명문대 에세이 지도 전문',
        '학생 만족도 98%'
      ],
      description: '독해력과 논리적 사고력을 기르는 체계적인 Reading & Writing 수업을 진행합니다. 비판적 사고와 글쓰기 실력 향상으로 SAT 고득점을 달성시킵니다.',
      rating: 4.8,
      students: 40
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Teachers Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Teacher Image and Basic Info */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {teacher.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {teacher.title}
                </p>

                {/* Rating and Stats */}
                <div className="flex justify-center items-center space-x-6 mb-6">
                  {/* <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{teacher.rating}</span>
                  </div> */}
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{teacher.students}명 지도</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{teacher.experience} 경력</span>
                  </div>
                </div>
              </div>

              {/* Education and Specialization */}
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    학력 및 전문 분야
                  </h4>
                  <p className="text-gray-700 mb-1">{teacher.education}</p>
                  <p className="text-blue-600 font-medium">{teacher.specialization}</p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    {teacher.description}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              {/* <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-600" />
                  주요 성과
                </h4>
                <ul className="space-y-2">
                  {teacher.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;