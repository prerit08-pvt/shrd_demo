const express = require('express');
const Product = require('../models/Product');
const upload = require('../middlewares/upload');
const router = express.Router();

// Add new product
router.post('/add-product', upload.single('image'), async (req, res) => {
  try {
    const { name, description, maxPrice, salePrice, stock } = req.body;

    const newProduct = new Product({
      name,
      description,
      maxPrice,
      salePrice,
      stock,
      image: req.file ? `/uploads/products/${req.file.filename}` : '', // Save image path
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product', error });
  }
});

// Get all products (Admin use)
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// Update product details (Admin use)
router.put('/product/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, description, maxPrice, salePrice, stock } = req.body;
    const updateFields = {
      name,
      description,
      maxPrice,
      salePrice,
      stock,
    };

    if (req.file) {
      updateFields.image = `/uploads/products/${req.file.filename}`; // Update image if provided
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateFields, { new: true });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product', error });
  }
});

// Delete product
router.delete('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
});

module.exports = router;
