import React, { useState } from 'react';
import './ProductFilter.css';

const ProductFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsDropdownVisible(false);
  };

  return (
    <div className="product-filter">
      <button
        className="filter-btn"
        onClick={toggleDropdown}>
        {selectedCategory || 'All Categories'}
      </button>
      <div className={`dropdown-menu ${isDropdownVisible ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleCategorySelect('')}>All Categories</li>
          {categories.map((category) => (
            <li key={category} onClick={() => handleCategorySelect(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
