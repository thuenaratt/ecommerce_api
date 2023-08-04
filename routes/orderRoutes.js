// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { createOrder, list } = require('../services/orderService');

// Quick order route
router.post('/quick-order', createOrder);

// Product listing route
router.get('/list',auth.ensureSignedIn, list);

module.exports = router;
