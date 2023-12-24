import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import './styleproduct.scss';
import Cart from '../Cart/Cart';

const ListProducts = () => {
  const [listProducts, setListProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);}

  useEffect(() => {
    // Log cartItems after the state is updated
    console.log('Cart Items:', cartItems);
  }, [cartItems]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setListProducts(response.data.products || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="item">
        {listProducts.length > 0 &&
          listProducts.map((item, index) => (
            <div className="child" key={item.id}>
              <Link to={`/cua-hang/${item.id}`}>
                <div>
                  <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh" />
                </div>
                <div className="child_inf">
                  <h4>{item.name}</h4>
                  <b>{item.price}</b>
                </div>
              </Link>

              <div className="item__buy">
                <div>
                  <Link  to="/gio-hang" onClick={() => addToCart(item)}>Mua ngay</Link>
                </div>

                <div className="item__buy__icon">
                  <button>
                    <BsHeart />
                  </button>
                  <button onClick={() => addToCart(item)}>
                    <BsCart3 />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    
  );
};

export default ListProducts;
