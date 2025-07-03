import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Clock, Users, Award, BookOpen, Sparkles, Star } from 'lucide-react';
  import { Link } from "react-router-dom";

const ModernSchoolFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ students: 0, awards: 0, successRate: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats numbers
          setTimeout(() => {
            const animateNumber = (target, setter, duration = 2000) => {
              let start = 0;
              const increment = target / (duration / 16);
              const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                  setter(target);
                  clearInterval(timer);
                } else {
                  setter(Math.floor(start));
                }
              }, 16);
            };
            
            animateNumber(2500, (val) => setAnimatedStats(prev => ({ ...prev, students: val })));
            animateNumber(15, (val) => setAnimatedStats(prev => ({ ...prev, awards: val })));
            animateNumber(98, (val) => setAnimatedStats(prev => ({ ...prev, successRate: val })));
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('school-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="school-footer" className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse"></div>
        
        {/* Floating Stars */}
        <div className="absolute top-10 right-1/4 animate-float">
          <Star className="w-6 h-6 text-pink-300 animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float-delayed">
          <Sparkles className="w-8 h-8 text-cyan-300 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-10 animate-float-slow">
          <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
        </div>
      </div>

      {/* Animated Wave Effect */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-wave"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(270deg); }
        }
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite 2s; }
        .animate-wave { animation: wave 3s linear infinite; }
      `}</style>

      {/* Main Footer Content */}
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* School Info */}
<div className="space-y-6 transform transition-all duration-1000 hover:scale-105">
  <div className="flex items-center space-x-3">
    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 hover:rotate-12 hover:shadow-2xl">
      <BookOpen className="w-8 h-8 text-white animate-pulse" />
    </div>
    <div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"> Rishi Galav School</h3>
      <p className="text-purple-200 animate-pulse">Est. 2010</p>
    </div>
  </div>
  <p className="text-purple-100 leading-relaxed transform transition-all duration-500 hover:text-pink-200">
    Nurturing minds, shaping futures. Where academic excellence meets holistic development in a supportive learning environment.
  </p>
  <div className="flex space-x-4">
    <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:bg-gradient-to-br hover:from-pink-400 hover:to-cyan-400 cursor-pointer shadow-lg hover:shadow-2xl"
      style={{ animation: "float 3s ease-in-out infinite" }}>
      <a href="https://www.facebook.com/profile.php?id=61577925926344" target='_blank'><Facebook className="w-5 h-5 transition-colors duration-300" /></a>
    </div>
    <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:bg-gradient-to-br hover:from-pink-400 hover:to-cyan-400 cursor-pointer shadow-lg hover:shadow-2xl"
      style={{ animation: "float 3.5s ease-in-out infinite" }}>
     <a href="https://www.instagram.com/rishigalavschool5?igsh=MXY5eHB3dnN6a2p6Yg=="  target='_blank'> <Instagram className="w-5 h-5 transition-colors duration-300" /></a>
    </div>
    <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:bg-gradient-to-br hover:from-pink-400 hover:to-cyan-400 cursor-pointer shadow-lg hover:shadow-2xl"
      style={{ animation: "float 4s ease-in-out infinite" }}>
     <a href="https://youtube.com/@rishigalavschool?si=O5ae4TCANLz6I5Aj" target='_blank'> <Youtube className="w-5 h-5 transition-colors duration-300" /></a>
    </div>
  </div>
</div>

           
{/* Quick Links */}
<div className="space-y-6">
  <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 transform transition-all duration-500 hover:scale-110">
    Quick Links
  </h4>
  <ul className="space-y-3">
       <li>
      <Link to="/" className="block text-purple-100 hover:text-pink-400 transition-all duration-500 transform hover:translate-x-4 hover:scale-110 relative group">
        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
        Home
      </Link>
    </li>
    

    <li>
      <Link to="/Rbse" className="block text-purple-100 hover:text-pink-400 transition-all duration-500 transform hover:translate-x-4 hover:scale-110 relative group">
        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
        RBSE
      </Link>
    </li>
    <li>
      <Link to="/Cbse" className="block text-purple-100 hover:text-pink-400 transition-all duration-500 transform hover:translate-x-4 hover:scale-110 relative group">
        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
        CBSE
      </Link>
    </li>
    <li>
      <Link to="/Career" className="block text-purple-100 hover:text-pink-400 transition-all duration-500 transform hover:translate-x-4 hover:scale-110 relative group">
        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
        CAREER
      </Link>
    </li>
    <li>
      <Link to="/about" className="block text-purple-100 hover:text-pink-400 transition-all duration-500 transform hover:translate-x-4 hover:scale-110 relative group">
        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
        About Us
      </Link>
    </li>
    <li>
      <Link to="/Contact" className="block text-purple-100 hover:text-pink-400 transition-all duration-500 transform hover:translate-x-4 hover:scale-110 relative group">
        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
        CONTACT US
      </Link>
    </li>
    
  </ul>
</div>


              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 transform transition-all duration-500 hover:scale-110">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-full flex items-center justify-center mt-1 animate-pulse">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-purple-100 hover:text-pink-300 transition-colors duration-300">PV8V+7PV, Leela Vihar Colony, Dholpur, Doon Ka Pura, Rajasthan 328001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-purple-100 hover:text-pink-300 transition-colors duration-300">+91-9414053848</p>
                  </div>
                  <div className="flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-purple-100 hover:text-pink-300 transition-colors duration-300">rgcs2013@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Mon-Fri: 8:00 AM - 4:00 PM</p>
                
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 transform transition-all duration-500 hover:scale-110">Our Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 transform transition-all duration-700 hover:scale-110">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white transform transition-all duration-500">
                        {animatedStats.students.toLocaleString()}+
                      </p>
                      <p className="text-purple-200">Students</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 transform transition-all duration-700 hover:scale-110">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white transform transition-all duration-500">
                        {animatedStats.awards}+
                      </p>
                      <p className="text-purple-200">Awards</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 transform transition-all duration-700 hover:scale-110">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white transform transition-all duration-500">
                        {animatedStats.successRate}%
                      </p>
                      <p className="text-purple-200">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-400 via-purple-400 via-cyan-400 to-transparent mb-8 animate-pulse"></div>
          </div>

          {/* Bottom Section */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-purple-200 transform transition-all duration-500 hover:text-pink-300">
                  © 2025 Rishi Galav School. All rights reserved by <a href="https://grosineinfotech.com/"
                  target='_blank'>Grosine Infotech</a>.
                </p>
                <p className="text-purple-300 text-sm mt-1 transform transition-all duration-500 hover:text-cyan-300">
                  Empowering minds, building futures since 2010
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute bottom-4 right-4 animate-float">
        <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      </div>
      <div className="absolute bottom-8 right-12 animate-float-delayed">
        <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-40 animate-pulse"></div>
      </div>
      <div className="absolute bottom-16 right-8 animate-float-slow">
        <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default ModernSchoolFooter;