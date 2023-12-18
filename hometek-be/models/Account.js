const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const Account_Schema = new Schema({
    username:{type: String, require:true, unique:true},
    password:{type:String,require:true},
    Created_At:{type:Date, default: Date.now}
    // Modified_At:{type:Date}

  
}, {
    collection : 'accounts'
});

const AccountModel = mongoose.model('accounts', Account_Schema)
module.exports= AccountModel
