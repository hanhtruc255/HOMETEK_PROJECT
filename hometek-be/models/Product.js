const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:Number},
    category:{type:String},
    sub_category:{type:String},
    brand_name:{type:String},
    description:{type:String},
    createdAt:{type:Date},
    modifiedAt:{type:Date}

})

module.exports=mongoose.model('products', Product);
