import React from 'react';

const Pagination = ({ conversationsPerPage, totalConversations, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalConversations / conversationsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav id="paginationControl">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;