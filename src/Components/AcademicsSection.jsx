import React, { useState, useEffect } from 'react';
import Acdemics from "../assets/rgcs10.jpg"
export default function AcademicsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Academics Section */}
      <div className="max-w-6xl w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
            <div 
              className={`transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-12 opacity-0'
              }`}
            >
              <h1 className="text-[40px] lg:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                ACADEMICS
              </h1>
              
              <p 
                className={`text-gray-600 text-lg leading-relaxed mb-8 transform transition-all duration-1000 delay-300 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
              >
                We are empowering children by nurturing their true potential and 
                guiding their journey to success early in life through enriching 
                their lives with transformative personal and academic experiences 
                that are building lasting foundations for learning.
              </p>
              
              <button 
                className={`group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  Start Learning
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
            <div 
              className={`transform transition-all duration-1200 ease-out ${
                isVisible && imageLoaded
                  ? 'scale-100 translate-x-0 opacity-100' 
                  : 'scale-105 translate-x-8 opacity-0'
              }`}
            >
              <img
                src={Acdemics}
                alt="Teacher engaging with children in classroom"
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            
            {/* Decorative Elements */}
            <div 
              className={`absolute top-8 right-8 w-16 h-16 border-4 border-green-400 rounded-full transform transition-all duration-1000 delay-700 ease-out ${
                isVisible 
                  ? 'scale-100 rotate-0 opacity-100' 
                  : 'scale-0 rotate-45 opacity-0'
              }`}
            ></div>
            
            <div 
              className={`absolute bottom-8 left-8 w-20 h-20 bg-orange-400 rounded-full opacity-20 transform transition-all duration-1000 delay-500 ease-out ${
                isVisible 
                  ? 'scale-100 translate-y-0' 
                  : 'scale-0 translate-y-8'
              }`}
            ></div>
            
            <div 
              className={`absolute top-1/2 left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-30 transform transition-all duration-1000 delay-900 ease-out ${
                isVisible 
                  ? 'scale-100 -translate-y-2' 
                  : 'scale-0 translate-y-2'
              }`}
            ></div>

            {/* Floating Animation Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className={`absolute top-16 right-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce transform transition-all duration-1000 delay-1000 ${
                  isVisible ? 'opacity-60' : 'opacity-0'
                }`}
                style={{ animationDelay: '0s', animationDuration: '3s' }}
              ></div>
              <div 
                className={`absolute bottom-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-bounce transform transition-all duration-1000 delay-1200 ${
                  isVisible ? 'opacity-60' : 'opacity-0'
                }`}
                style={{ animationDelay: '1s', animationDuration: '3s' }}
              ></div>
              <div 
                className={`absolute top-32 left-16 w-4 h-4 bg-pink-400 rounded-full animate-bounce transform transition-all duration-1000 delay-1400 ${
                  isVisible ? 'opacity-60' : 'opacity-0'
                }`}
                style={{ animationDelay: '2s', animationDuration: '3s' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 transform transition-all duration-1500 delay-800 origin-left scale-x-0" 
             style={{ 
               transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
               transition: 'transform 1.5s ease-out 0.8s'
             }}>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="max-w-6xl w-full mx-auto">
        <div 
          className={`text-center mb-12 transform transition-all duration-1000 delay-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-[40px]  lg:text-4xl md:text-5xl font-bold text-gray-700 tracking-wider">
            FACILITIES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
          {/* Digital Classes */}
          <div 
            className={`bg-gradient-to-br from-yellow-400 to-orange-500 p-8 md:p-12 text-white transform transition-all duration-1000 delay-1200 ease-out hover:scale-105 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v6H4zm2 2h12v2H6z"/>
                  <path d="M2 4v16h20V4H2zm18 14H4V6h16v12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">DIGITAL CLASSES</h3>
                <p className="text-white/90 leading-relaxed">
                  Technology enabled classrooms where students are learning 
                  concepts through engaging audio-visual aids and interactive 
                  digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Sports Complex */}
          <div 
            className={`bg-gradient-to-br from-red-400 to-orange-600 p-8 md:p-12 text-white transform transition-all duration-1000 delay-1400 ease-out hover:scale-105 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">SPORTS COMPLEX</h3>
                <p className="text-white/90 leading-relaxed">
                  Holistic development is our primary objective. We are 
                  providing a state-of-the-art sports complex that helps 
                  students evolving into well-balanced individuals.
                </p>
              </div>
            </div>
          </div>

          {/* Library */}
          <div 
            className={`bg-gradient-to-br from-green-400 to-emerald-600 p-8 md:p-12 text-white transform transition-all duration-1000 delay-1600 ease-out hover:scale-105 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">LIBRARY</h3>
                <p className="text-white/90 leading-relaxed">
                  A well-stocked library which is catering to the needs of 
                  students both for academic research as well as reading 
                  for pleasure and expanding knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Cafeteria */}
          <div 
            className={`bg-gradient-to-br from-orange-500 to-red-500 p-8 md:p-12 text-white transform transition-all duration-1000 delay-1800 ease-out hover:scale-105 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">CAFETERIA</h3>
                <p className="text-white/90 leading-relaxed">
                  Nutritionally balanced and delicious meals are being made 
                  available to students for their wholesome growth and 
                  healthy development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}