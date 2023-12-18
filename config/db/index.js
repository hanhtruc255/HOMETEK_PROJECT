const mongoose = require("mongoose");
require('dotenv/config');
async function connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/store_data");
        console.log("Connected successfully")
    }catch (error){
        console.log("Error", error.message)
    }
}
module.exports ={connect}