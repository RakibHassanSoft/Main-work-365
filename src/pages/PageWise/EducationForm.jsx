import React, { useState } from 'react';
import { FaRegLightbulb, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EducationForm = () => {
    const navigate = useNavigate();
    const [educationList, setEducationList] = useState([
        { degree: '', university: '', graduationYear: '' }
    ]);
    const [errors, setErrors] = useState({});

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newEducationList = [...educationList];
        newEducationList[index][name] = value;
        setEducationList(newEducationList);
        if (errors[index]?.[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [index]: { ...prevErrors[index], [name]: '' }
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        educationList.forEach((entry, index) => {
            const entryErrors = {};
            if (!entry.degree) entryErrors.degree = 'Degree is required';
            if (!entry.university) entryErrors.university = 'University is required';
            if (!entry.graduationYear) entryErrors.graduationYear = 'Graduation Year is required';
            if (Object.keys(entryErrors).length) newErrors[index] = entryErrors;
        });
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            console.log('Education submitted successfully:', educationList);
            navigate('/Languages-form');
        }
    };

    const addEducationEntry = () => {
        setEducationList([...educationList, { degree: '', university: '', graduationYear: '' }]);
    };

    const removeEducationEntry = (index) => {
        const newEducationList = educationList.filter((_, i) => i !== index);
        setEducationList(newEducationList);
    };

    return (
        <div className="flex flex-row max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Education Information</h2>
                <form onSubmit={handleSubmit}>
                    {educationList.map((entry, index) => (
                        <div key={index} className="mb-4 border p-4 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Entry {index + 1}</h3>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Degree
                            </label>
                            <input
                                type="text"
                                name="degree"
                                value={entry.degree}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="e.g. Bachelor of Science"
                                className={`mt-1 block w-full border ${
                                    errors[index]?.degree ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                aria-label="Your Degree"
                            />
                            {errors[index]?.degree && <p className="text-red-500 text-sm mt-1">{errors[index].degree}</p>}
                            
                            <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                                University Name
                            </label>
                            <input
                                type="text"
                                name="university"
                                value={entry.university}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="e.g. Harvard University"
                                className={`mt-1 block w-full border ${
                                    errors[index]?.university ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                aria-label="University Name"
                            />
                            {errors[index]?.university && <p className="text-red-500 text-sm mt-1">{errors[index].university}</p>}
                            
                            <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                                Graduation Year
                            </label>
                            <input
                                type="text"
                                name="graduationYear"
                                value={entry.graduationYear}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="e.g. 2024"
                                className={`mt-1 block w-full border ${
                                    errors[index]?.graduationYear ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                aria-label="Graduation Year"
                            />
                            {errors[index]?.graduationYear && <p className="text-red-500 text-sm mt-1">{errors[index].graduationYear}</p>}
                            
                            <button
                                type="button"
                                className="mt-3 text-red-500 hover:underline"
                                onClick={() => removeEducationEntry(index)}
                            >
                                Remove Entry
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addEducationEntry}
                        className="mb-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Add Another Entry
                    </button>
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
                    <FaGraduationCap className="text-green-600 mr-2" /> Tips for Filling Out the Form
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Your Degree:</strong> Enter the full name of your degree, e.g., Bachelor of Science.</p>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>University Name:</strong> Provide the complete name of your university.</p>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Graduation Year:</strong> Specify the year you graduated or expect to graduate.</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Make sure all information is accurate to ensure proper validation and processing.
                </p>
            </div>
        </div>
    );
};

export default EducationForm;
