import React from 'react';
import './search-field.scss';

const SearchField = ({ placeholder, handleChange }) => {

    return (
        <input type="search" className='search' placeholder={placeholder} onChange={handleChange} />
    )
}
export default SearchField;