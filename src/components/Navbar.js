import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./themeContext";

export default function Navbar(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <div className="flex justify-between py-4 px-4  font-nunito-sans  bg-primary-white dark:bg-secondary-dark-blue dark:text-primary-white">
      <button className="font-bold mx-4 md:mx-8" onClick={props.reset}>
        Where in the world?
      </button>

      <label className="theme-switch mx-4 md:mx-8">
        <input
          type="checkbox"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}
