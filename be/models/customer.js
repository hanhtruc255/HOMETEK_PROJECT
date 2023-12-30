const mongoose = require('mongoose');
const Schema = mongoose.Schema

const customerSchema = new Schema({
    LoginStatus:{ 
        type: Boolean,
        default: false,},
    userId: {
        type: String,
        unique:true},
    userName: {
        type: String,
        required: true},
    phone: {
        type: String,
        required: true},

    password:{
        type: String,
        default: ''},
    gender:{type: String,
        default: ""},
    address:{
        type: String,
        default: ''},
})

const Cust=mongoose.model("customers", customerSchema)
module.exports=Cust