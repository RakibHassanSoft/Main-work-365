import React from "react";

const Resume3 = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg">
      {/* Title */}
      <header className="text-center mb-6 bg-blue-800">
        <h1 className="text-4xl font-bold uppercase text-white">Barbara Unrein, RN</h1>
        <h2 className="text-xl text-white">Registered Nurse</h2>
      </header>

      {/* Contact Summary */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <ul className="text-gray-700">
          <li>Email: <a href="mailto:barb.unrein@email.com" className="text-blue-500">barb.unrein@email.com</a></li>
          <li>Phone: (123) 456-7890</li>
          <li>Location: Staten Island, New York</li>
          <li><a href="https://linkedin.com" className="text-blue-500">LinkedIn</a></li>
        </ul>
      </section>

      {/* Career Objective */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Career Objective</h3>
        <p>
          Dedicated and empathetic Registered Nurse with over a decade of experience in maternity, NICU, and dermatology. 
          Passionate about providing the best care for newborns and supporting families through education and care coordination.
        </p>
      </section>

      {/* Work Experience */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <div className="mb-4">
          <h4 className="font-bold">Registered Nurse, Maternity</h4>
          <p className="italic">Staten Island University Hospital - April 2018 - Present</p>
          <ul className="list-disc list-inside">
            <li>Assisted in the delivery of over 120 newborns in a leading hospital.</li>
            <li>Performed health tests on newborns and provided postnatal care instructions to parents.</li>
            <li>Responded to parental queries within 2 hours post-discharge.</li>
            <li>Ensured HIPPA compliance through team education and seminars.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Registered Nurse, NICU</h4>
          <p className="italic">Staten Island University Hospital - August 2015 - April 2018</p>
          <ul className="list-disc list-inside">
            <li>Cared for over 10 newborns per shift in the NICU, aiding in 86% discharge within 3 days.</li>
            <li>Provided parental education on post-discharge infant care.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Registered Nurse</h4>
          <p className="italic">Dr. Angela Lamb Dermatology - August 2012 - August 2015</p>
          <ul className="list-disc list-inside">
            <li>Primary care and assessments for outpatient dermatology procedures.</li>
            <li>Plan-of-care for burn victims and patient education for post-op care.</li>
          </ul>
        </div>
      </section>

      {/* Education Details */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Education</h3>
        <div>
          <h4 className="font-bold">Bachelor of Science, Nursing</h4>
          <p className="italic">Rutgers University, 2008 - 2012</p>
          <p>Dean's List, Fall 2010</p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        <ul className="list-disc list-inside">
          <li>Patient Care</li>
          <li>Infant Care</li>
          <li>Organized and Empathetic</li>
          <li>Maternity & NICU Expertise</li>
          <li>IV Management</li>
          <li>Patient Triage</li>
        </ul>
      </section>

      {/* Certificates */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Licenses & Certifications</h3>
        <ul className="list-disc list-inside">
          <li>Registered Nurse (RN), NY State</li>
          <li>Advanced Life Support (ALS)</li>
          <li>Basic Life Support (BLS)</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="pb-4">
        <h3 className="text-lg font-semibold">Languages</h3>
        <p>English (Native)</p>
      </section>

      {/* Awards (Optional) */}
      <section className="pb-4">
        <h3 className="text-lg font-semibold">Awards</h3>
        <p>Dean's List, Fall 2010 (Rutgers University)</p>
      </section>

      {/* Projects (Optional) */}
      <section className="pb-4">
        <h3 className="text-lg font-semibold">Projects</h3>
        <p>Nursing staff training on HIPAA compliance and newborn care workshops for parents.</p>
      </section>
    </div>
  );
};

export default Resume3;
