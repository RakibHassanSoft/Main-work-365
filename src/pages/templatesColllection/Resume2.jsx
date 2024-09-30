import React from 'react';

const Resume2 = () => {
  return (
    <div className="w-full mx-auto bg-white p-10 shadow-lg">
      {/* Resume Title and Contact Information */}
      <header className="flex flex-col items-center mb-10">
        <h1 className="text-5xl font-bold text-orange-600 mb-2">Your Name</h1>
        <h2 className="text-lg text-gray-500 font-light">Web Developer</h2>
        <p className="text-gray-600 text-center mt-2">
          (123) 456 78 99 — email@example.com — www.yourwebsite.com
        </p>
      </header>

      {/* Career Objective */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Career Objective</h3>
        <p className="text-gray-600">
          Passionate web developer with extensive experience in building dynamic web applications and
          responsive websites. Looking for a challenging position where I can contribute to projects
          using modern web technologies and innovative solutions.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Summary</h3>
        <p className="text-gray-600">
          A dedicated and result-driven developer with a solid understanding of front-end and
          back-end development. Experienced in working in agile environments and using JavaScript,
          React, Node.js, and other modern technologies to build efficient and scalable applications.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Experience</h3>
        <div className="mb-6">
          <h4 className="text-lg font-bold">Creative Web Solutions</h4>
          <p className="text-gray-500 font-medium">Senior Developer • 2018 – Present</p>
          <p className="text-gray-600 mt-2">
            Led a team of developers in building scalable web applications for multiple clients,
            implemented modern web standards, and improved project workflows.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-bold">Tech Innovations</h4>
          <p className="text-gray-500 font-medium">Frontend Developer • 2015 – 2018</p>
          <p className="text-gray-600 mt-2">
            Developed user-friendly interfaces for various websites and optimized performance to
            enhance the user experience.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Projects</h3>
        <div className="mb-4">
          <h4 className="text-lg font-bold">E-Commerce Platform</h4>
          <p className="text-gray-600">
            Built a full-stack e-commerce platform using the MERN stack, implementing a dynamic
            product filter and user authentication with Firebase.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Task Management App</h4>
          <p className="text-gray-600">
            Developed a task management application with React, allowing users to manage their tasks
            with a clean and intuitive interface.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Skills</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>HTML, CSS, JavaScript, React</li>
          <li>Node.js, Express, MongoDB</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git)</li>
          <li>RESTful API Integration</li>
        </ul>
      </section>

      {/* Awards */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Awards</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Best Web Developer Award – 2021, XYZ Organization</li>
          <li>Top 10 Developer in National Hackathon – 2020</li>
        </ul>
      </section>

      {/* Certificates */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Certificates</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Certified React Developer, Udemy</li>
          <li>Full-Stack JavaScript Certification, FreeCodeCamp</li>
        </ul>
      </section>

      {/* Education Details */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Education</h3>
        <div className="mb-4">
          <h4 className="text-lg font-bold">Bachelor of Science in Computer Science</h4>
          <p className="text-gray-500">Your University • 2010 – 2014</p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Languages</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>English (Fluent)</li>
          <li>Spanish (Intermediate)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume2;
