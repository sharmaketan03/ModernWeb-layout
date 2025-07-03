import React, { useState } from 'react';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
import Logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className={`flex items-center space-x-3 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div>
              <Link to={"/"}>
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
              </Link>
            </div>
          </div>

          {/* Social Icons & Contact */}
          <div className={`hidden md:flex items-center space-x-4 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <Facebook className="w-8 h-8 text-blue-600 cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:rotate-12" />
            <Instagram className="w-8 h-8 text-pink-600 cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:-rotate-12" />
            <div className="bg-orange-400 px-4 py-2 rounded-lg flex items-center space-x-2 transform transition-all duration-300 hover:bg-orange-500 hover:scale-105">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Call us: +91-9414053848 </span>
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
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 text-[15px] ">
            <li className={`transform transition-all duration-500 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Link to="/" className="block px-3 py-2 text-[#010101] font-bold hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative group">
               Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className={`transform transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Link to="/Rbse" className="block px-3 py-2 text-[#010101] font-bold hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative group">
              RBSE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
             <li className={`transform transition-all duration-500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Link to="/cbse" className="block px-3 py-2 text-[#010101] font-bold hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative group">
                CBSE CORNER
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            
            <li className={`transform transition-all duration-500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Link to="/career" className="block px-3 py-2 text-[#010101] font-bold hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative group">
                CAREER
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
           
            
            
           <li className={`transform transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Link to="/About" className="block px-3 py-2 text-[#010101] font-bold hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              </li>
            <li className={`transform transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Link to="/contact" className="block px-3 py-2 text-[#010101] font-bold hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative group">
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
