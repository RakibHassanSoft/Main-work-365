import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const Certificates = ({ certificates = [], setCertificates }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(certificates); // Initialize with certificates from props
    const [error, setError] = useState('');

    const [textAlign, setTextAlign] = useState('left');
    const [fontSize, setFontSize] = useState('md');
    const [listType, setListType] = useState('none');

    const handleChange = (index, value) => {
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
        if (wordCount <= 100) {
            const updatedCertificates = [...formData];
            updatedCertificates[index] = value;
            setFormData(updatedCertificates);
            setError('');
        } else {
            setError('Certificate description cannot exceed 100 words.');
        }
    };

    const handleAddCertificate = () => {
        setFormData([...formData, '']); // Add a new empty certificate
    };

    const handleDeleteCertificate = (index) => {
        const updatedCertificates = formData.filter((_, i) => i !== index);
        setFormData(updatedCertificates);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) return;
        setCertificates(formData);
        setIsModalOpen(false);
    };

    return (
        <div className="relative">
            <div className="group" onDoubleClick={() => setIsModalOpen(true)}>
                <h1 className='text-4xl font-bold border-b-2 border-black pb-2'>
                    Certificates
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </span>
                </h1>
                {(certificates && certificates.length > 0) ? (
                    certificates.map((certificate, index) => (
                        <p key={index} className='pt-2'>{certificate}</p>
                    ))
                ) : (
                    <p>No certificates available.</p>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex">
                        <div className="w-1/2 pr-4">
                            <h2 className="text-2xl font-bold mb-4">Edit Certificates</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {formData.map((certificate, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <div
                                            contentEditable
                                            onInput={(e) => handleChange(index, e.currentTarget.innerText)}
                                            className="editable-div border p-2 w-full rounded min-h-[100px]"
                                            placeholder="Write your certificate here..."
                                            dangerouslySetInnerHTML={{ __html: certificate }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteCertificate(index)}
                                            className="bg-red-500 text-white px-2 rounded mt-1"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                                {error && <p className="text-red-500">{error}</p>}
                                <button
                                    type="button"
                                    onClick={handleAddCertificate}
                                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                                >
                                    Add Certificate
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded ml-4"
                                    disabled={!!error}
                                >
                                    Save
                                </button>
                            </form>
                        </div>

                        {/* Right Side for Instructions */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Summarize each certificate clearly and concisely.</li>
                                <li>Each certificate description should be kept under 100 words.</li>
                                <li>Make sure there are no spelling or grammatical errors.</li>
                                <li>You can add or delete certificates as necessary.</li>
                                <li>Click "Save" to update your certificates.</li>
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

export default Certificates;
