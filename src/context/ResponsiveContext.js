import React, { createContext, useState } from "react";

export const ResponsiveContext = createContext();

const ResponsiveContextProvider = (props) => {
  const [state, setState] = useState(true);
  const toggleLayout = () => {
    setState(!state);
  };

  return (
    <ResponsiveContext.Provider value={{ state, toggleLayout }}>
      {props.children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContextProvider;
