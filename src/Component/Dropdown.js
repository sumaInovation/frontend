import React, { useState, useEffect, useRef } from 'react';
import {DocumentReportIcon,DocumentTextIcon } from '@heroicons/react/solid'; // For solid icons
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className='bg-sky-500 rounded-lg p-3'>
        Production
      </button>

      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">
          <div className="flex items-center space-x-2 pt-3 ">
          <DocumentTextIcon className="h-6 w-6 text-blue-500"/>
  <span className="text-[17px] text-white">Monthly</span>
  </div>
          </li>
          <li className="dropdown-item">
          <div className="flex items-center space-x-2 pt-3 ">
          <DocumentReportIcon className="h-6 w-6 text-blue-500"/>
  <span className="text-[17px] text-white">Daily</span>
  </div>
          </li>
          
          
        
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
