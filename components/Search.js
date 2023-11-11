import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here you would call the searchConversations function from the api object
    // api.searchConversations(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          id="searchInput"
          type="text"
          placeholder="Search conversations..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;