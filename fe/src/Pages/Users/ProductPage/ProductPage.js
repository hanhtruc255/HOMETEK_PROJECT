<<<<<<< HEAD
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
=======
import React from "react";
import { useState } from "react";
import CategorySidebar from "../../../Components/Products/CategorySidebar";
>>>>>>> 6914a1284c24c7c7062cab78110cfe0c8d6c9600

import "./styleproductpage.scss";
import ListProducts from "../../../Components/Products/ListProducts";
import Sort from "../../../Components/Products/Sort";

<<<<<<< HEAD
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
=======
>>>>>>> 6914a1284c24c7c7062cab78110cfe0c8d6c9600
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
<<<<<<< HEAD
>>>>>>> d58fbbf4f030b560f9a6795b8e7cef808aaf1e7c
=======
>>>>>>> 6914a1284c24c7c7062cab78110cfe0c8d6c9600
