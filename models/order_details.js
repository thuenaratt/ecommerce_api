const mongoose = require('mongoose');

const order_details = new mongoose.Schema({
    inv: {    
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
     },
    total: { type: Number, required: true },
    qyt:{type:Number,required:true},
    description: { type: String },
    // Add more fields as needed
  });
  
  module.exports = mongoose.model('order_details', order_details);