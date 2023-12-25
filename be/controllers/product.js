const Product = require('../models/product');
const bodyParser = require('body-parser');
const Category = require('../models/category')

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
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Lấy tất cả danh mục
const getCategory = async (req, res) => {
  Category.find({})
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json({ Error: err.message });
    });
};
//Lấy danh mục lớn
const getCategoryProduct = async (req, res) => {
  Product.find({ categoryId: req.params.id })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json({ Error: err.message });
    });
};

//Lấy danh mục subcategory

const getSubcategories = async (req, res) => {
  try {
    const products = await Product.find({ sub_categoryId: req.params.id });
    res.json(products);
  } catch (err) {
    res.json({ Error: err.message });
  }
};

//Lọc theo nhãn hàng
const getProductBrand = async (req, res) => {
  const {brand_name} = req.params;
  try {
    const products = await Product.find({ brand_name: { $eq: brand_name } });
    res.json(products);
  } catch (error) {
    res.status(500).json({error:'Có lỗi'})
  }
}

// Tạo sản phẩm mới

const addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
  });

  try {
    let savedProduct = await newProduct.save();
    console.log(savedProduct)
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Cập nhật sản phẩm -- PATCH

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

//Xóa sản phẩm
const deleteProduct = async(req,res) => {
  try{
    await Product.deleteOne({_id: req.params.id});
    res.send("Success!")

  } catch(err){
    res.json({message: err.message})
  }
}

module.exports = {getAllProducts,getCategory, getCategoryProduct, getSubcategories, getProductBrand, addProduct, updateProduct, getProductById, deleteProduct}