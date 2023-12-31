import React from 'react';
import {Link} from 'react-router-dom';
import styles from './BlogItem.module.css'; // Import CSS
import { SlCalender } from "react-icons/sl";
import { FiArrowRightCircle } from "react-icons/fi";

function BlogItem({blogId, title, content, image, imageTitle, createdAt }) {
  return (
    <div className={styles.container}>
      <div className={styles.blogItem}>
        <div className={styles.wrapperImage}>
          <img src={image} alt={imageTitle} className={styles.img} />
        </div>
        
        <div className={styles.blogItemContent}>
          <span className={styles.dateSection}><SlCalender className ={styles.size2}  />
            {createdAt}</span>
            
          <Link to={`/blog-page/${blogId}`} className={styles.LinkDecorTitle}>{title}</Link>
          
          <div className={styles.wrapperReadBtn}>
          <Link to={`/blog-page/${blogId}`} className={styles.LinkDecor}>ĐỌC NGAY <FiArrowRightCircle className ={styles.size} /></Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;

