import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`btn ${currentPage === index + 1 ? 'btn-primary custom-button' : 'btn-secondary custom-button2'}`}
          onClick={() => onPageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
  
  export default Pagination;
  