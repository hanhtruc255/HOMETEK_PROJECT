import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link,useNavigate  } from 'react-router-dom';
import { BsHeart , BsCart3 } from 'react-icons/bs';
import "./styleproduct.scss";


const CategoryProduct = ({ sortCriteria, filteredBrands, selectedPrice}) => {
  const { categoryId } = useParams();
  const navigate = useNavigate(); 
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [product, setProduct] = useState(null);
  const [whishlistItems, setWhishlistItems] = useState([]);
  const [wishlistChanged, setWishlistChanged] = useState(false);


  const sortProducts = (products, criteria) => {
    switch (criteria) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'oldest':
        return [...products].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      case 'newest':
        return [...products].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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
    alert('Đã thêm vào giỏ hàng thành công');
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = [...existingCart, item];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);
    const checkbox = document.getElementById(`checkbox-${item._id}`);
    if (checkbox) {
      checkbox.checked = true;
    }
  };

  ///add to whishlist
  useEffect(() => {
    setWhishlistItems(JSON.parse(localStorage.getItem('Whishlist')) || []);
    setWishlistChanged(false);
  }, [wishlistChanged]); 

  const isItemInWishlist = (itemId) => {
    return whishlistItems.some((wishlistItem) => wishlistItem._id === itemId);
  };

  const addToWhishlist = (item) => {
    const isDuplicate = isItemInWishlist(item._id);
    if (isDuplicate) {
      const updatedWhishlist = whishlistItems.filter((wishlistItem) => wishlistItem._id !== item._id);
      setWhishlistItems(updatedWhishlist);
      localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
      setWishlistChanged(true);
      alert('Đã xóa khỏi sản phẩm yêu thích.');
    } else {
      const updatedWhishlist = [...whishlistItems, item];
      setWhishlistItems(updatedWhishlist);
      localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
      setWishlistChanged(true);
      alert('Đã thêm vào sản phẩm yêu thích.');
    }
  };

  return (
    <div className='item'>
      {sortedProducts.map((item) => (
        <div key={item._id}  className='child'>
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
              <Link to="/gio-hang" onClick={() => addToCart(item, true)}>Mua ngay</Link>
            </div>

            <div className="item__buy__icon">
              <button
              style={{ color: isItemInWishlist(item._id) ? 'rgb(170, 4, 4)' : 'inherit' }} onClick={() => addToWhishlist(item)}><BsHeart /></button>
              <button onClick={() => addToCart(item)}><BsCart3 /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryProduct;
