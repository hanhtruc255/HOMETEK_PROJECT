<<<<<<< HEAD
import React, { useState } from 'react';
import CategorySidebar from '../../../Components/Products/CategorySidebar';
import Navbar from '../../../Components/Navbar/Navbar';
import CategoryProduct from '../../../Components/Products/CategoryProduct';
import "./styleproductpage.scss";
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';
import Sort from '../../../Components/Products/Sort';

const CategoryPage = () => {
  const [currentSort, setCurrentSort] = useState("default");
  const [filteredBrands, setFilteredBrands] = useState(new Set());
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [filterClicked, setFilterClicked] = useState(false);

  const handleSortChange = (selectedSort) => {
    setCurrentSort(selectedSort);
  };

  const handleFilterChange = (selectedBrands) => {
    setFilteredBrands(selectedBrands);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleFilterClick = () => {
    setFilterClicked(true);
  };


  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <Sort onSortChange={handleSortChange} />
      <div className="Frame_Product">
        <CategorySidebar
          onFilterChange={handleFilterChange}
          onPriceChange={handlePriceChange}
          onFilterClick={handleFilterClick} 
        />
        <CategoryProduct
          sortCriteria={currentSort}
          filteredBrands={filteredBrands}
          selectedPrice={selectedPrice}
          filterClicked={filterClicked} 
        />
=======
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
>>>>>>> 519dfbb58dee732296aabd525c51af41f08e2ebc
      </div>
    </div>
  );
};
<<<<<<< HEAD

export default CategoryPage;
=======
>>>>>>> 519dfbb58dee732296aabd525c51af41f08e2ebc
