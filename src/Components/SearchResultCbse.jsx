import React, { useState, useEffect } from 'react';

const SearchResultCbse = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedStream, setSelectedStream] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResultClick = () => {
    let url = '';

    if (selectedClass === '10') {
      url = 'https://cbseresults.nic.in/2025/CBSE10th/CBSE10thLogin?resultType=cbse10';
    } else if (selectedClass === '12') {
      if (selectedStream === 'sci') {
        url = 'https://cbseresults.nic.in/2025/CBSE12th/CBSE12thLogin?resultType=cbse12';
      } else if (selectedStream === 'com') {
        url = 'https://cbseresults.nic.in/2025/CBSE12th/CBSE12thLogin?resultType=cbse12';
      } else if (selectedStream === 'arts') {
        url = 'https://cbseresults.nic.in/2025/CBSE12th/CBSE12thLogin?resultType=cbse12';
      } else {
        alert(' Please select a stream');
        return;
      }
    } else {
      alert('Please select a class');
      return;
    }

    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Individual Result Search */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            CHECK CBSE RESULT
          </h2>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center border-2 border-blue-200">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-full flex items-center justify-center text-white text-3xl">
                📋
              </div>
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">अपना CBSE परिणाम खोजें</h3> */}
              <h4 className="text-xl font-semibold text-gray-700 mb-4">SEARCH YOUR CBSE RESULT</h4>
              <p className="text-gray-600 mb-8"> Select your class to view the result</p>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              {/* Year Dropdown */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition-all duration-300 text-center text-lg font-semibold"
              >
                <option value="2025">2025</option>
                {/* <option value="2024">2024</option>
                <option value="2023">2023</option> */}
              </select>

              {/* Class Dropdown */}
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setSelectedStream('');
                }}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition-all duration-300 text-center text-lg font-semibold"
              >
                <option value="">-- Select Class --</option>
                <option value="10"> Class X</option>
                <option value="12"> Class XII</option>
              </select>

              {/* Stream Dropdown (shown only if Class 12 selected) */}
              {selectedClass === '12' && (
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 outline-none transition-all duration-300 text-center text-lg font-semibold"
                >
                  <option value="">Select Stream </option>
                  <option value="sci"> 12th Science</option>
                  <option value="com"> 12th Commerce</option>
                  <option value="arts"> 12th Arts</option>
                </select>
              )}

              {/* View Result Button */}
              <button
                onClick={handleResultClick}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg"
              >
               VIEW RESULT
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              {/* <p>* CBSE परिणाम वर्तमान और पिछले शैक्षणिक वर्षों के लिए उपलब्ध हैं</p> */}
              <p>* CBSE Results are available for current and previous academic years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CBSE Info Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                🎓
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Class 10th</h3>
              {/* <p className="text-gray-600 text-sm">माध्यमिक परीक्षा परिणाम</p> */}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl">
                📚
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Class 12th</h3>
              {/* <p className="text-gray-600 text-sm">उच्चतर माध्यमिक परीक्षा परिणाम</p> */}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
                ✅
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Access</h3>
              {/* <p className="text-gray-600 text-sm">तुरंत परिणाम देखें</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCbse;