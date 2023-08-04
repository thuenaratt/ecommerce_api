// services/orderService.js
const Product = require('../models/products');

const createOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Fetch the product from the database
    const product = await Product.findById(productId);

    // Implement the logic to create an order and process the quick order here

    res.json({ success: true, message: 'Order placed successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Something went wrong!' });
  }
};

const listProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();

    res.json({ success: true, products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Something went wrong!' });
  }
};

module.exports = { createOrder, listProducts };
