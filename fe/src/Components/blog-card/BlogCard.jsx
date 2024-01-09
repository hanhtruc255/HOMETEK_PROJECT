import React from "react";
import styles from "./BlogCard.module.css";
// import blogImage from "../../assets/background/blogImage.png";
// import chevronRightIcon from "../../assets/icons/chevron-right.svg";
import blogImage from "../../Assets/background/blogImage.png";
import chevronRightIcon from "../../Assets/icons/chevron-right.svg";
const BlogCard = (props) => {
  return (
    <div className={styles.blog}>
      <div className={styles.blogImage}>
        <img src={props.imgSrc} alt="" className={styles.blogImg} />
      </div>
      <div className={styles.blogTitle}>
        <h3 className={styles.title}>{props.blogTitle}</h3>
      </div>
      <div className={styles.wrapperFooter}>
        <div className={styles.blogFooter}>
          <span className={styles.blogCreationDate}>{props.dateCreate}</span>
          <button className={styles.blogIconBtn}>
            <img src={chevronRightIcon} alt="" className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
