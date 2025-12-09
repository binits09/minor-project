const mongoose = require("mongoose");

const productschema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        inStock: { type: Boolean, required: true },
    },
    {timestamps:true}
);
module.exports = mongoose.model('Product',productschema);