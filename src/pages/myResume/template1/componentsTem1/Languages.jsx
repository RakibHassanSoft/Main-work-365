import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // FontAwesome edit icon

const Languages = ({ languages, setLanguages }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState([...languages]); // Initialize with languages from props
    const [textAlign, setTextAlign] = useState('left'); // Default alignment
    const [fontSize, setFontSize] = useState('md'); // Default font size
    const [listType, setListType] = useState('none'); // Default list type

    const handleChange = (index, value) => {
        const newLanguages = [...formData];
        newLanguages[index] = value;
        setFormData(newLanguages);
    };

    const handleAddLanguage = () => {
        setFormData([...formData, '']); // Add a new empty input field
    };

    const handleRemoveLanguage = (index) => {
        const newLanguages = formData.filter((_, i) => i !== index);
        setFormData(newLanguages);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLanguages(formData);
        setIsModalOpen(false);
    };

    const renderLanguages = () => {
        if (listType === 'unordered') {
            return (
                <ul className={`list-disc list-inside pt-2 text-${textAlign} text-${fontSize}`}>
                    {formData.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))}
                </ul>
            );
        } else if (listType === 'ordered') {
            return (
                <ol className={`list-decimal list-inside pt-2 text-${textAlign} text-${fontSize}`}>
                    {formData.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))}
                </ol>
            );
        } else {
            return formData.map((lang, index) => (
                <p key={index} className={`pt-2 text-${textAlign} text-${fontSize}`}>
                    {lang}
                </p>
            ));
        }
    };

    return (
        <div className="relative">
            <div
                className="group"
                onDoubleClick={() => setIsModalOpen(true)}
            >
                <h1 className='text-4xl font-bold border-b-2 border-black pb-2'>
                    Languages
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </span>
                </h1>
                {renderLanguages()}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Edit Languages</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {formData.map((lang, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <input
                                        value={lang}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        className="border p-2 w-full rounded"
                                        placeholder="Enter a language"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveLanguage(index)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddLanguage}
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Add Language
                            </button>

                            {/* Text Formatting Controls */}
                            <div className="flex space-x-2 mt-4">
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

                            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                                Save
                            </button>
                        </form>
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

export default Languages;
