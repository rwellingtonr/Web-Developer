import React from 'react';

const SearchField = ({searchField, runQUery}) => {
    return (
        <div className='pa3'>
            <input className='pa3 ba b--black-80 bg-light-gray'
            placeholder='Search'
            type='search'
            onChange={runQUery}></input> 
        </div>
    );
}

export default SearchField;