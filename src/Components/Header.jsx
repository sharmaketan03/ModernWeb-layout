import React, { useState } from 'react';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
import Logo from "../assets/logo1.jpeg";
import LogoName from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            <a href="https://www.facebook.com/profile.php?id=61577925926344" target='_blank'> <Facebook className="w-8 h-8 text-blue-600 cursor-pointer hover:scale-125 hover:rotate-12 transition-transform" /></a>
           
           <a href="https://www.instagram.com/rishigalavschool5?igsh=MXY5eHB3dnN6a2p6Yg=="  target='_blank'> <Instagram className="w-8 h-8 text-pink-600 cursor-pointer hover:scale-125 hover:-rotate-12 transition-transform" /></a>
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
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 text-[15px]">
            <li className={`transition-all duration-500 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Link to="/" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className={`transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}  onClick={()=>setIsMenuOpen(false)}>
              <Link to="/Rbse" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                RBSE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className={`transition-all duration-500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}  onClick={()=>setIsMenuOpen(false)}>
              <Link to="/cbse" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                CBSE CORNER
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className={`transition-all duration-500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}  onClick={()=>setIsMenuOpen(false)}>
              <Link to="/career" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                CAREER
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className={`transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}   onClick={()=>setIsMenuOpen(false)}>
              <Link to="/About" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className={`transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}  onClick={()=>setIsMenuOpen(false)}>
              <Link to="/contact" className="block px-3 py-2 font-bold text-[#010101] hover:text-blue-600 hover:scale-105 hover:-translate-y-1 relative group transition-all">
                CONTACT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
