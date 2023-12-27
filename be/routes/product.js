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
//api khi lọc theo nhãn hàng (đang fix)
router.get('/categories/:id/:brand_name', productController.getProductBrand);
//api cập nhật sản phẩm (đã làm được)
router.put('/Cua_hang/:id', productController.updateProduct)
// api: Tìm sản phẩm theo tên (chưa làm được)
//api xóa sản phẩm Admin(đã làm được)
router.delete('/Cua_hang/:id', productController.deleteProduct)
//api: Tạo một sản phẩm mới Admin(đã làm được)
router.post('/Cua_hang', productController.addProduct)
// router.post()


module.exports= router