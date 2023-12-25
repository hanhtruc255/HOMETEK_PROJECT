const express = require ('express')
const router = express.Router()
const productController = require('../controllers/product')

// api: Lấy sản phẩm 
router.get('/Cua_hang', productController.getAllProducts);

// api: Lấy 1 sản phẩm theo id
router.get('/Cua_hang/:id', productController.getProductById);
//api hiển thị danh mục sản phẩm
router.get('/categories', productController.getCategory);
//api khi bấm vào "bếp", "tiện ích", "dọn dẹp"
router.get('/categories/:id', productController.getCategoryProduct);
//api khi bấm vào mục con của "bếp", "tiện ích", "dọn dẹp"
router.get('/categories/:id/:id', productController.getSubcategories);

//api khi lọc theo nhãn hàng
router.get('/categories/:brand_name', productController.getProductBrand)
//api cập nhật sản phẩm
router.put('', productController.updateProduct)
// api: Tìm sản phẩm theo tên


//api: Tạo một sản phẩm mới
// router.post()


module.exports= router