import React from 'react'
import CategorySidebar from '../../../Components/Products/CategorySidebar';
import Navbar from '../../../Components/Navbar/Navbar';
import CategoryProduct from '../../../Components/Products/CategoryProduct';

const CatogoryPage = () => {
  return (
    <div>
      <Navbar/>
      <CategorySidebar/>
      <CategoryProduct/>
    </div>
  )
}

export default CatogoryPage