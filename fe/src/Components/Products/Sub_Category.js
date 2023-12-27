import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsHeart, BsCart3 } from 'react-icons/bs';
import './styleproduct.scss';

const SubCategoryProduct = ({ sortCriteria, filteredBrands, selectedPrice }) => {
  const { sub_categoryId, categoryId } = useParams();
  const [product, setProduct] = useState([]);
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
        const response = await axios.get(`http://localhost:3000/categories/${categoryId}/${sub_categoryId}`);

        if (response.data) {
          const productData = Array.isArray(response.data)
            ? response.data
            : Object.values(response.data);
          setProduct(productData);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error){}
    };
    fetchData();
  }, [sub_categoryId]);

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

  return (
    <div className='item'>
      {sortedProducts.map((item) => (
        <div key={item._id} className='child'>
          <Link to={`/${item.categoryId}/sub/${item.sub_categoryId}/${item._id}`}>
            <div>
              <img src={item.image} />
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
              <button><BsCart3 /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryProduct;
