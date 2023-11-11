import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filterInput, setFilterInput] = useState('');

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilter(filterInput);
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <label htmlFor="filterInput">
        Filter Conversations:
        <input
          id="filterInput"
          type="text"
          value={filterInput}
          onChange={handleFilterChange}
        />
      </label>
      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default Filter;