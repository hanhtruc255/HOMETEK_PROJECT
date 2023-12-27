import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsHeart, BsCart3 } from 'react-icons/bs';
import './styleproduct.scss';

const SubCategoryProduct = () => {
  const { sub_categoryId, categoryId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/categories/${categoryId}/${sub_categoryId}`);

        if (Array.isArray(response.data)) {
          setProduct(response.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchData();
  }, [sub_categoryId]);

  return (
    <div className='item'>
      {product.map((item) => (
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
