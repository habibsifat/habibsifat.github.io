import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="text-xl font-bold cursor-pointer"
        >
          <span className="text-blue-500">Sifat</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <Link 
            activeClass="active" 
            to="home" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            Home
          </Link>
          <Link 
            activeClass="active" 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            About
          </Link>
          <Link 
            activeClass="active" 
            to="skills" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            Skills
          </Link>
          <Link 
            activeClass="active" 
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            Projects
          </Link>
          <Link 
            activeClass="active" 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-2">
            <Link 
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="nav-link py-3 px-4"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              activeClass="active" 
              to="about" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="nav-link py-3 px-4"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              activeClass="active" 
              to="skills" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="nav-link py-3 px-4"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link 
              activeClass="active" 
              to="projects" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="nav-link py-3 px-4"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link 
              activeClass="active" 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="nav-link py-3 px-4"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;