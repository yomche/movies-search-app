import React, { useState } from "react";

const Search = (props) => {
   
  const { searchResult = Function.prototype } = props;

  const [ search, setSearch ] = useState('');
  const [ type, setType ] = useState('all');

  const handleKey = (event) => {
    if (event.key === "Enter" && search !== "") {
      searchResult(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type); 
    searchResult(search, event.target.dataset.type);
  }

    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Start searching here"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />

          <button
            className="btn search-btn"
            onClick={() => {
              if (search !== "") {
                searchResult(search, type);
              }
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label >
            <input className="with-gap" 
            name="type" type="radio" 
            data-type="all" 
            onChange={handleFilter} 
            checked={type === 'all'} 
            disabled={search === ""}/>
            <span>All</span>
          </label>
          <label>
            <input className="with-gap" 
            name="group3" type="radio" 
            data-type="movie" 
            onChange={handleFilter} 
            checked={type === 'movie'} 
            disabled={search === ""}/>
            <span>Movies Only</span>
          </label>
          <label>
            <input className="with-gap" 
            name="group3" type="radio" 
            data-type="series" 
            onChange={handleFilter} 
            checked={type === 'series'} 
            disabled={search === ""}/>
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }

export { Search };
