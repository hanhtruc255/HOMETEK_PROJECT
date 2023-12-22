import React from 'react';
import CategorySidebar from '../../../Components/Products/CategorySidebar';
import Navbar from '../../../Components/Navbar/Navbar';

import './ProductPage.scss';
import ListProducts from '../../../Components/Products/ListProducts';
import Sort from '../../../Components/Products/Sort';

const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <h3 className='s1'>Hometek/Cửa hàng</h3>
        <Sort/>
        <div  className="Frame_Product">
          <CategorySidebar />
          <ListProducts/>
    </div>
    </div>
  )
}

export default ProductPage