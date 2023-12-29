const mongoose = require('mongoose');

// Định nghĩa schema cho đơn đặt hàng
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  orderStatus: {
    type: String,
    enum: ['Chưa xác nhận', 'Đã xác nhận', 'Đang giao hàng', 'Đã giao hàng', 'Đã hủy'],
    default: 'Chưa xác nhận',
  },
  deliveryInfor : [{
    customerName: {type: String},
    deliveryAddredd: {type: String},
    deliveryPhoneNumber: {type: String}
  }],
  phone: { type: String },
  address: { type: String },
  payment: { type: String },
  orderProducts: [
    {
      productId: {
        type: String
      },
      name:{type: String},
      image:{type: String},
      quantity: {
        type: Number
      },
      price:{type: Number},
      sale_price:{type: Number},
      rating: [{
        isRating: {type: Boolean},
        _isRatingComment: {type: String},
        star: {type: Number},
        content: {type: String},
      }]
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  shippingFee: {type: Number},
  voucher: [{
    voucherCode: {type: String},
    amount: {type: Number}
  }],
  finalAmount: {type: Number}
});

module.exports = mongoose.model('order',orderSchema,'order')
