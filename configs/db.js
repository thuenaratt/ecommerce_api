const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb+srv://thuenaratt:P56JsJaUm7za6KL@narratdb.pqz075u.mongodb.net/ecommerce?retryWrites=true&w=majority', {
      autoIndex: true,
      serverSelectionTimeoutMS: 30000 // default 30 seconds
    });
    console.log("MongoDB connected~");
  } catch (err) {
    console.log("Mongoose: ", err);
  }
}
