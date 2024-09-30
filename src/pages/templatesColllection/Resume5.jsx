import React from 'react';

const Resume5 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jane Doe, MSc</h1>
          <p className="text-lg text-gray-600">UX Designer</p>
          <p className="mt-2 text-gray-500">jane.doe@email.com</p>
        </div>
        <img
          className="h-24 w-24 rounded-full object-cover"
          src="/path-to-profile-photo.jpg" // Replace with the actual path or state
          alt="Profile"
        />
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
        <p className="mt-2 text-gray-700">
          A UX Designer with a passion for creating intuitive and seamless user experiences. I leverage my strong design and research background to develop user-centric solutions that drive engagement and satisfaction. Proven ability to collaborate across teams to deliver high-quality products in fast-paced environments.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
        <div className="flex flex-wrap mt-2">
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">Design</span>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">Productivity Software</span>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">Soft Skills</span>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">Web Development</span>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">UX Research</span>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">Rapid Prototyping</span>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Professional Experience</h2>
        <div className="mt-4">
          <h3 className="font-bold">Umbrella Inc. - UX & UI Designer</h3>
          <p className="text-gray-600 italic">Aug 2022 - Present | New York, USA</p>
          <ul className="list-disc list-inside mt-2">
            <li>Designed intuitive interfaces that improved user experience for 10+ projects.</li>
            <li>Led usability testing sessions, gathering actionable insights to optimize product performance.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Acme Designs SARL - Product Design Intern</h3>
          <p className="text-gray-600 italic">Nov 2016 - Jun 2022 | Paris, France</p>
          <ul className="list-disc list-inside mt-2">
            <li>Collaborated with cross-functional teams to define design strategy for mobile applications.</li>
            <li>Created prototypes and conducted A/B testing for key design iterations.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Black Mesa Labs - UX Research Assistant</h3>
          <p className="text-gray-600 italic">Aug 2011 - Oct 2016 | Berlin, Germany</p>
          <ul className="list-disc list-inside mt-2">
            <li>Assisted in user research and data analysis to influence design decisions.</li>
            <li>Presented research findings to senior designers to inform project development.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        <div className="mt-4">
          <h3 className="font-bold">MSc - Carnegie Mellon University</h3>
          <p className="text-gray-600 italic">Feb 2020 - Present | Pittsburgh, USA</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">BA in Human-Centered Design & Engineering</h3>
          <p className="text-gray-600 italic">Sep 2011 - Dec 2019 | University of Washington, USA</p>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Languages</h2>
        <div className="flex flex-wrap mt-2">
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">English (Native)</span>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">German (Fluent)</span>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">Spanish (Intermediate)</span>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Certifications</h2>
        <ul className="list-disc list-inside mt-2">
          <li>UX & UI Master Certification - CUA</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Developed and launched a new dashboard interface for SaaS platform, improving user engagement by 25%.</li>
          <li>Led a team of 5 designers to create a seamless user journey for an e-commerce website.</li>
        </ul>
      </div>

      {/* Awards */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Awards</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Best UX Design Award - 2022</li>
          <li>Design Excellence Recognition - 2021</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume5;
