import React from "react";

export default function SelectBar({ sort, order, handleSort }) {
  return (
    <form className="">
      <select
        name="order"
        value={order}
        onChange={handleSort}
        className="p-1 border-2 w-48 rounded-md dark:text-primary-white"
      >
        <option value={0}>Chose filter option</option>
        <option value={1}>Sort by ascending order (name)</option>
        <option value={2}>Sort by descending order (name)</option>
        <option value={3}>Sort by ascending order (population)</option>
        <option value={4}>Sort by descending order (population)</option>
      </select>
    </form>
  );
}
