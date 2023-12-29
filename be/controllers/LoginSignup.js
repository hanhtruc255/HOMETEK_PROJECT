const express=require("express");
const bcrypt =require("bcrypt")

const Acc=require("../models/customer")



async function login(req,res){
    const {phone, password}=req.body; 
        try{
            const existingAccount= await Acc.findOne({phone:phone});
            // console.log("Phone number received:", existingAccount); 
            if(!existingAccount){
                return res.status(404).json({ error: "Account does not exist"});
            }
            let isMatched= await bcrypt.compare(password, existingAccount.password)
            // const isMatched= await Acc.findOne({Password:Password});
            console.log(isMatched)
            if (!!isMatched){
                res.json({message:"Login successfully"})}
            else {
                // Mật khẩu không khớp, đăng nhập thất bại
                res.status(401).json({ error: 'Hey Wrong password' });
            }
        }catch(err){
            res.json({message: "can not login"})
        }

/// đăng ký tài khoản 
}
async function register(req,res){
    const{userName, phone, password}=req.body; 
    console.log("dangky",userName,phone, password)
    try{
        const existingUser = await Acc.findOne({ phone });
        if (!!existingUser){
            console.log("Existing Account:", existingUser);  
            return res.status(409).json({ message: 'Phone number has been registered'});
        }
         // Tạo hashed password
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));

        const NewAccount = new Acc({userName,phone, password: hashedPassword});
        console.log(NewAccount)
        try{
            let newUser = await NewAccount.save();
            console.log(newUser)
            res.status(201).json({ message: 'Register successfully!'});
        }catch(error){
            res.status(500).json({ err: error.message})
        }
    }catch(error){
        res.status(500).json({message:"Can not regieter user"})
    }
}

module.exports={
    login,
    register
}