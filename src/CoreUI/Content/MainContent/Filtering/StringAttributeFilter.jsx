import "./StringAttributeFilter.css";
import FilterChoice from "./FilterChoice";
import { useState } from "react";

export default function StringAttributeFilter({
  filterType,
  filterData,
  setFilterValue,
}) {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const trItems = [...filterData].map((filterValue, i) => {
    return (
      <FilterChoice
        key={i}
        filterValue={filterValue}
        filterType={filterType}
        setFilterValue={setFilterValue}
      ></FilterChoice>
    );
  });

  return (
    <div className="string-filter-div">
      <button
        type="button"
        onClick={() => setIsDivOpen((prevState) => !prevState)}
      >
        {filterType}
      </button>
      {isDivOpen && (
        <div className="string-filter-div-list">
          <ul>{trItems}</ul>
        </div>
      )}
    </div>
  );
}
