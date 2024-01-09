// BlogDetail.js
import React from 'react';
import styles from './BlogDetail.module.css';
// import blogData from "../../../data_update/data/blog1.json"

function addBoldTags(paragraph) {
  return paragraph.length < 100 ? <span className={styles.blogContentTitle}>{paragraph}</span> : paragraph;
}

function BlogDetail({blogId, title, content, image, imageTitle, createdAt, subImage}) 
{

  return (
    <div className={styles.detailBlog}>

      <div className={styles.detailBlogWrapper}> 
      <h2 className={styles.detailBlogTitle}>{title}</h2>

      <img src={image} alt="" className={styles.detailBlogImg}/>
      <p className={styles.detailBlogImgTitle}>{imageTitle}</p>

      

      {content.split('\n').map((paragraph, index) => (
          <p key={index} className={styles.blogContent}>

            {addBoldTags(paragraph)}
            <br />
          </p>
        ))}
      <img src={subImage} alt='' className={styles.detailSubImg}/>

      <p className={styles.blogDate}>Ngày đăng bài: {createdAt}</p>
      </div>
    </div>

  )
}




export default BlogDetail;
