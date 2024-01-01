import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { BsFillHeartFill } from "react-icons/bs";
import './Whishlist.scss';

const Whishlist = (updatedWhishlist) => {
  const [BuyItem, setBuyItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  //add to cart
  const addToCart = (item) => {
    alert('Đã thêm vào giỏ hàng thành công');
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = [...existingCart, item];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);
  };
    //mua ngay
    const addToPayment = (item) => {
      const existingPayment = JSON.parse(localStorage.getItem('payment')) || [];
      const newPayment = [...existingPayment, item];
      localStorage.setItem('payment', JSON.stringify(newPayment));
    };

    const [whishlistItems, setWhishlistItems] = useState(() => {
      
        const storedWhishlistItems = JSON.parse(localStorage.getItem('Whishlist')) || [];
        return storedWhishlistItems;
      });
    
      const removeItem = (itemId) => {
        const isConfirmed = window.confirm('Bạn có muốn xóa sản phẩm không?');
        if (isConfirmed) {
          const updatedWhishlist = whishlistItems.filter((item) => item._id !== itemId);
          setWhishlistItems(updatedWhishlist);
          localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
        }
      };

          ///format price
    const formatPrice = (price) => {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
  return (
    <div>
        <p className='title'>SẢN PHẨM YÊU THÍCH</p>

        <div className='item'>
            {whishlistItems.map((item) =>(
                <div key={item._id} className='child'>
                <Link to={`/${item.categoryId}/${item._id}`}>
                  <div>
                    <img src={item.image} alt="hinh"/>
                  </div>
                  <div className='child_inf'>
                    <h4>{item.name}</h4>
                    <p>{formatPrice(item.price)}đ</p>
                  </div>
                </Link>
      
                <div className="item__buy">
                  <div>
                        <Link to={"/thanh-toan-mua-ngay"}onClick={() => addToPayment({ ...item, quantity})}>
                            MUA HÀNG
                          </Link>
                  </div>
      
                  <div className="item__buy__icon">
                     <button onClick={() => addToCart({ ...item, quantity})}><BsCart3 /></button>
                    <button className='icon_heart' onClick={() => removeItem(item._id)}><BsFillHeartFill /></button>
                   
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Whishlist