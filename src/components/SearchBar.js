import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar(props) {
  return (
    <div className="w-full p-4 md:w-80 flex bg-primary-white dark:bg-secondary-dark-blue  rounded-md">
      <button className="p-1 cursor-pointer border-r-0 focus:outline-none dark:text-primary-white dark:bg-secondary-dark-blue">
        <AiOutlineSearch
          onClick={() => props.handleSearch(props.filterQuery)}
        />
      </button>
      <input
        type="text"
        placeholder="search for a country by name..."
        name="filterQuery"
        value={props.filterQuery}
        onChange={props.handleChange}
        aria-label="Filter countries by capital city, currency and region"
        className=" p-1 w-80 border-l-0 bg-primary-white dark:bg-secondary-dark-blue outline-none dark:text-primary-white"
      />
    </div>
  );
}
