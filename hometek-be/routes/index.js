// const express=require("express");
// const router=express.Router();
const {body, validationResult}=require("express-validator")
const acc_Router = require('./accounts')
const cust_Router = require('./customers')

module.exports={acc_Router,cust_Router}