import React, { useState } from 'react';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
// import Logo from "../assets/logo1.jpeg";
import LogoName from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .dropdown-parent {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.5rem;
          width: 200px;
          background-color: white;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px) scale(0.9);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
          backdrop-filter: blur(10px);
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%);
        }
        
        .dropdown-parent:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        
        .dropdown-item {
          display: block;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          border-radius: 8px;
          margin: 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .dropdown-item:hover {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          color: #2563eb;
          transform: translateX(8px) scale(1.02);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
        }
        
        .dropdown-item:hover::before {
          left: 100%;
        }
        
        .mobile-dropdown {
          margin-top: 8px;
          margin-left: 16px;
          padding: 8px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 8px;
          border-left: 3px solid #2563eb;
          opacity: 0;
          visibility: hidden;
          max-height: 0;
          overflow: hidden;
          transform: translateY(-15px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .dropdown-parent:hover .mobile-dropdown {
          opacity: 1;
          visibility: visible;
          max-height: 150px;
          transform: translateY(0);
        }
        
        .mobile-dropdown-item {
          display: block;
          padding: 10px 12px;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 6px;
          position: relative;
        }
        
        .mobile-dropdown-item:hover {
          color: #2563eb;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
          transform: translateX(12px) scale(1.05);
          font-weight: 600;
        }
        
        /* Enhanced visibility for better contrast */
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 20px;
          width: 16px;
          height: 16px;
          background: white;
          border: 1px solid #e5e7eb;
          border-bottom: none;
          border-right: none;
          transform: rotate(45deg);
          z-index: -1;
        }
        
        @media (min-width: 768px) {
          .mobile-dropdown {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .dropdown-menu {
            display: none !important;
          }
          
          .mobile-dropdown {
            display: block;
          }
        }
        
        /* Add some breathing room for better visibility */
        .dropdown-parent {
          padding: 0 4px;
        }
        
        /* Ensure dropdown appears above all content */
        nav {
          position: relative;
          z-index: 100;
        }
      `}</style>
      
      <header className="bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logos Side by Side */}
            <div className={`flex items-center transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <Link to={"/"} className="flex items-center space-x-2">
                {/* Logo Icon */}
                {/* <img
                  src={Logo}
                  alt="Logo"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                /> */}
                {/* Logo Text / Name */}
                <img
                  src={LogoName}
                  alt="Logo Name"
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Social Icons & Contact */}
            <div className={`hidden md:flex items-center space-x-4 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <a href="https://www.facebook.com/profile.php?id=61577925926344" target='_blank' rel="noopener noreferrer"> 
                <Facebook className="w-8 h-8 text-blue-600 cursor-pointer hover:scale-125 hover:rotate-12 transition-transform" />
              </a>
             
              <a href="https://www.instagram.com/rishigalavschool5?igsh=MXY5eHB3dnN6a2p6Yg==" target='_blank' rel="noopener noreferrer"> 
                <Instagram className="w-8 h-8 text-pink-600 cursor-pointer hover:scale-125 hover:-rotate-12 transition-transform" />
              </a>
              <div className="bg-orange-400 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-500 hover:scale-105 transition-all">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Call us: +91-9414053848</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transform transition-transform duration-200 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-4 md:pb-0`}>
            <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 text-[15px]  md:text-[10px] lg:text-[15px]">
              {/* Home */}
              <li className={`transition-all duration-500 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link to="/" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              {/* RBSE with Dropdown */}
              <li className={`dropdown-parent transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link to="/Rbse" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                  RBSE
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {/* Desktop Dropdown */}
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      to="/rbseResult" 
                      className="dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      RBSE RESULT
                    </Link>
                  </li>
                </ul>
                {/* Mobile Dropdown */}
                <ul className="mobile-dropdown">
                  <li>
                    <Link 
                      to="/rbseResult" 
                      className="mobile-dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      RBSE RESULT
                    </Link>
                  </li>
                </ul>
              </li>

              {/* CBSE CORNER with Dropdown */}
              <li className={`dropdown-parent transition-all duration-500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link to="/cbse" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                  CBSE CORNER
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {/* Desktop Dropdown */}
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      to="/cbseResult" 
                      className="dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CBSE RESULT
                    </Link>
                  </li>
                </ul>
                {/* Mobile Dropdown */}
                <ul className="mobile-dropdown">
                  <li>
                    <Link 
                      to="/cbseResult" 
                      className="mobile-dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CBSE RESULT
                    </Link>
                  </li>
                </ul>
              </li>

              {/* CAREER */}
              <li className={`transition-all duration-500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link to="/career" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                  CAREER
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              {/* About Us */}
              <li className={`transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link to="/About" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              {/* Contact Us */}
              <li className={`transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link to="/contact" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                  CONTACT US
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              {/* Admission with Dropdown */}
              <li className={`dropdown-parent transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link to="/admissonpage" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                  Admission
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {/* Desktop Dropdown */}
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      to="/gallery" 
                      className="dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      GALLERY
                    </Link>
                  </li>
                </ul>
                {/* Mobile Dropdown */}
                <ul className="mobile-dropdown">
                  <li>
                    <Link 
                      to="/gallery" 
                      className="mobile-dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      GALLERY
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;