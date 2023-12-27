const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Tạo model
const customerSchema = new Schema({
    userId: {
        type: String,
        required: true},
    userName: {
        type: String,
        required: true},
    userEmail: {
        type: String,
        required: true},
    phone: {
        type: String,
        required: true},

    password:{
        type: String,
        required: true},

    address:{
        type: String,
        required: true},

    salt:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('customers',customerSchema,'customers')