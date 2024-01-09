    const mongoose = require('mongoose');
    const Schema = mongoose.Schema

const customerSchema = new Schema({
    userId: {
        type: String,
        default: ''},
    userName: {
        type: String,
        required: true},
    phone: {
        type: String,
        required: true},

    password:{
        type: String,
        default: ''},

    address:{
        type: String,
        default: ''},

    salt:{
        type: String,
        // required: true
    },
    // cart: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Cart'
    // }
})

const Cust=mongoose.model("customers", customerSchema)
module.exports=Cust


// module.exports = mongoose.model('customer',customerSchema,'customer')
