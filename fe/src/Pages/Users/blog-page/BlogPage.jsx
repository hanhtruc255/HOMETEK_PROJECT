// src/Pages/Users/blog-page/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import BlogList from '../../../Components/blog/BlogList';
import blogData from "../../../data_update/data/blog1.json";
import image1 from "../../../Assets/background/homepage-heading-background.png"
import './BlogPage.css';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogData);
  }, []);

  return (
    <div>
      <div className='banner' >
        <img src= {image1} alt="" className='img1' />
        <h2 className='text1'>Chuyện Nhà Hometek</h2>
      </div>

      {/* Component BlogList */}
      <BlogList posts={blogPosts} />
    </div>
  );
};

export default BlogPage;
