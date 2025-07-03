import { Eye, Target, Star, User, Award, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";
import Director from "../assets/Director.jpeg"
import principal from "../assets/Principal.jpeg"
// import DeepakImg from "../assets/deepak.jpg";
// import VaibhavImg from "../assets/vaibhav.jpg";
// import KavitaImg from "../assets/kavita.jpg";


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
          
// Paste inside your JSX render return or page body:
<div className="px-4 py-12 max-w-6xl mx-auto space-y-12">

 

  {/* 2. Mr. Pankaj Tyagi (reversed) */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="bg-white shadow-md rounded-lg flex flex-col md:flex-row-reverse overflow-hidden"
  >
    <div className="w-full md:w-1/3 h-64 md:h-auto">
      <img src={Director} alt="Mr. Vaibhav Singh" className="w-full h-full object-cover" />
    </div>
    <div className="w-full md:w-2/3 p-6 flex flex-col justify-center space-y-3">
      <h3 className="text-xl font-bold text-orange-600">Mr. Pankaj Tyagi</h3>
      <p className="text-sm font-semibold text-gray-600">Director</p>
      <blockquote className="italic text-lg text-gray-800">
        "The journey is what brings us happiness not the destination."
      </blockquote>
      <p className="text-gray-600 text-sm">
        There is no affront to yourself or others in dropping it...
      </p>
    </div>
  </motion.div>

  {/* 3. Ms. Anjali Maheshwari */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-white shadow-md rounded-lg flex flex-col md:flex-row overflow-hidden"
  >
    <div className="w-[262px] h-[350px] md:w-1/3  md:h-auto">
      <img src={principal} alt="Ms. Kavita Bainsla" className="w-full h-full object-cover" />
    </div>
    <div className="w-full md:w-2/3 p-6 flex flex-col justify-center space-y-3">
      <h3 className="text-xl font-bold text-orange-600"> Ms. Anjali Maheshwari</h3>
      <p className="text-sm font-semibold text-gray-600">Principal</p>
      <blockquote className="italic text-lg text-gray-800">
        "Greatness is simply defined as the ability to believe in yourself."
      </blockquote>
      <p className="text-gray-600 text-sm">
        We, here at Modern School aspire to create sympathy in the hearts of its young pupils...
      </p>
    </div>
  </motion.div>
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

    
    </div>
    </>
  );
}