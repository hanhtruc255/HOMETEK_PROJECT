// import React from 'react';
// import BlogDetail from './BlogDetail';
// // import { Link } from 'react-router-dom';


// function ListDetail({ posts }) {

//   if (!posts || posts.length === 0) {
//     return <p>Không có bài blog để hiển thị</p>;
//   }

//   return (
//     <div>
//       {posts.map(post => ( <div key = {post.blogID}> 
//         <BlogDetail
//           blogId={post.blogId}
//           title={post.title}
//           content={post.content}
//           image={post.image}
//           imageTitle={post.imageTitle}
//           createdAt={post.created_at}
//           subImage={post.sub_image}
//         />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListDetail;

import React from 'react';
import BlogDetail from './BlogDetail';

function ListDetail({ posts, selectedBlogId }) {
  if (!posts || posts.length === 0) {
    return <p>Không có bài blog để hiển thị</p>;
  }
  const selectedPost = posts.find(post => posts.blogId === selectedBlogId);


  if (!selectedPost) {
    return <p>Không tìm thấy bài viết</p>;
  }

  return (
    <div>
      <BlogDetail
        blogId={selectedPost.blogId}
        title={selectedPost.title}
        content={selectedPost.content}
        image={selectedPost.image}
        imageTitle={selectedPost.imageTitle}
        createdAt={selectedPost.created_at}
        subImage={selectedPost.sub_image}
      />
    </div>
  );
}

export default ListDetail;


