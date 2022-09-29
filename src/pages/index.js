import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/sideNavbar";
import TopNavbar from "../components/topNavbar";

const LandingPage = () => {
  let [open, setOpen] = useState(false);
  const OpenSideNav = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="w-full  h-auto bg-body-grey flex">
      <SideNavbar responsiveNavBar={OpenSideNav} open={open} />
      <div className="user-section w-full h-auto ml-56">
        <TopNavbar responsiveNavBar={OpenSideNav} />

        <Outlet open={open} />
      </div>
    </div>
  );
};

export default LandingPage;
