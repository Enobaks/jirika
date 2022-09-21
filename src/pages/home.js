import React from "react";
import BoleFestival from "../images/bole-festival.png";
import SinglesParty from "../images/singles-party.png";

const Home = () => {
  return (
    <div className="home-wrap w-full p-3">
      <div className="flex gap-2">
        <div className="greetings w-2/5">
          <h1 className="text-2xl font-medium text-primary p-3">
            Hello, Clinton Elvis{" "}
          </h1>
          <div className="mt-7 bg-arc rounded-md">
            <h5 className="text-2xl font-semibold text-carton p-3">
              Wallet Balance
            </h5>
            <p className="text-2xl font-normal text-carton mt-6 p-3">
              {"\u20A6"}356.90
            </p>
            <div className="action-summary mt-14 p-3 flex justify-between w-11/12">
              <div className="deposit-wrap flex flex-col justify-around items-center h-28">
                <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 11.1893L8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033L5.53033 13.5303C5.23744 13.8232 4.76256 13.8232 4.46967 13.5303L0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967C0.762563 8.17678 1.23744 8.17678 1.53033 8.46967L4.25 11.1893L4.25 1.5C4.25 1.08579 4.58579 0.75 5 0.75C5.41421 0.75 5.75 1.08579 5.75 1.5L5.75 11.1893Z"
                      fill="#FFB961"
                    />
                  </svg>
                </div>
                <p className="text-lg font-light">Deposit</p>
              </div>
              <div className="deposit-wrap flex flex-col justify-around items-center h-28 ">
                <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.53033 1.53033C3.82322 1.23744 3.82322 0.762563 3.53033 0.46967C3.23744 0.176777 2.76256 0.176777 2.46967 0.46967L0.46967 2.46967C0.176777 2.76256 0.176777 3.23744 0.46967 3.53033L2.46967 5.53033C2.76256 5.82322 3.23744 5.82322 3.53033 5.53033C3.82322 5.23744 3.82322 4.76256 3.53033 4.46967L2.81066 3.75H13C13.4142 3.75 13.75 3.41421 13.75 3C13.75 2.58579 13.4142 2.25 13 2.25H2.81066L3.53033 1.53033Z"
                      fill="#FFB961"
                    />
                    <path
                      d="M12.4697 8.46967C12.1768 8.76256 12.1768 9.23744 12.4697 9.53033L13.1893 10.25H3C2.58579 10.25 2.25 10.5858 2.25 11C2.25 11.4142 2.58579 11.75 3 11.75H13.1893L12.4697 12.4697C12.1768 12.7626 12.1768 13.2374 12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697L13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967Z"
                      fill="#FFB961"
                    />
                  </svg>
                </div>
                <p className="text-lg font-light">Transfer</p>
              </div>
              <div className="deposit-wrap flex flex-col justify-around items-center h-28 ">
                <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.41511 0.395105C8.79624 0.277966 9.20375 0.277966 9.58488 0.395105L12.5706 1.31277C14.1283 1.79152 15.6075 2.49538 16.9616 3.40203C18.0147 4.10722 17.5155 5.74997 16.2481 5.74997H1.75191C0.484457 5.74997 -0.0147414 4.10722 1.03841 3.40204C2.39244 2.49538 3.87174 1.79152 5.42938 1.31277L8.41511 0.395105ZM9.1442 1.82891C9.05023 1.80003 8.94976 1.80003 8.85579 1.82891L5.87006 2.74658C4.68925 3.1095 3.55791 3.61454 2.50069 4.24997H15.4993C14.4421 3.61454 13.3107 3.1095 12.1299 2.74658L9.1442 1.82891Z"
                      fill="#FFB961"
                    />
                    <path
                      d="M1.25 19C1.25 18.5858 1.58579 18.25 2 18.25H16C16.4142 18.25 16.75 18.5858 16.75 19C16.75 19.4142 16.4142 19.75 16 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19Z"
                      fill="#FFB961"
                    />
                    <path
                      d="M3.25 15C3.25 15.4142 3.58579 15.75 4 15.75C4.41421 15.75 4.75 15.4142 4.75 15L4.75 8.99997C4.75 8.58576 4.41421 8.24997 4 8.24997C3.58579 8.24997 3.25 8.58576 3.25 8.99997L3.25 15Z"
                      fill="#FFB961"
                    />
                    <path
                      d="M9 15.75C8.58579 15.75 8.25 15.4142 8.25 15L8.25 8.99997C8.25 8.58576 8.58579 8.24997 9 8.24997C9.41421 8.24997 9.75 8.58576 9.75 8.99997V15C9.75 15.4142 9.41421 15.75 9 15.75Z"
                      fill="#FFB961"
                    />
                    <path
                      d="M13.25 15C13.25 15.4142 13.5858 15.75 14 15.75C14.4142 15.75 14.75 15.4142 14.75 15V8.99997C14.75 8.58576 14.4142 8.24997 14 8.24997C13.5858 8.24997 13.25 8.58576 13.25 8.99997V15Z"
                      fill="#FFB961"
                    />
                  </svg>
                </div>
                <p className="text-lg font-light">Pay bills</p>
              </div>
            </div>
          </div>
          <h5 className="mt-7 text-2xl font-medium">Top Event</h5>
          <div className="picture-wrap mt-7 flex">
            <div className="sinlge-party relative">
              <img src={SinglesParty} alt="Singles Party" />
              <div className="single-party-text absolute top-28 left-3">
                <p className="text-2xl text-white font-extrabold">
                  Ph Singles Party 2021.
                </p>
                <p className="text-sm text-white">
                  In the city of Port Harcourt
                </p>
                <p className="text-sm font-bold text-white mt-2">
                  Multi Ticket Available
                </p>
              </div>
            </div>
            <div className="bole-festival ml-2 relative pt-3">
              <img src={BoleFestival} alt="Singles Party" />
              <div className="single-party-text absolute top-28 left-3">
                <p className="text-2xl text-white font-extrabold">
                  BoleFestival 2022.
                </p>
                <p className="text-sm text-white">
                  In the city of Port Harcourt
                </p>
                <p className="text-sm font-bold text-white mt-2">
                  Multi Ticket Available
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="transactions-summary w-1/3">
          <div className="title flex justify-between">
            <h1 className="text-2xl">Transaction</h1>
            <div className="view-wrap flex items-center">
              <p className="mr-6 text-mute text-sm font-normal">View All</p>
              <svg
                width="11"
                height="17"
                viewBox="0 0 11 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L10 8.14286L1.20455 16"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="transactions-summary bg-violet-400 w-1/3"></div>
      </div>
    </div>
  );
};

export default Home;
