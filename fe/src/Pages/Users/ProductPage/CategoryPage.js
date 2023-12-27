import React from 'react'
import CategorySidebar from '../../../Components/Products/CategorySidebar';
import Navbar from '../../../Components/Navbar/Navbar';
import CategoryProduct from '../../../Components/Products/CategoryProduct';
import "./styleproductpage.scss"
import Breadcrumb from '../../../Components/Products/Breadcrumb.js';
import Sort from '../../../Components/Products/Sort';


const CategoryPage = () => {
  return  (
  
  <div>
  <Navbar/>
  <Breadcrumb/>
  <Sort/>
  <div  className="Frame_Product">
    <CategorySidebar />
    <CategoryProduct/>
</div>
</div>
)
}

export default CategoryPage