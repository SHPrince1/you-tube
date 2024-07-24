import React, { useState } from 'react';
import Style from '../CSS styles/expandablesearchbar.module.css' // Import the CSS file for styles

const ExpandableSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!query) {
      setIsExpanded(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={`search-bar-container ${isExpanded ? 'expanded' : ''}`}>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={query}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <button className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default ExpandableSearchBar;