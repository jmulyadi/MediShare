import React from 'react';

function FilteringComponent({ selectedFilter, onFilterChange, filterOptions }) {
  return (
    <div className="filtering-component">
      <label>Select a Filter:</label>
      <select value={selectedFilter} onChange={onFilterChange}>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilteringComponent;
