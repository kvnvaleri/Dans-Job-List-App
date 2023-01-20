import React from 'react';

const Search = ({setSearchKeywords}) => {
  return (
    <div className='search-container'>
        <ul>
            <input type="text" onChange={(e) => setSearchKeywords(e.terget.value)} />
        </ul>
    </div>
  )
}

export default Search