const mongoose = require('mongoose');
// services/orderService.js
const Product = require('../models/products');
const orders =require("../models/orders")
const order_details=require("../models/order_details")


const createOrder = async (req, res) => {
  try {
    const { products } = req.body;

    if(!products) return res.json({msg:"Product Require"});

    const n_order=await orders.countDocuments() + 1 ;


    const newOrder= new orders({
      total:0,
      inv_no:`ORD${n_order.toString().padStart(9, '0')}`
    })

    const saveData=await newOrder.save()
    for (const  item of products){
      const GonnaAddProduct=await Product.aggregate([
        {
          "$match": {
            _id: mongoose.Types.ObjectId(item.productId),
          }
        },
        {
          $lookup: {
            from: "prices",
            localField: "_id",
            foreignField: "product",
            as: "prices"
          }
        }
      ])
      

      console.log( GonnaAddProduct[0].prices );
      
      if(GonnaAddProduct){
        const tmpOrderDetail=new order_details({
          inv:saveData._id,
          qyt:item.qyt,
          description:item.description,
          total:GonnaAddProduct[0]?.prices[0]?.price ? item.qyt * GonnaAddProduct[0]?.prices[0]?.price : 0
        })
  
        
        await tmpOrderDetail.save();

      }


    }

    const newOrdered=await orders.aggregate([
      {
        "$match": {
          _id: mongoose.Types.ObjectId(saveData._id),
        }
      },
      {
        $lookup: {
          from: "order_details",
          localField: "_id",
          foreignField: "inv",
          as: "invoice_details"
        }
      }
    ])


    res.json({ success: true, message: 'Order placed successfully!' ,data:newOrdered});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Something went wrong!' });
  }
};
 
const  list=async (req,res)=>{
  try{  
    const Orders=await orders.aggregate([
      {
        $lookup: {
          from: "order_details",
          localField: "_id",
          foreignField: "inv",
          as: "order_details"
        }
      }
    ])
    res.json({ success: true, message: 'Order List successfully!' ,data:Orders});
  }catch(err){
    console.error(err);
    res.status(500).json({ success: false, error: 'Something went wrong!' });
  }
}

module.exports = { createOrder, list };
