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
    description: {
        type: String,
        required: true},
    
    price: {
        type: Number,
        required: true},

    sale_price:{
        type: String,
        required: true
    },

    categoryId:{
        type: String,
        required: true
    },

    sub_categoryId:{
        type: String,
        required: true
    },

    brand_name:{
        type: String,
        required: true
    },

    tech_detail:{
        type: String,
        required: true
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
// productSchema.set('toJSON', {
//     transform: function (doc, ret) {
//       ret.id = ret._id;
//       delete ret._id;
//       delete ret.__v;
//       return ret;
//     },
//   });
module.exports = mongoose.model('products',productSchema,'products')