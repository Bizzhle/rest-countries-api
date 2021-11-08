import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";

export default function SingleDisplay(props) {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v3.1/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData();
  }, [name]);

  // Function is used to display all the items inside a specific countries language array, it will return each item as a <li>
  function getArray(obj) {
    let itemArray = [];

    obj.forEach(function (item) {
      itemArray.push(
        <span key={Math.random()} className="px-1">
          {item.name}
        </span>
      );
    });
    return itemArray;
  }

  // Function is used to add a comma at every 1000, in order to improve readability
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="min-h-screen bg-primary-v-light-gray dark:bg-secondary-v-dark-blue font-nunito-sans">
      <Navbar />
      <Link to="/" exact="true">
        <button
          onClick={props.restart}
          className="m-4 md:m-12 px-5 py-2 bg-primary-white dark:bg-secondary-dark-blue text-primary-dark-gray dark:text-primary-white font-semibold shadow-2xl rounded inline-flex items-center"
        >
          <BsArrowLeft className="w-4 h-4 mr-2 " />
          back
        </button>
      </Link>
      {country.map((value, index) => {
        const {
          numericCode,
          flag,
          name,
          topLevelDomain,
          capital,
          region,
          nativeName,
          population,
          subRegion,
          currencies,
          languages,
          borders,
        } = value;

        return (
          <div
            key={numericCode}
            className="mx-4 md:mx-12 dark:text-primary-white"
          >
            <figure className="grid md:grid-cols-2 md:gap-24">
              <img
                src={flag}
                alt={name}
                className="flex-1 h-56  md:h-80 md:max-w-full rounded-md"
              />
              <figcaption className="mt-4 md:m-8 md:max-w-xl ">
                <h2 className="text-xl font-bold mb-3">{name}</h2>
                <div className="md:flex justify-between">
                  <ul className="leading-relaxed ">
                    <li>
                      <span className="font-semibold">Native name:</span>{" "}
                      {nativeName}
                    </li>
                    <li>
                      <span className="font-semibold">Population:</span>{" "}
                      {numberWithCommas(population)}
                    </li>
                    <li>
                      <span className="font-semibold">Region:</span> {region}
                    </li>
                    <li>
                      <span className="font-semibold">Sub-Region:</span>{" "}
                      {subRegion}
                    </li>
                    <li>
                      <span className="font-semibold">Capital:</span> {capital}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span className="font-semibold">Top Level Domain: </span>
                      {topLevelDomain}
                    </li>
                    <li>
                      <span className="font-semibold">Currencies: </span>
                      {getArray(currencies)}
                    </li>
                    <li className="flex pr-2">
                      <span className="font-semibold">Languages: </span>
                      {getArray(languages)}
                    </li>
                  </ul>
                </div>

                <div className="mt-12 flex flex-wrap items-center">
                  <span className="font-semibold">Borders:</span>

                  {borders.map((v, i) => (
                    <Link to={"/display/" + name} key={i}>
                      <button
                        key={i}
                        className="mx-1 my-1 px-5 py-1 border rounded-sm"
                      >
                        {v}
                      </button>
                    </Link>
                  ))}
                </div>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
