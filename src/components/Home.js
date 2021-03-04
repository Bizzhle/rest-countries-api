import React from "react";
import Display from "./Display";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SelectBar from "./SelectBar";

export default function Home(props) {
  const cards = props.data.map((card) => {
    return (
      <Display
        key={Math.random()}
        card={card}
        handleClick={props.handleClick}
      />
    );
  });

  return (
    <div className="min-h-screen bg-primary-v-light-gray dark:bg-secondary-v-dark-blue font-nunito-sans">
      <Navbar />
      <div className=" md:flex justify-between mx-12 my-8">
        <div className="mb-8">
          <SearchBar
            handleSearch={props.handleSearch}
            handleChange={props.handleChange}
            filterQuery={props.filterQuery}
          />
        </div>
        <div>
          <SelectBar
            handleSort={props.handleSort}
            sort={props.sort}
            sortedData={props.sortedData}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-12 mx-12">
        {cards}
      </div>
    </div>
  );
}
