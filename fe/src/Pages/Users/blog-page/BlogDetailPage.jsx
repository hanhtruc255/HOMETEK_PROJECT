import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListDetail from '../../../Components/blog/detail/ListDetail';

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blog/${blogId}`);
        
        if (!response.ok) {
          throw new Error("Blog response was not ok");
        }

        const data = await response.json();

        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [blogId]);

  if (blogPosts.length === 0) {
    return <p>Loading...</p>;
  }

  // Render the ListDetail component with the fetched blog data
  return <ListDetail posts={blogPosts} />;
};

export default BlogDetailPage;
