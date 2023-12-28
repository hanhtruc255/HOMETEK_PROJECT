const express = require("express");
const feedbackRouter = express.Router();
// const md5 = require("md5");
// const { v4: uuidv4 } = require("uuid");

const Feedback = require("../models/feedback");


//Xem feedback
const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
//Xem chi tiết feedback
const getFeedbackDetail = async (req, res) => {
  const {feedbackId} = req.params;
  try {
    const blog = await Feedback.find({ feedbackId: { $eq: feedbackId } });
    res.json(blog);
  } catch (error) {
    res.status(500).json({error:'Có lỗi'})
  }
}
//Xóa feedback
const deleteFeedback = async (req, res) => {
  const feedbackId = req.params.feedbackId;
  try {
    const deletedFeedback = await Feedback.findOneAndDelete({ feedbackId });
    if (! deletedFeedback) {
      return res.status(404).json({ message: 'Không tìm thấy đánh giá.' });
    }
    return res.json({ message: 'Xóa đánh giá thành công.', deletedFeedback });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server.' });
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

module.exports = {getFeedback, deleteFeedback, getFeedbackDetail}