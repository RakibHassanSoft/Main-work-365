import React, { useState } from 'react';
import ChildCom from './ChildCom';
import { AiFillPlusCircle } from 'react-icons/ai';

const ParentCom = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Sam Green', email: 'sam@example.com', phone: '456-789-1234' },
  ]);

  const updateValue = (id, newData) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = () => {
    const newItem = {
      id: items.length + 1, // Simple ID generation based on length
      name: 'Skaib',
      email: 'asdas@gmail.com',
      phone: '2423534643',
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    e.currentTarget.style.opacity = '0.5'; // Slightly fade the item being dragged
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1'; // Reset the opacity after drag
  };

  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData('text/plain');
    const updatedItems = [...items];
    const [removed] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(index, 0, removed);
    setItems(updatedItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div className="border-2 bg-green-200 p-4">
 
      <button
        onClick={addItem}
        className="flex items-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mb-4"
      >
        <AiFillPlusCircle className="mr-2" />
        Add Child
      </button>
      <hr />
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className=""
        >
          <ChildCom
            chileHandler={updateValue}
            removeHandler={removeItem}
            initialData={{ name: item.name, email: item.email, phone: item.phone }}
            itemId={item.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ParentCom;
