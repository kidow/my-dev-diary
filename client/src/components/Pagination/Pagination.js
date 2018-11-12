import React from 'react';
import './Pagination.scss'

const Pagination = () => {
  return (
    <div className='pagination'>
      <div className='button'>Prev</div>
      <div className='page'>Page 1</div>
      <div className='button'>Next</div>
    </div>
  );
};

export default Pagination;