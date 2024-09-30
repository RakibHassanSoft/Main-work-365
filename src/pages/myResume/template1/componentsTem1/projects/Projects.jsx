import React, { memo, useState } from 'react';
import ProjectsItem from './ProjectsItem';
import ProjectModal from './ProjectModal';
import AddProjectModal from './AddProjectModal';

const Projects = memo(({ projects, setProjects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    const handleOpen = (project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
        setShowAddModal(false);
    };

    const handleUpdate = (updatedProject) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )
        );
    };

    const handleAddProject = (newProject) => {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };

    const handleShowAddModal = () => {
        setShowAddModal(true);
    };

    return (
        <div 
            className="mt-10" 
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
            <h1 className="text-4xl font-bold border-b-2 border-black pb-2">Projects</h1>
            
            {/* Show Add Project button only on hover */}
            {isHovered && (
                <button 
                    onClick={handleShowAddModal} 
                    className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                >
                    Add New Project
                </button>
            )}

            <div className="space-y-4 mt-4">
                {projects.map((project) => (
                    <ProjectsItem 
                        key={project.id} 
                        project={project} 
                        onOpen={handleOpen} 
                    />
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
            {showAddModal && (
                <AddProjectModal
                    onClose={handleClose}
                    onAdd={handleAddProject}
                />
            )}
        </div>
    );
});

export default Projects;
