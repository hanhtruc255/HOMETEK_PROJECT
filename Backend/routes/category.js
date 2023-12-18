const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

// Lấy tất cả danh mục chính
router.get('/Hometek', categoryController.getAllCategories);

// Lấy danh sách danh mục con của một danh mục chính
router.get('/categories/:categoryName/subcategories', categoryController.getSubCategories);

// Lấy sản phẩm của một danh mục con trong một danh mục chính
router.get('/categories/:categoryName/subcategories/:subCategoryName/products', categoryController.getProductsBySubCategory);

module.exports = router;