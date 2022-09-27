import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/jirika-logo.png";
import "./sideNavbar.css";

const SideNavbar = () => {
  return (
    <div className=" sideNavContainer w-56 h-screen fixed bg-white z-20 drop-shadow-md lg:flex flex-col items-center justify-between ">
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
        <Link to="/user" className="w-full mb-9 flex justify-center">
          <li className="w-3/5 flex justify-around items-center text-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1152 20V12.174C21.1153 11.6296 21.0042 11.0908 20.7887 10.5908C20.5733 10.0907 20.258 9.63995 19.8622 9.26603L12.4892 2.29803C12.1179 1.94696 11.6263 1.75134 11.1152 1.75134C10.6042 1.75134 10.1126 1.94696 9.74123 2.29803L2.36823 9.26603C1.97246 9.63995 1.65719 10.0907 1.44173 10.5908C1.22628 11.0908 1.11518 11.6296 1.11523 12.174V20C1.11523 20.5305 1.32595 21.0392 1.70102 21.4142C2.07609 21.7893 2.5848 22 3.11523 22H19.1152C19.6457 22 20.1544 21.7893 20.5294 21.4142C20.9045 21.0392 21.1152 20.5305 21.1152 20Z"
                stroke="#191A3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Home
          </li>
        </Link>
        <Link to="order" className="w-full mb-9 flex justify-center">
          <li className="w-3/5 flex justify-around items-center text-lg">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.86523 1.875V17.5725L6.2683 14.0492C6.65062 13.7434 7.12564 13.5767 7.61523 13.5767C8.10483 13.5767 8.57985 13.7434 8.96217 14.0492L13.3652 17.5711V1.875H1.86523ZM1.14648 0.4375H14.084C14.2746 0.4375 14.4574 0.513225 14.5922 0.648017C14.727 0.782809 14.8027 0.965626 14.8027 1.15625V19.0675C14.8025 19.2027 14.7642 19.3352 14.6921 19.4496C14.62 19.5641 14.5171 19.6558 14.3952 19.7144C14.2733 19.7729 14.1373 19.7959 14.0029 19.7806C13.8685 19.7654 13.7412 19.7125 13.6355 19.6281L8.06374 15.1719C7.93637 15.0702 7.77822 15.0148 7.61523 15.0148C7.45225 15.0148 7.2941 15.0702 7.16673 15.1719L1.59498 19.6281C1.4893 19.7125 1.36195 19.7654 1.22756 19.7806C1.09318 19.7959 0.957217 19.7729 0.835303 19.7144C0.713388 19.6558 0.610469 19.5641 0.538372 19.4496C0.466275 19.3352 0.427927 19.2027 0.427734 19.0675V1.15625C0.427734 0.965626 0.50346 0.782809 0.638252 0.648017C0.773043 0.513225 0.95586 0.4375 1.14648 0.4375Z"
                fill="#191A3F"
              />
            </svg>
            Collection
          </li>
        </Link>
        <Link to="saveditem" className="w-full mb-9 flex justify-center">
          <li className="w-3/5 flex justify-around items-center text-lg">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3592 17.6671C14.2827 17.6671 14.2039 17.6639 14.1251 17.6563C13.1204 17.5621 12.3327 16.8893 12.1158 15.9414L9.05265 2.51673L5.8982 9.43056C5.71668 9.82706 5.30453 10.0838 4.85015 10.0838H1.42512C0.793776 10.0838 0.283447 9.59848 0.283447 9.00048C0.283447 8.4014 0.793776 7.91715 1.42512 7.91715H4.10121L6.96224 1.64573C7.36754 0.76173 8.26033 0.247147 9.27528 0.343564C10.28 0.437814 11.0677 1.11056 11.2846 2.05848L14.3477 15.4831L17.5022 8.56931C17.6837 8.17281 18.0947 7.91715 18.5502 7.91715H21.9753C22.6066 7.91715 23.1169 8.4014 23.1169 9.00048C23.1169 9.59848 22.6066 10.0838 21.9753 10.0838H19.2992L16.4381 16.3541C16.0648 17.1699 15.2645 17.6671 14.3592 17.6671Z"
                fill="#191A3F"
              />
            </svg>
            Transaction
          </li>
        </Link>
        <Link to="/" className="w-full mb-9 flex justify-center">
          <li className=" w-3/5 flex justify-around items-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="20"
              height="20"
            >
              <path
                d="M5 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM11 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z"
                fill="#191A3F"
              />
              <path
                d="M13 14.5H3c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zM3 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3z"
                fill="#191A3F"
              />
              <path
                d="M14 6.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zM5.5 7.5h1v1h-1zM7.5 7.5h1v1h-1zM9.5 7.5h1v1h-1zM11.5 7.5h1v1h-1zM3.5 9.5h1v1h-1zM5.5 9.5h1v1h-1zM7.5 9.5h1v1h-1zM9.5 9.5h1v1h-1zM11.5 9.5h1v1h-1zM3.5 11.5h1v1h-1zM5.5 11.5h1v1h-1zM7.5 11.5h1v1h-1z"
                fill="#191A3F"
              />
            </svg>
            Reminder
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;
