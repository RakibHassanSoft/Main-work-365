import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // FontAwesome edit icon

const Skills = ({ skills, setSkills }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(skills); // Initialize with skills from props
    const [textSize, setTextSize] = useState('text-base'); // State to manage text size
    const [alignment, setAlignment] = useState('text-left'); // State to manage text alignment
    const [layout, setLayout] = useState('vertical'); // State for layout type (vertical/horizontal)
    const [listType, setListType] = useState('unordered'); // State for list type (ordered/unordered)

    const handleChange = (index, value) => {
        const updatedSkills = [...formData];
        updatedSkills[index] = value;
        setFormData(updatedSkills);
    };

    const handleDeleteSkill = (index) => {
        const updatedSkills = formData.filter((_, i) => i !== index);
        setFormData(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSkills(formData);
        setIsModalOpen(false);
    };

    const handleAddSkill = () => {
        setFormData([...formData, '']); // Add a new empty skill
    };

    return (
        <div className="relative">
            <div onDoubleClick={() => setIsModalOpen(true)}>
                <h1 className='text-4xl font-bold border-b-2 border-black pb-2'>
                    Skills
                    <span className="inline-block ml-2">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </span>
                </h1>

                {/* Render Skills based on layout and list type */}
                {listType === 'unordered' ? (
                    <ul className={`pt-2 ${alignment} ${textSize} ${layout === 'horizontal' ? 'flex' : ''}`}>
                        {formData.map((skill, index) => (
                            <li key={index} className={`py-1 ${layout === 'horizontal' ? 'mr-4' : ''}`}>
                                {layout === 'horizontal' ? `${skill}` : `- ${skill}`}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <ol className={`pt-2 ${alignment} ${textSize} ${layout === 'horizontal' ? 'flex' : ''}`}>
                        {formData.map((skill, index) => (
                            <li key={index} className={`py-1 ${layout === 'horizontal' ? 'mr-4' : ''}`}>
                                {skill}
                            </li>
                        ))}
                    </ol>
                )}
            </div>

            {/* Modal for editing skills */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex">
                        {/* Left Side for Form */}
                        <div className="w-1/2 pr-4">
                            <h2 className="text-2xl font-bold mb-4">Edit Skills</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {formData.map((skill, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value={skill}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            placeholder="Skill Name"
                                            className="border p-2 w-full rounded"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteSkill(index)}
                                            className="bg-red-500 text-white px-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddSkill}
                                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                                >
                                    Add Skill
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded ml-4"
                                >
                                    Save
                                </button>
                            </form>
                        </div>

                        {/* Right Side for Text Size, Alignment, Layout, and List Type Controls */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-4">Options</h2>
                            <div className="flex space-x-4 mb-4">
                                <select
                                    value={textSize}
                                    onChange={(e) => setTextSize(e.target.value)}
                                    className="border p-2 rounded"
                                >
                                    <option value="text-sm">Small</option>
                                    <option value="text-base">Medium</option>
                                    <option value="text-lg">Large</option>
                                    <option value="text-xl">Extra Large</option>
                                </select>

                                <select
                                    value={alignment}
                                    onChange={(e) => setAlignment(e.target.value)}
                                    className="border p-2 rounded"
                                >
                                    <option value="text-left">Left</option>
                                    <option value="text-center">Center</option>
                                    <option value="text-right">Right</option>
                                </select>
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <select
                                    value={layout}
                                    onChange={(e) => setLayout(e.target.value)}
                                    className="border p-2 rounded"
                                >
                                    <option value="vertical">Vertical</option>
                                    <option value="horizontal">Horizontal</option>
                                </select>

                                <select
                                    value={listType}
                                    onChange={(e) => setListType(e.target.value)}
                                    className="border p-2 rounded"
                                >
                                    <option value="unordered">Unordered</option>
                                    <option value="ordered">Ordered</option>
                                </select>
                            </div>
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

export default Skills;
