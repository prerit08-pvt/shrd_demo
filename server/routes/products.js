// In routes/products.js
const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth');
const Product = require('../models/Product');

router.post('/add', [auth, isAdmin], async (req, res) => {
  const { name, price, salePrice, description, stock, image } = req.body;
  const product = new Product({
    name,
    price,
    salePrice,
    description,
    stock,
    image,
  });

  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
});

module.exports = router;
