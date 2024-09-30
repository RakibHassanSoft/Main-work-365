import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CareerObjectiveForm = () => {
    const navigate = useNavigate();
    const [objective, setObjective] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setObjective(e.target.value);
        if (error) {
            setError(''); // Clear error on input change
        }
    };

    const validate = () => {
        if (!objective) {
            return 'Career objective is required.';
        }
        if (objective.length < 20) {
            return 'Career objective should be at least 20 characters.';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError);
        } else {
            console.log('Career Objective submitted:', objective);
            navigate('/skills-form'); // Navigate to Skills Form page
        }
    };

    return (
        <div className="flex flex-row gap-2 max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Career Objective</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Career Objective</label>
                        <textarea
                            name="objective"
                            value={objective}
                            onChange={handleChange}
                            required
                            placeholder="Write a concise paragraph describing your career goals and how you aim to contribute to a company."
                            className={`mt-1 block w-full border ${
                                error ? 'border-red-500' : 'border-gray-300'
                            } rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200`}
                            rows="5"
                            aria-label="Career Objective"
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Tips Section */}
            <div className=" w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-700">
                    <span className="text-green-500 mr-2">💡</span> Tips for Crafting Your Career Objective
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✅</span>
                        <p><strong>Be Concise:</strong> Aim for 2-3 sentences that summarize your goals.</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✅</span>
                        <p><strong>Be Specific:</strong> Mention the role and industry you’re targeting.</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✅</span>
                        <p><strong>Show Value:</strong> Highlight how you can contribute to the company.</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✅</span>
                        <p><strong>Be Authentic:</strong> Ensure it reflects your genuine aspirations.</p>
                    </div>
                </div>
                <p className="mt-4">
                    Tailor your objective to each application to make it more impactful.
                </p>
            </div>
        </div>
    );
};

export default CareerObjectiveForm;
