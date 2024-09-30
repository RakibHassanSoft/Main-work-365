import React from 'react';

const Resume1 = () => {
  return (
    <div className="w-full mx-auto p-8 bg-gray-50">
      {/* Resume Title */}
      <header className="flex justify-between items-center border-b-2 pb-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold">Your Name</h1>
          <h2 className="text-lg font-light text-gray-500">Web Developer</h2>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Contract Summary */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Contract Summary</h3>
        <p>
          Experienced web developer available for freelance or full-time contracts. Proficient in building scalable web applications with React, Node.js, and MongoDB. Seeking a challenging contract with flexible working hours.
        </p>
      </section>

      {/* Career Objective */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Career Objective</h3>
        <p>
          Passionate web developer with X years of experience in building dynamic websites
          and web applications. Adept at using modern technologies to solve problems
          efficiently. Looking to contribute to a forward-thinking company.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc ml-4">
          <li>Web Design</li>
          <li>Front End Coding</li>
          <li>React, TypeScript, JavaScript</li>
          <li>Node.js & Express</li>
          <li>Database Management (MongoDB, MySQL)</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Projects</h3>
        <div className="mb-4">
          <h4 className="text-xl font-bold">Project 1: E-Commerce Platform</h4>
          <p className="text-gray-600">A full-stack e-commerce platform built using MERN stack.</p>
          <ul className="list-disc ml-4 mt-2">
            <li>Implemented user authentication with JWT and Firebase</li>
            <li>Created a dynamic product filter and pagination feature</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Project 2: Task Management App</h4>
          <p className="text-gray-600">A task management tool developed using React and Node.js.</p>
          <ul className="list-disc ml-4 mt-2">
            <li>Developed task CRUD functionalities with an interactive UI</li>
            <li>Used Redux for state management</li>
          </ul>
        </div>
      </section>

      {/* Education Details */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <div className="mb-4">
          <h4 className="text-xl font-bold">Bachelor of Technology in Computer Science</h4>
          <p className="text-gray-600">Your University, 2014 - 2018</p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Secondary Education</h4>
          <p className="text-gray-600">Your High School, 2010 - 2014</p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Languages</h3>
        <ul className="list-disc ml-4">
          <li>English (Fluent)</li>
          <li>Spanish (Intermediate)</li>
          <li>French (Basic)</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Experience</h3>
        <div className="mb-6">
          <h4 className="text-xl font-bold">Applications Developer</h4>
          <p className="text-gray-600">Really Great Company, 2016 - Present</p>
          <ul className="list-disc ml-4 mt-2">
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Improved database efficiency for the company's ad-serving platform</li>
            <li>Worked on classroom management systems for educational institutions</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-bold">Web Content Manager</h4>
          <p className="text-gray-600">Really Great Company, 2014 - 2016</p>
          <ul className="list-disc ml-4 mt-2">
            <li>Managed website content and database administration</li>
            <li>Built a streamlined ad-serving platform for educational institutions</li>
          </ul>
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Certificates</h3>
        <ul className="list-disc ml-4">
          <li>Certified Web Developer by XYZ Organization</li>
          <li>Google Cloud Certification: Associate Cloud Engineer</li>
        </ul>
      </section>

      {/* Awards */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Awards</h3>
        <ul className="list-disc ml-4">
          <li>Best Developer of the Year - ABC Conference</li>
          <li>Top Contributor in Open Source - DEF Hackathon</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume1;
