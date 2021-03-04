import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function SingleDisplay(props) {
  // Function is used to display all the items inside a specific countries language array, it will return each item as a <li>
  function getArray(obj) {
    let itemArray = [];
    console.log(itemArray);

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
          className="m-4 md:m-12 px-5 bg-primary-white dark:bg-secondary-dark-blue text-primary-dark-gray dark:text-primary-white font-semibold p-2 border border-primary-dark-gray rounded inline-flex items-center"
        >
          <BsArrowLeft className="w-4 h-4 mr-2 " />
          back
        </button>
      </Link>

      <div className="mx-4 md:mx-12">
        <figure className="grid md:grid-cols-2 md:gap-24">
          <img
            src={props.data[0].image}
            alt={`The flag of ${props.data[0].name}`}
            className="flex-1 h-56  md:h-80 md:w-full rounded "
          />
          <figcaption className="mt-4 md:m-8 md:max-w-xl ">
            <h2 className="text-xl font-bold mb-3">{props.data[0].name}</h2>
            <div className="md:flex justify-between">
              <ul className="leading-relaxed ">
                <li>
                  <span className="font-semibold">Native name:</span>{" "}
                  {props.data[0].native}
                </li>
                <li>
                  <span className="font-semibold">Population:</span>{" "}
                  {numberWithCommas(props.data[0].population)}
                </li>
                <li>
                  <span className="font-semibold">Region:</span>{" "}
                  {props.data[0].region}
                </li>
                <li>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {props.data[0].subRegion}
                </li>
                <li>
                  <span className="font-semibold">Capital:</span>{" "}
                  {props.data[0].capital}
                </li>
              </ul>
              <ul className="leading-relaxed">
                <li>
                  <span className="font-semibold">Top Level Domain: </span>
                  {props.data[0].domain}
                </li>
                <li className="flex">
                  <span className="font-semibold">Currencies:</span> ~{" "}
                  {getArray(props.data[0].currency)}
                </li>
                <li className="flex pr-2">
                  <span className="font-semibold">Languages:</span> ~{" "}
                  {getArray(props.data[0].languages)}
                </li>
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap">
              <span className="font-semibold">Borders:</span>

              {props.data[0].borders.map((value, i) => (
                <span key={i} className="mx-1 my-1 px-5 py-1 border rounded-sm">
                  {value}
                </span>
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
