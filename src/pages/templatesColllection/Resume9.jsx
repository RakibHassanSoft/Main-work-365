import React from 'react';

const Resume9 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-8">
      {/* Title and Contact */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold">Jamie Chastain</h1>
          <h2 className="text-lg text-gray-600">Project Manager</h2>
        </div>
        <div className="text-right">
          <p>📞 123-456-7890</p>
          <p>✉️ hello@reallygreatsite.com</p>
          <p>🌍 reallygreatsite.com</p>
        </div>
      </div>

      {/* Career Objective */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Career Objective</h3>
        <p className="text-gray-700">
          I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        <p className="text-gray-700">
          Over 5 years of experience as a web developer with a focus on database administration, web content management, and project leadership.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Web Design</li>
          <li>Design Thinking</li>
          <li>Wireframe Creation</li>
          <li>Front End Coding</li>
          <li>Problem-Solving</li>
          <li>Computer Literacy</li>
          <li>Project Management Tools</li>
          <li>Strong Communication</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold">Applications Developer</h4>
            <p className="text-gray-600">Really Great Company | 2016 - Present</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Database administration and website design</li>
              <li>Built the logic for a streamlined ad-serving platform</li>
              <li>Educational institutions and online classroom management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Web Content Manager</h4>
            <p className="text-gray-600">Really Great Company | 2014 - 2016</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Database administration and website design</li>
              <li>Built the logic for a streamlined ad-serving platform</li>
              <li>Educational institutions and online classroom management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <div>
          <h4 className="text-lg font-bold">Bachelor of Technology</h4>
          <p className="text-gray-600">Really Great University | 2014 - 2016</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Secondary School</h4>
          <p className="text-gray-600">Really Great High School | 2010 - 2014</p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Languages</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>English</li>
          <li>Spanish</li>
        </ul>
      </section>

      {/* Awards */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Awards</h3>
        <p className="text-gray-700">Best Project Manager 2019 - Really Great Company</p>
      </section>

      {/* Certificates */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Certificates</h3>
        <p className="text-gray-700">Certified Web Developer - Web Development Institute</p>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Projects</h3>
        <p className="text-gray-700">Developed an ad-serving platform for online classrooms with scalable infrastructure.</p>
      </section>
    </div>
  );
};

export default Resume9;