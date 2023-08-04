const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    // Add more fields as needed
  });
  
  module.exports = mongoose.model('Product', Order);