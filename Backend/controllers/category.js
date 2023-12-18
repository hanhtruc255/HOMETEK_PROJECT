const Category = require('../models/category');
const Product = require('../models/product');

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    const responseJSON = { data: categories };
    return res.status(200).json(responseJSON);
  } catch (error) {
    return next(error);
  }
};

exports.getSubCategories = async (req, res, next) => {
  const { categoryName } = req.params;

  try {
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const subCategories = category.subCategories;
    return res.status(200).json(subCategories);
  } catch (error) {
    return next(error);
  }
};

exports.getProductsBySubCategory = async (req, res, next) => {
  const { categoryName, subCategoryName } = req.params;

  try {
    const products = await Product.find({ category: categoryName, subCategory: subCategoryName });
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};


//Xóa category
const deleteCategory = (req, res) => {
  Category.findByIdAndDelete(req.params.id).then(category => {
    if(category){
      return res.status(200).json({success: true, message:'The category was deleted'})
    } else{
      return res.status(404).json({success:false, message:'The category was not found'})
    }
  })
};