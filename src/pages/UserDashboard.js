import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/sideNavbar";
import TopNavbar from "../components/topNavbar";

const LandingPage = () => {
  return (
    <div className="w-full  h-auto bg-body-grey flex">
      <SideNavbar responsiveNavBar />
      <div className={`user-section w-full h-auto lg:ml-56`}>
        <TopNavbar responsiveNavBar />

        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
