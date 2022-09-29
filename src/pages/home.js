import React from "react";
import BoleFestival from "../images/bole-festival.png";
import SinglesParty from "../images/singles-party.png";

const Home = () => {
  return (
    <div className="home-wrap w-full p-3">
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Greeting */}
        <div className="greetings w-11/12 lg:w-2/5">
          <h1 className="text-2xl font-medium text-primary p-3">
            Hello, Clinton Elvis{" "}
          </h1>
          <div className="mt-7 bg-arc rounded-md w-11/12">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
              <div className="single-party-text absolute top-60 lg:top-32 left-3">
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
              <div className="single-party-text absolute top-52 lg:top-24 left-3">
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
        {/* Transaction Section */}
        <div className="transactions-summary w-full mt-16 lg:w-2/5 p-4 lg:pl-4">
          <div className="title flex justify-between">
            <h1 className="text-2xl font-medium">Transaction</h1>
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
                  strokeOpacity="0.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="sub-category flex w-1/2 justify-between mt-1.5 mb-4">
            <p className="font-light text-sm hover:underline">All</p>
            <p className="font-light text-sm hover:underline">Credit</p>
            <p className="font-light text-sm hover:underline">Debit</p>
          </div>
          <div className="transaction flex justify-between mb-8">
            <div className="tick flex">
              <div className="transaction-status w-9 h-10 flex justify-center items-center bg-primary rounded-md mr-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.86461 3.88236C5.17813 2.56432 6.99326 1.75 9 1.75C13.0041 1.75 16.25 4.99594 16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 8.58579 1.41421 8.25 1 8.25C0.585786 8.25 0.25 8.58579 0.25 9C0.25 13.8325 4.16751 17.75 9 17.75C13.8325 17.75 17.75 13.8325 17.75 9C17.75 4.16751 13.8325 0.25 9 0.25C6.57851 0.25 4.38558 1.23462 2.80213 2.82352C2.77668 2.84906 2.75345 2.87597 2.73245 2.90401L1.47488 1.64645C1.33769 1.50926 1.13353 1.46382 0.951112 1.52986C0.768691 1.59591 0.640942 1.76152 0.623378 1.95473L0.269824 5.84382C0.256389 5.9916 0.30929 6.13771 0.414217 6.24264C0.519145 6.34757 0.665258 6.40047 0.813038 6.38703L4.70213 6.03348C4.89534 6.01591 5.06095 5.88817 5.12699 5.70575C5.19304 5.52332 5.1476 5.31916 5.01041 5.18198L3.7823 3.95386C3.81101 3.93235 3.83854 3.90852 3.86461 3.88236Z"
                    fill="#FFB961"
                  />
                  <path
                    d="M9.75 4C9.75 3.58579 9.41421 3.25 9 3.25C8.58579 3.25 8.25 3.58579 8.25 4V9C8.25 9.25859 8.38321 9.49895 8.6025 9.636L11.6025 11.511C11.9538 11.7305 12.4165 11.6238 12.636 11.2725C12.8555 10.9212 12.7488 10.4585 12.3975 10.239L9.75 8.58431V4Z"
                    fill="#FFB961"
                  />
                </svg>
              </div>
              <div className="transaction-title">
                <p className="text-lg">BoleFestival 2022</p>
                <span className="text-sm text-mute relative -top-0.5">
                  Jan- 06 -22&nbsp;&nbsp;&nbsp;&nbsp;03:54
                </span>
              </div>
            </div>
            <span className="text-2xl text-primary">-{"\u20A6"}3,122</span>
          </div>
          <div className="transaction flex justify-between mb-8">
            <div className="tick flex">
              <div className="transaction-status w-9 h-10 flex justify-center items-center bg-primary rounded-md mr-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 7.75001C9.41421 7.75001 9.75 8.08579 9.75 8.50001V13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5L8.25 8.50001C8.25 8.08579 8.58579 7.75001 9 7.75001Z"
                    fill="#FFB961"
                  />
                  <path
                    d="M9 6.00001C9.55228 6.00001 10 5.55229 10 5.00001C10 4.44772 9.55228 4.00001 9 4.00001C8.44772 4.00001 8 4.44772 8 5.00001C8 5.55229 8.44772 6.00001 9 6.00001Z"
                    fill="#FFB961"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.31673 0.768758C7.40429 0.423679 10.5957 0.423679 13.6832 0.768758C15.5096 0.972883 16.9845 2.41153 17.1994 4.24849C17.5686 7.40541 17.5686 10.5946 17.1994 13.7515C16.9845 15.5885 15.5096 17.0271 13.6832 17.2313C10.5957 17.5763 7.40429 17.5763 4.31673 17.2313C2.49035 17.0271 1.01545 15.5885 0.800605 13.7515C0.431374 10.5946 0.431374 7.40541 0.800605 4.24849C1.01545 2.41153 2.49035 0.972883 4.31673 0.768758ZM13.5166 2.25948C10.5398 1.92677 7.46017 1.92677 4.48334 2.25948C3.33891 2.38738 2.42286 3.29063 2.29045 4.42274C1.93476 7.46389 1.93476 10.5361 2.29045 13.5773C2.42286 14.7094 3.33891 15.6126 4.48334 15.7405C7.46017 16.0732 10.5398 16.0732 13.5166 15.7405C14.6611 15.6126 15.5771 14.7094 15.7095 13.5773C16.0652 10.5361 16.0652 7.46389 15.7095 4.42274C15.5771 3.29063 14.6611 2.38738 13.5166 2.25948Z"
                    fill="#FFB961"
                  />
                </svg>
              </div>
              <div className="transaction-title">
                <p className="text-lg">PhsingleParty 2022</p>
                <span className="text-sm text-mute relative -top-0.5">
                  Jan- 06 -22&nbsp;&nbsp;&nbsp;&nbsp;03:54
                </span>
              </div>
            </div>
            <span className="text-2xl text-primary">-{"\u20A6"}3,122</span>
          </div>
          <div className="transaction flex justify-between mb-8">
            <div className="tick flex">
              <div className="transaction-status w-9 h-10 flex justify-center items-center bg-primary rounded-md mr-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 7.75001C9.41421 7.75001 9.75 8.08579 9.75 8.50001V13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5L8.25 8.50001C8.25 8.08579 8.58579 7.75001 9 7.75001Z"
                    fill="#FFB961"
                  />
                  <path
                    d="M9 6.00001C9.55228 6.00001 10 5.55229 10 5.00001C10 4.44772 9.55228 4.00001 9 4.00001C8.44772 4.00001 8 4.44772 8 5.00001C8 5.55229 8.44772 6.00001 9 6.00001Z"
                    fill="#FFB961"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.31673 0.768758C7.40429 0.423679 10.5957 0.423679 13.6832 0.768758C15.5096 0.972883 16.9845 2.41153 17.1994 4.24849C17.5686 7.40541 17.5686 10.5946 17.1994 13.7515C16.9845 15.5885 15.5096 17.0271 13.6832 17.2313C10.5957 17.5763 7.40429 17.5763 4.31673 17.2313C2.49035 17.0271 1.01545 15.5885 0.800605 13.7515C0.431374 10.5946 0.431374 7.40541 0.800605 4.24849C1.01545 2.41153 2.49035 0.972883 4.31673 0.768758ZM13.5166 2.25948C10.5398 1.92677 7.46017 1.92677 4.48334 2.25948C3.33891 2.38738 2.42286 3.29063 2.29045 4.42274C1.93476 7.46389 1.93476 10.5361 2.29045 13.5773C2.42286 14.7094 3.33891 15.6126 4.48334 15.7405C7.46017 16.0732 10.5398 16.0732 13.5166 15.7405C14.6611 15.6126 15.5771 14.7094 15.7095 13.5773C16.0652 10.5361 16.0652 7.46389 15.7095 4.42274C15.5771 3.29063 14.6611 2.38738 13.5166 2.25948Z"
                    fill="#FFB961"
                  />
                </svg>
              </div>
              <div className="transaction-title">
                <p className="text-lg">Bonnyfestival</p>
                <span className="text-sm text-mute relative -top-0.5">
                  Jan- 06 -22&nbsp;&nbsp;&nbsp;&nbsp;03:54
                </span>
              </div>
            </div>
            <span className="text-2xl text-primary">-{"\u20A6"}2,000</span>
          </div>
          <div className="transaction flex justify-between mb-8">
            <div className="tick flex">
              <div className="transaction-status w-9 h-10 flex justify-center items-center bg-primary rounded-md mr-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 7.75001C9.41421 7.75001 9.75 8.08579 9.75 8.50001V13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5L8.25 8.50001C8.25 8.08579 8.58579 7.75001 9 7.75001Z"
                    fill="#FFB961"
                  />
                  <path
                    d="M9 6.00001C9.55228 6.00001 10 5.55229 10 5.00001C10 4.44772 9.55228 4.00001 9 4.00001C8.44772 4.00001 8 4.44772 8 5.00001C8 5.55229 8.44772 6.00001 9 6.00001Z"
                    fill="#FFB961"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.31673 0.768758C7.40429 0.423679 10.5957 0.423679 13.6832 0.768758C15.5096 0.972883 16.9845 2.41153 17.1994 4.24849C17.5686 7.40541 17.5686 10.5946 17.1994 13.7515C16.9845 15.5885 15.5096 17.0271 13.6832 17.2313C10.5957 17.5763 7.40429 17.5763 4.31673 17.2313C2.49035 17.0271 1.01545 15.5885 0.800605 13.7515C0.431374 10.5946 0.431374 7.40541 0.800605 4.24849C1.01545 2.41153 2.49035 0.972883 4.31673 0.768758ZM13.5166 2.25948C10.5398 1.92677 7.46017 1.92677 4.48334 2.25948C3.33891 2.38738 2.42286 3.29063 2.29045 4.42274C1.93476 7.46389 1.93476 10.5361 2.29045 13.5773C2.42286 14.7094 3.33891 15.6126 4.48334 15.7405C7.46017 16.0732 10.5398 16.0732 13.5166 15.7405C14.6611 15.6126 15.5771 14.7094 15.7095 13.5773C16.0652 10.5361 16.0652 7.46389 15.7095 4.42274C15.5771 3.29063 14.6611 2.38738 13.5166 2.25948Z"
                    fill="#FFB961"
                  />
                </svg>
              </div>
              <div className="transaction-title">
                <p className="text-lg">Yardfestival 2021</p>
                <span className="text-sm text-mute relative -top-0.5">
                  Jan- 06 -22&nbsp;&nbsp;&nbsp;&nbsp;03:54
                </span>
              </div>
            </div>
            <span className="text-2xl text-primary">-{"\u20A6"}3,022</span>
          </div>
          <div className="transaction flex justify-between mb-8">
            <div className="tick flex">
              <div className="transaction-status w-9 h-10 flex justify-center items-center bg-primary rounded-md mr-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 7.75001C9.41421 7.75001 9.75 8.08579 9.75 8.50001V13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5L8.25 8.50001C8.25 8.08579 8.58579 7.75001 9 7.75001Z"
                    fill="#FFB961"
                  />
                  <path
                    d="M9 6.00001C9.55228 6.00001 10 5.55229 10 5.00001C10 4.44772 9.55228 4.00001 9 4.00001C8.44772 4.00001 8 4.44772 8 5.00001C8 5.55229 8.44772 6.00001 9 6.00001Z"
                    fill="#FFB961"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.31673 0.768758C7.40429 0.423679 10.5957 0.423679 13.6832 0.768758C15.5096 0.972883 16.9845 2.41153 17.1994 4.24849C17.5686 7.40541 17.5686 10.5946 17.1994 13.7515C16.9845 15.5885 15.5096 17.0271 13.6832 17.2313C10.5957 17.5763 7.40429 17.5763 4.31673 17.2313C2.49035 17.0271 1.01545 15.5885 0.800605 13.7515C0.431374 10.5946 0.431374 7.40541 0.800605 4.24849C1.01545 2.41153 2.49035 0.972883 4.31673 0.768758ZM13.5166 2.25948C10.5398 1.92677 7.46017 1.92677 4.48334 2.25948C3.33891 2.38738 2.42286 3.29063 2.29045 4.42274C1.93476 7.46389 1.93476 10.5361 2.29045 13.5773C2.42286 14.7094 3.33891 15.6126 4.48334 15.7405C7.46017 16.0732 10.5398 16.0732 13.5166 15.7405C14.6611 15.6126 15.5771 14.7094 15.7095 13.5773C16.0652 10.5361 16.0652 7.46389 15.7095 4.42274C15.5771 3.29063 14.6611 2.38738 13.5166 2.25948Z"
                    fill="#FFB961"
                  />
                </svg>
              </div>
              <div className="transaction-title">
                <p className="text-lg">Rave Warri</p>
                <span className="text-sm text-mute relative -top-0.5">
                  Jan- 06 -22&nbsp;&nbsp;&nbsp;&nbsp;03:54
                </span>
              </div>
            </div>
            <span className="text-2xl text-primary">-{"\u20A6"}2,500</span>
          </div>
          <div className="transaction flex justify-between mb-8">
            <div className="tick flex">
              <div className="transaction-status w-9 h-10 flex justify-center items-center bg-completed rounded-md mr-6">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.48337 2.25947C3.33894 2.38738 2.42289 3.29062 2.29048 4.42273C1.93479 7.46388 1.93479 10.5361 2.29048 13.5773C2.42289 14.7094 3.33894 15.6126 4.48337 15.7405C7.4602 16.0732 10.5398 16.0732 13.5167 15.7405C14.6611 15.6126 15.5771 14.7094 15.7095 13.5773C15.9651 11.3921 16.0371 9.19092 15.9254 6.99673C15.9225 6.94007 15.9436 6.8848 15.9838 6.84468L17.0225 5.80591C17.1428 5.68567 17.3482 5.76085 17.361 5.93041C17.557 8.53533 17.5032 11.1543 17.1994 13.7515C16.9845 15.5885 15.5096 17.0271 13.6833 17.2312C10.5957 17.5763 7.40432 17.5763 4.31676 17.2312C2.49038 17.0271 1.01548 15.5885 0.800635 13.7515C0.431405 10.5946 0.431405 7.4054 0.800635 4.24848C1.01548 2.41152 2.49038 0.972876 4.31676 0.768751C7.40432 0.423671 10.5957 0.423671 13.6833 0.768751C14.3265 0.840644 14.9262 1.06567 15.4425 1.40731C15.5441 1.47453 15.5542 1.61737 15.4681 1.70352L14.6652 2.5064C14.5995 2.57208 14.4976 2.58312 14.4158 2.53926C14.1424 2.39276 13.8386 2.29545 13.5167 2.25947C10.5398 1.92676 7.4602 1.92676 4.48337 2.25947Z"
                    fill="#2D2F7E"
                  />
                  <path
                    d="M18.0303 3.03033C18.3232 2.73744 18.3232 2.26256 18.0303 1.96967C17.7374 1.67678 17.2626 1.67678 16.9697 1.96967L8.5 10.4393L6.03033 7.96967C5.73744 7.67678 5.26256 7.67678 4.96967 7.96967C4.67678 8.26256 4.67678 8.73744 4.96967 9.03033L7.96967 12.0303C8.26256 12.3232 8.73744 12.3232 9.03033 12.0303L18.0303 3.03033Z"
                    fill="#2D2F7E"
                  />
                </svg>
              </div>
              <div className="transaction-title">
                <p className="text-lg">BoleFestival 2022</p>
                <span className="text-sm text-mute relative -top-0.5">
                  Jan- 06 -22&nbsp;&nbsp;&nbsp;&nbsp;03:54
                </span>
              </div>
            </div>
            <span className="text-2xl text-live">{"\u20A6"}3,122</span>
          </div>
          <div className="upcoming-event">
            <div className="upcoming-wrap flex justify-between items-center mb-5">
              <h1 className="text-2xl font-medium">Upcoming Event</h1>
              <span className="font-normal text-sm text-mute">Skip</span>
            </div>
            <div className="event border rounded-md border-mute bg-white p-3">
              <div className="date-wrap flex justify-between items-center mb-6">
                <p>
                  <span></span>Mar 20
                </p>
                <span>...</span>
              </div>
              <p className="text-2xl mb-6">Omah Lay Rave show</p>
              <p
                className="text-mute font-light mb-8"
                style={{ fontSize: "10px" }}
              >
                One time payment
              </p>
              <button className="text-lg font-normal w-36 h-12 bg-black text-white rounded-md mb-1">
                Pre Book
              </button>
            </div>
          </div>
        </div>
        {/* Live Activity */}
        <div className="transactions-summary w-full mt-16  lg:w-1/3 pl-4">
          <h1 className="text-2xl font-medium mb-12">Live activity</h1>
          <div className="activities-wrap flex flex-col md:flex-row md:flex-wrap md:gap-4 lg:flex-col justify-center items-center ">
            <div className="w-52 h-40 flex  items-center justify-center border border-mute rounded-md md:mb-6 mb-12">
              <div className="wrap flex flex-col items-center">
                <p className="font-medium text-base inline">Bole Festival</p>
                <p className="font-medium text-lg text-live inline">Live</p>
                <p className="text-sm font-medium inline">Port harcourt</p>
                <p className="text-base text-mute inline">pleasure park</p>
                <p className="text-book font-medium text-sm inline">Book now</p>
              </div>
            </div>
            <div className="w-52 h-40 flex  items-center justify-center border border-mute rounded-md md:mb-6 mb-12">
              <div className="wrap flex flex-col items-center">
                <p className="font-medium text-base inline">Bole Festival</p>
                <p className="font-medium text-lg text-live inline">Live</p>
                <p className="text-sm font-medium inline">Port harcourt</p>
                <p className="text-base text-mute inline">pleasure park</p>
                <p className="text-book font-medium text-sm inline">Book now</p>
              </div>
            </div>
            <div className="w-52 h-40 flex  items-center justify-center border border-mute rounded-md md:mb-6 mb-12">
              <div className="wrap flex flex-col items-center">
                <p className="font-medium text-base inline">Bole Festival</p>
                <p className="font-medium text-lg text-live inline">Live</p>
                <p className="text-sm font-medium inline">Port harcourt</p>
                <p className="text-base text-mute inline">pleasure park</p>
                <p className="text-book font-medium text-sm inline">Book now</p>
              </div>
            </div>
            <div className="w-52 h-40 flex  items-center justify-center border border-mute rounded-md md:mb-6 mb-12">
              <div className="wrap flex flex-col items-center">
                <p className="font-medium text-base inline">Bole Festival</p>
                <p className="font-medium text-lg text-live inline">Live</p>
                <p className="text-sm font-medium inline">Port harcourt</p>
                <p className="text-base text-mute inline">pleasure park</p>
                <p className="text-book font-medium text-sm inline">Book now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
