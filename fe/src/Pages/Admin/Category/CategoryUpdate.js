import { useEffect, useState } from "react";

const CategoryUpdate = () => {
  const [category, setCategory] = useState({
    categoryId: "P1",
    name: "Bếp",
    subCategories: [
      { name: "Nồi chiên không dầu" },
      { name: "Nồi cơm thông minh" },
      { name: "Máy rửa thực phẩm" },
      { name: "Máy khử trùng đồ dùng bếp" },
    ],
  });
  useEffect(() => {
    setCategory((prev) => {
      return {
        ...prev,
        subCategories: prev.subCategories.map((item) => item.name).join("\n"),
      };
    });
  }, []);
  const handleChange = (e) => {
    setCategory((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleUpdateCategory = () => {
    let splitSubCategories = category?.subCategories?.split("\n");
    splitSubCategories = splitSubCategories?.filter((item) => !!item);
    splitSubCategories = splitSubCategories.map((item) => {
      return {
        name: item,
      };
    });

    try {
      //call api
      // {
      //   name:category?.name,
      //   subCategories: splitSubCategories
      // }
    } catch (error) {}
  };
  return (
    <div className="card">
      <div className="card-header">
        <h4>Update Category</h4>
      </div>
      <div className="card-body">
        <div className="col-md-6">
          <label>Category Name</label>
          <input
            className="form-control"
            onChange={handleChange}
            name="name"
            value={category.name}
          />
        </div>
        <div className="col-md-6">
          <label>SubCategories</label>
          <textarea
            className="form-control"
            rows={5}
            onChange={handleChange}
            placeholder="Use enter to separate sub categories"
            value={category.subCategories}
            name="subCategories"
          ></textarea>
        </div>
        <button
          className="btn btn-success my-2"
          onClick={() => handleUpdateCategory()}
        >
          Update
        </button>
      </div>
    </div>
  );
};
export default CategoryUpdate;
