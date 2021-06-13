import React from 'react';
import styled from 'styled-components';

const Pagination = ({ sweetsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (
    let number = 1;
    number <= Math.ceil(totalPosts / sweetsPerPage);
    number++
  ) {
    pageNumbers.push(number);
  }

  const onPageClick = number => {
    paginate(number);
  };

  return (
    <ul className="pagination">
      <li className="disabled">
        <a href="#!">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      {pageNumbers.map(pageNumber => (
        <li>
          <button
            onClick={() => onPageClick(pageNumber)}
            className={`waves-effect transparent ${
              pageNumber === currentPage ? 'btn' : 'btn-flat'
            }`}
          >
            {pageNumber}
          </button>
        </li>
      ))}

      <li className="disabled">
        <a href="#!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
