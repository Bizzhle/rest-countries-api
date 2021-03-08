import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SingleDisplay from "./components/SingleDisplay";
import Data from "./Data";
import Filter from "./Filter";
import { ThemeProvider } from "./components/themeContext";

function App() {
  const [data, setData] = useState([]);
  // const [currentItem, setCurrentItem] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [order, setOrder] = useState("");

  function handleChange(e) {
    const keyword = e.target.value;
    setFilterQuery(keyword);
  }

  // Captures input from select box and stores the value in state
  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  // Function takes the search query term from state as a paramter, it returns the API response and updates the data state
  function handleSearch() {
    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setData(filteredItems);
    console.log(filteredItems);
  }

  // filter by region
  function handleSelect(order) {
    if (order) {
      const newOrder = data.filter((item) =>
        item.region.toLowerCase().includes(order)
      );
      setData(newOrder);
      console.log(newOrder);
      console.log(data);
    }
  }

  console.log(order);

  useEffect(() => {
    Data.getData().then((response) => {
      setData(response);
    });
  }, [filterQuery, order]);

  // Captures input from search bar and stores the value as state

  // used to select a specific country
  // function handleClick(id) {
  //   const searchRegion = data.filter(
  //     (country) =>
  //       country.region === Region &&
  //       country.name.toLowerCase().includes(filterQuery.toLowerCase())
  //   );
  //   setData(searchRegion);
  //   console.log(searchRegion);
  // }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home
              data={data}
              sortedData={sortedData}
              filterQuery={filterQuery}
              order={order}
              handleSelect={handleSelect}
              handleChange={handleChange}
              handleSearch={handleSearch}
              handleSort={handleSort}
            />
          </Route>
          <Route
            path="/display/:name"
            children={
              <SingleDisplay
                handleSearch={handleSearch}
                filterQuery={filterQuery}
                handleChange={handleChange}
              />
            }
          ></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
