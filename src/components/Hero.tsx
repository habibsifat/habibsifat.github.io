import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Sifat</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Developer | Web Designer | Tech Enthusiast
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, 
              and designed with best practices. Let's turn your vision into reality.
            </p>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/habibsifat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/habibsifat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-2xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/habibsifat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-2xl"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="btn btn-primary"
              >
                View My Work
              </Link>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="btn btn-outline"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Sifat" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;