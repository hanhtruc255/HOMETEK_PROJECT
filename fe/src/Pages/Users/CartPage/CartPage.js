import React, {useState} from 'react'
import Navbar from '../../../Components/Navbar/Navbar';
import Cart from '../../../Components/Cart/Cart';
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';

const CartPage = () => {

  return (
    <div>
      <Navbar/>
      <Breadcrumb/>
      <Cart/>
      
    </div>
  )
}

export default CartPage