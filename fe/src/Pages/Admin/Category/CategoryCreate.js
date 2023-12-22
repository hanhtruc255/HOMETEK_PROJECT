import { useState } from "react";

const CategoryCreate = () => {
  const [category, setCategory] = useState({
    name: "",
    subCategories: "",
  });
  const handleChange = (e) => {
    setCategory((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleCreateCategory = () => {
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
        <h4>Create Category</h4>
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
          onClick={() => handleCreateCategory()}
        >
          Create
        </button>
      </div>
    </div>
  );
};
export default CategoryCreate;
