import React from "react";

export default function SelectBar({
  handleSelect,
  sortedData,
  order,
  handleSort,
}) {
  return (
    <form className="">
      <select
        name="order"
        value={order}
        onChange={handleSort}
        onClick={() => {
          handleSelect(order);
        }}
        className="p-2 w-48 rounded-md dark:text-primary-white bg-primary-white dark:bg-secondary-dark-blue focus:outline-none "
      >
        <option value={0}>Sort by region</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Americas"}>Americas</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </form>
  );
}
