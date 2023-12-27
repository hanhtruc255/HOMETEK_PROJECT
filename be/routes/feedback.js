const express = require ('express')
const router = express.Router()
const feedbackController = require('../controllers/feedback')

// api: Hiển thị đánh giá 
router.get('/feedback', feedbackController.getFeedback)

// api: Thêm đánh giá

// api: Chỉnh trạng thái của đánh giá

// api : Sắp sếp theo tình trạng

// api: Xóa đánh giá


// router.post()


module.exports= router