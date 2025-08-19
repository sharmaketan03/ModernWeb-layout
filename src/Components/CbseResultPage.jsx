import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';
import SearchResultCbse from './SearchResultCbse';
import '../App.css'
const ResultsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedClass, setSelectedClass] = useState('10');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample results data
  const results2024 = {
    class10: {
      totalStudents: 120,
      passed: 118,
      distinction: 45,
      firstClass: 58,
      secondClass: 15,
      passPercentage: 98.3,
      toppers: [
        { name: 'Arjun Sharma', percentage: 96.8, subjects: 'Science' },
        { name: 'Priya Gupta', percentage: 95.4, subjects: 'Commerce' },
        { name: 'Rohit Kumar', percentage: 94.2, subjects: 'Science' }
      ]
    },
    class12: {
      totalStudents: 95,
      passed: 94,
      distinction: 38,
      firstClass: 42,
      secondClass: 14,
      passPercentage: 98.9,
      toppers: [
        { name: 'Kavya Singh', percentage: 97.2, subjects: 'Science' },
        { name: 'Aditya Jain', percentage: 96.1, subjects: 'Commerce' },
        { name: 'Sneha Patel', percentage: 95.8, subjects: 'Arts' }
      ]
    }
  };

  const currentResults = results2024[`class${selectedClass}`];

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
            EXAMINATION RESULTS
          </h1>
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl mb-4">Academic Excellence</p>
            <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
            <p className="text-3xl md:text-4xl font-bold text-yellow-400">SESSION 2023-24</p>
          </div>
          
          {/* Achievement badge */}
          <div className={`mt-8 flex justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping opacity-20"></div>
                <div className="text-center z-10">
                  <div className="text-gray-900 font-bold text-sm">98%+</div>
                  <div className="text-gray-900 font-bold text-xs">SUCCESS</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Result Filters */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            SELECT RESULTS
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <label className="block text-gray-700 font-bold mb-3">Academic Year</label>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
              >
                <option value="2024">2023-24</option>
                <option value="2023">2022-23</option>
                <option value="2022">2021-22</option>
              </select>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <label className="block text-gray-700 font-bold mb-3">Class</label>
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
              >
                <option value="10">Class X (CBSE Board)</option>
                <option value="12">Class XII (CBSE Board)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            CLASS {selectedClass} RESULTS OVERVIEW
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'TOTAL STUDENTS', 
                value: currentResults.totalStudents, 
                icon: '👥',
                color: 'from-blue-600 to-blue-800',
                bgColor: 'bg-blue-50'
              },
              { 
                title: 'STUDENTS PASSED', 
                value: currentResults.passed, 
                icon: '✅',
                color: 'from-green-600 to-green-800',
                bgColor: 'bg-green-50'
              },
              { 
                title: 'PASS PERCENTAGE', 
                value: `${currentResults.passPercentage}%`, 
                icon: '📊',
                color: 'from-orange-600 to-orange-800',
                bgColor: 'bg-orange-50'
              },
              { 
                title: 'DISTINCTION', 
                value: currentResults.distinction, 
                icon: '🏆',
                color: 'from-purple-600 to-purple-800',
                bgColor: 'bg-purple-50'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`${stat.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-2xl text-white relative`}>
                  <span>{stat.icon}</span>
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900 text-center">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            GRADE DISTRIBUTION
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="relative z-10 space-y-6">
              {[
                { 
                  grade: 'DISTINCTION (75% & Above)', 
                  count: currentResults.distinction, 
                  percentage: ((currentResults.distinction / currentResults.totalStudents) * 100).toFixed(1),
                  color: 'bg-gradient-to-r from-purple-500 to-purple-600',
                  icon: '🥇'
                },
                { 
                  grade: 'FIRST CLASS (60% - 74%)', 
                  count: currentResults.firstClass, 
                  percentage: ((currentResults.firstClass / currentResults.totalStudents) * 100).toFixed(1),
                  color: 'bg-gradient-to-r from-blue-500 to-blue-600',
                  icon: '🥈'
                },
                { 
                  grade: 'SECOND CLASS (45% - 59%)', 
                  count: currentResults.secondClass, 
                  percentage: ((currentResults.secondClass / currentResults.totalStudents) * 100).toFixed(1),
                  color: 'bg-gradient-to-r from-green-500 to-green-600',
                  icon: '🥉'
                }
              ].map((grade, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-6 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transform transition-all duration-500 hover:scale-102 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl">{grade.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{grade.grade}</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 bg-gray-300 rounded-full h-4 overflow-hidden">
                        <div 
                          className={`${grade.color} h-full rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${grade.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{grade.count}</p>
                        <p className="text-sm text-gray-600">{grade.percentage}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            TOP PERFORMERS - CLASS {selectedClass}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentResults.toppers.map((topper, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Rank badge */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 ${
                  index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                  index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                  'bg-gradient-to-br from-orange-400 to-orange-600'
                } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {index + 1}
                </div>
                
                {/* Student avatar */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold relative">
                  {topper.name.charAt(0)}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-pulse opacity-30"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{topper.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2 text-center">{topper.percentage}%</p>
                <p className="text-gray-600 text-center">{topper.subjects} Stream</p>
                
                {/* Achievement badge */}
                {index === 0 && (
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      🏆 SCHOOL TOPPER
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Previous Year Comparisons */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            YEAR-ON-YEAR PERFORMANCE
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-bold text-lg">ACADEMIC YEAR</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">CLASS X PASS %</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">CLASS XII PASS %</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">DISTINCTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { year: '2023-24', class10: '98.3%', class12: '98.9%', distinction: '83', trend: 'up' },
                    { year: '2022-23', class10: '97.8%', class12: '98.1%', distinction: '78', trend: 'up' },
                    { year: '2021-22', class10: '96.5%', class12: '97.2%', distinction: '72', trend: 'up' },
                    { year: '2020-21', class10: '95.8%', class12: '96.8%', distinction: '65', trend: 'up' }
                  ].map((year, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-8 py-6 font-semibold text-gray-900">{year.year}</td>
                      <td className="px-8 py-6 text-gray-700 font-semibold">{year.class10}</td>
                      <td className="px-8 py-6 text-gray-700 font-semibold">{year.class12}</td>
                      <td className="px-8 py-6 text-gray-700">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{year.distinction}</span>
                          <span className="text-green-600">📈</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Result Search */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            CHECK INDIVIDUAL RESULT
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-3xl">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEARCH YOUR RESULT</h3>
              <p className="text-gray-600 mb-8">Enter your roll number to view detailed result</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-6">
              <input
                type="text"
                placeholder="Enter Roll Number"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-center text-lg font-semibold"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg">
                VIEW RESULT
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-600">
              <p>* Results are available for current and previous academic years</p>
            </div>
          </div>
        </div>
      </div> */}

     <SearchResultCbse/>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-2xl flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-3xl animate-pulse">
          <span className="text-2xl">📊</span>
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;