import React, { useState } from 'react';
import { AiFillEdit, AiFillCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';

// Modal Styling
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  },
};

const ChildCom = ({ chileHandler, removeHandler, initialData, itemId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState(initialData);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
    };
    setInputData(newData);
    chileHandler(itemId, newData);
    closeModal();
  };

  return (
    <div
      className={`relative bg-gray-100 h-44 shadow border-b-4 border-dashed p-5 flex items-center justify-between transition-transform duration-200 ${isHovered ? 'scale-95' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <span className="text-xl">{inputData.name}</span><br />
        <span className="text-sm">{inputData.email}</span><br />
        <span className="text-sm">{inputData.phone}</span>
      </div>
      <div>
        {isHovered && (
          <>
           <div className='flex gap-8'>
           <AiFillEdit className="text-green-500 cursor-pointer" size={24} onClick={openModal} />
           <AiFillCloseCircle className="text-red-500 cursor-pointer ml-2" size={24} onClick={() => removeHandler(itemId)} />
           </div>
          </>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Value Modal"
        ariaHideApp={false}
      >
        <h2>Edit Value</h2>
        <form onSubmit={handleSubmit}>
          <input className="border-b border-gray-300 py-2 px-4 mb-3 w-full focus:outline-none focus:border-green-500" type="text" name="name" defaultValue={inputData.name} required />
          <input className="border-b border-gray-300 py-2 px-4 mb-3 w-full focus:outline-none focus:border-green-500" type="email" name="email" defaultValue={inputData.email} required />
          <input className="border-b border-gray-300 py-2 px-4 mb-3 w-full focus:outline-none focus:border-green-500" type="tel" name="phone" defaultValue={inputData.phone} required />
          <input type="submit" value="Save" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200" />
        </form>
        <button onClick={closeModal} className="text-red-500 mt-3">Close</button>
      </Modal>
    </div>
  );
};

export default ChildCom;
