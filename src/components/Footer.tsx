import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-blue-400">Sifat</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Building exceptional digital experiences with modern technologies and best practices.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="skills" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/habibsifat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/habibsifat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/habibsifat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="https://instagram.com/habibsifat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Sifat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;