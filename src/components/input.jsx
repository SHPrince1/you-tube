import {React, useContext }from 'react'
import { SearchContext } from '../search-context';
const CustomInput = () => {
const { searchQuery, setSearchQuery } = useContext(SearchContext);

const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search movie..."
    />);
};

export default CustomInput