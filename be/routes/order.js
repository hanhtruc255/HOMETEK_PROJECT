const express = require ('express')
const router = express.Router()
const orderController = require('../controllers/order')

// api: Lấy danh sách đơn đặt hàng 
router.get('/order', orderController.getOrder);
//Chỉnh sửa huỷ đơn đặt hàng
router.put('/order/cancel/:orderId', orderController.cancelOrder);
//api chỉnh sửa xác nhận đơn hàng
router.put('/admin/order/confirm/:orderId',orderController.confirmOrder )
//api lọc theo trạng thái đơn hàng
router.get('/order/status/:status', orderController.filterOrder)
//api tìm đơn hàng theo mã đơn hàng
router.get('/order/:orderId', orderController.findOrder)
//api xóa đơn hàng

module.exports= router