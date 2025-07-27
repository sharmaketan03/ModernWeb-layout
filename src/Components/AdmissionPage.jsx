import React, { useState, useEffect } from 'react';

const AdmissionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 text-center py-20 px-5">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            ADMISSION OPEN
          </h1>
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl mb-4">for the session</p>
            <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
            <p className="text-3xl md:text-4xl font-bold text-yellow-400">2025-26</p>
          </div>
          
          {/* Floating admission badge */}
          <div className={`mt-8 flex justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping opacity-20"></div>
                <span className="text-gray-900 font-bold text-lg z-10">Join Us!</span>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process Steps */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            ADMISSION PROCESS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 ">
            {[
              { step: '01', title: 'ENQUIRY', desc: 'Visit our campus or call us for detailed information about admission', icon: '📞' },
              { step: '02', title: 'APPLICATION', desc: 'Collect and fill the admission form with all required details', icon: '📝' },
              { step: '03', title: 'INTERVIEW & TEST', desc: 'Attend interaction session and assessment test', icon: '🎯' },
              { step: '04', title: 'CONFIRMATION', desc: 'Fee payment and admission confirmation', icon: '✅' }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl md:px-1 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl relative">
                  <span>{item.step}</span>
                  <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-pulse opacity-30"></div>
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            WHY CHOOSE Rishi Galav School
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'ACADEMIC EXCELLENCE', 
                desc: 'Proven track record of outstanding academic results and competitive exam success',
                icon: '🏆',
                color: 'from-blue-600 to-blue-800'
              },
              { 
                title: 'HOLISTIC DEVELOPMENT', 
                desc: 'Focus on overall personality development through academics, sports, and arts',
                icon: '🌟',
                color: 'from-green-600 to-green-800'
              },
              { 
                title: 'EXPERIENCED FACULTY', 
                desc: 'Highly qualified and experienced teachers dedicated to student success',
                icon: '👨‍🏫',
                color: 'from-purple-600 to-purple-800'
              },
              { 
                title: 'MODERN INFRASTRUCTURE', 
                desc: 'State-of-the-art facilities including smart classrooms and laboratories',
                icon: '🏫',
                color: 'from-orange-600 to-orange-800'
              },
              { 
                title: 'EXTRACURRICULAR ACTIVITIES', 
                desc: 'Wide range of sports, cultural activities, and clubs for all-round growth',
                icon: '🎨',
                color: 'from-pink-600 to-pink-800'
              },
              { 
                title: 'VALUE-BASED EDUCATION', 
                desc: 'Emphasis on moral values, ethics, and character building',
                icon: '💎',
                color: 'from-teal-600 to-teal-800'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-l-4 border-blue-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-2xl relative`}>
                  <span>{feature.icon}</span>
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admission Criteria */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            ADMISSION CRITERIA
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="relative z-10 space-y-8">
              {[
                {
                  class: 'NURSERY TO UKG',
                  age: 'Age: 3-5 years',
                  criteria: 'No formal assessment. Parent interaction and basic interaction with child.',
                  icon: '🧸'
                },
                {
                  class: 'CLASS I TO V',
                  age: 'Age: 6-10 years',
                  criteria: 'Basic assessment of reading, writing, and communication skills.',
                  icon: '📚'
                },
                {
                  class: 'CLASS VI TO VIII',
                  age: 'Age: 11-13 years',
                  criteria: 'Written test and interview covering English, Mathematics, and General Knowledge.',
                  icon: '✏️'
                },
                {
                  class: 'CLASS IX & X',
                  age: 'Age: 14-15 years',
                  criteria: 'Comprehensive test in core subjects and previous academic records review.',
                  icon: '📖'
                },
                {
                  class: 'CLASS XI & XII',
                  age: 'Age: 16-17 years',
                  criteria: 'Merit-based admission based on Class X results and entrance test.',
                  icon: '🎓'
                }
              ].map((criteria, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transform transition-all duration-500 hover:scale-102 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl">{criteria.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{criteria.class}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{criteria.age}</p>
                    <p className="text-gray-600 leading-relaxed">{criteria.criteria}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            REQUIRED DOCUMENTS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Birth Certificate', desc: 'Original & photocopy of birth certificate', icon: '📜' },
              { title: 'Address Proof', desc: 'Aadhar card, voter ID or utility bill', icon: '🏠' },
              { title: 'Photographs', desc: 'Recent passport size photographs (4 copies)', icon: '📸' },
              { title: 'Transfer Certificate', desc: 'TC from previous school (if applicable)', icon: '📋' },
              { title: 'Report Card', desc: 'Previous year\'s academic report', icon: '📊' },
              { title: 'Caste Certificate', desc: 'For SC/ST/OBC category (if applicable)', icon: '📄' }
            ].map((doc, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 text-center">{doc.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{doc.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            FEE STRUCTURE 2025-26
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-bold text-lg">CLASS</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">ADMISSION FEE</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">MONTHLY FEE</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">ANNUAL FEE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { class: 'Nursery - UKG', admission: '₹5,000', monthly: '₹2,500', annual: '₹30,000' },
                    { class: 'Class I - V', admission: '₹7,000', monthly: '₹3,000', annual: '₹36,000' },
                    { class: 'Class VI - VIII', admission: '₹8,000', monthly: '₹3,500', annual: '₹42,000' },
                    { class: 'Class IX - X', admission: '₹10,000', monthly: '₹4,000', annual: '₹48,000' },
                    { class: 'Class XI - XII', admission: '₹12,000', monthly: '₹4,500', annual: '₹54,000' }
                  ].map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-8 py-6 font-semibold text-gray-900">{fee.class}</td>
                      <td className="px-8 py-6 text-gray-700">{fee.admission}</td>
                      <td className="px-8 py-6 text-gray-700">{fee.monthly}</td>
                      <td className="px-8 py-6 text-gray-700 font-semibold">{fee.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-8 py-6">
              <p className="text-gray-600 text-center">
                * Additional charges may apply for transport, books, and uniform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            IMPORTANT DATES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'ADMISSION FORMS AVAILABLE',
                date: 'January 15, 2025',
                desc: 'Admission forms will be available at school office and online',
                icon: '📅',
                color: 'from-green-600 to-green-800'
              },
              {
                title: 'LAST DATE FOR SUBMISSION',
                date: 'March 31, 2025',
                desc: 'Last date to submit completed admission forms',
                icon: '⏰',
                color: 'from-red-600 to-red-800'
              },
              {
                title: 'ENTRANCE TEST & INTERVIEW',
                date: 'April 5-15, 2025',
                desc: 'Assessment tests and interviews will be conducted',
                icon: '📝',
                color: 'from-blue-600 to-blue-800'
              },
              {
                title: 'ADMISSION RESULT',
                date: 'April 20, 2025',
                desc: 'Results will be announced and published on website',
                icon: '🎉',
                color: 'from-purple-600 to-purple-800'
              }
            ].map((date, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${date.color} rounded-full flex items-center justify-center text-2xl`}>
                  <span>{date.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{date.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-3">{date.date}</p>
                <p className="text-gray-600 leading-relaxed">{date.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-14 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-2xl flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-3xl animate-pulse">
          <span className="text-2xl">📞</span>
        </button>
      </div>
    </div>
  );
};

export default AdmissionPage;