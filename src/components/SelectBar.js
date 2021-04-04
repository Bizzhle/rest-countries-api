import React, { useState } from "react";

export default function SelectBar({ handleSelect }) {
  const [value, setValue] = useState("");
  function handleSelectChange(e) {
    e.preventDefault();

    setValue(e.target.value);
    handleSelect(e.target.value);
  }
  return (
    <form className="">
      <select
        value={value}
        onChange={handleSelectChange}
        className="p-2 w-48 rounded-md dark:text-primary-white bg-primary-white dark:bg-secondary-dark-blue focus:outline-none "
      >
        <option value="">Sort by region</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}
