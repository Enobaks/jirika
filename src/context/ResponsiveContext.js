import React, { createContext, useState } from "react";

export const ResponsiveContext = createContext();

const ResponsiveContextProvider = (props) => {
  const [state, setState] = useState({
    sideNav: false,
    bar: false,
  });
  const toggleLayout = () => {
    setState({ sideNav: !state.sideNav });
  };
  const toggleBar = () => {
    setState({ bar: !state.bar });
  };
  return (
    <ResponsiveContext.Provider value={{ ...state, toggleLayout, toggleBar }}>
      {props.children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContextProvider;
