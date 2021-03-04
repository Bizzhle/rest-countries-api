import React from "react";
import { FaRegMoon } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between py-4 font-nunito-sans border-b bg-primary-white dark:bg-secondary-dark-blue dark:text-primary-white">
      <span className="font-bold mx-4 md:mx-8 ">Where in the world?</span>
      <div className="flex mx-4 md:mx-8 ">
        <FaRegMoon className="mr-1 font-semibold" />
        Dark mode
      </div>
    </div>
  );
}
