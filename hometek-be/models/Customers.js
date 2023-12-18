const mongoose= require('mongoose').O;
const Schema=mongoose.Schema;

const Customer_Schema = new Schema({
    userID:{type:String, default: ()=>{ return  `KH${++counter}`}},
    userName:{type: String, require:true},
    userEmail:{type:String},
    Phone_number:{type:Int32Array, require: true},
    password:{type:String},
    userAddress:{type:String},
    salt:{type:String},
    
    createdAt:{type:Date, default: Date.now},
    modifiedAt:{type:Date}

})
const CustomerModel=mongoose.model("customer", Customer_Schema)
module.exports=CustomerModel

// Account:{
//     type: Schema.Types.ObjectId,
//     ref:'accounts'
// },