import React, { useState, useEffect } from 'react';

const SearchResult = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedStream, setSelectedStream] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResultClick = () => {
    let url = '';

    if (selectedClass === '10') {
      url = 'https://rajasthan-10th-result.indiaresults.com/rj/bser/class-10-result-2025/query.htm';
    } else if (selectedClass === '12') {
      if (selectedStream === 'sci') {
        url = 'https://rj-12-science-result.indiaresults.com/rj/bser/class-12-science-result-2025/query.htm';
      } else if (selectedStream === 'com') {
        url = 'https://rj-12-commerce-result.indiaresults.com/rj/bser/class-12-commerce-result-2025/query.htm';
      } else if (selectedStream === 'arts') {
        url = 'https://rj-12-arts-result.indiaresults.com/rj/bser/class-12-arts-result-2025/query.htm';
      } else {
        alert('कृपया स्ट्रीम चुनें | Please select a stream');
        return;
      }
    } else {
      alert('कृपया कक्षा चुनें | Please select a class');
      return;
    }

    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Individual Result Search */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            व्यक्तिगत परिणाम देखें | CHECK INDIVIDUAL RESULT
          </h2>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center border-2 border-blue-200">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-600 to-red-800 rounded-full flex items-center justify-center text-white text-3xl">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">अपना परिणाम खोजें</h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">SEARCH YOUR RESULT</h4>
              <p className="text-gray-600 mb-8">कक्षा चुनें और परिणाम देखें | Select your class to view the result</p>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              {/* Class Dropdown */}
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setSelectedStream('');
                }}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 outline-none transition-all duration-300 text-center text-lg font-semibold"
              >
                <option value="">-- कक्षा चुनें | Select Class --</option>
                <option value="10">कक्षा 10वीं | Class X</option>
                <option value="12">कक्षा 12वीं | Class XII</option>
              </select>

              {/* Stream Dropdown (shown only if Class 12 selected) */}
              {selectedClass === '12' && (
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition-all duration-300 text-center text-lg font-semibold"
                >
                  <option value="">-- स्ट्रीम चुनें | Select Stream --</option>
                  <option value="sci">12वीं विज्ञान | 12th Science</option>
                  <option value="com">12वीं वाणिज्य | 12th Commerce</option>
                  <option value="arts">12वीं कला | 12th Arts</option>
                </select>
              )}

              {/* View Result Button */}
              <button
                onClick={handleResultClick}
                className="w-full bg-gradient-to-r from-orange-600 to-red-800 text-white py-4 rounded-2xl font-bold text-lg hover:from-orange-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg"
              >
                परिणाम देखें | VIEW RESULT
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p>* परिणाम वर्तमान और पिछले शैक्षणिक वर्षों के लिए उपलब्ध हैं</p>
              <p>* Results are available for current and previous academic years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;