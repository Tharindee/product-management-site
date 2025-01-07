import React from 'react';
import './LoadingSpinner.css';
import { FiCommand } from "react-icons/fi";

const LoadingSpinner = () => {
  return <div className="loading-spinner">
    <FiCommand className="loading-icon" />
    <span className='loading-text'>Loading...</span>
  </div>;
};

export default LoadingSpinner;
