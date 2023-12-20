const express = require ('express')
const router = express.Router()
const productController = require('../controllers/product')

// api: Lấy sản phẩm 
router.get('/cua-hang', productController.getAllProducts);

// api: Lấy 1 sản phẩm theo id
router.get('/cua-hang/:id', productController.getProductById);

// api: Lấy sản phẩm theo danh mục
// router.get('/:category', productController.getProductCategory);

// api: Lấy sản phẩm theo note
// router.get('/products/:note', productController.getProductByNote)

// router.get('/:loai', product.category);

// router.get('/info/:id', product.info);

// router.post('/search/all', product.searchPost);
// router.get('/search/:key', product.search);

module.exports= router