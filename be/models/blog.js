const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Tạo model
const blogSchema = new Schema({
  blogId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  sub_image: {
    type: String,
  },

  imageTitle: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    // default: Date.now
  },
});
module.exports = mongoose.model("blog", blogSchema, "blog");
