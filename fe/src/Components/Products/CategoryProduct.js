import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import "./CategoryProduct.scss"


const CategoryProduct = () => {
  const {category} = useParams();
  const [product, setProduct] = useState(null);
  console.log(">>>", category)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        console.log(">>>>", response)
        if (response.data && response.data.products && Array.isArray(response.data.products)) {
          setProduct(response.data.products);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchData();
  }, [category]);
  console.log(">>>",setProduct)

  return (
      <div className='item'>
        {product !== null &&
          product.map((item) => (
            <div key={item.id} className='child'>
                  <Link to={`/${item.category}/${item.id}`}>
                      <div>
                          <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
                      </div>
                      <div className='child_inf'>
                          <h4>{item.name}</h4>
                          <b>{item.price}</b>
                      </div >     
                  </Link>

                  <div className="item__buy">
                      <div >
                          <Link to="/gio-hang">Mua ngay</Link>
                      </div>

                      <div className="item__buy__icon">
                          <ul>
                              <li>
                                  <button><BsHeart />
                                  </button>
                              </li>
                              <li> 
                                  <button><BsCart3 />
                                  </button> 
                              </li>
                          </ul>
                      </div>
                  </div>
            </div>
          ))}
      </div>

  );
        }

export default CategoryProduct