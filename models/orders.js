const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    inv_no: { type: String, required: true },
    total: { type: Number, required: true },
    // Add more fields as needed
  });
  
  module.exports = mongoose.model('orders', Order);