import React, { useState } from 'react';

// Modal component for editing an existing project
const ProjectModal = ({ project, onClose, onUpdate }) => {
    const [name, setName] = useState(project.name);
    const [details, setDetails] = useState(project.details);
    const [links, setLinks] = useState(project.links.map(link => ({ ...link })));

    const handleAddLink = () => {
        setLinks([...links, { label: '', url: '' }]);
    };

    const handleLinkChange = (index, field, value) => {
        const newLinks = [...links];
        newLinks[index] = { ...newLinks[index], [field]: value };
        setLinks(newLinks);
    };

    const handleSubmit = () => {
        const updatedProject = { ...project, name, details, links };
        onUpdate(updatedProject);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-2/3 max-w-3xl p-6 rounded-md shadow-lg flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
                <div className="mb-4">
                    <label className="block mb-1">Project Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-md w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Project Details:</label>
                    <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="border rounded-md w-full p-2"
                    />
                </div>

                {/* Links Section */}
                <h2 className="text-xl font-bold mb-4">Links</h2>
                {links.map((link, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            placeholder="Link Label"
                            value={link.label}
                            onChange={(e) => handleLinkChange(index, 'label', e.target.value)}
                            className="border rounded-md w-1/2 p-2 mr-2"
                        />
                        <input
                            type="text"
                            placeholder="Link URL"
                            value={link.url}
                            onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                            className="border rounded-md w-1/2 p-2"
                        />
                    </div>
                ))}
                <button
                    onClick={handleAddLink}
                    className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2"
                >
                    Add Link
                </button>

                {/* Close button and Submit button for modal */}
                <div className="flex justify-between mt-4">
                    <button onClick={onClose} className="text-gray-700">✕ Close</button>
                    <button onClick={handleSubmit} className="bg-green-500 text-white rounded-md px-4 py-2">Update</button>
                </div>
            </div>
        </div>
    );
};


export default ProjectModal;