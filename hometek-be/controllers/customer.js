const {body, validationResult}=require("express-validator")

const getAllCus = async(req,res)=>{
    res.send("lay duoc roi ne ALL ")
}
const getCusByID = async(req,res)=>{
    res.send("lay duoc roi ne ID")
}
const updateCus = async(req,res)=>{
    res.send("lay duoc roi ne")
}
const insertCus = async(req,res)=>{
    res.send("lay duoc roi ne")
}

module.exports={getAllCus, getCusByID, updateCus, insertCus}

