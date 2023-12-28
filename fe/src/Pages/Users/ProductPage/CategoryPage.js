import React from "react";
import CategorySidebar from "../../../Components/Products/CategorySidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import CategoryProduct from "../../../Components/Products/CategoryProduct";
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import "./styleproductpage.scss";
import Breadcrum from "../../../Components/Products/Breadcrum";
import Sort from "../../../Components/Products/Sort";

const CatogoryPage = () => {
  return (
    <div>
      <Breadcrum />
      <Sort />
      <div className="Frame_Product">
        <CategorySidebar />
        <CategoryProduct />
      </div>
    </div>
  );
};
