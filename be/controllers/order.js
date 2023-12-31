const express = require("express");
const orderRouter = express.Router();

const Order = require("../models/order");

//Xem danh sách đơn đặt hàng:
const getOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Hủy đơn đặt hàng:
const cancelOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    // Tìm đơn đặt hàng trong cơ sở dữ liệu
    const order = await Order.findOne({ orderId });

    // Kiểm tra xem đơn đặt hàng có tồn tại không
    if (!order) {
      return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
    }

    // Kiểm tra xem đơn đặt hàng có thể hủy không (ví dụ: trạng thái là "Chưa xác nhận" hoặc "Đã xác nhận")
    if (order.orderStatus !== "Chờ xác nhận") {
      return res
        .status(400)
        .json({ error: "Không thể hủy đơn đặt hàng ở trạng thái này." });
    }

    // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
    order.orderStatus = "Đã hủy";

    // Lưu lại vào cơ sở dữ liệu
    await order.save();

    // Trả về phản hồi thành công
    res.json({ success: true, message: "Đơn đặt hàng đã được hủy." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Đã có lỗi xảy ra khi hủy đơn đặt hàng." });
  }
};

//Chuyển trạng thái đơn hàng từ đang vận chuyển thành hoàn tất
const transformOrderStatus = async (req, res) => {
  const { orderId } = req.params;

  try {
    // Tìm đơn đặt hàng trong cơ sở dữ liệu
    const order = await Order.findOne({ orderId });

    // Kiểm tra xem đơn đặt hàng có tồn tại không
    if (!order) {
      return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
    }

    // Kiểm tra xem đơn đặt hàng đã vận chuyển chưa
    if (order.orderStatus !== "Đang vận chuyển") {
      return res.status(400).json({
        error: "Không thể chọn nhận hàng cho đơn đặt hàng ở trạng thái này.",
      });
    }

    // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
    order.orderStatus = "Hoàn tất";

    // Lưu lại vào cơ sở dữ liệu
    await order.save();

    // Trả về phản hồi thành công
    res.json({ success: true, message: "Đơn đặt hàng đã hoàn tất." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Đã có lỗi xảy ra khi xác nhận hoàn tất." });
  }
};

//Xác nhận đơn đặt hàng:chuyển trạng thái đơn từ "Chưa xác nhận" sang "Đã xác nhận".
const confirmOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    // Tìm đơn đặt hàng trong cơ sở dữ liệu
    const order = await Order.findOne({ orderId });

    // Kiểm tra xem đơn đặt hàng có tồn tại không
    if (!order) {
      return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
    }

    // Kiểm tra xem đơn đặt hàng có thể hủy không (ví dụ: trạng thái là "Chưa xác nhận" hoặc "Đã xác nhận")
    if (order.status !== "Chưa xác nhận") {
      return res
        .status(400)
        .json({ error: "Không thể xác nhận đơn đặt hàng ở trạng thái này." });
    }

    // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
    order.status = "Đã xác nhận";

    // Lưu lại vào cơ sở dữ liệu
    await order.save();

    // Trả về phản hồi thành công
    res.json({ success: true, message: "Đơn đặt hàng đã được hủy." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Đã có lỗi xảy ra khi hủy đơn đặt hàng." });
  }
};

//Lọc theo trạng thái đơn hàng
const filterOrder = async (req, res) => {
  const { status } = req.params;
  try {
    const orders = await Order.find({ orderStatus: { $eq: status } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Có lỗi" });
  }
};
//Tìm kiếm đơn hàng
const findOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const orders = await Order.find({ orderId: { $eq: orderId } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Có lỗi" });
  }
};
orderRouter.delete("", async (req, res) => {
  Order.findByIdAndDelete(req.body._id).then((docs, err) => {
    if (docs) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = {
  orderRouter,
  cancelOrder,
  getOrder,
  confirmOrder,
  filterOrder,
  findOrder,
  transformOrderStatus,
};

// const express = require("express");
// const orderRouter = express.Router();

// const Order = require("../models/order");

// //Xem danh sách đơn đặt hàng:
// const getOrder = async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// //Hủy đơn đặt hàng:
// const cancelOrder = async (req, res) => {
//   const { orderId } = req.params;

//   try {
//     // Tìm đơn đặt hàng trong cơ sở dữ liệu
//     const order = await Order.findOne({ orderId });

//     // Kiểm tra xem đơn đặt hàng có tồn tại không
//     if (!order) {
//       return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
//     }

//     // Kiểm tra xem đơn đặt hàng có thể hủy không (ví dụ: trạng thái là "Chưa xác nhận" hoặc "Đã xác nhận")
//     if (order.orderStatus !== "Chờ xác nhận") {
//       return res
//         .status(400)
//         .json({ error: "Không thể hủy đơn đặt hàng ở trạng thái này." });
//     }

//     // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
//     order.orderStatus = "Đã hủy";

//     // Lưu lại vào cơ sở dữ liệu
//     await order.save();

//     // Trả về phản hồi thành công
//     res.json({ success: true, message: "Đơn đặt hàng đã được hủy." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Đã có lỗi xảy ra khi hủy đơn đặt hàng." });
//   }
// };

// //Chuyển trạng thái đơn hàng từ đang vận chuyển thành hoàn tất
// const transformOrderStatus = async (req, res) => {
//   const { orderId } = req.params;

//   try {
//     // Tìm đơn đặt hàng trong cơ sở dữ liệu
//     const order = await Order.findOne({ orderId });

//     // Kiểm tra xem đơn đặt hàng có tồn tại không
//     if (!order) {
//       return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
//     }

//     // Kiểm tra xem đơn đặt hàng đã vận chuyển chưa
//     if (order.orderStatus !== "Đang vận chuyển") {
//       return res.status(400).json({
//         error: "Không thể chọn nhận hàng cho đơn đặt hàng ở trạng thái này.",
//       });
//     }

//     // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
//     order.orderStatus = "Hoàn tất";

//     // Lưu lại vào cơ sở dữ liệu
//     await order.save();

//     // Trả về phản hồi thành công
//     res.json({ success: true, message: "Đơn đặt hàng đã hoàn tất." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Đã có lỗi xảy ra khi xác nhận hoàn tất." });
//   }
// };

// //Xác nhận đơn đặt hàng:chuyển trạng thái đơn từ "Chưa xác nhận" sang "Đã xác nhận".
// const confirmOrder = async (req, res) => {
//   const { orderId } = req.params;

//   try {
//     // Tìm đơn đặt hàng trong cơ sở dữ liệu
//     const order = await Order.findOne({ orderId });

//     // Kiểm tra xem đơn đặt hàng có tồn tại không
//     if (!order) {
//       return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
//     }

//     // Kiểm tra xem đơn đặt hàng có thể hủy không (ví dụ: trạng thái là "Chưa xác nhận" hoặc "Đã xác nhận")
//     if (order.status !== "Chưa xác nhận") {
//       return res
//         .status(400)
//         .json({ error: "Không thể xác nhận đơn đặt hàng ở trạng thái này." });
//     }

//     // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
//     order.status = "Đã xác nhận";

//     // Lưu lại vào cơ sở dữ liệu
//     await order.save();

//     // Trả về phản hồi thành công
//     res.json({ success: true, message: "Đơn đặt hàng đã được hủy." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Đã có lỗi xảy ra khi hủy đơn đặt hàng." });
//   }
// };

// //Lọc theo trạng thái đơn hàng
// const filterOrder = async (req, res) => {
//   const { status } = req.params;
//   try {
//     const orders = await Order.find({ orderStatus: { $eq: status } });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: "Có lỗi" });
//   }
// };
// //Tìm kiếm đơn hàng
// const findOrder = async (req, res) => {
//   const { orderId } = req.params;
//   try {
//     const orders = await Order.find({ orderId: { $eq: orderId } });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: "Có lỗi" });
//   }
// };
// orderRouter.delete("", async (req, res) => {
//   Order.findByIdAndDelete(req.body._id).then((docs, err) => {
//     if (docs) {
//       res.sendStatus(200);
//     } else {
//       res.sendStatus(404);
//     }
//   });
// });

// module.exports = {
//   orderRouter,
//   cancelOrder,
//   getOrder,
//   confirmOrder,
//   filterOrder,
//   findOrder,
//   transformOrderStatus,
// };

// // const express = require("express");
// // const orderRouter = express.Router();

// // const Order = require("../models/order");

// // //Xem danh sách đơn đặt hàng:
// // const getOrder = async (req, res) => {
// //   try {
// //     const orders = await Order.find();
// //     res.json(orders);
// //   } catch (error) {
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// // //Hủy đơn đặt hàng:
// // const cancelOrder = async (req, res) => {
// // <<<<<<< HEAD
// //   const { orderId } = req.params;

// //   try {
// //     // Tìm đơn đặt hàng trong cơ sở dữ liệu
// //     const order = await Order.findOne({ orderId });

// //     // Kiểm tra xem đơn đặt hàng có tồn tại không
// //     if (!order) {
// //       return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
// // =======
// //     const { orderId } = req.params;

// //     try {
// //       // Tìm đơn đặt hàng trong cơ sở dữ liệu
// //       const order = await Order.findOne({ orderId });

// //       // Kiểm tra xem đơn đặt hàng có tồn tại không
// //       if (!order) {
// //         return res.status(404).json({ error: 'Không tìm thấy đơn đặt hàng.' });
// //       }

// //       // Kiểm tra xem đơn đặt hàng có thể hủy không (ví dụ: trạng thái là "Chưa xác nhận" hoặc "Đã xác nhận")
// //       if (order.status !== 'Chưa xác nhận' ) {
// //         return res.status(400).json({ error: 'Không thể hủy đơn đặt hàng ở trạng thái này.' });
// //       }

// //       // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
// //       order.status = 'Đã hủy';

// //       // Lưu lại vào cơ sở dữ liệu
// //       await order.save();

// //       // Trả về phản hồi thành công
// //       res.json({ success: true, message: 'Đơn đặt hàng đã được hủy.' });
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ error: 'Đã có lỗi xảy ra khi hủy đơn đặt hàng.' });
// // >>>>>>> d6a17a76179d5d79334882460251f7d5e56cc4a1
// //     }

// //     // Kiểm tra xem đơn đặt hàng có thể hủy không (ví dụ: trạng thái là "Chưa xác nhận" hoặc "Đã xác nhận")
// //     if (order.orderStatus !== "Chờ xác nhận") {
// //       return res
// //         .status(400)
// //         .json({ error: "Không thể hủy đơn đặt hàng ở trạng thái này." });
// //     }

// //     // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
// //     order.orderStatus = "Đã hủy";

// //     // Lưu lại vào cơ sở dữ liệu
// //     await order.save();

// //     // Trả về phản hồi thành công
// //     res.json({ success: true, message: "Đơn đặt hàng đã được hủy." });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Đã có lỗi xảy ra khi hủy đơn đặt hàng." });
// //   }
// // };

// // //Chuyển trạng thái đơn hàng từ đang vận chuyển thành hoàn tất
// // const transformOrderStatus = async (req, res) => {
// //   const { orderId } = req.params;

// //   try {
// //     // Tìm đơn đặt hàng trong cơ sở dữ liệu
// //     const order = await Order.findOne({ orderId });

// //     // Kiểm tra xem đơn đặt hàng có tồn tại không
// //     if (!order) {
// //       return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
// //     }

// //     // Kiểm tra xem đơn đặt hàng đã vận chuyển chưa
// //     if (order.orderStatus !== "Đang vận chuyển") {
// //       return res.status(400).json({
// //         error: "Không thể chọn nhận hàng cho đơn đặt hàng ở trạng thái này.",
// //       });
// //     }

// //     // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
// //     order.orderStatus = "Hoàn tất";

// //     // Lưu lại vào cơ sở dữ liệu
// //     await order.save();

// //     // Trả về phản hồi thành công
// //     res.json({ success: true, message: "Đơn đặt hàng đã hoàn tất." });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Đã có lỗi xảy ra khi xác nhận hoàn tất." });
// //   }
// // };

// // //Xác nhận đơn đặt hàng:chuyển trạng thái đơn từ "Chưa xác nhận" sang "Đã xác nhận".
// // const confirmOrder = async (req, res) => {
// //   const { orderId } = req.params;

// //   try {
// //     // Tìm đơn đặt hàng trong cơ sở dữ liệu
// //     const order = await Order.findOne({ orderId });

// //     // Kiểm tra xem đơn đặt hàng có tồn tại không
// //     if (!order) {
// //       return res.status(404).json({ error: "Không tìm thấy đơn đặt hàng." });
// //     }

// //     // Kiểm tra xem đơn đặt hàng có thể hủy không (ví dụ: trạng thái là "Chưa xác nhận" hoặc "Đã xác nhận")
// //     if (order.status !== "Chưa xác nhận") {
// //       return res
// //         .status(400)
// //         .json({ error: "Không thể xác nhận đơn đặt hàng ở trạng thái này." });
// //     }

// //     // Chuyển trạng thái đơn đặt hàng sang "Đã hủy"
// //     order.status = "Đã xác nhận";

// //     // Lưu lại vào cơ sở dữ liệu
// //     await order.save();

// //     // Trả về phản hồi thành công
// //     res.json({ success: true, message: "Đơn đặt hàng đã được hủy." });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Đã có lỗi xảy ra khi hủy đơn đặt hàng." });
// //   }
// // };

// // //Lọc theo trạng thái đơn hàng
// // const filterOrder = async (req, res) => {
// //   const { status } = req.params;
// //   try {
// //     const orders = await Order.find({ status: { $eq: status } });
// //     res.json(orders);
// //   } catch (error) {
// //     res.status(500).json({ error: "Có lỗi" });
// //   }
// // };
// // //Tìm kiếm đơn hàng
// // const findOrder = async (req, res) => {
// //   const { orderId } = req.params;
// //   try {
// //     const orders = await Order.find({ orderId: { $eq: orderId } });
// //     res.json(orders);
// //   } catch (error) {
// //     res.status(500).json({ error: "Có lỗi" });
// //   }
// // };
// // orderRouter.delete("", async (req, res) => {
// //   Order.findByIdAndDelete(req.body._id).then((docs, err) => {
// //     if (docs) {
// //       res.sendStatus(200);
// //     } else {
// //       res.sendStatus(404);
// //     }
// //   });
// // });

// // module.exports = {
// //   orderRouter,
// //   cancelOrder,
// //   getOrder,
// //   confirmOrder,
// //   filterOrder,
// //   findOrder,
// //   transformOrderStatus,
// // };
