import React from 'react';

const Resume7 = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg border-t-8 border-yellow-400">
      {/* Header: Name and Contact */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Melanie Robinson</h1>
          <p className="text-lg text-gray-600">Qualified Customer Service Representative</p>
          <p className="text-gray-500 mt-2">📞 +1 (970) 333-383-999</p>
          <p className="text-gray-500">📧 melanie.robinson@mail.com</p>
          <a href="https://linkedin.com/in/mrobinson" className="text-blue-500">LinkedIn: mrobinson</a>
        </div>
        <div>
          <img src="https://via.placeholder.com/80" alt="Profile" className="rounded-full" />
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700 mt-2">
          Qualified Customer Service Representative with over 4 years in fast-paced customer service and call center environments.
          Skilled at building strong relationships, resolving problems, and driving sales. Adept at articulating product benefits and
          creating solutions that provide value to the customer.
        </p>
      </section>

      {/* Skills and Experience */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>International sales support</li>
            <li>Strategic sales knowledge</li>
            <li>Exceptional communication skills</li>
            <li>CRM/Records management</li>
            <li>Customer service expertise</li>
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold">Work History</h2>
          <div className="mt-2">
            <h3 className="font-bold">Customer Service Representative</h3>
            <p className="text-gray-500">BATS Global Markets Inc, Chicago (04/2017 - 09/2018)</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Contact customers to follow up on purchases and new merchandise offers.</li>
              <li>Promoted existing services as a superior provider to customers.</li>
              <li>Answered all customer questions and managed the complaint resolution process.</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Customer Service Representative</h3>
            <p className="text-gray-500">Foodspotting Inc, Chicago (04/2015 - 09/2016)</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Responded to customer inquiries and service selection.</li>
              <li>Increased sales and customer satisfaction through fast response times.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="mt-2 text-gray-700">Bachelor of Arts: Marketing - Oregon University (2018)</p>
        <p className="text-gray-700">Bachelor of Arts: Marketing - Oregon University (2014)</p>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Implemented customer feedback system that reduced complaints by 15%.</li>
          <li>Led a team to improve sales strategy for customer service, resulting in a 20% revenue boost.</li>
        </ul>
      </section>

      {/* Awards */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Awards</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Best Customer Service Team, BATS Global Markets Inc (2018)</li>
          <li>Customer Service Star Performer, Foodspotting Inc (2017)</li>
        </ul>
      </section>

      {/* Certificates */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Certificates</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Certified Customer Service Professional (2018)</li>
          <li>Salesforce Certified Administrator (2017)</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Languages</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>English (Native)</li>
          <li>Spanish (Proficient)</li>
        </ul>
      </section>

      {/* Career Objective */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Career Objective</h2>
        <p className="text-gray-700 mt-2">
          Seeking a Customer Success role where I can utilize my strong communication skills and customer service experience to drive growth and maintain customer satisfaction.
        </p>
      </section>

      {/* Reference */}
      <section>
        <h2 className="text-xl font-semibold">Reference</h2>
        <p className="text-gray-700 mt-2">
          Steve Halloway - Business Consultant at SX Solutions <br />
          shalloway@sxsolutions.com | 305-300-7891
        </p>
      </section>
    </div>
  );
};

export default Resume7;