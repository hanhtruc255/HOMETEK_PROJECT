const {body, validationResult}=require("express-validator")
const accountController = require("./account");
const customerController = require("./customer")

module.exports={accountController,customerController}