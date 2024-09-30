import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // FontAwesome edit icon

const Awards = ({ awards, setAwards }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(awards); // Initialize with awards from props
    const [textAlign, setTextAlign] = useState('left'); // Default alignment
    const [fontSize, setFontSize] = useState('md'); // Default font size
    const [listType, setListType] = useState('none'); // Default list type

    const handleChange = (index, value) => {
        const updatedAwards = [...formData];
        updatedAwards[index] = value;
        setFormData(updatedAwards);
    };

    const handleDeleteAward = (index) => {
        const updatedAwards = formData.filter((_, i) => i !== index);
        setFormData(updatedAwards);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAwards(formData);
        setIsModalOpen(false);
    };

    const handleAddAward = () => {
        setFormData([...formData, '']); // Add a new empty award
    };

    const renderAwards = () => {
        if (listType === 'unordered') {
            return (
                <ul className={`list-disc list-inside pt-2 text-${textAlign} text-${fontSize}`}>
                    {formData.map((award, index) => (
                        <li key={index}>{award}</li>
                    ))}
                </ul>
            );
        } else if (listType === 'ordered') {
            return (
                <ol className={`list-decimal list-inside pt-2 text-${textAlign} text-${fontSize}`}>
                    {formData.map((award, index) => (
                        <li key={index}>{award}</li>
                    ))}
                </ol>
            );
        } else {
            return formData.map((award, index) => (
                <p key={index} className={`pt-2 text-${textAlign} text-${fontSize}`}>
                    {award}
                </p>
            ));
        }
    };

    return (
        <div className="relative">
            <div className="group" onDoubleClick={() => setIsModalOpen(true)}>
                <h1 className='text-4xl font-bold border-b-2 border-black pb-2'>
                    Awards
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </span>
                </h1>
                {renderAwards()}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex">
                        {/* Left Side for Form */}
                        <div className="w-1/2 pr-4">
                            <h2 className="text-2xl font-bold mb-4">Edit Awards</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {formData.map((award, index) => (
                                    <div key={index} className="flex flex-col mb-4">
                                        <textarea
                                            value={award}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            placeholder="Award Title"
                                            className="border p-2 w-full rounded"
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddAward}
                                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                                >
                                    Add Award
                                </button>

                                {/* Text Formatting Controls */}
                                <div className="grid grid-2 gap-3 space-x-2 mt-4">
                                    <select 
                                        value={textAlign}
                                        onChange={(e) => setTextAlign(e.target.value)} 
                                        className="border p-2 rounded">
                                        <option value="left">Left</option>
                                        <option value="center">Center</option>
                                        <option value="right">Right</option>
                                    </select>
                                    <select 
                                        value={fontSize}
                                        onChange={(e) => setFontSize(e.target.value)} 
                                        className="border p-2 rounded">
                                        <option value="sm">Small</option>
                                        <option value="md">Medium</option>
                                        <option value="lg">Large</option>
                                        <option value="xl">Extra Large</option>
                                    </select>
                                    <button 
                                        type="button" 
                                        onClick={() => setListType('unordered')} 
                                        className={`border p-2 rounded ${listType === 'unordered' ? 'bg-blue-500 text-white' : ''}`}>
                                        Unordered List
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setListType('ordered')} 
                                        className={`border p-2 rounded ${listType === 'ordered' ? 'bg-blue-500 text-white' : ''}`}>
                                        Ordered List
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setListType('none')} 
                                        className={`border p-2 rounded ${listType === 'none' ? 'bg-blue-500 text-white' : ''}`}>
                                        Plain Text
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded ml-4 mt-4"
                                >
                                    Save
                                </button>
                            </form>
                        </div>

                        {/* Right Side for Instructions */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>List all your notable awards and recognitions.</li>
                                <li>Be concise and clear in the title.</li>
                                <li>Ensure there are no spelling or grammatical errors.</li>
                                <li>You can add or delete awards as needed.</li>
                                <li>Click "Save" to update your awards.</li>
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

export default Awards;
