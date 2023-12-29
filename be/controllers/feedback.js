const express = require("express");
const feedbackRouter = express.Router();
// const md5 = require("md5");
// const { v4: uuidv4 } = require("uuid");

const Feedback = require("../models/feedback");



// const addFeedback = (req, res) => {
//   const { phone, feedback, orderId } = req.body;

//   // Lưu đánh giá vào mảng reviews
//   const review = { phone, feedback, orderId };
//   reviews.push(review);

//   // Trả về phản hồi thành công
//   res.json({ success: true, message: 'Đánh giá của bạn đã được gửi thành công.' });
// };

//Xem feedback
const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// //get feedback
// feedbackRouter.get("", async (req, res) => {
//   Feedback.find({})
//     .then((feedback) => {
//       res.json(feedback);
//     })
//     .catch((err) => {
//       res.json({ Error: err.message });
//     });
// });
// feedbackRouter.delete("", async (req, res) => {
//   Feedback.findByIdAndDelete(req.body._id).then((docs, err) => {
//     if (docs) {
//       res.sendStatus(200);
//     } else {
//       res.sendStatus(404);
//     }
//   });
// });

// //post feedback
// feedbackRouter.post("", async (req, res) => {
//   await Feedback.insertMany(req.body).then((docs, err) => {
//     if (docs) {
//       res.json({ message: "success" });
//     } else {
//       res.json({ message: err });
//     }
//   });
// });

module.exports = {getFeedback}