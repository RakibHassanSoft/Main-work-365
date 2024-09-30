import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // FontAwesome edit icon

const Summary = ({ summary, setSummary }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(summary); // Initialize with summary from props
    const [error, setError] = useState('');
    const [textAlign, setTextAlign] = useState('text-left'); // State to manage text alignment
    const [textSize, setTextSize] = useState('text-base'); // State to manage text size

    const handleChange = (e) => {
        const value = e.target.value;
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

        if (wordCount <= 100) {
            setFormData(value);
            setError('');
        } else {
            setError('Summary cannot exceed 100 words.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) return;
        setSummary(formData);
        setIsModalOpen(false);
    };

    // Function to format text
    const formatText = (format) => {
        const textarea = document.getElementById('summary-textarea');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        
        let formattedText;
        switch (format) {
            case 'bold':
                formattedText = `**${selectedText}**`; // Markdown for bold
                break;
            case 'italic':
                formattedText = `*${selectedText}*`; // Markdown for italic
                break;
            case 'underline':
                formattedText = `__${selectedText}__`; // Markdown for underline
                break;
            default:
                return;
        }

        // Set the new value
        setFormData(prev => 
            prev.substring(0, start) + formattedText + prev.substring(end)
        );

        // Move the cursor to the end of the newly inserted text
        textarea.focus();
        textarea.setSelectionRange(start, start + formattedText.length);
    };

    return (
        <div className="relative border-b-2 border-black">
            <div
                className="group"
                onDoubleClick={() => setIsModalOpen(true)}
            >
                <h1 className='text-4xl font-bold pb-2'>
                    Summary
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaEdit
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </span>
                </h1>
                <p className={`pt-2 ${textAlign} ${textSize}`}>{formData}</p>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex">
                        <div className="w-1/2 pr-4">
                            <h2 className="text-2xl font-bold mb-4">Edit Summary</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex space-x-2 mb-4">
                                    <button type="button" onClick={() => formatText('bold')} className="bg-gray-200 px-3 py-1 rounded">Bold</button>
                                    <button type="button" onClick={() => formatText('italic')} className="bg-gray-200 px-3 py-1 rounded">Italic</button>
                                    <button type="button" onClick={() => formatText('underline')} className="bg-gray-200 px-3 py-1 rounded">Underline</button>
                                </div>
                                <textarea
                                    id="summary-textarea"
                                    value={formData}
                                    onChange={handleChange}
                                    rows={4}
                                    className="border p-2 w-full rounded"
                                    placeholder="Write your summary here..."
                                />
                                {error && <p className="text-red-500">{error}</p>}
                                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded" disabled={!!error}>
                                    Save
                                </button>
                            </form>
                        </div>

                        {/* Options for text alignment and size */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-4">Options</h2>
                            <div className="flex flex-col space-y-4">
                                {/* Text Alignment */}
                                <div>
                                    <label className="block font-semibold">Text Alignment:</label>
                                    <select
                                        value={textAlign}
                                        onChange={(e) => setTextAlign(e.target.value)}
                                        className="border p-2 rounded w-full"
                                    >
                                        <option value="text-left">Left</option>
                                        <option value="text-center">Center</option>
                                        <option value="text-right">Right</option>
                                    </select>
                                </div>

                                {/* Text Size */}
                                <div>
                                    <label className="block font-semibold">Text Size:</label>
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
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="w-1/2 pl-4 border-l">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Summarize your professional experience concisely.</li>
                                <li>Highlight your key skills and achievements.</li>
                                <li>Keep the language professional and clear.</li>
                                <li>Ensure there are no spelling or grammatical errors.</li>
                                <li>Click "Save" to update your summary.</li>
                                <li>Summary cannot exceed 100 words.</li>
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

export default Summary;
