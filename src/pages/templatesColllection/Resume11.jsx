import React from 'react';

const Resume11 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md p-8">
      {/* Header: Title and Contact */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-purple-600">Abigail Williams</h1>
          <h2 className="text-lg text-gray-600">Senior Project Manager</h2>
        </div>
        <div className="text-right">
          <p>📞 (123) 456-7890</p>
          <p>✉️ abigail2williams@email.com</p>
          <p>🌍 Minneapolis, MN | <a href="#" className="text-blue-500">LinkedIn</a></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1">
          {/* Education */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <div className="mb-4">
              <p className="font-bold">Bachelor of Business Administration</p>
              <p className="text-gray-600">Hamline University, Minneapolis, MN</p>
              <p>GPA: 3.6 | Aug 2008 - June 2012</p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Leadership</li>
              <li>Risk Management</li>
              <li>Team Development</li>
              <li>Stakeholder Management</li>
              <li>Asana</li>
              <li>Jira</li>
              <li>ClickUp</li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Certified ScrumMaster (CSM)</li>
              <li>Agile Certified Practitioner (PMI-ACP)</li>
            </ul>
          </section>

          {/* Awards */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Awards</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>PMI Fellow Award</li>
              <li>PMI Rising Leader</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {/* Career Objective */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Career Objective</h3>
            <p className="text-gray-700">
              Dynamic senior project manager with 11 years of experience in fast-paced work environments, seeking a position at Target. Best known for managing a portfolio of high-value projects while maintaining a 97% satisfaction rate among all stakeholders. I aim to drive sales growth through effective leadership and maintain the brand's reputation as the first choice for all retail consumers.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold">Senior Project Manager</h4>
                <p className="text-gray-600">Best Buy | May 2019 - Present | Richfield, MN</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Managed Agile ceremonies, sprint reviews, and Scrum meetings, achieving 97% satisfaction rate.</li>
                  <li>Handled a portfolio of 8 projects valued at $439K+, delivering all projects before deadlines.</li>
                  <li>Proposed a real-time project tracking dashboard that visualized the impact of 9 KPIs.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold">Project Manager</h4>
                <p className="text-gray-600">Jamf | Sept 2015 - Feb 2019 | Minneapolis, MN</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Created a risk management framework that reduced project risks by 31%.</li>
                  <li>Led the introduction of ClickUp as the primary project tool, resulting in 57% fewer missed deadlines.</li>
                  <li>Adopted Agile methodologies that allowed product teams to launch new products 2 weeks faster.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold">Project Manager Intern</h4>
                <p className="text-gray-600">Leadpages | Jan 2013 - Aug 2015 | Minneapolis, MN</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Used Jira to track project progress, decreasing unresolved issues by 11%.</li>
                  <li>Assisted in launching 3 major projects for Leadpages, helping them attract 26% more clients within one quarter.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-gray-700">
              Led the development of an AI-powered dashboard for real-time project tracking at Best Buy, which improved decision-making by providing clear, actionable KPIs. The project was completed under budget and within the deadline.
            </p>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume11;