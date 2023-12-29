// src/components/blog/BlogItem.js
import React from 'react';
import './BlogItem.css'; // Import CSS
import image1 from '../../../src/Assets/img1.jpg';
import { Button } from 'react-bootstrap'; // Import Button from Bootstrap
import { SlCalender } from "react-icons/sl";
import { FiArrowRightCircle } from "react-icons/fi";

function BlogItem({ title, content, imageTitle, createdAt }) {
  return (
    <div className='container'>
      <div className='blog-item'>
        <div>
          <img src={image1} alt={imageTitle} className='img1' />
        </div>
        <div className='blog-item-content'>
          <p className='date'>
            <SlCalender />
            {createdAt}
          </p>
          <h2>{title}</h2>
          <Button variant='Link' className='read-more-btn'>
            ĐỌC NGAY
            <FiArrowRightCircle style={{ marginLeft: '5px' }} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
