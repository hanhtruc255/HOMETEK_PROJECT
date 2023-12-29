const express = require ('express')
const router = express.Router()
const blogController = require('../controllers/blog')

// api: Xem tất cả bài blog
router.get('/blog', blogController.getBlog);
//api Xem chi tiêt 1 bài blog
router.get('/blog/:blogId', blogController.getBlogDetail)
//api Xóa bài blog (admin)(làm được rồi)
router.delete('/blog/:blogId', blogController.deleteBlog)
// api chỉnh sửa (admin)( đã làm được)
router.put('blog/:blogId', blogController.editBlog)
// api thêm bài Blog mới (admin) ( đã làm)
router.post('/blog', blogController.addBlog)

module.exports= router