import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsForm = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([
        {
            name: '',
            features: '',
            technology: '',
            githubLink: '',
            liveLink: '',
        },
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProjects = [...projects];
        updatedProjects[index][name] = value;
        setProjects(updatedProjects);
    };

    const handleAddProject = () => {
        setProjects([...projects, { name: '', features: '', technology: '', githubLink: '', liveLink: '' }]);
    };

    const handleRemoveProject = (index) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Projects submitted:', projects);
        navigate('/Education-form'); // Change this to your desired navigation path
    };

    const handleSkip = () => {
        navigate('/Education-form'); // Change this to your desired navigation path for skipping
    };

    return (
        <div className="flex flex-col max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Projects</h2>
                
                {/* Tips Section */}
                <div className="mb-6 p-4 border-l-4 border-green-600 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800">Tips:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Provide a clear and descriptive project name.</li>
                        <li>Highlight the top features that make your project unique.</li>
                        <li>List the technologies used to build your project.</li>
                        <li>Include GitHub and live links to showcase your work.</li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit}>
                    {projects.map((project, index) => (
                        <div key={index} className="mb-6 p-6 border border-gray-300 rounded-lg shadow-sm bg-white transition-transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Project {index + 1}</h3>
                            <button
                                type="button"
                                className="text-red-500 hover:text-red-600 mb-2"
                                onClick={() => handleRemoveProject(index)}
                            >
                                Remove Project
                            </button>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={project.name}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Enter project name"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Top Features</label>
                                <textarea
                                    name="features"
                                    value={project.features}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Enter top features"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                                    rows="3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Technology</label>
                                <input
                                    type="text"
                                    name="technology"
                                    value={project.technology}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Enter technology used"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Link</label>
                                <input
                                    type="url"
                                    name="githubLink"
                                    value={project.githubLink}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Enter GitHub link"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Live Link</label>
                                <input
                                    type="url"
                                    name="liveLink"
                                    value={project.liveLink}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Enter live link"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition mb-4"
                        onClick={handleAddProject}
                    >
                        Add Another Project
                    </button>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-400 transition mr-2"
                            onClick={handleSkip}
                        >
                            Skip
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                        >
                            Submit Projects
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectsForm;
