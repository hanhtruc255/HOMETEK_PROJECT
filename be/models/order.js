const mongoose = require("mongoose");

// Định nghĩa schema cho đơn đặt hàng
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  customerName: {
    type: String,
    enum: [
      "Chờ xác nhận",
      "Chờ lấy hàng",
      "Đang vận chuyển",
      "Hoàn tất",
      "Đã hủy",
    ],
    default: "Chờ xác nhận",
  },
  createdAt: { type: String },
  deliveryInfor: [
    {
      customerName: { type: String },
      deliveryAddress: { type: String },
      deliveryPhoneNumber: { type: String },
    },
  ],
  phone: { type: String },
  address: { type: String },
  paymentMethod: { type: String },
  orderProducts: [
    {
      productId: {
        type: String,
      },
      name: { type: String },
      image: { type: String },
      quantity: {
        type: Number,
      },
      price: { type: Number },
      sale_price: { type: Number },
      rating: [
        {
          isRating: { type: Boolean },
          _isRatingComment: { type: String },
          star: { type: Number },
          content: { type: String },
        },
      ],
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  shippingFee: { type: Number },
  voucher: [
    {
      voucherCode: { type: String },
      amount: { type: Number },
    },
  ],
  finalAmount: { type: Number },
});

module.exports = mongoose.model("order", orderSchema, "order");
