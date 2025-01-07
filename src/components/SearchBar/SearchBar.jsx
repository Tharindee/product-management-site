import React from 'react';
import "./SearchBar.css"

const SearchBar = ({ searchTerm, onSearchChange }) => (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search products..."
      className="form-control input"/>
  );
  
  export default SearchBar;
  