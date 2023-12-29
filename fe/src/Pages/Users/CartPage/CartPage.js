<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Cart from '../../../Components/Cart/Cart';
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';
=======
import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Cart from "../../../Components/Cart/Cart";
>>>>>>> 519dfbb58dee732296aabd525c51af41f08e2ebc

const CartPage = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const updateCartQuantity = () => {
    setCartQuantity();
  };

  return (
    <div>
<<<<<<< HEAD
      <Navbar />
      <Breadcrumb />
      <Cart updateCartQuantity={updateCartQuantity}/>
    </div>
  );
}
=======
      <Cart />
    </div>
  );
};
>>>>>>> 519dfbb58dee732296aabd525c51af41f08e2ebc

export default CartPage;
