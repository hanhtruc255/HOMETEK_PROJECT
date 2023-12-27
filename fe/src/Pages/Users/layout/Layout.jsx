import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../../Components/footer/Footer";
// import { Navbar } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
