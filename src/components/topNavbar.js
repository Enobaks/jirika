import React from "react";
import ProfilePicture from "../images/profile2.png";

const topNavbar = () => {
  return (
    <div className="nav_container w-full h-16 mb-16 mt-4">
      <div className="nav-wrap flex flex-row justify-between items-center w-11/12 h-full lg:p-3.5 m-auto">
        <div className="menu-bar lg:hidden">
          <i class="fa-solid fa-bars text-xl"></i>
        </div>
        <div className="nat flex justify-between md:w-1/2 w-9/12 lg:w-full">
          <div className="search-icon lg:hidden flex items-center">
            <i className="fa-solid fa-magnifying-glass text-xl"></i>
          </div>
          <div className="hidden lg:block search-wrap w-2/5 relative">
            <form className=" hidden form-wrap lg:flex">
              <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-placeholder-txt"></i>
              <input
                type="text"
                className="h-8 lg:h-10 px-3 rounded-md border-2 border-gray-500 mr-2 text-black w-11/12 pl-10 "
                placeholder="Type to search..."
              />
              <button className="bg-primary w-20 flex items-center justify-center rounded-md h-8 lg:h-9 text-white text-sm lg:text-lg px-5 hover:bg-primary-drk">
                Search
              </button>
              <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-placeholder-txt"></i>
            </form>
          </div>

          <div className="laptop-size w-3/4 flex lg:w-3/12 justify-between items-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V1.75H6.44258C4.21751 1.75 2.37591 3.48001 2.23702 5.70074L2.01601 9.2342C1.93175 10.5814 1.47946 11.8797 0.708404 12.9876C0.0117219 13.9886 0.631942 15.3712 1.84287 15.5165L5.25 15.9254V17C5.25 18.5188 6.48122 19.75 8 19.75C9.51878 19.75 10.75 18.5188 10.75 17V15.9254L14.1571 15.5165C15.3681 15.3712 15.9883 13.9886 15.2916 12.9876C14.5205 11.8797 14.0682 10.5814 13.984 9.2342L13.763 5.70074C13.6241 3.48001 11.7825 1.75 9.55741 1.75H9V1ZM6.44258 3.25C5.00958 3.25 3.82354 4.36417 3.73409 5.79438L3.51309 9.32784C3.41169 10.949 2.86744 12.5112 1.93959 13.8444C1.88924 13.9168 1.93406 14.0167 2.02159 14.0272L5.75925 14.4757C7.24774 14.6543 8.75225 14.6543 10.2407 14.4757L13.9784 14.0272C14.0659 14.0167 14.1108 13.9168 14.0604 13.8444C13.1326 12.5112 12.5883 10.949 12.4869 9.32784L12.2659 5.79438C12.1764 4.36417 10.9904 3.25 9.55741 3.25H6.44258ZM8 18.25C7.30964 18.25 6.75 17.6904 6.75 17V16.25H9.25V17C9.25 17.6904 8.69036 18.25 8 18.25Z"
                fill="black"
              />
            </svg>
            <div className="mail-wrap relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="25"
                height="25"
              >
                <path
                  fill="#231f20"
                  d="M27,26H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H27a3,3,0,0,1,3,3V23A3,3,0,0,1,27,26ZM5,8A1,1,0,0,0,4,9V23a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1Z"
                />
                <path
                  fill="#231f20"
                  d="M16,17a1,1,0,0,1-.55-.17l-12-8A1,1,0,0,1,4.55,7.17l12,8A1,1,0,0,1,16,17Z"
                />
                <path
                  fill="#231f20"
                  d="M16,17a1,1,0,0,1-.56-1.83l12-8a1,1,0,0,1,1.11,1.66l-12,8A1,1,0,0,1,16,17Z"
                />
              </svg>
              <span className="md:inline-block bg-red-600 rounded-xl text-white w-4 h-4 absolute text-center text-xs -right-1 -top-1">
                1
              </span>
            </div>

            <div className="flex">
              <div className="img-wrap w-9 h-9">
                <img src={ProfilePicture} alt="Profile" />
              </div>
              <div className="profile-details hidden lg:block ml-4">
                <h3 className="text-base text-carton font-semibold">
                  Jack Wilder
                </h3>
                <p className="text-xs text-primary">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topNavbar;
