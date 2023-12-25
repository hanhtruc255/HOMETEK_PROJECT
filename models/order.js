const mongoose = require('mongoose');

// Định nghĩa schema cho đơn đặt hàng
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  phone: { type: String },
  address: { type: String },
  payment: { type: String },
  products: [
    {
      productId: {
        type: String,
        required: true,
      },
      name:{type: String},
      image:{type: String},
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Chưa xác nhận', 'Đã xác nhận', 'Đang giao hàng', 'Đã giao hàng', 'Đã hủy'],
    default: 'Chưa xác nhận',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('order',orderSchema,'order')
