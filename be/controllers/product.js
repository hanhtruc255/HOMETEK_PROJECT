const Product = require('../models/product');
const bodyParser = require('body-parser');
const Category = require('../models/category')
const Feedback = require('../models/feedback');

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

// Lấy sản phẩm theo note
const getProductByNote = async (req, res) => {
  const {note} = req.params;
  try {
    const notes = await Product.find({ note: { $eq: note } });
    res.json(notes);
  } catch (error) {
    res.status(500).json({error:'Có lỗi'})
  }
}



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
  try {
    console.log(req.params.brand_name)
    const products = await Product.find({ brand_name: req.params.brand_name });
    res.json(products);
  } catch (error) {
    res.status(500).json({error:'Có lỗi'})
  }
}
// Endpoint để lấy đánh giá sản phẩm theo ID
const getProductFeedback = async (req, res) => {
  try {
    const productId = req.params.id;
 
    // Tìm sản phẩm trong danh sách sản phẩm
    // const product = await Product.findOne({ id: productId });
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Sản phẩm không tồn tại' });
    }

    // Tìm đánh giá của sản phẩm trong danh sách đánh giá
    const feedback = await Feedback.findOne({ productId: productId });

    if (!feedback) {
      return res.status(404).json({ error: 'Đánh giá không tồn tại' });
    }

    // Trả về thông tin sản phẩm và đánh giá tương ứng
    return res.json({
      productId: productId,
      product: product,
      feedback: feedback
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi server' });
  }
};



// Tạo sản phẩm mới

const addProduct = async (req, res) => {
  const { id, name, description, price, image, categoryId, brand_name } = req.body;
  const newProduct = new Product({
    id,
    name,
    description,
    price,
    image,
    categoryId, 
    brand_name
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
  const {id, name, description, price, image, categoryId, brand_name } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { id, name, description, price, image, categoryId, brand_name  },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa sản phẩm
const deleteProduct = async(req,res) => {
  try{
    await Product.findOneAndDelete({_id: req.params.id});
    res.send("Success!")

  } catch(err){
    res.json({message: err.message})
  }
}

module.exports = {getAllProducts,getCategory, getCategoryProduct, getSubcategories, getProductBrand, addProduct, updateProduct, getProductById, deleteProduct, getProductFeedback, getProductByNote}