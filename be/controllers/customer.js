const express=require("express");
const Cust =require("../models/customer")

// tìm kiếm khách hàng
async function searchCustomers(req, res) {
    const query = req.query; // chứa các thông tin tìm kiếm từ query params
  
    try {
      const customers = await Cust.find(query);
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong! Can not search for customers' });
    }
  }

//đém số lượng khachs hàng
async function getCustomerCount(req, res) {
    try {
      const count = await Cust.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong! Can not get customer count' });
    }
  }

// lấy data của customer theo id
const getCustData = async (req, res)=>{
    try{
        let data=await Cust.findById(req.params.id)
        res.json(data)
    }catch(error){
        res.status(500).json({err: error.message})
    }
}
//lấy data của tất cả customer
const getAllCustomer = async(req,res)=>{
    try{
        let alldata= await Cust.find({});
        res.json(alldata);
    }catch(error){  
        res.send(error.message)
    }
}

// xóa customer
async function deleteCustomer(req, res) {
    const customerId = req.params.id; // Lấy id khách hàng từ request params
  
    try {
      const deletedCustomer = await Cust.findByIdAndDelete(customerId); // Tìm và xóa khách hàng theo id
  
      if (!deletedCustomer) {
        return res.status(404).json({ error: 'The customer does not exist' });
      }
  
      res.json({ message: 'Delete successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong! Can not delete this customer' });
    }
  }

// Hàm sửa đổi dữ liệu khách hàng
async function updateCustomer(req, res) {
    const customerId = req.params.id;
    const newData = req.body;

    try {
        const filter = { _id: customerId };
        const update = { $set: newData };

        const result = await Cust.updateOne(filter, update);

        if (result.n === 0) {
        return res.status(404).json({ message: "No customers found" });
        }

        res.status(200).json({ message: "Update successful", result });
    } catch (error) {
        res.status(500).json({ message: "Error updating customer", error: error.message });
    }
}

module.exports={
    searchCustomers,
    getCustomerCount,
    getCustData,
    getAllCustomer, 
    deleteCustomer, 
    updateCustomer,
}
