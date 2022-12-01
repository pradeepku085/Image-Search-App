import React from 'react';

function SearchInput({ img, setImg }) {
  return (
    <div className="searchInput">
      <input
        className="searchInput-input"
        type="text"
        placeholder="Search Anything..."
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
