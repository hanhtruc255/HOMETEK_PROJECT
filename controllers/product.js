const Product = require('../models/product');
// const Category = require('../models/category')

// Lấy tất cả sản phẩm
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Lấy sản phẩm theo ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy sản phẩm theo Category
// const getProductByCate = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Tạo sản phẩm mới

const addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Cập nhật sản phẩm
const updateProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {getAllProducts, addProduct, updateProduct, getProductById}