import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Cart from '../../../Components/Cart/Cart';
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';

const CartPage = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const updateCartQuantity = () => {
    setCartQuantity();
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <Cart updateCartQuantity={updateCartQuantity}/>
    </div>
  );
}

export default CartPage;
