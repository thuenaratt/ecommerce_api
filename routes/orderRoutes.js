// routes/orderRoutes.js
const express = require('express');
const router = express.Router();

const { createOrder, listProducts } = require('../services/orderService');

// Quick order route
router.post('/quick-order', createOrder);

// Product listing route
router.get('/products', listProducts);

module.exports = router;
