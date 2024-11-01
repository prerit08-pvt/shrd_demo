const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/productController');

const router = express.Router();

// GET /api/products - Get all products
router.get('/', getProducts);

// GET /api/products/:id - Get a product by ID
router.get('/:id', getProductById);

// POST /api/products - Create a new product
router.post('/', createProduct);

module.exports = router;
