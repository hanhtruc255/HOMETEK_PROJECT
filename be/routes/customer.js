const express = require("express");
const router = express.Router();

const account = require("../controllers/LoginSignup");
const customer = require("../controllers/customer");

router.get("/account/count", customer.getCustomerCount);
router.get("/account/search", customer.searchCustomers); // cái này là nhập vào để tìm

router.get("/account", customer.getAllCustomer);
// router.get('/getcusdata/:userId', customer.getCustData) // cái này là định là bỏ userId trên LOCALHOST Á mà e thây cái này vô tri :)) nên bỏ hàm đó r , cần thì nói e nhá

router.post("/login", account.login);
router.post("/register/findPhone", account.findPhoneNumber); // cái này để tìm sdt nè, chỉ nhận giá trị phone thôi
router.post("/register", account.register);

router.delete("/customer/:userId", customer.deleteCustomer);

router.patch("/customer/:userId", customer.updateCustomer);
router.patch("/customer/change/:userId", customer.changePassword);

module.exports = router;
