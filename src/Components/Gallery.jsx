import React, { useState, useEffect } from 'react';
import  Annualimage from "../assets/Annuall.jpeg"
const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample gallery data
  const galleryItems = [
    {
      id: 1,
      title: 'Annual Day Celebration 2024',
      category: 'events',
      image: "Annualimage",
      description: 'Students performing cultural dance on Annual Day'
    },
    {
      id: 2,
      title: 'Science Laboratory',
      category: 'facilities',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=400&fit=crop',
      description: 'State-of-the-art science laboratory for experiments'
    },
    {
      id: 3,
      title: 'Sports Day Champions',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop',
      description: 'Winners of inter-house sports competition'
    },
    {
      id: 4,
      title: 'Library Reading Room',
      category: 'facilities',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop',
      description: 'Modern library with digital resources'
    },
    {
      id: 5,
      title: 'Art & Craft Exhibition',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=400&fit=crop',
      description: 'Student artwork displayed at annual exhibition'
    },
    {
      id: 6,
      title: 'Basketball Tournament',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop',
      description: 'Inter-school basketball championship finals'
    },
    {
      id: 7,
      title: 'Computer Lab',
      category: 'facilities',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop',
      description: 'Advanced computer lab with modern equipment'
    },
    {
      id: 8,
      title: 'Graduation Ceremony',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop',
      description: 'Class XII graduation ceremony 2024'
    },
    {
      id: 9,
      title: 'Swimming Pool',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=400&fit=crop',
      description: 'Olympic-size swimming pool for training'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'events', name: 'School Events', icon: '🎭' },
    { id: 'facilities', name: 'Facilities', icon: '🏫' },
    { id: 'sports', name: 'Sports', icon: '⚽' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-ping"></div>
          <div className="absolute top-16 right-1/3 w-20 h-20 border border-blue-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-32 right-20 w-12 h-12 border border-blue-200 rounded-full animate-bounce opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center py-20 px-5">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            SCHOOL GALLERY
          </h1>
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl mb-4">Capturing Memories & Moments</p>
            <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
            <p className="text-lg md:text-xl opacity-90">Explore our vibrant school life through pictures</p>
          </div>
          
          {/* Camera Icon */}
          <div className={`mt-8 flex justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping opacity-20"></div>
                <div className="text-center z-10">
                  <div className="text-gray-900 text-4xl">📸</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Stats */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: 'TOTAL PHOTOS', 
                value: '500+', 
                icon: '📷',
                color: 'from-blue-600 to-blue-800',
                bgColor: 'bg-blue-50'
              },
              { 
                title: 'SCHOOL EVENTS', 
                value: '150+', 
                icon: '🎭',
                color: 'from-purple-600 to-purple-800',
                bgColor: 'bg-purple-50'
              },
              { 
                title: 'FACILITIES', 
                value: '50+', 
                icon: '🏫',
                color: 'from-green-600 to-green-800',
                bgColor: 'bg-green-50'
              },
              { 
                title: 'SPORTS MOMENTS', 
                value: '200+', 
                icon: '⚽',
                color: 'from-orange-600 to-orange-800',
                bgColor: 'bg-orange-50'
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

      {/* Category Filter */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            BROWSE BY CATEGORY
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                } ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === item.category)?.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.category === 'events' ? 'bg-purple-100 text-purple-800' :
                      item.category === 'facilities' ? 'bg-green-100 text-green-800' :
                      item.category === 'sports' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className={`text-3xl md:text-4xl text-center text-gray-900 font-bold mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            SHARE YOUR MEMORIES
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-3xl">
                📤
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SUBMIT YOUR PHOTOS</h3>
              <p className="text-gray-600 mb-8">Have amazing school moments to share? Submit your photos to be featured in our gallery</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-center text-lg font-semibold"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-center text-lg font-semibold"
              />
              <textarea
                placeholder="Photo Description"
                rows="3"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-center text-lg font-semibold resize-none"
              ></textarea>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-500 transition-colors duration-300">
                <div className="text-4xl mb-4">📁</div>
                <p className="text-gray-600">Drag & drop photos here or <span className="text-blue-600 font-semibold cursor-pointer">browse files</span></p>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg">
                SUBMIT PHOTOS
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-600">
              <p>* Photos will be reviewed before being added to the gallery</p>
              <p>* Maximum file size: 5MB per photo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-br from-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">GALLERY SUPPORT</h2>
          <p className="text-xl mb-8 opacity-90">Need help with photos or submissions? Contact us</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '📞', title: 'PHONE', info: ['+91-9414053848', '+91-2784045'] },
              { icon: '✉️', title: 'EMAIL', info: ['gallery@school.com', 'photos@school.com'] },
              { icon: '🕒', title: 'OFFICE HOURS', info: ['Mon-Fri: 9:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'] }
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl transform transition-all duration-300 hover:scale-110">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{contact.title}</h3>
                {contact.info.map((item, i) => (
                  <p key={i} className="text-white/90">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors duration-200"
            >
              ✕
            </button>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-2xl">
              <h3 className="text-xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-200">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-2xl flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-3xl animate-pulse">
          <span className="text-2xl">📸</span>
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;