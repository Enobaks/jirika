import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/sideNavbar";
import TopNavbar from "../components/topNavbar";

const landingPage = () => {
  return (
    <div className="w-full h-screen bg-body-grey flex">
      <SideNavbar />
      <div className="user-section w-full h-auto">
        <TopNavbar />

        <Outlet />
      </div>
    </div>
  );
};

export default landingPage;
