const {body, validationResult}=require("express-validator")

const login =  async(req,res) => {
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {phone_number, password}=req.body
    // validation
    res.send('da dang nhap nha  LOGIN');
}

const register= async(req,res)=>{
    res.send('Post REGISTER')
}

const getDetailAcc=async(req,res)=>{

}

module.exports={login, register,getDetailAcc}