const express=require("express");
const router=express.Router();

const account=require("../controllers/LoginSignup")
const customer=require("../controllers/customer")

router.get('/account/count',customer.getCustomerCount)
router.get('/account/search',customer.searchCustomers)

router.get('/account', customer.getAllCustomer)
router.get('/:id', customer.getCustData)    

router.post('/login', account.login )
router.post('/register',account.register)

// router.delete('/customer/:id',customer.deleteCustomer)
// router.delete('/customer',customer.deletemany)
router.delete('/customer/:id',customer.deleteCustomer)

router.patch('/customer/:id', customer.updateCustomer)

module.exports=router