import React from "react";
import { Link } from "react-router-dom";

export default function Display(props) {
  return (
    <div className="">
      <Link
        to="/SingleDisplay"
        onClick={() => {
          props.handleClick(props.card.id);
        }}
      >
        <div key={Math.random()} className="bg-white border rounded-md shadow">
          <img
            src={props.card.image}
            alt={props.card.label}
            className="rounded-t-md h-56 w-full object-cover"
          />
          <div className="mx-8 pb-4 dark:text-primary-white">
            <h3 className="py-3 font-bold text-primary-v-dark-blue dark:text-primary-white">
              {props.card.name}
            </h3>
            <p className="text-sm dark:text-primary-white">
              <span className="font-bold"> Population: </span>
              <span className=" text-primary-dark-gray dark:text-primary-white">
                {props.card.population}
              </span>
            </p>
            <p className="text-sm font-bold">
              <span> Region: </span>
              <span className=" text-primary-dark-gray">
                {props.card.region}
              </span>
            </p>
            <p className="text-sm font-bold">
              <span> Capital: </span>
              <span className=" text-primary-dark-gray">
                {props.card.capital}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
