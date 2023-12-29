<<<<<<< HEAD
// import React from 'react';
// import { useState } from 'react';
// import CategorySidebar from '../../../Components/Products/CategorySidebar';
// import Navbar from '../../../Components/Navbar/Navbar';

// import './styleproductpage.scss';
// import ListProducts from '../../../Components/Products/ListProducts';
// import Sort from '../../../Components/Products/Sort';
// import Breadcrumb from '../../../Components/Products/Breadcrumb';
=======
import React from "react";
import { useState } from "react";
import CategorySidebar from "../../../Components/Products/CategorySidebar";
>>>>>>> d58fbbf4f030b560f9a6795b8e7cef808aaf1e7c

import "./styleproductpage.scss";
import ListProducts from "../../../Components/Products/ListProducts";
import Sort from "../../../Components/Products/Sort";

<<<<<<< HEAD
// const ProductPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   return (
//     <div>
//         <Navbar/>
//         <Breadcrumb/>
//         <Sort/>
//         <div  className="Frame_Product">
//           <CategorySidebar />
//           <ListProducts setCartItems={setCartItems}/>
//     </div>
//     </div>
//   )
// }

// export default ProductPage
=======
const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <h3 className="s1">Hometek/Cửa hàng</h3>
      <Sort />
      <div className="Frame_Product">
        <CategorySidebar />
        <ListProducts setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default ProductPage;
>>>>>>> d58fbbf4f030b560f9a6795b8e7cef808aaf1e7c
