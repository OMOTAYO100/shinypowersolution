const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: 'Others'
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL from Cloudinary
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
