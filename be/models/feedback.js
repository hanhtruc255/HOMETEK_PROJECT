const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema({
    orderId: { type: String, required: true },
    username: { type: String },
    phone: { type: String, required: true },
    feedback: { type: String, required: true },
    createdAt: { type: Date, default: Date.now } // Thêm trường thời gian tạo
});

module.exports = mongoose.model('feedback', FeedbackSchema, 'feedback');