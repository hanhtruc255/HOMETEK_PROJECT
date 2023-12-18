const express=require("express");
const router=express.Router();

// const User=require('../models/Customers')
const {customerController} = require('../controllers/index')

router.get('/',customerController.getAllCus
)

router.get('/:id', customerController.getCusByID)

router.patch('/update', customerController.updateCus)
router.post('/insert', customerController.insertCus)

module.exports=router;

// put tim thay doi tuong can upatde, neu khong thay thi khong lam gi 
//patch neu khong tim thay doi tuong se tao moi 

// router.get('/:id',(req,res)=>{
//     debugger
//     res.send('get id cua customer a'+req.params.id)
// })