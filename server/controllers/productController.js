const Product = require('../models/Product');

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 

// POST create a new product
const createProduct = async (req, res) => {
  const { name, description, maxPrice, salePrice, image, createdAt, stock } = req.body;

  try {
    const product = new Product({
      name,
      description,
      maxPrice,
      salePrice,
      image,
      category,
      stock,
      createdAt,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct };
