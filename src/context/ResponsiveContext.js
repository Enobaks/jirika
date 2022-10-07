import React, { createContext, useState } from "react";

export const ResponsiveContext = createContext();

const ResponsiveContextProvider = (props) => {
  const [sideNav, setSideNav] = useState(false);
  const toggleLayout = () => {
    setSideNav(!sideNav);
  };
  return (
    <ResponsiveContext.Provider value={{ sideNav, toggleLayout }}>
      {props.children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContextProvider;
