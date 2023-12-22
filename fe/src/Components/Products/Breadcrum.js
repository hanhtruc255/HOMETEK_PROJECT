import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import "./CategoryProduct.scss"


const Breadcrum = () => {
  const {category} = useParams();
  console.log(category)
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


  return(
        <h3 className='s1'>
          Hometek/ {category}
        </h3>


  )
          }



export default Breadcrum;