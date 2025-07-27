import React, { useState, useEffect } from 'react';
import student from "../assets/students.jpg"

const WelcomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative dots pattern - Left side */}
      <div className={`absolute left-0 top-0 w-80 h-full opacity-30 transform transition-all duration-1500 ${
        isVisible ? 'translate-x-0 opacity-30' : '-translate-x-20 opacity-0'
      }`}>
        <div className="grid grid-cols-12 gap-3 p-8 h-full">
          {[...Array(180)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 bg-gray-400 rounded-full transform transition-all duration-1000`}
              style={{
                animationDelay: `${(i * 20)}ms`,
                animation: isVisible ? 'fadeInScale 0.6s ease-out forwards' : 'none'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Decorative dots pattern - Right side */}
      <div className={`absolute right-0 top-0 w-80 h-full opacity-20 transform transition-all duration-1500 delay-300 ${
        isVisible ? 'translate-x-0 opacity-20' : 'translate-x-20 opacity-0'
      }`}>
        <div className="grid grid-cols-12 gap-3 p-8 h-full">
          {[...Array(180)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 bg-gray-500 rounded-full transform transition-all duration-1000`}
              style={{
                animationDelay: `${(i * 15)}ms`,
                animation: isVisible ? 'fadeInScale 0.8s ease-out forwards' : 'none'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Section - Left Side */}
            <div className="lg:w-1/2 relative">
              <div className={`transform transition-all duration-1200 ease-out ${
                isVisible ? 'translate-x-0 opacity-100 scale-100 rotate-0' : '-translate-x-16 opacity-0 scale-95 -rotate-2'
              }`}>
                {/* Main Image */}
                <div className="relative">
                  <div className="bg-white p-4 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <img 
                      src={student}
                      alt="Students playing chess" 
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Decorative Orange Circle */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 rounded-full transform transition-all duration-1000 delay-500 ${
                    isVisible ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : 'translate-x-8 translate-y-8 opacity-0 scale-0'
                  }`}>
                    {/* Inner circle animation */}
                    <div className="absolute inset-4 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Chess Piece Floating Element */}
                  <div className={`absolute -top-4 -left-4 w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center transform transition-all duration-1000 delay-700 ${
                    isVisible ? 'translate-y-0 opacity-100 rotate-0' : '-translate-y-8 opacity-0 rotate-45'
                  }`}>
                    <span className="text-2xl">♔</span>
                  </div>
                  
                  {/* Additional floating element */}
                  <div className={`absolute top-1/2 -right-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-80 transform transition-all duration-1000 delay-900 ${
                    isVisible ? 'translate-x-0 opacity-80 scale-100' : 'translate-x-12 opacity-0 scale-0'
                  }`}>
                    <div className="absolute inset-2 bg-white/30 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="lg:w-1/2">
              <div className={`transform transition-all duration-1200 delay-300 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}>
                
                {/* Main Heading */}
                <h1 className={`text-[40px] lg:text-4xl font-bold text-gray-800 mb-8 leading-tight transform transition-all duration-1000 delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  WELCOME TO 
                  <span className="block text-gray-900 mt-2">Rishi Galav School</span>
                </h1>
                
                {/* Description */}
                <p className={`text-gray-600 text-[18px] lg:text-[18px] leading-relaxed mb-10 transform transition-all duration-1000 delay-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  Rishi Galav School gives its students an extraordinary education, 
                  anchored in timeless values. We empower children to develop into 
                  citizens who live lives of purpose and distinction.
                </p>

                {/* Read More Button */}
                <div className={`transform transition-all duration-1000 delay-900 ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                }`}>
                  <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:from-orange-500 hover:to-orange-600 relative overflow-hidden group">
                    <span className="relative z-10">Read More</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Decorative elements */}
                <div className={`mt-12 flex space-x-4 transform transition-all duration-1000 delay-1100 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <div className="w-12 h-1 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="w-8 h-1 bg-orange-300 rounded-full animate-pulse delay-200"></div>
                  <div className="w-4 h-1 bg-orange-200 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animated Elements */}
      <div className={`absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-20 transform transition-all duration-2000 ${
        isVisible ? 'translate-y-0 opacity-20 scale-100' : 'translate-y-20 opacity-0 scale-0'
      }`}></div>
      
      <div className={`absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full opacity-15 transform transition-all duration-2000 delay-500 ${
        isVisible ? 'translate-y-0 opacity-15 scale-100' : '-translate-y-20 opacity-0 scale-0'
      }`}></div>

      {/* Custom CSS for additional animations */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeSection;