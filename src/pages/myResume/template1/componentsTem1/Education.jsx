import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons for edit and delete

const Education = ({ educationDetails, setEducationDetails }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(educationDetails);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData) {
            setError('Education details cannot be empty.');
            return;
        }
        setEducationDetails(formData);
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        setEducationDetails(''); // Reset the education details
    };

    return (
        <div className="relative">
            <div className="group">
                <h1 className='text-4xl font-bold border-b-2 border-black pb-2'>
                    Education
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        />
                    
                    </span>
                </h1>
                <p className='pt-2'>{educationDetails}</p>
            </div>

            {/* Modal for editing */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex">
                        <div className="w-full">
                            <h2 className="text-2xl font-bold mb-4">Edit Education Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <textarea
                                    value={formData}
                                    onChange={handleChange}
                                    rows={4}
                                    className="border p-2 w-full rounded"
                                    placeholder="Enter your education details here..."
                                />
                                {error && <p className="text-red-500">{error}</p>}
                                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 text-white text-xl"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
};

export default Education;
