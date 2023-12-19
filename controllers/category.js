const Category = require('../models/category');
const Product = require('../models/product');

//Lấy tất cả danh mục
const getAllCategories = async (req, res) => {
  Category
    .find({})
    .then((categories) => {
      return res.json(categories);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

//Lấy danh mục và sản phẩm
const getCategoyProduct = async (req, res) => {
  Category
    .find({})
    .then((categories) => {
      return res.json(categories);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {getAllCategories};