import React from "react";
import { useState } from "react";
import CategorySidebar from "../../../Components/Products/CategorySidebar";

import React from "react";
import { useState } from "react";
import CategorySidebar from "../../../Components/Products/CategorySidebar";


import "./styleproductpage.scss";
import ListProducts from "../../../Components/Products/ListProducts";
import Sort from "../../../Components/Products/Sort";

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
