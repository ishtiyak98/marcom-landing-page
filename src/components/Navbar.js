import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";
import { BiMenu } from "react-icons/bi";

import LOGO from "../assets/marcom-agency-logo.png";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <nav className="px-2 lg:px-14 py-2">
      <div className="flex justify-between items-center relative">
        <div>
          <img src={LOGO} alt="" className="w-[120px] lg:w-[150px]" />
        </div>
        <div className="hidden space-x-16 lg:flex items-center">
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
            <button className="border-t-2 border-r-2 border-b-2 border-l-2 border-black hover:border-l-2 hover:bg-[#00DBB9] text-lg font-medium px-4 py-1 rounded-r-full">
              search
            </button>
          </div>
          <div className="cursor-pointer">
            <SlOptionsVertical className="text-2xl"></SlOptionsVertical>
          </div>
        </div>
        <div className="block lg:hidden">
        
          <div onClick={() => setNavState(!navState)}>
            <BiMenu className="text-4xl cursor-pointer"></BiMenu>
          </div>
        </div>
      </div>
      {navState && (
        <div className="w-full absolute left-0 responsive-nav bg-white z-20 pt-4">
          <div className="flex flex-col ">
            <Link
              to={"/"}
              className="text-lg font-medium hover:text-white hover:bg-[#00DBB9] py-2 px-2"
            >
              Home
            </Link>
            <Link
              to={"/"}
              className="text-lg font-medium hover:text-white hover:bg-[#00DBB9] py-2 px-2"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="text-lg font-medium hover:text-white hover:bg-[#00DBB9] py-2 px-2"
            >
              Workshop
            </Link>
            <Link
              to={"/"}
              className="text-lg font-medium hover:text-white hover:bg-[#00DBB9] py-2 px-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
