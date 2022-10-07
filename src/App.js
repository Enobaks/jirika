import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserDashboard from "./pages/UserDashboard";
import Waitlist from "./pages/Waitlist";
import Home from "./pages/home";
import ResponsiveContextProvider from "./context/ResponsiveContext";

function App() {
  return (
    <ResponsiveContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Waitlist />} />
          <Route path="/user.jirika" element={<UserDashboard />}>
            <Route index element={<Home />} />
            <Route index element={<Home />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ResponsiveContextProvider>
  );
}

export default App;
