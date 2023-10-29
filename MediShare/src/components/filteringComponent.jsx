import React, { useState } from 'react';

function FilterDropdown() {
  const [selectedFilter, setSelectedFilter] = useState(''); // Initialize selectedFilter with an empty string

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const resetSelection = () => {
    setSelectedFilter(''); // Reset the selectedFilter to an empty string
  };

  return (
    <div className="filterbar">
      <select className="filter" id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="" disabled hidden>Select a Filter</option>
        <option value="location">Location</option>
        <option value="specialty">Specialty</option>
        <option value="needs">Needs</option>
      </select>
      <button onClick={resetSelection}>Reset Selection</button>
    </div>
  );
}

export default FilterDropdown;