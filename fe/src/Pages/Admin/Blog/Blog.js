import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./Blog.scss";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/blog')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 
  return (
    <>
      <div className="blog-filter">
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Tên bài viết: </label>
          <div className="col-lg-6 my-2">
            <input className="form-control" />
          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            <button className="btn search-btn mx-2">Tìm kiếm</button>
            <Link className="btn add-blog-btn" to={"them"}>
              Thêm bài viết
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-table table-responsive">
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-active">
            <tr>
              <th>STT</th>
              <th>Tên Blog</th>
              <th>Ngày đăng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {blogs?.length > 0 &&
              blogs?.map((item, index) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{index + 1}</td>
                    <td className="col-4">{item.title}</td>

                    <td>{item.created_at}</td>
                    <td>
                      <Link className="btn edit-btn" to={"cap-nhat"}>
                        Sửa
                      </Link>
                      <button className="btn btn-danger mx-2">Xóa</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Blog;
