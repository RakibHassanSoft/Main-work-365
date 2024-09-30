import React from 'react';

const Resume8 = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg border border-gray-300">
      {/* Header: Name and Contact */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-5xl font-bold">Jack William</h1>
          <p className="text-lg font-medium text-gray-600">University Academic</p>
        </div>
        <div>
          <p className="text-gray-600">📞 (123) 456-7890</p>
          <p className="text-gray-600">📧 jackwilliam@email.com</p>
          <p className="text-gray-600">📍 Seattle, WA</p>
          <p className="text-gray-600">💼 @Jackwilliam</p>
        </div>
      </div>

      {/* Career Objective */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Career Objective</h2>
        <p className="text-gray-700 mt-2">
          Your resume objective is a focused 2-3 sentence statement that demonstrates your interest and candidacy for the position
          you hope to land. As a student or entry-level candidate, you should tailor it to each position you apply for. Take the time to
          write a compelling, custom objective.
        </p>
      </section>

      {/* Main Content: Two Column Layout */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column: Skills, Education, Awards */}
        <div>
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Education</h2>
            <ul className="mt-2 text-gray-700">
              <li>
                <p className="font-semibold">Name of College or High School | Year 20XX</p>
                <p className="text-sm">City, State</p>
              </li>
              <li className="mt-4">
                <p className="font-semibold">Name of College or High School | Year 20XX</p>
                <p className="text-sm">City, State</p>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Leadership</li>
              <li>Time Management</li>
              <li>Decision Making</li>
              <li>Creativity</li>
              <li>Analytical Thinking</li>
              <li>Research</li>
              <li>Team Oriented</li>
              <li>Negotiation</li>
              <li>Public Speaking</li>
            </ul>
          </section>

          {/* Awards */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Awards</h2>
            <ul className="mt-2 text-gray-700">
              <li>
                <p className="font-semibold">School | Month 20XX</p>
                <p className="text-sm">Enter name of your award earned</p>
              </li>
              <li className="mt-4">
                <p className="font-semibold">School | Month 20XX</p>
                <p className="text-sm">Enter name of your award earned</p>
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column: Experience, Projects */}
        <div>
          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="mt-2">
              <h3 className="font-bold">Research Assistant</h3>
              <p className="text-gray-500">Month 20XX - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Focus on your contributions, not your responsibilities. “Grew digital marketing ROI by 14%” is much better.</li>
                <li>Start your job description bullet points with active verbs rather than personal pronouns.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-bold">LAB Engineer</h3>
              <p className="text-gray-500">Month 20XX - Month 20XX</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Created nutrition and personal training plans for 30+ clients, helping them lose 26 pounds on average.</li>
                <li>Write your job descriptions in past tense, though current experience can be in present tense.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Projects</h2>
            <div className="mt-2">
              <h3 className="font-bold">Project Name</h3>
              <p className="text-gray-500">Month 20XX - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Focus on your contributions, not your responsibilities.</li>
                <li>Designed and implemented work ticketing system.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-bold">Project Name</h3>
              <p className="text-gray-500">Month 20XX - Month 20XX</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Created nutrition and personal training plans for 30+ clients.</li>
                <li>Write your current experience in present tense if desired.</li>
              </ul>
            </div>
          </section>

          {/* Certificates */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Certificates</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Certified Data Scientist | Month 20XX</li>
              <li>Machine Learning Specialist | Month 20XX</li>
            </ul>
          </section>

          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold">Languages</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>English - Native</li>
              <li>Spanish - Intermediate</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume8;