import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div className="flex items-center mb-2">
            <input type="checkbox" checked={checked} onChange={onChange} className="mr-2" />
            <label className="text-lg">{label}</label>
        </div>
    );
};

export default Checkbox;
