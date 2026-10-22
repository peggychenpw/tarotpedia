import React from 'react';
import './search-field.scss';

const SearchField = ({ placeholder, value, handleChange }) => (
  <label className="search-control">
    <span className="search-icon" aria-hidden="true">⌕</span>
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={handleChange}
    />
  </label>
);

export default SearchField;
