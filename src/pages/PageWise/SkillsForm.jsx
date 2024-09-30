import React, { useState } from 'react';
import { FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie Player

// If you're using a local file stored in the public folder, adjust the path
import skillAnimation from '../../../public/skill-animation.json';

const SkillsForm = () => {
    const navigate = useNavigate(); 
    const [skills, setSkills] = useState('');
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        setSkills(e.target.value);
        if (errors) {
            setErrors('');
        }
    };

    const validate = () => {
        if (!skills) return 'Skills are required';
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setErrors(validationError);
        } else {
            console.log('Skills submitted successfully:', skills);
            navigate('/peronal-project'); 
        }
    };

    return (
        <div className="flex flex-row gap-2 max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Skills</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Enter Your Skills (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={skills}
                            onChange={handleChange}
                            required
                            placeholder="JavaScript, React, Node.js, Express, MongoDB"
                            className={`mt-1 block w-full border ${
                                errors ? 'border-red-500' : 'border-gray-300'
                            } rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200`}
                            aria-label="Skills"
                        />
                        {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Next
                    </button>
                </form>
            </div>

            {/* Tips Section with Lottie Animation */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-700">
                    <FaRegLightbulb className="text-green-500 mr-2" /> Tips for Filling Out the Skills
                </h2>

                {/* Lottie Animation */}
                <Player
                    autoplay
                    loop
                    src={skillAnimation} // You can also use a URL like 'https://assets.lottiefiles.com/packages/lf20_jcikwtux.json'
                    className="w-48 h-48 mb-4"
                />

                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                        <p><strong>Skills:</strong> List your skills separated by commas.</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-700">
                    Ensure to include all relevant skills that showcase your expertise.
                </p>
            </div>
        </div>
    );
};

export default SkillsForm;
