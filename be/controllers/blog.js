
const Blog = require("../models/blog");

//Xem Blog:
const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//Xem chi tiết Blog
const getBlogDetail = async (req, res) => {
  const {blogId} = req.params;
  try {
    const blog = await Blog.find({ blogId: { $eq: blogId } });
    res.json(blog);
  } catch (error) {
    res.status(500).json({error:'Có lỗi'})
  }
}
 //Xóa bài blog
const deleteBlog = async (req, res) => {
  const blogId = req.params.blogId;
  try {
    const deletedBlog = await Blog.findOneAndDelete({ blogId });
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Không tìm thấy bài blog.' });
    }
    return res.json({ message: 'Xóa bài blog thành công.', deletedBlog });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server.' });
  }
};
//Sửa bài Blog
const editBlog = async (req, res) => {
  const {blogId, title, content, image, imageTitle } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { blogId,
        title,
        content,
        image,
        imageTitle  },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Thêm bài Blog
const addBlog = async (req, res) => {
  const { blogId, title, content, image, imageTitle} = req.body;
  const newBlog = new Blog({
    blogId,
    title,
    content,
    image,
    imageTitle
  });

  try {
    let savedBlog = await newBlog.save();
    console.log(savedBlog)
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {getBlog, getBlogDetail, deleteBlog, editBlog, addBlog };