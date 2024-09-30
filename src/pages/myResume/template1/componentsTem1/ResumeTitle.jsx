import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // FontAwesome edit icon for hover

const ResumeTitle = (props) => {
    // Destructure props
    const { name, phone, email, city, state } = props.tiledata;
    const { setName, setPhone, setEmail, setCity, setState } = props.tileFunction;

    // Modal open state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [layout, setLayout] = useState('vertical'); // vertical or horizontal layout
    const [textSize, setTextSize] = useState('text-base'); // State to manage text size
    const [textAlign, setTextAlign] = useState('text-left'); // State to manage text alignment
    const [isHovered, setIsHovered] = useState(false); // State for hover effect
    const [isBold, setIsBold] = useState(false); // State for bold text
    const [isItalic, setIsItalic] = useState(false); // State for italic text
    const [isUnderline, setIsUnderline] = useState(false); // State for underline text

    // Form state initialized with current props values
    const [formData, setFormData] = useState({
        name: name || '',
        phone: phone || '',
        email: email || '',
        city: city || '',
        state: state || '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Update parent component state with form data
        setName(formData.name);
        setPhone(formData.phone);
        setEmail(formData.email);
        setCity(formData.city);
        setState(formData.state);
        setIsModalOpen(false); // Close modal on save
    };

    return (
        <div className="relative border-b-2 border-black">
            {/* Title and contact information with hover effect */}
            <div
                className="group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} // Set hover state
            >
                <h1 className={`text-4xl font-bold  pb-2 ${textAlign} ${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''}`}>
                    {name}
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)} // Open modal
                        />
                    </span>
                </h1>

                <div className={`pt-2 ${textSize} ${textAlign}`}>
                
                    {/* Render contact information based on layout */}
                    {layout === 'vertical' ? (
                        <div>
                            <p>{phone}</p>
                            <p>{email}</p>
                            <p>{city}, {state}</p>
                        </div>
                    ) : (
                        <div className="flex space-x-4">
                            <p>{phone}</p>
                            <p>{email}</p>
                            <p>{city}, {state}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex">
                        {/* Left: Form */}
                        <div className="w-1/2 pr-4">
                            <h2 className="text-2xl font-bold mb-4">Edit Information</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/** Form Fields */}
                                {Object.entries(formData).map(([key, value]) => (
                                    <div key={key}>
                                        <label className="block font-semibold capitalize">{key}:</label>
                                        <input
                                            type={key === 'email' ? 'email' : 'text'} // Set type based on key
                                            name={key}
                                            value={value}
                                            onChange={handleChange}
                                            className="border p-2 w-full rounded"
                                        />

                                    </div>

                                ))}
                                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                                    Save
                                </button>
                            </form>
                        </div>

                        {/* Right: Text Formatting Options */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-6">Text Formatting Options</h2>

                            {/* Layout, Text Size, and Text Alignment Options */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Choose Layout:</h3>
                                <select
                                    value={layout}
                                    onChange={(e) => setLayout(e.target.value)}
                                    className="border p-2 rounded w-full"
                                >
                                    <option value="vertical">Vertical Layout</option>
                                    <option value="horizontal">Horizontal Layout</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Text Size:</h3>
                                <select
                                    value={textSize}
                                    onChange={(e) => setTextSize(e.target.value)}
                                    className="border p-2 rounded w-full"
                                >
                                    <option value="text-sm">Small</option>
                                    <option value="text-base">Medium</option>
                                    <option value="text-lg">Large</option>
                                    <option value="text-xl">Extra Large</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold mb-2">Text Alignment:</h3>
                                <select
                                    value={textAlign}
                                    onChange={(e) => setTextAlign(e.target.value)}
                                    className="border p-2 rounded w-full"
                                >
                                    <option value="text-left">Left Align</option>
                                    <option value="text-center">Center Align</option>
                                    <option value="text-right">Right Align</option>
                                </select>
                            </div>

                            {/* Text Formatting Buttons */}
                            <h3 className="font-semibold mb-2">Text Formatting:</h3>
                            <div className="flex space-x-4 mb-6">
                                <button
                                    onClick={() => setIsBold(!isBold)}
                                    className={`border p-2 rounded ${isBold ? 'bg-green-500 text-white' : 'bg-white'}`}
                                >
                                    {isBold ? 'Unbold' : 'Bold'}
                                </button>
                                <button
                                    onClick={() => setIsItalic(!isItalic)}
                                    className={`border p-2 rounded ${isItalic ? 'bg-green-500 text-white' : 'bg-white'}`}
                                >
                                    {isItalic ? 'Remove Italic' : 'Italic'}
                                </button>
                                <button
                                    onClick={() => setIsUnderline(!isUnderline)}
                                    className={`border p-2 rounded ${isUnderline ? 'bg-green-500 text-white' : 'bg-white'}`}
                                >
                                    {isUnderline ? 'Remove Underline' : 'Underline'}
                                </button>
                            </div>

                            {/* Instructions Section */}
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Ensure that your name is spelled correctly.</li>
                                <li>Enter a valid phone number.</li>
                                <li>Use a professional email address.</li>
                                <li>City and state should match your current location.</li>
                                <li>Click "Save" to update your information.</li>
                            </ul>
                        </div>

                    </div>
                    {/* Close button */}
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

export default ResumeTitle;
