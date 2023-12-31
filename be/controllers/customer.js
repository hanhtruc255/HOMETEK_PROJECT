const express = require("express");

const Cust = require("../models/customer");
const bcrypt = require("bcrypt");

// tìm kiếm khách hàng
async function searchCustomers(req, res) {
  const { userId } = req.query; // Lấy userId từ query params

  try {
    const customers = await Cust.find({ userId: userId }); // Truyền userId vào truy vấn
    res.json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong! Can not search for customers" });
  }
}

//đém số lượng khachs hàng
async function getCustomerCount(req, res) {
  try {
    const count = await Cust.countDocuments();
    res.json({ count });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong! Can not get customer count" });
  }
}

//lấy data của tất cá customer
async function getAllCustomer(req, res) {
  try {
    let alldata = await Cust.find({});
    res.json(alldata);
  } catch (error) {
    res.send(error.message);
  }
}

// xóa customer
async function deleteCustomer(req, res) {
  const customerId = req.params.id; // Lấy id khách hàng từ request params

  try {
    const deletedCustomer = await Cust.findByIdAndDelete(customerId); // Tìm và xóa khách hàng theo id

    if (!deletedCustomer) {
      return res.status(404).json({ error: "The customer does not exist" });
    }

    res.json({ message: "Delete successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong! Can not delete this customer" });
  }
}

// Hàm sửa đổi dữ liệu khách hàng
async function updateCustomer(req, res) {
  const customerId = req.params.userId;
  const newData = req.body;

  // nếu mà người có tick vào gender trong trường thông tin/ thấy hơi kì hơi lỏ chỗ đăng ký nhé
  if (newData.gender === true) {
    newData.gender = "Nam";
  } else if (newData.gender === false) {
    newData.gender = "Nữ";
  }

  //nếu người dùng muốn sửa đổi trường userId thì báo lỗi, ai mà cho sửa id :)))
  if (newData.userId) {
    return res.status(400).json({ message: "Cannot update userId" });
  }
  // cái này bỏ vậy thôi, lúc bỏ vào fe đổi mật khẩu thì gắn vào cái hàm changePassword ở dưới nhe
  if (newData.password) {
    return res
      .status(400)
      .json({ message: "Cannot update password in this endpoint" });
  }

  try {
    const filter = { userId: customerId };
    const update = { $set: newData };

    const result = await Cust.updateOne(filter, update);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Customer not found" });
    } else if (result.nModified === 0) {
      return res.status(200).json({ message: "Update unsuccessful", result });
    }
    res.status(200).json({ message: "Update successful", result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating customer", error: error.message });
  }
}

async function changePassword(req, res) {
  const customerId = req.params.userId;
  const { oldPassword, newPassword } = req.body;

  try {
    const existingUser = await Cust.findOne({ userId: customerId });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Kiểm tra mật khẩu hiện tại
    const isMatched = await bcrypt.compare(oldPassword, existingUser.password);
    if (!isMatched) {
      return res.status(401).json({ error: "Wrong current password" });
    }

    // Tạo cáo salt mới
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Mã hóa mật khẩu mới với cãi salt mới nãy tạo á
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // lưu pass mới vô mongodb nè
    existingUser.password = hashedPassword;
    await existingUser.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// async function forgotPassword(req, res) {
//   const { phoneNumber } = req.body;

//   try {
//     const existingUser = await Cust.findOne({ userId: customerId });
//     if (!existingUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Kiểm tra mật khẩu hiện tại
//     const isMatched = await bcrypt.compare(oldPassword, existingUser.password);
//     if (!isMatched) {
//       return res.status(401).json({ error: "Wrong current password" });
//     }

//     // Tạo cáo salt mới
//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);

//     // Mã hóa mật khẩu mới với cãi salt mới nãy tạo á
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     // lưu pass mới vô mongodb nè
//     existingUser.password = hashedPassword;
//     await existingUser.save();

//     res.json({ message: "Password changed successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

module.exports = {
  searchCustomers,
  getCustomerCount,
  getAllCustomer,
  deleteCustomer,
  updateCustomer,
  changePassword,
};
