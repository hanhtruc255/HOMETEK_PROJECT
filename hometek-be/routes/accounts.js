const express=require("express");
const router=express.Router();
const {body, validationResult}=require("express-validator")
const {accountController} = require('../controllers/index')


// const User=require('../models/Account')

router.get('/:id', accountController.getDetailAcc)

router.post('/login',
    // sdt va password
    body('phone_number').isMobilePhone(),
    body('password').isLength({min:8}),
    accountController.login
)

router.post('/register',accountController.register)

module.exports=router;



