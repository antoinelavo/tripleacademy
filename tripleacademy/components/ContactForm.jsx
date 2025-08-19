import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    school: '',
    grade: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const gradeOptions = [
    { value: '', label: '학년을 선택하세요' },
    { value: '8', label: 'G8' },
    { value: '9', label: 'G9' },
    { value: '10', label: 'G10' },
    { value: '11', label: 'G11' },
    { value: '12', label: 'G12' },
    { value: 'other', label: '기타' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Limit message length to 500 characters
    if (name === 'message' && value.length > 500) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = '학생 이름을 입력해주세요';
    }

    if (!formData.school.trim()) {
      newErrors.school = '학교명을 입력해주세요';
    }

    if (!formData.grade) {
      newErrors.grade = '학년을 선택해주세요';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '전화번호를 입력해주세요';
    } else if (!/^[\d\-\+\(\)\s]+$/.test(formData.phone)) {
      newErrors.phone = '올바른 전화번호 형식을 입력해주세요';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일 주소를 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요';
    }

    if (!formData.message.trim()) {
      newErrors.message = '문의 내용을 입력해주세요';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '문의 내용을 최소 10자 이상 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        studentName: '',
        school: '',
        grade: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              문의가 성공적으로 전송되었습니다!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              빠른 시일 내에 담당자가 연락드리겠습니다.<br />
              감사합니다.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
            >
              새 문의하기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">문의하기</span>
          </h2>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="space-y-6">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-sm font-semibold text-gray-900 mb-2">
                학생 이름 *
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.studentName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="학생의 이름을 입력하세요"
              />
              {errors.studentName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.studentName}
                </p>
              )}
            </div>

            {/* School and Grade */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="school" className="block text-sm font-semibold text-gray-900 mb-2">
                  학교명 *
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                    errors.school ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="재학 중인 학교명"
                />
                {errors.school && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.school}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-semibold text-gray-900 mb-2">
                  학년 *
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                    errors.grade ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {gradeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.grade && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.grade}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  전화번호 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="010-1234-5678"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  이메일 주소 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                문의 내용 *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="현재 SAT 점수, 목표 점수, 희망 수업 시간대, 기타 문의사항 등을 자세히 적어주세요."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {formData.message.length}/500자
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>문의하기</span>
                  </>
                )}
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 처리됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;