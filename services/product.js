
const Products = require("../models/products")
var mongoose = require('mongoose');

const findById = async (id) => {
  const products = await Products.aggregate([
    {
      "$match": {
        _id: mongoose.Types.ObjectId(id),
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
  
  if (!products?.length)
  return null
  
  return products[0]
}

const findAll = async (category = '', item = '') => {
  
  
  return await Products.aggregate([ {
    $lookup: {
      from: "categories",
      localField: "category",
      foreignField: "_id",
      as: "category"
    }
  },
  {
    $lookup: {
      from: "items",
      localField: "_id",
      foreignField: "category",
      as: "items"
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "user",
      foreignField: "_id",
      as: "user"
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
]).exec();
}

const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return createdProduct;
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to doF
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}