// src/components/blog/BlogList.js
import React from 'react';
import BlogItem from './BlogItem';
import './BlogList.css';

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogItem
          key={post.blog_id}
          title={post.title}
          content={post.content}
          image={post.image}
          imageTitle={post.image_title}
          createdAt={post.created_at}
        />
      ))}
    </div>
  );
}

export default BlogList;
