// schema
const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
    name: { type: String },
    category: { type: String },
    description: { type: String },
    price: { type: Number },
    discount: { type: Number },
    image_URL: { type: String },
});
// model
const productsModel = mongoose.model("products", productsSchema, "ProductsList");

// export
module.exports = productsModel;