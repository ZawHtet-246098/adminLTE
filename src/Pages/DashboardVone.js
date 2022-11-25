import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";

const DashboardVone = () => {
  return (
    <div>
      <div className="App text-align-start">
        <Header />
        <Home />
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardVone;
