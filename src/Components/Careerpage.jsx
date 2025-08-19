import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, BookOpen, Award, Heart } from 'lucide-react';

const CareerPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: 'Mathematics Teacher',
      department: 'Academic',
      type: 'Full Time',
      experience: '2-5 Years',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Science Teacher',
      department: 'Academic', 
      type: 'Full Time',
      experience: '3-6 Years',
      icon: Award
    },
    {
      id: 3,
      title: 'Student Counselor',
      department: 'Student Affairs',
      type: 'Full Time', 
      experience: '2-4 Years',
      icon: Heart
    },
    {
      id: 4,
      title: 'Sports Coordinator',
      department: 'Co-curricular',
      type: 'Full Time',
      experience: '1-3 Years', 
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Background decorative elements matching your theme */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        {/* Header section matching your homepage exactly */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 py-20 px-8 relative overflow-hidden">
          {/* Background decorations like your homepage */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full animate-bounce"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              JOIN OUR TEAM
            </h2>
            <h3 className={`text-3xl lg:text-4xl font-bold text-white mb-8 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              SHAPE THE FUTURE
            </h3>
            
            <p className={`text-white/90 text-lg mb-12 leading-relaxed transform transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              Be part of an educational community dedicated to excellence, innovation, and nurturing young minds for tomorrow's challenges.
            </p>

            {/* Your signature circular element */}
            <div className={`flex justify-center transform transition-all duration-1000 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-8 opacity-0 rotate-12'
            }`}>
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex flex-col items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3 relative">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping opacity-20"></div>
                
                <div className="text-center z-10">
                  <p className="text-lg font-bold text-gray-900 mb-2">Career</p>
                  <p className="text-sm text-gray-800 mb-2">Opportunities</p>
                  <div className="w-12 h-0.5 bg-gray-900 mx-auto mb-2"></div>
                  <p className="text-2xl font-bold text-gray-900">AVAILABLE</p>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Career section with white background like your homepage */}
        <div className="bg-white py-20 px-8">
          <div className="container mx-auto">
            {/* Why Join Us Section */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-3xl font-bold text-blue-900 mb-8">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Excellence</h4>
                  <p className="text-gray-600">Commitment to educational excellence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Community</h4>
                  <p className="text-gray-600">Supportive work environment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Impact</h4>
                  <p className="text-gray-600">Make a difference in students' lives</p>
                </div>
              </div>
            </div>

            {/* Job Openings */}
            <div className="max-w-4xl mx-auto">
              <h3 className={`text-3xl font-bold text-blue-900 text-center mb-12 transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                Current Openings
              </h3>

              <div className="space-y-6">
                {jobOpenings.map((job, index) => {
                  const IconComponent = job.icon;
                  return (
                    <div
                      key={job.id}
                      className={`group bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-102 cursor-pointer ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="text-white" size={20} />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                              {job.title}
                            </h4>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                {job.department}
                              </span>
                              <span>{job.type}</span>
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="text-blue-600 group-hover:text-blue-800 group-hover:translate-x-2 transition-all duration-300" size={24} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Apply Section */}
              <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                  <p className="mb-6 opacity-90">Send us your resume and join our mission of educational excellence</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Apply Now
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button - like your homepage */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-blue-700 hover:to-blue-800 animate-pulse">
          <Users size={20} />
        </button>
      </div>
    </div>
  );
};

export default CareerPage   ;