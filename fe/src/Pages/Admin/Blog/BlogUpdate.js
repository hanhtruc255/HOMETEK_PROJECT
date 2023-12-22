const BlogUpdate = () => {
  return (
    <>
      <div className="blog-title mb-3">
        <button className="btn bg-dark text-white">
          <i className="bi bi-chevron-left"></i>
        </button>
        <span className="bg-secondary-subtle p-2 mx-2 rounded">
          Sửa bài viết
        </span>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="text-center fw-bold"> Sửa bài viết</h3>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="col-md-8">
            <label className="form-label">
              Blog ID
              <span className="text-danger">(*)</span>
            </label>
            <input className="form-control" name="name" />
          </div>
          <div className="col-md-8">
            <label className="form-label">
              Blog Title
              <span className="text-danger">(*)</span>
            </label>
            <input className="form-control" name="name" />
          </div>
          <div className="col-md-8">
            <label className="form-label">
              Content
              <span className="text-danger">(*)</span>
            </label>
            <textarea className="form-control" name="name" rows={5} />
          </div>
          <div className="col-md-8">
            <label className="form-label">
              Image
              <span className="text-danger">(*)</span>
            </label>
            <input
              className="form-control"
              name="name"
              type="file"
              title="Chọn tệp"
            />
          </div>
          <button className="btn btn-success my-2">Cập nhật</button>
        </div>
      </div>
    </>
  );
};
export default BlogUpdate;
