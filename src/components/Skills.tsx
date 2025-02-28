import React from 'react';

const Skills: React.FC = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 
    'Angular', 'Tailwind CSS', 'Bootstrap', 'SASS/SCSS'
  ];
  
  const backendSkills = [
    'Node.js', 'Express', 'Python', 'Django', 'Flask', 'PHP', 
    'Laravel', 'Java', 'Spring Boot', 'GraphQL'
  ];
  
  const otherSkills = [
    'Git', 'GitHub', 'Docker', 'AWS', 'Firebase', 'MongoDB', 
    'PostgreSQL', 'MySQL', 'Redis', 'RESTful APIs'
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools. Here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              I build responsive, accessible, and performant user interfaces using modern frontend technologies.
            </p>
            <div className="flex flex-wrap">
              {frontendSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Backend Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              I develop robust server-side applications and APIs that power dynamic web experiences.
            </p>
            <div className="flex flex-wrap">
              {backendSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Tools & Technologies</h3>
            </div>
            <p className="text-gray-600 mb-4">
              I leverage various tools and technologies to streamline development and deployment processes.
            </p>
            <div className="flex flex-wrap">
              {otherSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;