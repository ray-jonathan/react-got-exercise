import React from 'react';
function SearchBar({searchingName}){
return(
    <input className="search" placeholder="Search for a character " onChange={(e) => {searchingName(e.target.value)}}>

    </input>)
}
export default SearchBar;