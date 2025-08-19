import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// ✅ Local images only
import img1 from "../assets/gallery-1.jpeg";
import img2 from "../assets/gallery-2.jpeg";
import img3 from "../assets/gallery-3.jpeg";
import img4 from "../assets/gallery-4.jpg";
import img5 from "../assets/gallery-5.jpg";
import img6 from "../assets/gallery-6.jpg";
import img7 from "../assets/gallery-7.jpg";
import img8 from "../assets/gallery-8.jpg";
import img9 from "../assets/gallery-9.jpg";
import img10 from "../assets/gallery-10.jpg";
import img11 from "../assets/gallery-11.jpg";
import img12 from "../assets/gallery-12.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll animation trigger for header section
  const { ref: headerRef, inView: headerVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Scroll animation trigger for gallery grid
  const { ref: galleryRef, inView: galleryVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // ✅ Only imported images here
  const galleryImages = [img1, img2, img3, img4,img5,img6,img7,img6,img8,img9,img10,img11,img12];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-900 py-20 px-8 relative overflow-hidden" ref={headerRef}>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            SCHOOL GALLERY
          </h2>
          <h3 className={`text-3xl lg:text-4xl font-bold text-white mb-8 transition-all duration-1000 delay-400 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            OUR MEMORIES
          </h3>
          <p className={`text-white/90 text-lg mb-12 transition-all duration-1000 delay-600 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Capturing moments of learning, growth, and excellence in our educational journey.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white py-20 px-8" ref={galleryRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 hover:scale-105 ${
                  galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-lg font-semibold">View Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 rounded-full bg-blue-900/50 hover:bg-blue-900/70"
            >
              <X size={24} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Selected"
                className="mx-auto object-contain max-h-[70vh] w-auto max-w-[95vw] sm:max-w-[600px] md:max-w-[800px]"
              />
              <div className="p-6 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
                <h3 className="text-xl font-bold">School Gallery</h3>
                <p className="text-blue-100">Moments that matter</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
