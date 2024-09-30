import React from 'react';

const Resume6 = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg">
      {/* Title and Contact */}
      <div className="border-b pb-4 mb-4">
        <h1 className="text-4xl font-bold">John Aarts</h1>
        <h2 className="text-xl text-gray-600">Customer Success Manager</h2>
        <div className="mt-2">
          <p>📞 +1-952-140-6600</p>
          <p>📧 john.xander@gmail.com</p>
          <p>📍 Amsterdam, Netherlands</p>
          <a href="https://linkedin.com/@_XanderAarts_" className="text-blue-500">LinkedIn</a>
        </div>
      </div>

      {/* Career Objective */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Career Objective</h3>
        <p className="text-gray-700">
          Enthusiastic Customer Success Manager with seven years of experience coordinating
          Customer Success staff, analyzing complaints, and implementing customer retention
          campaigns. Focused on building excellent client relationships and resolving issues efficiently.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Summary</h3>
        <p className="text-gray-700">
          Proven project team leader and client service manager. Focused on building excellent
          productive client relationships, quickly resolving issues to ensure business needs are met.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <div className="mt-4">
          <h4 className="text-xl font-bold">Senior Customer Success Manager</h4>
          <p className="text-gray-500">Blanchette | 2017 - Ongoing | Amsterdam, Netherlands</p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Achieved an average 115% Net Retention Rate (NRR) on a target of 102%.</li>
            <li>Developed an end-user training curriculum for Microsoft Office 365.</li>
            <li>Managed an EMEA book of business of USD $2-$2.5M in ARR.</li>
          </ul>
        </div>
        {/* Additional experience blocks can be added similarly */}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Implemented a cross-regional customer success strategy increasing retention by 20%.</li>
          <li>Automated customer feedback processes, reducing support costs by 15%.</li>
        </ul>
      </section>

      {/* Awards */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Awards</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Employee of the Year, Blanchette (2019)</li>
          <li>Best Customer Success Strategy Implementation (2021)</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Education</h3>
        <p className="text-gray-700">Master of Sociology, University of Amsterdam (2013 - 2014)</p>
        <p className="text-gray-700">Bachelor of Economics, University of Amsterdam (2009 - 2012)</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>CRM, Salesforce, NetSuite</li>
          <li>MS Excel, Hubspot, Mailchimp</li>
          <li>CI Tools, SimilarWeb</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Languages</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>English (Native)</li>
          <li>Dutch (Proficient)</li>
        </ul>
      </section>

      {/* Certificates */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Certificates</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Certified Customer Success Manager, SuccessHacker</li>
          <li>Salesforce Certified Administrator</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume6;