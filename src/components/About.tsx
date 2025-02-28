import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
              alt="Working on code" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I'm a passionate software developer with a strong foundation in web technologies and a keen eye for design. 
              With several years of experience in the field, I've had the opportunity to work on diverse projects that have 
              sharpened my skills and broadened my perspective.
            </p>
            <p className="text-gray-700 mb-6">
              My journey in tech began when I was in college, where I discovered my love for creating digital solutions. 
              Since then, I've been constantly learning and evolving, staying up-to-date with the latest technologies and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-gray-700">BS in Computer Science<br />University of Dhaka, 2018-2022</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-700">Dhaka, Bangladesh</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Employment</h4>
                <p className="text-gray-700">Software Engineer<br />Tech Solutions Inc.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interests</h4>
                <p className="text-gray-700">Open Source, AI, UI/UX Design</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                className="btn btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 2 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;