const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');


//Lấy tất cả danh mục
router.get('/categories', categoryController.getAllCategories)


module.exports = router;