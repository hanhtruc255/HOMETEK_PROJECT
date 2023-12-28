import React from 'react'
import CategorySidebar from '../../../Components/Products/CategorySidebar';
import Navbar from '../../../Components/Navbar/Navbar';
import "./styleproductpage.scss"
import Breadcrumb from '../../../Components/Products/Breadcrumb.js';
import Sort from '../../../Components/Products/Sort';
import SubCategoryProduct from '../../../Components/Products/Sub_Category';


const SubCategoryPage = () => {
  return  (
  <div>
    <Navbar/>
    <Breadcrumb/>
    <Sort/>
    <div  className="Frame_Product">
      <CategorySidebar />
      <SubCategoryProduct/>
    </div>
  </div>
)
}

export default SubCategoryPage