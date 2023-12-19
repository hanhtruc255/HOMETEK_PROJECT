const express = require ('express')
const router = express.Router()
const productController = require('../controllers/product')

// api: Lấy sản phẩm 
router.get('/Cua_hang', productController.getAllProducts);

// api: Lấy 1 sản phẩm theo id
router.get('/Cua_hang/:id', productController.getProductById);

// api: Tìm sản phẩm theo tên
router.post('/name', productController.getProductByName)

//api: Tạo một sản phẩm mới
// router.post()


module.exports= router