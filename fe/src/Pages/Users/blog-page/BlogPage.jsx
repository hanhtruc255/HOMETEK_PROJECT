// src/Pages/Users/blog-page/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import BlogList from '../../../Components/blog/BlogList';
import blogData from "../../../data_update/data/blog.json";
import image1 from "../../../Assets/background/homepage-heading-background.png"
import styles from './BlogPage.module.css';


const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);


  useEffect(() => {
    setBlogPosts(blogData);
  }, []);

  return (
    <div>
      <div className={styles.Banner} >
        <img src= {image1} alt="banner" className={styles.img1} />
        <h2 className={styles.text1}>Chuyện Nhà Hometek</h2>
      </div>

      {/* Component BlogList */}
      <BlogList posts={blogPosts} />
    </div>
  );
};

export default BlogPage;

