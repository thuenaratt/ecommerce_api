const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ecommerce', {
      autoIndex: true,
      serverSelectionTimeoutMS: 30000 // default 30 seconds
    });
    console.log("MongoDB connected~");
  } catch (err) {
    console.log("Mongoose: ", err);
  }
}

//mongodb+srv://thuenaratt:P56JsJaUm7za6KL@narratdb.pqz075u.mongodb.net/ecommerce?retryWrites=true&w=majority