const Prices = require("../models/prices");

const findAll = async (newPrice) => {
  try{
    const prices = await Prices.find();
    return {
        success: true,
        data: prices
    }
}catch(e){
    return {
        success: false,
        Error: e.message
    }
}
}

const create = async (newPrice) => {
  // to do
  const createdPrice = await Prices.create(newPrice);
  return createdPrice;
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to doF
}

module.exports = {
  update,
  remove,
  findAll,
  create,
}