const express=require("express");
const router=express.Router();

const account=require("../controllers/LoginSignup")
const customer=require("../controllers/customer")

router.get('/account/count',customer.getCustomerCount)
router.get('/account/search',customer.searchCustomers)

router.get('/account', customer.getAllCustomer)
// router.get('/getcusdata/:userId', customer.getCustData)

router.post('/login', account.login )
router.post('/register',account.register)

router.delete('/customer/:userId',customer.deleteCustomers)
router.delete('/customer',customer.deleteCustomers)

router.patch('/customer/:userId', customer.updateCustomer)
router.patch('/customer/change/:userId', customer.changePassword)

module.exports=router