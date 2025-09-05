import React, { useState, useEffect } from 'react';
import frontimg from "../assets/HomePage-2.jpeg"
import Logo from "../assets/logo.jpeg"
import WelcomeSection from './WelcomeSection';
import AcademicsSection from './AcademicsSection';

const RishiSchoolHomepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="relative">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - School Building Image */}
          <div className="lg:w-2/3 relative overflow-hidden">
            <div className={`transform transition-all duration-1500 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}>
              <img 
                src={frontimg}
                alt="Rishi Galav School Building" 
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
            </div>
            
            <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex justify-center space-x-4">
                {[1, 2, 3, 4, 5].map((student, index) => (
                  <div 
                    key={student}
                    className={`w-12 h-12 bg-blue-900 rounded-full transform transition-all duration-300 delay-${index * 100} hover:scale-110 hover:-translate-y-2`}
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/3 bg-gradient-to-br from-blue-800 to-blue-900 flex flex-col justify-center px-8 py-12 lg:py-0 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full animate-bounce"></div>
            </div>

            <div className="relative z-10">
              <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                GOOD EDUCATION
              </h2>
              <h3 className={`text-3xl lg:text-4xl font-bold text-white mb-8 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                IS OUR CONCERN
              </h3>
              
              <p className={`text-white/90 text-lg mb-12 leading-relaxed transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                A place where academic excellence meets all round development with focus on Human Engineering as opposed to technical engineering.
              </p>

              <div className={`relative transform transition-all duration-1000 delay-1100 ${
                isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-8 opacity-0 rotate-12'
              }`}>
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex flex-col items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping opacity-20"></div>
                  
                  <div className="text-center z-10">
                    <p className="text-2xl font-bold text-gray-900 mb-2">Admission Open</p>
                    <p className="text-lg text-gray-800 mb-2">for the session</p>
                    <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-2"></div>
                    <p className="text-3xl font-bold text-gray-900">2025-26</p>
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-12 z-50 w-full">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-blue-700 hover:to-blue-800 animate-pulse">
          {/* Phone icon can go here */}
        </button>
      </div>
      <WelcomeSection/>
      <AcademicsSection/>
    </div>
  );
};

export default RishiSchoolHomepage;