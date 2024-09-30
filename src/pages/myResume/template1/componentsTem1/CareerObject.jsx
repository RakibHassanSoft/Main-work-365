import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons for edit and delete

const CareerObject = ({ careerObjective, setCareerObjective }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(careerObjective);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

        if (wordCount <= 50) {
            setFormData(value);
            setError('');
        } else {
            setError('Career objective cannot exceed 50 words.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) return;
        setCareerObjective(formData);
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        setCareerObjective(''); // Reset the career objective
    };

    return (
        <div className="relative">
            <div className="group">
                <h1 className='text-4xl font-bold border-b-2 border-black pb-2'>
                    Career Objective
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        />
                
                    </span>
                </h1>
                <p className='pt-2'>{careerObjective}</p>
            </div>

            {/* Modal for editing */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex">
                        <div className="w-1/2 pr-4">
                            <h2 className="text-2xl font-bold mb-4">Edit Career Objective</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <textarea
                                    value={formData}
                                    onChange={handleChange}
                                    rows={4}
                                    className="border p-2 w-full rounded"
                                    placeholder="Write your career objective here..."
                                />
                                {error && <p className="text-red-500">{error}</p>}
                                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded" disabled={!!error}>
                                    Save
                                </button>
                            </form>
                        </div>

                        {/* Instructions for filling out career objective */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Clearly state your career goals and aspirations.</li>
                                <li>Keep it concise and relevant to your desired role.</li>
                                <li>Use professional language and avoid jargon.</li>
                                <li>Ensure it reflects your skills and experiences.</li>
                                <li>Career objective cannot exceed 50 words.</li>
                            </ul>
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

export default CareerObject;
