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
            const isMatched= await bcrypt.compare(password, existingAccount.password)
            // const isMatched= await Acc.findOne({Password:Password});
            console.log(isMatched)
            if (isMatched) {
                // Cập nhật trạng thái đăng nhập thành công
                existingAccount.LoginStatus = true;
                await existingAccount.save();
          
                res.json({ message: "Login successfully" });
            } else {
                // Mật khẩu không khớp, đăng nhập thất bại
                res.status(401).json({ error: "Hey Wrong password" });
            }
        }catch(err){
            res.json({message: "can not login"})
        }

}

const generateUserId = async () => {
    const randomNumber = Math.floor(100 + Math.random() * 900); // Tạo số ngẫu nhiên từ 100 đến 999
    const userId = `KH${randomNumber}`;
    const existingUser = await Acc.findOne({ userId });
  
    if (existingUser) {
      // Nếu userId đã tồn tại, gọi đệ quy để tạo lại mã mới
      return generateUserId();
    }
  
    return userId;
};
/// đăng ký tài khoản 
async function register(req, res) {
    const { userName, phone, password } = req.body;
    console.log("dangky", userName, phone, password);
  
    try {
      const existingUser = await Acc.findOne({ phone:phone });
  
      if (existingUser) {
        console.log("Existing Account:", existingUser);
        return res.status(409).json({ message: 'Phone number has been registered' });
      }
  
      const userId = await generateUserId(); // Tạo userId mới
  
      const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
  
      const newAccount = new Acc({ userId, userName, phone, password: hashedPassword });
  
      try {
        let newUser = await newAccount.save();
        console.log("newuser", newUser);
        res.status(201).json({ message: 'Register successfully!' });
      } catch (error) {
        res.status(500).json({ err: error.message });
      }
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "Can not register user" });
    }
  }

module.exports={
    login,
    register,
    generateUserId
}