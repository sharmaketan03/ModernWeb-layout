import React from 'react';
import Rbsesect from "../assets/rishi8.jpg"
import '../App.css'
const Rbse = () => {
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
      `}</style>
      
      {/* Hero Banner */}
      <div className="bg-orange-600 text-white text-center py-20 px-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          BEST RBSE SCHOOL IN DHOLPUR
        </h1>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto py-8 px-5">
        <p className="mb-6 text-lg">
          Are you looking for a top-quality <span className="text-blue-600 font-bold">RBSE School</span> in Dholpur for your child? Look no further—Rishi Galav School Dholpur offers the perfect environment for holistic development, academic excellence, and moral growth. Our mission is to foster curious minds and confident personalities in a nurturing and disciplined atmosphere.
        </p>

        <p className="mb-6 text-lg">
          Rishi Galav School, located in the heart of Dholpur, Rajasthan, is a well-regarded institution affiliated with RBSE (Rajasthan Board of Secondary Education). With a student-first approach, our curriculum integrates academics, sports, and extracurricular activities to ensure all-round development. From elocution, debates, spelling bees, and art to team sports such as cricket, football, and basketball—we provide abundant opportunities for every child to shine.
        </p>

        <p className="mb-6 text-lg">
          Our school is widely recognized for its dedication to academic success and value-based education. As one of the most trusted RBSE schools in Dholpur, we take pride in offering a safe, structured, and encouraging environment where students can grow to their full potential. If you're searching for the <span className="text-blue-600 font-bold">best RBSE school in Dholpur</span>, Rishi Galav School is your destination.
        </p>

        <p className="mb-6 text-lg">
          To learn more or to enroll your child, visit us at our Dholpur campus or contact us today. Rishi Galav School — where education meets excellence.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto py-8 px-5">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">
          Benefits of Joining Rishi Galav School Dholpur
        </h2>
        
        <div className="mb-10">
          <p className="mb-6 text-lg">
            At Rishi Galav School Dholpur, we nurture academic brilliance while also encouraging moral values and real-world skills. Our students are constantly motivated to think critically, explore creatively, and grow confidently. We take immense pride in our lush green campus, well-maintained classrooms, and healthy cafeteria — creating a vibrant learning space for every child.
          </p>
          <p className="mb-6 text-lg">
            Recognized as one of the <span className="text-blue-600 font-bold">top RBSE English medium schools in Dholpur</span>, Rishi Galav School provides a holistic environment for academic and personal development. Our students participate in debates, cultural programs, and team sports that build leadership and resilience. The physical, mental, and emotional well-being of every child is at the heart of everything we do.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
         <div className="w-full lg:w-2/5 sm:w-full">
             <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 sm:w-full">
               
               {/* Image */}
               <img
                 src={Rbsesect}
                 alt="School Group"
                 className="w-full h-full object-cover absolute inset-0 z-0"
               />
         
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                
               {/* Text Content */}
               <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                 <div className="w-20 h-20 mb-4 bg-white rounded-full flex items-center justify-center animate-bounce">
                   <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <span className="font-semibold animate-pulse">School Group Photo</span>
               </div>
             </div>
           </div>
          <div className="flex-1 lg:w-3/5">
            <h2 className="text-3xl text-blue-600 font-bold mb-4">About Rishi Galav School</h2>
            <p className="mb-4 text-lg">
              Rishi Galav School Dholpur is a leading educational institution that combines academic excellence with strong ethical values. Our aim is to cultivate responsible citizens who are confident, kind, and capable of shaping the future. We believe in fostering a spirit of inquiry, discipline, and patriotism in our students.
            </p>
            <p className="text-lg">
              As one of the <span className="text-blue-600 font-bold">best RBSE schools in Rajasthan</span>, we offer a unique learning journey that blends traditional wisdom with modern tools. With an emphasis on experiential learning, entrepreneurship, and innovation, our students go on to excel in academics and life.
            </p>
          </div>
        </div>
      </div>

      {/* RBSE Curriculum Features */}
      <div className="py-12 bg-blue-50">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">
          RBSE Curriculum Features
        </h2>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Rajasthan State Board</h3>
              <p className="text-gray-700">RBSE curriculum is specifically designed for students of Rajasthan, focusing on regional culture, heritage, and local context.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Hindi Medium Excellence</h3>
              <p className="text-gray-700">Strong foundation in Hindi language with English as a second language, ensuring students excel in both regional and global contexts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Cultural Values</h3>
              <p className="text-gray-700">Emphasis on Indian culture, traditions, and values while providing modern education and scientific temperament.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Affordable Education</h3>
              <p className="text-gray-700">Quality education at affordable fees, making excellent education accessible to all sections of society.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">State University Preparation</h3>
              <p className="text-gray-700">Excellent preparation for Rajasthan state universities and competitive exams like RPSC, RAS, and other state-level examinations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Practical Learning</h3>
              <p className="text-gray-700">Focus on practical knowledge, vocational skills, and hands-on learning experiences relevant to local industries.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <div className="py-12 bg-gray-50">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">
          Our RBSE School Branches
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-5">
          <div className="bg-blue-50 p-6 rounded-lg text-center w-64 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="w-full h-44 bg-gradient-to-br from-green-400 to-blue-500 rounded-md mb-4 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center animate-spin-slow">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <span className="text-white font-semibold">Doon Ka Pura Branch</span>
              </div>
            </div>
            <p className="font-semibold text-lg">Doon Ka Pura, Dholpur</p>
          </div>
          {/* <div className="bg-blue-50 p-6 rounded-lg text-center w-64 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="w-full h-44 bg-gradient-to-br from-purple-400 to-pink-500 rounded-md mb-4 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <span className="text-white font-semibold">Baseri Branch</span>
              </div>
            </div>
            <p className="font-semibold text-lg">Baseri Dholpur</p>
          </div> */}
          {/* <div className="bg-blue-50 p-6 rounded-lg text-center w-64 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="w-full h-44 bg-gradient-to-br from-red-400 to-yellow-500 rounded-md mb-4 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <span className="text-white font-semibold">Rajakhera Branch</span>
              </div>
            </div>
            <p className="font-semibold text-lg">Rajakhera Dholpur</p>
          </div> */}
        </div>
      </div>

      

      {/* Why Best Section */}
      <div className="py-12 bg-gray-50">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">
          Why Rishi Galav School Dholpur Is Best RBSE School
        </h2>
        <div className="max-w-4xl mx-auto px-5">
          <p className="mb-6 text-lg text-justify">
            Rishi Galav School Dholpur is widely recognized for providing top-tier RBSE education in a nurturing and disciplined environment. We combine academic rigor with moral values to ensure holistic growth for every child. Our branches in Nimera, Baseri, and Rajakhera offer students easy access to high-quality RBSE education close to home.
          </p>
          <p className="text-lg text-justify">
            As a top RBSE English Medium School in Dholpur, we focus on character-building, innovation, and leadership through a variety of curricular and extracurricular activities. We are committed to creating an environment where students can thrive intellectually, emotionally, and socially — preparing them to become responsible citizens of tomorrow and excel in state-level examinations and local opportunities.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Rbse;