import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // FontAwesome edit icon for hover

const ResumeTitle = (props) => {
    // Destructure props
    const { name, phone, email, city, state } = props.tiledata;
    const { setName, setPhone, setEmail, setCity, setState } = props.tileFunction;
   console.log({ name, phone, email, city, state })
    console.log({ setName, setPhone, setEmail, setCity, setState } )
    // Modal open state
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="relative">
            {/* Title and contact information with hover effect */}
            <div className="group">
                <h1 className='text-4xl font-bold border-b-2 border-black pb-2'>
                    {name}
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit 
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)} // Open modal
                        />
                    </span>
                </h1>
                <p className='pt-2'>
                    {phone} | {email} | {city} | {state}
                </p>
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

                        {/* Right: Instructions */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <ul className="list-disc list-inside text-gray-700">
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
