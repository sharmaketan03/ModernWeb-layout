import { Eye, Target, Star, User, Award, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function ModernSchoolContent() {
  const [activeTab, setActiveTab] = useState('perspective');

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fadeInUp-delay-1 {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .animate-fadeInUp-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        .animate-fadeInUp-delay-3 {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
        .animate-fadeInUp-delay-4 {
          animation: fadeInUp 0.8s ease-out 0.8s both;
        }
      `}</style>
    <div className="min-h-screen bg-gray-50 animate-fadeInUp">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 animate-fadeInUp-delay-1">
        <div className="container mx-auto px-4 py-8 flex items-center justify-evenly">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="School Building" 
              className="w-96 h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm animate-fadeInUp-delay-2">
        <div className="container mx-auto px-4">
          <nav className="text-gray-600">
            <span>Home</span>
            <span className="mx-2">></span>
            <span className="text-gray-900">About Us</span>
          </nav>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-100 py-4 animate-fadeInUp-delay-2">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('perspective')}
              className={`px-6 py-2 rounded font-medium transition ${
                activeTab === 'perspective' 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Perspective
            </button>
            <button 
              onClick={() => setActiveTab('management')}
              className={`px-6 py-2 rounded font-medium transition ${
                activeTab === 'management' 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Our Management
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 animate-fadeInUp-delay-3">
        
        {/* Perspective Tab Content */}
        {activeTab === 'perspective' && (
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our commitment is to deliver superior education in a loving environment enabling students to build happy and successful lives. We aim to empower our students to be compassionate, responsive to our glorious culture and heritage, academically excelling, holistic individuals who can usher their responsibilities as the global citizens.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We emphasize on providing value-based education and develop in each student discipline, leadership and self-reliance. It is our deep conviction that education needs to be a joyful experience that facilitates the growth and transformation of young minds at their impressionable age and fortifies them with Knowledge and skills to face the competitive world.
              </p>
            </div>

            {/* Core Values */}
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <p className="text-gray-600 leading-relaxed">
                We stress on instilling a strong value system in each student. This helps them grow into individuals of excellent character who make valuable contribution to the society. Modern School is making a sincere attempt to introduce a new-age education - an Educational Milieu that harmonizes technological advancements and humanistic wisdom with a special focus on{' '}
                <span className="font-semibold">'Human Engineering'</span>
              </p>
            </div>

          </div>
        )}

        {/* Our Management Tab Content */}
        {activeTab === 'management' && (
          <div className="space-y-12">
            {/* Management Team Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Management Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Meet our experienced leadership team committed to providing excellence in education and nurturing future leaders.
              </p>
            </div>

            {/* Management Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Principal */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Dr. Rajesh Kumar" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Dr. Rajesh Kumar</h3>
                    <p className="text-blue-100">Principal</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With over 25 years of experience in education, Dr. Kumar leads our institution with vision and dedication to academic excellence.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Ph.D. Education</span>
                  </div>
                </div>
              </div>

              {/* Vice Principal */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616c9c6b8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Mrs. Priya Sharma" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Mrs. Priya Sharma</h3>
                    <p className="text-green-100">Vice Principal</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    An accomplished educator with expertise in curriculum development and student welfare programs.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">M.Ed</span>
                  </div>
                </div>
              </div>

              {/* Academic Director */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Mr. Amit Gupta" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Mr. Amit Gupta</h3>
                    <p className="text-purple-100">Academic Director</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Specializes in innovative teaching methodologies and technology integration in education.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">M.A. Education</span>
                  </div>
                </div>
              </div>

              {/* Sports Director */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Coach Ravi Singh" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Coach Ravi Singh</h3>
                    <p className="text-orange-100">Sports Director</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Former national athlete with passion for developing sports culture and physical fitness among students.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">B.P.Ed</span>
                  </div>
                </div>
              </div>

              {/* Finance Head */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Mrs. Sunita Agarwal" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Mrs. Sunita Agarwal</h3>
                    <p className="text-red-100">Finance Head</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Chartered Accountant ensuring transparent financial management and resource optimization.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">CA, MBA</span>
                  </div>
                </div>
              </div>

              {/* IT Head */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Mr. Vikash Jain" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Mr. Vikash Jain</h3>
                    <p className="text-indigo-100">IT Head</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Technology expert leading digital transformation and smart classroom initiatives.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">B.Tech, MCA</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Additional School Images Section */}
      <div className="bg-white py-12 animate-fadeInUp-delay-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Students in classroom" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="School library" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="School playground" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition"
            />
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="bg-gray-900 text-white py-12 animate-fadeInUp-delay-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our School Community</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Discover excellence in education with our comprehensive programs designed to nurture young minds and build future leaders.
          </p>
          <div className="space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
              Apply for Admission
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}