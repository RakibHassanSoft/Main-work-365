import React, { memo, useState } from 'react';


const ProjectItem = memo(({ project, onOpen, onEdit, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex justify-between items-start border-b border-gray-300 py-4 cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-2/3 pr-4" onClick={() => onOpen(project)}>
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-gray-600">{project.details}</p>
            </div>

            <div className="w-1/3 flex justify-end">
                {project.links.length > 0 ? (
                    <div className="space-x-2">
                        {project.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                {link.label} <span className="text-gray-500 text-sm">(external)</span>
                            </a>
                        ))}
                    </div>
                ) : (
                    <span className="text-gray-400">No Links Available</span>
                )}
            </div>

            {isHovered && (
                <div className="absolute right-0 flex space-x-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(project); // Call the edit function
                        }}
                        className="bg-yellow-500 text-white rounded-md px-2 py-1"
                    >
                        Edit
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(project.id); // Call the delete function
                        }}
                        className="bg-red-500 text-white rounded-md px-2 py-1"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
});


export default ProjectItem;
