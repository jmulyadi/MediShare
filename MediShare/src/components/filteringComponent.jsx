import React from 'react';

function FilterDropdown() {
  return (
    <div className="filterbar">
      {/* <label htmlFor="filter">Filter:</label> */}
      <select className = "filter" id="filter">
        <option value="" disabled hidden>Select a Filter</option>
        <option value="location">Location</option>
        <option value="specialty">Specialty</option>
        <option value="needs">Needs</option>
      </select>
    </div>
  );
}

export default FilterDropdown;