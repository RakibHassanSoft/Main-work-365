import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { MdOutlineAssignment } from 'react-icons/md';

const Resume10 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      {/* Title and Contact */}
      <div className="bg-blue-600 p-6 text-white">
        <h1 className="text-4xl font-bold">Elijah Williams</h1>
        <h2 className="text-lg">Sales Executive</h2>
        <div className="mt-4 flex justify-end space-x-4">
          <div className="flex items-center">
            <FaPhone className="mr-1" /> <p>123-456-7890</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-1" /> <p>hello@yourgreatsite.com</p>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="mr-1" /> <p>linkedin.com/in/name</p>
          </div>
        </div>
      </div>

      {/* Career Objective */}
      <section className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Career Objective
        </h3>
        <p className="text-gray-700">
          Driven and passionate sales executive with over 5 years of experience in account management, customer relationship management, and supply chain services. Looking to leverage my expertise to help companies achieve revenue growth and customer satisfaction.
        </p>
      </section>

      {/* Summary */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Summary
        </h3>
        <p className="text-gray-700">
          Sales executive with proven track record in increasing sales, boosting customer satisfaction, and opening new accounts in competitive markets. Adept at collaborating with teams to achieve business goals.
        </p>
      </section>

      {/* Skills */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Skills
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Account Management</li>
          <li>CRM Software Proficiency</li>
          <li>Strategic and Social Selling</li>
          <li>Team Leadership</li>
          <li>Adobe Photoshop</li>
          <li>Salesforce</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Experience
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold">Account Sales Executive</h4>
            <p className="text-gray-600">SaaS Company, LLC | Jan 2020 - Aug 2022</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Boosted sales activities by 30% in the west coast region.</li>
              <li>Maintained a 100% client satisfaction rating and grew sales by 10% annually.</li>
              <li>Opened five new accounts by providing consistent customer service.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Field Sales Manager</h4>
            <p className="text-gray-600">Content Company, Inc. | Jan 2018 - Jan 2020</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Increased customer loyalty by 40% in six months.</li>
              <li>Achieved 10% growth in client base through strategic partnerships.</li>
              <li>Boosted customer satisfaction by 33% within six months.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Sales Intern</h4>
            <p className="text-gray-600">Technology Company, Inc. | Jan 2016 - Dec 2017</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Boosted sales activities by 30% in the west coast region.</li>
              <li>Maintained a 100% client satisfaction rating.</li>
              <li>Generated a 10% growth in annual sales revenue by working closely with sales and support teams.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Education
        </h3>
        <div>
          <h4 className="text-lg font-bold">Bachelor of Science in Business Administration</h4>
          <p className="text-gray-600">Harvard University | May 2020</p>
          <p>Major: Supply Chain Management</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Associate's Degree in Sales and Marketing</h4>
          <p className="text-gray-600">North Shore Community College | May 2018</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">4.0 GPA</h4>
          <p className="text-gray-600">North Centennial Private | May 2016</p>
        </div>
      </section>

      {/* Languages */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Languages
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>English</li>
          <li>Spanish</li>
        </ul>
      </section>

      {/* Awards */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Awards
        </h3>
        <p className="text-gray-700">Top Sales Executive 2021 - SaaS Company, LLC</p>
      </section>

      {/* Certificates */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Certificates
        </h3>
        <p className="text-gray-700">Certified Salesforce Administrator - Salesforce Academy</p>
      </section>

      {/* Projects */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Projects
        </h3>
        <p className="text-gray-700">
          Led the development of a CRM tool integration for sales tracking and analysis, improving workflow efficiency by 15%.
        </p>
      </section>
    </div>
  );
};

export default Resume10;
