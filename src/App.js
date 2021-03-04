import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SingleDisplay from "./components/SingleDisplay";
import Data from "./Data";
import Filter from "./Filter";

function App() {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    Data.getData().then((response) => {
      setData(response);
    });
  }, []);

  // Captures input from search bar and stores the value as state
  function handleChange(e) {
    const keyword = e.target.value;
    setFilterQuery(keyword);
  }
  console.log(filterQuery);

  // Captures input from select box and stores the value in state
  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  // used to select a specific country
  function handleClick(id) {
    const filteredItem = data.filter((item) => item.id === id);
    setCurrentItem(filteredItem);
    console.log(filteredItem);
  }

  // Function takes the search query term from state as a paramter, it returns the API response and updates the data state
  function handleSearch() {
    const filteredItems = data.filter((item) => item.name === filterQuery);
    setData(filteredItems);

    console.log(filterQuery);
  }

  function sort(order) {
    if (order === "1") {
      const newOrder = Filter.nameAsc(data);
      setSortedData(newOrder);
    } else if (order === "2") {
      const newOrder = Filter.nameDsc(data);
      setSortedData(newOrder);
    } else if (order === "3") {
      const newOrder = Filter.populationAsc(data);
      setSortedData(newOrder);
    } else if (order === "4") {
      const newOrder = Filter.populationDsc(data);
      setSortedData(newOrder);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home
              data={data}
              sortedData={sortedData}
              filterQuery={filterQuery}
              order={order}
              sort={sort}
              handleClick={handleClick}
              handleChange={handleChange}
              handleSearch={handleSearch}
              handleSort={handleSort}
            />
          </Route>
          <Route path="/singledisplay">
            <SingleDisplay data={currentItem} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
