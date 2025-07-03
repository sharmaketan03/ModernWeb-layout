import React, { useState } from 'react';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    qualification: '',
    subjects: '',
    currentSalary: '',
    expectedSalary: '',
    address: '',
    coverLetter: '',
    availability: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'RBSE English Teacher',
      department: 'Academic',
      location: 'Dholpur, Rajasthan',
      type: 'Full-time',
      experience: '2-5 years',
      qualification: 'B.Ed with English Honours',
      description: 'We are looking for an experienced English teacher for RBSE curriculum. The candidate should have strong communication skills and experience in teaching English to students from classes 6-12.',
      responsibilities: [
        'Teach English as per RBSE curriculum',
        'Prepare lesson plans and teaching materials',
        'Conduct regular assessments and provide feedback',
        'Participate in school events and activities',
        'Maintain discipline in classroom'
      ],
      requirements: [
        'B.Ed with English Honours or equivalent',
        'Minimum 2 years teaching experience',
        'Strong command over English language',
        'Knowledge of RBSE curriculum',
        'Good communication and interpersonal skills'
      ]
    },
    {
      id: 2,
      title: 'Mathematics Teacher (RBSE)',
      department: 'Academic',
      location: 'Dholpur, Rajasthan',
      type: 'Full-time',
      experience: '3-7 years',
      qualification: 'M.Sc Mathematics + B.Ed',
      description: 'Seeking a passionate Mathematics teacher for RBSE board classes. The ideal candidate should have strong problem-solving skills and ability to make mathematics interesting for students.',
      responsibilities: [
        'Teach Mathematics for classes 6-12',
        'Develop innovative teaching methods',
        'Prepare students for board examinations',
        'Conduct extra classes for weak students',
        'Organize math competitions and activities'
      ],
      requirements: [
        'M.Sc Mathematics with B.Ed',
        'Minimum 3 years teaching experience',
        'Strong mathematical concepts',
        'RBSE curriculum knowledge',
        'Patience and dedication'
      ]
    },
    {
      id: 3,
      title: 'Science Teacher (Physics/Chemistry)',
      department: 'Academic',
      location: 'Dholpur, Rajasthan',
      type: 'Full-time',
      experience: '2-6 years',
      qualification: 'M.Sc + B.Ed',
      description: 'Looking for a qualified Science teacher specializing in Physics and Chemistry for RBSE classes. Should have practical knowledge and laboratory experience.',
      responsibilities: [
        'Teach Physics and Chemistry',
        'Conduct laboratory experiments',
        'Prepare practical examination schedules',
        'Maintain laboratory equipment',
        'Guide students in science projects'
      ],
      requirements: [
        'M.Sc in Physics/Chemistry with B.Ed',
        'Laboratory experience mandatory',
        'RBSE curriculum expertise',
        'Strong practical knowledge',
        'Safety awareness in lab'
      ]
    },
    {
      id: 4,
      title: 'Hindi Teacher',
      department: 'Academic',
      location: 'Dholpur, Rajasthan',
      type: 'Full-time',
      experience: '2-5 years',
      qualification: 'M.A Hindi + B.Ed',
      description: 'We need an experienced Hindi teacher for RBSE curriculum. The candidate should have excellent knowledge of Hindi literature and grammar.',
      responsibilities: [
        'Teach Hindi language and literature',
        'Develop reading and writing skills',
        'Organize Hindi literary activities',
        'Prepare students for competitions',
        'Promote Hindi culture and values'
      ],
      requirements: [
        'M.A Hindi with B.Ed',
        'Excellent Hindi language skills',
        'RBSE curriculum knowledge',
        'Cultural awareness',
        'Good presentation skills'
      ]
    },
    {
      id: 5,
      title: 'Primary Teacher',
      department: 'Primary Education',
      location: 'Dholpur, Rajasthan',
      type: 'Full-time',
      experience: '1-4 years',
      qualification: 'B.Ed with Primary Education',
      description: 'Seeking a caring and patient primary teacher for classes 1-5. Should have experience in child psychology and modern teaching methods.',
      responsibilities: [
        'Teach all subjects to primary classes',
        'Create engaging learning activities',
        'Monitor child development',
        'Communicate with parents regularly',
        'Organize creative activities'
      ],
      requirements: [
        'B.Ed with Primary Education specialization',
        'Child psychology knowledge',
        'Creative teaching methods',
        'Patience and care for children',
        'Good communication with parents'
      ]
    },
    {
      id: 6,
      title: 'Sports Teacher',
      department: 'Physical Education',
      location: 'Dholpur, Rajasthan',
      type: 'Full-time',
      experience: '2-5 years',
      qualification: 'B.P.Ed or M.P.Ed',
      description: 'Looking for an energetic Sports teacher to promote physical fitness and sports activities. Should have experience in multiple sports and games.',
      responsibilities: [
        'Conduct physical education classes',
        'Train students in various sports',
        'Organize sports competitions',
        'Maintain sports equipment',
        'Promote physical fitness'
      ],
      requirements: [
        'B.P.Ed or M.P.Ed degree',
        'Experience in multiple sports',
        'First aid knowledge',
        'Leadership qualities',
        'Energetic and enthusiastic'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      qualification: '',
      subjects: '',
      currentSalary: '',
      expectedSalary: '',
      address: '',
      coverLetter: '',
      availability: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans leading-relaxed">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center py-20 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-float">
            JOIN OUR TEAM
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Shape Young Minds, Build Bright Futures
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Be part of Rishi Galav School's mission to provide quality RBSE education and make a difference in students' lives
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Why Choose Rishi Galav School?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Professional Growth",
                description: "Continuous learning opportunities, workshops, and career advancement programs for all faculty members."
              },
              {
                icon: "💰",
                title: "Competitive Salary",
                description: "Attractive salary packages with timely increments and performance-based incentives."
              },
              {
                icon: "🏥",
                title: "Health Benefits",
                description: "Comprehensive health insurance coverage for employees and their families."
              },
              {
                icon: "👥",
                title: "Supportive Environment",
                description: "Collaborative work culture with supportive management and experienced colleagues."
              },
              {
                icon: "🌟",
                title: "Recognition",
                description: "Regular appreciation and recognition programs for outstanding performance and dedication."
              },
              {
                icon: "⚖️",
                title: "Work-Life Balance",
                description: "Flexible working hours, holidays as per academic calendar, and family-friendly policies."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Job Openings */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Current Job Openings</h2>
          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                  
                  <div className="text-gray-600 mb-4">
                    <p className="mb-2"><strong>Location:</strong> {job.location}</p>
                    <p><strong>Qualification:</strong> {job.qualification}</p>
                  </div>
                  
                  <p className="text-gray-700">{job.description}</p>
                  
                  {selectedJob === job.id && (
                    <div className="mt-6 border-t pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-3">Responsibilities:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-3">Requirements:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Apply for a Position</h2>
            <p className="text-xl text-blue-100">Submit your application to join our dedicated team of educators</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Full Name *</div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Email Address *</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Phone Number *</div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter 10-digit phone number"
                  />
                </div>
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Position Applied For *</div>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Position</option>
                    <option value="RBSE English Teacher">RBSE English Teacher</option>
                    <option value="Mathematics Teacher">Mathematics Teacher</option>
                    <option value="Science Teacher">Science Teacher</option>
                    <option value="Hindi Teacher">Hindi Teacher</option>
                    <option value="Primary Teacher">Primary Teacher</option>
                    <option value="Sports Teacher">Sports Teacher</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Years of Experience *</div>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Highest Qualification *</div>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., B.Ed, M.A, M.Sc, etc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Subjects You Can Teach</div>
                  <input
                    type="text"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., English, Mathematics, Science"
                  />
                </div>
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Current Salary (Optional)</div>
                  <input
                    type="text"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Current salary per month"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Expected Salary *</div>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Expected salary per month"
                  />
                </div>
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">Availability *</div>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Availability</option>
                    <option value="Immediate">Immediate</option>
                    <option value="Within 15 days">Within 15 days</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 2 months">Within 2 months</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="block text-gray-700 font-semibold mb-2">Complete Address *</div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your complete address"
                />
              </div>

              <div>
                <div className="block text-gray-700 font-semibold mb-2">Cover Letter / Why You Want to Join Us?</div>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about yourself, your teaching philosophy, and why you want to join Rishi Galav School..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact HR Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Contact HR Department</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 XXXXX XXXXX</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">careers@rishigalavschool.com</p>
              <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">Rishi Galav School</p>
              <p className="text-gray-600">Dholpur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;