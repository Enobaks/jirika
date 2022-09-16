import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/jirika-logo.png";

const SideNavbar = () => {
  return (
    <div className=" sideNavContainer w-64 h-full bg-sideNav-white z-20 drop-shadow-md lg:flex flex-col items-center justify-between ">
      <Link to="/" className="logo flex mt-6 mb-5">
        <div className="logo-wrap flex justify-center items-center w-full">
          <div className="sg flex items-center w-28">
            <img src={logo} alt="Logo" className="!w-max !h-auto" />
          </div>

          <i className="fa-solid fa-xmark lg:hidden text-2xl text-red-600 "></i>
        </div>
      </Link>
      <hr className="w-full" />
      <ul className="nat w-full h-full flex flex-col items-center pt-16">
        <Link to="/user" className="w-full mb-5">
          <li className="text-center">
            {" "}
            <i className="fa-regular fa-user mr-2 text-lg"></i>Home
          </li>
        </Link>
        <Link to="order" className="w-full mb-5">
          <li className="text-center">
            <i className="fa-solid fa-cart-arrow-down mr-2 text-lg"></i>
            Collection
          </li>
        </Link>
        <Link to="saveditem" className="w-full mb-5">
          <li className="text-center">
            <i className="fa-regular fa-heart mr-2 text-lg"></i>Transaction
          </li>
        </Link>
        <Link to="/" className="w-full mb-5">
          <li className="text-center">
            <i className="fa-solid fa-right-from-bracket mr-2 text-lg"></i>
            Reminder
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;
