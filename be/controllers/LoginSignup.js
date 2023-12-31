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

// HÀM NÀY ĐỂ TẠO ID TỰ ĐỘNG 
async function generateUserId() {
  const randomNumber = Math.floor(100 + Math.random() * 900); // Tạo số ngẫu nhiên từ 100 đến 999
  const userId = `KH${randomNumber}`;
  const existingUser = await Acc.findOne({ userId });

  if (existingUser) {
    // Nếu userId đã tồn tại, gọi đệ quy để tạo lại mã mới
    return generateUserId();
  }
  return userId;
};

// hàm này để tìm số diện thoại trong cơ sở dữ liệu
async function findPhoneNumber(req, res) {
const { phone } = req.body;

try {
  const existingUser = await Acc.findOne({ phone });

  if (existingUser) {
    console.log("Existing Account:", existingUser);
    return res.status(409).json({ message: 'Số diện thoại đã được đăng ký' });
  }

  // Số điện thoại không tồn tại trong cơ sở dữ liệu
  return res.status(200).json({ phone });
} catch (error) {
  console.log(error);
  return res.status(500).json({ message: "lỗi server, không thực hiện tìm kiém được " });
}
}

/// đăng ký tài khoản // luu vao database a
async function register(req, res) {
const { userName, phone, password, OTP } = req.body;
  
try {

  if (OTP === true) {
    const userId = await generateUserId(); // gọi hàm Tạo userId mới
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS)); // mã hóa mk 

    const newAccount = new Acc({ userId, userName, phone, password: hashedPassword });// cái này là chốt newuser mới 

    try {
      let newUser = await newAccount.save();
      console.log("newuser", newUser);
      res.status(201).json({ message: 'Đăng ký thành công !' });
    } catch (error) {
      res.status(500).json({ err: error.message });
    }
  } else {
    res.status(400).json({ message: 'OTP không hợp lệ' });
  }
} catch (error) {
    console.log(error)
  res.status(500).json({ message: "không đăng ký dược " });
}
}

module.exports={
  login,
  register,
  generateUserId, 
  findPhoneNumber
}