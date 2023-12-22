import { Link } from "react-router-dom";
import "./Blog.scss";
const Blog = () => {
  const blogs = [
    {
      blog_id: "B1",
      title: "Những Lợi Ích Của Nồi Chiên Không Dầu",
      content:
        "Nồi chiên không dầu giúp cả nhà có những món ăn ngon miệng, ít béo, không mất thời gian và công sức nấu nướng.",
      sub_content:
        "Giảm công sức và thời gian chế biến món ăn /n .Nồi chiên không dầu còn được gọi là nồi chiên không khí, nồi chiên chân không. Thiết bị này làm chín thức ăn bằng cách đưa nhiệt độ lên cao, có thể tới khoảng 200 độ C, sau đó dùng cánh quạt tản nhiệt đều trên bề mặt thực phẩm, giúp thực phẩm chín và có bề ngoài giòn giống như cách chiên rán truyền thống. /n Nồi chiên không dầu được trang bị bộ lọc mùi và khói, nên quần áo cũng như không gian trong phòng không bị ám mùi thức ăn. Do được đậy kín, nồi chiên không dầu cũng không làm bắn dầu mỡ ra ngoài trong quá trình nấu nướng, bạn sẽ không mất công sức thu dọn 'bãi chiến trường'. /n Nồi chiên không dầu có thể làm chín thực phẩm mà không cần đến dầu ăn, hoặc chỉ dùng lượng rất ít để bôi lớp mỏng lên bề mặt thực phẩm. Ngoài giảm chi phí cho gia đình, món ăn chiên không dầu còn tốt cho những người ăn kiêng, giảm béo.",
      image: "",
      image_tittle:
        "Món ăn chiên trong nồi chiên không dầu cũng có màu vàng và vỏ giòn như cách chiên truyền thống.",
      created_at: "13/12/2023",
    },

    {
      blog_id: "B2",
      title: "Robot Hút Bụi Có Gì Mà Nhà Nhà Người Người Đổ Xô Đi Sắm?",
      content:
        "Nồi chiên không dầu giúp cả nhà có những món ăn ngon miệng, ít béo, không mất thời gian và công sức nấu nướng.",
      sub_content:
        "Giảm công sức và thời gian chế biến món ăn /n .Nồi chiên không dầu còn được gọi là nồi chiên không khí, nồi chiên chân không. Thiết bị này làm chín thức ăn bằng cách đưa nhiệt độ lên cao, có thể tới khoảng 200 độ C, sau đó dùng cánh quạt tản nhiệt đều trên bề mặt thực phẩm, giúp thực phẩm chín và có bề ngoài giòn giống như cách chiên rán truyền thống. /n Nồi chiên không dầu được trang bị bộ lọc mùi và khói, nên quần áo cũng như không gian trong phòng không bị ám mùi thức ăn. Do được đậy kín, nồi chiên không dầu cũng không làm bắn dầu mỡ ra ngoài trong quá trình nấu nướng, bạn sẽ không mất công sức thu dọn 'bãi chiến trường'. /n Nồi chiên không dầu có thể làm chín thực phẩm mà không cần đến dầu ăn, hoặc chỉ dùng lượng rất ít để bôi lớp mỏng lên bề mặt thực phẩm. Ngoài giảm chi phí cho gia đình, món ăn chiên không dầu còn tốt cho những người ăn kiêng, giảm béo.",
      image: "",
      image_tittle:
        "Món ăn chiên trong nồi chiên không dầu cũng có màu vàng và vỏ giòn như cách chiên truyền thống.",
      created_at: "13/12/2023",
    },
  ];
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
