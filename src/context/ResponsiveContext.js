import React, { createContext, useState } from "react";

export const ResponsiveContext = createContext();

const ResponsiveContextProvider = (props) => {
  const [state, setState] = useState(false);
  const toggleLayout = () => {
    setState(!state);
    console.log("clicked Layout");
  };

  return (
    <ResponsiveContext.Provider value={{ state, toggleLayout }}>
      {props.children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContextProvider;
