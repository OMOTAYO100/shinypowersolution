const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Product = require('../models/Product');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'solar_store_products', // Folder name in your Cloudinary account
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  },
});

const upload = multer({ storage: storage });

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new product (with image upload)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    let imageUrl = '';

    // If a file was uploaded, multer-storage-cloudinary gives us the URL in req.file.path
    if (req.file) {
      imageUrl = req.file.path;
    } else if (req.body.image) {
      // Fallback in case they passed a string URL directly
      imageUrl = req.body.image;
    }

    if (!imageUrl) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const product = new Product({
      name,
      price,
      category,
      description,
      image: imageUrl,
    });

    const savedProduct = await product.save();
    
    // Convert _id to id for frontend compatibility
    const responseProduct = savedProduct.toObject();
    responseProduct.id = responseProduct._id.toString();
    
    // Broadcast to all connected clients
    req.app.get('io').emit('productAdded', responseProduct);
    
    res.status(201).json(responseProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an existing product
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const updateData = { name, price, category, description };

    if (req.file) {
      updateData.image = req.file.path;
    } else if (req.body.image && !req.body.image.startsWith('data:')) {
       // If image is just passed as string URL (and not base64)
       updateData.image = req.body.image;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const responseProduct = updatedProduct.toObject();
    responseProduct.id = responseProduct._id.toString();

    // Broadcast to all connected clients
    req.app.get('io').emit('productUpdated', responseProduct);

    res.json(responseProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Optionally: You could also delete the image from Cloudinary here
    // const publicId = deletedProduct.image.split('/').pop().split('.')[0];
    // await cloudinary.uploader.destroy(`solar_store_products/${publicId}`);

    // Broadcast the deleted ID to all connected clients
    req.app.get('io').emit('productDeleted', req.params.id);

    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
