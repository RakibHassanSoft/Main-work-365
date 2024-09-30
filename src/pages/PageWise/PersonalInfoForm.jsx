import React, { useState } from 'react';
import { FaRegLightbulb, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PersonalInfoForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        linkedin: '',
        github: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.linkedin) newErrors.linkedin = 'LinkedIn URL is required';
        if (!formData.github) newErrors.github = 'GitHub URL is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted successfully:', formData);
            navigate('/career-objective-form');
            
        }
    };

    return (
        <div className="flex flex-row gap-2 max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-1/2 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Personal Information</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div className="mb-4" key={key}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            <input
                                type={key === 'phone' ? 'tel' : 'text'}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                required
                                placeholder={key === 'phone' ? '(123) 456-7890' : `your.${key}@example.com`}
                                className={`mt-1 block w-full border ${
                                    errors[key] ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                            {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200 transform hover:scale-105"
                    >
                        Next
                    </button>
                </form>
            </div>

            {/* Tips Section */}
            <div className="w-1/2 p-6 ml-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                    <FaRegLightbulb className="text-green-600 mr-2" /> Tips for Filling Out the Form
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Name:</strong> Enter your full name as it appears on official documents.</p>
                    </div>
                    <div className="flex items-start">
                        <FaPhoneAlt className="text-green-600 mr-2 mt-1" />
                        <p><strong>Phone:</strong> Provide a valid phone number. Format: (123) 456-7890.</p>
                    </div>
                    <div className="flex items-start">
                        <FaEnvelope className="text-green-600 mr-2 mt-1" />
                        <p><strong>Email:</strong> Use a professional email address that you check regularly.</p>
                    </div>
                    <div className="flex items-start">
                        <FaLinkedin className="text-green-600 mr-2 mt-1" />
                        <p><strong>LinkedIn:</strong> Include the full URL to your LinkedIn profile.</p>
                    </div>
                    <div className="flex items-start">
                        <FaGithub className="text-green-600 mr-2 mt-1" />
                        <p><strong>GitHub:</strong> Share your GitHub profile link to showcase your projects.</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Ensure all fields are completed accurately to avoid delays in processing your information.
                </p>
            </div>
        </div>
    );
};

export default PersonalInfoForm;
