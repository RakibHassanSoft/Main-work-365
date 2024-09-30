import React from 'react';

const Resume4 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-teal-600">John Doe</h1>
        <p className="text-xl text-teal-500">Sales Representative</p>
      </div>

      {/* Contact Information */}
      <div className="flex justify-between border-b pb-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Address: Anytown, 12345</p>
          <p>Phone: 555-555-122</p>
          <p>Email: <a href="mailto:john.doe@email.com" className="text-teal-500">john.doe@email.com</a></p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul>
            <li>Sales - <span className="text-green-500">Excellent</span></li>
            <li>Business Development - <span className="text-green-500">Excellent</span></li>
            <li>Account Management - <span className="text-green-500">Excellent</span></li>
            <li>Customer Service - <span className="text-green-500">Excellent</span></li>
            <li>Marketing - <span className="text-green-500">Excellent</span></li>
          </ul>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Professional Summary</h2>
        <p>
          Motivated and results-driven sales professional with more than ten years of experience in the XYZ industry. Proven ability to increase sales and grow revenue. Track record of consistently meeting or exceeding quotas.
        </p>
      </div>

      {/* Career Objective */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Career Objective</h2>
        <p>
          Seeking to leverage my extensive experience in sales and business development to secure a challenging position where I can contribute to continued growth and profitability while enhancing my skills and industry knowledge.
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Work History</h2>

        <div className="mb-4">
          <h3 className="font-bold text-lg">Sales Representative</h3>
          <p className="italic">XYZ Corporation - January 2010 - Present</p>
          <ul className="list-disc ml-6">
            <li>Generate leads and develop new business opportunities</li>
            <li>Consistently meet or exceed quarterly sales goals</li>
            <li>Develop and maintain positive relationships with customers</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-lg">Sales Representative</h3>
          <p className="italic">ABC Corporation - November 2009 - January 2010</p>
          <ul className="list-disc ml-6">
            <li>Developed new business opportunities</li>
            <li>Achieved sales goals</li>
            <li>Provided excellent customer service</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-lg">Sales Representative</h3>
          <p className="italic">CDE Company - January 2007 - January 2009</p>
          <ul className="list-disc ml-6">
            <li>Developed and delivered engaging sales presentations to convey product benefits</li>
            <li>Created professional sales presentations and seminars to effectively demonstrate product features and competitive advantages</li>
            <li>Met with existing customers and prospects to discuss business needs and recommend optimal solutions</li>
          </ul>
        </div>
      </div>

      {/* Education Details */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Education</h2>
        <div>
          <h3 className="font-bold text-lg">Bachelor of Science: Business Administration</h3>
          <p className="italic">XYZ University - Anytown, US</p>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Projects</h2>
        <ul className="list-disc ml-6">
          <li>Lead a sales team in achieving a 20% year-over-year increase in revenue.</li>
          <li>Developed a customer loyalty program that boosted repeat sales by 30%.</li>
        </ul>
      </div>

      {/* Awards */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Awards</h2>
        <ul className="list-disc ml-6">
          <li>Top Sales Representative of the Year (2018) - XYZ Corporation</li>
          <li>Employee of the Month - ABC Corporation</li>
        </ul>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-2xl font-semibold text-teal-600">Languages</h2>
        <p>English (Native)</p>
      </div>
    </div>
  );
};

export default Resume4;
