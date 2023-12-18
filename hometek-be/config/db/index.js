const mongoose = require("mongoose")
async function connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/Web-Team-5")
        console.log("Connected to mongodb successfully!")
    }catch(error){
        console.log("Error", error.message);
    }   
}

module.exports={connect}