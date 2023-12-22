import { useState } from "react";
import AdminLayout from "../../../Components/Admin/AdminLayout";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([
    {
      categoryId: "P1",
      name: "Bếp",
      subCategories: [
        { name: "Nồi chiên không dầu" },
        { name: "Nồi cơm thông minh" },
        { name: "Máy rửa thực phẩm" },
        { name: "Máy khử trùng đồ dùng bếp" },
      ],
    },

    {
      categoryId: "P2",
      name: "Dọn dẹp",
      subCategories: [
        { name: "Bàn chải đa năng" },
        { name: "Máy lọc không khí thông minh" },
        { name: "Robot hút bụi lau nhà" },
      ],
    },
    {
      categoryId: "P3",
      name: "Tiện ích",
      subCategories: [
        { name: "Máy tạo bọt rửa tay" },
        { name: "Loa trợ lý ảo thông minh" },
        { name: "Công tắc thông minh" },
      ],
    },
  ]);
  const handleDeleteCategory = () => {
    //api
  };
  return (
    <div className="card">
      <div className="card-header">
        <h4>Categories</h4>
      </div>
      <div className="card-body">
        <Link className="btn btn-success" to={"create"}>
          Create Category
        </Link>
        <table className="table table-bordered table-hover my-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>SubCategories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories?.length > 0 &&
              categories?.map((item) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{item.categoryId}</td>
                    <td className="col-4">{item.name}</td>
                    <td className="col-4">
                      <ul className="list-group">
                        {item.subCategories?.map((category) => {
                          return (
                            <li key={category.name} className="list-group-item">
                              {category.name}
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                    <td>
                      <Link className="btn btn-warning" to={"update"}>
                        Update
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleDeleteCategory()}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Category;
