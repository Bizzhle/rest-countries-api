import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SingleDisplay from "./components/SingleDisplay";
// import axios from "axios";
// import Data from "./Data";
import { ThemeProvider } from "./components/themeContext";

function App() {
  const [data, setData] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  // filter by region
  async function handleSelect(region) {
    if (region === "") {
      return getData();
    } else {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    }
  }

  async function handleSearch(name) {
    if (filterQuery === "") {
      return getData();
    } else {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    }
  }

  async function reset() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setData(data);
    setFilterQuery("");
  }

  async function getData() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleChange(e) {
    e.preventDefault();
    setFilterQuery(e.target.value);
    console.log(filterQuery);
  }

  // Filter exmple (redundant)
  // function handleSearch(name) {
  //   const filteredItems = data.filter((item) =>
  //     item.name.toLowerCase().includes(filterQuery.toLowerCase())
  //   );
  //   setData(filteredItems);
  // }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home
              data={data}
              filterQuery={filterQuery}
              handleSelect={handleSelect}
              handleChange={handleChange}
              handleSearch={handleSearch}
              reset={reset}
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
