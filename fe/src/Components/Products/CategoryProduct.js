import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link,useNavigate  } from 'react-router-dom';
import { BsHeart, BsCart3 } from 'react-icons/bs';
import "./styleproduct.scss";


const CategoryProduct = ({ sortCriteria, filteredBrands, selectedPrice}) => {
  const { categoryId } = useParams();
  const navigate = useNavigate(); 
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState(null);
  const sortProducts = (products, criteria) => {
    switch (criteria) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'oldest':
        return [...products].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case 'newest':
        return [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      default:
        return products;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/categories/${categoryId}`);
        if (response.data) {
          const productData = Array.isArray(response.data)
            ? response.data
            : Object.values(response.data);
          setProduct(productData);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {}
    };
    fetchData();
  }, [categoryId]);

  const filteredProducts = product
    ? product.filter((item) => {
        // Apply brand filter
        const brandFilter = filteredBrands.size === 0 || filteredBrands.has(item.brand_name);

        // Apply price filter
        const priceFilter =
          selectedPrice === null ||
          (selectedPrice === 0 && item.price <= 2000000) ||
          (selectedPrice === 1 && item.price > 2000000 && item.price <= 5000000) ||
          (selectedPrice === 2 && item.price > 5000000);

        return brandFilter && priceFilter;
      })
    : [];

  const sortedProducts = sortProducts(filteredProducts, sortCriteria);
  
  //add to cart
  const addToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = [...existingCart, item];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);
  };

  return (
    <div className='item'>
      {sortedProducts.map((item) => (
        <div key={item._id} className='child'>
          <Link to={`/${item.categoryId}/${item._id}`}>
            <div>
              <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
            </div>
            <div className='child_inf'>
              <h4>{item.name}</h4>
              <b>{item.price}đ</b>
            </div>
          </Link>

          <div className="item__buy">
            <div>
              <Link to="/gio-hang">Mua ngay</Link>
            </div>

            <div className="item__buy__icon">
              <button><BsHeart /></button>
              <button onClick={() => addToCart(item)}><BsCart3 /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryProduct;
