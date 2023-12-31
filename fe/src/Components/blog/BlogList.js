import React from 'react';
import BlogItem from './BlogItem';

import './BlogItem.module.css';

function BlogList({ posts }) {

  if (!posts || posts.length === 0) {
    return <p>Không có bài blog để hiển thị</p>;
  }

  return (
    <div>
      {posts.map(post => ( <div key = {post.blogID}> 
        <BlogItem
          blogId={post.blogId}
          title={post.title}
          content={post.content}
          image={post.image}
          imageTitle={post.imageTitle}
          createdAt={post.created_at}
          subImage={post.sub_image}
        />
        </div>
      ))}
    </div>
  );
}

export default BlogList;


