import React, { useState } from 'react';
import ResumeTitle from './componentsTem1/ResumeTitle';
import Summary from './componentsTem1/Summary';

const Template1 = () => {
    const [name, setName] = useState('Rahim Akter');
    const [phone, setPhone] = useState('03493223002');
    const [email, setEmail] = useState('kaskjf@gmail.com');
    const [city, setCity] = useState('Senson the Stone');
    const [state, setState] = useState('Denmark');
    const [summary, setSummary] = useState('Professional summary goes here...');

    // Function to get current tile data
    const getTileData = () => ({ name, phone, email, city, state });

    const tileFunction = { setName, setPhone, setEmail, setCity, setState };

    // Initial components array with different component types
    const [components, setComponents] = useState([
        { id: 1, type: 'resumeTitle', data: getTileData() },
        { id: 2, type: 'summary', data: { summary } },
        { id: 3, type: 'resumeTitle', data: getTileData() }
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
        <div className='w-11/12 m-auto'>
            <h1 className='text-center text-5xl font-mono'>My Resume</h1>
            <div className='shadow-xl border-2 w-11/12 m-auto p-10'>
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
                                tiledata={getTileData()} // Get the updated tile data here
                                tileFunction={tileFunction} 
                            />
                        )}
                        {component.type === 'summary' && (
                            <Summary 
                                summary={summary} 
                                setSummary={setSummary} 
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Template1;
