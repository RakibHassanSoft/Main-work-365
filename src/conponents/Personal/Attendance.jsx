import React, { useState } from 'react';

// Sample student data
const studentList = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eva',
  'Frank',
  'Grace',
  'Hannah',
  'Ivy',
  'Jack',
  'Kate',
  'Liam',
  'Mia',
  'Noah',
  'Olivia',
  'Paul',
  'Quinn',
  'Ryan',
  'Sophie',
  'Tom',
  'Uma'
];

const Attendance = () => {
  const [attendingStudents, setAttendingStudents] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (studentName) => {
    setAttendingStudents((prev) => {
      if (prev.includes(studentName)) {
        return prev.filter((name) => name !== studentName);
      } else {
        return [...prev, studentName];
      }
    });
  };

  // Handle attendance submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toLocaleString(); // Get current date and time
    const newRecord = {
      date: currentDateTime,
      students: attendingStudents,
    };
    setAttendanceRecords((prev) => [...prev, newRecord]); // Add new record to the list
    console.log('Attendance Record:', newRecord.students);
    console.log('Attendance Record:', newRecord.date);
    alert(`Attendance Recorded:\nDate: ${currentDateTime}\nAttending Students: ${attendingStudents.join(', ')}`);
    setAttendingStudents([]); // Reset the attending students
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Attendance List</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            {studentList
              .filter(student => !attendingStudents.includes(student)) // Filter out attending students
              .map((student) => (
                <label key={student} className="flex items-center cursor-pointer p-2 rounded-md transition duration-200 hover:bg-gray-100">
                  <input
                    type="checkbox"
                    id={student}
                    value={student}
                    className="form-checkbox h-5 w-5 text-green-600 border-gray-300 rounded"
                    onChange={() => handleCheckboxChange(student)}
                  />
                  <span className="ml-2 text-lg">{student}</span>
                </label>
              ))}
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition duration-200"
          >
            Submit Attendance
          </button>
        </form>
        
        {/* Display attendance records */}
        {attendanceRecords.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Attendance Records</h2>
            <ul className="list-disc pl-5">
              {attendanceRecords.map((record, index) => (
                <li key={index}>
                  <strong>Date:</strong> {record.date} <br />
                  <strong>Attending Students:</strong> {record.students.join(', ') || 'None'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
