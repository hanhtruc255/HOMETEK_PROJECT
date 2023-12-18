const mongoose = require('mongoose');
const Schema = mongoose.Schema

const subCategorySchema = new Schema({
    name: { 
        type: String, 
        required: true },
  });
  
  const categorySchema = new Schema({
    name: { 
        type: String, 
        required: true },
    subCategories: [subCategorySchema],
  });

module.exports = mongoose.model('Category',categorySchema,'category')

