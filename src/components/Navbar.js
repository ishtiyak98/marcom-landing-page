import React from "react";
import { Link } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";

import LOGO from "../assets/marcom-agency-logo.png";

const Navbar = () => {
  return (
    <nav className="px-14 py-4">
      <div className="flex justify-between items-center ">
        <div>
          <img src={LOGO} alt="" width={150} />
        </div>
        <div className="space-x-16 flex items-center">
          <Link to={"/"} className="text-lg font-medium hover:text-[#00DBB9]">
            Home
          </Link>
          <Link to={"/"} className="text-lg font-medium hover:text-[#00DBB9]">
            About
          </Link>
          <Link to={"/"} className="text-lg font-medium hover:text-[#00DBB9]">
            Workshop
          </Link>
          <Link to={"/"} className="text-lg font-medium hover:text-[#00DBB9]">
            Contact
          </Link>
          <div className="">
            <input
              type="text"
              className="border-t-2 border-l-2 border-b-2 border-black outline-none w-[210px] px-3 py-1 rounded-l-full text-lg font-medium"
            />
            <button className="border-t-2 border-r-2 border-b-2 border-black  hover:bg-[#00DBB9] text-lg font-medium px-4 py-1 rounded-r-full">
              search
            </button>
          </div>
          <div className="cursor-pointer">
            <SlOptionsVertical className="text-2xl"></SlOptionsVertical>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
