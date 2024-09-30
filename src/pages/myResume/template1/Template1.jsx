import React, { useState } from 'react';
import ResumeTitle from './componentsTem1/ResumeTitle';
import Summary from './componentsTem1/Summary';
import Awards from './componentsTem1/Awards';
import Projects from './componentsTem1/projects/Projects';
import Exprience from './componentsTem1/Exprience';
import Languages from './componentsTem1/Languages';
import Certificates from './componentsTem1/Certificates';
import CareerObject from './componentsTem1/CareerObject';
import Education from './componentsTem1/Education';
import Skills from './componentsTem1/Skills';

const Template1 = () => {
    const [contactInfo, setContactInfo] = useState({
        name: 'Rahim Akter',
        phone: '03493223002',
        email: 'kaskjf@gmail.com',
        city: 'Senson the Stone',
        state: 'Denmark'
    });
    const [summary, setSummary] = useState('Professional summary goes here...');
    const [exprience, setExperience] = useState('The exprience is very important ...');
    const [languages, setLanguages] = useState(['English', 'Spanish']);
    const [awards, setAwards] = useState(["Java", 'C']);
    const [certificates, setCertificates] = useState(["1. Data Handling"]);
    const [careerObjective, setCareerObjective] = useState('Your career objective goes here...');
    const [educationDetails, setEducationDetails] = useState('Your education details go here...');
    const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js']);
    const [projects, setProjects] = useState([
        {
            name: 'Project One',
            details: 'A brief description of project one.',
            links: [
                { label: 'Live Demo', url: 'https://example.com/project-one' },
                { label: 'GitHub', url: 'https://github.com/example/project-one' }
            ]
        }
    ]);

    const getTileData = () => contactInfo;

    const tileFunction = {
        setName: (name) => setContactInfo((prev) => ({ ...prev, name })),
        setPhone: (phone) => setContactInfo((prev) => ({ ...prev, phone })),
        setEmail: (email) => setContactInfo((prev) => ({ ...prev, email })),
        setCity: (city) => setContactInfo((prev) => ({ ...prev, city })),
        setState: (state) => setContactInfo((prev) => ({ ...prev, state })),
    };

    const [components, setComponents] = useState([
        { id: 1, type: 'resumeTitle', data: getTileData() },
        { id: 2, type: 'summary', data: { summary } },
        { id: 3, type: 'awards', data: { awards } },
        { id: 4, type: 'projects', data: { projects } },
        { id: 5, type: 'exprience', data: { exprience } },
        { id: 6, type: 'languages', data: { languages } },
        { id: 7, type: 'certificates', data: { certificates } },
        { id: 8, type: 'careerObject', data: { careerObjective } },
        { id: 9, type: 'education', data: { educationDetails } },
        { id: 10, type: 'skills', data: { skills } },
    ]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("draggedIndex", index);
    };

    const handleDrop = (e, index) => {
        const draggedIndex = e.dataTransfer.getData("draggedIndex");
        const newComponents = [...components];
        const draggedItem = newComponents[draggedIndex];

        newComponents.splice(draggedIndex, 1);
        newComponents.splice(index, 0, draggedItem);

        setComponents(newComponents);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className='m-auto'>
            <div className='shadow-xl border-2 m-auto p-10'>
                {components.map((component, index) => (
                    <div
                        key={component.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        {component.type === 'resumeTitle' && (
                            <ResumeTitle
                                tiledata={getTileData()}
                                tileFunction={tileFunction}
                            />
                        )}
                        {component.type === 'summary' && (
                            <Summary
                                summary={summary}
                                setSummary={setSummary}
                            />
                        )}
                        {component.type === 'awards' && (
                            <Awards
                                awards={awards}
                                setAwards={setAwards}
                            />
                        )}
                        {component.type === 'projects' && (
                            <Projects
                                projects={projects}
                                setProjects={setProjects}
                            />
                        )}
                        {component.type === 'exprience' && (
                            <Exprience
                                exprience={exprience}
                                setExperience={setExperience}
                            />
                        )}
                        {component.type === 'languages' && (
                            <Languages
                                languages={languages}
                                setLanguages={setLanguages}
                            />
                        )}
                        {component.type === 'certificates' && (
                            <Certificates
                                certificates={certificates}
                                setCertificates={setCertificates}
                            />
                        )}
                        {component.type === 'careerObject' && (
                            <CareerObject
                                careerObjective={careerObjective}
                                setCareerObjective={setCareerObjective}
                            />
                        )}
                        {component.type === 'education' && (
                            <Education
                                educationDetails={educationDetails}
                                setEducationDetails={setEducationDetails}
                            />
                        )}
                        {component.type === 'skills' && (
                            <Skills
                                skills={skills}
                                setSkills={setSkills}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Template1;
