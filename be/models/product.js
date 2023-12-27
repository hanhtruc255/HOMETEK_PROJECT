const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Tạo model
const productSchema = new Schema({
    id:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    rating:{
        type: Number
    },
    description: {
        type: String,
        required: true},
    
    price: {
        type: Number,
        required: true},

    sale_price:{
        type: String
    },

    categoryId:{
        type: String,
        required: true
    },

    sub_categoryId:{
        type: String
    },

    brand_name:{
        type: String,
        required: true
    },

    tech_detail:{
        type: String
    },

    image:{
        type: String,
        required: true
    },

    sub_image:[{
        type: String
    }],

    note:{
        type: String
    },

    created_at:{
        type: Date,
        default: Date.now
    },
    modified_at:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('product',productSchema,'product')