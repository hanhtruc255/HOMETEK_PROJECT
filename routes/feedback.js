const express = require ('express')
const router = express.Router()
const feedbackController = require('../controllers/feedback')

// api: Lấy sản phẩm 
router.post('/submit', feedbackController.addFeedback)


//api: Tạo một sản phẩm mới
// router.post()


module.exports= router